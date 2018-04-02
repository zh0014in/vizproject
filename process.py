import os
import xml.etree.ElementTree as ET
import xml.sax as sax
from xml.dom.minidom import parse
import xml.dom.minidom as minidom
import json
import csv
import sys

if len(sys.argv) == 2:
    confidenceLimit = sys.argv[1]
else:
    confidenceLimit = 0.9


files = []
objects = os.listdir("extract/")
for c in objects:
    cObjects = os.listdir("extract/"+c)
    for conference in cObjects:
        xmls = os.listdir("extract/"+c+"/"+conference)
        for xml in xmls:
            files.append("extract/" + c + "/" + conference + "/" + xml)


def getConfidence(tag):
    if tag.hasAttribute("confidence"):
        return float(tag.getAttribute("confidence"))

def getValid(tag):
    if tag.hasAttribute("valid"):
        return tag.getAttribute("valid")


def getNo(tag):
    if tag.hasAttribute("no"):
        return tag.getAttribute("no")


def getData(tag):
    if len(tag.childNodes) > 0:
        return tag.childNodes[0].data
    return ''
    

def getConfidenceAndValueAsArray(SectLabel, variant, tag):
    values = variant.getElementsByTagName(tag)
    SectLabel[tag+"s"] = []
    for value in values:
        if getConfidence(value) >= confidenceLimit:
            SectLabel[tag+"s"].append(getData(value))

def getConfidenceAndValueAsDict(SectLabel, variant, tag):
    values = variant.getElementsByTagName(tag)
    SectLabel[tag] = {}
    if len(values) > 0:
        if len(values) > 1:
            print tag + " has more than 1 instances"
        if getConfidence(values[0]) >= confidenceLimit:
            SectLabel[tag] = getData(values[0])        

def getCitationAsArray(c, citation, tag):
    titles = citation.getElementsByTagName(tag)
    c[tag+"s"] = []
    if titles is not None:
        for title in titles:
            t = getData(title)
            c[tag+"s"].append(t)

def getCitationAsDict(c, citation, tag):
    titles = citation.getElementsByTagName(tag)
    c[tag] = {}
    if len(titles) > 0:
        if len(titles) > 1:
            print tag + " has more than 1 instances"
        c[tag] = getData(titles[0])

papers = []
problemFiles = []

def processPaper(collection, paper):
    # Get all the algorithms in the collection
    algorithms = collection.getElementsByTagName("algorithm")

    # Print detail of each algorithm.
    for algorithm in algorithms:
        algorithmName = algorithm.getAttribute("name")
        # print "*****algorithm + " + algorithmName + "*****"

        if algorithmName == "SectLabel":
            SectLabel = {}
            variant = algorithm.getElementsByTagName('variant')[0]
            if getConfidence(variant) >= confidenceLimit:
                SectLabel["no"] = getNo(variant)

                # getConfidenceAndValueAsArray(SectLabel, variant, 'variant', 'title')
                # getConfidenceAndValueAsArray(SectLabel, variant, 'variant', 'author')
                getConfidenceAndValueAsArray(SectLabel, variant, 'affiliation')
                # getConfidenceAndValueAsArray(SectLabel, variant, 'variant', 'address')
                # getConfidenceAndValueAsArray(SectLabel, variant, 'variant', 'email')
                paper['SectLabel'] = SectLabel
        elif algorithmName == "ParsHed":
            # info about current paper
            ParsHed = {}
            variant = algorithm.getElementsByTagName('variant')[0]
            if getConfidence(variant) >= confidenceLimit:
                ParsHed["no"] = getNo(variant)

                getConfidenceAndValueAsArray(ParsHed, variant, 'title')
                getConfidenceAndValueAsArray(ParsHed, variant, 'author')
                getConfidenceAndValueAsArray(ParsHed, variant, 'abstract')
                getConfidenceAndValueAsArray(ParsHed, variant, 'address')
                getConfidenceAndValueAsArray(ParsHed, variant, 'email')
                getConfidenceAndValueAsArray(ParsHed, variant, 'affiliation')
                getConfidenceAndValueAsDict(ParsHed, variant, 'web')
                paper['ParsHed'] = ParsHed
            pass

        elif algorithmName == "ParsCit":
            paper['citations'] = []
            citationList = algorithm.getElementsByTagName('citationList')[0]
            citations = citationList.getElementsByTagName('citation')
            for citation in citations:
                if getValid(citation) == 'true':
                    c = {}

                    getCitationAsArray(c, citation, 'author')
                    getCitationAsDict(c, citation, 'title')
                    getCitationAsDict(c, citation, 'booktitle')
                    getCitationAsDict(c, citation, 'location')
                    getCitationAsDict(c, citation, 'marker')
                    getCitationAsDict(c, citation, 'journal')

                    paper['citations'].append(c)
            pass
        else:
            print 'missed'
    papers.append(paper)

def process(files):
    for file in files[0:50]:
        # print file
        paper = {}
        # Open XML document using minidom parser
        try:
            DOMTree = minidom.parse(file)
        except Exception as e:
            print e
            print file
            problemFiles.append(file)
            pass
        collection = DOMTree.documentElement
        
        conferenceName = file.split("/")[2]
        year = conferenceName[1:]
        if int(year) > 18:
            year = "19"+year
        else:
            year = "20"+year
        paper["conference"] = conferenceName
        paper["year"] = int(year)

        processPaper(collection, paper)


def processProblemFiles():
    data = json.load(open('problemFiles.json'))

    for file in data:
        with open(file, 'r') as f:
            lines = f.readlines()
            newLines = []
            for line in lines:
                if line.startswith("<email") and line.strip().endswith(">"):
                    # print line
                    line = line.replace("&", ";")
                    line = line.replace("<surname>", "surname_replace")
                    line = line.replace("<firstname>", "firstname_replace")
                    line = line.replace("<lastname>", "lastname_replace")
                    line = line.replace("<firstName>", "firstname_replace")
                    line = line.replace("<lastName>", "lastname_replace")
                    line = line.replace("<dougb", "dougb")
                    line = line.replace("<12.45>", "12.45")
                    line = line.replace("<blackljlaffIroukos>", "blackljlaffIroukos")
                    line = line.replace("<firstname.lastname>", "firstname.lastname_replace")
                    line = line.replace("<sanae@kecl.cslab.ntt.co.jp>", "sanae@kecl.cslab.ntt.co.jp")
                    line = line.replace("<surename>", "surename_replace")
                    line = line.replace("<markus.kreuzthaler,stefan.schulz>", "markus.kreuzthaler,stefan.schulz")
                    line = line.replace("<http", "http")
                    line = line.replace("<vramanarayanan,suendermann-oeft,aivanou,kevanini>", "vramanarayanan,suendermann-oeft,aivanou,kevanini")
                newLines.append(line)
        with open(file, 'w') as f:
            f.writelines(newLines)
    process(data)

process(files)
# processProblemFiles()

with open('data1.json', 'w') as outfile:
    json.dump(papers, outfile)

# keys = papers[0].keys()
# with open('data.csv', 'wb') as output_file:
#     dict_writer = csv.DictWriter(output_file, keys)
#     dict_writer.writeheader()
#     dict_writer.writerows(papers)

# with open('problemFiles.json', 'w') as outfile:
#     json.dump(problemFiles, outfile)