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
    nameSplit = [a.strip() for a in name.split()]
    stringSplit = [b.strip() for b in string.split()]
    matchFound = False
    j=0
    for j in range(0, len(stringSplit)):
        if stringSplit[j] == nameSplit[0]:
            matchFound = True
            break
    if matchFound == False:
        return False
    i=1
    for i in range(1, len(nameSplit)):
        if j+i >= len(stringSplit):
            return False
        if stringSplit[j+i] != nameSplit[i]:
            return False
    if j == 1 and len(stringSplit[0]) == 1:
        return False
    if j+i == len(stringSplit)-1 and len(stringSplit[-1:][0]) == 1:
        return False
    return True

def splitStringByName(name, string):
    for au in [a.strip() for a in string.split(name)]:
        addToGoodAuthors(au)


def preprocess():
    for mapping in authormappings:
        for value in mapping:
            for wrongAuthor in mapping[value]['wrong']:
                authorcopy = (wrongAuthor + '.')[:-1].encode('utf-8').strip()
                for ga in sorted(goodAuthors, key=len, reverse=True):
                    if checkNameInString(ga, authorcopy):
                        # splitStringByName(ga, author)
                        authorcopy = authorcopy.replace(ga, "")
                        break
                addToGoodAuthors(authorcopy)

preprocess()

for mapping in authormappings:
    for value in mapping:
        for wrongAuthor in mapping[value]['wrong']:
            wrongAuthor = wrongAuthor.encode('utf-8').strip()
            for ga in sorted(goodAuthors, key=len, reverse=True):
                if ga.startswith('Margaret Mitchell') and 'Margaret Mitchell' in wrongAuthor:
                    print ga + ', ' + wrongAuthor
                if checkNameInString(ga, wrongAuthor):
                    mapping[value]['good'].append(ga)
                    wrongAuthor = wrongAuthor.replace(ga, "")
                    break
            if len(re.findall(r'\w+', wrongAuthor.strip())) > 1 and len(re.findall(r'\w+',wrongAuthor.strip())) <= 3 and len(wrongAuthor) > 1:
                mapping[value]['good'].append(wrongAuthor.strip())

with open('authormappings.json', 'w') as outfile:
    json.dump(authormappings, outfile)

print len(goodAuthors)

# with open('goodAuthors.txt', 'w') as outfile:
#     for au in sorted([a for a in goodAuthors]):
#         outfile.write("%s\n" % au.strip())
