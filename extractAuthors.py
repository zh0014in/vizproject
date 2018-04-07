import json
import sys

if len(sys.argv) == 2:
    confidenceLimit = sys.argv[1]
else:
    confidenceLimit = 0.8

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




citationsByYear = {}

for paper in [p for p in papers if 'citations' in p and len(p['citations']) > 0]:
    for citation in paper['citations']:
        if isinstance(citation['title'], basestring) and citation['title'] not in citationsByYear:
            citationsByYear[citation['title']] = {}
            citationsByYear[citation['title']][paper['year']] = 1
        else:
            if isinstance(citation['title'], basestring):
                if paper['year'] not in citationsByYear[citation['title']]:
                    citationsByYear[citation['title']][paper['year']] = 1
                else:
                    citationsByYear[citation['title']][paper['year']] = citationsByYear[citation['title']][paper['year']] + 1

with open('citationByYear('+str(confidenceLimit)+').json', 'w') as outfile:
    json.dump(citationsByYear, outfile)

citationByConference = {}

for paper in [p for p in papers if 'citations' in p and len(p['citations']) > 0]:
    for citation in paper['citations']:
        if isinstance(citation['title'], basestring) and citation['title'] not in citationByConference:
            citationByConference[citation['title']] = {}
            citationByConference[citation['title']][paper['conference'][0:1]] = 1
        else:
            if isinstance(citation['title'], basestring):
                if paper['conference'][0:1] not in citationByConference[citation['title']]:
                    citationByConference[citation['title']][paper['conference'][0:1]] = 1
                else:
                    citationByConference[citation['title']][paper['conference'][0:1]] = citationByConference[citation['title']][paper['conference'][0:1]] + 1

with open('citationByConference('+str(confidenceLimit)+').json', 'w') as outfile:
    json.dump(citationByConference, outfile)