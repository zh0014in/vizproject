import urllib2
import urllib
import tarfile
import os
import xml.etree.ElementTree as ET
import xml.sax as sax
from xml.dom.minidom import parse
import xml.dom.minidom as minidom


def downloadFiles():
    url = "http://acl-arc.comp.nus.edu.sg/archives/acl-arc-160301-parscit/"
    data = urllib2.urlopen(url+'files.txt')
    testfile = urllib.URLopener()
    for line in data:
        line = line.strip(' \t\n\r')
        if line.endswith('.tgz:'):
            print line
            testfile.retrieve(url+line[:-1], "files/"+line[:-1])


def isFile(object):
    try:
        os.listdir(object)
        return False
    except Exception:
        return True


def extractFiles():
    objects = os.listdir("files/")
    for i in objects:
        if isFile("files/" + i):
            tar = tarfile.open("files/"+i)
            tar.extractall("extract/")
            tar.close()


files = []
objects = os.listdir("extract/")
for c in objects:
    cObjects = os.listdir("extract/"+c)
    for conference in cObjects:
        xmls = os.listdir("extract/"+c+"/"+conference)
        for xml in xmls:
            files.append("extract/" + c + "/" + conference + "/" + xml)
            # print xml
            # tree = ET.parse("extract/"+c+"/"+conference+"/"+xml)
            # root = tree.getroot()


class MovieHandler(sax.ContentHandler):
    def __init__(self):
        self.CurrentData = ""
        self.author = ""
        self.affiliation = ""
        self.rating = ""
        self.stars = ""
        self.description = ""

    # Call when an element starts
    def startElement(self, tag, attributes):
        self.CurrentData = tag
        if tag == "algorithm":
            print "*****algorithm*****"
            # title = attributes["title"]
            # print "Title:", title

    # Call when an elements ends
    def endElement(self, tag):
        if self.CurrentData == "author":
            print "author:", self.author
        elif self.CurrentData == "affiliation":
            print "affiliation:", self.affiliation
        self.CurrentData = ""

    # Call when a character is read
    def characters(self, content):
        if self.CurrentData == "author":
            self.author = content
        elif self.CurrentData == "affiliation":
            self.affiliation = content


# create an XMLReader
# parser = sax.make_parser()
# # turn off namepsaces
# parser.setFeature(sax.handler.feature_namespaces, 0)

# # override the default ContextHandler
# Handler = MovieHandler()
# parser.setContentHandler(Handler)

def getConfidence(tag):
    if tag.hasAttribute("confidence"):
        return tag.getAttribute("confidence")


def getNo(tag):
    if tag.hasAttribute("no"):
        return tag.getAttribute("no")


def getData(tag):
    return tag.childNodes[0].data


papers = []

for file in files:
    # print file
    paper = {}
    # Open XML document using minidom parser
    try:
        DOMTree = minidom.parse(file)
    except Exception as e:
        # print e
        print file
        pass
    collection = DOMTree.documentElement
    # if collection.hasAttribute("version"):
    # print "version : %s" % collection.getAttribute("version")

    # Get all the algorithms in the collection
    algorithms = collection.getElementsByTagName("algorithm")

    # Print detail of each algorithm.
    for algorithm in algorithms:
        algorithmName = algorithm.getAttribute("name")
        # print "*****algorithm + " + algorithmName + "*****"

        if algorithmName == "SectLabel":
            SectLabel = {}
            variant = algorithm.getElementsByTagName('variant')[0]
            SectLabel[variant] = {}
            SectLabel[variant]["confidence"] = getConfidence(variant)
            SectLabel[variant]["no"] = getNo(variant)

            titles = variant.getElementsByTagName('title')
            SectLabel[variant]['title'] = []
            for title in titles:
                SectLabel[variant]['title'].append({
                    "confidence": getConfidence(title),
                    "value": getData(title)
                })

            authors = variant.getElementsByTagName('author')
            SectLabel[variant]['author'] = []
            for author in authors:
                SectLabel[variant]['author'].append({
                    "confidence": getConfidence(author),
                    "value": getData(author)
                })

        elif algorithmName == "ParsHed":
            # variant = algorithm.getElementsByTagName('variant')[0]
            # if(variant.hasAttribute("confidence")):
            #     print variant.getAttribute("confidence")
            pass

        elif algorithmName == "ParsCit":
            citationList = algorithm.getElementsByTagName('citationList')[0]

            pass
        else:
            print 'missed'
    # parser.parse(file)
    # tree = ET.parse(file)
    # root = tree.getroot()
