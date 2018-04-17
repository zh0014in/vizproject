import re
import json
import sys

if len(sys.argv) == 2:
    confidenceLimit = sys.argv[1]
else:
    confidenceLimit = 0.7

with open('goodAuthors('+str(confidenceLimit)+').txt', 'r') as f:
    goodAuthors = f.read().splitlines()

authormappings = json.load(open('authormappings('+str(confidenceLimit)+').json'))

def addToGoodAuthors(name, mapping):
    if len(re.findall(r'\w+', name.strip())) >= 1 and len(re.findall(r'\w+', name.strip())) <= 3 and len(name) > 1:
        mapping['good'].append(name.strip())
        mapping['wrong'].remove(name.strip())
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

def wordCount(string):
    return len(re.findall(r'\w+', string.strip()))

def checkNWord(string, N):
    words = string.strip().split()
    wc = len(words)
    if wc < N:
        return False,0,0,0
    for i in range(0, wc-N+1):
        if ' '.join(words[i:i+N]) in goodAuthors:
            return ' '.join(words[i:i+N]), i, wc, N
    return False, 0,0,0

for j in [4,3,2]:
    for loop in range(0,3):
        for idx, mapping in authormappings.items():
            for idy, value in mapping.items():
                for idz, wrongAuthor in enumerate(mapping['wrong']):
                    wrongAuthor = wrongAuthor.strip()
                    checked, i, wc, N = checkNWord(wrongAuthor, j)
                    if checked != False:
                        mapping['good'].append(checked)
                        if i == 0 or i == wc - N:
                            # print 'no split'
                            mapping['wrong'][idz] = wrongAuthor.replace(checked, '').strip()
                            addToGoodAuthors(mapping['wrong'][idz], mapping)
                        else:
                            # print 'splitted'
                            splitted = wrongAuthor.split(checked)
                            mapping['wrong'][idz] = splitted[0].strip()
                            mapping['wrong'].append(splitted[1].strip())
                            addToGoodAuthors(splitted[0].strip(), mapping)
                            addToGoodAuthors(splitted[1].strip(), mapping)

with open('authormappingsfinal.json', 'w') as outfile:
    json.dump(authormappings, outfile)

print len(goodAuthors)