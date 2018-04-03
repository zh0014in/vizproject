import nltk
from nameparser.parser import HumanName
from nltk.tag.stanford import StanfordNERTagger

# st = StanfordNERTagger('stanford-ner/classifiers/english.all.3class.distsim.crf.ser.gz', 'stanford-ner/stanford-ner.jar')
# text = "Nicola Cancedda"

def extract_entities(text):
    for sent in nltk.sent_tokenize(text):
        for chunk in nltk.ne_chunk(nltk.pos_tag(nltk.word_tokenize(sent))):
            print chunk
            if hasattr(chunk, 'node'):
                print chunk.node, ' '.join(c[0] for c in chunk.leaves())

extract_entities("Steven Abney")

# for sent in nltk.sent_tokenize(text):
#     tokens = nltk.tokenize.word_tokenize(sent)
#     tags = st.tag(tokens)
#     for tag in tags:
#         if tag[1]=='PERSON': print tag