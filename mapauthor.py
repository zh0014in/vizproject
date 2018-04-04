import re
import json

with open('goodAuthors.txt', 'r') as f:
    goodAuthors = f.read().splitlines()

authormappings = json.load(open('authormappings.json'))

with open('wrongauthors.txt', 'r') as f:
    wrongAuthors = f.read().splitlines()

def addToGoodAuthors(name):
    if len(re.findall(r'\w+', name.strip())) > 1 and len(re.findall(r'\w+', name.strip())) <= 3 and len(name) > 1:
        if name.strip() not in goodAuthors:
            goodAuthors.append(name.strip())
            return True
    return False

def checkNameInString(name, string):
    if name in string:
        for subString in [a.strip() for a in string.split(name)]:
            if len(subString) == 1:
                return False
        return True
    return False

def splitStringByName(name, string):
    for au in [a.strip() for a in string.split(name)]:
        addToGoodAuthors(au)


def preprocess():
    for author in wrongAuthors:
        for ga in goodAuthors:
            if checkNameInString(ga, author):
                # splitStringByName(ga, author)
                author = author.replace(ga, "")
        addToGoodAuthors(author)

preprocess()

mappings = []
for author in wrongAuthors:
    mapping = {}
    mapping[author] = []
    authorcopy = (author + '.')[:-1]
    for ga in goodAuthors:
        if checkNameInString(ga, author):
            mapping[author].append(ga)
            authorcopy = authorcopy.replace(ga, "")
    if len(authorcopy.strip()) > 0:
        mapping[author].append(authorcopy.strip())
    mappings.append(mapping)

with open('authormappings.json', 'w') as outfile:
    json.dump(mappings, outfile)

print len(goodAuthors)

with open('goodAuthors.txt', 'w') as outfile:
    for au in sorted([a for a in goodAuthors]):
        outfile.write("%s\n" % au.strip())
