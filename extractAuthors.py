import json
import sys

if len(sys.argv) == 2:
    confidenceLimit = sys.argv[1]
else:
    confidenceLimit = 0.7

papers = json.load(open('data('+str(confidenceLimit)+').json'))

authors = {}

for paper in [p for p in papers if 'authors' in p]:
    for author in paper['authors']:
        if author not in authors:
            authors[author] = {}
            authors[author][paper['year']] = {}
            authors[author][paper['year']][paper['conference']] = 1
        else:
            if paper['year'] not in authors[author]:
                authors[author][paper['year']] = {}
                authors[author][paper['year']][paper['conference']] = 1
            else:
                if paper['conference'] not in authors[author][paper['year']]:
                    authors[author][paper['year']][paper['conference']] = 1
                else:
                    authors[author][paper['year']][paper['conference']] = authors[author][paper['year']][paper['conference']] + 1

with open('authors('+str(confidenceLimit)+').json', 'w') as outfile:
    json.dump(authors, outfile)
