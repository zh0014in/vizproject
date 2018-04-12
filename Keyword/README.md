Lab 1: Microblog Clssification
Deadline: 19 Feb 2018(Mon, 1830 Hrs)

### Introduction to DATASET
This dataset contains tweets with following 10 classes: 
1.Health
2.Business
3.Arts
4.Sports
5.Shopping
6.Politics
7.Education
8.Technology
9.Entertainment
10.Travel

The dataset contains 6000 tweets (see ./data/samples.txt), each class has 600 tweets. Besides, the groudtruth of these tweets is provided in ./data/labels.txt. Also, the mapping between class name and index is provided in ./data/class_name_index.txt

The data is in json format, which contains all available information provided by Twitter.
For details about the defination of each field, please refer to https://developer.twitter.com/en/docs/tweets/data-dictionary/overview/tweet-object.
For better visualization, you can \utilize online json editor tool (http://jsoneditoronline.org/).
If you need to get more information (e.g., comments, images, social relations), you could use the Twitter API: https://developer.twitter.com/



### Policy
This dataset contains original data crowled from Twitter. 
Due to privacy issues, please do not public this dataset to anyone or for any use outside the class. Thank you.


### Environment Setting
1. Ubuntu 16.04
2. Python 2.7



### Installation 
1. nltk 
2. simplejson
3. pickle
4. numpy
5. scipy
6. scikit-learn
Note: All these libraries can be installed via pip. (e.g., pip install nltk)  



### Usage 
1. Run 'Step1_preprocess.py' to prepocess tweet content, including data cleaning (e.g., remove url, punctuations, time), word tokenize, stemming, remove low-frequency words and stopping words. 
2. Run 'Step2_basic_classifier.py', which adopts a basic classifier (Navie Bayers). You are supposed to see performances (classification score, average percision, average recall) printing into the screen.