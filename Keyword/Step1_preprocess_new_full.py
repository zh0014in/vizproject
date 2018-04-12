# encoding=utf8
import sys
reload(sys)
sys.setdefaultencoding('utf8')

import os
import re
import nltk
#nltk.download()
from nltk.corpus import stopwords
import simplejson as json
#import pickle
import numpy as np

def rm_html_tags(str):
    html_prog = re.compile(r'<[^>]+>',re.S)
    return html_prog.sub('', str)

def rm_html_escape_characters(str):
    pattern_str = r'&quot;|&amp;|&lt;|&gt;|&nbsp;|&#34;|&#38;|&#60;|&#62;|&#160;|&#20284;|&#30524;|&#26684|&#43;|&#20540|&#23612;'
    escape_characters_prog = re.compile(pattern_str, re.S)
    return escape_characters_prog.sub('', str)

def rm_at_user(str):
    return re.sub(r'@[a-zA-Z_0-9]*', '', str)

def rm_url(str):
    return re.sub(r'http[s]?:[/+]?[a-zA-Z0-9_\.\/]*', '', str)

def rm_repeat_chars(str):
    return re.sub(r'(.)(\1){2,}', r'\1\1', str)

def rm_hashtag_symbol(str):
    return re.sub(r'#', '', str)

def replace_emoticon(emoticon_dict, str):
    for k, v in emoticon_dict.items():
        str = str.replace(k, v)
    return str

def rm_time(str):
    return re.sub(r'[0-9][0-9]:[0-9][0-9]', '', str)

def rm_punctuation(current_tweet):
    return re.sub(r'[^\w\s]','',current_tweet)


def pre_process(str, porter):
    # do not change the preprocessing order only if you know what you're doing 
    str = str.lower()
    str = rm_url(str)        
    str = rm_at_user(str)        
    str = rm_repeat_chars(str) 
    str = rm_hashtag_symbol(str)
    str = rm_time(str)        
    str = rm_punctuation(str)
        
    try:
        str = nltk.tokenize.word_tokenize(str) #return a list of str separate by word
        try:
            str = [porter.stem(t) for t in str]
        except:
            print(str)
            pass
    except:
        print(str)
        pass
        
    return str
                            
def grab_info (json_dict):
    text = u" "
    try:
        tags = ' &' + json_dict["entities"]["hashtags"][0]["text"].lower()
        if tags:
            text += tags
    except:
        pass

    try:
        location = json_dict["user"]["location"].replace(' ', '')
        if location:
            text += ' &' + location.lower()
    except:
        pass

    try:
        time_zone = json_dict['user']['time_zone'].replace(' ', '')
        if time_zone:
            text += ' &' + time_zone.lower()
    except:
        pass

    try:
        user_name = json_dict['user']['name'].replace(' ', '')
        if user_name:
            text += ' &' + user_name
    except:
        pass

    try:
        user_desc = json_dict['user']['description'].replace(' ', '')
        if user_desc:
            text += ' &' + user_desc
    except:
        pass    

    return text

if __name__ == "__main__":
    data_dir = './data'  ##Setting your own file path here.

    x_filename = 'samples.txt'
    y_filename = 'labels.txt'

    porter = nltk.PorterStemmer()    #porter stemmer
    stops = set(stopwords.words('english'))
    stops.add('rt') #may add personalized stop words


    ##load and process samples
    print('start loading and process samples...')
    words_stat = {} # record statistics of the df and tf for each word; Form: {word:[tf, df, tweet index]}
    tweets = []
    bonuses = [] 
    cnt = 0
    with open(os.path.join(data_dir, x_filename)) as f:
        for i, line in enumerate(f):
            postprocess_tweet = []
            tweet_obj = json.loads(line.strip(), encoding='utf-8')
            content = tweet_obj['text'].replace("\n"," ")
            bonus = grab_info(tweet_obj)
            content += bonus
            words = pre_process(content, porter)
            for word in words:
                if word not in stops:
                    postprocess_tweet.append(word)
                    if word in words_stat.keys():
                        words_stat[word][0] += 1
                        if i != words_stat[word][2]:
                            words_stat[word][1] += 1
                            words_stat[word][2] = i
                    else:
                        words_stat[word] = [1,1,i]

            tweets.append(' '.join(postprocess_tweet))

    ##saving the statistics of tf and df for each words into file
    print("The number of unique words in data set is %i." %len(words_stat.keys()))
    lowTF_words = set()
    with open(os.path.join(data_dir, 'words_statistics_new.txt'), 'w') as f:
        f.write('TF\tDF\tWORD\n')
        for word, stat in sorted(words_stat.items(), key=lambda i: i[1], reverse=True):
            f.write('\t'.join([str(m) for m in stat[0:2]]) + '\t' + word +  '\n')
            if stat[0]<2:
                lowTF_words.add(word)
    print("The number of low frequency words is %d." %len(lowTF_words))
    # print(stops)


    ###Re-process samples, filter low frequency words...
    fout = open(os.path.join(data_dir, 'samples_processed_new.txt'), 'w')
    tweets_new = []
    for tweet in tweets:
        words = tweet.split(' ')
        new = [] 
        for w in words:
            if w not in lowTF_words:
                new.append(w)
        new_tweet = ' '.join(new)
        tweets_new.append(new_tweet)
        fout.write('%s\n' %new_tweet)
    fout.close()

    print("Preprocessing is completed")