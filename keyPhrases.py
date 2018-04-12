from rake_nltk import Rake
from difflib import SequenceMatcher

def similar(a, b):
    return SequenceMatcher(None, a, b).ratio()

r = Rake() # Uses stopwords for english from NLTK, and all puntuation characters.


# # If you want to provide your own set of stop words and punctuations to
# # r = Rake(<list of stopwords>, <string of puntuations to ignore>)

r.extract_keywords_from_text("The paper describes a natural language based expert system route advisor for the public bus transport in Trondheim, Norway. The system is available on the Internet,and has been intstalled at the bus company's web server since the beginning of 1999. The system is bilingual, relying on an internal language independent logic representation.")

print r.get_ranked_phrases() # To get keyword phrases ranked highest to lowest.

# print similar("Using Corpus-derived Name Lists for Named Entity Recognition", "Ralph Grishman, Pasi Tapanainen, Silja Huttunen 282 Using Corpus-Derived Name Lists for Named Entity Recognition")