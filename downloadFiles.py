import os
import urllib2
import urllib
import tarfile

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

downloadFiles()
extractFiles()