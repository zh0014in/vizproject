//图表所需要的数据
var chartData = {
    "Andreas": {
        "2010": {
            "N10": 1,
            "W10": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "P13": 1,
            "W13": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Ismael Garcia": {
        "2006": {
            "W06": 1
        }
    },
    "Shane Bergsma": {
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        },
        "2008": {
            "P08": 1,
            "D08": 1
        },
        "2009": {
            "P09": 1,
            "W09": 1
        },
        "2010": {
            "P10": 1,
            "D10": 1,
            "W10": 2
        },
        "2011": {
            "P11": 2
        },
        "2013": {
            "P13": 1
        }
    },
    "Harald": {
        "2006": {
            "W06": 1
        }
    },
    "Katja Hofmann": {
        "2009": {
            "E09": 1
        }
    },
    "Laura Plaza": {
        "2010": {
            "W10": 1
        },
        "2012": {
            "S12": 1
        }
    },
    "B Karl Michael Dean P": {
        "2012": {
            "P12": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Wei Aoying": {
        "2011": {
            "P11": 1
        }
    },
    "Ronald": {
        "2004": {
            "W04": 1,
            "N04": 1
        }
    },
    "Katz Lin": {
        "2001": {
            "W01": 1
        }
    },
    "Enamul Hoque": {
        "2014": {
            "W14": 1
        }
    },
    "Zhang Houfeng Xu Sun Mairgup Mansur": {
        "2013": {
            "D13": 1
        }
    },
    "Lijiao Yang": {
        "2014": {
            "W14": 1
        }
    },
    "Stephen A Della Pietra": {
        "1991": {
            "P91": 1
        }
    },
    "Matthew Henderson": {
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Reddy": {
        "2009": {
            "W09": 1
        }
    },
    "C Mikel L": {
        "2002": {
            "J02": 1
        }
    },
    "Roman G Arens": {
        "2000": {
            "A00": 1
        }
    },
    "Sanda": {
        "2006": {
            "W06": 1
        }
    },
    "Chiori Hori": {
        "2003": {
            "P03": 1
        }
    },
    "Bj\u00a8orn Markku Jaakko": {
        "2009": {
            "E09": 1
        }
    },
    "Kate Acomb": {
        "2007": {
            "W07": 1
        }
    },
    "Georgios Paltoglou": {
        "2010": {
            "P10": 1
        }
    },
    "Paul": {
        "2004": {
            "W04": 1
        },
        "2012": {
            "S12": 1,
            "W12": 1
        },
        "2006": {
            "W06": 1
        },
        "2014": {
            "W14": 1,
            "S14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Kaneko tYusuke Miyao tDaisuke Bekki": {
        "2013": {
            "P13": 1
        }
    },
    "Nal Kalchbrenner": {
        "2013": {
            "D13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Jeonhyung Kang": {
        "2010": {
            "W10": 1
        }
    },
    "Beata Beigman Klebanov": {
        "2005": {
            "P05": 1
        },
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 1
        },
        "2013": {
            "P13": 1,
            "W13": 3,
            "Q13": 1
        },
        "2014": {
            "W14": 2,
            "P14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Kevin Knight": {
        "1995": {
            "P95": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "1998": {
            "J98": 1
        },
        "1999": {
            "J99": 1
        },
        "2003": {
            "E03": 1
        },
        "2005": {
            "P05": 1
        },
        "2006": {
            "W06": 1,
            "P06": 1
        },
        "2009": {
            "P09": 2,
            "N09": 1,
            "W09": 1
        },
        "2011": {
            "P11": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Kai-Fu Lee": {
        "2000": {
            "P00": 2
        }
    },
    "Lamia van": {
        "2010": {
            "W10": 1
        }
    },
    "Kemal Noah A": {
        "2012": {
            "P12": 1
        }
    },
    "Matthew": {
        "2008": {
            "W08": 1
        },
        "2003": {
            "J03": 1,
            "W03": 1
        },
        "2014": {
            "W14": 2
        }
    },
    "Masato Hagiwara": {
        "2008": {
            "P08": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "N13": 1,
            "P13": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Huan": {
        "2014": {
            "W14": 1
        }
    },
    "Stefan Evert": {
        "2001": {
            "P01": 1
        },
        "2003": {
            "E03": 1
        },
        "2007": {
            "P07": 2
        }
    },
    "Yaser Al-onaizan": {
        "2008": {
            "D08": 1
        }
    },
    "Sebastian Pad\u00b4o": {
        "2003": {
            "P03": 1
        },
        "2008": {
            "D08": 1
        },
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 2
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "S12": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Patrick Paroubek": {
        "1992": {
            "A92": 1
        }
    },
    "Nachum Dershowitz Alex Zhicharevich": {
        "2012": {
            "W12": 1
        }
    },
    "Gonz`alez Gim\u00b4enez": {
        "2012": {
            "P12": 1
        }
    },
    "Thomas E Ahlswede": {
        "1985": {
            "P85": 1
        }
    },
    "Nilda Ruimy": {
        "2007": {
            "P07": 1
        }
    },
    "Robert Dale": {
        "2009": {
            "W09": 1,
            "E09": 1
        },
        "2011": {
            "W11": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Natalia Anubha Iris": {
        "2005": {
            "P05": 1
        }
    },
    "Yuanchao": {
        "2014": {
            "P14": 1
        }
    },
    "Eckart de_Iryna": {
        "2014": {
            "W14": 1
        }
    },
    "Tadesse Anberbir Tomio Takara": {
        "2009": {
            "W09": 1
        }
    },
    "Kumiko": {
        "2010": {
            "W10": 1
        }
    },
    "Min-Hsuan Tsai Shen-Fu Tsai Thomas Huang": {
        "2014": {
            "W14": 1
        }
    },
    "Qiaoming": {
        "2011": {
            "P11": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Jos\u00b4e Luis": {
        "2015": {
            "S15": 1
        }
    },
    "Peter Bosch": {
        "2003": {
            "W03": 1
        }
    },
    "Dominique": {
        "1998": {
            "W98": 1
        }
    },
    "Beatriz Fisas": {
        "2015": {
            "W15": 1
        }
    },
    "Xiao": {
        "2013": {
            "D13": 1
        },
        "2015": {
            "P15": 1,
            "K15": 1
        }
    },
    "Ryo Yoshinaka": {
        "2015": {
            "W15": 1
        }
    },
    "Manny Rayner": {
        "2000": {
            "A00": 1
        },
        "2003": {
            "P03": 1
        },
        "1991": {
            "P91": 1
        }
    },
    "Goliath": {
        "1985": {
            "P85": 1
        }
    },
    "Jie-Chi Yang": {
        "2006": {
            "W06": 1
        },
        "2007": {
            "N07": 1,
            "P07": 1
        }
    },
    "Young-Soog": {
        "2000": {
            "P00": 1
        }
    },
    "Elviira Hartikainen": {
        "2003": {
            "W03": 1
        }
    },
    "Pabitra Mitra Bhowmick": {
        "2008": {
            "W08": 1
        }
    },
    "Thorsten Brants": {
        "2000": {
            "A00": 1
        },
        "2008": {
            "P08": 2
        },
        "2003": {
            "P03": 1
        },
        "1997": {
            "A97": 1
        }
    },
    "Yutaka Ohyama": {
        "1986": {
            "P86": 1
        },
        "1990": {
            "P90": 1
        }
    },
    "Philip Harrison": {
        "1993": {
            "P93": 1
        }
    },
    "Tesconi Marchetti": {
        "2006": {
            "P06": 1
        }
    },
    "Shuming Ralph Chin-Yew": {
        "2012": {
            "D12": 1
        }
    },
    "Casey": {
        "2015": {
            "P15": 1
        }
    },
    "Ji Ma": {
        "2010": {
            "W10": 1
        }
    },
    "Zenshiro Kawasaki": {
        "1998": {
            "W98": 1
        }
    },
    "Ewan Klein": {
        "1989": {
            "E89": 1
        },
        "2000": {
            "P00": 1
        },
        "2002": {
            "W02": 1
        },
        "2009": {
            "W09": 1
        },
        "2010": {
            "W10": 1
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "P14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Gregory Gardner": {
        "2012": {
            "W12": 1
        }
    },
    "Philip Bramsen": {
        "2006": {
            "W06": 1
        }
    },
    "Dain Kaplan": {
        "2009": {
            "W09": 1
        }
    },
    "Qiaozhu Mei": {
        "2008": {
            "P08": 1
        },
        "2010": {
            "P10": 1,
            "D10": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Christina": {
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Aur\u00b4elien": {
        "2010": {
            "D10": 1
        }
    },
    "Fatemeh Torabi Asr": {
        "2015": {
            "W15": 1
        }
    },
    "Nuria Gala": {
        "2004": {
            "W04": 1
        }
    },
    "Thomas Lin": {
        "2010": {
            "D10": 1,
            "W10": 1
        },
        "2012": {
            "W12": 1,
            "D12": 1
        }
    },
    "Wenwen Haitao Yang": {
        "2009": {
            "P09": 1
        }
    },
    "Karagol-Ayan": {
        "2006": {
            "W06": 1
        }
    },
    "John Goldsmith'": {
        "2001": {
            "J01": 1
        }
    },
    "Appelt Lara": {
        "2004": {
            "N04": 2
        }
    },
    "Ditty Mathew": {
        "2015": {
            "W15": 1
        }
    },
    "Niraj Aswani": {
        "2005": {
            "W05": 2
        }
    },
    "Andrea Gesmundo": {
        "2014": {
            "E14": 1
        }
    },
    "Tatyana Makhalova Dmitry Ilvovsky Boris Galitsky": {
        "2015": {
            "W15": 1
        }
    },
    "Li": {
        "2008": {
            "W08": 1,
            "D08": 1
        },
        "2009": {
            "N09": 1
        },
        "2007": {
            "S07": 1
        },
        "2014": {
            "D14": 1,
            "P14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Brian": {
        "2009": {
            "D09": 1
        },
        "2011": {
            "P11": 2
        },
        "2012": {
            "W12": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Teemu Mikko Antti Janne Matti Ebru Murat": {
        "2007": {
            "N07": 1
        }
    },
    "Clarke Lapata": {
        "2006": {
            "P06": 2
        }
    },
    "Lidia Khmylko": {
        "2009": {
            "W09": 1
        }
    },
    "Elvan Gogmen": {
        "1995": {
            "P95": 1
        }
    },
    "Sophia Katrenko": {
        "2008": {
            "P08": 1
        }
    },
    "Matsumoto": {
        "2004": {
            "W04": 1
        }
    },
    "Maximilian Andre Philipp J Sebastian": {
        "2014": {
            "W14": 1
        }
    },
    "Benoit": {
        "2009": {
            "W09": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "de_N Rafferty": {
        "2008": {
            "P08": 1
        }
    },
    "Andrew Y": {
        "2012": {
            "D12": 1
        }
    },
    "Chenglong Ma": {
        "2015": {
            "W15": 1,
            "S15": 1
        }
    },
    "Wang Waibel": {
        "1998": {
            "P98": 1
        }
    },
    "Michael Pust": {
        "2009": {
            "N09": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "A": {
        "2012": {
            "D12": 1
        }
    },
    "Lu Tou": {
        "2010": {
            "D10": 1
        }
    },
    "Giuseppe Di_Fabbrizio Gupta": {
        "2010": {
            "W10": 1
        }
    },
    "Guido Minnen": {
        "1996": {
            "P96": 1
        },
        "1997": {
            "J97": 1
        }
    },
    "Usama Ijaz Bajwa": {
        "2013": {
            "W13": 1
        }
    },
    "Haifeng Hua Sheng": {
        "2010": {
            "P10": 1
        }
    },
    "Yu Dredze": {
        "2014": {
            "P14": 1
        }
    },
    "Reithinger Kipp Engel Alexandersson": {
        "2000": {
            "P00": 1
        }
    },
    "Korea University Engineering": {
        "2014": {
            "D14": 1
        }
    },
    "W\u00a8aschle": {
        "2012": {
            "E12": 1
        }
    },
    "Daria Bogdanova": {
        "2010": {
            "P10": 1
        }
    },
    "Shay Cohen": {
        "2010": {
            "W10": 1
        }
    },
    "Prem Melville": {
        "2009": {
            "W09": 1
        }
    },
    "Varada": {
        "2009": {
            "N09": 1
        },
        "2012": {
            "D12": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Radhika": {
        "2013": {
            "W13": 1
        }
    },
    "Glaysher Moldovan": {
        "2006": {
            "P06": 1
        }
    },
    "Leif Arda Nielsen": {
        "2004": {
            "P04": 1
        }
    },
    "Brandon Beamer": {
        "2009": {
            "W09": 1
        }
    },
    "Kulwinder Singh": {
        "2008": {
            "W08": 1
        }
    },
    "Persing Davis": {
        "2010": {
            "D10": 1
        }
    },
    "Doug Cooper": {
        "2014": {
            "W14": 1
        }
    },
    "Sarthak": {
        "2015": {
            "D15": 1
        }
    },
    "James Paul": {
        "2012": {
            "S12": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Sophia Y M Lee": {
        "2009": {
            "W09": 1
        }
    },
    "Davy Weissenbacher": {
        "2006": {
            "E06": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Christopher D": {
        "2004": {
            "W04": 1
        },
        "2011": {
            "D11": 1
        },
        "2012": {
            "D12": 1
        },
        "2015": {
            "K15": 1
        }
    },
    "Gerard KEMPEN": {
        "2007": {
            "W07": 1
        }
    },
    "Haffari Roy": {
        "2009": {
            "N09": 1
        }
    },
    "Eduardo Blanco": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "S12": 1
        }
    },
    "Anthony J Fisher": {
        "1989": {
            "J89": 1
        }
    },
    "Ruth Aylett": {
        "1996": {
            "P96": 1
        }
    },
    "Camacho-Collados": {
        "2015": {
            "P15": 1
        }
    },
    "Nai-Lung Tsao David Wible": {
        "2009": {
            "W09": 1
        }
    },
    "Sandra Williams": {
        "2011": {
            "W11": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Alok": {
        "2015": {
            "P15": 1
        }
    },
    "Alon": {
        "2009": {
            "W09": 1
        }
    },
    "Yuji Hasegawa": {
        "2008": {
            "W08": 1
        }
    },
    "Sucheta Ghosh": {
        "2012": {
            "W12": 1
        }
    },
    "Zareen Syed": {
        "2010": {
            "W10": 2
        }
    },
    "James Allan": {
        "2004": {
            "W04": 1
        }
    },
    "Tatsuya Harada": {
        "2012": {
            "W12": 1
        }
    },
    "Hiroyuki Shinnou": {
        "2007": {
            "P07": 1
        }
    },
    "Carl Burke": {
        "2003": {
            "W03": 1
        }
    },
    "Suma Bhat": {
        "2009": {
            "P09": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Rada Mihalcea": {
        "2000": {
            "W00": 1
        },
        "2002": {
            "W02": 1
        },
        "2003": {
            "W03": 1
        },
        "2004": {
            "W04": 2,
            "P04": 1
        },
        "2005": {
            "P05": 2
        },
        "2006": {
            "P06": 1
        },
        "2009": {
            "N09": 2,
            "W09": 2,
            "D09": 1
        },
        "2010": {
            "S10": 1,
            "D10": 1
        },
        "2011": {
            "W11": 2
        },
        "2012": {
            "S12": 2,
            "P12": 1,
            "D12": 1
        },
        "2013": {
            "P13": 1,
            "W13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Hanan Alshikhabobakr": {
        "2014": {
            "D14": 1
        }
    },
    "Lasse Borgholt": {
        "2015": {
            "D15": 1
        }
    },
    "Kerstin Fischer": {
        "2006": {
            "E06": 1
        }
    },
    "Martha Evens": {
        "1988": {
            "P88": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "McIntyre Lapata": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 1
        }
    },
    "Juhani Luotolahti": {
        "2015": {
            "W15": 1
        }
    },
    "Eneko Agirre": {
        "2006": {
            "W06": 1
        },
        "2001": {
            "S01": 1
        },
        "2013": {
            "S13": 1,
            "W13": 1
        },
        "1998": {
            "P98": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Amitava Das": {
        "2011": {
            "P11": 1
        }
    },
    "Katrin": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "W09": 1
        },
        "2010": {
            "W10": 1
        },
        "2003": {
            "W03": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "University": {
        "2012": {
            "D12": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Akkaya Wiebe": {
        "2009": {
            "D09": 1
        }
    },
    "Yuntian Deng": {
        "2015": {
            "P15": 1
        }
    },
    "Yajuan L\u00a8u": {
        "2010": {
            "P10": 1
        }
    },
    "Nigel": {
        "2007": {
            "W07": 1
        },
        "2004": {
            "W04": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Jan Daniel Zeman": {
        "2013": {
            "P13": 1
        }
    },
    "Jessica Ouyang": {
        "2015": {
            "D15": 1
        }
    },
    "Patrick SCHONE Daniel JURAFSKY": {
        "2001": {
            "N01": 1
        }
    },
    "Weese Callison-Burch Lopez": {
        "2012": {
            "W12": 1
        }
    },
    "Chao": {
        "2004": {
            "W04": 1
        }
    },
    "William Lewis": {
        "2010": {
            "P10": 1
        }
    },
    "Salah Ait-Mokhtar Caroline Hag`ege Pajolma Rupi": {
        "2013": {
            "W13": 1
        }
    },
    "Zaghouani": {
        "2012": {
            "W12": 1
        }
    },
    "Liebeck": {
        "2015": {
            "P15": 1
        }
    },
    "Eiichiro": {
        "2014": {
            "P14": 1
        }
    },
    "Roxana Jana": {
        "2014": {
            "W14": 1
        }
    },
    "Tian Hao": {
        "2006": {
            "W06": 1
        }
    },
    "Ben Taskar": {
        "2008": {
            "P08": 1
        },
        "2004": {
            "W04": 1
        },
        "2010": {
            "P10": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Tianfang Yao": {
        "2005": {
            "W05": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Jennifer Williams": {
        "2012": {
            "P12": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Yvette Graham": {
        "2013": {
            "S13": 1,
            "W13": 1
        },
        "2014": {
            "W14": 1,
            "E14": 1
        }
    },
    "Yatian Shen": {
        "2014": {
            "W14": 1
        }
    },
    "Lapata Keller": {
        "2001": {
            "P01": 1
        }
    },
    "Yegin Genc Elizabeth A Lennon Winter Mason Jeffrey V Nickerson": {
        "2013": {
            "W13": 1
        }
    },
    "Alexander": {
        "2000": {
            "W00": 1
        },
        "2004": {
            "N04": 1
        },
        "2005": {
            "W05": 1
        },
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "E14": 1
        },
        "2015": {
            "D15": 1,
            "W15": 1
        }
    },
    "Wojciech Skut": {
        "1997": {
            "A97": 1
        }
    },
    "John A Barnden": {
        "2006": {
            "E06": 1,
            "W06": 1
        }
    },
    "Timothy J Hazen": {
        "2004": {
            "W04": 1
        }
    },
    "Maarten van_Gompel": {
        "2010": {
            "S10": 1
        },
        "2013": {
            "S13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Tetsuji": {
        "2015": {
            "P15": 1
        }
    },
    "Peter Wazinski": {
        "1992": {
            "A92": 1
        }
    },
    "S Montero Araki": {
        "2006": {
            "P06": 1
        }
    },
    "Marcia C Linebarger": {
        "1988": {
            "P88": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Alshawi Douglas": {
        "2001": {
            "W01": 1
        }
    },
    "Usama Ijaz": {
        "2011": {
            "W11": 2
        }
    },
    "Bin Li": {
        "2010": {
            "N10": 1
        }
    },
    "\u00b4Eva M\u00b4ujdricza-Maydt": {
        "2012": {
            "W12": 1
        }
    },
    "Sanja Fidler": {
        "2012": {
            "S12": 1
        }
    },
    "Yulan": {
        "2011": {
            "W11": 1
        }
    },
    "Jeff A Bilines": {
        "2003": {
            "N03": 1
        }
    },
    "Giacomo Ferrari": {
        "1983": {
            "E83": 2
        }
    },
    "Min ZHANG Jie ZHANG Jian SU": {
        "2006": {
            "N06": 1
        }
    },
    "Gim\u00b4enez M`arquez": {
        "2006": {
            "P06": 1
        }
    },
    "Josef van_GenabithI": {
        "1998": {
            "P98": 1
        }
    },
    "Eugene Charnialc": {
        "1986": {
            "P86": 1
        }
    },
    "Imtiaz H Khan": {
        "2009": {
            "W09": 1
        }
    },
    "Rohit Prasad": {
        "2010": {
            "W10": 1
        }
    },
    "Ethan Genco": {
        "2015": {
            "D15": 1
        }
    },
    "Bogdan Sacaleanu": {
        "2003": {
            "E03": 1
        }
    },
    "Karen Ryan": {
        "1981": {
            "P81": 1
        }
    },
    "Ron Artstein": {
        "2015": {
            "W15": 1
        }
    },
    "Diego De_Cao": {
        "2010": {
            "W10": 1
        }
    },
    "Manny": {
        "2009": {
            "W09": 1
        }
    },
    "Alex B Fine": {
        "2014": {
            "P14": 1
        }
    },
    "Bane": {
        "2008": {
            "W08": 1
        }
    },
    "Jack Hessel Nicolas Savva Michael J Wilber": {
        "2015": {
            "W15": 1
        }
    },
    "Carole Adam Lawrence Cavedon Lin Padgham": {
        "2010": {
            "W10": 1
        }
    },
    "Elizabeth Krawczyk": {
        "2013": {
            "W13": 1
        }
    },
    "Marta R Costa-juss`a": {
        "2006": {
            "W06": 1
        },
        "2007": {
            "W07": 2
        }
    },
    "Kunal Diksha Srinivas": {
        "2014": {
            "W14": 1
        }
    },
    "Dimitrios Kokkinakis Maria Toporowska Gronostaj": {
        "2010": {
            "W10": 1
        }
    },
    "Alexander Chuchunkov Alexander Tarelkin Irina Galinskaya": {
        "2014": {
            "W14": 1
        }
    },
    "Ji Liu": {
        "2015": {
            "W15": 1
        }
    },
    "Beata Beigman": {
        "2006": {
            "N06": 1
        }
    },
    "Greg Carlson": {
        "1991": {
            "P91": 1
        }
    },
    "Francesco Rubino": {
        "2011": {
            "W11": 1
        }
    },
    "Kentaro Sasaki": {
        "2014": {
            "D14": 1
        }
    },
    "Massimo Poesio": {
        "1998": {
            "J98": 1
        },
        "2000": {
            "A00": 1
        },
        "2003": {
            "W03": 1
        },
        "2005": {
            "W05": 1
        },
        "2008": {
            "P08": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Le_Q Ha": {
        "2006": {
            "P06": 1
        }
    },
    "Sofia": {
        "2006": {
            "J06": 1
        }
    },
    "Thomas Ahlswede": {
        "1988": {
            "P88": 1
        }
    },
    "Ver\u00b4onica P\u00b4erez-Rosas": {
        "2013": {
            "P13": 1
        },
        "2015": {
            "D15": 2
        }
    },
    "A T": {
        "2012": {
            "N12": 1
        },
        "1983": {
            "E83": 1
        }
    },
    "Polajnar Luana Stephen": {
        "2014": {
            "D14": 1
        }
    },
    "Stephan Vogel": {
        "2000": {
            "P00": 1
        },
        "2003": {
            "P03": 1,
            "E03": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "N07": 1
        },
        "2009": {
            "W09": 1
        },
        "2010": {
            "P10": 1,
            "W10": 2
        },
        "2011": {
            "W11": 2
        }
    },
    "Adam Lopez": {
        "2009": {
            "E09": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "P11": 1,
            "D11": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Michele Mammini": {
        "2007": {
            "P07": 1
        }
    },
    "Ciprian Chelba": {
        "2002": {
            "P02": 1
        },
        "2010": {
            "N10": 1
        },
        "2012": {
            "W12": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "Michael Wayne Goodman": {
        "2010": {
            "P10": 1
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Wu S Chang": {
        "2009": {
            "N09": 1
        }
    },
    "Tomoki Toda Satoshi": {
        "2015": {
            "P15": 1
        }
    },
    "Eberhard Karls Universit\u00a8at T\u00a8ubingen": {
        "2015": {
            "W15": 1
        }
    },
    "Argamon Dagan Krymolowski": {
        "1998": {
            "P98": 1
        }
    },
    "Hernault Bollegala": {
        "2010": {
            "W10": 1
        }
    },
    "Kiyotaka Uchimotot": {
        "2001": {
            "S01": 1
        }
    },
    "Uri Lerner": {
        "2013": {
            "D13": 1
        }
    },
    "Zornitsa": {
        "2012": {
            "W12": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Jin-Ji Li": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 1
        }
    },
    "C L Michal Lyle H": {
        "2014": {
            "D14": 1
        }
    },
    "Whitelaw": {
        "2003": {
            "W03": 1
        }
    },
    "Ken Litkowski": {
        "2007": {
            "S07": 1
        }
    },
    "Carina Silberer": {
        "2013": {
            "P13": 1
        }
    },
    "Kadri": {
        "2004": {
            "N04": 1
        }
    },
    "Arup Sarma": {
        "2004": {
            "N04": 1
        }
    },
    "Takao Doi": {
        "2003": {
            "N03": 1,
            "W03": 1
        }
    },
    "S Feldman": {
        "2009": {
            "N09": 1
        }
    },
    "Andrew Y Ng": {
        "2011": {
            "D11": 1
        },
        "2013": {
            "P13": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Shao-Heng": {
        "2015": {
            "W15": 1
        }
    },
    "Frankie James": {
        "2000": {
            "A00": 1
        }
    },
    "Ndapandula": {
        "2014": {
            "P14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Kees van_Deemter": {
        "2009": {
            "W09": 1
        },
        "2013": {
            "N13": 1
        },
        "2006": {
            "W06": 1,
            "P06": 1
        }
    },
    "Keigo Hattori": {
        "2014": {
            "W14": 1
        }
    },
    "A D Fowler Penn": {
        "2010": {
            "P10": 1
        }
    },
    "Martin Popel": {
        "2011": {
            "W11": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Elisabet Engdahl": {
        "2000": {
            "W00": 1
        }
    },
    "Weiquan": {
        "2000": {
            "W00": 1
        }
    },
    "Hideki": {
        "2009": {
            "W09": 1
        }
    },
    "Caroline Barri`ere Pierre Andr\u00b4e M\u00b4enard": {
        "2014": {
            "W14": 1
        }
    },
    "Galen": {
        "2006": {
            "W06": 1
        }
    },
    "Scott Drellishak": {
        "2010": {
            "P10": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Steve Rehfuss": {
        "1985": {
            "P85": 1
        }
    },
    "David J Weir": {
        "1987": {
            "P87": 1
        },
        "1988": {
            "P88": 1
        },
        "1990": {
            "P90": 1
        }
    },
    "Michael Kayser": {
        "2015": {
            "K15": 1
        }
    },
    "Kazuhiro Jin-Dong Rune Jun\u2019ichi": {
        "2008": {
            "W08": 1
        }
    },
    "John": {
        "2000": {
            "W00": 1
        },
        "2003": {
            "J03": 1
        },
        "2004": {
            "W04": 2,
            "N04": 1
        },
        "2006": {
            "W06": 2
        },
        "2010": {
            "W10": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "John Bauer": {
        "2013": {
            "P13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Cotterell Peng Eisner": {
        "2014": {
            "P14": 1
        }
    },
    "Erwin Filip Tapio Sanna": {
        "2014": {
            "W14": 1
        }
    },
    "Vladimir Yuval Philip": {
        "2013": {
            "P13": 1
        }
    },
    "Jean-Marc Jutras": {
        "2000": {
            "A00": 1
        }
    },
    "Marjorie Templeton": {
        "1983": {
            "A83": 1
        }
    },
    "Massimo POESIO": {
        "2004": {
            "W04": 1
        }
    },
    "Xinhao": {
        "2013": {
            "W13": 1
        }
    },
    "Quang H Pham": {
        "2015": {
            "W15": 1
        }
    },
    "Ye Chua Lu": {
        "2009": {
            "P09": 1
        }
    },
    "P Carolyn": {
        "2011": {
            "W11": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Jason D Williams": {
        "2003": {
            "W03": 1
        },
        "2007": {
            "W07": 1
        },
        "2008": {
            "P08": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Ariya": {
        "2011": {
            "P11": 1
        }
    },
    "Akitoshi Okumura": {
        "1994": {
            "A94": 1
        }
    },
    "Eugene Santos Jr": {
        "2004": {
            "W04": 1
        }
    },
    "Klaus Zechner": {
        "2014": {
            "W14": 2
        },
        "1997": {
            "A97": 1
        },
        "1998": {
            "P98": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Laura": {
        "2000": {
            "W00": 1
        },
        "2012": {
            "S12": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Kristian J Concepcion": {
        "2001": {
            "P01": 1
        }
    },
    "Masaaki": {
        "1996": {
            "W96": 1
        },
        "1997": {
            "W97": 1
        },
        "2003": {
            "W03": 1
        },
        "2010": {
            "W10": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "P12": 2
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Lauri": {
        "2000": {
            "W00": 1
        },
        "2012": {
            "S12": 1
        }
    },
    "Akira Oishi": {
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "Graciela": {
        "2015": {
            "S15": 1
        }
    },
    "Sara Rosenthal": {
        "2010": {
            "W10": 1
        }
    },
    "Sandiway Fong": {
        "1985": {
            "P85": 1
        }
    },
    "da Spain": {
        "2011": {
            "J11": 1
        }
    },
    "Markos Mylonakis": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        }
    },
    "Huiwei Zhou": {
        "2015": {
            "P15": 1
        }
    },
    "Julian J Schl\u00a8oder": {
        "2015": {
            "W15": 2
        }
    },
    "Chu-Carroll K Brown": {
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "Jason Jeffrey Sebastian": {
        "2014": {
            "D14": 1
        }
    },
    "Izhak Shafran": {
        "2012": {
            "N12": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Gurpreet Singh": {
        "2010": {
            "W10": 1
        }
    },
    "MuYun Yang": {
        "2007": {
            "S07": 1
        }
    },
    "Lena Strombacks": {
        "1998": {
            "P98": 1
        }
    },
    "Ru Li": {
        "2013": {
            "S13": 1
        }
    },
    "Erhard W Hinrichs": {
        "1987": {
            "P87": 1
        },
        "1988": {
            "J88": 1
        }
    },
    "Bangalore Rambow": {
        "2000": {
            "P00": 1
        }
    },
    "Trevor Cohn": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "E09": 1
        },
        "2010": {
            "P10": 1,
            "D10": 1
        },
        "2011": {
            "P11": 1
        },
        "2014": {
            "P14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Niels": {
        "2014": {
            "W14": 1
        }
    },
    "Wang Shenghuo Zhu Tao Li Yihong Gong": {
        "2009": {
            "P09": 1
        }
    },
    "Ruihong Huang": {
        "2010": {
            "P10": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "E12": 1
        },
        "2013": {
            "N13": 1,
            "D13": 1
        }
    },
    "Nanda Kambhatla": {
        "2000": {
            "A00": 1
        },
        "2004": {
            "P04": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Feikje Hielkema": {
        "2008": {
            "W08": 1
        }
    },
    "Tanveer A Faruquie": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 1
        }
    },
    "T Pedersen": {
        "2011": {
            "W11": 1
        }
    },
    "Marine": {
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Alok Baikadi": {
        "2010": {
            "S10": 1,
            "W10": 1
        }
    },
    "Elizabeth Salesky": {
        "2013": {
            "W13": 1
        }
    },
    "Genzel Charniak": {
        "2002": {
            "P02": 1
        }
    },
    "Lu Xiang Xiaoqing Li Yu Zhou": {
        "2014": {
            "W14": 1
        }
    },
    "Mark Dredze": {
        "2008": {
            "P08": 1
        },
        "2015": {
            "W15": 1
        },
        "2012": {
            "N12": 1,
            "P12": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Kathleen Dahlgren": {
        "1991": {
            "W91": 1
        }
    },
    "Garoufi": {
        "2011": {
            "W11": 2
        }
    },
    "Joshua Crowgey": {
        "2014": {
            "W14": 1
        }
    },
    "Aaron Jaech": {
        "2015": {
            "D15": 1
        }
    },
    "Yassine Benajiba": {
        "2010": {
            "N10": 1,
            "D10": 1
        }
    },
    "Melissa Macpherson": {
        "1991": {
            "P91": 1
        }
    },
    "Michael Bloodgood": {
        "2010": {
            "P10": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Choudhury Mukherjee Basu Ganguly": {
        "2006": {
            "P06": 1
        }
    },
    "M Alan": {
        "2014": {
            "W14": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Radu Soricut": {
        "2005": {
            "P05": 1
        },
        "2006": {
            "P06": 2
        }
    },
    "Sarvnaz Karimi Andrew Turpin Falk Scholer": {
        "2007": {
            "P07": 1
        }
    },
    "Mare Koit": {
        "2009": {
            "E09": 1
        }
    },
    "Emmanuel Morin": {
        "2009": {
            "W09": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Jiajun Bu": {
        "2007": {
            "P07": 1
        }
    },
    "Ping Peng": {
        "1988": {
            "A88": 1
        }
    },
    "Chinese Word Segmentation A preliminary study": {
        "2002": {
            "W02": 1
        }
    },
    "Donald Metzler": {
        "2012": {
            "N12": 1
        }
    },
    "John Gibson": {
        "2006": {
            "E06": 1
        }
    },
    "Phil Harrison": {
        "2012": {
            "W12": 1
        }
    },
    "Esme Manandise": {
        "2015": {
            "W15": 1
        }
    },
    "John Goldsmith": {
        "1998": {
            "W98": 1
        }
    },
    "A-Yeong Kim Hyun-Je Song Seong-Bae Park Sang-Jo Lee": {
        "2014": {
            "D14": 1
        }
    },
    "Carl de_Marcken": {
        "1995": {
            "P95": 1
        }
    },
    "Attapol Thamrongrattanarit": {
        "2012": {
            "W12": 1
        }
    },
    "Anruo Wang": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Korhonen": {
        "2005": {
            "P05": 1
        }
    },
    "Victor Zue": {
        "2010": {
            "W10": 1
        }
    },
    "Eric Fosler": {
        "1995": {
            "P95": 1
        }
    },
    "Harsha": {
        "2013": {
            "S13": 1
        }
    },
    "Gerald Penn": {
        "2001": {
            "P01": 1
        },
        "2003": {
            "P03": 1,
            "E03": 1
        },
        "2004": {
            "P04": 2
        },
        "2006": {
            "N06": 1
        },
        "2009": {
            "P09": 2
        },
        "2010": {
            "P10": 2
        },
        "2014": {
            "W14": 1
        }
    },
    "Su-Youn Yoon": {
        "2011": {
            "W11": 2
        },
        "2012": {
            "D12": 1
        },
        "2014": {
            "W14": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Farah Benamara Patrick Saint Dizier": {
        "2003": {
            "E03": 1,
            "W03": 1
        }
    },
    "Junhui Li": {
        "2013": {
            "N13": 1
        }
    },
    "Lidia S Chao": {
        "2014": {
            "W14": 1
        }
    },
    "Donia Scott": {
        "1993": {
            "W93": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "Xiaodong He Christopher": {
        "2014": {
            "P14": 1
        }
    },
    "Marcel van_Lohuizen": {
        "2001": {
            "P01": 1
        }
    },
    "Marina del Rey": {
        "2002": {
            "W02": 1
        },
        "2003": {
            "N03": 1
        },
        "2004": {
            "N04": 4
        },
        "2005": {
            "W05": 2
        },
        "2006": {
            "N06": 2
        },
        "2007": {
            "W07": 2
        },
        "2008": {
            "P08": 1,
            "W08": 2
        },
        "2010": {
            "N10": 1
        },
        "2011": {
            "P11": 2,
            "W11": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "P13": 3,
            "W13": 1
        }
    },
    "Raphael Hoffmann": {
        "2010": {
            "P10": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Guillaume Wisniewski Nicolas P\u00e9cheux Souhir Gahbiche-Braham Fran\u00e7ois Yvon": {
        "2014": {
            "D14": 1
        }
    },
    "Kavi Mahesh": {
        "1998": {
            "W98": 1
        }
    },
    "Justine Cassell": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "W09": 1,
            "E09": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Oscar": {
        "2009": {
            "W09": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Zesch": {
        "2006": {
            "W06": 1
        }
    },
    "Michael Heilman Eisenstein": {
        "2011": {
            "P11": 1
        }
    },
    "B Jos\u00b4e": {
        "2007": {
            "W07": 1
        }
    },
    "Tratz Hovy": {
        "2011": {
            "D11": 1
        }
    },
    "Guangyou Zhou": {
        "2013": {
            "P13": 1
        }
    },
    "Alessandro Mazzei": {
        "2011": {
            "W11": 1
        }
    },
    "Marianne Laurent": {
        "2010": {
            "W10": 1
        }
    },
    "Hao Fang": {
        "2015": {
            "D15": 2
        }
    },
    "Diego De_Roberto Danilo Michael": {
        "2008": {
            "D08": 1
        }
    },
    "Maria Jes\u00b4us Aranzabe": {
        "2014": {
            "W14": 1
        }
    },
    "Wilbur": {
        "2006": {
            "W06": 1
        }
    },
    "Vittorio Castelli": {
        "2008": {
            "P08": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "M Szummer": {
        "2013": {
            "W13": 1
        }
    },
    "Shibamouli Lahiri": {
        "2013": {
            "W13": 1
        }
    },
    "Carla B Zoltowski": {
        "1991": {
            "P91": 1
        }
    },
    "Cho-Jui Hsieh": {
        "2009": {
            "P09": 1
        }
    },
    "Satoshi Shirait": {
        "1998": {
            "P98": 1
        }
    },
    "M Alexander": {
        "2011": {
            "P11": 1
        }
    },
    "Gillenwater Ganchev": {
        "2010": {
            "P10": 1
        }
    },
    "M Joseph": {
        "2012": {
            "W12": 1
        }
    },
    "Bridget T Ted Serguei V": {
        "2007": {
            "W07": 1
        }
    },
    "Umut Sulubacak": {
        "2015": {
            "W15": 1
        }
    },
    "Ruifang Ge": {
        "2009": {
            "P09": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Chung Hee Hwang": {
        "1992": {
            "P92": 1
        }
    },
    "Quoc-Chinh Bui": {
        "2011": {
            "W11": 1
        }
    },
    "Aur\u00e9lie N\u00e9v\u00e9ol James G Mork Alan R Aronson": {
        "2007": {
            "W07": 1
        }
    },
    "Steven": {
        "1994": {
            "W94": 1
        },
        "1997": {
            "W97": 1
        },
        "2002": {
            "W02": 1
        },
        "2003": {
            "W03": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "W07": 1
        },
        "2009": {
            "W09": 1
        },
        "2013": {
            "S13": 1
        },
        "2015": {
            "W15": 2,
            "S15": 1
        }
    },
    "Sanae Fujita": {
        "2010": {
            "P10": 1
        },
        "2004": {
            "W04": 1
        }
    },
    "Wu Asaf William": {
        "2010": {
            "P10": 1
        }
    },
    "Warren": {
        "2009": {
            "W09": 1
        }
    },
    "Safiyyah Saleem": {
        "2010": {
            "P10": 1
        }
    },
    "Robbie A Haertel": {
        "2010": {
            "N10": 1
        }
    },
    "Javi Fern\u00e1ndez": {
        "2014": {
            "W14": 1
        }
    },
    "R Cordoba": {
        "2009": {
            "W09": 1
        }
    },
    "Frederick Jelinek": {
        "2009": {
            "P09": 1,
            "E09": 1
        },
        "2002": {
            "P02": 1
        }
    },
    "Dirk Barbara Plank": {
        "2014": {
            "S14": 1
        }
    },
    "Andrea Setzer": {
        "2003": {
            "W03": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "K Jessica": {
        "2012": {
            "W12": 1
        }
    },
    "Haffari Sarkar": {
        "2009": {
            "P09": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Ruslan Mitkov": {
        "2003": {
            "E03": 1
        }
    },
    "Zhang Min": {
        "2004": {
            "P04": 1
        },
        "2006": {
            "W06": 1,
            "P06": 1
        }
    },
    "Anna Hjalmarsson": {
        "2008": {
            "W08": 1
        },
        "2010": {
            "W10": 2
        }
    },
    "Heiko Vogler": {
        "2010": {
            "W10": 1
        }
    },
    "Yonatan Bisk": {
        "2012": {
            "W12": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Long Denis Paperno": {
        "2015": {
            "S15": 1
        }
    },
    "Henry Hamburger": {
        "1997": {
            "A97": 1
        }
    },
    "Bangalore Rambow Steve": {
        "2000": {
            "W00": 1
        }
    },
    "Eiichiro SUNITA": {
        "2000": {
            "P00": 1
        }
    },
    "Remi": {
        "2000": {
            "W00": 1
        }
    },
    "Charley Beller": {
        "2014": {
            "W14": 1
        }
    },
    "P James": {
        "2010": {
            "W10": 1
        }
    },
    "Amber": {
        "2011": {
            "W11": 2
        }
    },
    "Masao Utiyama": {
        "2001": {
            "S01": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Barbara McGillivray": {
        "2010": {
            "P10": 1
        }
    },
    "Degen": {
        "2015": {
            "P15": 1
        }
    },
    "Constantine": {
        "2011": {
            "W11": 1
        }
    },
    "Akiko Aizawa": {
        "2003": {
            "P03": 1
        }
    },
    "Michael C Frank": {
        "2010": {
            "N10": 1
        },
        "2013": {
            "Q13": 1
        }
    },
    "R Kan": {
        "2002": {
            "W02": 1
        }
    },
    "Zobia Rehman": {
        "2011": {
            "W11": 1
        }
    },
    "Chao Che Xiaojun Zheng": {
        "2014": {
            "W14": 1
        }
    },
    "Kangxi Xinyu Jiajun": {
        "2010": {
            "W10": 1
        }
    },
    "Fei": {
        "2008": {
            "W08": 1
        },
        "2011": {
            "P11": 1,
            "W11": 2
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Aaron": {
        "2014": {
            "D14": 1,
            "W14": 1
        }
    },
    "Robert Ingria": {
        "1994": {
            "A94": 1,
            "P94": 1
        }
    },
    "Stephen Soderland Mausam": {
        "2010": {
            "W10": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Tatsunori Mori": {
        "1997": {
            "W97": 1
        }
    },
    "Ismail El_Maarouf Vit Baisa": {
        "2013": {
            "W13": 1
        }
    },
    "Chenhao Tan": {
        "2014": {
            "P14": 1
        }
    },
    "Edward Loper": {
        "2008": {
            "W08": 1
        },
        "2002": {
            "W02": 1
        },
        "2004": {
            "P04": 1
        },
        "2010": {
            "W10": 1
        },
        "2007": {
            "N07": 1,
            "S07": 1
        }
    },
    "F Alan": {
        "2014": {
            "W14": 1
        }
    },
    "David Matthews": {
        "2011": {
            "W11": 1
        }
    },
    "Derek Barnes": {
        "2014": {
            "D14": 1
        }
    },
    "Jeff Sorensen": {
        "2005": {
            "W05": 1
        }
    },
    "Sven Dickinson": {
        "2012": {
            "S12": 1
        }
    },
    "Jim Hieronymus": {
        "2003": {
            "P03": 1
        }
    },
    "Japan Shiga": {
        "2000": {
            "W00": 1
        }
    },
    "Cheol-Young": {
        "2012": {
            "W12": 1
        }
    },
    "Hans": {
        "2015": {
            "W15": 1
        }
    },
    "Lluis Marquez Carreras": {
        "2003": {
            "E03": 1
        }
    },
    "Shuly Wintner": {
        "2009": {
            "E09": 1
        },
        "2011": {
            "D11": 1
        },
        "2006": {
            "P06": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "J\u00a8urgen": {
        "2013": {
            "W13": 1
        }
    },
    "John S Justeson Slava M Katz": {
        "1995": {
            "J95": 1
        }
    },
    "Katsuhito": {
        "2012": {
            "W12": 1
        }
    },
    "Paul C Davis": {
        "1999": {
            "W99": 1
        }
    },
    "Hao Li": {
        "2011": {
            "W11": 1
        }
    },
    "Alan Ritter": {
        "2013": {
            "Q13": 1
        }
    },
    "Christopher Culy": {
        "2001": {
            "P01": 1
        },
        "2004": {
            "N04": 1
        }
    },
    "John McCaw": {
        "2007": {
            "N07": 1
        }
    },
    "Tong": {
        "2011": {
            "D11": 1
        }
    },
    "Toni": {
        "2015": {
            "W15": 1
        }
    },
    "Cyril Labb\u00b4e": {
        "2015": {
            "W15": 1
        }
    },
    "Majid Yazdani": {
        "2011": {
            "P11": 1
        },
        "2015": {
            "D15": 1,
            "K15": 1
        }
    },
    "David M Magerman": {
        "1992": {
            "P92": 1
        },
        "1995": {
            "P95": 1
        }
    },
    "Deng Zhou": {
        "2009": {
            "P09": 1
        }
    },
    "Yoon Kim": {
        "2014": {
            "D14": 1,
            "W14": 1
        }
    },
    "Varvara Logacheva": {
        "2014": {
            "W14": 1
        }
    },
    "Ruli": {
        "2015": {
            "W15": 1
        }
    },
    "Qun Liu": {
        "2009": {
            "D09": 1
        },
        "2010": {
            "P10": 1
        },
        "2005": {
            "P05": 1
        }
    },
    "Je Hun Jeon": {
        "2009": {
            "P09": 1
        }
    },
    "Francisco": {
        "2013": {
            "D13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Ali Mert Ruken": {
        "2014": {
            "W14": 1
        }
    },
    "Traci": {
        "1998": {
            "W98": 1
        }
    },
    "Shomir": {
        "2012": {
            "P12": 1
        }
    },
    "Christos Alexandra Mark": {
        "2014": {
            "E14": 1
        }
    },
    "Daniel Mills": {
        "2011": {
            "P11": 1
        }
    },
    "Michael Kai\u00dfer": {
        "2005": {
            "W05": 1
        }
    },
    "Lucian Galescu": {
        "2013": {
            "W13": 1
        }
    },
    "A David": {
        "2013": {
            "W13": 1
        },
        "2006": {
            "W06": 2
        }
    },
    "Qin Iris": {
        "2007": {
            "N07": 1
        }
    },
    "Weiwei Sun": {
        "2010": {
            "P10": 1
        },
        "2014": {
            "S14": 1
        }
    },
    "Melbourne": {
        "2012": {
            "N12": 1
        }
    },
    "Ido": {
        "2005": {
            "W05": 1
        }
    },
    "Lonneke van_der_Plas": {
        "2009": {
            "N09": 1
        },
        "2011": {
            "P11": 1
        },
        "2006": {
            "P06": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Stella Markantonatou": {
        "2014": {
            "W14": 1
        }
    },
    "Ai He": {
        "2013": {
            "W13": 1
        }
    },
    "Piotr Mirowski": {
        "2015": {
            "P15": 1
        }
    },
    "Alex Lascarides": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "E09": 1
        },
        "2003": {
            "E03": 1
        },
        "1999": {
            "J99": 1
        },
        "1993": {
            "E93": 1
        }
    },
    "Charles": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Huizhen Wang": {
        "2010": {
            "P10": 1,
            "W10": 1
        }
    },
    "Livy Real Alexandre Rademaker": {
        "2015": {
            "W15": 1
        }
    },
    "Udo Hahn": {
        "2010": {
            "P10": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Mieko": {
        "2003": {
            "J03": 1
        }
    },
    "Cristina": {
        "2012": {
            "W12": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Tetsuya Nasulcawa": {
        "1995": {
            "P95": 1
        }
    },
    "Marc Moens": {
        "2000": {
            "W00": 1
        },
        "1995": {
            "E95": 1
        },
        "1988": {
            "J88": 1
        },
        "1989": {
            "E89": 1
        },
        "1987": {
            "P87": 1
        }
    },
    "Jim Kimzey": {
        "2006": {
            "W06": 1
        }
    },
    "Wook Hur Choi": {
        "1998": {
            "P98": 1
        }
    },
    "Simon Clematide": {
        "2011": {
            "W11": 1
        }
    },
    "Thomas Meyer": {
        "2013": {
            "W13": 1
        }
    },
    "Edith Spaan": {
        "1993": {
            "E93": 1
        }
    },
    "Endong Xun": {
        "2000": {
            "P00": 2
        }
    },
    "Pawe\u0142 Mazur": {
        "2006": {
            "P06": 1
        }
    },
    "Iker": {
        "2009": {
            "W09": 1
        }
    },
    "Xiang Gao": {
        "2010": {
            "W10": 1
        }
    },
    "Snyder Naseem Eisenstein": {
        "2008": {
            "D08": 1
        }
    },
    "Rashmi Prasad": {
        "2002": {
            "P02": 1
        },
        "2006": {
            "P06": 1
        },
        "2008": {
            "W08": 1
        },
        "2010": {
            "W10": 1
        },
        "2013": {
            "S13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Gregory Abowd": {
        "2014": {
            "W14": 1
        }
    },
    "Maya Ando Shun Ishizaki": {
        "2012": {
            "W12": 1
        }
    },
    "Jaeger": {
        "2014": {
            "W14": 1
        }
    },
    "Lyle": {
        "2012": {
            "P12": 1
        },
        "2013": {
            "N13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Kevin Duh": {
        "2010": {
            "D10": 1,
            "W10": 2
        },
        "2013": {
            "P13": 1,
            "W13": 2
        },
        "2014": {
            "E14": 1
        },
        "2015": {
            "W15": 2,
            "P15": 1
        }
    },
    "Yasuhiro Minami": {
        "2009": {
            "W09": 1
        }
    },
    "Arndt Riester": {
        "2009": {
            "P09": 1
        }
    },
    "Nikolaos Daniel": {
        "2014": {
            "E14": 1
        }
    },
    "Kumar Santanu": {
        "2013": {
            "W13": 1
        }
    },
    "Elaine A Rich": {
        "1988": {
            "A88": 1
        }
    },
    "Michaela Atterer": {
        "2009": {
            "W09": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "T Mona": {
        "2004": {
            "W04": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Peter Ruhrberg": {
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Nikhil Johri": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Ruth Reeves": {
        "2004": {
            "W04": 1
        }
    },
    "Stephen Cox": {
        "2004": {
            "W04": 1
        }
    },
    "Erwin Marsi": {
        "2008": {
            "P08": 1
        },
        "2011": {
            "W11": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "Antoine Widl\u00a8ocher": {
        "2006": {
            "E06": 1
        }
    },
    "Tan": {
        "2003": {
            "P03": 1
        },
        "2013": {
            "S13": 1
        }
    },
    "Suzanne": {
        "2005": {
            "W05": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "W07": 2
        },
        "2008": {
            "W08": 1
        },
        "2012": {
            "S12": 1
        },
        "2014": {
            "D14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Tai": {
        "2011": {
            "W11": 1
        }
    },
    "Kevin": {
        "2002": {
            "W02": 1
        },
        "2004": {
            "N04": 1
        },
        "2005": {
            "W05": 1
        },
        "2009": {
            "N09": 1,
            "W09": 1
        },
        "2010": {
            "P10": 1
        },
        "2012": {
            "P12": 1,
            "W12": 1,
            "D12": 1
        },
        "2013": {
            "P13": 1,
            "D13": 1
        },
        "2014": {
            "D14": 2,
            "W14": 1,
            "P14": 2
        },
        "2015": {
            "D15": 1,
            "W15": 2
        }
    },
    "John Lamping": {
        "1982": {
            "P82": 1
        }
    },
    "Michael Michael Shafir": {
        "2012": {
            "W12": 1
        }
    },
    "Silvia": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "W09": 1
        }
    },
    "Mani Gates Bloedorn": {
        "1999": {
            "P99": 1
        }
    },
    "Wen-Cheng Lin": {
        "1999": {
            "P99": 1
        }
    },
    "Kiem-Hieu Nguyen": {
        "2012": {
            "W12": 1
        }
    },
    "Malte Gabsdil": {
        "2003": {
            "P03": 1
        },
        "2004": {
            "P04": 1
        }
    },
    "Julia Hockenmaier": {
        "2002": {
            "P02": 1
        },
        "2003": {
            "P03": 1
        },
        "2006": {
            "W06": 1,
            "P06": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Shi Sarkar": {
        "2007": {
            "N07": 1
        }
    },
    "Gregor Thiele": {
        "2013": {
            "P13": 1
        },
        "2014": {
            "P14": 1,
            "E14": 1
        }
    },
    "Norbert": {
        "1998": {
            "W98": 1
        }
    },
    "Lemon Liu": {
        "2006": {
            "E06": 1
        }
    },
    "Meixun Jin": {
        "2011": {
            "W11": 1
        }
    },
    "Antti Kerminen": {
        "2003": {
            "W03": 1
        }
    },
    "O K Victor": {
        "2015": {
            "P15": 1
        }
    },
    "Jody Foo": {
        "2009": {
            "W09": 1
        }
    },
    "Preslav Nakov": {
        "2005": {
            "P05": 1
        },
        "2014": {
            "D14": 1
        },
        "2015": {
            "K15": 1
        }
    },
    "Xiaofang Yang": {
        "2013": {
            "P13": 1
        }
    },
    "Shuyin Li": {
        "2006": {
            "W06": 1
        }
    },
    "Kai Hong": {
        "2015": {
            "D15": 1
        }
    },
    "Thierry": {
        "2014": {
            "W14": 1
        }
    },
    "Ruzhan": {
        "2007": {
            "W07": 1
        }
    },
    "David Moeljadi": {
        "2015": {
            "W15": 1
        }
    },
    "Afsaneh Fazly Barak": {
        "2014": {
            "W14": 1
        }
    },
    "Kristina Gulordava": {
        "2011": {
            "W11": 1
        }
    },
    "Laurent Romary": {
        "2001": {
            "P01": 1
        }
    },
    "S Swier": {
        "2004": {
            "W04": 1
        }
    },
    "Jianguo Xiao": {
        "2011": {
            "P11": 1
        },
        "2010": {
            "P10": 1
        },
        "2007": {
            "P07": 1
        },
        "2014": {
            "D14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Dilara Toruno\u02d8glu-Selamet": {
        "2015": {
            "W15": 2
        }
    },
    "Qiang Huang": {
        "2004": {
            "W04": 1
        }
    },
    "Min Chen": {
        "2012": {
            "P12": 1
        }
    },
    "Kentaro De": {
        "2012": {
            "D12": 1
        }
    },
    "Alberto": {
        "2013": {
            "S13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "M A": {
        "2014": {
            "W14": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Jung-jae Kim": {
        "2000": {
            "P00": 1
        },
        "2004": {
            "W04": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Michael Collins": {
        "2000": {
            "A00": 1
        },
        "2002": {
            "P02": 1
        },
        "2004": {
            "W04": 1
        },
        "2005": {
            "P05": 2
        },
        "2015": {
            "W15": 1
        }
    },
    "Basilio Sierra": {
        "2009": {
            "W09": 1
        }
    },
    "Mark Johnson": {
        "1985": {
            "P85": 1
        },
        "1991": {
            "J91": 1
        },
        "1994": {
            "J94": 1
        },
        "1995": {
            "J95": 1
        },
        "1998": {
            "J98": 1
        },
        "1999": {
            "P99": 1
        },
        "2001": {
            "P01": 1
        },
        "2003": {
            "W03": 1
        },
        "2004": {
            "N04": 1,
            "P04": 2
        },
        "2005": {
            "P05": 1
        },
        "2006": {
            "P06": 1
        },
        "2008": {
            "P08": 1,
            "W08": 1,
            "D08": 1
        },
        "2009": {
            "N09": 1
        },
        "2010": {
            "P10": 2,
            "N10": 1,
            "D10": 1
        },
        "2013": {
            "Q13": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "West Albert Park": {
        "2011": {
            "W11": 1
        }
    },
    "Isahara Kanzaki": {
        "1999": {
            "P99": 1
        }
    },
    "Tomoko Han-Cheol Dan": {
        "2010": {
            "W10": 1
        }
    },
    "Markus Egg": {
        "1998": {
            "P98": 1
        }
    },
    "Yair Even-Zohar": {
        "2001": {
            "W01": 1
        }
    },
    "Utpal Kumar Sikdar": {
        "2014": {
            "S14": 1
        }
    },
    "D Burger Henderson Kim": {
        "2011": {
            "D11": 1
        }
    },
    "Howard S Kurtzman": {
        "1992": {
            "J92": 1
        }
    },
    "Klaus": {
        "2012": {
            "N12": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Charles B Callaway": {
        "2009": {
            "W09": 1
        },
        "2002": {
            "P02": 1
        }
    },
    "S Vogel Nieflen": {
        "1998": {
            "P98": 1
        }
    },
    "Partha Pakray": {
        "2014": {
            "S14": 1
        }
    },
    "Sanguthevar Raj asekaran": {
        "1995": {
            "P95": 1
        }
    },
    "Tracy Lin": {
        "2003": {
            "W03": 1
        },
        "2005": {
            "P05": 1
        }
    },
    "YUE Ming": {
        "2006": {
            "P06": 1
        }
    },
    "Anders S\u00f8gaard": {
        "2009": {
            "W09": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "W14": 1,
            "S14": 1
        }
    },
    "Liu": {
        "2005": {
            "W05": 1
        },
        "2007": {
            "N07": 1
        },
        "2008": {
            "W08": 1
        },
        "2009": {
            "W09": 1,
            "D09": 1
        },
        "2010": {
            "D10": 1
        },
        "2012": {
            "P12": 2
        }
    },
    "Dionysius": {
        "2013": {
            "W13": 1
        }
    },
    "Sandra K\u00a8ubler": {
        "2011": {
            "W11": 2
        },
        "2012": {
            "W12": 3
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 2
        },
        "2015": {
            "W15": 1
        }
    },
    "Lu": {
        "2012": {
            "W12": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "W14": 1,
            "P14": 1
        }
    },
    "Genichiro Kikui": {
        "1998": {
            "P98": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "William C Mann": {
        "1981": {
            "J81": 1
        },
        "1983": {
            "E83": 1
        }
    },
    "Feng Ji": {
        "2010": {
            "W10": 1
        }
    },
    "Dmitry Supranovich": {
        "2015": {
            "W15": 1
        }
    },
    "Fang ZHOU ZHU": {
        "2009": {
            "D09": 1
        }
    },
    "Ravikanth Repaka": {
        "2015": {
            "S15": 1
        }
    },
    "Alexsandro Fonseca": {
        "2014": {
            "W14": 1
        }
    },
    "Shaolin Qu Joyce Y Chai": {
        "2007": {
            "N07": 1
        }
    },
    "Dayne": {
        "2004": {
            "W04": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "F Kathleen": {
        "1997": {
            "W97": 1
        }
    },
    "Berlin Chen": {
        "2010": {
            "P10": 1
        }
    },
    "Aitor": {
        "2006": {
            "W06": 1
        }
    },
    "Aditya Qing Dou": {
        "2010": {
            "W10": 1
        }
    },
    "Ghosh Smaranda Wacholder Mark Aakhus Matthew": {
        "2014": {
            "W14": 1
        }
    },
    "Jinpeng Wang": {
        "2015": {
            "P15": 1
        }
    },
    "Sebastian Krause": {
        "2015": {
            "W15": 1
        }
    },
    "Julien Corman Nathalie Aussenac-Gilles Laure Vieu": {
        "2015": {
            "S15": 1
        }
    },
    "Joshua Crowgey Fei": {
        "2013": {
            "W13": 1
        }
    },
    "Alexandre Patry": {
        "2006": {
            "W06": 1
        }
    },
    "Craige Roberts": {
        "1999": {
            "W99": 1
        }
    },
    "Adam Kilgarriff": {
        "1997": {
            "W97": 1
        }
    },
    "Young-Suk Lee": {
        "2003": {
            "P03": 1
        }
    },
    "Rashmi Gangadharaiah Balakrishnan Narayanaswamy": {
        "2014": {
            "W14": 1
        }
    },
    "Beckman": {
        "2014": {
            "W14": 1
        }
    },
    "Marie Meteer": {
        "1994": {
            "W94": 2
        },
        "2012": {
            "W12": 1
        }
    },
    "Sanjeev": {
        "2012": {
            "P12": 1
        }
    },
    "Simon Fraser": {
        "2006": {
            "W06": 1
        }
    },
    "Seyed Abolghasem Mirroshandel Alexis": {
        "2011": {
            "W11": 1
        }
    },
    "Sou\u010dek J\u00e4rvinen Adam LaMontagne": {
        "2013": {
            "W13": 1
        }
    },
    "M William": {
        "2011": {
            "P11": 1
        }
    },
    "Rada Yao Xiao": {
        "2015": {
            "D15": 1
        }
    },
    "Olga Gurevich Scott A Waterman": {
        "2009": {
            "W09": 1
        }
    },
    "Bob Duncan": {
        "2011": {
            "W11": 1
        }
    },
    "Kai": {
        "2015": {
            "S15": 1
        }
    },
    "Justine Cassell\u2020": {
        "2001": {
            "P01": 1
        }
    },
    "John Hale Reinhold Kliegl": {
        "2008": {
            "P08": 1
        }
    },
    "Giuseppe Carenini": {
        "1998": {
            "W98": 1
        },
        "2000": {
            "P00": 1
        },
        "2006": {
            "E06": 1
        },
        "2008": {
            "P08": 1
        },
        "2010": {
            "D10": 1,
            "W10": 1
        },
        "2012": {
            "W12": 1,
            "D12": 1
        },
        "2013": {
            "N13": 1
        },
        "2014": {
            "D14": 1,
            "P14": 1
        }
    },
    "Hyeju Jang": {
        "2012": {
            "E12": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Nathanael": {
        "2012": {
            "P12": 1
        },
        "2013": {
            "S13": 1
        }
    },
    "Lori Levin": {
        "2012": {
            "W12": 1
        },
        "1997": {
            "W97": 1
        }
    },
    "Thamar": {
        "2007": {
            "N07": 1
        }
    },
    "Libin Shen": {
        "2008": {
            "P08": 1,
            "D08": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "J Bachenko": {
        "1990": {
            "J90": 1
        }
    },
    "Maksim Tkachenko Hady W Lauw": {
        "2015": {
            "P15": 1
        }
    },
    "A Eisner": {
        "2005": {
            "W05": 1
        }
    },
    "Veit": {
        "2004": {
            "W04": 1
        }
    },
    "Aravind K Joshi": {
        "1987": {
            "P87": 1
        },
        "1988": {
            "P88": 2
        },
        "1989": {
            "P89": 1
        },
        "1992": {
            "A92": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "P07": 1
        },
        "2008": {
            "D08": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Detlef Prescher": {
        "2004": {
            "W04": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "Alistair Willis": {
        "1999": {
            "P99": 1
        }
    },
    "Diogo Bruno": {
        "2014": {
            "S14": 1
        }
    },
    "I-Ju E Tseng": {
        "2002": {
            "W02": 1
        }
    },
    "Eric Fosler-Lussier": {
        "2003": {
            "P03": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "K Bretonnel Cohen": {
        "2011": {
            "W11": 2
        }
    },
    "Strapparava": {
        "2010": {
            "W10": 1
        }
    },
    "Daniele Pighin Lluis": {
        "2011": {
            "W11": 1
        }
    },
    "Gordon": {
        "2015": {
            "W15": 1
        }
    },
    "Koldo Gojenola": {
        "2000": {
            "A00": 1
        },
        "2009": {
            "W09": 1
        },
        "2014": {
            "S14": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Wojciech Jaworski Adam Przepi\u00f3rkowski": {
        "2014": {
            "S14": 1
        }
    },
    "Varvara Gustavo Henrique Frederic": {
        "2015": {
            "W15": 1
        }
    },
    "Keh-Yih Su": {
        "2010": {
            "P10": 1
        },
        "1996": {
            "W96": 1
        }
    },
    "D Jason": {
        "2011": {
            "W11": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Changle Zhou": {
        "2014": {
            "E14": 1
        }
    },
    "Robbie Haertel": {
        "2008": {
            "P08": 1
        },
        "2015": {
            "W15": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Stanley": {
        "2010": {
            "W10": 1
        }
    },
    "Yoshimasa Tsuruoka": {
        "2005": {
            "W05": 1
        },
        "2015": {
            "W15": 2
        }
    },
    "Javi Fern\u00b4andez": {
        "2014": {
            "S14": 1
        }
    },
    "t Daniela Kurzt": {
        "1998": {
            "P98": 1
        }
    },
    "Helen Kai-yun Chen": {
        "2010": {
            "W10": 1
        }
    },
    "Patrick Ruch": {
        "2000": {
            "W00": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Goyal Riloff Daume": {
        "2010": {
            "W10": 1
        }
    },
    "A Noah": {
        "2015": {
            "D15": 2
        }
    },
    "Hong Lei Guo": {
        "2006": {
            "W06": 1
        }
    },
    "Max Choly Wei Ding": {
        "2010": {
            "S10": 1
        }
    },
    "Marten van": {
        "2015": {
            "W15": 1
        }
    },
    "Anna Feltracco": {
        "2015": {
            "W15": 1
        }
    },
    "Valerie": {
        "1998": {
            "W98": 1
        }
    },
    "R Koncel-Kedziorski": {
        "2014": {
            "D14": 1
        }
    },
    "Ivan Bulyko": {
        "2003": {
            "N03": 1
        }
    },
    "Valerio": {
        "2011": {
            "W11": 1
        }
    },
    "Brendan O\u2019Connor": {
        "2010": {
            "D10": 1
        },
        "2011": {
            "P11": 1,
            "D11": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Ben Dragomir Steven": {
        "2014": {
            "W14": 1
        }
    },
    "Xiang Li": {
        "2011": {
            "W11": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Tod Allman": {
        "2011": {
            "W11": 1
        }
    },
    "Tieyun Qian Bing Liu": {
        "2013": {
            "D13": 1
        }
    },
    "WU Hua": {
        "2004": {
            "P04": 1
        },
        "2005": {
            "P05": 1
        }
    },
    "Rolf Backofen": {
        "1993": {
            "P93": 2
        }
    },
    "A Duboue R McKeown": {
        "2001": {
            "P01": 1
        },
        "2003": {
            "W03": 1
        }
    },
    "John Niekrasz": {
        "2009": {
            "W09": 1
        }
    },
    "Vladimir Eidelman": {
        "2008": {
            "P08": 2
        },
        "2010": {
            "P10": 1
        }
    },
    "Yanqing Chen": {
        "2014": {
            "P14": 1
        }
    },
    "Richard Power": {
        "2010": {
            "P10": 1
        },
        "1998": {
            "W98": 2
        }
    },
    "Lalita Narupiyakul": {
        "2006": {
            "P06": 1
        }
    },
    "Blanco": {
        "2010": {
            "D10": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "N12": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Milos Stanojevic": {
        "2015": {
            "D15": 1
        }
    },
    "Matthew Theresa": {
        "2001": {
            "W01": 1
        }
    },
    "W Michael": {
        "2005": {
            "W05": 1
        }
    },
    "Rachel Veronika Zielinska": {
        "2004": {
            "W04": 1
        }
    },
    "Tillmann": {
        "1998": {
            "P98": 1
        }
    },
    "Mats Wiren": {
        "1987": {
            "E87": 1
        },
        "1989": {
            "E89": 1
        }
    },
    "Suresh Chande": {
        "2003": {
            "W03": 1
        }
    },
    "H Ian": {
        "2009": {
            "D09": 1
        }
    },
    "Li Baroni": {
        "2014": {
            "E14": 1
        }
    },
    "Ying Ding": {
        "2014": {
            "W14": 1
        }
    },
    "Masaaki NAGATA": {
        "1998": {
            "P98": 1
        }
    },
    "Moritz Dan": {
        "2013": {
            "P13": 1
        }
    },
    "Benjamin Han": {
        "2006": {
            "N06": 1
        }
    },
    "Julian Kupiec": {
        "1993": {
            "P93": 1
        }
    },
    "Patrick": {
        "2008": {
            "W08": 1
        },
        "2002": {
            "W02": 1
        },
        "2004": {
            "W04": 1
        },
        "2005": {
            "W05": 1
        },
        "1998": {
            "W98": 2
        }
    },
    "Vivi Nastase": {
        "2012": {
            "P12": 1,
            "D12": 1
        }
    },
    "David Huggins-Daines": {
        "2008": {
            "P08": 1,
            "W08": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Masahiro Araki Daisuke Takegoshi": {
        "2012": {
            "W12": 1
        }
    },
    "Kuniko SAITO": {
        "2003": {
            "W03": 1
        }
    },
    "Eugen": {
        "2015": {
            "W15": 1
        }
    },
    "Ramat Gan": {
        "1998": {
            "W98": 1
        }
    },
    "Suzanne Stevenson": {
        "2003": {
            "W03": 1
        },
        "2006": {
            "E06": 1
        },
        "1999": {
            "E99": 1
        }
    },
    "Hajime Tsukada": {
        "2010": {
            "W10": 2
        },
        "2003": {
            "P03": 1
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "P13": 1,
            "D13": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Buzhou Tang": {
        "2010": {
            "W10": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Haifeng Wang": {
        "2009": {
            "P09": 1
        },
        "2006": {
            "P06": 2
        },
        "2007": {
            "P07": 1
        }
    },
    "Kurt": {
        "2003": {
            "W03": 2
        }
    },
    "Cherry Lin": {
        "2003": {
            "P03": 1
        }
    },
    "Sergey V Pakhomov": {
        "1999": {
            "P99": 1
        }
    },
    "Jingjing Liu": {
        "2009": {
            "D09": 1
        },
        "2010": {
            "N10": 1,
            "W10": 1
        }
    },
    "Peter Spyns": {
        "1994": {
            "A94": 1
        }
    },
    "Valentin I Spitkovsky": {
        "2010": {
            "P10": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Alejandro": {
        "2012": {
            "E12": 1
        }
    },
    "Weiran Xu": {
        "2010": {
            "W10": 1
        }
    },
    "Dave Golland": {
        "2010": {
            "D10": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Vivek Srikumar": {
        "2011": {
            "D11": 1
        },
        "2014": {
            "E14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Seeger Fisher": {
        "2007": {
            "P07": 1
        }
    },
    "Pushpak Bhattacharyya": {
        "2009": {
            "D09": 1
        },
        "2010": {
            "P10": 1,
            "S10": 1
        },
        "2011": {
            "W11": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "D15": 1,
            "W15": 1
        }
    },
    "Yuan Du": {
        "2014": {
            "W14": 1
        }
    },
    "Dimitrios Galanis": {
        "2015": {
            "P15": 1
        }
    },
    "Yun-Nung": {
        "2015": {
            "P15": 1
        }
    },
    "Jonathan Chang Miroslav Dud\u00b4\u0131k": {
        "2007": {
            "S07": 1
        }
    },
    "J Medero": {
        "2009": {
            "N09": 1
        }
    },
    "Barry Haddow": {
        "2007": {
            "W07": 1
        }
    },
    "Anja Belz": {
        "2008": {
            "P08": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Case Study": {
        "2014": {
            "W14": 1
        }
    },
    "Indrek": {
        "2014": {
            "W14": 1
        }
    },
    "Robert J Bobrow": {
        "1990": {
            "P90": 1
        }
    },
    "Patrick Wang": {
        "2006": {
            "P06": 1
        }
    },
    "Mona Nizar Owen Safiullah": {
        "2006": {
            "E06": 1
        }
    },
    "Suzanne Stevensont": {
        "2001": {
            "J01": 1
        }
    },
    "Partha Pratim Talukdar": {
        "2012": {
            "W12": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Andrew Haas": {
        "1989": {
            "J89": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Yoav Goldberg": {
        "2013": {
            "S13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "De_Meulder": {
        "2003": {
            "W03": 1
        }
    },
    "Quang Do": {
        "2006": {
            "P06": 1
        }
    },
    "Yuzong Katrin Kirchhoff": {
        "2013": {
            "N13": 1
        }
    },
    "Chih-Jen Lin": {
        "2009": {
            "P09": 1
        }
    },
    "Xue Zhou": {
        "2012": {
            "W12": 1
        }
    },
    "Mobyen Uddin Ahmed": {
        "2013": {
            "W13": 1
        }
    },
    "Thilo G\u00a8otz J\u00a8orn Kottmann Alexander Lang": {
        "2014": {
            "W14": 1
        }
    },
    "I Dan Melamed": {
        "1995": {
            "W95": 1
        },
        "2004": {
            "P04": 2
        },
        "1997": {
            "A97": 1,
            "E97": 2,
            "P97": 2
        }
    },
    "Hans van_Halteren": {
        "2003": {
            "W03": 1
        },
        "2004": {
            "W04": 1,
            "P04": 1
        }
    },
    "Daniel Ortiz-Martinez": {
        "2010": {
            "P10": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Barry Schiffman": {
        "2001": {
            "P01": 1
        }
    },
    "Paul Sophia": {
        "2010": {
            "W10": 1
        }
    },
    "Chen": {
        "2012": {
            "W12": 1
        }
    },
    "Poon Domingos": {
        "2010": {
            "P10": 1
        }
    },
    "Kairit Sirts": {
        "2013": {
            "Q13": 1
        }
    },
    "Rashid M Abdalla": {
        "2006": {
            "P06": 1
        }
    },
    "Janyce": {
        "2014": {
            "E14": 1
        }
    },
    "Vishal Vachhani Manoj K Chinnakotla Mitesh M Khapra Pushpak": {
        "2010": {
            "W10": 1
        }
    },
    "Roland": {
        "2015": {
            "W15": 1
        },
        "2013": {
            "N13": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Ehsanul": {
        "2004": {
            "W04": 1
        }
    },
    "Jaeyoung Jung Li Na Hiroyuki Akama": {
        "2010": {
            "W10": 1
        }
    },
    "Yanjun Ma": {
        "2010": {
            "P10": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Chris J Staros": {
        "1983": {
            "A83": 1
        }
    },
    "Lucy Vanderwende": {
        "2009": {
            "N09": 1
        },
        "2013": {
            "W13": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Margaret Mitchell Roark": {
        "2007": {
            "W07": 1
        }
    },
    "Meichun Hsu": {
        "2013": {
            "D13": 1
        }
    },
    "Xiaodong Zhou": {
        "2008": {
            "P08": 1
        }
    },
    "Chaoyue Wang Guohong Fu": {
        "2012": {
            "W12": 1
        }
    },
    "Reut Tsarfaty": {
        "2009": {
            "D09": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "I S Kononenko": {
        "1983": {
            "E83": 1
        }
    },
    "Roberto Gemello": {
        "1987": {
            "E87": 1
        }
    },
    "from News Articles": {
        "2015": {
            "D15": 1
        }
    },
    "Roberto Garigliano": {
        "1994": {
            "W94": 1
        }
    },
    "Chris Fournier": {
        "2012": {
            "N12": 1
        }
    },
    "Cohn": {
        "2005": {
            "W05": 1
        }
    },
    "Nattapong Tongtep": {
        "2011": {
            "W11": 1
        }
    },
    "Pierre Isabelle": {
        "2007": {
            "N07": 1,
            "W07": 1
        }
    },
    "Yamamoto": {
        "2010": {
            "W10": 1
        }
    },
    "William P Headden": {
        "2006": {
            "W06": 1
        }
    },
    "Patricio": {
        "2014": {
            "W14": 2,
            "S14": 1
        }
    },
    "Mari Ostendorf": {
        "2003": {
            "N03": 2
        },
        "2005": {
            "P05": 2
        },
        "2006": {
            "N06": 1
        },
        "2015": {
            "D15": 2
        }
    },
    "Dekai Wu'": {
        "1988": {
            "J88": 1
        }
    },
    "Jan Alexandersson": {
        "2009": {
            "W09": 1
        },
        "1997": {
            "A97": 1
        }
    },
    "Aditya Bhargava": {
        "2009": {
            "N09": 1,
            "W09": 1
        },
        "2010": {
            "N10": 1,
            "D10": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Bohnet": {
        "2012": {
            "E12": 1
        }
    },
    "Hendrickx": {
        "2014": {
            "W14": 1
        }
    },
    "Takaaki Tanaka Nagata": {
        "2015": {
            "P15": 1
        }
    },
    "P S Eric": {
        "2010": {
            "W10": 1
        }
    },
    "Norman M Fraser Richard A Hudsont": {
        "1992": {
            "J92": 1
        }
    },
    "Mark Lewellen": {
        "1998": {
            "P98": 1
        }
    },
    "Brijesh Bhatt Lahari Poddar Pushpak": {
        "2013": {
            "P13": 1
        }
    },
    "J K Kalita": {
        "1984": {
            "P84": 1
        }
    },
    "Satoshi Sonoh": {
        "2015": {
            "W15": 1
        }
    },
    "Jonas": {
        "2009": {
            "W09": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "E14": 1
        },
        "2015": {
            "W15": 2
        }
    },
    "George A Miller": {
        "1984": {
            "P84": 1
        },
        "1985": {
            "P85": 1
        },
        "1998": {
            "J98": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "Yifan He": {
        "2010": {
            "P10": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "R Alan": {
        "2011": {
            "W11": 1
        }
    },
    "T H Nguyen": {
        "2011": {
            "W11": 1
        }
    },
    "Robert I P Irtgria": {
        "1990": {
            "P90": 1
        }
    },
    "Hatte R Blejer": {
        "1989": {
            "P89": 1
        }
    },
    "Tomek Kit Ting George Aaron Sarah Boris Ching-Sheng Ning Ignacio": {
        "2014": {
            "W14": 1
        }
    },
    "W Kenneth": {
        "2000": {
            "W00": 1
        }
    },
    "Stefano A Cerni": {
        "1983": {
            "E83": 1
        }
    },
    "Pierre Zweigenbaum": {
        "2009": {
            "E09": 1
        }
    },
    "Martha Palmer'": {
        "1997": {
            "A97": 1
        }
    },
    "Xiao Li": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "D09": 2
        },
        "2010": {
            "P10": 1
        }
    },
    "Jeongwoo Ko": {
        "2007": {
            "P07": 1
        }
    },
    "Arne": {
        "2015": {
            "D15": 1
        }
    },
    "Veenstra van_den": {
        "2000": {
            "W00": 1
        }
    },
    "Marcos Calvo": {
        "2013": {
            "W13": 1
        }
    },
    "Dragomir R Agam": {
        "2006": {
            "P06": 1
        }
    },
    "Zheng-Cui": {
        "2002": {
            "W02": 1
        }
    },
    "Sebastian Thrun": {
        "2000": {
            "P00": 1
        }
    },
    "Brian Young": {
        "2004": {
            "W04": 1
        }
    },
    "Mingyao Zhang": {
        "2009": {
            "W09": 1
        }
    },
    "Arne Jnsson": {
        "1998": {
            "P98": 1
        }
    },
    "R K Bretonnel": {
        "2014": {
            "W14": 1
        }
    },
    "Bettina Schrader": {
        "2006": {
            "P06": 1
        }
    },
    "Pradeep Dasigi": {
        "2012": {
            "P12": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Zhonghua Li Chen Yongguang Jiang": {
        "2012": {
            "W12": 1
        }
    },
    "Imre Solti": {
        "2010": {
            "W10": 1
        }
    },
    "Ngan L": {
        "2013": {
            "W13": 1
        }
    },
    "Gretchen P Brown": {
        "1980": {
            "J80": 1
        }
    },
    "Timothy Alex": {
        "2007": {
            "W07": 1
        }
    },
    "Aaron Dunlop": {
        "2010": {
            "N10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Joan Bachenko Eileen Fitzpatrick": {
        "1992": {
            "A92": 1
        }
    },
    "Gerlof Bouma": {
        "2010": {
            "P10": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Pei-Yun Hsueh": {
        "2009": {
            "W09": 1
        },
        "2006": {
            "E06": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Grace Y Chung": {
        "2007": {
            "W07": 1
        }
    },
    "Van_Michalak K Schubert": {
        "2009": {
            "E09": 1
        }
    },
    "Anil Kumar": {
        "2015": {
            "K15": 1
        }
    },
    "Mari Marti Hearst": {
        "2003": {
            "N03": 1
        }
    },
    "Ritu Singh": {
        "2012": {
            "W12": 1
        }
    },
    "Vladimir Pericliev": {
        "1984": {
            "P84": 1
        }
    },
    "Gideon S Mann": {
        "2008": {
            "P08": 1
        }
    },
    "Ond\u02c7rej Du\u02c7sek": {
        "2012": {
            "W12": 1
        }
    },
    "Preethi Jyothi": {
        "2010": {
            "N10": 1
        }
    },
    "Prem": {
        "2010": {
            "W10": 1
        }
    },
    "Mike Calcagno": {
        "2001": {
            "W01": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Scott Cyphers": {
        "2008": {
            "W08": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Hakoda Keita Hiroshi": {
        "2006": {
            "P06": 1
        }
    },
    "Shigeyuki Sakaki": {
        "2014": {
            "W14": 1
        }
    },
    "Mark W Davis": {
        "1995": {
            "E95": 1
        }
    },
    "Lauri Karttunen": {
        "1984": {
            "P84": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "Satoshi Sekinet": {
        "2001": {
            "S01": 1
        }
    },
    "Andrea Horbach": {
        "2013": {
            "S13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Oleksandr Kolomiyets": {
        "2011": {
            "P11": 1
        }
    },
    "N Michaud F McCoy": {
        "2001": {
            "P01": 1
        }
    },
    "Susanne": {
        "2012": {
            "W12": 1
        }
    },
    "Roger Evans": {
        "1995": {
            "P95": 1
        },
        "1989": {
            "E89": 1
        },
        "2005": {
            "P05": 1
        }
    },
    "David Figueroa": {
        "2012": {
            "W12": 1
        }
    },
    "Yookyung Kim": {
        "2009": {
            "P09": 1
        }
    },
    "Jeroen Geertzen": {
        "2006": {
            "W06": 1
        }
    },
    "Mary Dee Harris": {
        "2008": {
            "W08": 1
        }
    },
    "Alexander I": {
        "2010": {
            "W10": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Aynat Rubinstein": {
        "2013": {
            "W13": 1
        }
    },
    "Bile Gargouri": {
        "1998": {
            "P98": 1
        }
    },
    "Alelgn Tefera Yaregal Assabie": {
        "2014": {
            "W14": 1
        }
    },
    "Ira Smith": {
        "1997": {
            "A97": 1,
            "E97": 1,
            "P97": 1
        }
    },
    "Yashar": {
        "2009": {
            "W09": 1
        }
    },
    "Zhi-Hua Qian He-Yan": {
        "2010": {
            "W10": 1
        }
    },
    "Branimir Boguraev": {
        "1987": {
            "E87": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Roxana Girju": {
        "2010": {
            "D10": 1
        },
        "2007": {
            "W07": 1,
            "P07": 1
        }
    },
    "Jeffrey Kaye": {
        "2012": {
            "N12": 1
        }
    },
    "Masako KUME Gayle K SATO": {
        "1989": {
            "E89": 1
        }
    },
    "Kadri Hacioglu": {
        "2003": {
            "N03": 1
        },
        "2005": {
            "P05": 1
        }
    },
    "Ozaki Shimbo Komachi": {
        "2011": {
            "W11": 1
        }
    },
    "William B Dolan": {
        "2006": {
            "P06": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Kyungduk Kim": {
        "2008": {
            "W08": 1
        }
    },
    "Hideo Watanabe": {
        "2000": {
            "W00": 1
        }
    },
    "Mari": {
        "2003": {
            "W03": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Andrew Caines Paula Buttery": {
        "2014": {
            "W14": 1
        }
    },
    "Zhong Tou": {
        "2012": {
            "P12": 1
        }
    },
    "Jinsong Su": {
        "2010": {
            "P10": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Fabrice Lef`evre": {
        "2009": {
            "N09": 1
        }
    },
    "Daniel": {
        "2001": {
            "W01": 2
        },
        "2002": {
            "J02": 1
        },
        "2004": {
            "W04": 1,
            "N04": 1
        },
        "2005": {
            "W05": 2
        },
        "2007": {
            "W07": 1
        },
        "2010": {
            "N10": 2,
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2013": {
            "W13": 2
        },
        "2015": {
            "W15": 1
        }
    },
    "J\u00a8org": {
        "2010": {
            "W10": 1
        },
        "2012": {
            "E12": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Thomas O\u2019Hara": {
        "2005": {
            "W05": 1
        }
    },
    "Kedar Bellare": {
        "2009": {
            "D09": 1
        }
    },
    "Fulin Shi": {
        "2015": {
            "P15": 1
        }
    },
    "Carlyle Licata": {
        "2010": {
            "S10": 1
        }
    },
    "Janna Luker": {
        "2013": {
            "W13": 1
        }
    },
    "Christopher Pinchak": {
        "2006": {
            "E06": 1
        }
    },
    "Roller": {
        "2015": {
            "W15": 2
        }
    },
    "Shohei Higashiyama Kazuhiro Seki Kuniaki Uehara": {
        "2013": {
            "W13": 1
        }
    },
    "Anindya Ghose Panagiotis G Ipeirotis Arun Sundararajan": {
        "2007": {
            "P07": 1
        }
    },
    "Mona": {
        "2012": {
            "W12": 1
        },
        "2014": {
            "W14": 3
        },
        "2015": {
            "W15": 2
        }
    },
    "Andrew M David Ashok C Franz": {
        "2011": {
            "P11": 1
        }
    },
    "Jungyun Seo Robert F Simmons": {
        "1989": {
            "J89": 1
        }
    },
    "Jos\u00b4e M G\u00b4omez": {
        "2014": {
            "S14": 1
        }
    },
    "James R Curran": {
        "2010": {
            "P10": 1
        },
        "2004": {
            "P04": 1
        },
        "2005": {
            "P05": 1
        },
        "2006": {
            "E06": 1
        },
        "2007": {
            "P07": 2
        }
    },
    "Michaela Regneri": {
        "2010": {
            "P10": 1
        }
    },
    "Eisaku Maeda": {
        "2003": {
            "P03": 1,
            "W03": 1
        },
        "2004": {
            "P04": 1
        }
    },
    "Matthias H Heie": {
        "2010": {
            "P10": 1
        }
    },
    "David Palo Alto": {
        "2009": {
            "W09": 1
        }
    },
    "Shari": {
        "1997": {
            "W97": 1
        }
    },
    "Munro Ler": {
        "2003": {
            "W03": 1
        }
    },
    "Karl Andrew Andy David Mark": {
        "2010": {
            "N10": 1
        }
    },
    "Foster Langlais Lapalme": {
        "2002": {
            "W02": 1
        }
    },
    "Maayan Zhitomirsky-Geffet": {
        "2009": {
            "P09": 1
        }
    },
    "Ivan I Garibay": {
        "2000": {
            "A00": 1
        }
    },
    "Eugene Agichtein": {
        "2008": {
            "D08": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "Mark Stevenson": {
        "2001": {
            "J01": 1
        }
    },
    "Zeyu Zheng": {
        "2013": {
            "P13": 1
        }
    },
    "Geoffrey": {
        "2008": {
            "W08": 1
        },
        "2013": {
            "N13": 1,
            "D13": 1
        }
    },
    "Alexandra Balahur": {
        "2011": {
            "W11": 1
        }
    },
    "A Laura": {
        "2010": {
            "W10": 1
        }
    },
    "Valeria Quochi": {
        "2010": {
            "S10": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Cindi": {
        "2014": {
            "S14": 1
        }
    },
    "Sourish Chaudhuri": {
        "2009": {
            "P09": 1
        }
    },
    "Helena M Caseli": {
        "2005": {
            "W05": 1
        }
    },
    "Delip Rao": {
        "2009": {
            "W09": 2
        },
        "2011": {
            "P11": 1
        }
    },
    "of Science": {
        "2009": {
            "W09": 1
        },
        "2006": {
            "J06": 1
        }
    },
    "Ruben Sipos Pannaga Shivaswamy Thorsten Joachims": {
        "2012": {
            "E12": 1
        }
    },
    "Eugenie Giesbrecht": {
        "2010": {
            "P10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "M Howcroft Nakatsu": {
        "2013": {
            "W13": 1
        }
    },
    "Collin Baker": {
        "2007": {
            "S07": 1
        }
    },
    "Alemu": {
        "2009": {
            "W09": 1
        }
    },
    "Mihai Lintean": {
        "2012": {
            "W12": 1
        },
        "2013": {
            "P13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Sandipan Dandapat": {
        "2009": {
            "E09": 1
        }
    },
    "Serge": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Aasish Pappu": {
        "2014": {
            "W14": 1
        }
    },
    "Zanzotto": {
        "2011": {
            "D11": 1
        }
    },
    "Anh Tran": {
        "2014": {
            "S14": 1
        }
    },
    "Daniel Duma": {
        "2013": {
            "W13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Pushpak Michael": {
        "2013": {
            "P13": 1
        }
    },
    "Carolyn Penstein Ros\u00b4e": {
        "2013": {
            "P13": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Ivan Titov": {
        "2005": {
            "P05": 1
        },
        "2007": {
            "P07": 1
        },
        "2008": {
            "P08": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "E12": 1,
            "W12": 1
        },
        "2013": {
            "S13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Zhijun Wu": {
        "2012": {
            "S12": 1
        }
    },
    "Vaidya Palmer": {
        "2013": {
            "W13": 1
        }
    },
    "Ruhi Sarikaya": {
        "2004": {
            "N04": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Adam Funk": {
        "2003": {
            "W03": 1
        }
    },
    "Christer Samuelsson": {
        "2000": {
            "A00": 1
        }
    },
    "Quang Xuan Do": {
        "2010": {
            "D10": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Ng": {
        "2003": {
            "N03": 1,
            "W03": 1
        }
    },
    "Ganesh Harihara": {
        "2015": {
            "D15": 1
        }
    },
    "Finley": {
        "2004": {
            "W04": 1
        }
    },
    "Barbosa": {
        "2013": {
            "P13": 1
        }
    },
    "Jannik Str\u00a8otgen": {
        "2010": {
            "S10": 1
        }
    },
    "Shari R Speer Kiwako Ito": {
        "2008": {
            "W08": 1
        }
    },
    "NC": {
        "2010": {
            "W10": 1
        }
    },
    "Alain": {
        "2006": {
            "W06": 1
        }
    },
    "Ankur Parikh Avinesh PVS Joy Mustafi Lalit Agarwalla Ashish Mungi": {
        "2014": {
            "S14": 1
        }
    },
    "NY": {
        "2006": {
            "P06": 1
        },
        "2007": {
            "N07": 1
        },
        "2008": {
            "W08": 1
        },
        "2010": {
            "N10": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        },
        "2012": {
            "P12": 2
        },
        "2013": {
            "P13": 2,
            "D13": 3
        },
        "2014": {
            "P14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Shinsuke Mori": {
        "2011": {
            "W11": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Enrique Alfonseca": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "D09": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Ethan O Selfridge": {
        "2010": {
            "P10": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Fei Liu": {
        "2009": {
            "P09": 1,
            "N09": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Andrew B Michael Robert": {
        "2008": {
            "P08": 1
        }
    },
    "M Saluveer": {
        "1983": {
            "E83": 1
        }
    },
    "Qi Zhang": {
        "2010": {
            "D10": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Guido": {
        "2013": {
            "P13": 1
        }
    },
    "Luciano": {
        "2009": {
            "N09": 1
        }
    },
    "Pabitra Mitra": {
        "2015": {
            "W15": 1
        }
    },
    "Rich\u00b4ard M\u00b4ark": {
        "2009": {
            "W09": 1
        }
    },
    "Scott Prevost": {
        "1997": {
            "W97": 1
        }
    },
    "Zhao Liu": {
        "2011": {
            "P11": 1
        }
    },
    "Diarmuid O\u00b4 S\u00b4eaghdha": {
        "2007": {
            "P07": 1
        }
    },
    "ac": {
        "2000": {
            "A00": 1
        }
    },
    "Lilja": {
        "2008": {
            "W08": 1
        }
    },
    "Richard Boyce": {
        "2012": {
            "W12": 1
        }
    },
    "He He": {
        "2012": {
            "D12": 1
        }
    },
    "Tina Kl\u00a8uwer": {
        "2010": {
            "P10": 1
        }
    },
    "Alfio Massimiliano Gliozzo": {
        "2007": {
            "N07": 1
        }
    },
    "Camillo": {
        "2013": {
            "P13": 1
        }
    },
    "Graeme Ritchie": {
        "2009": {
            "W09": 1
        }
    },
    "Soh Masuko": {
        "2013": {
            "N13": 1
        }
    },
    "Luisa Bentivogli": {
        "2003": {
            "E03": 1
        }
    },
    "Yakov Kronrod Alex Quinn Benjamin B Bederson": {
        "2010": {
            "D10": 1
        }
    },
    "Vasile": {
        "2015": {
            "W15": 2
        }
    },
    "Karthik Visweswariah Mitesh M Khapra Ananthakrishnan Ramanathan": {
        "2013": {
            "P13": 1
        }
    },
    "P Engelson Dagan": {
        "1996": {
            "P96": 1
        }
    },
    "R Anne": {
        "2015": {
            "W15": 1
        }
    },
    "Dipak L Chaudhari Om P Damani Srivatsan Laxman": {
        "2011": {
            "D11": 1
        }
    },
    "Specia": {
        "2015": {
            "P15": 1
        }
    },
    "Hwee Tou Wee Sun": {
        "2008": {
            "D08": 1
        },
        "2009": {
            "D09": 1
        }
    },
    "Phil": {
        "2015": {
            "D15": 1
        }
    },
    "Alex": {
        "1997": {
            "W97": 1
        },
        "2002": {
            "W02": 1
        },
        "2003": {
            "W03": 1
        },
        "2004": {
            "N04": 1
        },
        "2005": {
            "W05": 2
        },
        "2007": {
            "N07": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Karthik Gali": {
        "2009": {
            "N09": 1
        }
    },
    "Fujii": {
        "1999": {
            "W99": 1
        }
    },
    "Joel MacAuslan Lorin Wilde": {
        "2010": {
            "W10": 1
        }
    },
    "Lin Sun": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "P10": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Michele Goran": {
        "2014": {
            "W14": 1
        }
    },
    "Irene Cramer": {
        "2007": {
            "W07": 1
        }
    },
    "Andras Csomai Hassan": {
        "2007": {
            "S07": 1
        }
    },
    "Tugba Bodrumlu": {
        "2009": {
            "W09": 1
        }
    },
    "Bart de": {
        "1997": {
            "W97": 1
        }
    },
    "Heng": {
        "2011": {
            "W11": 2
        },
        "2012": {
            "W12": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Bruno Kessler": {
        "2012": {
            "S12": 1,
            "E12": 1
        },
        "2013": {
            "N13": 1
        },
        "2015": {
            "D15": 1,
            "W15": 1
        }
    },
    "Kenneth R Beesley": {
        "2000": {
            "W00": 1
        }
    },
    "Jirka Hana Anna Feldman Katsiaryna Aharodnik": {
        "2011": {
            "W11": 1
        }
    },
    "Alexander M Shay B Michael": {
        "2013": {
            "W13": 1
        }
    },
    "Mary S Neff": {
        "1988": {
            "A88": 1
        }
    },
    "Peter Krogh Hunter": {
        "2007": {
            "W07": 1
        }
    },
    "Jason Eisner": {
        "2008": {
            "P08": 1
        },
        "1996": {
            "P96": 1
        },
        "2002": {
            "P02": 1
        },
        "2012": {
            "N12": 1
        },
        "2000": {
            "W00": 1
        }
    },
    "Maryna": {
        "2014": {
            "S14": 1
        }
    },
    "Fazil Ayan J": {
        "2006": {
            "N06": 1,
            "P06": 1
        }
    },
    "Anne-Marie Frassica": {
        "2007": {
            "S07": 1
        }
    },
    "Owen Zhang": {
        "2014": {
            "W14": 1
        }
    },
    "Blacoe": {
        "2012": {
            "D12": 1
        }
    },
    "Jee Eun Kim Kong Joo Lee": {
        "2010": {
            "W10": 1
        }
    },
    "Barbara": {
        "2009": {
            "W09": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Okko Bull": {
        "2010": {
            "W10": 1
        }
    },
    "Katerina T Frantzi": {
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "Kim Luyckx": {
        "2008": {
            "W08": 1
        }
    },
    "Seungwhan Moon Saloni Potdar Lara Martin": {
        "2014": {
            "W14": 1
        }
    },
    "Robert Rubinoff": {
        "2000": {
            "J00": 1
        }
    },
    "Philip COHEN": {
        "2000": {
            "A00": 1
        }
    },
    "Steven Abney": {
        "2000": {
            "A00": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "Nobuyuki Shimizu": {
        "2010": {
            "W10": 1
        },
        "2003": {
            "W03": 1
        },
        "2006": {
            "P06": 2
        }
    },
    "Dekang Lin Van": {
        "2008": {
            "P08": 1
        }
    },
    "Prashanth Mannem": {
        "2009": {
            "P09": 1
        }
    },
    "Thomas Lippincott": {
        "2014": {
            "P14": 1
        }
    },
    "Helen M Gigley": {
        "1985": {
            "P85": 1
        }
    },
    "Tore Amble": {
        "2000": {
            "A00": 1
        }
    },
    "Ahmed Abdelali": {
        "2015": {
            "W15": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Noam": {
        "2015": {
            "S15": 1
        }
    },
    "Govind Kothari": {
        "2009": {
            "P09": 1
        }
    },
    "Maria Pershina": {
        "2015": {
            "W15": 1
        }
    },
    "Jonathan Slocum": {
        "1981": {
            "P81": 1
        },
        "1983": {
            "A83": 1
        }
    },
    "Angus McIntyre": {
        "1998": {
            "P98": 1
        }
    },
    "Animesh Mukherjee": {
        "2007": {
            "W07": 1
        }
    },
    "Ricardo Revert": {
        "2014": {
            "W14": 1
        }
    },
    "Ezra Keshet": {
        "2011": {
            "W11": 1
        }
    },
    "Marcia Munozt": {
        "1999": {
            "W99": 1
        }
    },
    "Denys Duchier": {
        "2003": {
            "E03": 1
        }
    },
    "Cosmin Adrian Bejan": {
        "2010": {
            "P10": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Lois Boggess": {
        "1992": {
            "P92": 1
        },
        "1988": {
            "A88": 1
        }
    },
    "M Harabagiu J Maiorano Moschitti A": {
        "2004": {
            "W04": 1
        }
    },
    "Jonathan H Clark": {
        "2008": {
            "W08": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        }
    },
    "Dan Cristea": {
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "Claire Gardent": {
        "1989": {
            "E89": 1
        },
        "1993": {
            "E93": 1
        },
        "1995": {
            "E95": 1
        },
        "1999": {
            "P99": 1
        },
        "2001": {
            "P01": 1
        },
        "2005": {
            "W05": 1
        },
        "2007": {
            "W07": 1,
            "P07": 1
        },
        "2012": {
            "P12": 2
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "P14": 2
        }
    },
    "Giovanni": {
        "1985": {
            "E85": 1
        }
    },
    "Gerard Salton": {
        "1988": {
            "P88": 1
        }
    },
    "B\u00a8uchse Geisler St\u00a8uber": {
        "2010": {
            "W10": 1
        }
    },
    "Michael Zock": {
        "2008": {
            "W08": 1
        },
        "2010": {
            "W10": 1
        }
    },
    "Rachel E Baker Alastair J Gill": {
        "2008": {
            "W08": 1
        }
    },
    "Jiang": {
        "2006": {
            "N06": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Jason Williams": {
        "2008": {
            "P08": 1
        }
    },
    "Ingrid Falk": {
        "2012": {
            "P12": 1
        }
    },
    "Ken BARKER": {
        "1998": {
            "P98": 1
        }
    },
    "Miaomiao Wen": {
        "2013": {
            "P13": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Lu Roth": {
        "2012": {
            "P12": 1
        }
    },
    "Kartik Suba Dipti Jiandani": {
        "2011": {
            "W11": 1
        }
    },
    "Ashutosh Modi": {
        "2012": {
            "W12": 1
        }
    },
    "Moschitti": {
        "2013": {
            "P13": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Bethard H Martin": {
        "2007": {
            "S07": 1
        }
    },
    "Tingting Jun": {
        "2015": {
            "P15": 1
        }
    },
    "Monica Lestari Paramita an Ahmet": {
        "2014": {
            "W14": 1
        }
    },
    "Tat-Seng": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Marilyn A Walker": {
        "1989": {
            "P89": 1
        },
        "1997": {
            "W97": 1,
            "J97": 1,
            "E97": 1,
            "P97": 1
        },
        "1998": {
            "P98": 1
        },
        "1999": {
            "P99": 1
        },
        "2001": {
            "P01": 2,
            "N01": 1
        },
        "2006": {
            "P06": 1
        },
        "2012": {
            "N12": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Qiuye Zhao Mitch Marcus": {
        "2012": {
            "P12": 1
        }
    },
    "Phil Blunsom Grefenstette": {
        "2014": {
            "W14": 1
        }
    },
    "Michael Schiehlen Kristina": {
        "2006": {
            "W06": 1
        }
    },
    "Geunbae Lee": {
        "1998": {
            "P98": 1
        }
    },
    "Filip": {
        "2009": {
            "W09": 1
        },
        "2015": {
            "W15": 2
        }
    },
    "Sheng-Jie Huang": {
        "1998": {
            "P98": 1
        }
    },
    "M Kaplan Holloway King T Maxwell": {
        "2002": {
            "W02": 1
        }
    },
    "Narj`es Boufaden": {
        "2003": {
            "P03": 1
        }
    },
    "Pamela Jordan": {
        "2000": {
            "P00": 1
        },
        "2009": {
            "W09": 1
        },
        "2010": {
            "N10": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Manpreet Adarsh Aseem Shachar": {
        "2014": {
            "S14": 1
        }
    },
    "Chuan-Jie Lin": {
        "2006": {
            "W06": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Nando de_Freitas Moritz": {
        "2014": {
            "W14": 1
        }
    },
    "R Dragomir": {
        "1996": {
            "W96": 1
        }
    },
    "Yin Chen": {
        "2008": {
            "P08": 1
        }
    },
    "Hiyan Alshawi": {
        "1985": {
            "E85": 1
        },
        "1991": {
            "P91": 1
        },
        "1994": {
            "J94": 1
        },
        "1996": {
            "P96": 1
        },
        "1998": {
            "P98": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "W11": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Joe F Zhou": {
        "2000": {
            "W00": 1
        }
    },
    "Hector Martinez": {
        "2013": {
            "D13": 1
        }
    },
    "Matthew R Scott": {
        "2011": {
            "P11": 1
        }
    },
    "Benjamin Mark": {
        "2010": {
            "W10": 1
        }
    },
    "Takeshi": {
        "2014": {
            "D14": 1
        }
    },
    "Siva Reddy": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "S12": 1
        },
        "2014": {
            "Q14": 1
        }
    },
    "Ting Liu": {
        "2003": {
            "W03": 1
        },
        "2004": {
            "W04": 1
        },
        "2006": {
            "W06": 1,
            "P06": 1
        },
        "2007": {
            "S07": 1
        },
        "2009": {
            "P09": 1
        },
        "2012": {
            "E12": 1
        }
    },
    "Livescu": {
        "2014": {
            "W14": 1
        }
    },
    "de_Miriam Connor": {
        "2013": {
            "W13": 1
        }
    },
    "Ariya Rastrow": {
        "2012": {
            "P12": 1,
            "W12": 1
        }
    },
    "Nouri": {
        "2014": {
            "W14": 1
        }
    },
    "Yi-cheng Pan": {
        "2009": {
            "P09": 1,
            "N09": 1
        }
    },
    "Lynn Webber K": {
        "1998": {
            "W98": 1
        }
    },
    "Natalie Steinhauser": {
        "2009": {
            "W09": 1
        }
    },
    "Bernhard Hoisl Gaston Burek": {
        "2009": {
            "W09": 1
        }
    },
    "Sadat Feizabadi": {
        "2015": {
            "S15": 1
        }
    },
    "Joanis Stevenson": {
        "2003": {
            "E03": 1
        }
    },
    "Rivka Levitan": {
        "2011": {
            "P11": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "L Gregory Love Stuart Rose Anne Schur": {
        "2006": {
            "W06": 1
        }
    },
    "Mazin Gilbert": {
        "2010": {
            "W10": 1
        }
    },
    "Tat-Seng Chua": {
        "2001": {
            "P01": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Bin Wei Christopher Pal": {
        "2010": {
            "P10": 1
        }
    },
    "Xavier Lluis": {
        "2009": {
            "W09": 1
        }
    },
    "R Dan": {
        "1998": {
            "W98": 1
        }
    },
    "Geoffrey Sampson": {
        "1988": {
            "P88": 1
        },
        "1983": {
            "E83": 1
        }
    },
    "Carl Vogel": {
        "2013": {
            "W13": 1
        }
    },
    "Adriana Roventini": {
        "2007": {
            "P07": 1
        }
    },
    "Yu-Chia Teruko Jason S": {
        "2010": {
            "P10": 1
        }
    },
    "Mohammad Khan": {
        "2013": {
            "W13": 1
        }
    },
    "Anil S Chakravarthy": {
        "1995": {
            "P95": 1
        }
    },
    "Mohamed Jmaiel": {
        "1998": {
            "P98": 1
        }
    },
    "PO Box": {
        "2012": {
            "W12": 1
        }
    },
    "Jamie Callan": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "P09": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Young-Sook Hwang": {
        "2004": {
            "W04": 1
        }
    },
    "Fan Zhang Du": {
        "2014": {
            "S14": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Jean-Louis Binot": {
        "1987": {
            "E87": 1
        }
    },
    "Kenneth M Ross": {
        "1983": {
            "P83": 1
        }
    },
    "Larry Sansone": {
        "2009": {
            "W09": 1
        }
    },
    "Timothy J Hieu C Nguyen": {
        "2010": {
            "N10": 1
        }
    },
    "Hainan Zhao XuanWang": {
        "2010": {
            "W10": 1
        }
    },
    "Taylor Berg-Kirkpatrick": {
        "2008": {
            "P08": 1
        },
        "2010": {
            "N10": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "D12": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "P14": 2
        },
        "2015": {
            "D15": 1
        }
    },
    "Rob't F Simmons": {
        "1980": {
            "P80": 1
        }
    },
    "Miceli Barone": {
        "2011": {
            "W11": 1
        }
    },
    "Feiyan Hu": {
        "2014": {
            "W14": 1
        }
    },
    "Jacob Andreas": {
        "2013": {
            "W13": 1
        }
    },
    "Benjamin": {
        "2015": {
            "W15": 1
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "N13": 1,
            "P13": 1,
            "Q13": 1
        },
        "2014": {
            "E14": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "L Victoria": {
        "2007": {
            "N07": 1
        }
    },
    "Fondazione": {
        "2015": {
            "W15": 1
        }
    },
    "Dipti Misra Sharma": {
        "2011": {
            "W11": 1
        },
        "2014": {
            "W14": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "M\u00e1rio": {
        "2012": {
            "N12": 1
        }
    },
    "Cong Tan": {
        "2015": {
            "S15": 1
        }
    },
    "Bo-June Hsu": {
        "2008": {
            "W08": 1,
            "D08": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Zsolt Bitvai": {
        "2015": {
            "P15": 1
        }
    },
    "R Marta": {
        "2014": {
            "W14": 1
        }
    },
    "Antonio Moreno\u2014Sandovalt": {
        "1998": {
            "P98": 1
        }
    },
    "Lidia Mangu": {
        "1998": {
            "P98": 1
        }
    },
    "Michael": {
        "1996": {
            "W96": 1
        },
        "1998": {
            "W98": 1
        },
        "2000": {
            "W00": 1
        },
        "2001": {
            "W01": 1
        },
        "2003": {
            "W03": 1
        },
        "2004": {
            "N04": 1
        },
        "2007": {
            "W07": 1
        },
        "2008": {
            "W08": 3,
            "D08": 1
        },
        "2011": {
            "W11": 2
        },
        "2012": {
            "E12": 1,
            "W12": 2
        },
        "2013": {
            "S13": 1,
            "N13": 1,
            "P13": 1,
            "W13": 1
        },
        "2014": {
            "W14": 4,
            "P14": 1,
            "E14": 1
        },
        "2015": {
            "W15": 2
        }
    },
    "Lance A Mitchell P": {
        "1995": {
            "W95": 1
        }
    },
    "Muhie Iryna": {
        "2013": {
            "P13": 1
        }
    },
    "Ke Tran Manh": {
        "2012": {
            "W12": 1
        }
    },
    "Albert Gatt Reiter": {
        "2008": {
            "W08": 1
        }
    },
    "Gerhard": {
        "2006": {
            "W06": 1
        }
    },
    "Alexander C Tamara L Berg": {
        "2012": {
            "P12": 1
        }
    },
    "Shasha Liao": {
        "2010": {
            "P10": 1,
            "W10": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "James C Lester": {
        "2002": {
            "P02": 1
        },
        "2012": {
            "W12": 1
        },
        "2010": {
            "S10": 1
        }
    },
    "Anette Frank": {
        "2009": {
            "P09": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Bridget McInnes Serguei Pakhomov": {
        "2010": {
            "W10": 1
        }
    },
    "Yoshihiro Matsuo": {
        "2007": {
            "P07": 1
        }
    },
    "Kuang-hua Chen": {
        "1995": {
            "E95": 1
        }
    },
    "Erkut Aykut Ruket": {
        "2015": {
            "P15": 1
        }
    },
    "Gerard de": {
        "2012": {
            "P12": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Vittoria Cozza": {
        "2014": {
            "S14": 1
        }
    },
    "Gerard Lynch": {
        "2012": {
            "W12": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Wessel Stoop": {
        "2014": {
            "E14": 1
        }
    },
    "Rosa": {
        "2015": {
            "W15": 1,
            "P15": 1
        }
    },
    "Jos\u00b4e": {
        "2015": {
            "S15": 1
        }
    },
    "Christine Doran": {
        "1996": {
            "W96": 1
        },
        "2012": {
            "N12": 1
        },
        "1997": {
            "A97": 1
        }
    },
    "Fumihiro Bessho": {
        "2012": {
            "W12": 1
        }
    },
    "Keiko": {
        "2001": {
            "N01": 1
        }
    },
    "George Foster": {
        "2000": {
            "P00": 1,
            "W00": 1
        },
        "2010": {
            "P10": 1
        },
        "2003": {
            "W03": 1
        },
        "2013": {
            "N13": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Shankar Kumar": {
        "2003": {
            "N03": 1
        },
        "2004": {
            "N04": 1
        }
    },
    "Kristiina Jokinen": {
        "2003": {
            "W03": 2
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 2
        }
    },
    "Yutaro Shigeto": {
        "2013": {
            "W13": 1
        }
    },
    "Mishra Bangalore": {
        "2010": {
            "P10": 1
        }
    },
    "Yanfen Hao": {
        "2008": {
            "P08": 1
        }
    },
    "Amjad Abu-Jbara": {
        "2012": {
            "D12": 1
        }
    },
    "Strube Hahn": {
        "1995": {
            "E95": 1
        }
    },
    "Guillaume Pitel": {
        "2006": {
            "W06": 1
        }
    },
    "Linguistic Modelling Laboratory": {
        "2003": {
            "W03": 1
        }
    },
    "Sangkeun Jung": {
        "2008": {
            "W08": 1
        }
    },
    "Jin Matsuoka Yves Lepage": {
        "2014": {
            "W14": 1
        }
    },
    "Candace Sidner Timothy Bickmore": {
        "2013": {
            "W13": 1
        }
    },
    "Stephanie Seneff": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "D09": 1
        },
        "2010": {
            "N10": 1,
            "W10": 2
        }
    },
    "Michael J Pazzani": {
        "1984": {
            "P84": 1
        }
    },
    "Chang": {
        "2014": {
            "P14": 1
        }
    },
    "Juli Bakagianni": {
        "2015": {
            "P15": 1
        }
    },
    "Niranjan Balasubramanian": {
        "2012": {
            "W12": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Aarne Ranta": {
        "2014": {
            "W14": 1
        }
    },
    "Ashwin Ittoo": {
        "2010": {
            "P10": 1
        }
    },
    "J Gregory": {
        "2009": {
            "W09": 1
        }
    },
    "Milosavljevic": {
        "2010": {
            "W10": 1
        }
    },
    "Mick O'Donnell": {
        "1998": {
            "W98": 1
        }
    },
    "Ryan Roth": {
        "2013": {
            "P13": 1
        }
    },
    "Lezan": {
        "2005": {
            "W05": 1
        }
    },
    "Nikesh Garera": {
        "2009": {
            "W09": 1
        }
    },
    "Hoa Trang": {
        "2004": {
            "W04": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Eva Banik": {
        "2009": {
            "P09": 1
        }
    },
    "Daoud": {
        "2009": {
            "W09": 1
        }
    },
    "Joelle Pineau": {
        "2000": {
            "P00": 1
        }
    },
    "Aiti Aw": {
        "2008": {
            "P08": 1
        }
    },
    "Ken\u2019ichi Fukushima": {
        "2006": {
            "W06": 1
        }
    },
    "Shannon Laboratory": {
        "2008": {
            "P08": 1
        }
    },
    "Susana Early": {
        "2003": {
            "P03": 1
        }
    },
    "Zhiyuan Chen": {
        "2013": {
            "D13": 1
        },
        "2014": {
            "P14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Chin-Yew Lin": {
        "2003": {
            "P03": 1,
            "N03": 1,
            "W03": 1
        },
        "1995": {
            "P95": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Jeffrey T Russell": {
        "2005": {
            "P05": 1
        }
    },
    "Shafiq Joty": {
        "2010": {
            "D10": 1
        },
        "2012": {
            "D12": 1
        },
        "2013": {
            "N13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "David Hall Durrett": {
        "2013": {
            "P13": 1
        }
    },
    "Victor H Yngve": {
        "1998": {
            "J98": 1
        }
    },
    "Svetlana": {
        "2004": {
            "N04": 1
        }
    },
    "Samuel Carberry Vijay-Shanker": {
        "1998": {
            "P98": 1
        }
    },
    "Riezler T Maxwell": {
        "2005": {
            "W05": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Hiroaki Kitano": {
        "1991": {
            "P91": 1
        }
    },
    "Alexandra Birch": {
        "2008": {
            "D08": 1
        },
        "2011": {
            "P11": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Ippei Yoshimoto": {
        "2013": {
            "W13": 1
        }
    },
    "Sebastian Varges": {
        "2008": {
            "W08": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Alexander Gruenstein": {
        "2008": {
            "W08": 1
        }
    },
    "Reinhard Rapp": {
        "1995": {
            "P95": 1
        },
        "2004": {
            "P04": 1
        },
        "2005": {
            "P05": 1
        },
        "2007": {
            "P07": 1
        },
        "2008": {
            "W08": 1
        },
        "2009": {
            "P09": 1
        },
        "2010": {
            "W10": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Eun Young Ha": {
        "2010": {
            "S10": 1
        }
    },
    "Ralf Brown": {
        "2002": {
            "P02": 1
        }
    },
    "Sharon Oviatt": {
        "1997": {
            "A97": 1
        }
    },
    "Anjana Vakil": {
        "2014": {
            "P14": 1
        }
    },
    "Roy J Byrd": {
        "1985": {
            "P85": 2
        },
        "1988": {
            "A88": 1,
            "P88": 1
        },
        "2001": {
            "W01": 1
        }
    },
    "Kenji Yamada": {
        "2006": {
            "P06": 1
        }
    },
    "Derrick Higgins": {
        "2010": {
            "W10": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Suzuki Nagata": {
        "2015": {
            "P15": 1
        }
    },
    "Susann LuperFoy": {
        "1998": {
            "P98": 1
        }
    },
    "Hannah": {
        "2014": {
            "E14": 1
        }
    },
    "Kyoto": {
        "2006": {
            "N06": 1
        }
    },
    "Patrick Jordan": {
        "2006": {
            "P06": 1
        }
    },
    "Vlad Niculae": {
        "2013": {
            "W13": 1
        }
    },
    "Akina Sakai": {
        "2010": {
            "W10": 1
        }
    },
    "Dirk Hovy": {
        "2012": {
            "W12": 1
        },
        "2014": {
            "W14": 2,
            "P14": 2
        },
        "2015": {
            "K15": 1
        }
    },
    "Nakano Shimazu": {
        "1998": {
            "P98": 1
        }
    },
    "Yuancheng": {
        "2009": {
            "N09": 1
        }
    },
    "M": {
        "2009": {
            "N09": 1
        }
    },
    "Rui Sun": {
        "2010": {
            "W10": 1
        }
    },
    "Xue": {
        "2014": {
            "P14": 1,
            "E14": 1
        }
    },
    "Jacob Goldberger": {
        "2008": {
            "P08": 1
        },
        "2011": {
            "P11": 2,
            "W11": 1
        }
    },
    "CJ Linton": {
        "2015": {
            "D15": 1
        }
    },
    "Eric Xing": {
        "2012": {
            "P12": 1
        }
    },
    "Linear Modeling": {
        "2010": {
            "J10": 1
        }
    },
    "A Lawrence Spitz": {
        "1994": {
            "A94": 1
        }
    },
    "Victor Su\u00b4arez-Paniagua": {
        "2015": {
            "W15": 1
        }
    },
    "Zheng Chen": {
        "2000": {
            "P00": 1
        },
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Karen Jensen": {
        "1983": {
            "A83": 1
        }
    },
    "Ruth Jones": {
        "2013": {
            "W13": 1
        }
    },
    "Nakagawa Mori Omori Okamura": {
        "1998": {
            "P98": 1
        }
    },
    "Stanley F Chen": {
        "1993": {
            "P93": 1
        },
        "1995": {
            "P95": 1
        }
    },
    "Kei YOSHIMOTO": {
        "1989": {
            "E89": 1
        }
    },
    "Hai": {
        "2004": {
            "W04": 1
        }
    },
    "Han": {
        "2015": {
            "P15": 1
        }
    },
    "Hao": {
        "2009": {
            "P09": 1
        }
    },
    "Son Doan": {
        "2007": {
            "W07": 1
        }
    },
    "Ulrich Germann": {
        "2008": {
            "P08": 1
        }
    },
    "Wen-Pin Lin": {
        "2011": {
            "W11": 2
        }
    },
    "Alexander Hauptmann": {
        "2006": {
            "W06": 1
        }
    },
    "Hajime": {
        "2010": {
            "D10": 1
        }
    },
    "Jakob": {
        "2008": {
            "W08": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Lori S Levin": {
        "1995": {
            "P95": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Jim Hunter": {
        "2003": {
            "E03": 1
        }
    },
    "Marina Russo": {
        "1987": {
            "E87": 1
        }
    },
    "Moshe Koppel": {
        "2011": {
            "P11": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Alexandros Potamianos": {
        "2012": {
            "S12": 1,
            "W12": 1
        }
    },
    "Jenine Turner": {
        "2005": {
            "P05": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Horacio A Greenwood": {
        "2005": {
            "W05": 1
        }
    },
    "Dirk": {
        "2009": {
            "N09": 1
        },
        "2014": {
            "P14": 1
        },
        "2015": {
            "D15": 1,
            "W15": 1
        }
    },
    "Rohit Prabhavalkar": {
        "2010": {
            "N10": 1
        }
    },
    "Hladk\u00b4a Schlesinger": {
        "2009": {
            "P09": 1
        }
    },
    "Jianpeng": {
        "2015": {
            "D15": 1
        }
    },
    "Sharon Gower Small": {
        "2011": {
            "P11": 1
        }
    },
    "Mitchell Marcus": {
        "2006": {
            "N06": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Key-Sun Choi": {
        "1993": {
            "W93": 1
        },
        "1995": {
            "E95": 1
        }
    },
    "Iman Saleh": {
        "2014": {
            "D14": 1
        }
    },
    "N Lisa": {
        "1997": {
            "W97": 1
        }
    },
    "Zhiyi Chi": {
        "1998": {
            "J98": 1
        },
        "1999": {
            "J99": 1
        }
    },
    "Ond\u02c7rej": {
        "2013": {
            "W13": 1
        }
    },
    "Yasushi Kouichi Doi": {
        "2005": {
            "W05": 1
        }
    },
    "Jurij Di": {
        "2009": {
            "W09": 1
        }
    },
    "Shourabh Rawat": {
        "2012": {
            "W12": 1
        }
    },
    "Jenna Anna Tapio Filip": {
        "2015": {
            "W15": 1
        }
    },
    "Sameer Wayne James H Daniel": {
        "2004": {
            "W04": 1
        }
    },
    "Song": {
        "2006": {
            "W06": 1
        }
    },
    "Partha Niyogi": {
        "2010": {
            "P10": 1
        }
    },
    "Pustejovsky Rumshisky Plotnick": {
        "2010": {
            "S10": 1
        }
    },
    "Aitor Gonzalez-Agirre": {
        "2013": {
            "S13": 1
        }
    },
    "Sonal Gupta": {
        "2014": {
            "W14": 2
        }
    },
    "Pi-Chuan Chang": {
        "2011": {
            "W11": 1
        }
    },
    "Raphael Mudge": {
        "2010": {
            "W10": 1
        }
    },
    "Satoshi Sekine": {
        "1997": {
            "A97": 1
        },
        "2003": {
            "P03": 1
        },
        "2007": {
            "P07": 1
        },
        "2011": {
            "P11": 2
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Guido Zarrella": {
        "2012": {
            "N12": 1
        }
    },
    "Vivi": {
        "2008": {
            "D08": 1
        }
    },
    "David K Evans": {
        "2000": {
            "A00": 1
        }
    },
    "Annie": {
        "2012": {
            "N12": 1
        }
    },
    "Yatskar": {
        "2014": {
            "S14": 1
        }
    },
    "Dmitry": {
        "2014": {
            "P14": 1
        }
    },
    "Katharine Monk": {
        "1985": {
            "E85": 1
        }
    },
    "W Detmar Meurers": {
        "1997": {
            "J97": 1
        },
        "2005": {
            "P05": 1
        }
    },
    "Jason": {
        "2009": {
            "W09": 1,
            "D09": 2
        },
        "2010": {
            "D10": 1
        },
        "2003": {
            "W03": 1
        },
        "2012": {
            "D12": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Zender M Kruijff": {
        "2009": {
            "W09": 1
        }
    },
    "Damien Ga\u00a8el_de_Chalendar": {
        "2009": {
            "W09": 1
        }
    },
    "Henk Zeevat": {
        "1989": {
            "E89": 1
        }
    },
    "Todd": {
        "2009": {
            "N09": 1
        }
    },
    "Soo-Min Kim": {
        "2006": {
            "W06": 1,
            "N06": 1,
            "P06": 1
        }
    },
    "Taesun Moon": {
        "2009": {
            "D09": 1
        },
        "2010": {
            "D10": 1
        }
    },
    "Paul Kingsbury": {
        "2003": {
            "W03": 1
        }
    },
    "University of Sheffield": {
        "2014": {
            "D14": 1
        }
    },
    "Saleem Abuleil": {
        "1998": {
            "W98": 1
        }
    },
    "Kirk Roberts": {
        "2010": {
            "S10": 1
        },
        "2011": {
            "D11": 1
        },
        "2012": {
            "S12": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Tandeep Sidhu": {
        "2007": {
            "W07": 1
        }
    },
    "Jos\u00b4e A Troyano": {
        "2011": {
            "W11": 1
        }
    },
    "Carl": {
        "2012": {
            "W12": 1
        }
    },
    "Xiaojun Ma": {
        "2014": {
            "W14": 1
        }
    },
    "Makoto Kazuhiro": {
        "2009": {
            "W09": 1
        }
    },
    "Dipanjan Das": {
        "2010": {
            "N10": 1,
            "S10": 1,
            "W10": 1
        },
        "2011": {
            "P11": 1,
            "D11": 1
        }
    },
    "Austin F Riot Games": {
        "2014": {
            "P14": 1
        }
    },
    "Ming Liu": {
        "2013": {
            "P13": 1
        }
    },
    "Raphael Cohen": {
        "2014": {
            "P14": 1
        }
    },
    "Michel": {
        "2011": {
            "P11": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Joshua HERRING": {
        "2004": {
            "W04": 1
        }
    },
    "Puming Zhan": {
        "1997": {
            "W97": 1
        }
    },
    "Microsoft Engkoo": {
        "2011": {
            "P11": 1
        }
    },
    "Klaus Shady Volker Gerhard": {
        "2012": {
            "D12": 1
        }
    },
    "Mathias Creutz": {
        "2003": {
            "P03": 1
        }
    },
    "David McClosky": {
        "2008": {
            "P08": 1
        },
        "2012": {
            "D12": 1
        },
        "2014": {
            "P14": 1
        },
        "2006": {
            "N06": 1,
            "P06": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Sumio Fujita": {
        "2000": {
            "W00": 1
        }
    },
    "Kotaro Funakoshi": {
        "2008": {
            "W08": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "von": {
        "2014": {
            "W14": 1
        }
    },
    "Dumisizwe Bhembe": {
        "2003": {
            "W03": 2
        }
    },
    "Deepak Ramachandran": {
        "2010": {
            "W10": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Mans": {
        "2009": {
            "W09": 1
        }
    },
    "Jana Sukkarieh": {
        "2012": {
            "W12": 1
        }
    },
    "Robert Frank": {
        "2009": {
            "P09": 1
        },
        "1990": {
            "P90": 1
        }
    },
    "Mary Ellen": {
        "2005": {
            "W05": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Julio Cesar Dos": {
        "2015": {
            "S15": 1
        }
    },
    "Pighin Marco Alfonseca": {
        "2014": {
            "P14": 1
        }
    },
    "Benjamin Lambert": {
        "2006": {
            "N06": 1
        }
    },
    "TANAKA-Ishii YAMAMOTO NAKAGAWA": {
        "2003": {
            "P03": 1
        }
    },
    "Raleigh": {
        "2010": {
            "W10": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Marieke van": {
        "2007": {
            "W07": 1
        }
    },
    "Eidelman": {
        "2014": {
            "P14": 1
        }
    },
    "A J": {
        "2010": {
            "J10": 1
        }
    },
    "Tilman Becker": {
        "2005": {
            "W05": 1
        }
    },
    "Moon-Soo Chang": {
        "2003": {
            "W03": 1
        }
    },
    "Amarnag Subramanya": {
        "2010": {
            "D10": 1
        }
    },
    "Nobuaki Minematsu": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Brenda Fawcett": {
        "1986": {
            "P86": 1
        }
    },
    "Tom Kwiatkowski Eunsol Choi Yoav Artzi Luke": {
        "2013": {
            "D13": 1
        }
    },
    "Kentaro Torisawa": {
        "2010": {
            "P10": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "van_den_Bosch Daelemans": {
        "1993": {
            "E93": 1
        }
    },
    "Karl": {
        "2012": {
            "S12": 1,
            "W12": 1
        }
    },
    "Donna K Byron": {
        "2001": {
            "J01": 1
        }
    },
    "\u00b4Edouard Grave No\u00b4emie Elhadad": {
        "2015": {
            "P15": 1
        }
    },
    "Ashish Vijay Tendulkar": {
        "2013": {
            "W13": 1
        }
    },
    "Richard Futrell": {
        "2015": {
            "D15": 1
        }
    },
    "Marsi": {
        "2005": {
            "W05": 1
        }
    },
    "Taher Pilehvar": {
        "2013": {
            "N13": 1,
            "P13": 1
        },
        "2014": {
            "S14": 1
        },
        "2015": {
            "P15": 2
        }
    },
    "Baobao": {
        "2013": {
            "W13": 1
        }
    },
    "G Helena M": {
        "2011": {
            "W11": 1
        }
    },
    "Ellen K Dodge": {
        "2014": {
            "W14": 1
        }
    },
    "Lareau": {
        "2011": {
            "W11": 1
        }
    },
    "Marina": {
        "2011": {
            "W11": 1
        }
    },
    "Patrick G T Healey": {
        "2009": {
            "W09": 1
        }
    },
    "Elena Karagjosova": {
        "2004": {
            "W04": 1
        }
    },
    "Marimuthu": {
        "2014": {
            "W14": 1
        }
    },
    "Marcel P van_Lohuizen": {
        "2000": {
            "P00": 1
        }
    },
    "Harr Chen": {
        "2008": {
            "P08": 1
        },
        "2010": {
            "D10": 1
        }
    },
    "Ashish Kevin": {
        "2014": {
            "D14": 1
        }
    },
    "Noah A": {
        "2010": {
            "N10": 2,
            "W10": 1
        },
        "2011": {
            "P11": 2,
            "D11": 2,
            "W11": 2
        },
        "2012": {
            "P12": 1
        },
        "2015": {
            "K15": 1
        }
    },
    "Vladislav Kubon Karel Oliva Martin Pate": {
        "1998": {
            "W98": 1
        }
    },
    "Or": {
        "2013": {
            "P13": 1
        }
    },
    "Yulia": {
        "2015": {
            "W15": 1
        }
    },
    "Pratikkumar Patel Kashyap Popat": {
        "2010": {
            "W10": 1
        }
    },
    "Arash Eshghi": {
        "2011": {
            "W11": 1
        }
    },
    "Simon Corston-Oliver": {
        "2001": {
            "P01": 1
        },
        "2002": {
            "W02": 1
        },
        "2003": {
            "E03": 1
        }
    },
    "Garrett Nicolai": {
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Yael Netzer": {
        "2006": {
            "N06": 1
        }
    },
    "Takuya Matsuzaki": {
        "2014": {
            "W14": 1,
            "P14": 1
        }
    },
    "Umar Syed": {
        "2008": {
            "P08": 1
        }
    },
    "Ranga Reddy Pallelra": {
        "2015": {
            "S15": 1
        }
    },
    "Jean Mark Gawron": {
        "2000": {
            "W00": 1
        },
        "2001": {
            "P01": 1
        },
        "1982": {
            "P82": 1
        },
        "2014": {
            "P14": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "Andy": {
        "2010": {
            "D10": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "O\u00b4": {
        "2014": {
            "J14": 1
        }
    },
    "Arnab Dhar": {
        "2012": {
            "W12": 3
        }
    },
    "Chai Wutiwiwatchai": {
        "2010": {
            "W10": 1
        }
    },
    "Wiebe": {
        "2002": {
            "W02": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Frank": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "W10": 1
        },
        "2004": {
            "W04": 1
        },
        "2013": {
            "P13": 1,
            "W13": 1,
            "D13": 1
        }
    },
    "Ted Pedersen": {
        "2000": {
            "A00": 1
        },
        "2005": {
            "P05": 1
        },
        "2006": {
            "E06": 1,
            "W06": 1
        },
        "2007": {
            "S07": 1
        },
        "2009": {
            "N09": 1
        },
        "2010": {
            "S10": 1
        }
    },
    "Franz": {
        "2009": {
            "N09": 1
        }
    },
    "Andy Exley": {
        "2012": {
            "W12": 1
        }
    },
    "Taro Watanabe Mino": {
        "2014": {
            "D14": 1
        }
    },
    "Brian Ulicny": {
        "2006": {
            "N06": 1
        }
    },
    "Ryan Gabbard": {
        "2008": {
            "P08": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Roland Kuhn": {
        "2011": {
            "W11": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Abdulaziz Alghunaim": {
        "2015": {
            "W15": 1
        }
    },
    "Antonio": {
        "2011": {
            "W11": 1
        }
    },
    "K Sima'an": {
        "2000": {
            "P00": 1
        }
    },
    "Oregon Health": {
        "2011": {
            "W11": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Richard C Wang": {
        "2009": {
            "P09": 1
        }
    },
    "Klaus Zechner Loukina": {
        "2015": {
            "W15": 1
        }
    },
    "Walter J Savitch": {
        "1989": {
            "J89": 1
        }
    },
    "Volker Weber": {
        "1998": {
            "P98": 1
        }
    },
    "Simonetta": {
        "2011": {
            "W11": 1
        }
    },
    "Anupam Basu": {
        "2015": {
            "W15": 1
        },
        "2012": {
            "W12": 3
        },
        "2007": {
            "W07": 1
        }
    },
    "Daniele Pighin Moschitti": {
        "2006": {
            "W06": 1
        }
    },
    "Oren Mausam": {
        "2010": {
            "D10": 1
        },
        "2012": {
            "W12": 1,
            "D12": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Adam Pauls DeNero": {
        "2009": {
            "P09": 1
        }
    },
    "Hai Son Allauzen Wisniewski": {
        "2010": {
            "D10": 1
        }
    },
    "Peter Rankel": {
        "2011": {
            "D11": 1
        }
    },
    "Mark Hepple": {
        "1989": {
            "E89": 1
        },
        "1991": {
            "P91": 1
        },
        "1998": {
            "P98": 1
        },
        "2000": {
            "P00": 1
        },
        "2005": {
            "W05": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Shichun Zhou": {
        "2014": {
            "W14": 1
        }
    },
    "Laura Alonso Hinojosa Sola": {
        "2004": {
            "W04": 1
        }
    },
    "Sven Schmeier": {
        "2000": {
            "A00": 1
        }
    },
    "K Vijay-Shankert": {
        "2001": {
            "J01": 1
        }
    },
    "Jinxi Xu": {
        "2008": {
            "P08": 1
        }
    },
    "Ping Chan": {
        "2011": {
            "W11": 1
        }
    },
    "Marc": {
        "2008": {
            "W08": 1
        },
        "2001": {
            "W01": 1
        },
        "2011": {
            "W11": 1
        },
        "1999": {
            "W99": 1
        }
    },
    "Soumik Mandal": {
        "2014": {
            "S14": 1
        }
    },
    "Alexander Adrien Dries": {
        "2013": {
            "W13": 1
        }
    },
    "Susanne Wolff Chi Lut": {
        "1998": {
            "W98": 1
        }
    },
    "Emily T Prud\u2019hommeaux": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "C Park'": {
        "1997": {
            "A97": 1
        }
    },
    "Bradford W Mott": {
        "2010": {
            "W10": 1
        }
    },
    "Qun Xue-Qi Hao Hong-Kui": {
        "2003": {
            "W03": 1
        }
    },
    "Bruce W Ballard": {
        "1984": {
            "J84": 1,
            "P84": 1
        },
        "1986": {
            "P86": 1
        },
        "1988": {
            "P88": 1
        }
    },
    "Stephen Watkinson": {
        "2001": {
            "W01": 1
        }
    },
    "Federal University": {
        "2008": {
            "W08": 1
        },
        "2010": {
            "W10": 2
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "D14": 1,
            "W14": 1
        }
    },
    "Tin Htay": {
        "2012": {
            "E12": 1
        }
    },
    "Ina R\u00a8osiger": {
        "2015": {
            "W15": 1,
            "P15": 1
        }
    },
    "Banerjee Bridget T McInnes": {
        "2011": {
            "W11": 1
        }
    },
    "Sergei": {
        "1998": {
            "W98": 1
        }
    },
    "Yukiko Sasaki Alam": {
        "2004": {
            "W04": 1
        }
    },
    "Yasuhide Miura": {
        "2014": {
            "W14": 1
        }
    },
    "R Casajuana": {
        "1987": {
            "E87": 1
        }
    },
    "Jeff": {
        "2010": {
            "N10": 1
        },
        "2011": {
            "P11": 1
        },
        "2006": {
            "N06": 1
        },
        "2015": {
            "W15": 1,
            "P15": 1
        }
    },
    "R\u00a8ud": {
        "2011": {
            "P11": 1
        }
    },
    "Christine DEFRISE": {
        "1990": {
            "W90": 1
        }
    },
    "Fabrizio Gotti": {
        "2006": {
            "W06": 1
        }
    },
    "Catherine Smith": {
        "2007": {
            "P07": 1
        }
    },
    "Satanjeev Banerjee": {
        "2010": {
            "W10": 1
        },
        "2005": {
            "W05": 1,
            "P05": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Barbara Partee": {
        "1993": {
            "P93": 1
        }
    },
    "Douglas Moran": {
        "1994": {
            "P94": 1
        }
    },
    "Thomas K Landauer Kirill Kireyev Charles Panaccione": {
        "2009": {
            "W09": 1
        }
    },
    "D William": {
        "2013": {
            "P13": 1
        }
    },
    "Pia-Ramona Wojtinnek": {
        "2011": {
            "W11": 1
        }
    },
    "Min Zhang": {
        "2008": {
            "P08": 1
        },
        "2006": {
            "P06": 2
        },
        "2015": {
            "W15": 1
        }
    },
    "Norman K Sondheimer": {
        "1981": {
            "J81": 1
        }
    },
    "Anuj Dawar": {
        "1989": {
            "P89": 1
        }
    },
    "Philipp Koehn": {
        "2008": {
            "D08": 1
        },
        "2009": {
            "P09": 2,
            "W09": 1,
            "E09": 1
        },
        "2011": {
            "D11": 1,
            "W11": 1
        },
        "2005": {
            "P05": 1
        },
        "2003": {
            "E03": 1
        }
    },
    "Muhua Zhu": {
        "2010": {
            "P10": 1
        }
    },
    "Keith Vander Linden": {
        "1992": {
            "P92": 1
        },
        "1995": {
            "J95": 1
        }
    },
    "Neil Mayo": {
        "2006": {
            "W06": 1
        }
    },
    "Jianguo Li": {
        "2008": {
            "P08": 1
        },
        "2006": {
            "P06": 2
        }
    },
    "Daniel S Weld": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 2
        },
        "2013": {
            "D13": 1
        }
    },
    "Ji\u02c7r\u00b4\u0131": {
        "2013": {
            "N13": 1
        }
    },
    "Nicola Ueffing": {
        "2001": {
            "W01": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Yoshimi Suzuki": {
        "2010": {
            "W10": 1
        },
        "1998": {
            "P98": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Chanyachatchawan Sornlertlamvanich": {
        "2011": {
            "W11": 1
        }
    },
    "Philippas": {
        "2014": {
            "W14": 1
        }
    },
    "Chu-Ren": {
        "2009": {
            "W09": 1
        }
    },
    "Park Hwang": {
        "2004": {
            "W04": 1
        }
    },
    "Wai Lam": {
        "2015": {
            "P15": 1
        }
    },
    "Fung Yuen Yee": {
        "1998": {
            "P98": 1
        }
    },
    "Guido Sautter Klemens B\u00f6hm": {
        "2006": {
            "W06": 1
        }
    },
    "Malvina Nissim": {
        "2003": {
            "P03": 1
        },
        "2013": {
            "W13": 2
        },
        "2014": {
            "W14": 1,
            "S14": 1
        }
    },
    "Keith Vander Linde&": {
        "1996": {
            "W96": 1
        }
    },
    "Radford Hachey": {
        "2010": {
            "W10": 1
        }
    },
    "Dawn Lawrie": {
        "2013": {
            "N13": 1
        }
    },
    "Randy Goebel": {
        "2008": {
            "P08": 1,
            "D08": 1
        },
        "2009": {
            "W09": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Dan Lizotte": {
        "2006": {
            "W06": 1
        }
    },
    "Hua Xu": {
        "2015": {
            "W15": 1
        }
    },
    "Singapore Management University": {
        "2013": {
            "N13": 1
        }
    },
    "Ganter Strube": {
        "2009": {
            "P09": 1
        }
    },
    "Eleni Miltsakaki": {
        "2000": {
            "P00": 1
        },
        "2003": {
            "W03": 1
        }
    },
    "Kiyong Lee": {
        "2015": {
            "W15": 1
        }
    },
    "Bozena Henisz Thompson": {
        "1981": {
            "P81": 1
        }
    },
    "Andy Wa": {
        "2007": {
            "W07": 1
        }
    },
    "Groschwitz Koller": {
        "2015": {
            "P15": 1
        }
    },
    "Oren Etzioni": {
        "2006": {
            "W06": 1
        },
        "2007": {
            "N07": 1,
            "P07": 1
        },
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 1,
            "W10": 1
        },
        "2012": {
            "W12": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Chongyang Zhang Zhigang Chen Guoping Hu": {
        "2010": {
            "W10": 1
        }
    },
    "Yoan Guti\u00b4errez": {
        "2014": {
            "S14": 1
        }
    },
    "Christian Buck": {
        "2012": {
            "W12": 1
        }
    },
    "Glass": {
        "2007": {
            "P07": 1
        }
    },
    "Xuan Wang": {
        "2010": {
            "W10": 1
        },
        "2012": {
            "S12": 1
        }
    },
    "G-J van_Rooyen": {
        "2010": {
            "W10": 1
        }
    },
    "Yorick": {
        "2003": {
            "W03": 1
        }
    },
    "Sagae Christian DeVault R": {
        "2009": {
            "N09": 1
        }
    },
    "Mark Hopkins": {
        "2010": {
            "D10": 1
        },
        "2011": {
            "D11": 1,
            "W11": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Syed Toufeeq Ahmed": {
        "2005": {
            "W05": 1
        }
    },
    "Dragomir R Radev": {
        "2000": {
            "A00": 1,
            "W00": 1
        },
        "1996": {
            "W96": 1
        },
        "2004": {
            "W04": 1
        },
        "1997": {
            "A97": 1
        },
        "1998": {
            "P98": 1,
            "J98": 1
        }
    },
    "Claudia Roncancio": {
        "2015": {
            "W15": 1
        }
    },
    "T Richard": {
        "1993": {
            "W93": 1
        },
        "1994": {
            "W94": 1
        }
    },
    "Matteo Daniele Marco": {
        "2015": {
            "P15": 1
        }
    },
    "Feifan Liu": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "N09": 1
        },
        "2010": {
            "N10": 1
        },
        "2007": {
            "N07": 1,
            "P07": 1
        }
    },
    "L Sopena": {
        "1987": {
            "E87": 1
        }
    },
    "Bob Hendley": {
        "2007": {
            "P07": 1
        }
    },
    "T Florian": {
        "2010": {
            "W10": 1
        },
        "2014": {
            "W14": 1,
            "P14": 1
        }
    },
    "D Peter": {
        "2013": {
            "Q13": 1
        }
    },
    "Manning": {
        "2014": {
            "W14": 1
        }
    },
    "David Green": {
        "2013": {
            "W13": 1
        }
    },
    "Simone Teufel": {
        "2012": {
            "W12": 1
        },
        "2003": {
            "W03": 1
        },
        "2004": {
            "W04": 1
        },
        "2006": {
            "P06": 1
        },
        "1999": {
            "W99": 1
        }
    },
    "Stoyanov": {
        "2006": {
            "W06": 2
        }
    },
    "Staffan": {
        "2014": {
            "W14": 1
        }
    },
    "Elena Terenzi": {
        "2003": {
            "N03": 1
        }
    },
    "Nathan C Sanders": {
        "2007": {
            "P07": 1
        }
    },
    "O M Caroline M": {
        "2014": {
            "W14": 1
        }
    },
    "Zhili Wu": {
        "2010": {
            "P10": 1
        }
    },
    "Guihong": {
        "2006": {
            "W06": 1
        }
    },
    "R Mahesh K Sinha": {
        "2009": {
            "W09": 2
        },
        "2011": {
            "W11": 1
        }
    },
    "Benjamin Snyder": {
        "2008": {
            "P08": 1
        },
        "2004": {
            "W04": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Alan": {
        "2013": {
            "W13": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Shinichi Ueno": {
        "2003": {
            "P03": 1
        }
    },
    "Murphy Jin S Kim S": {
        "2006": {
            "W06": 1
        }
    },
    "Amit Dubey": {
        "2010": {
            "P10": 1
        },
        "2003": {
            "P03": 2
        },
        "2005": {
            "P05": 1
        }
    },
    "Fausto Giunchiglia": {
        "1984": {
            "P84": 1
        }
    },
    "Emmanuel Roche": {
        "1993": {
            "E93": 1
        }
    },
    "Kimmo Kettunen": {
        "2010": {
            "P10": 1
        }
    },
    "Richard Kittredge": {
        "2000": {
            "A00": 1
        }
    },
    "Hongning Wang": {
        "2011": {
            "P11": 1
        }
    },
    "Beata Kouchnir": {
        "2004": {
            "P04": 1
        }
    },
    "Keith Trnka": {
        "2008": {
            "P08": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Giorgio": {
        "2011": {
            "D11": 1
        }
    },
    "Olga Batiukova": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "S10": 1
        }
    },
    "Sujith Ravi": {
        "2009": {
            "P09": 1,
            "N09": 1,
            "W09": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Rossana Damiano": {
        "2000": {
            "W00": 1
        }
    },
    "Kedzie McKeown Fernando Diaz": {
        "2015": {
            "P15": 1
        }
    },
    "B M R H": {
        "2007": {
            "N07": 1
        }
    },
    "Upali S Kohomban Wee Sun Lee": {
        "2005": {
            "P05": 1
        }
    },
    "Jos\u00b4e Saias Hil\u00b4ario Fernandes": {
        "2013": {
            "S13": 1
        }
    },
    "Bollegala Yutaka Matsuo Ishizuka": {
        "2006": {
            "W06": 1
        }
    },
    "Seiji Takegata": {
        "2010": {
            "W10": 1
        }
    },
    "Dong Wang": {
        "2010": {
            "N10": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Jun Suzuki": {
        "2003": {
            "P03": 1,
            "W03": 1
        },
        "2004": {
            "P04": 1
        },
        "2006": {
            "P06": 1
        },
        "2008": {
            "P08": 1
        },
        "2011": {
            "P11": 1
        },
        "2013": {
            "P13": 1,
            "D13": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Florian Wolf": {
        "2004": {
            "W04": 1
        }
    },
    "Daniele": {
        "2010": {
            "W10": 1
        },
        "2014": {
            "S14": 1
        }
    },
    "Lowe Nissan Iulian V": {
        "2015": {
            "W15": 1
        }
    },
    "for Non-Concatenative Morphology": {
        "2006": {
            "J06": 1
        }
    },
    "Yasuhiro Akiba Imamura": {
        "2003": {
            "N03": 1
        }
    },
    "Warren Greiff": {
        "2004": {
            "N04": 1
        }
    },
    "Wei Qi Kam-Fai": {
        "2012": {
            "P12": 1
        }
    },
    "Yantao Du Sun": {
        "2014": {
            "P14": 1
        }
    },
    "Masood Ghayoomi Bruno Guillaume": {
        "2009": {
            "W09": 1
        }
    },
    "Choi": {
        "2014": {
            "D14": 1
        }
    },
    "Giuglea Moschitti": {
        "2006": {
            "P06": 1
        }
    },
    "Amarnag Fernando Andrew": {
        "2011": {
            "P11": 1
        }
    },
    "Jun\u2019ichi": {
        "2003": {
            "W03": 1
        }
    },
    "Maosong Sun": {
        "2003": {
            "W03": 1
        }
    },
    "Haoruo Peng": {
        "2015": {
            "K15": 1
        }
    },
    "Marc Schulder": {
        "2014": {
            "W14": 1
        }
    },
    "Kathleen R McKeown": {
        "1984": {
            "P84": 1
        },
        "1997": {
            "A97": 2,
            "E97": 1,
            "P97": 1
        },
        "1998": {
            "J98": 1,
            "W98": 1
        },
        "2000": {
            "A00": 1
        },
        "2004": {
            "N04": 1
        },
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 1
        }
    },
    "Kriti Puniyani": {
        "2010": {
            "W10": 1
        }
    },
    "Michael T Mordowanec": {
        "2014": {
            "P14": 1
        }
    },
    "Jeremy Gwinnup": {
        "2014": {
            "W14": 1
        }
    },
    "Andrea Mulloni": {
        "2007": {
            "P07": 1
        }
    },
    "Fadi Abu Sheikha": {
        "2011": {
            "W11": 1
        }
    },
    "Farra": {
        "2014": {
            "P14": 1
        }
    },
    "Ama\u00e7 Herda\u02d8gdelen": {
        "2009": {
            "W09": 1
        }
    },
    "Marjorie": {
        "2004": {
            "W04": 1
        }
    },
    "Mohler Mihalcea": {
        "2009": {
            "E09": 1
        }
    },
    "Deb Roy": {
        "2008": {
            "P08": 1
        },
        "2003": {
            "W03": 1
        }
    },
    "Rebecca F Bruce t": {
        "1999": {
            "P99": 1
        }
    },
    "Christian H\u00a8anig": {
        "2015": {
            "S15": 1
        }
    },
    "Sampath Kannan": {
        "2012": {
            "D12": 1
        },
        "2013": {
            "Q13": 1
        }
    },
    "Giulia Benotto": {
        "2012": {
            "S12": 1
        }
    },
    "Marco Carlos Aline of Informatics": {
        "2014": {
            "D14": 1
        }
    },
    "Teich A Bateman": {
        "2006": {
            "W06": 1
        }
    },
    "Ram Boukobza": {
        "2009": {
            "D09": 1
        }
    },
    "Kristina Toutanova Hisami": {
        "2007": {
            "N07": 1
        }
    },
    "Al Keira Qi Hongning": {
        "2015": {
            "P15": 1
        }
    },
    "Andrew McCallum": {
        "2006": {
            "N06": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "P09": 1,
            "D09": 1
        },
        "2010": {
            "D10": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "P12": 1,
            "W12": 1,
            "D12": 1
        },
        "2013": {
            "N13": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Kohji Itoh": {
        "2000": {
            "P00": 1
        }
    },
    "Clayton": {
        "2014": {
            "P14": 1
        }
    },
    "Arjun Mukherjee Bing": {
        "2010": {
            "D10": 1
        },
        "2012": {
            "P12": 2
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Tinto Honkela": {
        "2010": {
            "S10": 1
        }
    },
    "Paul S Jacobs": {
        "1992": {
            "A92": 1
        },
        "1987": {
            "P87": 1
        }
    },
    "C Razvan": {
        "2008": {
            "D08": 1
        }
    },
    "Houfeng Wenjie of Computing": {
        "2012": {
            "P12": 1
        }
    },
    "Svetlana Sheremetyeva": {
        "2014": {
            "W14": 1
        }
    },
    "Nathan": {
        "2011": {
            "P11": 1
        }
    },
    "Alberto Diaz": {
        "2012": {
            "S12": 2
        }
    },
    "Greg Langmead": {
        "2011": {
            "W11": 1
        }
    },
    "Mary E Beckman'": {
        "1986": {
            "P86": 1
        }
    },
    "Ryan": {
        "2013": {
            "P13": 1,
            "W13": 1
        }
    },
    "Q": {
        "2014": {
            "W14": 1
        }
    },
    "Weizheng Chen": {
        "2015": {
            "P15": 1
        }
    },
    "Tuomo": {
        "2011": {
            "W11": 1
        }
    },
    "Raphael Finkel Gregory Stump": {
        "2002": {
            "W02": 1
        }
    },
    "Sittichai Jiampojamarn": {
        "2009": {
            "P09": 1,
            "W09": 1
        },
        "2010": {
            "W10": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Xingkai Li Kondrak": {
        "2012": {
            "W12": 1
        }
    },
    "Haw-ren": {
        "2006": {
            "W06": 1
        }
    },
    "Ling Yin": {
        "2006": {
            "E06": 1
        }
    },
    "Barbara Dunin-Kgplicz": {
        "1985": {
            "E85": 1
        }
    },
    "Yanyan Luo": {
        "2013": {
            "W13": 1
        }
    },
    "Tracy Holloway King": {
        "2009": {
            "W09": 1
        }
    },
    "Hirotoshi Taira": {
        "2010": {
            "P10": 1
        },
        "2003": {
            "W03": 1
        }
    },
    "Bing Qin Fu": {
        "2013": {
            "D13": 1
        }
    },
    "Jian-Cheng Wu": {
        "2005": {
            "P05": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Robin Cooper": {
        "2000": {
            "W00": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Howard R Webber": {
        "1984": {
            "P84": 1
        }
    },
    "Yo Ruth Christine": {
        "2009": {
            "W09": 1
        }
    },
    "Kentaro": {
        "2015": {
            "D15": 1
        }
    },
    "Katharina W\u00a8aschle": {
        "2015": {
            "W15": 1
        }
    },
    "Sameer S Pradhan": {
        "2007": {
            "S07": 1
        }
    },
    "Charlotte Gooskens": {
        "2006": {
            "W06": 1
        }
    },
    "Elliott Franco Dr\u00b4abek": {
        "2004": {
            "P04": 1
        }
    },
    "Krzysztof Czuba": {
        "2000": {
            "A00": 1
        }
    },
    "Li Wang": {
        "2010": {
            "W10": 1
        }
    },
    "Stephen Roller": {
        "2013": {
            "D13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Jos\u00e9-Miguel": {
        "2010": {
            "N10": 1
        }
    },
    "Doyle": {
        "2013": {
            "N13": 1
        }
    },
    "John Gahgene Bhiksha Carolyn Penstein": {
        "2012": {
            "E12": 1
        }
    },
    "Pala Pothukuchi Joshi V": {
        "2012": {
            "W12": 1
        }
    },
    "Antonio Ferr\u00e1ndez": {
        "2000": {
            "P00": 1
        }
    },
    "Paul Portner": {
        "2013": {
            "W13": 1
        }
    },
    "Franco Ferrara": {
        "1987": {
            "E87": 1
        }
    },
    "Teruko Mitamura": {
        "2015": {
            "W15": 1
        },
        "2004": {
            "N04": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Mirjam Graham Satoshi Alex": {
        "2014": {
            "Q14": 1
        }
    },
    "John Fry": {
        "2001": {
            "W01": 1
        },
        "2004": {
            "N04": 1
        }
    },
    "Hai Zhao": {
        "2008": {
            "W08": 1
        }
    },
    "T Sunil Kumar": {
        "2015": {
            "W15": 1
        }
    },
    "Diane Napolitano": {
        "2013": {
            "W13": 1
        }
    },
    "Christophe Servan": {
        "2011": {
            "W11": 1
        }
    },
    "San": {
        "2011": {
            "D11": 1
        }
    },
    "Sam": {
        "2012": {
            "W12": 1
        }
    },
    "Sutanu Chakraborti": {
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Angelov Ranta": {
        "2009": {
            "E09": 1
        }
    },
    "Ralph GRISHMAN": {
        "2004": {
            "W04": 1
        }
    },
    "Ravi": {
        "2013": {
            "W13": 1
        }
    },
    "M Bedore D": {
        "2009": {
            "N09": 1
        }
    },
    "Kate": {
        "2002": {
            "W02": 1
        }
    },
    "Ryo Nagata": {
        "2006": {
            "P06": 1
        }
    },
    "Ioannis Efstathiou": {
        "2014": {
            "W14": 1
        }
    },
    "Manabu Okumura": {
        "2007": {
            "S07": 1
        }
    },
    "Jason Baldridge": {
        "2008": {
            "P08": 1,
            "W08": 1
        },
        "2005": {
            "W05": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "David Lawrence": {
        "2009": {
            "W09": 1
        }
    },
    "Chaobo Sun": {
        "2010": {
            "W10": 1
        }
    },
    "Barbara Di_Eugeniot": {
        "1995": {
            "P95": 1
        }
    },
    "Longin Latecki": {
        "1992": {
            "P92": 1
        },
        "1991": {
            "E91": 1
        }
    },
    "Ekaterina Lapshinova-Koltunski": {
        "2015": {
            "W15": 1
        }
    },
    "Andr\u00e9s": {
        "2011": {
            "W11": 1
        }
    },
    "Vera": {
        "2015": {
            "W15": 1
        }
    },
    "Zhou Su": {
        "2000": {
            "W00": 1
        }
    },
    "Emad Mohamed": {
        "2010": {
            "N10": 1
        }
    },
    "Power Scott": {
        "1998": {
            "P98": 1
        }
    },
    "Hiroyuki Kaji": {
        "1984": {
            "P84": 1
        },
        "2003": {
            "N03": 1
        }
    },
    "Gordon McCalla": {
        "1992": {
            "P92": 1
        }
    },
    "\u00d8yvind Selmer Mikael Brevik Bj\u00a8orn Gamb\u00a8ack Lars Bungum": {
        "2013": {
            "S13": 1
        }
    },
    "Xinhui Hu": {
        "2009": {
            "W09": 1
        }
    },
    "Dragos Stefan Munteanu": {
        "2004": {
            "N04": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Graciela Rosemblat": {
        "2006": {
            "W06": 1
        }
    },
    "Kewei": {
        "2012": {
            "W12": 1
        }
    },
    "Miguel": {
        "2012": {
            "S12": 1
        }
    },
    "B\u00e9atrice LINA": {
        "2009": {
            "W09": 1
        }
    },
    "Cynthia Kersey": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "W09": 1
        },
        "2010": {
            "N10": 1
        }
    },
    "Michael Rosner": {
        "2015": {
            "W15": 1
        }
    },
    "Romacker": {
        "2000": {
            "A00": 1
        }
    },
    "Mohammady": {
        "2014": {
            "W14": 1
        }
    },
    "K O\u2019Halloran": {
        "2009": {
            "W09": 1
        }
    },
    "Rahul Gupta": {
        "2014": {
            "D14": 1
        }
    },
    "Sergio Grau Puerto": {
        "2007": {
            "N07": 1
        }
    },
    "Roxana Angheluta Rudradeb Mitra": {
        "2006": {
            "W06": 1
        }
    },
    "Mohamed Abouelenien": {
        "2015": {
            "D15": 1
        }
    },
    "Nicolas Hernandez Soufian": {
        "2014": {
            "W14": 1
        }
    },
    "Mihai Massimiliano Hugo": {
        "2009": {
            "E09": 1
        }
    },
    "Deng Xue": {
        "2014": {
            "W14": 1
        }
    },
    "Sravana": {
        "2009": {
            "W09": 1
        }
    },
    "Bazrafshan": {
        "2013": {
            "P13": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Chris Jason": {
        "2015": {
            "K15": 1
        }
    },
    "Eric P Xing": {
        "2010": {
            "D10": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Uchimoto Kotani Zhang": {
        "2007": {
            "N07": 1
        }
    },
    "Alexandre Nanchen": {
        "2011": {
            "P11": 1
        }
    },
    "Laura Rimell": {
        "2015": {
            "W15": 1
        }
    },
    "Thien Huu": {
        "2014": {
            "P14": 1
        },
        "2015": {
            "W15": 2,
            "P15": 1
        }
    },
    "Suresh": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "N10": 1,
            "W10": 2
        }
    },
    "Geli Fei": {
        "2015": {
            "D15": 1
        }
    },
    "Scott Silliman": {
        "2004": {
            "N04": 1
        }
    },
    "Yuqi Zhang": {
        "2012": {
            "W12": 1
        }
    },
    "Yonatan Belinkov": {
        "2013": {
            "P13": 1
        }
    },
    "John Bear": {
        "1992": {
            "P92": 1,
            "A92": 1
        },
        "1988": {
            "A88": 1
        }
    },
    "Myung-Gil Jang": {
        "2003": {
            "W03": 1
        },
        "2005": {
            "P05": 1
        }
    },
    "Christian Boitet": {
        "2010": {
            "W10": 1
        }
    },
    "Stuart M Shieber": {
        "1984": {
            "P84": 2
        },
        "1985": {
            "P85": 1
        },
        "1989": {
            "P89": 1
        },
        "1992": {
            "P92": 1
        },
        "1993": {
            "J93": 1
        },
        "2006": {
            "E06": 1
        },
        "1982": {
            "P82": 1
        },
        "1983": {
            "P83": 2
        }
    },
    "Alina Andreevskaia": {
        "2008": {
            "P08": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "New York": {
        "2010": {
            "N10": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "P12": 1
        },
        "2014": {
            "D14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Florian Schwarck": {
        "2010": {
            "N10": 1
        }
    },
    "Linda Alamir-Salloum": {
        "2014": {
            "P14": 1
        }
    },
    "Eric Atwell": {
        "1988": {
            "P88": 1
        }
    },
    "Marie A Bienkowski": {
        "1987": {
            "E87": 1
        }
    },
    "Mamoru Matsuo": {
        "1997": {
            "W97": 1
        }
    },
    "Guodong Zhou": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "D12": 1
        },
        "2013": {
            "D13": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Inter-Coder Agreement for": {
        "2008": {
            "J08": 1
        }
    },
    "Fridolin Wild": {
        "2009": {
            "W09": 1
        }
    },
    "Maja Popovic": {
        "2011": {
            "W11": 1
        }
    },
    "Barbara Di": {
        "2010": {
            "N10": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "N12": 1
        },
        "2013": {
            "P13": 1,
            "W13": 1
        }
    },
    "Rongzhou Shen": {
        "2010": {
            "W10": 1
        }
    },
    "Peter Staudacher": {
        "1993": {
            "E93": 1
        }
    },
    "Peter PoIler Paul Heistericarnp": {
        "1997": {
            "W97": 1
        }
    },
    "Morena Danieli": {
        "1987": {
            "E87": 1
        }
    },
    "Jeff Poornima Myle Claire": {
        "2012": {
            "W12": 1
        }
    },
    "Margalit ZABLUDOWSKI": {
        "2004": {
            "W04": 1
        }
    },
    "Denis": {
        "2007": {
            "N07": 1
        }
    },
    "Roger J Kreuz Gina M Caucci": {
        "2007": {
            "W07": 1
        }
    },
    "Gaston Burek Dale": {
        "2009": {
            "W09": 1
        }
    },
    "Herv\u00b4e Blanchon": {
        "2010": {
            "W10": 1
        }
    },
    "Xiaopeng Bai": {
        "2012": {
            "W12": 1
        }
    },
    "Tsatsaronis Panagiotopoulou": {
        "2009": {
            "E09": 1
        }
    },
    "Kazuhide": {
        "2002": {
            "W02": 1
        }
    },
    "Alexander Yeh": {
        "2000": {
            "P00": 1
        }
    },
    "PHAN Huy Khanh": {
        "2000": {
            "P00": 1
        }
    },
    "Nissim Francez": {
        "1995": {
            "E95": 1
        }
    },
    "Derek Long": {
        "1998": {
            "P98": 1
        }
    },
    "Haibo Ding": {
        "2010": {
            "W10": 1
        }
    },
    "Nicolas Stroppa": {
        "2007": {
            "P07": 1
        }
    },
    "Megan Moser": {
        "1996": {
            "J96": 1
        }
    },
    "Megumi Kameyama": {
        "1986": {
            "P86": 1
        }
    },
    "Masahiro": {
        "2012": {
            "W12": 1
        }
    },
    "Narendra Gupta": {
        "2010": {
            "W10": 1
        }
    },
    "Kenji Sagae": {
        "2010": {
            "P10": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Michael Speriosu": {
        "2011": {
            "W11": 1
        }
    },
    "Tommaso Caselli": {
        "2011": {
            "W11": 1
        },
        "2014": {
            "D14": 1
        },
        "2015": {
            "W15": 1,
            "S15": 1
        }
    },
    "Yaohong Jin": {
        "2014": {
            "W14": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Zachary Yocum": {
        "2013": {
            "W13": 1
        }
    },
    "Hugo Zaragoza": {
        "2008": {
            "P08": 1
        }
    },
    "Paris": {
        "1985": {
            "P85": 1
        }
    },
    "Regina": {
        "2011": {
            "P11": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Carl Weir": {
        "1992": {
            "P92": 1
        }
    },
    "Atsushi Okajima": {
        "1984": {
            "P84": 1
        }
    },
    "Takaaki Hasegawa": {
        "2004": {
            "P04": 1
        }
    },
    "Harksoo Kim": {
        "2002": {
            "W02": 1
        },
        "1999": {
            "W99": 1
        }
    },
    "Azadeh Nikfarjam": {
        "2015": {
            "S15": 1
        }
    },
    "Torabi Jonathan Yulia": {
        "2014": {
            "W14": 1
        }
    },
    "S Newman": {
        "1988": {
            "A88": 1
        }
    },
    "Dimitra Vergyri": {
        "2004": {
            "N04": 1
        }
    },
    "Jill": {
        "2013": {
            "Q13": 1
        }
    },
    "Cong Duy Vu HOANG": {
        "2012": {
            "W12": 1
        }
    },
    "David A": {
        "2010": {
            "N10": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Qi Li": {
        "2011": {
            "W11": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Srinivasan Helen Amol Lee Ginevra Castellano": {
        "2013": {
            "W13": 1
        }
    },
    "Tamara Polajnar": {
        "2013": {
            "S13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Giuseppe Careninit Steven Roth\u00a7": {
        "1998": {
            "J98": 1
        }
    },
    "Brittany": {
        "2014": {
            "D14": 1
        }
    },
    "Blake Stephen Howald": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "S12": 1
        }
    },
    "Mikko Kurimo": {
        "2010": {
            "W10": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Janyce Wiebe Di_Chen": {
        "2014": {
            "S14": 1
        }
    },
    "Bing Qin Zhao": {
        "2012": {
            "D12": 1
        }
    },
    "T Nguyen": {
        "2011": {
            "P11": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Andrea Varga": {
        "2009": {
            "W09": 1
        }
    },
    "E Rafael": {
        "2014": {
            "W14": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "F J Smith": {
        "2006": {
            "P06": 1
        }
    },
    "Cynthia Fisher": {
        "2010": {
            "P10": 1
        }
    },
    "Heng Yu Sujian": {
        "2014": {
            "D14": 1
        }
    },
    "Zhang": {
        "2006": {
            "W06": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "D14": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Po": {
        "2015": {
            "P15": 1
        }
    },
    "A Stoica": {
        "2004": {
            "N04": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Karin HARBUSCH": {
        "2007": {
            "W07": 1
        }
    },
    "Brian Pl\u00a8uss": {
        "2010": {
            "P10": 1
        }
    },
    "Courtney Napoles": {
        "2011": {
            "D11": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "L Nancy": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Ezra Black": {
        "1998": {
            "P98": 1
        }
    },
    "Adam Hammond": {
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Wolfgang Seeker Jonas": {
        "2014": {
            "P14": 1
        }
    },
    "Andrew J Anderson": {
        "2013": {
            "D13": 1
        }
    },
    "A Smith Eisner": {
        "2004": {
            "P04": 1
        },
        "2005": {
            "P05": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "So-Young Park": {
        "2004": {
            "W04": 1
        }
    },
    "Phillip Smith": {
        "2012": {
            "W12": 1
        }
    },
    "Xingshang Fu": {
        "2006": {
            "P06": 1
        }
    },
    "Skon": {
        "1993": {
            "P93": 1
        }
    },
    "Jasmin Sari\u00b4c Lars J Jensen Rossitza Ouzounova": {
        "2004": {
            "P04": 1
        }
    },
    "Noriko Kando": {
        "2010": {
            "S10": 1
        }
    },
    "M Yamangil": {
        "2012": {
            "P12": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Emilia Apostolova": {
        "2014": {
            "D14": 1
        }
    },
    "Mihalcea Banea": {
        "2007": {
            "P07": 1
        }
    },
    "Venkatesan T Chakaravarthy": {
        "2009": {
            "P09": 1
        }
    },
    "J Caruana": {
        "1998": {
            "W98": 1
        }
    },
    "Shilpa Arora": {
        "2009": {
            "N09": 1
        },
        "2010": {
            "W10": 1
        }
    },
    "Egon Loebner": {
        "1982": {
            "P82": 1
        }
    },
    "Joachim Grabowski": {
        "1997": {
            "W97": 1
        }
    },
    "Hanoi": {
        "2015": {
            "S15": 1
        }
    },
    "Jiang Chen": {
        "2000": {
            "A00": 1
        }
    },
    "Frank Schilder": {
        "1998": {
            "P98": 1
        }
    },
    "John DeNero": {
        "2006": {
            "W06": 1
        },
        "2007": {
            "N07": 1,
            "P07": 1
        },
        "2008": {
            "P08": 1,
            "D08": 1
        },
        "2010": {
            "N10": 1
        },
        "2011": {
            "P11": 1,
            "D11": 1
        },
        "2012": {
            "P12": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Stephan Gouws": {
        "2010": {
            "W10": 1
        }
    },
    "G\u00a8unter Neumann": {
        "2007": {
            "S07": 1
        }
    },
    "Beth Ann Hockey": {
        "2000": {
            "A00": 1
        },
        "2001": {
            "P01": 1
        },
        "2003": {
            "P03": 1
        }
    },
    "Bruce Evans Janet Tom": {
        "1988": {
            "A88": 1
        }
    },
    "C Emele": {
        "1998": {
            "P98": 1
        }
    },
    "John G McMahon Francis J Smith": {
        "1996": {
            "J96": 1
        }
    },
    "Wisniewski P\u00b4echeux": {
        "2015": {
            "W15": 1
        }
    },
    "Jinhua Du": {
        "2010": {
            "D10": 1,
            "W10": 1
        }
    },
    "Adam Przepi\u00f3rkowski": {
        "2007": {
            "W07": 1,
            "P07": 1
        }
    },
    "Daniel Andrade Masaaki Tsuchida Takashi Onishi Kai Ishikawa": {
        "2013": {
            "N13": 1
        }
    },
    "R Radev": {
        "2006": {
            "P06": 1
        }
    },
    "Ying Xu": {
        "2015": {
            "W15": 1
        }
    },
    "Bart Cramer": {
        "2007": {
            "P07": 1
        }
    },
    "Yong": {
        "2010": {
            "W10": 1
        }
    },
    "Ross Israel": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "N12": 1,
            "W12": 1
        }
    },
    "W Marie": {
        "1990": {
            "W90": 1
        }
    },
    "Massimiliano": {
        "2002": {
            "W02": 1
        }
    },
    "Paul van_Pelt": {
        "2008": {
            "P08": 1
        }
    },
    "Tong Wang": {
        "2014": {
            "P14": 1
        }
    },
    "Marco Turchi Tijl De_Bie Nello Cristianini": {
        "2008": {
            "W08": 1
        }
    },
    "Sandro Bauer": {
        "2015": {
            "P15": 1
        }
    },
    "Sergei Kurkin": {
        "2008": {
            "W08": 1
        }
    },
    "Shona": {
        "2003": {
            "N03": 1
        }
    },
    "Mu Tong Ming": {
        "2009": {
            "D09": 1
        }
    },
    "Jiwei Li Sujian Li": {
        "2013": {
            "Q13": 1
        }
    },
    "Wetzel Lopez": {
        "2015": {
            "W15": 1
        }
    },
    "Cecile L Paris": {
        "1989": {
            "P89": 1
        }
    },
    "Josef van_Genabith": {
        "2008": {
            "P08": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "W11": 1
        },
        "2015": {
            "W15": 1
        },
        "2007": {
            "W07": 2
        }
    },
    "Kevin C Yeh": {
        "2003": {
            "P03": 1
        }
    },
    "Patrick SAINT-DIZIER": {
        "1991": {
            "E91": 1
        }
    },
    "Jianwu Yang": {
        "2007": {
            "P07": 1
        }
    },
    "Mahesh Joshi": {
        "2011": {
            "W11": 1
        },
        "2014": {
            "D14": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Roberto Pieraccini": {
        "2008": {
            "P08": 1
        },
        "1991": {
            "P91": 1
        }
    },
    "Claire Nelson": {
        "2014": {
            "P14": 1
        }
    },
    "Fangze Zhu": {
        "2015": {
            "D15": 1
        }
    },
    "Arun Ahuja": {
        "2010": {
            "N10": 1
        }
    },
    "Sebastian Rudolph": {
        "2010": {
            "P10": 1
        }
    },
    "Saidul Hasan Altaf ur Rahman Ng": {
        "2009": {
            "E09": 1
        }
    },
    "A R Antonio": {
        "2014": {
            "W14": 1
        }
    },
    "Adam Mickiewicz": {
        "2006": {
            "W06": 1
        }
    },
    "Yunbo Cao": {
        "2003": {
            "P03": 1
        }
    },
    "Greg": {
        "2010": {
            "D10": 1
        }
    },
    "Sokolov B Cohen": {
        "2015": {
            "K15": 1
        }
    },
    "Constantin Orasan": {
        "2003": {
            "E03": 1
        }
    },
    "Mark-Jan": {
        "2011": {
            "D11": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Julie": {
        "2012": {
            "W12": 1
        }
    },
    "Ryuichiro Higashinaka": {
        "2009": {
            "W09": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Julia": {
        "2012": {
            "W12": 1
        },
        "2006": {
            "N06": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Can Liu": {
        "2013": {
            "S13": 1
        },
        "2014": {
            "W14": 1,
            "S14": 1
        }
    },
    "Xiaodong Liu": {
        "2013": {
            "W13": 2
        }
    },
    "John Nerbonne": {
        "2009": {
            "W09": 2
        },
        "2012": {
            "W12": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Rajesh Balchandran": {
        "2009": {
            "W09": 1
        }
    },
    "Masamichi Shutoh": {
        "1986": {
            "P86": 1
        }
    },
    "Keiji Shinzato Kentaro": {
        "2004": {
            "N04": 1
        }
    },
    "S\u00b4ergio": {
        "2015": {
            "S15": 1
        }
    },
    "Eduard": {
        "2003": {
            "N03": 2,
            "W03": 2
        },
        "2006": {
            "W06": 1,
            "N06": 1
        },
        "2007": {
            "N07": 1
        },
        "2010": {
            "N10": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        },
        "2012": {
            "N12": 1,
            "W12": 1
        },
        "2013": {
            "D13": 1
        },
        "2015": {
            "D15": 1,
            "W15": 1
        }
    },
    "Robin": {
        "2009": {
            "W09": 1
        }
    },
    "Basile Caputo": {
        "2014": {
            "S14": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Meng-Hsien Shih": {
        "2010": {
            "S10": 1
        }
    },
    "Yu-Chieh Wu": {
        "2006": {
            "W06": 1
        },
        "2007": {
            "N07": 1,
            "P07": 1
        }
    },
    "Marten van_Schijndel": {
        "2012": {
            "W12": 1
        },
        "2013": {
            "N13": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Institute for Informatics": {
        "2012": {
            "P12": 1
        }
    },
    "Shravan Vasishth": {
        "2008": {
            "P08": 1
        }
    },
    "Schwartz": {
        "2010": {
            "W10": 1
        }
    },
    "Renjing Wang": {
        "2009": {
            "E09": 1
        }
    },
    "Strakov\u00b4a Straka": {
        "2014": {
            "P14": 1
        }
    },
    "Federico Sangati": {
        "2009": {
            "W09": 1,
            "E09": 1
        },
        "2010": {
            "P10": 2
        }
    },
    "Eugeny": {
        "2014": {
            "S14": 1
        }
    },
    "Takashi Tomokiyo": {
        "2003": {
            "W03": 1
        }
    },
    "Hakan Ceylan": {
        "2009": {
            "P09": 1
        }
    },
    "Jie Zhou": {
        "2015": {
            "P15": 1
        }
    },
    "Wang Xinhao": {
        "2006": {
            "W06": 1
        }
    },
    "Annie Louis": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "E09": 1
        },
        "2010": {
            "P10": 1,
            "W10": 3
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "D12": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Michel Simard": {
        "2014": {
            "S14": 1
        },
        "2006": {
            "N06": 1
        },
        "2007": {
            "N07": 1,
            "W07": 1
        }
    },
    "Kuansan": {
        "2002": {
            "W02": 1
        }
    },
    "Qin Lu": {
        "2009": {
            "P09": 1
        }
    },
    "Karen Sparck Jones": {
        "1984": {
            "P84": 1
        }
    },
    "Lingjia Deng Janyce": {
        "2014": {
            "E14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Eugene": {
        "2001": {
            "N01": 1
        },
        "2010": {
            "D10": 1
        },
        "2007": {
            "N07": 2
        },
        "2011": {
            "W11": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Gabriel Murray": {
        "2010": {
            "D10": 1,
            "W10": 1
        },
        "2012": {
            "W12": 1
        },
        "2006": {
            "W06": 1,
            "N06": 1
        }
    },
    "Maximilian Bisani Paul Vozila Olivier Divay Jeff Adams": {
        "2008": {
            "P08": 1
        }
    },
    "Starr Roxanne Hiltz": {
        "1980": {
            "P80": 1
        }
    },
    "Sun Hu Huang Chua": {
        "2009": {
            "P09": 1
        }
    },
    "B Cohen": {
        "2010": {
            "P10": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Andreas Zollmann": {
        "2009": {
            "N09": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Alex Kleeman": {
        "2008": {
            "P08": 1
        }
    },
    "Edward Grefenstette": {
        "2014": {
            "P14": 1
        }
    },
    "de_Iryna Chris": {
        "2014": {
            "P14": 1
        }
    },
    "Daniel Zeman": {
        "2012": {
            "W12": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Joel Wallenberg": {
        "2008": {
            "P08": 1
        }
    },
    "Hwa Elisabeta Marai": {
        "2009": {
            "E09": 1
        }
    },
    "James W D Constable Ng": {
        "2010": {
            "S10": 1
        }
    },
    "regnericoli uni-sb de_egglet rug nl a kollered ac uk": {
        "2008": {
            "P08": 1
        }
    },
    "Yves Peirsman": {
        "2006": {
            "E06": 1
        }
    },
    "Ueffing Gholamreza": {
        "2007": {
            "P07": 1
        }
    },
    "Setsuo YAMADA": {
        "1998": {
            "P98": 1
        }
    },
    "R Van": {
        "2014": {
            "P14": 1
        }
    },
    "H\u00e9ctor Mart\u00ednez Alonso": {
        "2015": {
            "D15": 1
        }
    },
    "Chiara Higgins Elizabeth McGrath Lailla Moretto": {
        "2010": {
            "W10": 1
        }
    },
    "Yannick": {
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Li Zhang": {
        "2006": {
            "E06": 1,
            "W06": 2
        }
    },
    "Giuseppe Frank W Raymond T": {
        "2013": {
            "W13": 1
        }
    },
    "Timo Jarvinen": {
        "1998": {
            "W98": 1
        }
    },
    "Matthew Stone Bonnie": {
        "1998": {
            "W98": 1
        }
    },
    "Fermin L Cruz": {
        "2011": {
            "W11": 1
        }
    },
    "Deepak P Karthik Visweswariah": {
        "2014": {
            "P14": 1
        }
    },
    "Rie Kubota": {
        "2004": {
            "W04": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Mukta Majumder": {
        "2015": {
            "W15": 1
        }
    },
    "Andreas van_Cranenburgh": {
        "2011": {
            "W11": 1
        }
    },
    "Ciprian": {
        "2004": {
            "N04": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "HONDA Takeo": {
        "1998": {
            "P98": 1
        }
    },
    "Patrick Ehlen": {
        "2006": {
            "W06": 1
        }
    },
    "Rion Snow": {
        "2006": {
            "P06": 1
        }
    },
    "Octavian Popescu": {
        "2009": {
            "N09": 1
        },
        "2006": {
            "W06": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Youzheng Wu Hisashi Kawai": {
        "2010": {
            "W10": 1
        }
    },
    "Hewlett": {
        "2011": {
            "P11": 1,
            "W11": 1
        }
    },
    "Toutanova Waleed Chourdhury": {
        "2015": {
            "K15": 1
        }
    },
    "Vineet Yadav": {
        "2013": {
            "S13": 1
        }
    },
    "Marieke van_Erp": {
        "2006": {
            "W06": 1
        }
    },
    "Abstract Phil Hayes": {
        "1980": {
            "P80": 1
        }
    },
    "Emanuele Lapponi": {
        "2012": {
            "S12": 1
        }
    },
    "Sheila Rock": {
        "1992": {
            "P92": 1
        }
    },
    "Judit \u00b4Acs Katalin Pajkossy Andr\u00b4as Kornai": {
        "2013": {
            "W13": 1
        }
    },
    "Diana": {
        "2014": {
            "W14": 1
        },
        "2013": {
            "S13": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Diane": {
        "2013": {
            "N13": 1
        }
    },
    "Arjun": {
        "2015": {
            "P15": 1
        }
    },
    "Tomoki Shutoh": {
        "1986": {
            "P86": 1
        }
    },
    "Enrico Motta": {
        "2006": {
            "W06": 1
        }
    },
    "William W Cohen": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "P09": 1,
            "N09": 1
        },
        "2011": {
            "D11": 1,
            "W11": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "P13": 1
        },
        "2015": {
            "D15": 1,
            "P15": 1
        }
    },
    "Shahid Mushtaq Bhat": {
        "2012": {
            "W12": 1
        }
    },
    "Yue-Shi Lee": {
        "1995": {
            "W95": 1
        },
        "1997": {
            "A97": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "North Carolina State": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2014": {
            "W14": 2
        }
    },
    "Qing Dou": {
        "2009": {
            "P09": 1,
            "W09": 1
        },
        "2012": {
            "D12": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Rijksuniversiteit Groningen": {
        "2000": {
            "J00": 1
        }
    },
    "Megan": {
        "2007": {
            "N07": 1
        }
    },
    "Lili Kotlerman": {
        "2009": {
            "P09": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Gorka": {
        "2012": {
            "W12": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Robert C Moore": {
        "1989": {
            "P89": 2
        },
        "2000": {
            "A00": 1,
            "P00": 1
        },
        "2002": {
            "P02": 1
        },
        "2003": {
            "E03": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "N07": 1,
            "W07": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "P09": 1,
            "D09": 1
        },
        "2010": {
            "P10": 1
        },
        "2012": {
            "W12": 1
        },
        "1982": {
            "P82": 1
        }
    },
    "Kapil Thadani": {
        "2010": {
            "W10": 1
        }
    },
    "John Bryant Gedigian": {
        "2006": {
            "W06": 1
        }
    },
    "Imai": {
        "1998": {
            "W98": 1
        }
    },
    "Kulick Anthony Kroch Santorini": {
        "2014": {
            "P14": 1
        }
    },
    "G Edward Barton": {
        "1985": {
            "P85": 1
        },
        "1986": {
            "P86": 2
        }
    },
    "Christopher Manning": {
        "2004": {
            "W04": 1
        },
        "2005": {
            "P05": 1
        }
    },
    "Cassandre Creswell Elsi Kaiser": {
        "2004": {
            "W04": 1
        }
    },
    "Elif Eyig\u00a8oz": {
        "2013": {
            "N13": 1,
            "W13": 1
        }
    },
    "Michaela": {
        "2009": {
            "W09": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Douglas Summers-Stay Taylor Cassidy Clare R Voss": {
        "2014": {
            "W14": 1
        }
    },
    "Gandhe Traum": {
        "2008": {
            "W08": 1
        }
    },
    "Xiao Cheng": {
        "2013": {
            "D13": 1
        }
    },
    "Josef Hermann": {
        "2003": {
            "J03": 1
        },
        "2004": {
            "J04": 1
        }
    },
    "Karin Friberg": {
        "2012": {
            "W12": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Raphael Chloe Kiddon": {
        "2010": {
            "W10": 1
        }
    },
    "Lin Liu": {
        "2005": {
            "P05": 1
        }
    },
    "Vineet Kumar": {
        "2014": {
            "W14": 1
        }
    },
    "Hiroaki Sato": {
        "2003": {
            "P03": 1
        }
    },
    "Yang": {
        "2009": {
            "N09": 1
        },
        "2010": {
            "N10": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Max Froumentin": {
        "2004": {
            "W04": 1
        }
    },
    "Madeleine Bates": {
        "1994": {
            "A94": 1
        }
    },
    "D Jinho": {
        "2011": {
            "P11": 1,
            "W11": 2
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Shinsuke": {
        "2011": {
            "P11": 1
        }
    },
    "Michael Gasser": {
        "2009": {
            "E09": 1
        },
        "1994": {
            "P94": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Aarne": {
        "2012": {
            "E12": 1
        }
    },
    "Maja Popovi\u00b4c": {
        "2009": {
            "W09": 2
        }
    },
    "Amit BAGGA": {
        "2000": {
            "A00": 1
        }
    },
    "Scott Ramesh Srivastava": {
        "2003": {
            "W03": 1
        }
    },
    "Jussi Piitulainen Jarvinen Tapanainen": {
        "1998": {
            "P98": 1
        }
    },
    "Oflazer Kuruaz": {
        "1994": {
            "A94": 1
        }
    },
    "L Padre Rigau Daude": {
        "2000": {
            "P00": 1
        }
    },
    "Arne JOnsson": {
        "1991": {
            "E91": 1
        }
    },
    "Daniel Chung Yong LimI": {
        "2001": {
            "J01": 1
        }
    },
    "David Jurgens": {
        "2010": {
            "P10": 1,
            "S10": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Sankar K Sobha L": {
        "2009": {
            "W09": 1
        }
    },
    "Nikolaos Trogkanis": {
        "2010": {
            "P10": 1
        }
    },
    "Liang Chen": {
        "2003": {
            "W03": 1
        },
        "1997": {
            "A97": 1
        }
    },
    "Youngja Park": {
        "2001": {
            "W01": 1
        }
    },
    "Hans Friedrich": {
        "2007": {
            "W07": 1
        }
    },
    "Razvan C Bunescu": {
        "2012": {
            "S12": 1
        }
    },
    "Oana Postolache": {
        "2005": {
            "P05": 1
        }
    },
    "John Lee": {
        "2008": {
            "P08": 1
        },
        "2012": {
            "N12": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Terry Health": {
        "2012": {
            "P12": 1
        }
    },
    "Kristin Precoda": {
        "2004": {
            "N04": 1
        }
    },
    "Michael J Pan": {
        "2007": {
            "W07": 1
        }
    },
    "Shizhu He": {
        "2013": {
            "P13": 1
        }
    },
    "Joe Zhou": {
        "1995": {
            "W95": 1
        },
        "1997": {
            "A97": 1
        }
    },
    "David D McDonald": {
        "1993": {
            "W93": 1
        },
        "1987": {
            "P87": 1
        },
        "1991": {
            "W91": 1
        }
    },
    "Xuanhui Wang": {
        "2006": {
            "N06": 1
        }
    },
    "Yang Liu Li": {
        "2013": {
            "D13": 1
        }
    },
    "Robert Frederking": {
        "2008": {
            "W08": 1
        },
        "1994": {
            "A94": 1
        },
        "2010": {
            "W10": 1
        }
    },
    "Alessandro Moschitti": {
        "2004": {
            "P04": 1
        },
        "2006": {
            "E06": 1,
            "W06": 1
        },
        "2007": {
            "S07": 1
        },
        "2008": {
            "P08": 2
        },
        "2009": {
            "W09": 1,
            "E09": 2
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Jing": {
        "2006": {
            "W06": 1
        }
    },
    "FUJII Atsushi": {
        "1996": {
            "W96": 1
        }
    },
    "Claude": {
        "2014": {
            "S14": 1
        }
    },
    "Anna Kazantseva": {
        "2006": {
            "E06": 1
        }
    },
    "Jethran Guinness": {
        "2004": {
            "N04": 1
        }
    },
    "Martin Jansche": {
        "2002": {
            "W02": 1
        },
        "2003": {
            "P03": 1
        }
    },
    "Isao Goto": {
        "2012": {
            "P12": 1
        }
    },
    "Ted Briscoe": {
        "1985": {
            "E85": 1
        },
        "1987": {
            "E87": 2
        },
        "1991": {
            "W91": 1
        },
        "1996": {
            "W96": 1
        },
        "2005": {
            "W05": 1,
            "P05": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 2
        },
        "2010": {
            "W10": 1
        }
    },
    "Seon Yang": {
        "2009": {
            "P09": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Miriam Eckert": {
        "1999": {
            "E99": 1
        }
    },
    "K Benjamin": {
        "2005": {
            "W05": 1
        }
    },
    "Victor Lavrenko": {
        "2010": {
            "N10": 1,
            "W10": 1
        },
        "2012": {
            "N12": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Hao Zhang": {
        "2008": {
            "P08": 1
        },
        "2013": {
            "D13": 1
        },
        "2006": {
            "P06": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Kudo Matsumoto": {
        "2002": {
            "P02": 1,
            "W02": 1
        },
        "2003": {
            "P03": 1
        }
    },
    "A Marilyn": {
        "1993": {
            "W93": 1
        },
        "1994": {
            "W94": 1
        }
    },
    "Evelyne Viegas": {
        "2010": {
            "W10": 1
        },
        "1996": {
            "W96": 1,
            "P96": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Masahiro Oku": {
        "1994": {
            "A94": 1
        }
    },
    "Riesa Marcu": {
        "2010": {
            "P10": 1
        },
        "2012": {
            "N12": 1
        }
    },
    "Sandra Kitbler": {
        "1998": {
            "W98": 1
        }
    },
    "Padro": {
        "2003": {
            "E03": 1
        }
    },
    "Sharon Flank": {
        "1989": {
            "P89": 1
        }
    },
    "Colin Cherry": {
        "2005": {
            "P05": 1
        },
        "2006": {
            "W06": 1,
            "P06": 1
        },
        "2009": {
            "P09": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Jianfeng Li": {
        "2006": {
            "P06": 1
        }
    },
    "Emmanuelle Cannesson": {
        "2002": {
            "W02": 1
        }
    },
    "Christopher M Mitchell": {
        "2012": {
            "W12": 1
        }
    },
    "Koichi Takeuchi": {
        "2002": {
            "W02": 1
        },
        "2003": {
            "P03": 1
        }
    },
    "Alexandre Bouchard-C\u02c6ot\u00b4e": {
        "2008": {
            "D08": 1
        }
    },
    "Cyril Goutte": {
        "2003": {
            "W03": 1
        },
        "2014": {
            "S14": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Shen": {
        "2011": {
            "D11": 1
        }
    },
    "Yaghoobzadeh": {
        "2015": {
            "D15": 1
        }
    },
    "Douglas E Stumberger": {
        "1986": {
            "P86": 1
        }
    },
    "David J Besemer": {
        "1987": {
            "P87": 1
        }
    },
    "Jackie CK Cheung": {
        "2012": {
            "E12": 2
        }
    },
    "Jacob Thomas": {
        "2015": {
            "P15": 1
        }
    },
    "Herbert Gish": {
        "1994": {
            "W94": 1
        }
    },
    "N Fakotakis": {
        "1999": {
            "E99": 1
        }
    },
    "Gupta Nenkova Jurafsky": {
        "2007": {
            "P07": 1
        }
    },
    "Cho Bart van_Merri\u00a8enboer Dzmitry": {
        "2014": {
            "W14": 1
        }
    },
    "Richard B Nam": {
        "2010": {
            "W10": 1
        }
    },
    "Yih Christopher Meek": {
        "2013": {
            "D13": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Aravind School of": {
        "2003": {
            "W03": 1
        }
    },
    "Lynn Lambert": {
        "1992": {
            "P92": 1
        },
        "1991": {
            "P91": 2
        }
    },
    "Timothy W Bickmore\u2020": {
        "2001": {
            "P01": 1
        }
    },
    "Yanjun Ma Andy": {
        "2009": {
            "E09": 1
        },
        "2010": {
            "W10": 1
        }
    },
    "Lorraine Tanabe": {
        "2006": {
            "W06": 1
        }
    },
    "S Litvak": {
        "1983": {
            "E83": 1
        }
    },
    "Prescott Lucas H Elena H Martin L": {
        "2015": {
            "W15": 1
        }
    },
    "Stan": {
        "2004": {
            "W04": 1
        },
        "2006": {
            "W06": 3
        }
    },
    "PengYuan Liu": {
        "2007": {
            "S07": 1
        }
    },
    "Felix Stiehler": {
        "2014": {
            "W14": 1
        }
    },
    "Arndt": {
        "2015": {
            "P15": 1
        }
    },
    "Panupong Pasupat": {
        "2014": {
            "P14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "R Radford": {
        "2013": {
            "P13": 1
        }
    },
    "Michael Ringgaard": {
        "2009": {
            "N09": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Christopher D Manning": {
        "2003": {
            "N03": 1
        },
        "2004": {
            "W04": 1,
            "P04": 2
        },
        "2005": {
            "P05": 2
        },
        "2007": {
            "W07": 1,
            "P07": 1
        },
        "2008": {
            "P08": 3
        },
        "2009": {
            "W09": 2
        },
        "2010": {
            "P10": 1,
            "N10": 1
        },
        "2012": {
            "N12": 1,
            "D12": 1
        },
        "2013": {
            "S13": 1,
            "P13": 1,
            "W13": 3
        },
        "2014": {
            "Q14": 1,
            "W14": 2,
            "P14": 2
        }
    },
    "Stoyanov Uday Babbar Gupta Cardie": {
        "2011": {
            "W11": 1
        }
    },
    "Antal van_den": {
        "2006": {
            "W06": 1
        },
        "2014": {
            "W14": 1,
            "P14": 1
        }
    },
    "Dingsheng Luo": {
        "2008": {
            "P08": 1
        }
    },
    "Simon Leo": {
        "2014": {
            "W14": 1
        }
    },
    "Meliha Yetisgen-Yildiz": {
        "2010": {
            "W10": 2
        },
        "2013": {
            "W13": 1
        }
    },
    "White E Caldwell": {
        "1997": {
            "A97": 1
        }
    },
    "Eva Mok": {
        "2004": {
            "W04": 1
        }
    },
    "Marti A Hearst": {
        "1994": {
            "P94": 1
        },
        "1999": {
            "P99": 1
        },
        "2003": {
            "N03": 1
        },
        "2004": {
            "P04": 1
        },
        "2007": {
            "W07": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "W09": 1
        }
    },
    "Eduard Barbu": {
        "2015": {
            "W15": 1
        }
    },
    "Lise Getoor": {
        "2004": {
            "P04": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Ralph": {
        "2010": {
            "W10": 1
        },
        "2012": {
            "W12": 1
        },
        "1998": {
            "W98": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Gudrun Klose": {
        "1991": {
            "E91": 1
        }
    },
    "Abu": {
        "2015": {
            "D15": 1
        }
    },
    "Manuela Speranza": {
        "2006": {
            "W06": 1
        }
    },
    "Caitlin Trainor": {
        "2013": {
            "W13": 1
        }
    },
    "Luc Steels": {
        "2004": {
            "P04": 1
        }
    },
    "Quan Bin Lihong Li of Information Engineering": {
        "2015": {
            "P15": 1
        }
    },
    "James Clarke": {
        "2010": {
            "W10": 1
        }
    },
    "Abdessamad Echihabi": {
        "2002": {
            "P02": 1
        },
        "2003": {
            "P03": 2
        }
    },
    "T Roosmaa": {
        "1983": {
            "E83": 1
        }
    },
    "Lazlo Ring Morteza Behrooz": {
        "2013": {
            "W13": 1
        }
    },
    "Ali Ibrahim": {
        "2003": {
            "W03": 1
        }
    },
    "Libin Hou": {
        "2012": {
            "D12": 1
        }
    },
    "Stephen G Pulman": {
        "2000": {
            "J00": 1
        },
        "1996": {
            "J96": 1
        }
    },
    "Yoshio Izumida": {
        "1985": {
            "E85": 1
        }
    },
    "Ian Thomas": {
        "1998": {
            "W98": 1
        }
    },
    "T\u00a8ubingen": {
        "2015": {
            "W15": 1
        }
    },
    "Hall Klein": {
        "2010": {
            "P10": 1
        }
    },
    "Greg Whittemore": {
        "1991": {
            "P91": 1
        }
    },
    "Dan Bailey": {
        "2015": {
            "W15": 1
        }
    },
    "Mauro Di_Manzo": {
        "1984": {
            "P84": 1
        },
        "1983": {
            "E83": 1
        }
    },
    "Lois Black": {
        "2010": {
            "W10": 1
        }
    },
    "Kang Zhu Jun": {
        "2015": {
            "P15": 1
        }
    },
    "Yaoyun Zhang": {
        "2015": {
            "W15": 1
        }
    },
    "Tingting He": {
        "2004": {
            "W04": 1
        }
    },
    "Huijia Wu": {
        "2014": {
            "W14": 1
        }
    },
    "Po Hu": {
        "2004": {
            "W04": 1
        }
    },
    "Jacob Eisenstein": {
        "2004": {
            "N04": 1
        },
        "2006": {
            "N06": 1
        },
        "2007": {
            "P07": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "N09": 1
        },
        "2010": {
            "D10": 1,
            "W10": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        },
        "2013": {
            "N13": 1
        },
        "2014": {
            "P14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Marco A CLEMENTE-SALAZAR": {
        "1984": {
            "P84": 1
        }
    },
    "Dan Jurafsky": {
        "2003": {
            "W03": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "P09": 1,
            "N09": 1,
            "W09": 1,
            "D09": 1
        },
        "2010": {
            "P10": 1
        },
        "2012": {
            "W12": 2
        },
        "2013": {
            "P13": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Anders Bj\u00a8orkelund": {
        "2013": {
            "P13": 1
        },
        "2014": {
            "P14": 1,
            "E14": 1
        }
    },
    "Richard R Granger": {
        "1983": {
            "A83": 1
        }
    },
    "Hui-Feng Li": {
        "1998": {
            "P98": 1
        }
    },
    "Francois Andry": {
        "1994": {
            "P94": 1
        }
    },
    "Yves Scherrer": {
        "2007": {
            "P07": 1
        }
    },
    "British Columbia": {
        "2013": {
            "W13": 1
        }
    },
    "Lawrence Saul": {
        "1997": {
            "W97": 1
        }
    },
    "Scott Ledbetter": {
        "2015": {
            "W15": 1
        }
    },
    "An-Chang Hsieh": {
        "2013": {
            "W13": 1
        }
    },
    "Thomas C Bourgeois": {
        "1994": {
            "W94": 1
        }
    },
    "Tal Linzen": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Natalia Samuel R Bowman": {
        "2013": {
            "W13": 1
        }
    },
    "Irina": {
        "2006": {
            "N06": 1
        }
    },
    "Sebastian Riedel": {
        "2010": {
            "N10": 1,
            "D10": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "P12": 1,
            "W12": 1,
            "D12": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "J Philip": {
        "1983": {
            "J83": 1
        }
    },
    "Wong Shuen": {
        "1997": {
            "W97": 1
        }
    },
    "Stefan Ultes": {
        "2013": {
            "N13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Alshawi L Buchsbaum": {
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "Maarit": {
        "2012": {
            "W12": 1
        }
    },
    "Sciences Engineering": {
        "2015": {
            "P15": 1
        }
    },
    "Levy Ruty Rinott Dan Gutfreund Noam": {
        "2014": {
            "W14": 1
        }
    },
    "Julie E Boland": {
        "2001": {
            "P01": 1
        }
    },
    "Xipeng Qiu": {
        "2010": {
            "W10": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "P Sean": {
        "2009": {
            "W09": 1
        }
    },
    "Xinxin Li": {
        "2010": {
            "W10": 1
        },
        "2012": {
            "S12": 1
        }
    },
    "Samuel Curtis": {
        "2014": {
            "W14": 1
        }
    },
    "Alessandra Zarcone": {
        "2012": {
            "W12": 1
        }
    },
    "Yu Zhang": {
        "2013": {
            "D13": 1
        }
    },
    "Haitao Mi": {
        "2009": {
            "D09": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "D11": 1
        }
    },
    "G I McCalla": {
        "1984": {
            "P84": 1
        }
    },
    "Ferhan ture": {
        "2010": {
            "P10": 1
        }
    },
    "Benjamin Van": {
        "2008": {
            "P08": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Andreas Satta": {
        "2010": {
            "W10": 1
        }
    },
    "Genevieve B Melton SungRim Moon": {
        "2010": {
            "W10": 1
        }
    },
    "Yasuo": {
        "2012": {
            "W12": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Kostas Tsioutsiouliklis": {
        "2011": {
            "D11": 1
        }
    },
    "Shu-Chuan": {
        "2001": {
            "W01": 1
        }
    },
    "Kensuke Mitsuzawa": {
        "2013": {
            "W13": 1
        }
    },
    "Yue Yanan": {
        "2015": {
            "D15": 1
        }
    },
    "P Tsiakoulis": {
        "2013": {
            "W13": 1
        }
    },
    "John S White": {
        "2000": {
            "W00": 1
        }
    },
    "Carlota Smith": {
        "2007": {
            "P07": 1
        }
    },
    "Steven Bethard": {
        "2008": {
            "P08": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Kavita Thomas": {
        "1999": {
            "P99": 1
        }
    },
    "Krzysztof Koperski": {
        "2006": {
            "W06": 1
        }
    },
    "Haejoong": {
        "2001": {
            "W01": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Andreas Stolcke": {
        "1995": {
            "J95": 1
        },
        "2005": {
            "P05": 1
        },
        "2003": {
            "N03": 1
        }
    },
    "James Blythe": {
        "2011": {
            "W11": 1
        }
    },
    "Manfred": {
        "2000": {
            "W00": 1
        },
        "2004": {
            "W04": 1
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 3
        }
    },
    "Maria Lapata": {
        "1999": {
            "P99": 1
        }
    },
    "Sida Wang Green": {
        "2013": {
            "P13": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Richard H Wojcik": {
        "1993": {
            "P93": 1
        }
    },
    "Jordan Leonardo": {
        "2014": {
            "D14": 1
        }
    },
    "Zhiqiang": {
        "2005": {
            "W05": 1
        }
    },
    "Takehiro Nakayama": {
        "1994": {
            "A94": 1
        }
    },
    "Bo-Yeong Kang": {
        "2003": {
            "P03": 1
        }
    },
    "Geert-Jan Kruijff": {
        "2003": {
            "E03": 1
        }
    },
    "Nigel Collier": {
        "2000": {
            "W00": 1
        },
        "2002": {
            "W02": 1
        }
    },
    "Nathan Green Paul Breimyer Vinay Kumar Nagiza F Samatova": {
        "2010": {
            "W10": 1
        }
    },
    "Kristina Toutanova": {
        "2002": {
            "P02": 1
        },
        "2003": {
            "N03": 1
        },
        "2005": {
            "P05": 1
        },
        "2006": {
            "N06": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "P09": 1
        },
        "2011": {
            "W11": 1
        },
        "2013": {
            "N13": 1,
            "D13": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Yan Min-Yen Zhoujun": {
        "2014": {
            "P14": 1
        }
    },
    "Joachim Wermter": {
        "2006": {
            "P06": 1
        }
    },
    "Paola Velardi Maria Teresa Pazienza": {
        "1989": {
            "P89": 1
        }
    },
    "L Steve": {
        "2014": {
            "S14": 1
        }
    },
    "Johanna Geiss": {
        "2009": {
            "P09": 1
        }
    },
    "Tong Xiao": {
        "2010": {
            "P10": 1
        }
    },
    "Arul Menezes": {
        "2002": {
            "W02": 1
        },
        "2005": {
            "P05": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Jing McKeown": {
        "1998": {
            "P98": 1
        }
    },
    "Hae-Chang": {
        "2003": {
            "W03": 1
        },
        "2004": {
            "W04": 1
        }
    },
    "Barzilay R McKeown": {
        "2001": {
            "P01": 1
        }
    },
    "Thuy Dung Nguyen": {
        "2010": {
            "S10": 1
        }
    },
    "Enrique Henestroza Anguiano": {
        "2012": {
            "W12": 1
        }
    },
    "Shubham Mukherjee": {
        "2015": {
            "K15": 1
        }
    },
    "Javier": {
        "2009": {
            "W09": 1
        }
    },
    "Elhadad": {
        "2007": {
            "W07": 1
        }
    },
    "Aggeliki Fotopoulou": {
        "2014": {
            "W14": 1
        }
    },
    "Michael S Kearns": {
        "1999": {
            "P99": 1
        }
    },
    "Emanuele Pianta": {
        "2010": {
            "W10": 1
        },
        "2003": {
            "E03": 1
        },
        "2012": {
            "W12": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Christian": {
        "2015": {
            "W15": 1
        },
        "2012": {
            "W12": 4
        },
        "2014": {
            "W14": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Ben Carterette Hongfang Liu": {
        "2013": {
            "S13": 1
        }
    },
    "Lazaridou Tien Nguyen": {
        "2015": {
            "W15": 1
        }
    },
    "Barbara Plank": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "W09": 1
        },
        "2011": {
            "P11": 1
        },
        "2014": {
            "D14": 1,
            "W14": 2,
            "P14": 2
        },
        "2015": {
            "W15": 1
        }
    },
    "Byron Stent": {
        "1998": {
            "P98": 1
        }
    },
    "Idan Szpektor": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "P09": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Vera Sheinman": {
        "2005": {
            "W05": 1
        }
    },
    "Sujan Kumar Saha": {
        "2015": {
            "W15": 1
        }
    },
    "Peter A Rankel": {
        "2013": {
            "P13": 1
        }
    },
    "Qu": {
        "2012": {
            "P12": 1,
            "E12": 1
        }
    },
    "John Prager": {
        "2000": {
            "A00": 1
        }
    },
    "Svetlana Stoyanchev": {
        "2008": {
            "W08": 1
        }
    },
    "Rutu Mulkar-Mehta": {
        "2011": {
            "W11": 1
        }
    },
    "Mihaela Sudip Kumar": {
        "2015": {
            "W15": 1
        }
    },
    "David Lu Dipanjan": {
        "2014": {
            "P14": 1
        }
    },
    "Tim READ": {
        "1998": {
            "P98": 1
        }
    },
    "Olivier": {
        "2013": {
            "P13": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "L David": {
        "2012": {
            "P12": 1
        }
    },
    "G\u00b4abor Berend": {
        "2013": {
            "S13": 1
        }
    },
    "Thiago A S Pardo": {
        "2009": {
            "W09": 1
        }
    },
    "Yusuke Rune": {
        "2008": {
            "W08": 1
        }
    },
    "Valia Kordoni": {
        "2003": {
            "E03": 1
        }
    },
    "James Reza Jonathan Goran": {
        "2009": {
            "W09": 1
        }
    },
    "Adrian Novischi": {
        "2007": {
            "S07": 1
        }
    },
    "Gr\u00b4egoire D\u00b4etrez": {
        "2012": {
            "E12": 1
        }
    },
    "Hideki Isozaki Masaaki": {
        "2010": {
            "W10": 1
        }
    },
    "Mihaela": {
        "2015": {
            "W15": 1
        }
    },
    "Vajjala": {
        "2014": {
            "W14": 1
        }
    },
    "Jungyun": {
        "1999": {
            "W99": 1
        }
    },
    "Lushan Han": {
        "2015": {
            "S15": 1
        }
    },
    "Jurgens": {
        "2009": {
            "W09": 1
        },
        "2014": {
            "Q14": 1,
            "S14": 1
        }
    },
    "Corina Dima": {
        "2015": {
            "W15": 1
        }
    },
    "C Breslin": {
        "2013": {
            "W13": 1
        }
    },
    "Allen Gorin": {
        "2000": {
            "A00": 1
        }
    },
    "Agi\u00b4c": {
        "2014": {
            "S14": 1
        }
    },
    "Anne": {
        "2014": {
            "W14": 1
        }
    },
    "Araki": {
        "2015": {
            "D15": 1
        }
    },
    "Anna": {
        "2003": {
            "W03": 1
        },
        "2006": {
            "W06": 1
        },
        "2009": {
            "W09": 2
        },
        "2011": {
            "D11": 1
        },
        "2012": {
            "N12": 1
        },
        "2013": {
            "W13": 1
        },
        "2015": {
            "D15": 1,
            "S15": 1
        }
    },
    "Joseph Le": {
        "2009": {
            "W09": 1
        }
    },
    "Yong-Shen Lo": {
        "2007": {
            "P07": 1
        }
    },
    "Fabio Celli Luca Rossi": {
        "2012": {
            "W12": 1
        }
    },
    "Yuxuan Hu": {
        "2007": {
            "S07": 1
        }
    },
    "David Tsung-Hsien": {
        "2015": {
            "P15": 1
        }
    },
    "Nichola Heather J\u00a8urgen": {
        "2014": {
            "W14": 1
        }
    },
    "Henderson Lane": {
        "1998": {
            "P98": 1
        }
    },
    "Volkan": {
        "2013": {
            "P13": 1
        }
    },
    "Muhie": {
        "2014": {
            "P14": 1
        }
    },
    "Brett Kessler": {
        "1995": {
            "E95": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Rebecca Passonneau": {
        "2001": {
            "P01": 1
        }
    },
    "Edward Gibson": {
        "2004": {
            "W04": 1
        },
        "1990": {
            "P90": 1
        }
    },
    "Michael Strube": {
        "1996": {
            "P96": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "1998": {
            "P98": 1
        },
        "1999": {
            "E99": 1,
            "J99": 1
        },
        "2006": {
            "E06": 1
        },
        "2007": {
            "P07": 2
        },
        "2012": {
            "D12": 1
        }
    },
    "Claus Zinn": {
        "2003": {
            "E03": 1
        }
    },
    "Ke Tran Arianna Bisazza Christof": {
        "2014": {
            "D14": 1
        }
    },
    "Chad Mills": {
        "2015": {
            "S15": 1
        }
    },
    "Robert C MOORS": {
        "2004": {
            "P04": 1
        }
    },
    "Asad Habib": {
        "2011": {
            "W11": 1
        }
    },
    "Owen Rainbow": {
        "1997": {
            "A97": 1
        }
    },
    "Jostein Lien": {
        "2015": {
            "W15": 1
        }
    },
    "Maarten H Andrew": {
        "2015": {
            "W15": 1
        }
    },
    "Joe A Guthrie": {
        "1991": {
            "P91": 1
        }
    },
    "F James": {
        "2011": {
            "P11": 1
        }
    },
    "Yuexian Peng Wenjie Dawei": {
        "2015": {
            "D15": 1
        }
    },
    "E Stamatatos": {
        "1999": {
            "E99": 1
        }
    },
    "Bharath Dandala": {
        "2012": {
            "S12": 1
        }
    },
    "Colin Grzegorz": {
        "2008": {
            "P08": 1
        }
    },
    "Jackson": {
        "2006": {
            "N06": 1
        }
    },
    "Bangalore J Stent": {
        "2009": {
            "E09": 1
        }
    },
    "Olga Babko-Malaya": {
        "2004": {
            "W04": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Stuart M Shiebert": {
        "1994": {
            "J94": 1
        }
    },
    "Koiti HASIDA": {
        "1998": {
            "P98": 1
        }
    },
    "Shalom Lappin": {
        "1994": {
            "J94": 1
        },
        "1990": {
            "P90": 1,
            "J90": 1
        }
    },
    "Kai-Min Chang": {
        "2012": {
            "N12": 1
        }
    },
    "Partha Talukdar": {
        "2013": {
            "W13": 1
        }
    },
    "Foster": {
        "2007": {
            "W07": 1
        }
    },
    "Marilisa Amoia": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "S12": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Candace A Kamm": {
        "1997": {
            "W97": 1,
            "E97": 1,
            "P97": 1
        }
    },
    "Corlett Penn": {
        "2010": {
            "P10": 1
        }
    },
    "Hsin-Hsi Chen": {
        "1995": {
            "W95": 1
        },
        "1997": {
            "A97": 1
        },
        "1998": {
            "P98": 1
        },
        "1999": {
            "P99": 1
        },
        "2003": {
            "W03": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        },
        "2009": {
            "D09": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Pieter Adriaans": {
        "2008": {
            "P08": 1
        }
    },
    "Koichi HASEBE MIME": {
        "1988": {
            "P88": 1
        }
    },
    "Jan van": {
        "2011": {
            "W11": 1
        }
    },
    "Nancy L Green": {
        "2012": {
            "W12": 1
        },
        "1990": {
            "P90": 1
        }
    },
    "Jimmy Lin": {
        "2010": {
            "N10": 1
        },
        "2006": {
            "P06": 2
        },
        "2007": {
            "P07": 1
        }
    },
    "Robin Haigh": {
        "1988": {
            "P88": 1
        }
    },
    "Antonio Toral": {
        "2010": {
            "W10": 1
        }
    },
    "Janna Khegai": {
        "2006": {
            "P06": 1
        }
    },
    "McEleney": {
        "2003": {
            "W03": 1
        }
    },
    "Micha": {
        "2012": {
            "E12": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Nakatsu White": {
        "2006": {
            "P06": 1
        }
    },
    "Ling Program": {
        "1997": {
            "A97": 1
        }
    },
    "Paolo Giangrandin": {
        "1989": {
            "E89": 1
        }
    },
    "Xiantang": {
        "2007": {
            "W07": 1
        }
    },
    "Edgar": {
        "2015": {
            "S15": 1
        }
    },
    "Randall Hendrick": {
        "1999": {
            "W99": 1
        }
    },
    "Derrick": {
        "2011": {
            "W11": 1
        }
    },
    "Joakim Nivre": {
        "2008": {
            "P08": 1
        },
        "2014": {
            "W14": 1
        },
        "2006": {
            "E06": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "David Temperley": {
        "2007": {
            "P07": 1
        }
    },
    "Al-Onaizan Knight": {
        "2002": {
            "P02": 1
        }
    },
    "Yimin Zhang": {
        "2000": {
            "W00": 1
        }
    },
    "Dan CRISTEA": {
        "2000": {
            "P00": 1
        }
    },
    "walkerOmerl": {
        "1994": {
            "W94": 1
        }
    },
    "North Carolina": {
        "2014": {
            "W14": 1
        }
    },
    "Hai-Kiat Goh": {
        "2006": {
            "P06": 1
        }
    },
    "Stefan Kaufmann": {
        "2009": {
            "W09": 1
        }
    },
    "Alexander M M Jason": {
        "2015": {
            "P15": 1
        }
    },
    "Doug": {
        "2010": {
            "N10": 1
        }
    },
    "Jia Sun": {
        "2015": {
            "S15": 1
        }
    },
    "Martin Thomas": {
        "2014": {
            "W14": 1
        }
    },
    "Yifei": {
        "2015": {
            "W15": 1
        }
    },
    "Nancy Green": {
        "1992": {
            "P92": 1
        },
        "1994": {
            "W94": 1,
            "P94": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "Richard Sproat": {
        "1996": {
            "P96": 1
        },
        "2004": {
            "N04": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "P07": 1
        },
        "2009": {
            "P09": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "W12": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Soo Ngee": {
        "2009": {
            "W09": 1
        }
    },
    "Zobia": {
        "2013": {
            "W13": 1
        }
    },
    "Timo Baumann": {
        "2009": {
            "W09": 2
        },
        "2010": {
            "W10": 2
        },
        "2012": {
            "E12": 1
        }
    },
    "U Academy": {
        "2006": {
            "J06": 1
        }
    },
    "M Ahmed": {
        "2012": {
            "P12": 1
        }
    },
    "Reyadh Alluhaibi": {
        "2015": {
            "W15": 1
        }
    },
    "Daniel Dahlmeier": {
        "2014": {
            "S14": 1
        }
    },
    "Nelson Correa": {
        "1987": {
            "P87": 1
        }
    },
    "Jennifer Tamas": {
        "2013": {
            "W13": 1
        }
    },
    "Erhard": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Naman K Gupta": {
        "2009": {
            "P09": 1
        }
    },
    "Konstantopoulos Karkaletsis": {
        "2009": {
            "W09": 1
        }
    },
    "Derek F Wong": {
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "J Zhai": {
        "2010": {
            "D10": 1
        }
    },
    "Joseph Le_Roux": {
        "2010": {
            "W10": 1
        }
    },
    "Marton": {
        "2008": {
            "D08": 1
        }
    },
    "Michelle L Gregory": {
        "2004": {
            "N04": 1
        }
    },
    "Xianchao Wu": {
        "2012": {
            "P12": 1
        }
    },
    "Heriberto": {
        "2010": {
            "W10": 1
        }
    },
    "Caroline Lyon": {
        "1995": {
            "E95": 1
        }
    },
    "Heinz": {
        "2013": {
            "W13": 1
        }
    },
    "Dekai Wu": {
        "1994": {
            "P94": 1
        },
        "1997": {
            "W97": 1
        }
    },
    "Muhammad Abdul-Mageed": {
        "2012": {
            "W12": 1
        }
    },
    "Houfeng Jing": {
        "2011": {
            "W11": 1
        }
    },
    "Keith Hall": {
        "2009": {
            "D09": 1,
            "E09": 1
        },
        "2010": {
            "N10": 1
        },
        "2011": {
            "D11": 1
        },
        "2004": {
            "P04": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Ascander Dost": {
        "2009": {
            "W09": 1
        },
        "2004": {
            "N04": 1
        }
    },
    "Jin Guo": {
        "1997": {
            "J97": 1
        }
    },
    "Graham Russell Afzal Ballim Dominique Estival Susan Warwick-Armstrong": {
        "1991": {
            "E91": 1
        }
    },
    "Raymond Mooney": {
        "2011": {
            "W11": 1
        }
    },
    "Scharolta Katharina": {
        "2015": {
            "W15": 1
        }
    },
    "Jinying Chen": {
        "2005": {
            "W05": 1
        }
    },
    "J Susan L Tiziana": {
        "2011": {
            "W11": 1
        }
    },
    "Eyal Beigman": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 1
        }
    },
    "Glenn Carroll": {
        "1998": {
            "W98": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "Burkett": {
        "2012": {
            "N12": 1,
            "D12": 1
        }
    },
    "Yu Hao": {
        "2010": {
            "D10": 1
        }
    },
    "Daniel S Paiva": {
        "2005": {
            "P05": 1
        }
    },
    "Gerhard Weikum": {
        "2012": {
            "P12": 1
        }
    },
    "Jan-Torsten": {
        "2002": {
            "W02": 1
        }
    },
    "Jihyun Park": {
        "2006": {
            "P06": 2
        }
    },
    "Sasaki McNaught": {
        "2009": {
            "E09": 1
        }
    },
    "Howard Johnson": {
        "2003": {
            "W03": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Armin Fiedler": {
        "2003": {
            "W03": 1
        },
        "1996": {
            "W96": 1
        }
    },
    "Yuancheng Tu": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2004": {
            "W04": 1
        }
    },
    "Barzilay": {
        "2009": {
            "P09": 1
        },
        "2003": {
            "N03": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "Cigdem Keyder Turhan": {
        "1997": {
            "A97": 1
        }
    },
    "Franz Och": {
        "2010": {
            "D10": 1
        }
    },
    "Politecnico di_via Ponzio": {
        "2011": {
            "W11": 1
        }
    },
    "Y": {
        "2008": {
            "D08": 1
        }
    },
    "Paul Thompson": {
        "2003": {
            "W03": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Kun Yu": {
        "2009": {
            "N09": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Nathan Ong": {
        "2014": {
            "W14": 1
        }
    },
    "Rohini Srihari": {
        "2000": {
            "A00": 2
        },
        "2003": {
            "W03": 1
        }
    },
    "Qi Zhao": {
        "2010": {
            "W10": 1
        }
    },
    "Bing Liu Guo": {
        "2013": {
            "D13": 1
        }
    },
    "Takamura Okumura": {
        "2009": {
            "E09": 1
        }
    },
    "Jason Yuening Jordan Leah": {
        "2014": {
            "W14": 1
        }
    },
    "Jana Kazimierza": {
        "2014": {
            "E14": 1
        }
    },
    "Nianwen Xue": {
        "2002": {
            "W02": 1
        },
        "2004": {
            "W04": 1
        },
        "2005": {
            "W05": 1
        },
        "2006": {
            "P06": 1
        },
        "2009": {
            "W09": 1
        },
        "2011": {
            "W11": 2
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "N13": 1,
            "W13": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Vasant Honavar": {
        "2012": {
            "D12": 1
        }
    },
    "Michael Flor": {
        "2013": {
            "W13": 3
        }
    },
    "Emilio": {
        "2013": {
            "W13": 1
        }
    },
    "S Zettlemoyer Collins": {
        "2009": {
            "P09": 1
        }
    },
    "L Scott": {
        "2011": {
            "P11": 1
        }
    },
    "Serge Sharoff": {
        "2010": {
            "P10": 1
        },
        "2011": {
            "W11": 1
        },
        "2014": {
            "W14": 2
        }
    },
    "Paloma": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Petr": {
        "2009": {
            "W09": 1
        }
    },
    "S\u00e3o Leopoldo": {
        "2004": {
            "W04": 1
        }
    },
    "Alessandro Lenci": {
        "2009": {
            "W09": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "S12": 1
        },
        "2005": {
            "W05": 1
        },
        "1999": {
            "W99": 1
        }
    },
    "Philippe": {
        "2010": {
            "W10": 1
        },
        "2013": {
            "P13": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Vivian": {
        "2012": {
            "W12": 1
        }
    },
    "Wei Wei": {
        "2010": {
            "P10": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Gao": {
        "2008": {
            "W08": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "INUI Kentaro": {
        "1996": {
            "W96": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "Yuening Hu": {
        "2011": {
            "P11": 1
        }
    },
    "Mstislav Maslennikov": {
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Claudia": {
        "1999": {
            "W99": 1
        }
    },
    "Smruthi Mukund": {
        "2009": {
            "W09": 1
        }
    },
    "Tara N Sainath": {
        "2012": {
            "W12": 1
        }
    },
    "M T Johnson": {
        "2000": {
            "A00": 1
        }
    },
    "W Lewis Johnson": {
        "2010": {
            "W10": 1
        }
    },
    "Ding Liu": {
        "2013": {
            "P13": 1
        }
    },
    "Lingpeng": {
        "2015": {
            "W15": 1
        }
    },
    "Smaranda": {
        "2008": {
            "W08": 1
        }
    },
    "Sakriani Sakti": {
        "2014": {
            "W14": 1,
            "P14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Jonathan Bloom": {
        "2007": {
            "W07": 1
        }
    },
    "Peter Clark": {
        "2012": {
            "W12": 1
        },
        "2013": {
            "P13": 1,
            "W13": 1
        }
    },
    "S Thomas": {
        "1998": {
            "W98": 1
        },
        "1999": {
            "W99": 1
        }
    },
    "Peter A Chew": {
        "2009": {
            "W09": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Joshua Goodman": {
        "2002": {
            "P02": 1
        },
        "1999": {
            "J99": 1
        }
    },
    "Murat Temizsoy Ilyas Cicekli": {
        "1998": {
            "W98": 1
        }
    },
    "Ting": {
        "2010": {
            "N10": 1
        },
        "2012": {
            "D12": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Ines": {
        "2006": {
            "W06": 1
        }
    },
    "Oliver Schneider": {
        "2011": {
            "P11": 1
        }
    },
    "Raquel": {
        "2011": {
            "W11": 1
        },
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 2
        }
    },
    "Horacio": {
        "2007": {
            "W07": 1
        }
    },
    "Lee": {
        "2013": {
            "P13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Lei": {
        "2014": {
            "W14": 1
        },
        "2010": {
            "W10": 1
        },
        "2013": {
            "W13": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Philippe Langlais": {
        "2006": {
            "W06": 2
        }
    },
    "Leo": {
        "2001": {
            "W01": 1
        }
    },
    "Suzuki Kristina": {
        "2006": {
            "P06": 1
        }
    },
    "Aron Culotta": {
        "2004": {
            "P04": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Imed Zitouni": {
        "2008": {
            "D08": 1
        },
        "2010": {
            "N10": 1,
            "D10": 1
        },
        "2005": {
            "W05": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "John K Pate": {
        "2011": {
            "W11": 1
        }
    },
    "Ryan Foster": {
        "2013": {
            "P13": 1
        }
    },
    "Arguello Ros\u00e9": {
        "2006": {
            "N06": 1
        }
    },
    "Bj\u00a8orne": {
        "2011": {
            "W11": 1
        }
    },
    "Jin Wang'": {
        "1997": {
            "A97": 1
        }
    },
    "M Rosner": {
        "1998": {
            "W98": 1
        }
    },
    "Bo Lin": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "W10": 1
        }
    },
    "Ronald M Kaplan": {
        "1993": {
            "E93": 1
        },
        "1994": {
            "J94": 1
        }
    },
    "Han Lau": {
        "2013": {
            "S13": 2
        }
    },
    "Ying Liu": {
        "2011": {
            "W11": 2
        }
    },
    "Hae-Chang Rim": {
        "2009": {
            "P09": 1
        }
    },
    "Daniel Marcu": {
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "1999": {
            "P99": 1
        },
        "2000": {
            "W00": 1
        },
        "2001": {
            "P01": 1
        },
        "2002": {
            "P02": 2
        },
        "2003": {
            "P03": 1
        },
        "2004": {
            "W04": 1
        },
        "2005": {
            "P05": 1
        },
        "2006": {
            "P06": 4
        },
        "2015": {
            "D15": 1
        }
    },
    "Vamshi Ambati": {
        "2010": {
            "P10": 1,
            "W10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Mohammad Adam St Arnaud": {
        "2015": {
            "W15": 1
        }
    },
    "Toutanova Danqi": {
        "2015": {
            "W15": 1
        }
    },
    "Douglas E Appelt": {
        "1992": {
            "A92": 1
        },
        "1985": {
            "P85": 1
        },
        "1982": {
            "P82": 1
        },
        "1983": {
            "P83": 1
        }
    },
    "Narendra": {
        "2013": {
            "W13": 1
        }
    },
    "Abhijit Bhole Goutham Tholpadi Raghavendra Udupa": {
        "2011": {
            "W11": 1
        }
    },
    "Chinatsu Aonet": {
        "1998": {
            "P98": 1
        }
    },
    "Pallavi Choudhury": {
        "2011": {
            "W11": 1
        }
    },
    "Asli Celikyilmaz": {
        "2010": {
            "P10": 1,
            "W10": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "P12": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Eduard H Hovy": {
        "1988": {
            "P88": 1
        }
    },
    "Chen Zhang Joyce Y": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "D10": 1
        }
    },
    "Martijn Goudbeek": {
        "2010": {
            "P10": 1
        }
    },
    "Grover Matthews": {
        "2006": {
            "W06": 1
        }
    },
    "Yifei Zhang": {
        "2015": {
            "W15": 1
        }
    },
    "Hannah Kermes": {
        "2003": {
            "E03": 1
        }
    },
    "Sarah Borys": {
        "2003": {
            "N03": 1
        }
    },
    "Vinodkumar Prabhakaran": {
        "2012": {
            "W12": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Camiel VAN_BREUGEL": {
        "2007": {
            "W07": 1
        }
    },
    "Yu-Ming Keh-Jiann Jason S": {
        "2012": {
            "P12": 1
        }
    },
    "Stuart C Shapiro Jeannette G Neal": {
        "1982": {
            "P82": 1
        }
    },
    "Yitao Zhang Patrick": {
        "2007": {
            "W07": 1
        }
    },
    "Sebastian de_la Chica": {
        "2008": {
            "P08": 1
        }
    },
    "Eleni": {
        "2008": {
            "W08": 1
        }
    },
    "Burcu Karagol-Ayan": {
        "2006": {
            "E06": 1
        }
    },
    "Elena": {
        "2008": {
            "P08": 1
        },
        "2004": {
            "W04": 1
        }
    },
    "Youngjoong Ko": {
        "2009": {
            "P09": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Beatrice T Oshika Filip Machi": {
        "1988": {
            "A88": 1
        }
    },
    "Erik-Jan van_der_Linden": {
        "1992": {
            "J92": 1
        }
    },
    "Marc Dymetman": {
        "2000": {
            "W00": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Michael Lamar": {
        "2010": {
            "P10": 1
        }
    },
    "Degen Huang": {
        "2006": {
            "W06": 1
        }
    },
    "Babko-Malaya": {
        "2004": {
            "W04": 1
        }
    },
    "Douwe Gelling": {
        "2014": {
            "P14": 1
        }
    },
    "Kelly Peterson": {
        "2011": {
            "W11": 1
        }
    },
    "Alexander Fraser": {
        "2004": {
            "N04": 1
        },
        "2006": {
            "P06": 1
        },
        "2009": {
            "E09": 1
        },
        "2010": {
            "P10": 1,
            "N10": 1
        },
        "2011": {
            "P11": 2
        },
        "2012": {
            "P12": 1,
            "E12": 1
        }
    },
    "Roni": {
        "2004": {
            "W04": 1,
            "N04": 1
        }
    },
    "Yaser Al-Onaizan": {
        "2002": {
            "W02": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "J Eric Fosler": {
        "1996": {
            "P96": 1
        }
    },
    "M Kruijff-Korbayov\u00b4a": {
        "2004": {
            "W04": 1
        }
    },
    "Abdulrahman ALMUHAREB": {
        "2004": {
            "W04": 1
        }
    },
    "Hector": {
        "2014": {
            "W14": 1
        }
    },
    "H Alice": {
        "2000": {
            "W00": 1
        }
    },
    "Barbosa Paolo Merialdo": {
        "2012": {
            "W12": 1
        }
    },
    "Ant\u00b4onio": {
        "2015": {
            "W15": 2
        }
    },
    "Matthias Kraus": {
        "2015": {
            "W15": 1
        }
    },
    "W Carter' Michael": {
        "1984": {
            "P84": 1
        }
    },
    "Andre Kempe": {
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "Ido Dagan": {
        "1993": {
            "W93": 1
        },
        "1994": {
            "J94": 1,
            "P94": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "2000": {
            "P00": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "P09": 2,
            "E09": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "P11": 2,
            "W11": 1
        },
        "2012": {
            "S12": 1,
            "P12": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "De_Silva": {
        "2014": {
            "W14": 1
        }
    },
    "Ji\u02c7r\u00b4\u0131 Havelka": {
        "2007": {
            "P07": 1
        }
    },
    "Amir Globerson": {
        "2013": {
            "P13": 1
        }
    },
    "Zden\u02c7ek": {
        "2013": {
            "P13": 1,
            "W13": 1
        }
    },
    "J Mooney Carberry F": {
        "1990": {
            "W90": 1
        }
    },
    "Jean-David Ruvini": {
        "2012": {
            "P12": 1
        }
    },
    "Ryo Aihara": {
        "2014": {
            "W14": 1
        }
    },
    "Mona T Diab Pravin Bhutada": {
        "2009": {
            "W09": 1
        }
    },
    "Gert Smollca": {
        "1993": {
            "P93": 1
        }
    },
    "Tony Veale": {
        "2008": {
            "P08": 1
        },
        "2003": {
            "W03": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Steve Young": {
        "2003": {
            "W03": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Ioannis Korkontzelos": {
        "2009": {
            "P09": 1,
            "W09": 1
        },
        "2010": {
            "N10": 1,
            "S10": 1
        }
    },
    "Dominic R Jones": {
        "2003": {
            "W03": 1
        }
    },
    "Texas at": {
        "2012": {
            "P12": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Educational Testing Service": {
        "2013": {
            "W13": 1
        }
    },
    "Halil Kilicoglu": {
        "2014": {
            "W14": 1
        }
    },
    "Elgersma de": {
        "2006": {
            "W06": 1
        }
    },
    "M Henderson": {
        "2013": {
            "W13": 1
        }
    },
    "Eyassu Bj\u00a8orn": {
        "2005": {
            "W05": 1
        }
    },
    "Charniak Goldman": {
        "1988": {
            "P88": 1
        }
    },
    "Thomas M\u00a8uller": {
        "2011": {
            "P11": 1
        }
    },
    "Manfred Wettler": {
        "1993": {
            "W93": 1
        }
    },
    "Mans Hulden": {
        "2009": {
            "E09": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 2
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Armando Su\u00b4arez": {
        "2009": {
            "E09": 1
        },
        "2010": {
            "S10": 1
        }
    },
    "Doug Beeferman": {
        "1996": {
            "P96": 1
        },
        "1997": {
            "W97": 1
        }
    },
    "K Bretonnel": {
        "2015": {
            "W15": 1
        }
    },
    "Sapna Negi": {
        "2015": {
            "D15": 1,
            "W15": 1
        }
    },
    "Don Blaheta": {
        "1999": {
            "P99": 1
        }
    },
    "Tiejun Zhao": {
        "2009": {
            "P09": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Burr": {
        "2004": {
            "W04": 1
        }
    },
    "Laura Hasler": {
        "2003": {
            "E03": 1
        }
    },
    "Stefan Bott": {
        "2009": {
            "W09": 1
        },
        "2012": {
            "W12": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Oren": {
        "2010": {
            "W10": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Zhu": {
        "2015": {
            "P15": 1
        }
    },
    "Kate Forbes": {
        "2003": {
            "W03": 1
        }
    },
    "Slaski Aceda\u00b4nski": {
        "2012": {
            "W12": 1
        }
    },
    "Graham Wilcock": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Christopher Pennington": {
        "2007": {
            "N07": 1
        }
    },
    "Parker": {
        "2008": {
            "W08": 1
        }
    },
    "Henri Leisma Monika Machunik Tuomo Kakkonen Jean-Luc Lebrun": {
        "2012": {
            "E12": 1
        }
    },
    "Dongdong Mu Ming Hae-Chang": {
        "2012": {
            "P12": 1
        }
    },
    "Anying Chen": {
        "2004": {
            "P04": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "George": {
        "2005": {
            "W05": 1
        }
    },
    "Britta Wrede": {
        "2006": {
            "W06": 1,
            "P06": 1
        }
    },
    "Mark Sammons Dan": {
        "2012": {
            "W12": 2
        },
        "2013": {
            "W13": 1
        }
    },
    "Fei Xia": {
        "2000": {
            "W00": 1
        },
        "2009": {
            "W09": 1,
            "E09": 1
        },
        "2010": {
            "W10": 1
        },
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Keli Zhong": {
        "2012": {
            "W12": 1
        }
    },
    "Graeme Hirstt": {
        "1993": {
            "J93": 1
        },
        "1995": {
            "J95": 2
        }
    },
    "Josef R Novak": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Patrick Haffner": {
        "2007": {
            "P07": 1
        }
    },
    "Sharon Goldwater": {
        "2007": {
            "P07": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "N09": 1
        },
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2013": {
            "Q13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Renaud": {
        "2001": {
            "N01": 1
        }
    },
    "Mona T Diab Madhav Krishna": {
        "2009": {
            "W09": 1
        }
    },
    "Saif Mohammad": {
        "2011": {
            "W11": 1
        },
        "2006": {
            "E06": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Imed": {
        "2008": {
            "D08": 1
        },
        "2010": {
            "D10": 1
        }
    },
    "Massimo Nicosia": {
        "2015": {
            "P15": 1
        }
    },
    "Haizhou Li": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "P09": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Voula": {
        "2011": {
            "W11": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Bar-Ilan": {
        "2015": {
            "P15": 1
        }
    },
    "Satinder Singh": {
        "2000": {
            "W00": 1
        }
    },
    "Graeme Hirst'": {
        "1998": {
            "W98": 1
        }
    },
    "Radu Florian": {
        "1998": {
            "P98": 1
        },
        "1999": {
            "P99": 1
        },
        "2000": {
            "W00": 1
        },
        "2003": {
            "W03": 1
        },
        "2009": {
            "N09": 1
        },
        "2010": {
            "D10": 1
        }
    },
    "M Francisco": {
        "2014": {
            "S14": 1
        }
    },
    "Sridhar Shrikanth Narayanan": {
        "2008": {
            "P08": 1
        }
    },
    "Hang Ren": {
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "A Tommi": {
        "2012": {
            "W12": 1
        }
    },
    "Cynthia": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "W09": 1
        }
    },
    "Hassan Sajjad": {
        "2010": {
            "P10": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "P13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Percy": {
        "2010": {
            "D10": 1
        },
        "2011": {
            "P11": 1
        },
        "2004": {
            "W04": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Jonathan Graehlt": {
        "1998": {
            "J98": 1
        }
    },
    "Hassan Nadir": {
        "2015": {
            "W15": 1
        }
    },
    "Gimpel A Smith": {
        "2009": {
            "E09": 1
        }
    },
    "John Blitzer": {
        "2008": {
            "P08": 1
        },
        "2010": {
            "N10": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Eric Kow": {
        "2005": {
            "W05": 1
        },
        "2007": {
            "W07": 1,
            "P07": 1
        }
    },
    "Andrew Hickl": {
        "2005": {
            "P05": 1
        },
        "2006": {
            "W06": 1,
            "P06": 2
        },
        "2007": {
            "W07": 1
        }
    },
    "ChengXiang": {
        "2011": {
            "P11": 1
        },
        "2006": {
            "W06": 1,
            "N06": 1
        }
    },
    "David A Evans": {
        "1993": {
            "W93": 1
        },
        "1996": {
            "P96": 1
        }
    },
    "Aitao": {
        "2003": {
            "W03": 1
        }
    },
    "Niket Tandon": {
        "2015": {
            "P15": 1
        }
    },
    "Makoto Iwayama Yoshiki Niwa": {
        "2015": {
            "W15": 1
        }
    },
    "Ravi Sinha": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "S10": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Constantinos Boulis": {
        "2005": {
            "P05": 1
        }
    },
    "Ivana Kruijff-Korbayov\u00b4a": {
        "2005": {
            "W05": 1
        }
    },
    "Rebecca Hwa": {
        "2001": {
            "W01": 1
        },
        "2004": {
            "P04": 1
        },
        "2005": {
            "P05": 2
        },
        "1998": {
            "P98": 1
        },
        "2007": {
            "P07": 2
        }
    },
    "Nam Timothy": {
        "2006": {
            "P06": 1
        }
    },
    "Anette Frank Paolo": {
        "2010": {
            "W10": 2
        }
    },
    "Sulubacak Eryi\u02d8git": {
        "2013": {
            "W13": 1
        }
    },
    "Dennis N Mehay": {
        "2010": {
            "D10": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Kalina Bontcheva": {
        "2014": {
            "E14": 2
        }
    },
    "Irene Langkilde-Geary": {
        "2009": {
            "W09": 1
        }
    },
    "Shalom": {
        "2013": {
            "W13": 1
        }
    },
    "Str\u00a8otgen": {
        "2015": {
            "D15": 1
        }
    },
    "Jim Barnett": {
        "1988": {
            "A88": 1
        }
    },
    "Dana Movshovitz-Attias": {
        "2013": {
            "P13": 1
        }
    },
    "Jens": {
        "2012": {
            "W12": 1
        }
    },
    "Catherine Blake": {
        "2012": {
            "S12": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Andrew McKinlay": {
        "2013": {
            "W13": 1
        }
    },
    "Roderick Kay": {
        "1996": {
            "P96": 1
        }
    },
    "Rahmatullah": {
        "2007": {
            "W07": 1
        }
    },
    "Xuanjing Shanghai Key Laboratory of Intelligent Information Processing": {
        "2015": {
            "D15": 2,
            "P15": 1
        }
    },
    "Daisy Stanton": {
        "2012": {
            "D12": 1
        }
    },
    "Roger Levy": {
        "2011": {
            "W11": 1
        },
        "2004": {
            "P04": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Arjun Mukherjee": {
        "2013": {
            "D13": 1
        }
    },
    "Cleo Jullien": {
        "1987": {
            "E87": 1
        }
    },
    "Jun Zhu": {
        "2013": {
            "P13": 1
        }
    },
    "Teresa Sikorski": {
        "1996": {
            "P96": 1
        }
    },
    "Elias Ponvert": {
        "2007": {
            "P07": 1
        }
    },
    "Walter": {
        "2006": {
            "W06": 1
        }
    },
    "Stephen A Kunath Steven H Weinberger": {
        "2010": {
            "W10": 1
        }
    },
    "Christina Sauper": {
        "2009": {
            "P09": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Kallirroi Anton David": {
        "2012": {
            "W12": 1
        }
    },
    "Judith Engelkamp": {
        "1992": {
            "P92": 1
        }
    },
    "Roser Morante": {
        "2008": {
            "W08": 1
        },
        "2015": {
            "S15": 1
        },
        "2012": {
            "S12": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Mohamed Al-Badrashiny": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Alessandro Lombardo": {
        "1993": {
            "P93": 1
        }
    },
    "Hirofumi": {
        "2003": {
            "N03": 1
        }
    },
    "Giuseppe Di_Fabbrizio": {
        "2004": {
            "W04": 1
        },
        "2014": {
            "W14": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Koehn Knight": {
        "2002": {
            "W02": 1
        }
    },
    "Salvatore Romeo": {
        "2014": {
            "D14": 1
        }
    },
    "Eisner Goldlust": {
        "2004": {
            "P04": 1
        }
    },
    "Kunal Sachdeva": {
        "2015": {
            "W15": 1
        }
    },
    "Amig\u00b4o Gonzalo Gim\u00b4enez": {
        "2011": {
            "D11": 1
        },
        "2012": {
            "S12": 1
        }
    },
    "from Small Data Sets": {
        "2011": {
            "J11": 1
        }
    },
    "R Jonathan": {
        "2015": {
            "W15": 2
        }
    },
    "Angelilii Lazaridou": {
        "2015": {
            "P15": 1
        }
    },
    "Martin": {
        "1991": {
            "W91": 1
        },
        "1998": {
            "W98": 1
        },
        "2001": {
            "N01": 1
        },
        "2003": {
            "W03": 1
        },
        "2005": {
            "W05": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "W07": 2
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Rivka": {
        "2013": {
            "N13": 1
        }
    },
    "Jonathan H Chris": {
        "2014": {
            "Q14": 1
        }
    },
    "Xiuming Huang": {
        "1983": {
            "E83": 1
        }
    },
    "Shun-Der_Cheng": {
        "1992": {
            "A92": 1
        }
    },
    "Bell Manrique Losada Carlos M Zapata Jaramillo Diego A Burgos": {
        "2013": {
            "W13": 1
        }
    },
    "Anagha K Kulkarni": {
        "2005": {
            "P05": 1
        }
    },
    "Shahram Khadivi": {
        "2010": {
            "W10": 1
        },
        "2006": {
            "W06": 1,
            "P06": 1
        }
    },
    "Widdows": {
        "2003": {
            "P03": 1
        }
    },
    "Pierre Lison": {
        "2010": {
            "P10": 1
        }
    },
    "Robert John": {
        "2000": {
            "W00": 1
        }
    },
    "Jay": {
        "1995": {
            "W95": 1
        }
    },
    "Kondrak": {
        "2006": {
            "W06": 1
        }
    },
    "Erick Maziero": {
        "2009": {
            "W09": 1
        }
    },
    "Gabriel Parent": {
        "2010": {
            "W10": 1
        }
    },
    "M J Aranzabe": {
        "2004": {
            "W04": 1
        }
    },
    "Bogdan Babych Jonathan Geiger": {
        "2014": {
            "W14": 1
        }
    },
    "Angluin Becerra-Bonache": {
        "2011": {
            "W11": 1
        }
    },
    "Limin Yao": {
        "2010": {
            "D10": 1
        },
        "2012": {
            "P12": 1,
            "W12": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Marcelo Graciela Thomas C": {
        "2010": {
            "W10": 1
        }
    },
    "Yan Zhang": {
        "2013": {
            "W13": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Aravind": {
        "2000": {
            "W00": 1
        }
    },
    "Van_Durme": {
        "2011": {
            "W11": 1
        }
    },
    "Rogers": {
        "1994": {
            "P94": 1
        }
    },
    "Jurgen Van_Gael": {
        "2009": {
            "D09": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "William Yang Wang": {
        "2012": {
            "W12": 1
        },
        "2013": {
            "D13": 2
        },
        "2014": {
            "D14": 1,
            "P14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Jennifer Joachim Rasul Samad Zadeh": {
        "2012": {
            "W12": 1
        }
    },
    "Josep M Crego": {
        "2006": {
            "W06": 2
        },
        "2007": {
            "W07": 1,
            "P07": 1
        }
    },
    "of Linguistics": {
        "2011": {
            "D11": 1,
            "W11": 1
        },
        "2014": {
            "D14": 1,
            "W14": 1
        }
    },
    "Ekaterina Shutova": {
        "2010": {
            "P10": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Khalil": {
        "2010": {
            "W10": 1
        }
    },
    "Eric No\u00b4emie Albert M": {
        "2014": {
            "P14": 1
        }
    },
    "Khalid": {
        "2009": {
            "E09": 1
        }
    },
    "Xiaoyi Ma": {
        "2001": {
            "W01": 1
        }
    },
    "Terrence Szymanski": {
        "2015": {
            "S15": 1
        }
    },
    "Vladislav Kuboii": {
        "1997": {
            "A97": 1
        }
    },
    "Marina Vassiliou": {
        "2012": {
            "W12": 1
        }
    },
    "Emily Prud\u2019hommeaux": {
        "2015": {
            "W15": 2
        }
    },
    "Bill Keller": {
        "1995": {
            "E95": 1,
            "P95": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Daniel Chester": {
        "1980": {
            "J80": 1
        }
    },
    "Teresa Zollo": {
        "1999": {
            "W99": 1
        }
    },
    "Alona Fyshe": {
        "2013": {
            "W13": 1
        }
    },
    "David Vera": {
        "2007": {
            "N07": 1
        }
    },
    "Youngim Jung Hyuk-Chul Kwon": {
        "2011": {
            "W11": 1
        }
    },
    "Caroline": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "N10": 1
        },
        "2003": {
            "W03": 2
        }
    },
    "Alejandro H Andreu S\u00b4anchez": {
        "2011": {
            "W11": 1
        }
    },
    "Dale Schuurmans": {
        "2008": {
            "P08": 1
        },
        "2010": {
            "W10": 1
        },
        "2003": {
            "N03": 1,
            "W03": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Tyler Baldwin Howard Ho Benny Kimelfeld Yunyao": {
        "2013": {
            "P13": 1
        }
    },
    "Lavoie Rambow": {
        "1997": {
            "A97": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Hitoshi Isaharat": {
        "2001": {
            "S01": 1
        }
    },
    "Anoop": {
        "2002": {
            "J02": 1
        }
    },
    "Manzil Chris Dyer": {
        "2015": {
            "P15": 1
        }
    },
    "Gina-Anne": {
        "2012": {
            "W12": 1
        },
        "2003": {
            "W03": 1
        },
        "2004": {
            "W04": 2,
            "N04": 1
        },
        "2006": {
            "W06": 1,
            "N06": 1
        }
    },
    "Han Jun": {
        "2010": {
            "P10": 1
        }
    },
    "Thierry Spriet": {
        "1997": {
            "W97": 1
        }
    },
    "Michael Bukatin": {
        "2003": {
            "W03": 1
        }
    },
    "Fred Popovrich": {
        "1989": {
            "P89": 1
        }
    },
    "Lotfi": {
        "2014": {
            "S14": 1
        }
    },
    "David E Johnson": {
        "1993": {
            "P93": 1
        }
    },
    "Anton Leuski": {
        "2003": {
            "P03": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Yoan Gutirrez": {
        "2013": {
            "W13": 1
        }
    },
    "Alexander Nakhimovsky": {
        "1988": {
            "J88": 1
        }
    },
    "Edward": {
        "2015": {
            "D15": 1
        }
    },
    "of Trento": {
        "2012": {
            "P12": 1
        }
    },
    "Eric": {
        "2008": {
            "W08": 1
        },
        "2010": {
            "N10": 1,
            "W10": 1
        },
        "2012": {
            "P12": 1,
            "W12": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Thomas S Morton": {
        "2000": {
            "P00": 1
        }
    },
    "Asif": {
        "2015": {
            "S15": 1
        }
    },
    "Alexander Joachim": {
        "2004": {
            "P04": 1
        }
    },
    "David Doermann": {
        "2006": {
            "E06": 1,
            "W06": 1
        }
    },
    "Benot Sagot": {
        "2010": {
            "P10": 1
        }
    },
    "Farzad Ehsani": {
        "2006": {
            "W06": 1
        }
    },
    "Tomoko Jin-Dong Jun\u2019ichi": {
        "2009": {
            "W09": 1
        }
    },
    "Julie Medero": {
        "2013": {
            "N13": 1
        }
    },
    "David Clausen": {
        "2009": {
            "W09": 1
        }
    },
    "John Lafferty": {
        "1997": {
            "W97": 1
        }
    },
    "Atsushi Fujii": {
        "2000": {
            "P00": 1
        },
        "1998": {
            "J98": 1
        }
    },
    "Sadegh": {
        "2013": {
            "D13": 1
        }
    },
    "Sankaranarayanan Ananthakrishnan": {
        "2010": {
            "W10": 1
        }
    },
    "Tata Di_Eugenio": {
        "2010": {
            "P10": 1
        }
    },
    "Sarah E Mari": {
        "2004": {
            "N04": 1
        }
    },
    "Bjorn Gamback": {
        "2003": {
            "W03": 1
        },
        "1991": {
            "P91": 1
        }
    },
    "Johan Bos": {
        "1993": {
            "E93": 1
        },
        "2010": {
            "P10": 1
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "S14": 2
        }
    },
    "Remi Zajac": {
        "2001": {
            "W01": 2
        },
        "2003": {
            "W03": 1
        },
        "1998": {
            "W98": 1
        },
        "2009": {
            "W09": 1
        }
    },
    "Johansson": {
        "2010": {
            "W10": 1
        }
    },
    "Bei Yu Daniele Fanelli": {
        "2014": {
            "W14": 1
        }
    },
    "Mary P Harper": {
        "1986": {
            "P86": 1
        },
        "1990": {
            "P90": 1
        }
    },
    "Alina Maria Ciobanu": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Claudia Leacock": {
        "2000": {
            "A00": 1
        },
        "1998": {
            "J98": 1
        }
    },
    "Ana-Maria Barbu": {
        "2003": {
            "W03": 1
        }
    },
    "Joachim": {
        "2009": {
            "W09": 1
        }
    },
    "Andrea Heyl": {
        "2007": {
            "S07": 1
        }
    },
    "Jorge Carrillo de_Albornoz": {
        "2010": {
            "W10": 1
        },
        "2012": {
            "S12": 2
        }
    },
    "Karel B\u00edlek": {
        "2013": {
            "W13": 1
        }
    },
    "Yik-Cheung Tam": {
        "2007": {
            "P07": 1
        }
    },
    "Mihai Rotaru": {
        "2009": {
            "W09": 1
        },
        "2003": {
            "W03": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Koichiro Morihiro": {
        "2006": {
            "P06": 1
        }
    },
    "Cherry": {
        "2012": {
            "N12": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Fernandez Monsalve": {
        "2012": {
            "E12": 1
        }
    },
    "Marta R Jos\u00b4e B A R Alberto Lluis": {
        "2013": {
            "W13": 1
        }
    },
    "Frunza Inkpen": {
        "2006": {
            "P06": 1
        }
    },
    "Martin S Chodorow": {
        "1985": {
            "P85": 2
        }
    },
    "Setsuo Yamada": {
        "2000": {
            "A00": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Peter McClanahan": {
        "2008": {
            "P08": 1
        },
        "2010": {
            "N10": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Xu Zens": {
        "2004": {
            "W04": 1
        }
    },
    "Kazama": {
        "2006": {
            "W06": 1
        }
    },
    "William J Black": {
        "2002": {
            "W02": 1
        },
        "1987": {
            "E87": 1
        }
    },
    "Wolfgang Maier": {
        "2009": {
            "W09": 1
        }
    },
    "Paula": {
        "2012": {
            "W12": 1
        }
    },
    "Elaine Marsh": {
        "1997": {
            "A97": 1
        },
        "1983": {
            "A83": 1
        }
    },
    "Daniel P Mills": {
        "2010": {
            "P10": 1
        }
    },
    "Timothy Allison": {
        "2003": {
            "W03": 1
        }
    },
    "Moitreya Chatterjee": {
        "2014": {
            "W14": 1
        }
    },
    "Tetsuo Kiso Masashi Shimbo Mamoru Komachi Yuji": {
        "2011": {
            "P11": 1
        }
    },
    "Michael Gamon": {
        "2001": {
            "P01": 1
        },
        "2002": {
            "W02": 1
        },
        "2003": {
            "E03": 1
        },
        "2005": {
            "W05": 1
        },
        "2006": {
            "W06": 1,
            "P06": 1
        },
        "2012": {
            "N12": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Nobal B Niraula": {
        "2015": {
            "W15": 1
        }
    },
    "Shih-Hsiang Lin": {
        "2010": {
            "P10": 1
        }
    },
    "Srinivas Bangalore": {
        "1998": {
            "P98": 1
        },
        "2000": {
            "W00": 1
        },
        "2001": {
            "N01": 1
        },
        "2004": {
            "P04": 2
        },
        "2006": {
            "E06": 1,
            "P06": 1
        },
        "2007": {
            "P07": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "E09": 1
        }
    },
    "Shibu Yooseph": {
        "1995": {
            "P95": 1
        }
    },
    "Violeta Seretan": {
        "2003": {
            "E03": 2
        }
    },
    "Nothman Murphy": {
        "2009": {
            "E09": 1
        }
    },
    "Baoxun Wang": {
        "2010": {
            "P10": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Olivier Ferret": {
        "1998": {
            "P98": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "R Tse": {
        "2012": {
            "N12": 1
        }
    },
    "Ursula Wolzi": {
        "1990": {
            "W90": 1
        }
    },
    "Simon Shalom": {
        "2014": {
            "W14": 1
        }
    },
    "Minwoo Jeong": {
        "2009": {
            "N09": 1
        }
    },
    "R Jerry": {
        "2011": {
            "W11": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Wei": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "W10": 1
        },
        "2003": {
            "W03": 1
        },
        "2015": {
            "D15": 1,
            "P15": 2
        }
    },
    "Arjun Karande": {
        "2006": {
            "E06": 1
        }
    },
    "Ellen Riloff": {
        "2000": {
            "W00": 1
        },
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 1
        },
        "1995": {
            "W95": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Asif Ekbal": {
        "2014": {
            "S14": 1
        }
    },
    "Vikas Ganjigunte Ashok Song Feng Yejin": {
        "2013": {
            "D13": 1
        }
    },
    "Monojit Choudhury": {
        "2009": {
            "E09": 1
        },
        "2014": {
            "W14": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Petr Podvesk\u00b4y": {
        "2005": {
            "P05": 1
        }
    },
    "Mi-Young Kim": {
        "2010": {
            "W10": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Michael R Brent": {
        "1993": {
            "J93": 1
        },
        "2001": {
            "P01": 1
        },
        "1990": {
            "P90": 1
        },
        "1991": {
            "E91": 1,
            "P91": 1
        }
    },
    "Chung-Hee Lee": {
        "2005": {
            "P05": 1
        }
    },
    "Barbara J Grosz": {
        "1986": {
            "J86": 1
        }
    },
    "Xiong": {
        "2007": {
            "P07": 1
        }
    },
    "Caroline Barriere": {
        "1998": {
            "P98": 1
        }
    },
    "Kavita E Thomas": {
        "2004": {
            "W04": 1
        }
    },
    "Eva Esteve Ferrer": {
        "2004": {
            "P04": 1
        }
    },
    "Tomoki Toda": {
        "2014": {
            "W14": 1,
            "P14": 1
        }
    },
    "Sun Yufang": {
        "2000": {
            "W00": 1
        }
    },
    "Riedl": {
        "2012": {
            "N12": 1
        }
    },
    "Jerry Ye Michael A Wooldridge": {
        "2007": {
            "W07": 1
        }
    },
    "I Dan": {
        "1997": {
            "W97": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Tirthankar Dasgupta": {
        "2013": {
            "P13": 1
        }
    },
    "Katsuhiko Toyama": {
        "2006": {
            "P06": 1
        }
    },
    "Hiromi Nakaiwa": {
        "1992": {
            "A92": 1
        },
        "2000": {
            "W00": 1
        }
    },
    "Sun-Hee Lee": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 2
        }
    },
    "Chun-Hung": {
        "2006": {
            "W06": 1
        }
    },
    "Marine Carpuat": {
        "2014": {
            "S14": 1
        }
    },
    "Cecily Jill Duffield": {
        "2010": {
            "W10": 1
        }
    },
    "Marta Recasens": {
        "2009": {
            "W09": 1
        },
        "2012": {
            "D12": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Randall Davis": {
        "2007": {
            "P07": 1
        }
    },
    "Mohit Bansal DeNero": {
        "2009": {
            "N09": 1
        }
    },
    "Sebastian Ashwini": {
        "2014": {
            "W14": 1
        }
    },
    "R David": {
        "2007": {
            "N07": 1,
            "W07": 1
        }
    },
    "Andreas Bode": {
        "2006": {
            "P06": 1
        }
    },
    "Silvia Quarteroni Dinarelli": {
        "2009": {
            "W09": 1
        }
    },
    "Xiaodan": {
        "2013": {
            "S13": 1
        }
    },
    "V Alabau Lagarda": {
        "2009": {
            "N09": 1
        }
    },
    "Vladimir Lifschitz": {
        "2013": {
            "W13": 1
        }
    },
    "Suresh Venkatasubramanian": {
        "2009": {
            "N09": 1
        }
    },
    "Adinoyi Omuya": {
        "2013": {
            "N13": 1
        }
    },
    "Frank Rudzicz": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Iryna Knowledge Processing Lab": {
        "2015": {
            "D15": 1
        }
    },
    "Tsutomu Hirao": {
        "2010": {
            "D10": 1,
            "W10": 1
        },
        "2003": {
            "P03": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Linda G Means": {
        "1988": {
            "A88": 1
        }
    },
    "Grzegorz Chrupa\u0142a": {
        "2010": {
            "W10": 1
        }
    },
    "Bin Shuaishuai Xinyu Jiajun": {
        "2012": {
            "S12": 1
        }
    },
    "McCarthy Keller": {
        "2003": {
            "W03": 1
        }
    },
    "Ulrike Baldewein": {
        "2004": {
            "W04": 1
        }
    },
    "Enrique": {
        "2004": {
            "J04": 1
        }
    },
    "Dahan Netzer Elhadad": {
        "1999": {
            "P99": 1
        }
    },
    "Taro Watanabe": {
        "2006": {
            "W06": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Jim McCloskey": {
        "2015": {
            "W15": 1
        }
    },
    "Amber Stubbs": {
        "2007": {
            "W07": 1
        }
    },
    "Janara Christensen": {
        "2010": {
            "W10": 2
        },
        "2013": {
            "N13": 1
        }
    },
    "Sam Sahakian": {
        "2012": {
            "P12": 1
        },
        "2013": {
            "Q13": 1
        }
    },
    "Ciprian Gerstenberger": {
        "2005": {
            "W05": 1
        }
    },
    "D Mark": {
        "2015": {
            "P15": 1
        }
    },
    "Mark Perlin": {
        "1991": {
            "P91": 1
        }
    },
    "Sim Wilker": {
        "2015": {
            "W15": 1
        }
    },
    "Jeremy": {
        "2007": {
            "W07": 1
        }
    },
    "Carol Van_Ess-Dykemat": {
        "1995": {
            "P95": 1
        },
        "1991": {
            "P91": 1
        }
    },
    "Horacio Franco": {
        "2004": {
            "N04": 1
        }
    },
    "Choonkyu Lee": {
        "2012": {
            "W12": 1
        }
    },
    "Xi S Guo": {
        "2004": {
            "W04": 1
        }
    },
    "Michael Cafarella": {
        "2007": {
            "N07": 1
        }
    },
    "Yuening": {
        "2012": {
            "P12": 1
        }
    },
    "James P Sweeney": {
        "2006": {
            "P06": 1
        }
    },
    "Jennifer Chu": {
        "1993": {
            "P93": 1
        }
    },
    "Vanessa Sandrini": {
        "2006": {
            "W06": 1
        }
    },
    "Melanie": {
        "2010": {
            "W10": 1
        }
    },
    "Kathleen F McCoy": {
        "1984": {
            "P84": 1
        },
        "1986": {
            "P86": 1
        },
        "1990": {
            "W90": 1
        },
        "1992": {
            "P92": 1
        },
        "1997": {
            "W97": 1
        },
        "2007": {
            "N07": 1
        },
        "2008": {
            "P08": 1
        },
        "2010": {
            "W10": 2
        }
    },
    "Kathleen McKeown": {
        "2009": {
            "P09": 1
        },
        "1993": {
            "W93": 1
        },
        "2003": {
            "P03": 1
        },
        "2013": {
            "N13": 1
        },
        "2015": {
            "D15": 2,
            "W15": 2
        }
    },
    "Saidul Hasan Ng": {
        "2009": {
            "E09": 1
        }
    },
    "Ken A Dill": {
        "2006": {
            "W06": 1
        }
    },
    "Vincent": {
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 2
        }
    },
    "Perera": {
        "2015": {
            "W15": 1
        }
    },
    "Kenneth": {
        "2003": {
            "W03": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Thomas L Dan": {
        "2009": {
            "N09": 1
        }
    },
    "Zhiting Hu": {
        "2015": {
            "P15": 1
        }
    },
    "Evgenia Wasserman-Pritsker": {
        "2015": {
            "D15": 1
        }
    },
    "Karin Mauge": {
        "2012": {
            "P12": 1
        }
    },
    "Bertagna Monachini Soria Calzolari": {
        "2006": {
            "P06": 1
        }
    },
    "Damaris M Ayuso": {
        "1989": {
            "P89": 1
        }
    },
    "Akifumi Makinouchi": {
        "1985": {
            "E85": 1
        }
    },
    "Prasad Dinesh Lee": {
        "2006": {
            "W06": 1
        }
    },
    "J N Chen": {
        "1996": {
            "W96": 1
        }
    },
    "Lynette Melnar Chen Liu": {
        "2006": {
            "W06": 1
        }
    },
    "Diyi Yang": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "D15": 1,
            "P15": 1
        }
    },
    "Rajen Shourya Abhijit": {
        "2013": {
            "P13": 1
        }
    },
    "Alessandro": {
        "2011": {
            "D11": 1,
            "W11": 1
        },
        "2004": {
            "W04": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Debra Yarrington": {
        "2010": {
            "W10": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Gaurav Kharkwal": {
        "2014": {
            "W14": 1
        }
    },
    "Dasgupta Ng": {
        "2009": {
            "P09": 1
        }
    },
    "Sudeshna Sarkar": {
        "2012": {
            "W12": 3
        }
    },
    "Trevor Timothy of Computing": {
        "2012": {
            "N12": 1
        }
    },
    "Yves Schabes": {
        "1988": {
            "P88": 1
        },
        "1990": {
            "P90": 1
        },
        "1991": {
            "P91": 1
        },
        "1992": {
            "P92": 1,
            "A92": 1
        },
        "1993": {
            "E93": 1
        },
        "1994": {
            "J94": 1
        }
    },
    "Tomoya Kose": {
        "2013": {
            "W13": 1
        }
    },
    "Silberer": {
        "2012": {
            "D12": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Xinchi Chen": {
        "2015": {
            "D15": 1,
            "P15": 1
        }
    },
    "Gordana Ili\u00b4c": {
        "2013": {
            "N13": 1
        }
    },
    "Kyongho MIN": {
        "1998": {
            "P98": 1
        }
    },
    "Fang Jose": {
        "1997": {
            "A97": 1
        }
    },
    "Mikel Lersundi": {
        "2001": {
            "S01": 1
        }
    },
    "Lei Cheung-Chi Bin Haizhou": {
        "2013": {
            "P13": 1
        }
    },
    "Xin Kou": {
        "2014": {
            "P14": 1
        }
    },
    "Marc Ben Min": {
        "2006": {
            "P06": 1
        }
    },
    "M Emily": {
        "2012": {
            "N12": 1
        }
    },
    "Martin Klarner": {
        "2004": {
            "W04": 1
        }
    },
    "Brett R Shuying St\u00e9phane M": {
        "2012": {
            "W12": 1
        }
    },
    "Hans Uszkoreit": {
        "1992": {
            "P92": 1
        },
        "1997": {
            "A97": 1
        },
        "2005": {
            "W05": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        },
        "2009": {
            "E09": 1
        },
        "2010": {
            "P10": 1
        },
        "1983": {
            "P83": 1
        }
    },
    "Liane": {
        "2012": {
            "E12": 1
        }
    },
    "Liang": {
        "2007": {
            "N07": 1,
            "W07": 1
        }
    },
    "Thamar Solorio": {
        "2008": {
            "W08": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Wolfgang Menzel": {
        "2009": {
            "W09": 1
        },
        "2004": {
            "P04": 1
        },
        "2006": {
            "P06": 2
        }
    },
    "Krotov Hepple Gaizauskas Wilks": {
        "1998": {
            "P98": 1
        }
    },
    "Maryam Aminian": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Pantel Lin": {
        "2000": {
            "P00": 1
        }
    },
    "Jason Utt": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "S12": 1,
            "W12": 1
        }
    },
    "Agata Rozga": {
        "2014": {
            "W14": 1
        }
    },
    "Dennis Spohr": {
        "2009": {
            "W09": 1
        }
    },
    "Lance Ramshaw": {
        "2000": {
            "A00": 1
        }
    },
    "Jian Qian MO He-Yan": {
        "2010": {
            "W10": 1
        }
    },
    "I Rosti Zhang Matsoukas Schwartz": {
        "2008": {
            "W08": 1
        }
    },
    "Colin Vaz": {
        "2014": {
            "S14": 1
        }
    },
    "Fabrizio": {
        "2006": {
            "W06": 1
        }
    },
    "K Fei Ahmet Robert": {
        "2014": {
            "W14": 1
        }
    },
    "Gemma Boleda": {
        "2012": {
            "S12": 1,
            "P12": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Adrien": {
        "2014": {
            "W14": 1
        }
    },
    "Aron Martin": {
        "2014": {
            "W14": 1
        }
    },
    "James Foulds Padhraic Smyth": {
        "2013": {
            "D13": 1
        }
    },
    "Roland Kuhn Chen": {
        "2012": {
            "P12": 1
        }
    },
    "Yannick Versley": {
        "2008": {
            "P08": 1
        }
    },
    "Chen Yoshinobu Akiko": {
        "2013": {
            "W13": 1
        }
    },
    "Alicia": {
        "1997": {
            "W97": 1
        }
    },
    "t": {
        "1992": {
            "J92": 1
        }
    },
    "Barbara Di_Eugenio": {
        "1991": {
            "P91": 1
        },
        "1992": {
            "P92": 1
        },
        "1996": {
            "W96": 2
        },
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "1998": {
            "P98": 1
        },
        "2003": {
            "N03": 1
        },
        "2006": {
            "W06": 1
        },
        "2009": {
            "W09": 1
        },
        "2012": {
            "W12": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "A Peter": {
        "1999": {
            "W99": 1
        },
        "2012": {
            "W12": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Shimon Ullman": {
        "2015": {
            "D15": 1
        }
    },
    "Florin Rada": {
        "2015": {
            "D15": 1
        }
    },
    "Mark": {
        "1994": {
            "W94": 1
        },
        "1997": {
            "W97": 1
        },
        "1999": {
            "W99": 1
        },
        "2006": {
            "W06": 1,
            "N06": 2
        },
        "2008": {
            "W08": 1
        },
        "2009": {
            "N09": 1,
            "W09": 2
        },
        "2010": {
            "D10": 1,
            "W10": 1
        },
        "2011": {
            "D11": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "P13": 1,
            "W13": 1
        },
        "2014": {
            "Q14": 2
        },
        "2015": {
            "W15": 1
        }
    },
    "Di_Fabbrizio J Stent": {
        "2008": {
            "W08": 2
        }
    },
    "Alan L Tharp": {
        "1983": {
            "A83": 1
        }
    },
    "Y Albert": {
        "2009": {
            "N09": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Mary": {
        "2010": {
            "N10": 1
        },
        "2011": {
            "P11": 1
        },
        "1997": {
            "W97": 1
        }
    },
    "Yonghui Wu": {
        "2015": {
            "W15": 1
        }
    },
    "Yunfang Wu": {
        "2012": {
            "S12": 1
        },
        "2007": {
            "S07": 2
        }
    },
    "Eric Morley": {
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Jonathan Clark": {
        "2011": {
            "P11": 1
        }
    },
    "Adam Pauls": {
        "2009": {
            "N09": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "Mitchell Lapata": {
        "2008": {
            "P08": 1
        }
    },
    "Bernd Bohnet": {
        "2001": {
            "W01": 1
        },
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Mark Stickel": {
        "1988": {
            "P88": 1
        }
    },
    "J\u00fcrgen Wedekind": {
        "1995": {
            "E95": 1
        },
        "1991": {
            "E91": 1
        }
    },
    "Marilyn": {
        "2000": {
            "W00": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Kotaro Masahiro": {
        "2015": {
            "W15": 1
        }
    },
    "Yoshihiro Matsuo Kikui": {
        "2010": {
            "P10": 1
        }
    },
    "Thomas Schoenemann": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Justin Palmer": {
        "2006": {
            "E06": 1
        }
    },
    "Florence Reeder": {
        "1998": {
            "P98": 1
        }
    },
    "Livy Real Fabricio Chalub Valeria de_Paiva": {
        "2015": {
            "W15": 1
        }
    },
    "Yue Hu": {
        "2014": {
            "D14": 1
        }
    },
    "Le_Binyang Daling Ge Kam-Fai": {
        "2013": {
            "D13": 1
        }
    },
    "Stefanie Dipper": {
        "2000": {
            "W00": 1
        },
        "2004": {
            "W04": 1
        }
    },
    "DeNero Klein": {
        "2010": {
            "P10": 1
        }
    },
    "TieJun Zhao": {
        "2007": {
            "S07": 1
        }
    },
    "Leonardo": {
        "2000": {
            "W00": 1
        }
    },
    "Martine Smets Sz": {
        "1999": {
            "E99": 1
        }
    },
    "Raymond T Ng": {
        "2008": {
            "P08": 1
        },
        "2013": {
            "N13": 1
        },
        "2014": {
            "D14": 1,
            "P14": 1
        }
    },
    "Omar Zaidan Vishal Chowdhary": {
        "2013": {
            "W13": 1
        }
    },
    "Somayajulu Kit": {
        "2014": {
            "W14": 1
        }
    },
    "Stella Frank": {
        "2010": {
            "W10": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Jisup Hong Elise Stickles": {
        "2015": {
            "W15": 1
        }
    },
    "Zixin Jiang": {
        "2000": {
            "W00": 1
        }
    },
    "Steve Renals": {
        "2006": {
            "E06": 1,
            "W06": 1
        }
    },
    "Yangfeng": {
        "2013": {
            "D13": 1
        }
    },
    "Cynthia Rudin": {
        "2006": {
            "W06": 1
        }
    },
    "Mike Burton": {
        "2014": {
            "W14": 1
        }
    },
    "Sam Anzaroot": {
        "2011": {
            "W11": 1
        }
    },
    "Yigal Arens": {
        "1987": {
            "P87": 1
        },
        "1980": {
            "P80": 1
        }
    },
    "David Weir Weeds": {
        "2014": {
            "W14": 1
        }
    },
    "Peter Poller": {
        "2005": {
            "W05": 1
        }
    },
    "Hitoshi Iida": {
        "1998": {
            "P98": 2
        }
    },
    "Yanxin Shi": {
        "2006": {
            "W06": 1
        }
    },
    "Ulrich": {
        "2003": {
            "W03": 1
        },
        "2012": {
            "W12": 1
        },
        "1998": {
            "W98": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Lassen Vestskov Terney": {
        "2006": {
            "W06": 1
        }
    },
    "Hendra Setiawan": {
        "2010": {
            "P10": 1
        }
    },
    "Phil Stenton": {
        "1988": {
            "P88": 1
        },
        "1989": {
            "E89": 1
        }
    },
    "Jelke Bloem Arjen Versloot Fred Weerman": {
        "2015": {
            "W15": 1
        }
    },
    "D Christopher": {
        "2008": {
            "D08": 1
        },
        "2009": {
            "W09": 1
        },
        "2010": {
            "N10": 1
        },
        "2011": {
            "D11": 1
        },
        "2012": {
            "D12": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "D14": 2
        }
    },
    "C M White": {
        "2000": {
            "A00": 1
        }
    },
    "Manfred Stede": {
        "1993": {
            "E93": 1
        },
        "2013": {
            "W13": 1
        },
        "1998": {
            "J98": 1
        }
    },
    "Szu-ting Yi": {
        "2007": {
            "N07": 1
        }
    },
    "Takuya Jun\u2019ichi": {
        "2011": {
            "W11": 1
        }
    },
    "B K Boguraev": {
        "1984": {
            "P84": 1
        },
        "1983": {
            "A83": 1
        }
    },
    "Jackie Chi Kit": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "P09": 1,
            "W09": 1
        },
        "2010": {
            "P10": 1,
            "D10": 1
        },
        "2013": {
            "P13": 2
        },
        "2014": {
            "D14": 1
        }
    },
    "J": {
        "2010": {
            "N10": 1
        },
        "2011": {
            "J11": 1
        }
    },
    "Kazunori Muraki": {
        "1994": {
            "A94": 1
        }
    },
    "Maria Alex": {
        "2003": {
            "J03": 1
        }
    },
    "Barbara Barry": {
        "2013": {
            "W13": 1
        }
    },
    "Eduardo de_Paiva Alves": {
        "1996": {
            "P96": 1
        }
    },
    "Ebert Thang Vu": {
        "2015": {
            "W15": 1
        }
    },
    "Bonan Min": {
        "2012": {
            "E12": 1
        }
    },
    "Kato Matsubara": {
        "2009": {
            "P09": 1
        }
    },
    "David Gerritsen": {
        "2013": {
            "W13": 1
        }
    },
    "Yiota Kontzopoulou": {
        "2015": {
            "W15": 1
        }
    },
    "Maria Holmqvist": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "W09": 1
        }
    },
    "Benjamin Van_Durme": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "N12": 2,
            "W12": 1,
            "D12": 1
        },
        "2014": {
            "W14": 2
        }
    },
    "Costanza Navarretta": {
        "2010": {
            "P10": 1
        }
    },
    "Erik McDermott": {
        "2006": {
            "P06": 1
        }
    },
    "Jayant": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "D12": 1
        },
        "2014": {
            "P14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Amanda Stent": {
        "2009": {
            "W09": 1
        },
        "2006": {
            "P06": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "C Villar": {
        "1987": {
            "E87": 1
        }
    },
    "Keith Stevens": {
        "2010": {
            "P10": 1,
            "S10": 1
        }
    },
    "Mark H Smith": {
        "1994": {
            "W94": 1
        }
    },
    "Shih-Chung Tsai": {
        "1998": {
            "P98": 1
        }
    },
    "Kathryn Mazaitis": {
        "2014": {
            "D14": 1
        }
    },
    "Chan-Kun Yeh": {
        "2015": {
            "W15": 1
        }
    },
    "Monica": {
        "2014": {
            "W14": 1
        }
    },
    "Yangfeng Ji": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Xiaofei Yue Li Shuo": {
        "2014": {
            "W14": 1
        }
    },
    "Joan L G Baart": {
        "1989": {
            "E89": 1
        }
    },
    "L Leun J Giulia Gabriella": {
        "2013": {
            "P13": 1
        }
    },
    "Yuan Zhang": {
        "2013": {
            "P13": 1
        }
    },
    "Jie Cai": {
        "2012": {
            "W12": 1
        }
    },
    "Han Paul Diana": {
        "2012": {
            "E12": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Tim Miller": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "P09": 1,
            "D09": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Brigitte Grote Manfred Stedef": {
        "1998": {
            "W98": 1
        }
    },
    "Xiaojun Zhang": {
        "2015": {
            "K15": 1
        }
    },
    "Cassandre Bonnie Katherine Forbes": {
        "2003": {
            "W03": 1
        }
    },
    "Guzm\u00b4an": {
        "2014": {
            "P14": 1
        },
        "2015": {
            "W15": 1,
            "K15": 1
        }
    },
    "Fernando": {
        "1997": {
            "W97": 1
        },
        "1998": {
            "W98": 1
        },
        "2001": {
            "N01": 1
        },
        "2009": {
            "W09": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Jun-ichi Tsujii": {
        "1984": {
            "P84": 1
        }
    },
    "Hayward H Chan": {
        "2005": {
            "P05": 1
        }
    },
    "Kriste Krstovski David": {
        "2011": {
            "W11": 1
        }
    },
    "Junlan Feng": {
        "2009": {
            "E09": 1
        }
    },
    "Persing Ng": {
        "2009": {
            "P09": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "D14": 1,
            "P14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Ng See Kiong": {
        "2015": {
            "D15": 1
        }
    },
    "Ted E Dunning": {
        "1995": {
            "E95": 1
        }
    },
    "Andreas Hagen": {
        "2004": {
            "N04": 1
        }
    },
    "Pablo": {
        "2010": {
            "W10": 2
        },
        "2005": {
            "W05": 1
        },
        "2006": {
            "W06": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Victoria Fossum": {
        "2012": {
            "W12": 1
        }
    },
    "K Kochut Pole": {
        "1983": {
            "E83": 1
        }
    },
    "Marijn Schraagen": {
        "2013": {
            "W13": 1
        }
    },
    "Jugal": {
        "2010": {
            "N10": 1
        },
        "2014": {
            "W14": 1,
            "P14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Rohit J Kate": {
        "2010": {
            "P10": 1,
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Tim Finin": {
        "2010": {
            "W10": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Thomas Grossi": {
        "1987": {
            "E87": 1
        }
    },
    "Ano op Sarkar": {
        "1993": {
            "P93": 1
        }
    },
    "Berg-Kirkpatrick Klein": {
        "2010": {
            "P10": 1
        }
    },
    "Daphna Shezaf": {
        "2010": {
            "P10": 1
        }
    },
    "Minsuk Lee": {
        "2006": {
            "N06": 1
        }
    },
    "Svetla Boytcheva": {
        "2011": {
            "W11": 1
        }
    },
    "Sali": {
        "2014": {
            "W14": 1
        }
    },
    "Sara Stymne": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "W09": 1,
            "E09": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "J13": 1
        }
    },
    "ZHOU GuoDong KONG": {
        "2009": {
            "D09": 1
        }
    },
    "Judith D Schlesinger": {
        "2013": {
            "W13": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Mark Dras": {
        "2000": {
            "P00": 1
        },
        "2011": {
            "W11": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "Fabian Bohnert": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Manolis Savva D": {
        "2014": {
            "W14": 2
        }
    },
    "Jayant Krishnamurthy Thomas Kollar": {
        "2013": {
            "Q13": 1
        }
    },
    "Jianfu Chen": {
        "2013": {
            "D13": 1
        }
    },
    "Pauls Klein": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 2
        }
    },
    "Koller": {
        "2005": {
            "W05": 1
        }
    },
    "Barnett": {
        "1990": {
            "W90": 1
        }
    },
    "Mehryar Mohri": {
        "1997": {
            "J97": 1
        }
    },
    "Jan Snajder Bojana Dalbelo Ba\u02c7si\u00b4c Sa\u02c7sa Petrovi\u00b4c Ivan Sikiri\u00b4c": {
        "2008": {
            "P08": 1
        }
    },
    "Soma Paul": {
        "2014": {
            "W14": 1
        }
    },
    "Naoki Abe": {
        "1988": {
            "P88": 1
        },
        "1998": {
            "J98": 1
        }
    },
    "Omri": {
        "2010": {
            "W10": 1
        }
    },
    "Fiona": {
        "2006": {
            "W06": 1
        }
    },
    "Martin Jaggi Fatih Uzdilli Cieliebak": {
        "2014": {
            "S14": 1
        }
    },
    "Maite Taboada": {
        "1997": {
            "W97": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Michele Banko": {
        "2000": {
            "P00": 1
        },
        "2001": {
            "P01": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Xiaojin Zhu": {
        "2009": {
            "W09": 1
        },
        "2012": {
            "N12": 1
        },
        "2013": {
            "N13": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Wei Zhang": {
        "2007": {
            "S07": 1
        }
    },
    "Kouichi Nomura": {
        "1994": {
            "A94": 1
        }
    },
    "Verena": {
        "2015": {
            "D15": 1
        }
    },
    "D Johanna": {
        "2009": {
            "W09": 2
        },
        "2004": {
            "W04": 1
        },
        "1996": {
            "W96": 1
        }
    },
    "Apoorv Agarwal": {
        "2009": {
            "E09": 1
        },
        "2013": {
            "W13": 2
        }
    },
    "Mori Rimon' Jacky Herz'": {
        "1991": {
            "E91": 1
        }
    },
    "Carolyn P Rose": {
        "2000": {
            "A00": 1
        }
    },
    "Nikolaos Elizabeth Shrikanth": {
        "2015": {
            "D15": 1
        }
    },
    "David Carter'": {
        "1994": {
            "J94": 1
        }
    },
    "Xiaolong Wang": {
        "2010": {
            "P10": 1,
            "W10": 1
        },
        "2014": {
            "P14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Jui-Ting Huang": {
        "2009": {
            "W09": 1
        }
    },
    "Thang Yibo": {
        "2000": {
            "W00": 1
        }
    },
    "Robert Krovetz": {
        "1992": {
            "P92": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "Ming Zhou": {
        "2000": {
            "P00": 2
        },
        "2007": {
            "W07": 1,
            "P07": 1
        },
        "2008": {
            "W08": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "P12": 2,
            "D12": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Andrew M Olney": {
        "2011": {
            "W11": 1
        }
    },
    "Songbo Tan": {
        "2009": {
            "N09": 1
        }
    },
    "Joshua Herring": {
        "2008": {
            "W08": 1
        }
    },
    "Yaqin": {
        "2013": {
            "W13": 1
        }
    },
    "Guy Emerson": {
        "2014": {
            "W14": 1
        }
    },
    "Ben Hutchinson": {
        "2004": {
            "P04": 1
        },
        "2005": {
            "P05": 1
        }
    },
    "Heriberto Cuay\u00b4ahuitl": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "N12": 1
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Anna Vartapetiance Lee Gillam": {
        "2012": {
            "W12": 1
        }
    },
    "Eva Koktova": {
        "1983": {
            "E83": 1
        }
    },
    "Martin Volk": {
        "2008": {
            "W08": 1
        },
        "2003": {
            "E03": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Achille Falaise": {
        "2010": {
            "W10": 1
        }
    },
    "Joan-Andreu S\u00e1nchez": {
        "2010": {
            "N10": 1
        }
    },
    "Yasemin Altun": {
        "2006": {
            "W06": 1
        }
    },
    "Victor": {
        "2010": {
            "N10": 1
        },
        "2006": {
            "W06": 1
        },
        "2015": {
            "D15": 1,
            "P15": 1
        }
    },
    "Olga Scrivner": {
        "2015": {
            "W15": 1
        }
    },
    "Sandra Carberry": {
        "1988": {
            "J88": 1
        },
        "1989": {
            "J89": 1
        },
        "1991": {
            "P91": 1
        },
        "1992": {
            "P92": 2
        },
        "1994": {
            "W94": 1,
            "P94": 1
        },
        "1995": {
            "P95": 1
        },
        "1999": {
            "J99": 1
        }
    },
    "Anna Nedoluzhko": {
        "2009": {
            "W09": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Tahira Naseem Snyder": {
        "2009": {
            "P09": 1,
            "N09": 1
        }
    },
    "Harald Trost": {
        "1993": {
            "E93": 1
        }
    },
    "Zhou Yu": {
        "2013": {
            "W13": 1
        }
    },
    "Power Williams": {
        "2011": {
            "W11": 1
        }
    },
    "Paolo Annesi": {
        "2010": {
            "P10": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Andrew Finch": {
        "2009": {
            "D09": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Judith L Klavans": {
        "2000": {
            "A00": 1
        },
        "2004": {
            "N04": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "Gustavo Henrique Paetzold": {
        "2015": {
            "W15": 1,
            "P15": 1
        }
    },
    "Y Joyce": {
        "2010": {
            "D10": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Esther Konig": {
        "1989": {
            "P89": 1
        }
    },
    "Torsten": {
        "2008": {
            "W08": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Greg Durrett": {
        "2014": {
            "P14": 1
        }
    },
    "Torvald Lekvam Bj\u00a8orn Gamb\u00a8ack Lars Bungum": {
        "2014": {
            "W14": 1
        }
    },
    "Wesley May": {
        "2012": {
            "S12": 1
        }
    },
    "Eric Bengtson": {
        "2008": {
            "D08": 1
        }
    },
    "Gerber Y Chai": {
        "2010": {
            "P10": 1
        }
    },
    "Kuhn Chen": {
        "2010": {
            "P10": 1
        }
    },
    "David John Daniel Anja": {
        "2007": {
            "W07": 1
        }
    },
    "H James": {
        "2008": {
            "W08": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Christina Unger": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Xiao Zhou": {
        "2010": {
            "W10": 1
        }
    },
    "Michelbacher Alok Kothari Martin Christina Lioma Hinrich": {
        "2011": {
            "D11": 1
        }
    },
    "Sharon J Goldwater": {
        "2000": {
            "W00": 1
        }
    },
    "Lilja \u00d8vrelid Stephan": {
        "2012": {
            "S12": 1
        }
    },
    "E J V S J L": {
        "2006": {
            "W06": 1
        }
    },
    "Deniz Yuret": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "P09": 1
        },
        "2010": {
            "S10": 1
        },
        "2012": {
            "D12": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Yu Max": {
        "2012": {
            "W12": 1
        }
    },
    "Jun-ichi NAKAMURA": {
        "1984": {
            "P84": 1
        }
    },
    "Stephen Tyndall": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Mihalcea Csomai": {
        "2007": {
            "S07": 1
        }
    },
    "Tsuchiya Sato": {
        "2003": {
            "P03": 1
        }
    },
    "Hua Cheng": {
        "2000": {
            "A00": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Jorg Tiedemann": {
        "2003": {
            "E03": 1
        }
    },
    "Suzanne Tamang": {
        "2012": {
            "W12": 1
        }
    },
    "German Rigau": {
        "2009": {
            "E09": 1
        },
        "1998": {
            "P98": 1,
            "W98": 1
        }
    },
    "Zhou Joe F": {
        "2000": {
            "W00": 1
        }
    },
    "Binod Gyawali": {
        "2014": {
            "W14": 1
        }
    },
    "Harihara Yang": {
        "2013": {
            "S13": 1
        }
    },
    "Alex Judea": {
        "2012": {
            "D12": 1
        }
    },
    "Eric Breck": {
        "1999": {
            "P99": 1
        }
    },
    "David DeVault": {
        "2008": {
            "W08": 2
        },
        "2009": {
            "E09": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Lei Yao": {
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Niels O Schiller": {
        "2010": {
            "P10": 1
        }
    },
    "Gregory B Taylor": {
        "1983": {
            "A83": 1
        }
    },
    "Yong Cheng": {
        "2010": {
            "W10": 1
        }
    },
    "Sergei NIRENBURG": {
        "2004": {
            "W04": 2
        },
        "1990": {
            "W90": 1
        }
    },
    "Dong Yang": {
        "2010": {
            "P10": 1
        }
    },
    "M Dorry": {
        "1999": {
            "W99": 1
        }
    },
    "Veronica Dahl": {
        "1993": {
            "J93": 1
        }
    },
    "Feifei Zhai": {
        "2015": {
            "D15": 1
        }
    },
    "Tomoko Ohta": {
        "2000": {
            "W00": 1
        }
    },
    "Chengjie Sun": {
        "2010": {
            "P10": 1,
            "W10": 2
        },
        "2015": {
            "S15": 1
        }
    },
    "Yo Sato": {
        "2006": {
            "E06": 1
        }
    },
    "Roberta Catizone": {
        "2003": {
            "W03": 2
        }
    },
    "Kevin Seppi": {
        "2008": {
            "P08": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "James Shaw": {
        "1998": {
            "P98": 1
        }
    },
    "Diab": {
        "2012": {
            "W12": 1
        }
    },
    "Sanda Harabagiu": {
        "2004": {
            "W04": 1
        },
        "2010": {
            "P10": 1,
            "S10": 2
        },
        "2012": {
            "S12": 1
        },
        "2005": {
            "P05": 1
        },
        "2006": {
            "W06": 1,
            "P06": 2
        }
    },
    "Adam Albright Bruce Hayes": {
        "2002": {
            "W02": 1
        }
    },
    "Inui Satoshi Sekine": {
        "2015": {
            "W15": 1
        }
    },
    "Likun Qiu": {
        "2014": {
            "D14": 1
        }
    },
    "Patrick Jeuniaux": {
        "2006": {
            "W06": 1
        }
    },
    "Pattanasak Mongkolwat": {
        "2012": {
            "W12": 1
        }
    },
    "Francois-Michel Lang": {
        "1988": {
            "A88": 1
        }
    },
    "Yongshuai Hou": {
        "2015": {
            "S15": 1
        }
    },
    "Oren Melamud Omer Levy Ido": {
        "2015": {
            "W15": 1
        }
    },
    "Eva Maria Vecchi Lazaridou": {
        "2013": {
            "D13": 1
        }
    },
    "Terry Regier": {
        "1991": {
            "P91": 1
        }
    },
    "Jaime Carbonell": {
        "2010": {
            "P10": 1
        },
        "2004": {
            "W04": 1
        }
    },
    "Vincent Van": {
        "2008": {
            "W08": 1
        }
    },
    "Kelsey Allen": {
        "2014": {
            "D14": 1
        }
    },
    "Dominik": {
        "2015": {
            "D15": 1,
            "P15": 1
        }
    },
    "Dominic": {
        "1997": {
            "W97": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Renato De": {
        "2003": {
            "W03": 1
        }
    },
    "Milan Mosny": {
        "1995": {
            "P95": 1
        }
    },
    "K R": {
        "2012": {
            "P12": 1,
            "D12": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Walid Steve": {
        "2015": {
            "W15": 1
        }
    },
    "Michael Kiihn": {
        "2003": {
            "E03": 1
        }
    },
    "Andrea Glaser": {
        "2012": {
            "E12": 1
        }
    },
    "Tomas": {
        "2015": {
            "W15": 1
        }
    },
    "Axel": {
        "2012": {
            "W12": 1
        }
    },
    "Abhinaya Gail M Keenan": {
        "2014": {
            "W14": 1
        }
    },
    "Foster Kuhn": {
        "2006": {
            "W06": 1
        }
    },
    "Zhaleh Feizollahi": {
        "2014": {
            "D14": 1
        }
    },
    "Li Cai Zhou": {
        "2011": {
            "P11": 1
        }
    },
    "Jagadeesh": {
        "2012": {
            "N12": 1
        }
    },
    "Masahiro Kotaro": {
        "2015": {
            "D15": 1
        }
    },
    "Jose M Gomez": {
        "2014": {
            "W14": 1
        }
    },
    "Guillaume": {
        "2013": {
            "P13": 1
        }
    },
    "Yao Van_Durme": {
        "2013": {
            "P13": 1,
            "D13": 1
        }
    },
    "Minjoon Seo": {
        "2015": {
            "D15": 1
        }
    },
    "Dana Dann\u00b4ells": {
        "2014": {
            "W14": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "Thoudam Doren": {
        "2010": {
            "W10": 2
        }
    },
    "Alon Itaif": {
        "1994": {
            "J94": 1
        }
    },
    "Anna Divoli": {
        "2007": {
            "W07": 1
        }
    },
    "Ronan Le_Nagard": {
        "2010": {
            "W10": 1
        }
    },
    "M In\u00b4es Torres M Teresa Gonz\u00b4alez": {
        "2007": {
            "W07": 1
        }
    },
    "Robert Porzel Rainer Malaka": {
        "2004": {
            "W04": 1
        }
    },
    "Aone William Bennett": {
        "1995": {
            "P95": 1
        }
    },
    "A R Jos\u00b4e": {
        "2006": {
            "W06": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Jun\u2019ichi Kazama": {
        "2010": {
            "P10": 1
        }
    },
    "Wilbert Heeringa": {
        "2006": {
            "W06": 1
        }
    },
    "Haifeng Hua Ting Sheng": {
        "2011": {
            "P11": 1
        }
    },
    "Sean A Fulop David Kephart": {
        "2015": {
            "W15": 1
        }
    },
    "Mahmoud": {
        "2013": {
            "W13": 1
        }
    },
    "Mohammad Salameh": {
        "2013": {
            "W13": 1
        }
    },
    "Ananlada Chotimongkol": {
        "2008": {
            "D08": 1
        }
    },
    "Ariadna Font": {
        "2007": {
            "W07": 1
        }
    },
    "Anoop Sarkar": {
        "2000": {
            "W00": 1
        },
        "2011": {
            "W11": 1
        },
        "1998": {
            "P98": 1
        },
        "2006": {
            "E06": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Tao": {
        "2015": {
            "P15": 1
        }
    },
    "Guido Zarrella Henderson": {
        "2013": {
            "W13": 1
        }
    },
    "Simone": {
        "2015": {
            "P15": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Christian Frans Miriam Daniel A": {
        "2010": {
            "W10": 1
        }
    },
    "St\u00fchrenberg Goecke Diewald": {
        "2007": {
            "W07": 1
        }
    },
    "David Smith": {
        "2012": {
            "D12": 1
        }
    },
    "Prashant Khare": {
        "2014": {
            "W14": 1
        }
    },
    "Watanabe": {
        "2011": {
            "P11": 1
        }
    },
    "Amanda C Jobbins": {
        "1998": {
            "P98": 1
        }
    },
    "Harry Bunt": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "W09": 1
        },
        "2006": {
            "W06": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Frederic Bechet": {
        "2015": {
            "W15": 1,
            "S15": 2
        }
    },
    "Suriani Sulaiman": {
        "2011": {
            "W11": 1
        }
    },
    "Bharat": {
        "2013": {
            "P13": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Brody Huval": {
        "2012": {
            "D12": 1
        }
    },
    "Andrew Arnold": {
        "2008": {
            "P08": 1
        }
    },
    "Su Nam": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "S10": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Ben Swanson": {
        "2012": {
            "N12": 1,
            "P12": 1
        },
        "2013": {
            "N13": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Fabio": {
        "2009": {
            "W09": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Kyoung-Young Kim": {
        "2007": {
            "P07": 1
        }
    },
    "Chia-Yin Chen": {
        "2006": {
            "P06": 1
        }
    },
    "Ravikumar Komandur": {
        "2011": {
            "W11": 1
        }
    },
    "S Paula": {
        "2005": {
            "W05": 1
        },
        "2007": {
            "N07": 1,
            "W07": 1
        }
    },
    "Rosie Jones": {
        "2006": {
            "P06": 1
        }
    },
    "Janet Pierrehumbert": {
        "1986": {
            "P86": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Yulia Tsvetkov": {
        "2011": {
            "D11": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Wachsmuth Kiesel": {
        "2015": {
            "D15": 1
        }
    },
    "Christine H Nakatani": {
        "1999": {
            "W99": 1
        },
        "1996": {
            "P96": 1
        },
        "1998": {
            "P98": 1
        },
        "1991": {
            "P91": 1
        }
    },
    "Bing Zhao": {
        "2008": {
            "D08": 1
        },
        "2009": {
            "N09": 1
        },
        "2004": {
            "W04": 1
        }
    },
    "Dhivya Eswaran": {
        "2015": {
            "W15": 1
        }
    },
    "Chan-Chia Hsu": {
        "2014": {
            "W14": 1
        }
    },
    "Yusuke Jun\u2019ichi": {
        "2003": {
            "W03": 1
        }
    },
    "Sebastian Martschat": {
        "2012": {
            "W12": 1
        }
    },
    "Trevor Lucia": {
        "2014": {
            "D14": 1
        }
    },
    "Cristian": {
        "2015": {
            "P15": 1
        }
    },
    "Mikhail Kozhevnikov": {
        "2013": {
            "S13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "John Lehmann": {
        "2005": {
            "P05": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Roman Yangarber": {
        "2003": {
            "P03": 1
        },
        "2013": {
            "W13": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Catherine Macleod": {
        "2004": {
            "W04": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Igor Labutov Hod Lipson": {
        "2012": {
            "P12": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Paul A Crook": {
        "2012": {
            "E12": 1
        }
    },
    "Sonja Zillner": {
        "2008": {
            "W08": 1
        }
    },
    "Tim Paek": {
        "2010": {
            "P10": 1
        }
    },
    "Vijay Krishnan": {
        "2006": {
            "P06": 1
        }
    },
    "Takashi": {
        "2006": {
            "W06": 1
        }
    },
    "Michael I Freiling": {
        "1985": {
            "P85": 1
        }
    },
    "Peng": {
        "2014": {
            "D14": 1
        }
    },
    "Markus Freitag": {
        "2011": {
            "W11": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Yugo Murawaki": {
        "2008": {
            "D08": 1
        }
    },
    "Aditya Pushpak": {
        "2014": {
            "W14": 1
        }
    },
    "Karl Ruhi Minwoo": {
        "2015": {
            "P15": 1
        }
    },
    "Oliver Bender": {
        "2006": {
            "W06": 2
        }
    },
    "Julia Birke": {
        "2006": {
            "E06": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Tsuneko Nakazawa": {
        "1991": {
            "E91": 1
        }
    },
    "Lagun Eugene Agichtein": {
        "2013": {
            "D13": 1
        }
    },
    "Yvonne Samuelsson": {
        "2008": {
            "W08": 1
        },
        "2010": {
            "W10": 1
        }
    },
    "Harini": {
        "2015": {
            "W15": 1
        }
    },
    "Chunyu Kit": {
        "2013": {
            "P13": 1
        }
    },
    "Michael B Kashket": {
        "1986": {
            "P86": 1
        }
    },
    "Pang Lee": {
        "2004": {
            "P04": 1
        }
    },
    "Lloret Balahur Palomar": {
        "2011": {
            "W11": 1
        }
    },
    "Remi van": {
        "2012": {
            "E12": 1
        }
    },
    "Nervo Verdezoto Laure Vieu": {
        "2011": {
            "W11": 1
        }
    },
    "Andr\u00b4e": {
        "2009": {
            "W09": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Janet Cahn": {
        "1995": {
            "P95": 1
        }
    },
    "David Schlangen": {
        "2009": {
            "W09": 2
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 2
        }
    },
    "Kallirroi Georgila": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "N09": 1
        },
        "2010": {
            "W10": 1
        },
        "2014": {
            "P14": 1
        },
        "2015": {
            "W15": 2
        }
    },
    "Aleksandra G\u00a8unter": {
        "2014": {
            "S14": 1
        }
    },
    "Yi Zhang Hans-Ulrich Krieger": {
        "2011": {
            "W11": 1
        }
    },
    "Huang Xiaojun": {
        "2011": {
            "P11": 1
        }
    },
    "Julie Ramesh": {
        "2012": {
            "D12": 1
        }
    },
    "Ali Farhadi": {
        "2015": {
            "D15": 1
        }
    },
    "Zhifei Li": {
        "2008": {
            "P08": 1
        }
    },
    "Gabriella": {
        "2013": {
            "W13": 1
        }
    },
    "Tengfei Ma": {
        "2013": {
            "D13": 1
        }
    },
    "Jung-Goo Kang Park": {
        "1998": {
            "P98": 1
        }
    },
    "Y Richard Socher": {
        "2013": {
            "D13": 1
        }
    },
    "Mohamed Richard": {
        "2014": {
            "D14": 1
        }
    },
    "Shasha Xie": {
        "2010": {
            "N10": 1
        },
        "2012": {
            "N12": 1
        }
    },
    "Eric Wehrli": {
        "1985": {
            "E85": 1
        },
        "2003": {
            "E03": 2
        }
    },
    "Walter Daelemans": {
        "2008": {
            "W08": 1
        },
        "1994": {
            "J94": 1
        },
        "2006": {
            "J06": 1
        },
        "2015": {
            "W15": 2
        }
    },
    "Iliana Simova Dimitar Vasilev Alexander Popov Kiril Simov Petya Osenova": {
        "2014": {
            "W14": 1
        }
    },
    "Sascha Rothe": {
        "2014": {
            "P14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Ahmed Bouzid": {
        "1997": {
            "A97": 1
        }
    },
    "Marc Luria": {
        "1987": {
            "P87": 1
        },
        "1988": {
            "J88": 1
        }
    },
    "Jonathan J Hull": {
        "1994": {
            "A94": 2
        }
    },
    "Harri M T Saarikoski": {
        "2007": {
            "S07": 1
        }
    },
    "Claire Grover": {
        "2014": {
            "W14": 1
        },
        "2002": {
            "W02": 1
        },
        "1995": {
            "E95": 1
        },
        "2010": {
            "W10": 1
        },
        "2003": {
            "W03": 1
        }
    },
    "Anna Lisa Isabelle Fabio": {
        "2013": {
            "P13": 1
        }
    },
    "Trond Grenager": {
        "2005": {
            "P05": 2
        },
        "2007": {
            "P07": 1
        }
    },
    "Anita Gojun": {
        "2012": {
            "E12": 1
        }
    },
    "Max Paulus": {
        "2014": {
            "P14": 1
        }
    },
    "Kaixu Zhang": {
        "2014": {
            "E14": 1
        }
    },
    "What Computational Linguists Can Learn": {
        "2010": {
            "J10": 1
        }
    },
    "Franciska de_Jong": {
        "2009": {
            "E09": 1
        }
    },
    "Nancy IDE": {
        "2000": {
            "P00": 1
        }
    },
    "Antti Puurula": {
        "2007": {
            "P07": 1
        }
    },
    "Linguistic String Project": {
        "1983": {
            "A83": 1
        }
    },
    "Crystal": {
        "2008": {
            "W08": 1
        }
    },
    "Omid": {
        "2014": {
            "S14": 1
        }
    },
    "Emily Pitler": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 2
        },
        "2012": {
            "D12": 1
        },
        "2013": {
            "Q13": 1
        }
    },
    "Margaret N Hundleby": {
        "1993": {
            "W93": 1
        }
    },
    "Saluja Dyer Shay": {
        "2014": {
            "D14": 1
        }
    },
    "Sivaji": {
        "2010": {
            "S10": 1,
            "W10": 2
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "S14": 1
        }
    },
    "Keisuke": {
        "2013": {
            "W13": 1
        }
    },
    "Matthew G Snover": {
        "2001": {
            "P01": 1
        }
    },
    "Adam Berger": {
        "2000": {
            "P00": 1
        },
        "1997": {
            "W97": 1
        }
    },
    "Lawrence Xinhao Wang": {
        "2014": {
            "W14": 1
        }
    },
    "Lynette Hirschman": {
        "1986": {
            "P86": 1
        },
        "1988": {
            "A88": 1,
            "P88": 1
        },
        "2010": {
            "W10": 1
        }
    },
    "Deborah A Dahl": {
        "1986": {
            "P86": 1
        },
        "1988": {
            "P88": 1
        },
        "1997": {
            "A97": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Lea Frermann": {
        "2012": {
            "P12": 1
        }
    },
    "Lars Borin": {
        "2012": {
            "W12": 1
        }
    },
    "Oskar Sami Mikko": {
        "2013": {
            "W13": 1
        }
    },
    "S R Petrick": {
        "1982": {
            "P82": 1
        }
    },
    "Florian Ittycheriah Jing": {
        "2003": {
            "W03": 1
        }
    },
    "A Carlos": {
        "2002": {
            "W02": 2
        },
        "2006": {
            "W06": 1
        }
    },
    "Yuchen Zhang": {
        "2013": {
            "W13": 1
        }
    },
    "Nathanael Chambers": {
        "2010": {
            "P10": 1
        },
        "2014": {
            "Q14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Park": {
        "2005": {
            "W05": 1
        }
    },
    "C Jong": {
        "2004": {
            "W04": 1
        }
    },
    "James Martin": {
        "1988": {
            "J88": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Giovanni Adorni": {
        "1984": {
            "P84": 1
        },
        "1983": {
            "E83": 1
        }
    },
    "Marina Del Rey": {
        "2003": {
            "N03": 1
        }
    },
    "Bansal": {
        "2011": {
            "P11": 2
        },
        "2012": {
            "P12": 1
        }
    },
    "Rodolfo": {
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Susanne David Jose R": {
        "2010": {
            "W10": 1
        }
    },
    "Juri Ganitkevitch": {
        "2010": {
            "P10": 1
        }
    },
    "Isabelle": {
        "2014": {
            "W14": 1
        }
    },
    "benjamin borschingermq edu au mark johnsonmq edu au": {
        "2012": {
            "P12": 1
        }
    },
    "Sang": {
        "2007": {
            "P07": 1
        }
    },
    "Tobias Schnabel Hinrich Sch\u00fctze": {
        "2014": {
            "Q14": 1
        }
    },
    "Richard H Granger": {
        "1982": {
            "P82": 1
        },
        "1983": {
            "J83": 1
        }
    },
    "Post Gildea": {
        "2009": {
            "P09": 1
        }
    },
    "Stephan Vogel Alex": {
        "2004": {
            "W04": 1
        }
    },
    "Steve": {
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Yang Eisenstein": {
        "2014": {
            "P14": 1
        }
    },
    "Hsien-Chin Liou": {
        "2006": {
            "P06": 1
        }
    },
    "Nadine Chua": {
        "2015": {
            "W15": 1
        }
    },
    "Graham": {
        "2013": {
            "W13": 1
        }
    },
    "TANAKA-Ishii Hayakawat TAKEICHIt": {
        "2003": {
            "P03": 1
        }
    },
    "Jan W Amtrup": {
        "2000": {
            "W00": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Chia-ying Lee": {
        "2012": {
            "P12": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Begofna Villada": {
        "2007": {
            "W07": 1
        }
    },
    "Chang-Ning Huang": {
        "2003": {
            "P03": 1
        }
    },
    "D Wayne": {
        "2008": {
            "W08": 1
        }
    },
    "Way": {
        "2009": {
            "E09": 1
        }
    },
    "Beatriz Maeireizo": {
        "2004": {
            "P04": 1
        }
    },
    "Amichai Kronfeld": {
        "1989": {
            "P89": 1
        }
    },
    "Steve Jean Carletta": {
        "2006": {
            "N06": 1
        }
    },
    "Oregon Inc Portland": {
        "2012": {
            "P12": 1
        }
    },
    "Stevenson Joanis": {
        "2003": {
            "W03": 1
        }
    },
    "Merity Murphy R": {
        "2009": {
            "W09": 1
        }
    },
    "Ganchev": {
        "2008": {
            "W08": 1
        }
    },
    "Glaucia Melanie Rolf Alvine Nzeungang Maryam Marc Jamal Christina Mathias Soeken Fred Henning": {
        "2014": {
            "S14": 1
        }
    },
    "Tao Hong": {
        "1994": {
            "A94": 2
        }
    },
    "Rich\u00b4ard": {
        "2011": {
            "D11": 1
        },
        "2013": {
            "S13": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Nobal Niraula": {
        "2013": {
            "P13": 1
        }
    },
    "Tim Oates": {
        "2013": {
            "N13": 1
        }
    },
    "Wiltrud Kessler": {
        "2015": {
            "W15": 1
        }
    },
    "Janyce M Wiebe": {
        "1988": {
            "P88": 1
        }
    },
    "Jon Scott": {
        "2015": {
            "P15": 1
        }
    },
    "Aur\u00b4elien Max": {
        "2008": {
            "W08": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "E12": 1,
            "D12": 1
        }
    },
    "Donna": {
        "2005": {
            "W05": 1
        }
    },
    "Hassan": {
        "2006": {
            "W06": 1
        }
    },
    "Douglas Edwards": {
        "1986": {
            "P86": 1
        },
        "1988": {
            "P88": 1
        }
    },
    "David McGee": {
        "1997": {
            "A97": 1,
            "E97": 1,
            "P97": 1
        }
    },
    "Dong": {
        "2011": {
            "W11": 1
        }
    },
    "Nadi Tomeh": {
        "2013": {
            "P13": 1
        }
    },
    "Simon Dobnik": {
        "2013": {
            "W13": 1
        }
    },
    "Julia Peltason": {
        "2010": {
            "W10": 1
        }
    },
    "Wang Knight": {
        "2006": {
            "N06": 1
        }
    },
    "Katharina Probst": {
        "2002": {
            "P02": 1
        }
    },
    "Renxian Zhang": {
        "2010": {
            "S10": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "R Shafiq": {
        "2008": {
            "D08": 1
        }
    },
    "Bijan Toon": {
        "2014": {
            "W14": 1
        }
    },
    "Google City": {
        "2013": {
            "D13": 1
        }
    },
    "Luke": {
        "2012": {
            "P12": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "John F Pitrelli": {
        "2010": {
            "D10": 1
        }
    },
    "Barret Zoph": {
        "2015": {
            "D15": 1
        }
    },
    "Laurent Blin Laurent Miclet": {
        "2000": {
            "W00": 1
        }
    },
    "Quan Bin Li": {
        "2015": {
            "D15": 1
        }
    },
    "Akira Utsumi": {
        "2006": {
            "P06": 1
        }
    },
    "University of": {
        "2008": {
            "P08": 1
        },
        "2011": {
            "P11": 2
        },
        "2012": {
            "N12": 1,
            "P12": 1,
            "W12": 1
        },
        "2013": {
            "P13": 1,
            "W13": 1,
            "D13": 1
        },
        "2014": {
            "D14": 1,
            "P14": 1
        },
        "2015": {
            "W15": 1,
            "P15": 1
        }
    },
    "Changning Huang": {
        "2000": {
            "P00": 1
        }
    },
    "Simona Gandrabur": {
        "2003": {
            "W03": 1
        }
    },
    "Hwee Tou Jun Feng": {
        "2012": {
            "W12": 1
        }
    },
    "Maria Vecchi Zamparelli": {
        "2013": {
            "D13": 1
        }
    },
    "Timo Hendrik Okko Gabriel Ramin": {
        "2010": {
            "W10": 1
        }
    },
    "Stephen Tratz": {
        "2009": {
            "N09": 1
        },
        "2007": {
            "N07": 1,
            "S07": 1
        }
    },
    "Deirdre Hogan": {
        "2008": {
            "W08": 1
        },
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Xuanjing Huang": {
        "2010": {
            "D10": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Akira": {
        "2012": {
            "W12": 1
        }
    },
    "Baldwin": {
        "1999": {
            "W99": 1
        }
    },
    "Enrique Henestroza Anguiano\u2020": {
        "2011": {
            "W11": 1
        }
    },
    "Kiddon": {
        "2012": {
            "W12": 1
        }
    },
    "A Bristot": {
        "2009": {
            "W09": 1
        }
    },
    "Audi Primadhanty Xavier Carreras Ariadna Quattoni": {
        "2015": {
            "P15": 1
        }
    },
    "Sibabrata Paladhi": {
        "2008": {
            "W08": 1
        }
    },
    "Martin Forst": {
        "2009": {
            "E09": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Fang": {
        "2011": {
            "P11": 1
        },
        "2014": {
            "Q14": 1
        }
    },
    "Imamura Kikui": {
        "2007": {
            "P07": 1
        }
    },
    "Erel Jacob Ido": {
        "2013": {
            "P13": 1
        }
    },
    "Asma Ben Abacha": {
        "2015": {
            "S15": 1
        }
    },
    "Emiliano Guevara": {
        "2011": {
            "W11": 1
        }
    },
    "Eleftherios Avramidis": {
        "2011": {
            "W11": 1
        }
    },
    "Craig Pfeifer D": {
        "2013": {
            "W13": 1
        }
    },
    "Andrew Fister": {
        "2006": {
            "W06": 1
        }
    },
    "Yoshihiro Sekiguchi": {
        "1998": {
            "P98": 1
        }
    },
    "Ivan A Sag": {
        "1982": {
            "P82": 1
        }
    },
    "Robert Moore": {
        "1994": {
            "P94": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "Norihito Kohji": {
        "2001": {
            "W01": 1
        }
    },
    "Ann Copestaket": {
        "1999": {
            "J99": 1
        }
    },
    "Thadani": {
        "2011": {
            "P11": 1,
            "W11": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Dmitry Zelenko": {
        "1998": {
            "P98": 1
        }
    },
    "Barbara Vautheyt": {
        "1992": {
            "P92": 1
        }
    },
    "Ernest Pusateri": {
        "2004": {
            "W04": 1
        }
    },
    "S Mann Yarowsky": {
        "2005": {
            "P05": 1
        }
    },
    "Tanya Korelsky": {
        "2000": {
            "A00": 1
        },
        "1992": {
            "A92": 1
        }
    },
    "Nicholas Roy": {
        "2000": {
            "P00": 1
        }
    },
    "Mena B Habib Maurice van_Keulen": {
        "2014": {
            "W14": 1
        }
    },
    "Bill MacCartney": {
        "2008": {
            "D08": 1
        },
        "2009": {
            "W09": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Bhuvana": {
        "2010": {
            "N10": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Taku Kudo": {
        "2000": {
            "W00": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Christopher Yogi Arumainayagam": {
        "2004": {
            "W04": 1
        }
    },
    "Justin Martineau": {
        "2015": {
            "S15": 1
        }
    },
    "J David": {
        "2006": {
            "W06": 1
        }
    },
    "Bautista Herv\u00b4as": {
        "2011": {
            "W11": 1
        }
    },
    "Michelle Gregory": {
        "2007": {
            "S07": 1
        }
    },
    "Jianwen Jianlin Zheng": {
        "2014": {
            "D14": 1
        }
    },
    "Aharoni Anatoly Polnarov Tamar Hershcovich": {
        "2014": {
            "W14": 1
        }
    },
    "Multiple Corpora": {
        "2009": {
            "D09": 1
        }
    },
    "R Josep M": {
        "2007": {
            "N07": 1
        }
    },
    "Seeker": {
        "2013": {
            "D13": 1
        }
    },
    "Ethel Schuster": {
        "1988": {
            "J88": 1
        }
    },
    "Hyeon-Jin Kim": {
        "2005": {
            "P05": 1
        }
    },
    "Manju Putcha": {
        "2003": {
            "W03": 1
        }
    },
    "Zheng": {
        "2011": {
            "D11": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Kohji Dohsaka": {
        "2009": {
            "W09": 1
        }
    },
    "Timothy W Finin": {
        "1983": {
            "A83": 1
        }
    },
    "L Bean Riloff": {
        "1999": {
            "P99": 1
        }
    },
    "T Nguyen Moschitti": {
        "2009": {
            "D09": 1
        }
    },
    "Deepthi Chidambaram": {
        "2005": {
            "W05": 1
        }
    },
    "Bill": {
        "2010": {
            "W10": 1
        },
        "2004": {
            "W04": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Sylvain": {
        "2012": {
            "P12": 1
        }
    },
    "Nederhof": {
        "2014": {
            "E14": 1
        }
    },
    "Yusuke Miyao": {
        "2005": {
            "P05": 1
        },
        "2014": {
            "W14": 2,
            "P14": 1
        }
    },
    "Vivek Pei-Chun Chen": {
        "2014": {
            "D14": 1
        }
    },
    "Cristina Vertan": {
        "2009": {
            "P09": 1
        }
    },
    "Mingjun Tian": {
        "2010": {
            "D10": 1
        }
    },
    "Guofu Li": {
        "2008": {
            "P08": 1
        }
    },
    "Catherine": {
        "2007": {
            "W07": 1
        }
    },
    "Douglas W Oard": {
        "2009": {
            "N09": 1
        }
    },
    "Clifton J McFate": {
        "2010": {
            "P10": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Eli": {
        "2001": {
            "S01": 1
        }
    },
    "D Paul": {
        "2006": {
            "W06": 1
        }
    },
    "Jha Andrew Schwartz H": {
        "2012": {
            "S12": 1
        }
    },
    "Jacolien van_Rij Hedderik van_Rijn Petra Hendriks": {
        "2011": {
            "W11": 1
        }
    },
    "Shuhei Kondo": {
        "2013": {
            "W13": 2
        }
    },
    "Tingxu Yan Tamsin Maxwell": {
        "2010": {
            "P10": 1
        }
    },
    "Ingrid Zukerman": {
        "2001": {
            "P01": 1
        },
        "1994": {
            "W94": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Variational": {
        "2006": {
            "W06": 1
        }
    },
    "Massimo": {
        "2009": {
            "D09": 1
        }
    },
    "D W Stewart": {
        "2006": {
            "P06": 1
        }
    },
    "Huifeng Li": {
        "2003": {
            "W03": 1
        }
    },
    "B Charles": {
        "2005": {
            "W05": 1
        }
    },
    "C Anton": {
        "2004": {
            "N04": 1
        }
    },
    "Vibhu": {
        "1992": {
            "P92": 1
        }
    },
    "You Ouyang": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "S10": 1
        }
    },
    "G Craig Murray": {
        "2006": {
            "P06": 1
        }
    },
    "Vicky Zayats": {
        "2015": {
            "D15": 1
        }
    },
    "Chin-Chuan Cheng": {
        "2000": {
            "W00": 1
        }
    },
    "Christian Monson": {
        "2004": {
            "P04": 1
        }
    },
    "Jun\u2019ichi Kakegawa": {
        "2000": {
            "P00": 1
        }
    },
    "Pushpak": {
        "2003": {
            "W03": 1
        },
        "2013": {
            "N13": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Gary Geunbae": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "N09": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Ond\u02c7rej Bojar": {
        "2010": {
            "P10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Sae Yamada": {
        "1983": {
            "E83": 1
        }
    },
    "Rosa Arriaga": {
        "2014": {
            "W14": 1
        }
    },
    "Xingwei Zhu Bu": {
        "2010": {
            "D10": 1
        }
    },
    "Feiyu Xu": {
        "2009": {
            "E09": 1
        },
        "2010": {
            "P10": 1
        },
        "2015": {
            "W15": 1
        },
        "1998": {
            "P98": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Chambers Wang Jurafsky": {
        "2007": {
            "P07": 1
        }
    },
    "Murray": {
        "2008": {
            "D08": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Fazly": {
        "2003": {
            "W03": 1
        }
    },
    "Michael John Collins": {
        "1996": {
            "P96": 1
        }
    },
    "Stenchikova Mucha Hoffman": {
        "2007": {
            "N07": 1
        }
    },
    "Seong-Bae Park Byoung-Tak Zhang": {
        "2003": {
            "P03": 1
        }
    },
    "Feras Al Tarouti": {
        "2014": {
            "W14": 1,
            "P14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "M Buckeridge F E": {
        "2002": {
            "W02": 1
        }
    },
    "Sivaji Bandyopadhyay": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "P09": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Martin Dempster": {
        "2010": {
            "W10": 1
        }
    },
    "Gianluca Giorgolo": {
        "2013": {
            "W13": 1
        }
    },
    "Sujatha Das Gollapalli": {
        "2015": {
            "D15": 1
        }
    },
    "Alexander Schmitt": {
        "2011": {
            "W11": 1
        },
        "2013": {
            "N13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Charlotte Price Valeria de_Paiva Tracy Holloway King": {
        "2008": {
            "W08": 1
        }
    },
    "Marek Kozlowski": {
        "2014": {
            "S14": 1
        }
    },
    "D John": {
        "2012": {
            "N12": 1
        },
        "2014": {
            "S14": 1
        }
    },
    "Wen-tau Yih": {
        "2004": {
            "W04": 2
        },
        "2006": {
            "N06": 1,
            "P06": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "D12": 1
        },
        "2013": {
            "N13": 1,
            "P13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Vasin Punyakanok": {
        "2004": {
            "W04": 1
        },
        "1999": {
            "W99": 1
        }
    },
    "Stolcke Segal": {
        "1994": {
            "P94": 1
        }
    },
    "Robert T Kasper": {
        "1988": {
            "P88": 1
        },
        "1999": {
            "W99": 1
        }
    },
    "Julian Hough": {
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Xiaolong": {
        "2013": {
            "P13": 1
        },
        "2015": {
            "S15": 2
        }
    },
    "Krisztian Balog Leif Azzopardi Maarten de_Rijke": {
        "2007": {
            "S07": 1
        }
    },
    "Bea": {
        "2010": {
            "W10": 1
        }
    },
    "Stanford": {
        "2011": {
            "D11": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Kent Wittenburg": {
        "1993": {
            "P93": 1
        },
        "1988": {
            "A88": 1
        }
    },
    "L Leidner Schilder": {
        "2010": {
            "P10": 1
        }
    },
    "Ya-Ting Li": {
        "2015": {
            "W15": 1
        }
    },
    "Rada F MIHALCEA Dan I MOLDOVAN": {
        "2001": {
            "S01": 1
        }
    },
    "Dan Loehr": {
        "1997": {
            "W97": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Jonathan Weese": {
        "2010": {
            "P10": 1
        }
    },
    "A Alexandra": {
        "2009": {
            "W09": 1
        }
    },
    "Dan Bohus": {
        "2008": {
            "W08": 1
        },
        "2007": {
            "N07": 2
        }
    },
    "Nadya Frid": {
        "2008": {
            "W08": 1
        }
    },
    "Daniel Flickinger": {
        "1985": {
            "P85": 1
        }
    },
    "Daling Wang": {
        "2015": {
            "W15": 2
        }
    },
    "L Andrew": {
        "2014": {
            "W14": 1
        }
    },
    "Stephen BEALE": {
        "2004": {
            "W04": 1
        }
    },
    "James B Henderson": {
        "1992": {
            "P92": 1
        }
    },
    "Shona Douglas": {
        "1998": {
            "P98": 1
        }
    },
    "Jes\u00fas Peral": {
        "2000": {
            "P00": 1
        }
    },
    "Jianxing Yu": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Lars": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "W09": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Paul RODRIGUES": {
        "2004": {
            "W04": 1
        }
    },
    "Peter van_Beek": {
        "1987": {
            "P87": 1
        }
    },
    "Daniel Jurafsky": {
        "1995": {
            "P95": 2
        },
        "1998": {
            "W98": 1
        },
        "2000": {
            "P00": 1
        },
        "2005": {
            "P05": 1
        },
        "2006": {
            "P06": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "N12": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Geert-Jan M Dietrich": {
        "2005": {
            "W05": 1
        }
    },
    "Joel Martin": {
        "2003": {
            "W03": 1
        }
    },
    "Sara Noeman": {
        "2006": {
            "W06": 1
        }
    },
    "Sabine": {
        "2000": {
            "W00": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Maxim Khalilov": {
        "2006": {
            "W06": 2
        }
    },
    "Han Karl": {
        "2010": {
            "N10": 1
        }
    },
    "A Schwartz": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "W09": 1
        }
    },
    "Seigo Tanimura": {
        "2000": {
            "W00": 1
        }
    },
    "Letian Wang": {
        "2010": {
            "S10": 1
        }
    },
    "Taichi Takanobu": {
        "2015": {
            "D15": 1
        }
    },
    "Sauleh Eetemadi": {
        "2013": {
            "W13": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Khaled Shaalan Hitham M Abo Bakr Ibrahim Ziedan": {
        "2009": {
            "W09": 1
        }
    },
    "Jaime": {
        "2011": {
            "W11": 1
        }
    },
    "Bisk": {
        "2013": {
            "Q13": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Preethi Vaidyanathan": {
        "2015": {
            "W15": 2
        }
    },
    "Xavier": {
        "2015": {
            "K15": 1
        }
    },
    "Adrian Bejan Hathaway": {
        "2007": {
            "S07": 1
        }
    },
    "Yiguang Liu Wang": {
        "2012": {
            "W12": 1
        }
    },
    "Hugo Jair Escalante": {
        "2011": {
            "P11": 1
        }
    },
    "Choi Tom": {
        "2015": {
            "P15": 1
        }
    },
    "Christy Doran": {
        "2003": {
            "W03": 1
        }
    },
    "D Kim": {
        "2013": {
            "W13": 1
        }
    },
    "Yanir Seroussi": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Yasuhiro Ogawa": {
        "2006": {
            "P06": 1
        }
    },
    "Argyrios Vasilakopoulos": {
        "2002": {
            "W02": 1
        }
    },
    "Anthony Rousseau": {
        "2012": {
            "W12": 1
        }
    },
    "Chen Ng": {
        "2012": {
            "W12": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "D14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Saikrishna Srirampur Ravi Chandibhamar Radhika Mamidi": {
        "2014": {
            "W14": 1
        }
    },
    "Marc Diane": {
        "2001": {
            "W01": 1
        }
    },
    "Rens Bod": {
        "2007": {
            "P07": 1
        }
    },
    "Nishtha Naveen": {
        "2014": {
            "S14": 1
        }
    },
    "Kazuhide YAMAMOTO PAUL": {
        "1999": {
            "W99": 1
        }
    },
    "Ralph New York": {
        "2004": {
            "W04": 1
        }
    },
    "O Tudor Vijay-Shanker J": {
        "2008": {
            "W08": 1
        }
    },
    "Minoru Sasaki": {
        "2007": {
            "P07": 1
        }
    },
    "of Human Centered Design": {
        "2011": {
            "W11": 1
        }
    },
    "Pompeu Fabra University Mellon": {
        "2015": {
            "P15": 1
        }
    },
    "Ting-Hao Huang": {
        "2009": {
            "D09": 1
        },
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Liu Furu Wei": {
        "2012": {
            "P12": 1
        }
    },
    "B Fine": {
        "2010": {
            "W10": 1
        }
    },
    "Xing Shi": {
        "2014": {
            "P14": 1
        }
    },
    "Ilana Heintz": {
        "2008": {
            "P08": 1
        }
    },
    "Hashimoto Taiichi Takenobu": {
        "2006": {
            "P06": 1
        }
    },
    "Omneya A Rizk": {
        "1988": {
            "A88": 1
        }
    },
    "Culotta Wick": {
        "2007": {
            "N07": 1
        }
    },
    "Marjan Ghazvininejad": {
        "2015": {
            "D15": 1
        }
    },
    "Kyusong Lee": {
        "2013": {
            "W13": 1
        }
    },
    "Hiroshi G Okuno": {
        "2003": {
            "P03": 1
        }
    },
    "Daniel Micol": {
        "2010": {
            "P10": 1
        }
    },
    "Estela Saquete": {
        "2010": {
            "S10": 1
        }
    },
    "Oflazer Giizey": {
        "1994": {
            "A94": 1
        }
    },
    "Khash Rohanimanesh": {
        "2012": {
            "P12": 1
        }
    },
    "Adam David": {
        "2010": {
            "P10": 1
        }
    },
    "Hamad Bin Khalifa": {
        "2015": {
            "P15": 1
        }
    },
    "Lanjun Zhou": {
        "2010": {
            "P10": 1
        }
    },
    "Sophie Rosset": {
        "2012": {
            "E12": 1
        }
    },
    "Omar F Zaidan": {
        "2011": {
            "W11": 1
        }
    },
    "Marilyn W Friedman": {
        "1987": {
            "P87": 1
        }
    },
    "Manabu Sassano": {
        "2002": {
            "P02": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Gorman R Curran": {
        "2006": {
            "P06": 1
        }
    },
    "Sylvana Sofkova": {
        "2007": {
            "W07": 1
        }
    },
    "Arnaud Gaudinat": {
        "2000": {
            "W00": 1
        }
    },
    "Yin": {
        "2015": {
            "K15": 1
        }
    },
    "Chikashi Nobata": {
        "2000": {
            "W00": 1
        }
    },
    "Tadashi Nomoto": {
        "2008": {
            "P08": 1
        },
        "1993": {
            "E93": 1
        },
        "2004": {
            "P04": 1
        }
    },
    "Kirk": {
        "2009": {
            "W09": 1
        }
    },
    "Snover Richard": {
        "2008": {
            "D08": 1
        }
    },
    "Kiri": {
        "1999": {
            "W99": 1
        }
    },
    "Lucian": {
        "2009": {
            "N09": 1
        }
    },
    "Jan-Thorsten Peter": {
        "2015": {
            "W15": 1
        }
    },
    "Ayman Farahat": {
        "2003": {
            "P03": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "Kim Wang": {
        "2013": {
            "W13": 1
        }
    },
    "Vinci Liu": {
        "2006": {
            "E06": 1
        }
    },
    "C John": {
        "2003": {
            "W03": 1
        }
    },
    "Tomoharu Iwata Daichi Mochihashi Hiroshi Sawada": {
        "2010": {
            "P10": 1
        }
    },
    "Ryukoku University Informatics": {
        "2000": {
            "W00": 1
        }
    },
    "Claire": {
        "1996": {
            "W96": 1
        },
        "2004": {
            "W04": 1
        },
        "2008": {
            "D08": 1
        },
        "2009": {
            "D09": 1
        },
        "2011": {
            "W11": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "W14": 2
        }
    },
    "James Brian Massimo": {
        "2012": {
            "W12": 1
        }
    },
    "Gabriel Skantze": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "W10": 1
        },
        "2013": {
            "W13": 3
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Mark Stephen": {
        "2007": {
            "P07": 1
        }
    },
    "Sanae": {
        "2006": {
            "W06": 1
        }
    },
    "Christine D Piatko": {
        "2012": {
            "W12": 1
        }
    },
    "Ming-Wei Chang": {
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        },
        "2009": {
            "N09": 1
        },
        "2010": {
            "D10": 1,
            "W10": 1
        },
        "2012": {
            "N12": 1
        },
        "2013": {
            "P13": 1,
            "Q13": 1
        },
        "2014": {
            "Q14": 1
        }
    },
    "Monica Rogati": {
        "2001": {
            "P01": 1,
            "N01": 1
        },
        "2003": {
            "P03": 1
        }
    },
    "Saif M Mohammad": {
        "2010": {
            "W10": 1
        },
        "2013": {
            "S13": 1
        },
        "2014": {
            "W14": 2
        }
    },
    "Marion Aoife": {
        "2012": {
            "E12": 1
        }
    },
    "BY MARCUS' PARSER R Nozohoor-Farshi": {
        "1987": {
            "P87": 1
        }
    },
    "Amy Weinberg": {
        "2006": {
            "E06": 1
        }
    },
    "Ornella Wandji Tchami": {
        "2014": {
            "W14": 1
        }
    },
    "Barbara Fox": {
        "1998": {
            "W98": 1
        }
    },
    "Marco Dinarelli": {
        "2009": {
            "E09": 1
        },
        "2012": {
            "E12": 1
        }
    },
    "S Mann": {
        "2007": {
            "N07": 1
        }
    },
    "Sanghoun Song": {
        "2015": {
            "W15": 1
        }
    },
    "Gerald Gazdar": {
        "1995": {
            "P95": 1
        },
        "1989": {
            "E89": 1
        }
    },
    "Jacques Robins": {
        "1997": {
            "J97": 1
        }
    },
    "Baohua Gu": {
        "2006": {
            "W06": 1
        }
    },
    "Wolfgang Wahlster": {
        "1988": {
            "J88": 1
        },
        "1991": {
            "E91": 1
        }
    },
    "Espinosa White Mehay": {
        "2008": {
            "P08": 1
        }
    },
    "Candace L Sidner": {
        "2001": {
            "P01": 1
        },
        "1986": {
            "J86": 1
        },
        "1981": {
            "J81": 1
        }
    },
    "Paul Whitney": {
        "2007": {
            "S07": 1
        }
    },
    "Niels Schuette John Kelleher Brian Mac Namee": {
        "2014": {
            "W14": 1
        }
    },
    "Jiaqiang Chen": {
        "2015": {
            "W15": 1
        }
    },
    "Diane J Litman": {
        "1986": {
            "P86": 1
        },
        "1997": {
            "W97": 1,
            "E97": 1,
            "P97": 1
        },
        "1998": {
            "P98": 1
        },
        "1999": {
            "P99": 1
        },
        "2003": {
            "W03": 1
        },
        "2004": {
            "W04": 1,
            "N04": 1,
            "P04": 1
        },
        "2007": {
            "P07": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "W09": 1
        }
    },
    "Georg Niklfeld Pirker": {
        "1998": {
            "P98": 1
        }
    },
    "Lionel": {
        "2008": {
            "W08": 1
        }
    },
    "Philipp": {
        "2010": {
            "W10": 1
        },
        "2012": {
            "E12": 1
        },
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Nicol\u00b4as Serrano": {
        "2011": {
            "W11": 1
        }
    },
    "Joel": {
        "2011": {
            "P11": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Alexis": {
        "2014": {
            "P14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Hwidong Na": {
        "2011": {
            "W11": 2
        }
    },
    "Weegar Kalle": {
        "2015": {
            "K15": 1
        }
    },
    "Almut Silja Hildebrand": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "W10": 1
        }
    },
    "Benjamin Roth": {
        "2010": {
            "P10": 1
        }
    },
    "Olac Fuentes": {
        "2007": {
            "N07": 1
        }
    },
    "Lun-Wei Ku": {
        "2009": {
            "D09": 1
        },
        "2012": {
            "P12": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Liu Jing of": {
        "2013": {
            "N13": 1
        }
    },
    "Stefan Simon": {
        "2012": {
            "W12": 1
        }
    },
    "Dmitry Davidov": {
        "2008": {
            "P08": 2
        },
        "2009": {
            "E09": 1
        },
        "2010": {
            "P10": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Romain Deveaud Eric SanJuan": {
        "2013": {
            "P13": 1
        }
    },
    "Mariko HORIKOSHI": {
        "2004": {
            "W04": 1
        }
    },
    "Brandeis": {
        "1993": {
            "W93": 1
        }
    },
    "Andrews Manandhar De_Boni": {
        "2008": {
            "W08": 1
        }
    },
    "Cern Bozsahin": {
        "1998": {
            "P98": 1
        }
    },
    "Swapna Somasundaran": {
        "2009": {
            "P09": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Gerard de_Melo": {
        "2014": {
            "P14": 1
        },
        "2015": {
            "W15": 1,
            "P15": 1
        }
    },
    "Trevor Xinkai Du": {
        "2014": {
            "W14": 1
        }
    },
    "Luiz": {
        "2006": {
            "W06": 1
        }
    },
    "Greg Aist": {
        "2003": {
            "P03": 1
        }
    },
    "Saadat Iqbal": {
        "2013": {
            "W13": 1
        }
    },
    "Ahmad Babaeian Jelodar": {
        "2010": {
            "W10": 1
        }
    },
    "Fan Su Dongwon": {
        "2007": {
            "S07": 1
        }
    },
    "using Conditional Random Fields": {
        "2010": {
            "W10": 1
        }
    },
    "Paisarn Charoenpornsawat": {
        "2006": {
            "N06": 1
        }
    },
    "Hirao Iwata": {
        "2013": {
            "P13": 1
        }
    },
    "Hua Wu": {
        "2009": {
            "P09": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Arne Neumann": {
        "2013": {
            "W13": 1
        }
    },
    "Kwang-Sung Jun": {
        "2012": {
            "N12": 1
        }
    },
    "Steven Bird Burfoot": {
        "2011": {
            "P11": 1
        }
    },
    "Jose G Moreno Rumen Moraliyski Asma Berrezoug Ga\u00a8el_Dias": {
        "2014": {
            "S14": 1
        }
    },
    "Paul Martin": {
        "1988": {
            "P88": 1
        },
        "1991": {
            "W91": 1
        }
    },
    "Kudo Suzuki": {
        "2005": {
            "P05": 1
        }
    },
    "Yang Cao Lin": {
        "2009": {
            "D09": 1
        }
    },
    "Yasuhiro": {
        "2007": {
            "W07": 1
        }
    },
    "Jonathon Read": {
        "2012": {
            "S12": 2
        },
        "2005": {
            "P05": 1
        }
    },
    "Rakesh Gupta": {
        "2010": {
            "W10": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Jiang Liu": {
        "2010": {
            "P10": 1
        }
    },
    "Yoshihiko": {
        "2011": {
            "W11": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Nathan Schneider": {
        "2010": {
            "N10": 1,
            "S10": 1
        },
        "2011": {
            "P11": 1
        },
        "2014": {
            "Q14": 1,
            "P14": 1
        }
    },
    "Yefeng Wang": {
        "2009": {
            "P09": 1
        }
    },
    "Kfir Bar": {
        "2012": {
            "W12": 1
        }
    },
    "Christian M I M Matthiessen": {
        "1983": {
            "E83": 1
        }
    },
    "Pinchak": {
        "2007": {
            "N07": 1
        }
    },
    "Ravi Sergei Vassilivitskii Vibhor": {
        "2014": {
            "Q14": 1
        }
    },
    "Tatsuya Kawahara": {
        "2003": {
            "P03": 1
        },
        "2014": {
            "W14": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Yoong Keok Lee": {
        "2006": {
            "W06": 1
        }
    },
    "Kam-Fai": {
        "2011": {
            "P11": 1
        }
    },
    "Colin Matheson": {
        "2000": {
            "A00": 1
        },
        "2009": {
            "E09": 1
        }
    },
    "Lin Chen": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "N12": 1
        }
    },
    "Niloy": {
        "2007": {
            "W07": 1
        }
    },
    "Karin Harbusch": {
        "2009": {
            "E09": 1
        },
        "2003": {
            "E03": 1
        }
    },
    "R\u00b4emi": {
        "2014": {
            "E14": 1
        }
    },
    "Thomas L Cornell": {
        "1994": {
            "P94": 1
        }
    },
    "Koller Thater": {
        "2005": {
            "P05": 1
        }
    },
    "Alexander I Rudnicky": {
        "2008": {
            "P08": 1,
            "D08": 1
        },
        "2000": {
            "W00": 1
        }
    },
    "Soumen Chakrabarti": {
        "2003": {
            "W03": 1
        }
    },
    "Owen": {
        "2014": {
            "W14": 1
        },
        "2007": {
            "N07": 1
        },
        "2013": {
            "D13": 1
        },
        "2003": {
            "W03": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Yllias Chali Sadid A Hasan Shafiq R Joty": {
        "2009": {
            "P09": 1
        }
    },
    "Kai-Wei Chang": {
        "2009": {
            "P09": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "W13": 1,
            "D13": 1
        },
        "2015": {
            "K15": 1
        }
    },
    "Richard Crouch": {
        "1995": {
            "E95": 1
        }
    },
    "Tae Yano": {
        "2009": {
            "N09": 1
        },
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "N12": 1
        }
    },
    "A Labs Group": {
        "2015": {
            "P15": 1
        }
    },
    "Karunesh Kumar Arora R Mahesh K Sinha": {
        "2012": {
            "W12": 1
        }
    },
    "Kathleen R McKeownt": {
        "2000": {
            "J00": 1
        },
        "1996": {
            "J96": 1
        }
    },
    "David Vilar": {
        "2009": {
            "W09": 1
        },
        "2011": {
            "W11": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Fintan Costello": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "S10": 1
        }
    },
    "Guang Liu": {
        "2012": {
            "W12": 1
        }
    },
    "Gregory Grefenstette": {
        "1993": {
            "W93": 1
        }
    },
    "Jan Niehues": {
        "2012": {
            "W12": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Victoria Bobicev": {
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "S Conrad": {
        "2015": {
            "W15": 1
        }
    },
    "Cinkov\u00b4a Holub": {
        "2012": {
            "E12": 1
        }
    },
    "K Joshua": {
        "2014": {
            "P14": 1
        }
    },
    "Taras Zagibalov": {
        "2007": {
            "P07": 1
        }
    },
    "Magdalena Plamad\u02d8a": {
        "2013": {
            "W13": 1
        }
    },
    "Chaya Liebeskind": {
        "2012": {
            "S12": 1
        }
    },
    "Willem Zuidema": {
        "2009": {
            "W09": 1,
            "E09": 1
        },
        "2013": {
            "W13": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "Bronzi Zhaochen Guo Filipe Mesquita": {
        "2012": {
            "W12": 1
        }
    },
    "Donghui": {
        "2003": {
            "N03": 1
        }
    },
    "Bing": {
        "2015": {
            "D15": 1,
            "P15": 1
        }
    },
    "R": {
        "2009": {
            "W09": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "Michael Niv": {
        "1992": {
            "P92": 1
        },
        "1994": {
            "P94": 1
        },
        "1997": {
            "A97": 1
        }
    },
    "Zhang Salwen Michael Glass Gliozzo": {
        "2014": {
            "D14": 1
        }
    },
    "France": {
        "2009": {
            "W09": 1
        }
    },
    "Kino Coursey": {
        "2009": {
            "N09": 1,
            "W09": 1
        }
    },
    "Pedro Domingos": {
        "2008": {
            "D08": 1
        },
        "2009": {
            "D09": 1
        },
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Angelo Dalli": {
        "2006": {
            "N06": 1
        }
    },
    "Inderjeet Mani": {
        "1993": {
            "W93": 1
        },
        "2006": {
            "W06": 1
        },
        "1991": {
            "W91": 1
        }
    },
    "Behrouz Bokharaeian": {
        "2013": {
            "S13": 1
        }
    },
    "Benoit Favre": {
        "2010": {
            "W10": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Lana Yeganova": {
        "2015": {
            "D15": 1
        }
    },
    "Schlangen Gabriel": {
        "2009": {
            "E09": 1
        }
    },
    "Xing Yi": {
        "2007": {
            "N07": 1
        }
    },
    "Richard": {
        "1994": {
            "W94": 1
        },
        "2001": {
            "W01": 1
        },
        "2005": {
            "W05": 1
        },
        "2007": {
            "W07": 1
        },
        "2008": {
            "W08": 1
        },
        "2009": {
            "N09": 1,
            "W09": 1,
            "D09": 1
        },
        "2011": {
            "W11": 2
        },
        "2012": {
            "S12": 1
        },
        "2013": {
            "N13": 1
        },
        "2014": {
            "W14": 3
        },
        "2015": {
            "W15": 1
        }
    },
    "Jacob Andreas Jha": {
        "2010": {
            "W10": 1
        }
    },
    "Mark A Young": {
        "1993": {
            "P93": 1
        }
    },
    "Carmen Banea": {
        "2011": {
            "W11": 2
        },
        "2012": {
            "S12": 2
        },
        "2014": {
            "S14": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Fei Cheng": {
        "2013": {
            "W13": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Heilman Cahill": {
        "2012": {
            "W12": 1
        }
    },
    "Borja Navarro": {
        "2010": {
            "S10": 1
        }
    },
    "Oana Sandu": {
        "2010": {
            "W10": 1
        }
    },
    "Joyce Friedman Ramarathnam Venkatesan": {
        "1986": {
            "P86": 1
        }
    },
    "Patterson": {
        "2013": {
            "D13": 1
        }
    },
    "Na-Rae Han": {
        "2004": {
            "W04": 1
        }
    },
    "Uramoto Takeda": {
        "1998": {
            "P98": 1
        }
    },
    "A Smith": {
        "2004": {
            "P04": 1
        },
        "2007": {
            "P07": 1
        },
        "2008": {
            "D08": 1
        },
        "2009": {
            "D09": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        }
    },
    "Peng Xu": {
        "2009": {
            "N09": 1
        },
        "2002": {
            "P02": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "K Vijay-Shanker": {
        "1986": {
            "P86": 1
        },
        "1987": {
            "P87": 1
        },
        "1989": {
            "P89": 2
        },
        "1990": {
            "P90": 2,
            "W90": 1
        },
        "1992": {
            "P92": 1,
            "J92": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "LIU Zhanyi": {
        "2005": {
            "P05": 1
        }
    },
    "Agata Cybulska": {
        "2011": {
            "W11": 1
        }
    },
    "Emily M Bender": {
        "2008": {
            "P08": 1
        },
        "2010": {
            "P10": 1
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Dongxu Han": {
        "2013": {
            "W13": 1
        }
    },
    "D Hailu": {
        "2014": {
            "W14": 1
        }
    },
    "Xiaoqiang Luo": {
        "2009": {
            "N09": 1
        },
        "2002": {
            "P02": 1
        },
        "2003": {
            "W03": 1
        },
        "2013": {
            "N13": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Gijoo Yang": {
        "1992": {
            "P92": 1
        },
        "1990": {
            "W90": 1
        }
    },
    "Jennifer Spenader": {
        "2009": {
            "W09": 1
        }
    },
    "Zechner Alex Waibel": {
        "2000": {
            "A00": 1
        }
    },
    "Gijs Geleijnse": {
        "2008": {
            "W08": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Ossama Emam": {
        "2003": {
            "P03": 1
        },
        "2005": {
            "W05": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Rajhans Samdani": {
        "2012": {
            "N12": 1,
            "W12": 1
        }
    },
    "San Diego State": {
        "2014": {
            "P14": 1
        }
    },
    "Ian": {
        "2007": {
            "W07": 1
        }
    },
    "Taro": {
        "2012": {
            "N12": 1
        }
    },
    "Mats": {
        "1998": {
            "W98": 1
        }
    },
    "Tara": {
        "2010": {
            "D10": 1
        }
    },
    "B Thomson": {
        "2013": {
            "W13": 1
        }
    },
    "Pavel Smr\u02c7z": {
        "2004": {
            "W04": 1
        }
    },
    "Ayush Kumar": {
        "2015": {
            "S15": 1
        }
    },
    "Lukas Michelbacher": {
        "2009": {
            "W09": 1
        }
    },
    "Verena Henrich": {
        "2010": {
            "P10": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Kareem Darwish": {
        "2012": {
            "P12": 1
        },
        "2013": {
            "P13": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Jun Hu": {
        "2009": {
            "W09": 1
        }
    },
    "Mitsuko Yamura-Takei": {
        "2003": {
            "P03": 1
        }
    },
    "Lenhart K Schubert": {
        "1992": {
            "P92": 1
        }
    },
    "Robert Luk": {
        "1998": {
            "W98": 1
        }
    },
    "M Marin": {
        "2009": {
            "N09": 1
        }
    },
    "Kiyoaki Shirai": {
        "2001": {
            "S01": 1
        }
    },
    "Zhang Matsuzaki": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "N10": 1
        }
    },
    "Min-Yen Kan": {
        "2009": {
            "W09": 1
        },
        "2012": {
            "W12": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "Alicia Abella": {
        "1999": {
            "P99": 1
        }
    },
    "Dick Crouch Tracy Holloway King": {
        "2008": {
            "W08": 1
        }
    },
    "Frank A Smadja": {
        "1991": {
            "P91": 1
        }
    },
    "Joseph Austerweil": {
        "2007": {
            "N07": 1
        }
    },
    "Shyamal Kumar Das": {
        "2012": {
            "W12": 1
        }
    },
    "Matthias": {
        "2000": {
            "W00": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Andras Csomai": {
        "2005": {
            "P05": 1
        }
    },
    "Vasile Rus": {
        "2001": {
            "P01": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Mairesse": {
        "2007": {
            "P07": 1
        }
    },
    "Richard Zens": {
        "2012": {
            "D12": 1
        },
        "2005": {
            "W05": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Tetsunosuke Fujisaki": {
        "1984": {
            "P84": 1
        }
    },
    "Bernhard Gurevych": {
        "2009": {
            "P09": 1
        }
    },
    "Lee Hetherington": {
        "2008": {
            "W08": 1
        },
        "2004": {
            "W04": 1
        }
    },
    "Himani Chaudhry": {
        "2009": {
            "P09": 1
        }
    },
    "Paul Cook": {
        "2013": {
            "S13": 2
        },
        "2007": {
            "W07": 1
        }
    },
    "Christian Poelitz": {
        "2014": {
            "W14": 1
        }
    },
    "Erik Velldal": {
        "2012": {
            "S12": 2
        },
        "2006": {
            "W06": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Barbara White": {
        "2010": {
            "W10": 1
        }
    },
    "Daniel Lampos": {
        "2013": {
            "P13": 1
        }
    },
    "Ye-Yi Wang": {
        "1994": {
            "P94": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "V James": {
        "2014": {
            "W14": 1
        }
    },
    "David L McPeters": {
        "1983": {
            "A83": 1
        }
    },
    "Hideki Kozima Akira Ito": {
        "1998": {
            "W98": 1
        }
    },
    "Margaret M Fleck": {
        "2008": {
            "P08": 1
        },
        "1983": {
            "P83": 1
        }
    },
    "J Ker Chen": {
        "2000": {
            "W00": 1
        }
    },
    "Iglesias Lisa Bedore": {
        "2013": {
            "W13": 1
        }
    },
    "Christopher Parisien": {
        "2008": {
            "W08": 1
        }
    },
    "Christopher": {
        "2015": {
            "S15": 1
        }
    },
    "Chuen-Tsai Hsin-Hsi": {
        "2010": {
            "W10": 1
        }
    },
    "Stephan Kanthak": {
        "2004": {
            "P04": 1
        },
        "2005": {
            "W05": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "M Boisvert": {
        "2007": {
            "P07": 1
        }
    },
    "Samuel F Pilato": {
        "1985": {
            "P85": 1
        }
    },
    "Vittorio Ferrari": {
        "2013": {
            "P13": 1
        }
    },
    "Zhou": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "P13": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Aditya": {
        "2012": {
            "N12": 1
        }
    },
    "Burger": {
        "2003": {
            "N03": 1
        }
    },
    "Kishore Papineni": {
        "2003": {
            "P03": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "M Josep": {
        "2007": {
            "N07": 1
        }
    },
    "Maxine Eskenazi": {
        "2010": {
            "W10": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Emma Barker": {
        "2014": {
            "W14": 1
        }
    },
    "Kazuaki Maeda": {
        "2001": {
            "W01": 1
        }
    },
    "Luke Zettlemoyer Oren": {
        "2013": {
            "P13": 1
        }
    },
    "Susan Converse": {
        "2002": {
            "W02": 1
        }
    },
    "Philip V Ogren Steven J Bethard": {
        "2009": {
            "W09": 1
        }
    },
    "Yasuhara Toru Tanaka Norimatsu Mikio": {
        "2013": {
            "D13": 1
        }
    },
    "Ryoji": {
        "2006": {
            "W06": 1
        }
    },
    "Donald Hindle": {
        "1993": {
            "J93": 1
        },
        "1991": {
            "P91": 1
        },
        "1989": {
            "P89": 1
        },
        "1990": {
            "P90": 1
        },
        "1983": {
            "P83": 1
        }
    },
    "P Liviu": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Daphne Koller": {
        "2010": {
            "P10": 1
        },
        "2004": {
            "W04": 1
        }
    },
    "Richard Eckart": {
        "2014": {
            "P14": 1
        },
        "2013": {
            "P13": 1
        },
        "2006": {
            "W06": 1,
            "P06": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Zornitsa Kozareva": {
        "2010": {
            "P10": 1,
            "N10": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "Giinter Neumann": {
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "1991": {
            "E91": 1
        }
    },
    "Francis BOND": {
        "1994": {
            "A94": 1
        }
    },
    "Toru Hirano": {
        "2007": {
            "P07": 1
        }
    },
    "David A Wroblewski": {
        "1988": {
            "A88": 1
        }
    },
    "Yael Karov Shimon Edelmant": {
        "1998": {
            "J98": 1
        }
    },
    "Stephen J Green": {
        "1992": {
            "P92": 1
        }
    },
    "Dmitriy Dligach": {
        "2013": {
            "W13": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Markus Dr\u00a8ager": {
        "2012": {
            "E12": 1
        }
    },
    "Nikos Malandrakis": {
        "2012": {
            "S12": 1
        }
    },
    "Ulrike Pad\u00f3": {
        "2006": {
            "E06": 1
        }
    },
    "Cecilia O Alm": {
        "2015": {
            "W15": 1
        }
    },
    "Nut Limsopatham": {
        "2015": {
            "D15": 1
        }
    },
    "Rajakrishnan Rajkumar": {
        "2009": {
            "N09": 1
        }
    },
    "Jo Calder": {
        "1989": {
            "E89": 1
        }
    },
    "Ani": {
        "2010": {
            "W10": 2
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Rutu Mulkar": {
        "2006": {
            "W06": 1,
            "P06": 1
        }
    },
    "Espinosa Rajkumar White": {
        "2010": {
            "D10": 1
        }
    },
    "Fabio Pianesi": {
        "1991": {
            "E91": 1
        }
    },
    "G Carbonell": {
        "1983": {
            "J83": 1
        }
    },
    "Michael Heilman": {
        "2010": {
            "N10": 2,
            "W10": 1
        },
        "2011": {
            "D11": 1
        },
        "2014": {
            "W14": 2
        }
    },
    "Elisabeth Andr\u00e9": {
        "1997": {
            "W97": 1
        },
        "1991": {
            "E91": 1
        }
    },
    "Matt Gardner": {
        "2013": {
            "D13": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Weiwei": {
        "2015": {
            "P15": 1,
            "S15": 1
        }
    },
    "Riezler H King Crouch": {
        "2003": {
            "N03": 1
        }
    },
    "Bryan R Routledge": {
        "2011": {
            "D11": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Tim Van_de_Cruys": {
        "2010": {
            "W10": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Misbah Akram": {
        "2010": {
            "W10": 1
        }
    },
    "Gabani Sherman Solorio": {
        "2009": {
            "N09": 1
        }
    },
    "Boyan Bonev": {
        "2012": {
            "W12": 1
        }
    },
    "Martin Platek": {
        "1997": {
            "A97": 1
        }
    },
    "S Daniel": {
        "2011": {
            "P11": 1
        },
        "2015": {
            "Q15": 1
        }
    },
    "Sharon Tam": {
        "2014": {
            "D14": 1
        }
    },
    "G Kokkinakis": {
        "1999": {
            "E99": 1
        }
    },
    "Iker Manterola Saralegi": {
        "2011": {
            "D11": 1
        }
    },
    "Chuan-Jie": {
        "2015": {
            "W15": 1
        }
    },
    "Grace Chung": {
        "2004": {
            "P04": 1
        }
    },
    "D Gerard": {
        "1998": {
            "W98": 1
        }
    },
    "Craig W Thompson": {
        "1983": {
            "P83": 1
        }
    },
    "Marc Verhagen": {
        "2007": {
            "W07": 1
        }
    },
    "Ng Dasgupta M Niaz Arifin": {
        "2006": {
            "P06": 1
        }
    },
    "Anish Nair": {
        "2006": {
            "P06": 1
        }
    },
    "Sven Ristad G Thomas": {
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "Aria Sebastian Andrew": {
        "2011": {
            "D11": 1
        }
    },
    "Baden Hughes": {
        "2003": {
            "W03": 1
        }
    },
    "Mackay": {
        "2005": {
            "W05": 1
        }
    },
    "Peter Anick": {
        "2011": {
            "W11": 1
        }
    },
    "Matthias Buch-Kromann I\u00f8rn Korzen": {
        "2010": {
            "W10": 1
        }
    },
    "Paul Decitre": {
        "1987": {
            "E87": 1
        }
    },
    "Sohn Lee Rim": {
        "2009": {
            "P09": 1
        }
    },
    "Hayato Kobayashi Hiromi Wakaki Tomohiro Yamasaki Masaru Suzuki": {
        "2011": {
            "W11": 1
        }
    },
    "Nicolas B\u00e9chet Mathieu Roche": {
        "2010": {
            "W10": 1
        }
    },
    "Deana Pennell": {
        "2009": {
            "N09": 1
        }
    },
    "Andreas Maletti": {
        "2010": {
            "P10": 1,
            "W10": 1
        }
    },
    "Kessler": {
        "2013": {
            "D13": 1
        }
    },
    "Jonathan Dunn": {
        "2014": {
            "W14": 1,
            "P14": 1
        }
    },
    "Yuji": {
        "2000": {
            "W00": 1
        },
        "2001": {
            "W01": 1
        },
        "2002": {
            "W02": 1
        },
        "2004": {
            "W04": 1
        },
        "2011": {
            "W11": 1
        },
        "2013": {
            "W13": 2
        },
        "2015": {
            "W15": 1
        }
    },
    "Izumi": {
        "2009": {
            "P09": 1
        }
    },
    "Rajeev Agarwal": {
        "1992": {
            "P92": 1
        },
        "1995": {
            "P95": 1
        }
    },
    "Yaqi Wang": {
        "2015": {
            "W15": 2
        }
    },
    "Bo": {
        "2012": {
            "D12": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "S Lidia": {
        "2013": {
            "W13": 1
        }
    },
    "Helmut": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "D12": 1
        },
        "1997": {
            "W97": 1
        }
    },
    "Andreas Stolcket": {
        "2001": {
            "J01": 1
        }
    },
    "Purver Ginzburg Patrick Healey": {
        "2001": {
            "W01": 1
        }
    },
    "Congle Zhang": {
        "2010": {
            "P10": 1
        },
        "2011": {
            "P11": 1
        },
        "2015": {
            "Q15": 1
        }
    },
    "Victor Bowen": {
        "2015": {
            "D15": 1
        }
    },
    "By": {
        "1979": {
            "P79": 1
        }
    },
    "Chenyan Xiong": {
        "2013": {
            "D13": 1
        }
    },
    "Mike Conway": {
        "2010": {
            "W10": 1
        }
    },
    "M Sopena LLoberas L Moliner": {
        "1998": {
            "P98": 1
        }
    },
    "Andrew B Goldberg": {
        "2007": {
            "N07": 1
        }
    },
    "Sennrich": {
        "2015": {
            "D15": 1
        }
    },
    "Demitrios Master": {
        "2006": {
            "W06": 1
        }
    },
    "Robert Munro": {
        "2011": {
            "W11": 1
        }
    },
    "Seong-Bae Park Yoon-Shik Tae Se-Young Park": {
        "2006": {
            "P06": 1
        }
    },
    "Yutaka Kusanagi": {
        "1984": {
            "P84": 1
        }
    },
    "Cheung": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 1,
            "D10": 1
        }
    },
    "Sina ZarrieB": {
        "2011": {
            "P11": 1
        }
    },
    "Roxana": {
        "2009": {
            "W09": 1,
            "D09": 1
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Bing Zhang": {
        "2009": {
            "W09": 1
        }
    },
    "ilitoshi Miyai": {
        "1990": {
            "P90": 1
        }
    },
    "Catalina O Tudor": {
        "2012": {
            "W12": 1
        }
    },
    "Giancarlo": {
        "2004": {
            "W04": 1
        }
    },
    "Xiaojun Wan": {
        "2006": {
            "N06": 1
        },
        "2007": {
            "P07": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "P11": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "D14": 1
        },
        "2015": {
            "D15": 1,
            "P15": 1
        }
    },
    "Breck Baldwin": {
        "1997": {
            "A97": 1
        }
    },
    "Osamu FURUSEt": {
        "1998": {
            "P98": 1
        }
    },
    "Karin Sim Smith": {
        "2015": {
            "W15": 1
        }
    },
    "Anna Korhonen": {
        "2015": {
            "Q15": 1
        },
        "1998": {
            "P98": 1
        },
        "2014": {
            "Q14": 1,
            "P14": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Judith Klavans": {
        "2007": {
            "W07": 1
        }
    },
    "Stephen Wu": {
        "2011": {
            "W11": 1
        },
        "2013": {
            "S13": 1
        }
    },
    "C Mario": {
        "2004": {
            "N04": 1
        }
    },
    "Ehud Reitert": {
        "1990": {
            "P90": 1
        }
    },
    "Huang Chou Tzeng Lee Liu": {
        "2012": {
            "P12": 1
        }
    },
    "Atsushi Fujita Shuhei Kato Naoki Kato Satoshi": {
        "2007": {
            "W07": 1
        }
    },
    "A Michelle": {
        "2013": {
            "W13": 1
        }
    },
    "Enrico": {
        "2007": {
            "W07": 1
        }
    },
    "Ioan": {
        "2013": {
            "P13": 1
        }
    },
    "C James": {
        "2010": {
            "W10": 1
        },
        "1981": {
            "J81": 1
        }
    },
    "Wen-tau": {
        "2009": {
            "D09": 1
        },
        "2013": {
            "Q13": 1
        }
    },
    "Foad Hamidi": {
        "2013": {
            "W13": 1
        }
    },
    "Khe Chai Tou": {
        "2014": {
            "D14": 1
        }
    },
    "Bernard Merialdot": {
        "1994": {
            "J94": 1
        }
    },
    "Alexandre Passos": {
        "2014": {
            "W14": 1
        }
    },
    "William Black": {
        "2003": {
            "W03": 2
        }
    },
    "Silvia Quarteroni": {
        "2006": {
            "E06": 1
        }
    },
    "Emili Sapena": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "S10": 1
        }
    },
    "Katashi Nagao": {
        "2000": {
            "W00": 2
        },
        "1994": {
            "P94": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Sarmad Hussain": {
        "2010": {
            "N10": 1
        }
    },
    "Masaaki Nagata": {
        "2000": {
            "P00": 1
        },
        "2010": {
            "P10": 1
        },
        "2013": {
            "P13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "MOE-Microsoft Key Laboratory of Natural Language Processing": {
        "2010": {
            "N10": 1
        }
    },
    "Valerie Samn": {
        "2000": {
            "A00": 1
        }
    },
    "Bill McDowell": {
        "2014": {
            "Q14": 1
        }
    },
    "Sina Zarrie\u00df": {
        "2013": {
            "P13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Zhongqiang Huang Setiawan": {
        "2015": {
            "P15": 1
        }
    },
    "Salil Joshi Diptesh Kanojia": {
        "2013": {
            "N13": 1
        }
    },
    "Dimitra Gkatzia": {
        "2014": {
            "W14": 1,
            "P14": 1,
            "E14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Frank Fischer": {
        "2015": {
            "W15": 1
        }
    },
    "Hiroaki SAITO": {
        "2003": {
            "W03": 1
        }
    },
    "Galina Tremper": {
        "2010": {
            "P10": 1
        }
    },
    "Iryna Marc": {
        "2013": {
            "P13": 1
        }
    },
    "Lawrence": {
        "2011": {
            "W11": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Y Pengyu Michelle X Zahar": {
        "2004": {
            "P04": 1
        }
    },
    "Dirk Heylen Rieks op den_Akker": {
        "2007": {
            "W07": 1
        }
    },
    "Percy Liang Haghighi": {
        "2008": {
            "P08": 1
        }
    },
    "Norihito Yasuda": {
        "2007": {
            "P07": 1
        }
    },
    "Thomas P O'Harat": {
        "1999": {
            "P99": 1
        }
    },
    "Xiaoyan Degen Zezhong Yuansheng": {
        "2010": {
            "W10": 1
        }
    },
    "Yael Gertner": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "W09": 1
        },
        "2010": {
            "P10": 1
        }
    },
    "William Coster": {
        "2011": {
            "W11": 1
        }
    },
    "Robert Gaizauskas": {
        "2010": {
            "P10": 1
        },
        "2005": {
            "W05": 3
        },
        "2014": {
            "W14": 2
        }
    },
    "Leila Zilles": {
        "2013": {
            "D13": 1
        }
    },
    "Sisay Fissaha Adafre Maarten de_Rijke": {
        "2005": {
            "W05": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Markus G\u00a8artner": {
        "2013": {
            "P13": 1
        },
        "2014": {
            "P14": 1,
            "E14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Fabio Rinaldi": {
        "2004": {
            "W04": 1
        }
    },
    "David Traum": {
        "2000": {
            "A00": 1
        },
        "2008": {
            "W08": 2
        },
        "2015": {
            "W15": 1
        },
        "2009": {
            "W09": 1
        }
    },
    "Kristina": {
        "2011": {
            "P11": 2
        }
    },
    "Alexander E Richman": {
        "2008": {
            "P08": 1
        }
    },
    "Muhammad Usman Ghani Khan Rao Muhammad Adeel Nawab Yoshihiko": {
        "2012": {
            "W12": 1
        }
    },
    "Vlachos": {
        "2011": {
            "W11": 1
        }
    },
    "Matthew Lease": {
        "2006": {
            "N06": 1
        }
    },
    "Ani Nenkova": {
        "2008": {
            "P08": 2
        },
        "2009": {
            "P09": 1,
            "E09": 2
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "D12": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "P14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Einat Minkov": {
        "2012": {
            "P12": 1
        },
        "2015": {
            "D15": 1,
            "P15": 1
        }
    },
    "Alla": {
        "2009": {
            "W09": 1
        }
    },
    "Shuji Doshita": {
        "1984": {
            "P84": 1
        }
    },
    "David McAllester": {
        "1999": {
            "P99": 1
        }
    },
    "Tao Li Yi Zhang": {
        "2009": {
            "P09": 1
        }
    },
    "Eugenio Teresa Martin-Valdivia": {
        "2014": {
            "S14": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Jerry R Hobbs": {
        "1992": {
            "A92": 1
        },
        "1986": {
            "P86": 1
        },
        "2011": {
            "W11": 1
        },
        "1988": {
            "P88": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "David Chiang": {
        "2000": {
            "P00": 2,
            "W00": 1
        },
        "2001": {
            "P01": 1
        },
        "2005": {
            "P05": 1
        },
        "2007": {
            "P07": 1
        },
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Yasunori Mitsunobu Shimadat": {
        "1998": {
            "W98": 1
        }
    },
    "Mausam": {
        "2009": {
            "P09": 1
        }
    },
    "Hongsong Li Kenny Q Zhu Haixun Wang": {
        "2013": {
            "Q13": 1
        }
    },
    "Faruqui": {
        "2014": {
            "P14": 1,
            "E14": 1
        }
    },
    "Kenneth Church": {
        "2011": {
            "P11": 1,
            "D11": 1
        }
    },
    "Xiangji Huang": {
        "2003": {
            "W03": 1
        }
    },
    "David Jing Lu Hong": {
        "2009": {
            "P09": 1
        }
    },
    "James Alexander": {
        "1985": {
            "P85": 1
        }
    },
    "David Bamman": {
        "2013": {
            "P13": 1
        },
        "2014": {
            "Q14": 1,
            "P14": 2
        }
    },
    "Johan Boye": {
        "2014": {
            "W14": 1
        }
    },
    "Martin Molina": {
        "2009": {
            "W09": 1
        }
    },
    "Noriko Tomuro Apostolova": {
        "2012": {
            "W12": 1
        }
    },
    "Elsa Pecourt": {
        "2004": {
            "P04": 1
        }
    },
    "Michael Connor": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "W09": 1
        },
        "2010": {
            "P10": 1,
            "D10": 1
        }
    },
    "Graham Katz": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Isabel Segura-Bedmar": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Jee-Sun NAM": {
        "1997": {
            "W97": 1
        }
    },
    "Stephen Beale": {
        "1996": {
            "W96": 1
        },
        "1998": {
            "P98": 1
        },
        "2003": {
            "W03": 1
        },
        "2004": {
            "W04": 1
        },
        "2005": {
            "W05": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Janyce M Wiebet": {
        "1998": {
            "W98": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "Annemarie Friedrich": {
        "2014": {
            "W14": 1,
            "P14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Mikio Nakano": {
        "2008": {
            "W08": 1
        },
        "2011": {
            "W11": 1
        },
        "1991": {
            "P91": 1
        }
    },
    "Nicolas Nicolov": {
        "1996": {
            "W96": 1
        },
        "1999": {
            "E99": 1
        }
    },
    "Syin Chan": {
        "2000": {
            "P00": 1
        }
    },
    "Nitin Martin": {
        "2011": {
            "W11": 1
        }
    },
    "Mingjie Shuming Ji-Rong": {
        "2009": {
            "P09": 1
        }
    },
    "Lamia Tounsi": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Potts": {
        "2010": {
            "P10": 1
        }
    },
    "Umut Sulubacak Pamay": {
        "2015": {
            "W15": 1
        }
    },
    "de_Chris": {
        "2013": {
            "P13": 1
        }
    },
    "via Graph Partitioning": {
        "2014": {
            "J14": 1
        }
    },
    "Sander Wubben": {
        "2010": {
            "S10": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Klein": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "P09": 1
        },
        "2003": {
            "E03": 1
        }
    },
    "Jill F Lehman": {
        "2012": {
            "W12": 1
        }
    },
    "Irina Temnikova": {
        "2015": {
            "W15": 1
        }
    },
    "Yoshua Bengio": {
        "2004": {
            "P04": 1
        }
    },
    "James H Martin": {
        "2008": {
            "P08": 2
        },
        "2005": {
            "P05": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Hong Li": {
        "2009": {
            "E09": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Rob Koeling Carroll": {
        "2009": {
            "N09": 1
        }
    },
    "Frermann": {
        "2014": {
            "E14": 1
        }
    },
    "Arda Arzucan Suzan": {
        "2013": {
            "S13": 1
        }
    },
    "Alpha K Luk": {
        "1995": {
            "P95": 1
        }
    },
    "D Tibshirani": {
        "2014": {
            "P14": 1
        }
    },
    "Abhishek Tiwari": {
        "2015": {
            "K15": 1
        }
    },
    "Yujie Zhang": {
        "2006": {
            "P06": 1
        }
    },
    "Michael G Dyer Uri Zernik": {
        "1986": {
            "P86": 1
        }
    },
    "Reid Swanson": {
        "2006": {
            "P06": 1
        }
    },
    "Mo Ming Xiaohua Tiejun": {
        "2011": {
            "P11": 1
        }
    },
    "Ehud": {
        "2009": {
            "W09": 1
        },
        "2005": {
            "W05": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Thomas": {
        "1997": {
            "W97": 1
        },
        "2011": {
            "W11": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Bonnie Lynn Webber": {
        "1988": {
            "J88": 2,
            "P88": 1
        }
    },
    "Bran Boguraev": {
        "1985": {
            "E85": 1
        }
    },
    "Boyan Onyshkevych": {
        "1996": {
            "P96": 1
        }
    },
    "G C de_Matteo Elisa Marco": {
        "2015": {
            "P15": 1
        }
    },
    "George Baskaran Anoop": {
        "2012": {
            "P12": 1
        }
    },
    "Yuansheng": {
        "2006": {
            "W06": 1
        }
    },
    "Matthew Stone": {
        "2009": {
            "E09": 1
        },
        "2012": {
            "S12": 1
        },
        "2005": {
            "W05": 1
        },
        "1996": {
            "W96": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Jesse Alexandros Potamianos": {
        "2014": {
            "S14": 1
        }
    },
    "Yajuan": {
        "2009": {
            "D09": 1
        }
    },
    "Yves": {
        "2014": {
            "W14": 1
        }
    },
    "Jochen L Leidner": {
        "2003": {
            "W03": 1
        }
    },
    "Emilia Stoica": {
        "2009": {
            "W09": 1
        }
    },
    "Bradford W Miller": {
        "1996": {
            "P96": 1
        }
    },
    "Bender": {
        "2003": {
            "W03": 1
        }
    },
    "Jill Burstein Swapna": {
        "2014": {
            "P14": 1
        }
    },
    "Tohru Shimizu": {
        "2007": {
            "P07": 1
        }
    },
    "Zhenbiao Chen": {
        "2014": {
            "P14": 1
        }
    },
    "Burghard B Rieger": {
        "1984": {
            "P84": 1
        }
    },
    "Imad Tbahriti": {
        "2006": {
            "P06": 1
        }
    },
    "Jan Daciuk": {
        "2000": {
            "J00": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Shubin Zhao": {
        "2005": {
            "P05": 1
        }
    },
    "Rika Yoshii": {
        "1987": {
            "P87": 1
        },
        "1983": {
            "A83": 1
        }
    },
    "Rose McCabe": {
        "2014": {
            "W14": 1
        }
    },
    "Solorio Hasan": {
        "2013": {
            "W13": 1
        }
    },
    "Venkatesan Subramanian": {
        "2004": {
            "W04": 1
        }
    },
    "Information Science": {
        "2010": {
            "P10": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "B Benjamin": {
        "2010": {
            "W10": 1
        }
    },
    "Oi Yee": {
        "2015": {
            "W15": 1
        }
    },
    "ITU Turkish NLP Web Service": {
        "2014": {
            "E14": 1
        }
    },
    "Di_Eugenio Fossati Yu": {
        "2005": {
            "P05": 1
        }
    },
    "John Burger": {
        "2005": {
            "W05": 1
        },
        "1983": {
            "A83": 1
        }
    },
    "Chang Wang James Fan Aditya Kalyanpur David": {
        "2011": {
            "D11": 1
        }
    },
    "Keikichi": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Jeff Kubina": {
        "2013": {
            "W13": 1
        }
    },
    "Djam\u00b4e Seddah": {
        "2014": {
            "W14": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Ulf Hermjakob": {
        "2000": {
            "A00": 1
        },
        "2014": {
            "D14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Ziheng Jialu Zhong Rebecca J": {
        "2015": {
            "D15": 1
        }
    },
    "Rie Kubota Ando": {
        "2000": {
            "A00": 1
        }
    },
    "Antje": {
        "1998": {
            "W98": 1
        }
    },
    "Nattadaporn Lertcheva Wirote Aroonmanakun": {
        "2011": {
            "W11": 1
        }
    },
    "Jean-Michel Grandchamp": {
        "1995": {
            "P95": 1
        }
    },
    "Lidia Natalia Roman": {
        "2013": {
            "W13": 1
        }
    },
    "Tao Tao": {
        "2006": {
            "W06": 1,
            "N06": 1
        }
    },
    "Xipeng Zhu Chen": {
        "2015": {
            "D15": 1
        }
    },
    "Toshihiko Yanase Toshinori Miyoshi Kohsuke Yanai Misa Sato": {
        "2015": {
            "W15": 1
        }
    },
    "Rajesh Ranganath": {
        "2009": {
            "N09": 1,
            "D09": 1
        }
    },
    "Vicente Ordonez": {
        "2012": {
            "P12": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "K Joshi": {
        "1994": {
            "W94": 1
        }
    },
    "Kathryn Womack": {
        "2012": {
            "W12": 1
        }
    },
    "Lembersky Ordan": {
        "2011": {
            "D11": 1
        }
    },
    "Richard Johansson": {
        "2012": {
            "P12": 1,
            "W12": 2
        },
        "2006": {
            "E06": 1,
            "P06": 1
        },
        "2007": {
            "P07": 1,
            "S07": 1
        }
    },
    "Benjamin Schatz": {
        "2011": {
            "W11": 1
        }
    },
    "Nam Kim": {
        "2010": {
            "W10": 1
        }
    },
    "Microsoft QuickView Team": {
        "2012": {
            "P12": 1
        }
    },
    "Malu Castellanos": {
        "2013": {
            "D13": 1
        }
    },
    "Rub\u00b4en Izquierdo": {
        "2009": {
            "E09": 1
        },
        "2010": {
            "S10": 1
        }
    },
    "Filipe Mesquita Jordan Schmidek Denilson Barbosa": {
        "2013": {
            "D13": 1
        }
    },
    "Daniil Umanski": {
        "2010": {
            "P10": 1
        }
    },
    "Khalil Sima\u2019an": {
        "2007": {
            "P07": 1
        },
        "2009": {
            "W09": 1,
            "D09": 1
        },
        "2010": {
            "W10": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        },
        "2014": {
            "W14": 2
        },
        "2015": {
            "D15": 1,
            "W15": 1
        }
    },
    "Yu-Chun": {
        "2011": {
            "W11": 1
        }
    },
    "Johanna": {
        "2009": {
            "W09": 1
        },
        "2005": {
            "W05": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "Michael Ellsworth": {
        "2007": {
            "S07": 1
        }
    },
    "Kate Forbes-Riley": {
        "2009": {
            "W09": 1
        },
        "2004": {
            "W04": 1,
            "P04": 1
        }
    },
    "Diane Elaine Richard": {
        "2015": {
            "W15": 1
        }
    },
    "Kais": {
        "2014": {
            "S14": 1
        }
    },
    "David Duff": {
        "1998": {
            "P98": 1
        }
    },
    "Fr\u00b4ed\u00b4erik Bilhaut": {
        "2006": {
            "E06": 1
        }
    },
    "Heidi J Fox": {
        "2005": {
            "P05": 1
        }
    },
    "William Phillips": {
        "2002": {
            "W02": 1
        }
    },
    "Srinivasan Janarthanam": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "P10": 1
        }
    },
    "Be\u00b4ata Megyesi Tengstrand": {
        "2014": {
            "W14": 1
        }
    },
    "Tsang": {
        "2004": {
            "W04": 1
        }
    },
    "Wolfgang Seeker": {
        "2011": {
            "W11": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Koichiro Yoshino": {
        "2011": {
            "W11": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "I Alexander": {
        "2000": {
            "W00": 1
        },
        "2008": {
            "W08": 1
        },
        "2010": {
            "W10": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Kalika Bali Monojit": {
        "2014": {
            "W14": 1
        }
    },
    "Kudoh Matsumoto": {
        "2000": {
            "W00": 1
        }
    },
    "Richard Wicentowski": {
        "2010": {
            "S10": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Zsolt Sz\u00b4ant\u00b4o": {
        "2014": {
            "E14": 1
        }
    },
    "Franz Josef": {
        "2003": {
            "W03": 1
        }
    },
    "Hamid Poursepanj": {
        "2013": {
            "S13": 1
        }
    },
    "Lim": {
        "2005": {
            "P05": 1
        },
        "2006": {
            "W06": 1,
            "P06": 3
        }
    },
    "Lin": {
        "2003": {
            "N03": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "W13": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Satoru Ikehara": {
        "1992": {
            "A92": 1
        }
    },
    "Mari Broman": {
        "1999": {
            "W99": 1
        }
    },
    "Diamantino Caseiro": {
        "2009": {
            "N09": 1
        }
    },
    "Guido Boella": {
        "2000": {
            "W00": 1
        }
    },
    "Brad Huang": {
        "2014": {
            "D14": 1
        }
    },
    "Robert C Berwick": {
        "1984": {
            "J84": 1
        },
        "1985": {
            "P85": 2
        },
        "1982": {
            "J82": 1
        },
        "1983": {
            "P83": 1
        }
    },
    "Joel R Tetreault": {
        "2001": {
            "J01": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "Josef": {
        "2003": {
            "E03": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Tetsuya Ishikawa": {
        "2000": {
            "P00": 1
        }
    },
    "Jack": {
        "2012": {
            "N12": 1,
            "E12": 1
        }
    },
    "Dan Weld": {
        "2010": {
            "W10": 1
        }
    },
    "Akifumi Yoshimoto": {
        "2013": {
            "W13": 1
        }
    },
    "Arun S Maiya": {
        "2015": {
            "D15": 1
        }
    },
    "Eva M Duran Eppler": {
        "2013": {
            "W13": 1
        }
    },
    "Heppin Anna Ehrlemark": {
        "2014": {
            "W14": 1
        }
    },
    "Tejaswini Deoskar": {
        "2009": {
            "W09": 1
        },
        "2011": {
            "W11": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Ritesh Shah Pushpak": {
        "2013": {
            "W13": 1
        }
    },
    "Ching-Long Yeh Chris Mellishf": {
        "1997": {
            "J97": 1
        }
    },
    "Chris Reed": {
        "1998": {
            "P98": 1
        }
    },
    "R Delmonte": {
        "2009": {
            "W09": 1
        }
    },
    "Douglas Biber": {
        "1993": {
            "J93": 2
        }
    },
    "Ali": {
        "2014": {
            "D14": 1
        }
    },
    "Bryan Jurish Kay-Michael W\u00a8urzner": {
        "2013": {
            "W13": 1
        }
    },
    "Evangelos Derma tas George Kokkinakis": {
        "1995": {
            "J95": 1
        }
    },
    "Francesco Barbieri": {
        "2014": {
            "E14": 1
        }
    },
    "Amit Goyal": {
        "2009": {
            "N09": 1
        },
        "2010": {
            "W10": 2
        },
        "2011": {
            "D11": 1,
            "W11": 1
        },
        "2012": {
            "D12": 2
        }
    },
    "K Eric": {
        "2010": {
            "N10": 1
        }
    },
    "Congxing Cai": {
        "2010": {
            "N10": 1
        },
        "2012": {
            "N12": 1
        }
    },
    "Dayne Freitag": {
        "2009": {
            "W09": 1
        },
        "2005": {
            "W05": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Eva I Ejerhed": {
        "1988": {
            "A88": 1
        }
    },
    "Kepa Bengoetxea": {
        "2009": {
            "W09": 1
        }
    },
    "Mingli Wu": {
        "2006": {
            "P06": 1
        }
    },
    "Kuniko Saito Imamura": {
        "2009": {
            "P09": 1
        }
    },
    "Carolyn Penstein-Ros\u00b4e": {
        "2010": {
            "W10": 1
        }
    },
    "B S Dylan": {
        "2002": {
            "W02": 1
        }
    },
    "Andreas Raphael Jan Philip Nicole Hans Werner Matthias Philipp": {
        "2014": {
            "W14": 1
        }
    },
    "Trevor Karin Steven": {
        "2014": {
            "D14": 1
        }
    },
    "Chiang Knight Wei Wang": {
        "2009": {
            "N09": 1
        }
    },
    "Anagha Kulkarni": {
        "2008": {
            "P08": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "Siddharth Patwardhan": {
        "2005": {
            "P05": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "BC Burnaby": {
        "2006": {
            "W06": 1
        }
    },
    "Luigi Di": {
        "2013": {
            "P13": 1
        }
    },
    "A Barros DeRoeck": {
        "1994": {
            "A94": 1
        }
    },
    "Raymond Ng": {
        "2012": {
            "W12": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "Dan Klein": {
        "2003": {
            "N03": 1
        },
        "2004": {
            "W04": 1,
            "P04": 1
        },
        "2005": {
            "P05": 1
        },
        "2006": {
            "W06": 1,
            "P06": 2
        },
        "2007": {
            "P07": 2
        },
        "2008": {
            "P08": 2,
            "W08": 1
        },
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 1,
            "N10": 1,
            "D10": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "N12": 1,
            "D12": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "P14": 3
        }
    },
    "Kai Liu": {
        "2015": {
            "P15": 1
        }
    },
    "Tomohiro YAMASAKI Hiromi WAKAKI Masaru SUZUKI": {
        "2011": {
            "W11": 1
        }
    },
    "Swara Niloy Pawan": {
        "2014": {
            "W14": 1
        }
    },
    "Anas El_Isbihani": {
        "2006": {
            "W06": 1
        }
    },
    "Dehong Gao": {
        "2012": {
            "W12": 1
        }
    },
    "Ramesh Nallapati": {
        "2008": {
            "P08": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Jeremy Crowe": {
        "1995": {
            "P95": 1
        }
    },
    "Andrei Popescu-Belis": {
        "2011": {
            "P11": 1
        }
    },
    "Hailei Zhang": {
        "2008": {
            "W08": 1
        }
    },
    "Elisabetta Jezek": {
        "2010": {
            "S10": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Andrew Rosenberg": {
        "2009": {
            "N09": 1
        },
        "2004": {
            "N04": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "India": {
        "2013": {
            "W13": 1
        }
    },
    "ThuyLinh Nguyen": {
        "2008": {
            "W08": 1
        }
    },
    "Xiaojun": {
        "2006": {
            "N06": 1
        },
        "2014": {
            "D14": 1,
            "P14": 1
        }
    },
    "W Wang": {
        "2000": {
            "A00": 1
        }
    },
    "Dani\u00a8el_de_Kok": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        }
    },
    "Juan del Rosal": {
        "2011": {
            "P11": 1
        }
    },
    "Chen C Lee Science": {
        "2015": {
            "P15": 1
        }
    },
    "Tom Mitchell": {
        "2011": {
            "D11": 1
        }
    },
    "Raveesh Meena": {
        "2013": {
            "W13": 3
        },
        "2014": {
            "W14": 1
        }
    },
    "Paramveer S Dhillon": {
        "2009": {
            "P09": 1
        }
    },
    "Aljoscha": {
        "2011": {
            "W11": 1
        }
    },
    "Taniya": {
        "2011": {
            "P11": 1
        }
    },
    "Du Lin": {
        "2000": {
            "W00": 1
        }
    },
    "Emily Thomforde": {
        "2011": {
            "D11": 1
        }
    },
    "D Richardson": {
        "1998": {
            "P98": 1
        }
    },
    "Yoshimasa": {
        "2014": {
            "W14": 1
        }
    },
    "Rebecca J Schiffman": {
        "1986": {
            "P86": 1
        }
    },
    "Deepak": {
        "2003": {
            "N03": 1
        },
        "2004": {
            "N04": 1
        }
    },
    "Hugo Hernault Danushka Bollegala Mitsuru Ishizuka": {
        "2010": {
            "D10": 1
        }
    },
    "Heeyoung Lee": {
        "2012": {
            "D12": 1
        }
    },
    "Enrique Vidal": {
        "1998": {
            "W98": 1
        }
    },
    "Miguel Rios Aziz": {
        "2011": {
            "W11": 1
        }
    },
    "Maximilian K\u00a8oper": {
        "2015": {
            "W15": 1
        }
    },
    "Tahira Naseem": {
        "2010": {
            "D10": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Henk Harkema": {
        "2012": {
            "W12": 1
        }
    },
    "Adrian Corduneanu": {
        "1999": {
            "P99": 1
        }
    },
    "Haibin Liu": {
        "2011": {
            "W11": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Garoufi Koller": {
        "2010": {
            "P10": 1
        }
    },
    "Vincenzo": {
        "2004": {
            "W04": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "Amanda Bouffier Thierry Poibeau": {
        "2007": {
            "W07": 1
        }
    },
    "Lucien": {
        "2010": {
            "N10": 1
        }
    },
    "Bo\u017eo": {
        "2007": {
            "W07": 1
        }
    },
    "Ethan Selfridge": {
        "2010": {
            "W10": 1
        }
    },
    "Alex Mont": {
        "2008": {
            "W08": 1
        }
    },
    "Karin Kipper": {
        "2004": {
            "W04": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Garera Yarowsky": {
        "2009": {
            "E09": 1
        }
    },
    "Sadaoki Furui": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 2
        }
    },
    "Peter A Heeman": {
        "1991": {
            "P91": 1
        },
        "1995": {
            "J95": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "1998": {
            "W98": 1
        },
        "1999": {
            "J99": 1
        },
        "2000": {
            "A00": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "J11": 1
        }
    },
    "Thomas Graf Bradley Marcinek": {
        "2014": {
            "W14": 1
        }
    },
    "Giovanni Marchisio": {
        "2006": {
            "W06": 1
        }
    },
    "Van_and": {
        "2011": {
            "W11": 1
        }
    },
    "Ranta Angelov": {
        "2009": {
            "E09": 1
        }
    },
    "Mark Johnson'": {
        "1994": {
            "J94": 1
        }
    },
    "Mihael Arcan": {
        "2012": {
            "W12": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Jun Xu": {
        "2015": {
            "W15": 1,
            "P15": 1
        }
    },
    "Yamada Knight": {
        "2002": {
            "P02": 1
        }
    },
    "W Susan": {
        "2000": {
            "W00": 1
        }
    },
    "\u00b4Edouard": {
        "2014": {
            "D14": 1
        }
    },
    "Olatz Arregi": {
        "2009": {
            "W09": 1
        }
    },
    "Eleazar Eskin": {
        "2000": {
            "A00": 1
        }
    },
    "Sean Szumlanski": {
        "2011": {
            "W11": 1
        }
    },
    "Kristian Woodsend": {
        "2010": {
            "D10": 1
        }
    },
    "Kemal Oflazer": {
        "2013": {
            "N13": 1,
            "W13": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "Feng Jiao": {
        "2006": {
            "P06": 1
        }
    },
    "Ba\u011fr\u0131 B\u00f6ltekin": {
        "2015": {
            "W15": 1
        }
    },
    "Sebastian Spiegler": {
        "2010": {
            "P10": 1
        }
    },
    "Colin": {
        "2003": {
            "W03": 1
        },
        "2012": {
            "W12": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Schulz aMartin Honeck aUdo Hahn": {
        "2002": {
            "W02": 1
        }
    },
    "Pavel Pecina": {
        "2010": {
            "W10": 1
        },
        "2005": {
            "P05": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Joseph Turian": {
        "2006": {
            "W06": 1
        }
    },
    "Sebastiaan van": {
        "2003": {
            "J03": 1
        }
    },
    "Alan Lee": {
        "2008": {
            "W08": 1
        }
    },
    "Francis Bond": {
        "1998": {
            "P98": 1
        },
        "2003": {
            "P03": 1
        },
        "2004": {
            "W04": 1
        },
        "2006": {
            "W06": 1
        },
        "2009": {
            "P09": 1
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "P13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Binh T Nguyen": {
        "2015": {
            "W15": 1
        }
    },
    "C Raymond Perrault": {
        "1984": {
            "J84": 1
        },
        "1980": {
            "J80": 1
        }
    },
    "Qingcai": {
        "2015": {
            "P15": 1
        }
    },
    "Liling Tan": {
        "2015": {
            "W15": 1,
            "S15": 1
        }
    },
    "Kanerva": {
        "2014": {
            "W14": 1
        }
    },
    "Albert": {
        "2013": {
            "W13": 1
        }
    },
    "David Kauchak": {
        "2011": {
            "W11": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Marjorie McShane": {
        "2003": {
            "W03": 1
        },
        "2004": {
            "W04": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Katsuya Masuda": {
        "2003": {
            "P03": 1
        }
    },
    "Ruben A": {
        "2012": {
            "W12": 1
        }
    },
    "Langkilde Knight": {
        "1998": {
            "P98": 1
        }
    },
    "Tadashi": {
        "2015": {
            "W15": 1
        }
    },
    "Yamangil M Shieber": {
        "2010": {
            "P10": 1
        }
    },
    "Fumiyo Fukumoto": {
        "1998": {
            "P98": 1
        },
        "2010": {
            "W10": 1
        },
        "1997": {
            "A97": 1
        },
        "2006": {
            "P06": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Knight": {
        "2009": {
            "P09": 1
        }
    },
    "KIYONO TSUJII": {
        "1994": {
            "A94": 1
        }
    },
    "Jun Kang": {
        "2011": {
            "P11": 1
        }
    },
    "Yael Ravin": {
        "1990": {
            "P90": 1
        }
    },
    "C Paul": {
        "2007": {
            "W07": 1
        }
    },
    "Sid Upadhyay": {
        "2011": {
            "W11": 1
        }
    },
    "Ivan": {
        "2013": {
            "W13": 1
        }
    },
    "C Davis": {
        "1998": {
            "P98": 1
        }
    },
    "Josh Weissbock": {
        "2013": {
            "S13": 1
        }
    },
    "Guillem Gasc\u00f3": {
        "2010": {
            "N10": 1
        }
    },
    "Alexandros": {
        "2015": {
            "W15": 1
        }
    },
    "M Sanda": {
        "2011": {
            "D11": 1
        },
        "2012": {
            "S12": 1
        }
    },
    "Yotaro Watanabe": {
        "2010": {
            "P10": 1
        }
    },
    "Robert Leaman Zhiyong Lu": {
        "2014": {
            "W14": 1
        }
    },
    "Baobao Chang": {
        "2015": {
            "D15": 1
        }
    },
    "Gregory F Coppola": {
        "2013": {
            "P13": 1
        }
    },
    "Koichiro Ishihara": {
        "1984": {
            "P84": 1
        }
    },
    "Marion Matteo Marco": {
        "2015": {
            "P15": 1
        }
    },
    "Srinivasan": {
        "2009": {
            "W09": 2
        },
        "2010": {
            "W10": 1
        }
    },
    "George Anton": {
        "1997": {
            "W97": 1
        }
    },
    "ZHOU GuoDong SU Jian ZHANG Jie ZHANG Min": {
        "2005": {
            "P05": 1
        }
    },
    "Chris Dyer": {
        "2010": {
            "P10": 1,
            "N10": 2
        },
        "2011": {
            "P11": 2,
            "D11": 1,
            "W11": 2
        },
        "2012": {
            "S12": 1,
            "D12": 1
        },
        "2014": {
            "Q14": 1,
            "P14": 2
        },
        "2015": {
            "D15": 1
        }
    },
    "Afsaneh Fazly": {
        "2005": {
            "W05": 1
        },
        "2006": {
            "E06": 1
        },
        "2007": {
            "W07": 1
        },
        "2008": {
            "W08": 1
        },
        "2012": {
            "S12": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Carolyn Penstein Ros\u00e9": {
        "1996": {
            "W96": 1
        },
        "1998": {
            "P98": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Martijn Wieling": {
        "2009": {
            "W09": 2
        }
    },
    "Florian R Oliver": {
        "2014": {
            "W14": 1
        }
    },
    "Lionel Cl\u00b4ement": {
        "2003": {
            "P03": 1
        }
    },
    "Michael Elhadad": {
        "2014": {
            "P14": 1
        },
        "1990": {
            "P90": 1
        },
        "1997": {
            "J97": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Manfred Klenner": {
        "2009": {
            "E09": 1
        },
        "2011": {
            "W11": 1
        },
        "2006": {
            "E06": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Goran": {
        "2013": {
            "S13": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Qin Gao": {
        "2010": {
            "W10": 1
        }
    },
    "Allan Ramsay": {
        "1989": {
            "E89": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Marius Kloft": {
        "2014": {
            "W14": 1
        }
    },
    "Allan Third": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Changki": {
        "2004": {
            "N04": 1
        }
    },
    "Seokhwan Kim": {
        "2009": {
            "N09": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Snigdha Chaturvedi": {
        "2014": {
            "P14": 1
        }
    },
    "V Vinyals Wojciech": {
        "2015": {
            "P15": 1
        }
    },
    "Frances Yung": {
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 2
        }
    },
    "Yahui GAO": {
        "2010": {
            "W10": 1
        }
    },
    "Shi-Cai Yang Mei-Juan Liu": {
        "2010": {
            "S10": 1
        }
    },
    "Anatole": {
        "2010": {
            "W10": 1
        }
    },
    "Matthew Honnibal": {
        "2010": {
            "P10": 1,
            "S10": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Shifroni Oman": {
        "1992": {
            "A92": 1
        }
    },
    "Eneko": {
        "2001": {
            "W01": 1
        }
    },
    "Ce Zhang Feng Niu Christopher R\u00b4e Jude Shavlik": {
        "2012": {
            "P12": 1
        }
    },
    "Ryan McDonald": {
        "2005": {
            "P05": 1
        },
        "2006": {
            "E06": 2,
            "W06": 1
        },
        "2008": {
            "P08": 2
        },
        "2009": {
            "N09": 1,
            "E09": 1
        },
        "2010": {
            "N10": 1
        },
        "2011": {
            "D11": 1
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Carolyn Penstein Rose": {
        "1995": {
            "P95": 1
        }
    },
    "Sydney": {
        "2006": {
            "W06": 1
        }
    },
    "Pavia Fondazione": {
        "2015": {
            "W15": 1
        }
    },
    "Karthik": {
        "2009": {
            "W09": 1
        }
    },
    "Islam Beltagy": {
        "2015": {
            "W15": 1
        }
    },
    "Keith Vertanen Per Ola Kristensson": {
        "2011": {
            "D11": 1
        }
    },
    "Shachar Mirkin": {
        "2009": {
            "E09": 1
        },
        "2010": {
            "P10": 1
        },
        "2013": {
            "P13": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Hongbin Zhang": {
        "2014": {
            "D14": 1
        }
    },
    "Anurag Gupta": {
        "2003": {
            "P03": 1
        }
    },
    "S\u00f6ren Laue": {
        "2012": {
            "N12": 1
        }
    },
    "Diana Inkpen": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "N12": 1,
            "W12": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Andrew McCallumn": {
        "1999": {
            "W99": 1
        }
    },
    "Thien Nguyen": {
        "2006": {
            "W06": 1
        }
    },
    "Johannes Matiasek Trost": {
        "1998": {
            "P98": 1
        }
    },
    "E J Briscoe": {
        "1984": {
            "P84": 1
        }
    },
    "Hannah Davis": {
        "2014": {
            "W14": 1
        }
    },
    "Whitney L Cade": {
        "2011": {
            "W11": 1
        }
    },
    "Abby Levenberg": {
        "2009": {
            "D09": 1
        },
        "2010": {
            "N10": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Ann Marie Rabke": {
        "1980": {
            "P80": 1
        }
    },
    "Beryl Hoffman": {
        "1992": {
            "P92": 1
        },
        "1995": {
            "E95": 1
        }
    },
    "Mark Yatskar": {
        "2010": {
            "N10": 1
        }
    },
    "TOKUNAGA Takenobu": {
        "1996": {
            "W96": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "Hui Fang": {
        "2008": {
            "P08": 1
        }
    },
    "Krasimir Angelov": {
        "2009": {
            "E09": 1
        }
    },
    "Gerard Ligozat": {
        "1985": {
            "E85": 1
        }
    },
    "Andr\u00b4e Lynum": {
        "2014": {
            "S14": 1
        }
    },
    "Kentaro Inui": {
        "2003": {
            "W03": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Alan M Frisch": {
        "1982": {
            "P82": 1
        }
    },
    "Lei Chen": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Yun-Nung Chen": {
        "2012": {
            "N12": 2
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1,
            "P15": 1
        }
    },
    "R Galley": {
        "2007": {
            "N07": 1
        }
    },
    "Robert Wilensky": {
        "1980": {
            "P80": 1
        },
        "1988": {
            "J88": 1
        }
    },
    "Jos\u00e9 M G\u00f3mez": {
        "2014": {
            "W14": 1
        }
    },
    "Constantin": {
        "2009": {
            "W09": 1
        },
        "2003": {
            "W03": 1
        }
    },
    "Fernando Garcia": {
        "2013": {
            "W13": 1
        }
    },
    "Jenna Veronika Filip": {
        "2015": {
            "W15": 1
        }
    },
    "Joshua S Albrecht": {
        "2007": {
            "P07": 2
        }
    },
    "A Caraballo Charniak": {
        "1999": {
            "W99": 1
        }
    },
    "Spyros Matsoukas": {
        "2009": {
            "W09": 1
        }
    },
    "Bowen Zhou": {
        "2010": {
            "P10": 1
        }
    },
    "Carolyn P Ros\u00b4e": {
        "2003": {
            "W03": 2
        }
    },
    "CA": {
        "2002": {
            "W02": 1
        },
        "2003": {
            "N03": 2
        },
        "2004": {
            "N04": 4
        },
        "2005": {
            "W05": 2
        },
        "2006": {
            "N06": 2
        },
        "2007": {
            "W07": 2
        },
        "2008": {
            "P08": 1,
            "W08": 2
        },
        "2010": {
            "N10": 1
        },
        "2011": {
            "P11": 2,
            "W11": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "P13": 3,
            "W13": 1
        }
    },
    "Blaise Thomson": {
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Costa Branco": {
        "2010": {
            "P10": 1
        }
    },
    "Hrafn Loftsson": {
        "2009": {
            "E09": 1
        }
    },
    "Utt": {
        "2014": {
            "Q14": 1
        }
    },
    "Kazuhide YAMAMOTO": {
        "2012": {
            "W12": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Namhee Kwon": {
        "2003": {
            "W03": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Don Comeau": {
        "2012": {
            "W12": 1
        }
    },
    "Gabor Angeli": {
        "2012": {
            "N12": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Xiwu Han": {
        "2006": {
            "P06": 1
        }
    },
    "Leonid Rachevsky": {
        "2009": {
            "W09": 1
        }
    },
    "Figueiredo": {
        "2012": {
            "N12": 1
        }
    },
    "Eugenio Martinez-C\u00b4amara": {
        "2014": {
            "S14": 1
        }
    },
    "Matt Hohensee": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "N12": 1
        }
    },
    "Nicholas Dames": {
        "2010": {
            "P10": 1
        }
    },
    "Martin Haulrich": {
        "2010": {
            "P10": 1
        }
    },
    "Cheng Niu": {
        "2000": {
            "A00": 1
        },
        "2003": {
            "P03": 1,
            "W03": 2
        },
        "2004": {
            "P04": 1
        }
    },
    "MK AA": {
        "2011": {
            "P11": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Zhengzhong Liu": {
        "2015": {
            "W15": 1
        }
    },
    "Saiyam Kohli": {
        "2011": {
            "W11": 1
        }
    },
    "Matthew Broadhead": {
        "1997": {
            "W97": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Yang A Heeman": {
        "2007": {
            "N07": 1
        }
    },
    "Jeffrey": {
        "2014": {
            "W14": 1
        },
        "2006": {
            "W06": 1,
            "P06": 1
        }
    },
    "Surdeanu Harabagiu Williams Aarseth": {
        "2003": {
            "P03": 1
        }
    },
    "Giovanni Da San Qatar Computing Research Institute": {
        "2015": {
            "P15": 1
        }
    },
    "Abdulrahman Almuhareb Ibrahim Alkharashi Lama AL Saud Haya Altuwaijri": {
        "2013": {
            "W13": 1
        }
    },
    "J Passonneau Diane": {
        "1997": {
            "J97": 1
        }
    },
    "Ricardo Augusto Hoffmann Bion": {
        "2010": {
            "W10": 1
        }
    },
    "Mehrdad Alizadeh": {
        "2010": {
            "W10": 1
        }
    },
    "Hui Liu": {
        "2007": {
            "W07": 1
        }
    },
    "Hui Lin": {
        "2010": {
            "N10": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "J Scott McCarley": {
        "1999": {
            "P99": 1
        }
    },
    "Asad B Sayeed": {
        "2010": {
            "N10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Fazel Keshtkar": {
        "2010": {
            "W10": 1
        }
    },
    "Keelan Evanini": {
        "2012": {
            "N12": 1
        },
        "2013": {
            "N13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Helena Hong Cao": {
        "2009": {
            "W09": 2
        }
    },
    "Tomoya Mizumoto Masato Mita Yuji": {
        "2015": {
            "W15": 1
        }
    },
    "Arantza Diaz de": {
        "2014": {
            "W14": 1
        }
    },
    "Sabine Schulte im": {
        "2002": {
            "P02": 1
        },
        "2003": {
            "E03": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 3
        }
    },
    "Shiwen Yu": {
        "2010": {
            "W10": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Feng Lapata": {
        "2008": {
            "P08": 1
        },
        "2010": {
            "P10": 1
        }
    },
    "P Cabral": {
        "2012": {
            "W12": 1
        }
    },
    "Takenobu Tokunaga": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "P10": 1
        },
        "2013": {
            "W13": 2
        },
        "2006": {
            "E06": 1
        }
    },
    "Shiqi Zhao": {
        "2009": {
            "P09": 1
        }
    },
    "T Heinze": {
        "2006": {
            "W06": 1
        }
    },
    "Russell Beckley": {
        "2013": {
            "D13": 1
        }
    },
    "Stephan M Kerpedjiev": {
        "1992": {
            "A92": 1
        }
    },
    "Morgan Sonderegger": {
        "2010": {
            "P10": 1
        }
    },
    "Satinder": {
        "2014": {
            "W14": 1
        }
    },
    "Jannik Str\u00a8otgen Julian Zell Michael": {
        "2013": {
            "S13": 1
        }
    },
    "Karl-Michael Schneider": {
        "2003": {
            "E03": 1
        }
    },
    "Timothy Dozat": {
        "2013": {
            "W13": 1
        }
    },
    "Peter Anickt": {
        "1993": {
            "J93": 1
        }
    },
    "Matt Taddy": {
        "2015": {
            "P15": 1
        }
    },
    "Stephen A Boxwell": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "D10": 1
        }
    },
    "Carl J Pollard": {
        "1987": {
            "P87": 1
        }
    },
    "Arnaldo Candido Jr": {
        "2009": {
            "W09": 1
        }
    },
    "Amy Bellmore Jun-Ming Xu": {
        "2012": {
            "N12": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Luka Nerima": {
        "2003": {
            "E03": 2
        }
    },
    "Roberto": {
        "2009": {
            "W09": 1
        },
        "2011": {
            "D11": 1
        },
        "2013": {
            "W13": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Roberts": {
        "2014": {
            "D14": 1
        }
    },
    "R James": {
        "2012": {
            "D12": 1
        },
        "1997": {
            "W97": 1
        }
    },
    "Miran Pobar": {
        "2014": {
            "W14": 1
        }
    },
    "Omer Kareem": {
        "2004": {
            "N04": 1
        }
    },
    "Angus Roberts": {
        "2005": {
            "P05": 1
        }
    },
    "Vivekananda Gayen Kamal Sarkar": {
        "2013": {
            "W13": 1
        }
    },
    "Katja Markert": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "N09": 1
        },
        "2010": {
            "P10": 1,
            "N10": 1
        },
        "2003": {
            "P03": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Peter Sch\u00a8uller": {
        "2013": {
            "W13": 1
        }
    },
    "Songyot David": {
        "2014": {
            "D14": 1
        }
    },
    "Eitaro Fujioka": {
        "2000": {
            "P00": 1
        }
    },
    "Ari": {
        "2009": {
            "P09": 1,
            "W09": 1
        },
        "2010": {
            "D10": 1
        }
    },
    "Katja": {
        "2013": {
            "W13": 1
        }
    },
    "Vaibhav Sudeshna Anupam": {
        "2007": {
            "W07": 1
        }
    },
    "M Nanette": {
        "1997": {
            "W97": 1
        }
    },
    "Klaus Macherey": {
        "2011": {
            "P11": 1
        }
    },
    "Mark Steedman": {
        "2011": {
            "D11": 1
        },
        "1988": {
            "J88": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "E14": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "Raul Guerra": {
        "2012": {
            "D12": 1
        }
    },
    "Igor A Bolshakov": {
        "2004": {
            "W04": 1
        }
    },
    "Helen Wright Hastie": {
        "2002": {
            "P02": 1
        }
    },
    "Reinhild Barkey": {
        "2014": {
            "W14": 1
        }
    },
    "Somayajulu G Sripada": {
        "2003": {
            "E03": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Moschitti Quarteroni": {
        "2008": {
            "P08": 1
        }
    },
    "Wenjie Li": {
        "2010": {
            "S10": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Jie Jiang": {
        "2010": {
            "D10": 1,
            "W10": 1
        }
    },
    "Erwan Moreau": {
        "2012": {
            "W12": 2
        }
    },
    "Layla El_Asri Romain Laroche": {
        "2013": {
            "W13": 1
        }
    },
    "Vanessa Wei": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Joanna Mrozinski": {
        "2006": {
            "N06": 1
        }
    },
    "Michael Maxwell": {
        "2015": {
            "W15": 1
        }
    },
    "Daichi Mochihashi Takeshi Yamada Naonori Ueda": {
        "2009": {
            "P09": 1
        }
    },
    "Kern": {
        "2014": {
            "W14": 1
        }
    },
    "Bing Liu Riddhiman Ghosh": {
        "2013": {
            "D13": 1
        }
    },
    "William D Lewis": {
        "2009": {
            "W09": 1,
            "E09": 2
        },
        "2011": {
            "W11": 1
        },
        "2013": {
            "W13": 2
        },
        "2015": {
            "W15": 1
        }
    },
    "John P McCrae": {
        "2015": {
            "W15": 1
        }
    },
    "Liang Congrui Xiaojun Xiaoming Yan": {
        "2011": {
            "D11": 1
        }
    },
    "S Dhillon Partha Pratim Crammer": {
        "2010": {
            "P10": 1
        }
    },
    "Josef van": {
        "2006": {
            "W06": 1
        },
        "2007": {
            "W07": 1
        },
        "2008": {
            "W08": 1
        },
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 2
        },
        "2015": {
            "W15": 1
        }
    },
    "Peter Potash": {
        "2015": {
            "D15": 1,
            "S15": 1
        }
    },
    "Eric Nyberg": {
        "2009": {
            "N09": 1
        },
        "2004": {
            "N04": 1,
            "P04": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Akikazu Takeuchi": {
        "1994": {
            "P94": 1
        }
    },
    "Nicola Cancedda": {
        "2000": {
            "A00": 1
        },
        "2011": {
            "W11": 1
        },
        "2013": {
            "J13": 1
        }
    },
    "Renfen Hu": {
        "2014": {
            "W14": 1
        }
    },
    "Peijie Kaiduo Hong Ye": {
        "2015": {
            "W15": 1
        }
    },
    "Universit`a di_Roma \u201cLa Sapienza\u201d": {
        "2006": {
            "J06": 1
        }
    },
    "Tillmann Al-Onaizan Saab": {
        "2014": {
            "W14": 1
        }
    },
    "Jade Goldstein-Stewart Ransom Winder Roberta Evans Sabin": {
        "2009": {
            "E09": 1
        }
    },
    "Neumann Rolf Backofent Judith Baurt Markus Christian": {
        "1997": {
            "A97": 1
        }
    },
    "Marius": {
        "2013": {
            "W13": 1
        }
    },
    "Wayne Ward": {
        "2005": {
            "P05": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Toshiaki Yoshino": {
        "1985": {
            "E85": 1
        }
    },
    "Jui-Feng Yeh": {
        "2006": {
            "P06": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Wei Xu": {
        "2000": {
            "W00": 1
        },
        "2013": {
            "W13": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Hsin-Hsi": {
        "2000": {
            "W00": 1
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Leusch Matusov": {
        "2008": {
            "D08": 1
        }
    },
    "Su Jian": {
        "2004": {
            "P04": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Josef Och Ney": {
        "2002": {
            "P02": 1
        },
        "2003": {
            "W03": 1
        }
    },
    "Joshua Wilson": {
        "2015": {
            "W15": 1
        }
    },
    "Maik St\u00a8uhrenberg": {
        "2014": {
            "W14": 1
        }
    },
    "A Diaz de": {
        "2004": {
            "W04": 1
        }
    },
    "Eric Brill": {
        "1991": {
            "P91": 1
        },
        "1992": {
            "A92": 1
        },
        "1993": {
            "P93": 1
        },
        "1998": {
            "P98": 2
        },
        "2000": {
            "A00": 1,
            "P00": 1,
            "W00": 1
        },
        "2001": {
            "P01": 1
        }
    },
    "Lindsay J Evett": {
        "1998": {
            "P98": 1
        }
    },
    "\u00c9ric Villemonte de_la": {
        "2005": {
            "W05": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Caroline Brun": {
        "2000": {
            "W00": 1
        },
        "2012": {
            "N12": 1,
            "W12": 1
        },
        "2014": {
            "S14": 1
        }
    },
    "Ravi Teja Rachakonda": {
        "2011": {
            "W11": 1
        }
    },
    "Changsong Liu": {
        "2013": {
            "D13": 1
        }
    },
    "Doina Caragea": {
        "2010": {
            "S10": 1
        }
    },
    "Jean": {
        "2006": {
            "W06": 1
        }
    },
    "Desmond Elliott": {
        "2013": {
            "D13": 1
        }
    },
    "Vadas R Curran": {
        "2008": {
            "P08": 1
        }
    },
    "Andreas Vlachos": {
        "2009": {
            "D09": 1
        },
        "2010": {
            "W10": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "Q14": 1,
            "W14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "C Peter": {
        "1999": {
            "W99": 1
        }
    },
    "Furu Bing Li Ting Ming": {
        "2014": {
            "D14": 1
        }
    },
    "Abdul Rauf Saeed": {
        "2013": {
            "W13": 1
        }
    },
    "Somayajulu Sripada": {
        "2008": {
            "W08": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "McIntosh R Curran": {
        "2009": {
            "P09": 1
        }
    },
    "Chengqing Zong": {
        "2010": {
            "P10": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Tang Enya Kong": {
        "1998": {
            "P98": 1
        }
    },
    "Pontus Tomoko Jin-Dong Sophia": {
        "2012": {
            "W12": 1
        }
    },
    "Alexis Palmer": {
        "2013": {
            "S13": 1
        },
        "2014": {
            "W14": 1,
            "P14": 1
        },
        "2007": {
            "W07": 1,
            "P07": 1
        }
    },
    "Gerber": {
        "2010": {
            "W10": 1
        }
    },
    "Anupam": {
        "2008": {
            "W08": 1
        }
    },
    "Samira Jennifer Tomek Veena": {
        "2013": {
            "W13": 1
        }
    },
    "Mats Rooth": {
        "2001": {
            "P01": 1
        },
        "2009": {
            "W09": 1
        },
        "1999": {
            "P99": 1
        },
        "1991": {
            "P91": 1
        }
    },
    "Amy Ogan": {
        "2012": {
            "W12": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Andrew": {
        "1997": {
            "W97": 1
        },
        "2003": {
            "W03": 1
        },
        "2004": {
            "N04": 2
        },
        "2005": {
            "W05": 1
        },
        "2006": {
            "W06": 1
        },
        "2010": {
            "N10": 1
        },
        "2012": {
            "N12": 1,
            "W12": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "D14": 2,
            "W14": 1
        }
    },
    "Chenxi Zhu": {
        "2015": {
            "D15": 1
        }
    },
    "Mark Chaudhary": {
        "2004": {
            "W04": 1
        }
    },
    "Andrei": {
        "1997": {
            "W97": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Yuval Krymolowski": {
        "2000": {
            "P00": 1
        }
    },
    "Srini Narayanan": {
        "2014": {
            "W14": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Yigit Kiran": {
        "2012": {
            "N12": 1
        }
    },
    "Andrea": {
        "2014": {
            "D14": 1
        }
    },
    "Jan Tore Lonning": {
        "1989": {
            "E89": 1
        }
    },
    "Dragomir Radev": {
        "2010": {
            "P10": 1,
            "D10": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Veeramachaneni Kumar": {
        "2009": {
            "W09": 1
        }
    },
    "Luan Nguyen": {
        "2009": {
            "P09": 1
        }
    },
    "Simon Ostermann": {
        "2015": {
            "W15": 1
        }
    },
    "\u2020Shujie Liu": {
        "2012": {
            "P12": 1
        }
    },
    "CA Stanford": {
        "2012": {
            "D12": 1
        }
    },
    "Julio Gonzalo Anselrno Peilas Felisa Verdejo": {
        "1999": {
            "W99": 1
        }
    },
    "Bonnie Dorr": {
        "2012": {
            "W12": 1
        },
        "1990": {
            "P90": 1
        }
    },
    "Abigail Andy Gregorowicz": {
        "2003": {
            "W03": 1
        }
    },
    "David Allport": {
        "1988": {
            "A88": 1
        }
    },
    "Marwa Ragheb": {
        "2012": {
            "W12": 1
        },
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Junko Hosaka Judice L Y Koh Akihiko Konagaya": {
        "2003": {
            "E03": 1
        }
    },
    "Slav Petrov": {
        "2006": {
            "W06": 1,
            "P06": 1
        },
        "2007": {
            "N07": 1
        },
        "2008": {
            "W08": 1
        },
        "2010": {
            "D10": 1
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "P Hanna": {
        "2006": {
            "P06": 1
        }
    },
    "Astha Agarwal": {
        "2015": {
            "D15": 1
        }
    },
    "Suzanne Mingmin Ge": {
        "2011": {
            "W11": 1
        }
    },
    "Yang Chen Wei": {
        "2015": {
            "P15": 1
        }
    },
    "Damianos Karakos": {
        "2008": {
            "P08": 1
        }
    },
    "Nagarajan": {
        "2009": {
            "W09": 1
        }
    },
    "Bingquan Liu": {
        "2010": {
            "P10": 1,
            "W10": 2
        },
        "2013": {
            "P13": 1
        }
    },
    "Susanne Riehemann": {
        "2004": {
            "N04": 1
        }
    },
    "Annette Rios Richard Castro Mamani": {
        "2014": {
            "W14": 1
        }
    },
    "' Jr": {
        "1987": {
            "J87": 1
        }
    },
    "Nathan Eagle": {
        "2004": {
            "W04": 1
        }
    },
    "Sonja H\u00a8uwel": {
        "2006": {
            "P06": 1
        }
    },
    "Brian Kjersten": {
        "2012": {
            "N12": 1
        }
    },
    "Roi Reichart": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "D10": 1
        },
        "2007": {
            "P07": 2
        },
        "2014": {
            "Q14": 1,
            "W14": 1
        },
        "2015": {
            "Q15": 1,
            "K15": 1
        }
    },
    "Sameer Maskey": {
        "2013": {
            "N13": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Francesco Mambrini": {
        "2013": {
            "W13": 1
        }
    },
    "Elijah Mayfield": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "W10": 1
        }
    },
    "L Padro Daude": {
        "1999": {
            "W99": 1
        }
    },
    "Miguel Ballesteros": {
        "2012": {
            "S12": 1
        }
    },
    "Ellen Dodge": {
        "2015": {
            "W15": 1
        }
    },
    "Alessandro Lopopolo Emiel van_Miltenburg": {
        "2015": {
            "W15": 1
        }
    },
    "Yi-Chia Wang": {
        "2010": {
            "N10": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Hal Daum\u00e9": {
        "2012": {
            "D12": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Noura Farra": {
        "2013": {
            "P13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Min Tang": {
        "2002": {
            "P02": 1
        }
    },
    "Antonio Molina": {
        "2001": {
            "W01": 1
        }
    },
    "Sokolov Jehl Hieber": {
        "2013": {
            "D13": 1
        }
    },
    "Lillian Lee": {
        "1993": {
            "P93": 1
        },
        "1997": {
            "E97": 2,
            "P97": 2
        },
        "1999": {
            "P99": 1
        },
        "2000": {
            "A00": 1
        },
        "2009": {
            "N09": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "W11": 1
        },
        "2014": {
            "W14": 1,
            "P14": 1
        }
    },
    "Ra\u00fal Santos de_la Markku Turunen Jaakko Hakulinen Debora Field": {
        "2010": {
            "W10": 1
        }
    },
    "Michael Roth": {
        "2009": {
            "P09": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Ann Irvine": {
        "2012": {
            "E12": 1
        },
        "2013": {
            "N13": 1,
            "W13": 1
        }
    },
    "Jardine": {
        "2015": {
            "W15": 1
        }
    },
    "Ana Zelaia": {
        "2009": {
            "W09": 1
        }
    },
    "Christian G Mary E Amber A Ani": {
        "2012": {
            "D12": 1
        }
    },
    "Mari-Sanna Paukkeri": {
        "2010": {
            "S10": 1
        }
    },
    "Julia Sidorova": {
        "2009": {
            "E09": 1
        }
    },
    "Du\u02c7san": {
        "2007": {
            "W07": 1
        }
    },
    "Phil Blunsom": {
        "2006": {
            "W06": 1
        },
        "2010": {
            "P10": 2,
            "D10": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "S12": 1,
            "D12": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "P14": 2
        }
    },
    "Eli Pincus": {
        "2015": {
            "W15": 1
        }
    },
    "Afra": {
        "2007": {
            "W07": 1
        }
    },
    "Luis Villarejo": {
        "2007": {
            "S07": 1
        }
    },
    "a\u02d8gr\u0131 \u00a8oltekin": {
        "2014": {
            "W14": 1
        }
    },
    "Steve DeNeefe": {
        "2005": {
            "P05": 1
        }
    },
    "Jianwu": {
        "2006": {
            "N06": 1
        }
    },
    "Ngo Xuan Bach": {
        "2012": {
            "W12": 1
        }
    },
    "Samer Hassan": {
        "2008": {
            "D08": 1
        },
        "2012": {
            "S12": 2
        }
    },
    "John Carroll": {
        "1994": {
            "P94": 1
        },
        "1996": {
            "W96": 1
        },
        "1999": {
            "E99": 1
        },
        "2004": {
            "P04": 1
        },
        "2005": {
            "W05": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "E09": 1
        }
    },
    "Sergienya": {
        "2015": {
            "D15": 1
        }
    },
    "Daniel M Bikel": {
        "2008": {
            "P08": 1
        },
        "2000": {
            "W00": 1
        },
        "1997": {
            "A97": 1
        }
    },
    "Si Li": {
        "2010": {
            "W10": 1
        }
    },
    "Yin Hei": {
        "2012": {
            "N12": 1
        }
    },
    "Chin-Hui Lee": {
        "1991": {
            "P91": 1
        }
    },
    "Shixiao": {
        "2009": {
            "W09": 1
        }
    },
    "Jonghoon Lee": {
        "2007": {
            "N07": 1
        }
    },
    "W Douglas": {
        "2009": {
            "N09": 1
        }
    },
    "J Raymond": {
        "2010": {
            "W10": 1
        },
        "2006": {
            "N06": 1
        },
        "2014": {
            "E14": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Mike Reape": {
        "1989": {
            "E89": 1
        }
    },
    "B\u00b4eatrice": {
        "2003": {
            "W03": 1
        }
    },
    "Marcello Federico": {
        "2010": {
            "N10": 1
        },
        "2012": {
            "W12": 1
        },
        "2006": {
            "W06": 2
        }
    },
    "Technology": {
        "2010": {
            "P10": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Makoto": {
        "1998": {
            "W98": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Abdelmajid Ben Hamadou": {
        "1998": {
            "P98": 1
        }
    },
    "Vanessa Wei Feng": {
        "2014": {
            "P14": 1
        }
    },
    "Jeff Mitchell": {
        "2010": {
            "P10": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Tomek": {
        "2011": {
            "P11": 1
        },
        "2004": {
            "N04": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Chwhynny Overbeeke": {
        "2009": {
            "W09": 1
        }
    },
    "Brady Clark": {
        "2001": {
            "W01": 1
        },
        "2009": {
            "W09": 1
        }
    },
    "Jennifer B Doyon": {
        "2000": {
            "W00": 1
        }
    },
    "Byoung-Tak Yung Taek": {
        "2000": {
            "P00": 1
        }
    },
    "New York Google": {
        "2013": {
            "D13": 1
        }
    },
    "Ben": {
        "2013": {
            "D13": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Koichi Yamashita Keiichi Yoshida Yukihiro Itoh": {
        "2003": {
            "P03": 1
        }
    },
    "Kazan": {
        "2014": {
            "W14": 1
        }
    },
    "Keke Cai": {
        "2007": {
            "P07": 1
        }
    },
    "George Dahl": {
        "2007": {
            "S07": 1
        }
    },
    "Barbara Hemforth": {
        "2006": {
            "P06": 1
        }
    },
    "Abhijit Nivvedan": {
        "2014": {
            "P14": 1
        }
    },
    "David Pico": {
        "1998": {
            "W98": 1
        }
    },
    "Saliha Azzam": {
        "1996": {
            "P96": 1
        }
    },
    "Izhak": {
        "2011": {
            "P11": 1
        }
    },
    "Liu Mi Feng Liu": {
        "2009": {
            "P09": 1
        }
    },
    "Cathcart": {
        "2003": {
            "E03": 1
        }
    },
    "Hal Daum\u00b4e": {
        "2002": {
            "P02": 1
        },
        "2007": {
            "P07": 2
        },
        "2008": {
            "D08": 1
        },
        "2009": {
            "P09": 1,
            "N09": 1
        },
        "2010": {
            "W10": 3
        },
        "2011": {
            "P11": 1,
            "D11": 1,
            "W11": 1
        },
        "2012": {
            "N12": 1,
            "D12": 3
        },
        "2013": {
            "N13": 1
        },
        "2014": {
            "D14": 1,
            "P14": 1
        }
    },
    "Sharon": {
        "2000": {
            "W00": 1
        },
        "2011": {
            "D11": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Michael Dorna": {
        "1998": {
            "P98": 2
        }
    },
    "Heather": {
        "2001": {
            "W01": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Kostadin Cholakov": {
        "2010": {
            "D10": 1
        }
    },
    "Roee Aharoni": {
        "2014": {
            "P14": 1
        }
    },
    "Bahareh Rahmanzadeh Heravi": {
        "2014": {
            "W14": 1
        }
    },
    "Kilian Foth": {
        "2006": {
            "W06": 1
        }
    },
    "Viktor Hangya": {
        "2013": {
            "S13": 1
        }
    },
    "Ning Yu": {
        "2011": {
            "W11": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Foster Goutte": {
        "2010": {
            "D10": 1
        }
    },
    "Gideon Mann": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "N10": 1
        }
    },
    "Lars Ahrenberg": {
        "1987": {
            "E87": 1
        },
        "2013": {
            "J13": 1
        }
    },
    "Wei Han": {
        "2012": {
            "W12": 1
        }
    },
    "Woodley Packard": {
        "2012": {
            "N12": 1
        },
        "2014": {
            "S14": 1
        }
    },
    "Chinese Academy of Sciences": {
        "2015": {
            "P15": 1
        }
    },
    "K\u00a8ubra Adal\u0131 Eryi\u02c7git": {
        "2015": {
            "W15": 1
        }
    },
    "Shumin Wu": {
        "2011": {
            "W11": 1
        }
    },
    "J Passonneau Guan Ho": {
        "2014": {
            "W14": 1
        }
    },
    "Peijia Li": {
        "2015": {
            "W15": 1,
            "S15": 1
        }
    },
    "Mark Fishel Mascarell": {
        "2015": {
            "W15": 1
        }
    },
    "Microsoft Research": {
        "2013": {
            "W13": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Jos\u00b4e-Miguel Benedi": {
        "2013": {
            "D13": 1
        }
    },
    "Jimmy Callin": {
        "2015": {
            "W15": 1
        }
    },
    "Simon Fraser University": {
        "2006": {
            "W06": 1
        }
    },
    "Dan McFarland": {
        "2009": {
            "N09": 1,
            "D09": 1
        }
    },
    "Baden": {
        "2006": {
            "W06": 1
        }
    },
    "Cohan Sujay Carlos": {
        "2009": {
            "E09": 1
        }
    },
    "Antske Fokkens": {
        "2010": {
            "P10": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Thanh Quan Hung Son Bao of Engineering": {
        "2015": {
            "S15": 1
        }
    },
    "Roy Bar-Haim": {
        "2008": {
            "P08": 1
        }
    },
    "Mahboob Alam Khalid Suzan Verberne": {
        "2008": {
            "W08": 1
        }
    },
    "Peter Pal Boda": {
        "2003": {
            "W03": 1
        }
    },
    "Srinivas": {
        "2004": {
            "N04": 1
        }
    },
    "Eunah Cho": {
        "2012": {
            "W12": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Chinatsu Aone": {
        "2000": {
            "A00": 1
        },
        "1993": {
            "P93": 1
        }
    },
    "Rebecca Watson": {
        "2005": {
            "W05": 1
        }
    },
    "Lev Ratinov Dan": {
        "2009": {
            "W09": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Antonio Sanfilippo": {
        "1993": {
            "W93": 1
        },
        "1997": {
            "W97": 1
        },
        "1998": {
            "P98": 1
        },
        "2007": {
            "N07": 1,
            "S07": 1
        }
    },
    "Wutiwiwatchai Furui": {
        "2004": {
            "W04": 1
        }
    },
    "Miles Osborne": {
        "1997": {
            "W97": 1
        },
        "2000": {
            "W00": 1
        },
        "2003": {
            "W03": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        },
        "2008": {
            "D08": 1
        },
        "2009": {
            "D09": 1
        },
        "2010": {
            "N10": 2,
            "W10": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        },
        "2012": {
            "N12": 1
        }
    },
    "Shu": {
        "2013": {
            "P13": 1
        }
    },
    "Yufeng Chen": {
        "2010": {
            "P10": 1
        }
    },
    "Y Andrew": {
        "2014": {
            "Q14": 1
        }
    },
    "Oi Yee Kwong": {
        "2005": {
            "W05": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Jette Viethen": {
        "2009": {
            "W09": 1
        },
        "2011": {
            "W11": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Sara Andy Joseph van": {
        "2012": {
            "W12": 1
        }
    },
    "Carole D Hafner": {
        "1984": {
            "P84": 1
        },
        "1985": {
            "P85": 1
        },
        "1983": {
            "A83": 1
        }
    },
    "Karen Kukich": {
        "2000": {
            "P00": 1
        },
        "1985": {
            "P85": 1
        },
        "1998": {
            "W98": 1
        },
        "1993": {
            "W93": 1
        }
    },
    "Jeroen": {
        "2009": {
            "W09": 1
        }
    },
    "Chlo\u00b4e Braud": {
        "2015": {
            "D15": 1
        }
    },
    "Hong Qi": {
        "2004": {
            "N04": 1
        }
    },
    "Nikolaos Lagos": {
        "2012": {
            "W12": 1
        }
    },
    "Christian Djamel Victoria Alex": {
        "2009": {
            "E09": 1
        }
    },
    "Bryan Pellom": {
        "2004": {
            "N04": 1
        }
    },
    "Marco Baroni": {
        "2006": {
            "E06": 1
        },
        "2007": {
            "P07": 2
        },
        "2008": {
            "W08": 1
        },
        "2009": {
            "W09": 2
        },
        "2011": {
            "W11": 3
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "W13": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Jan Korst": {
        "2008": {
            "W08": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Ken": {
        "2006": {
            "W06": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Aravind Joshi": {
        "2008": {
            "W08": 1
        },
        "2010": {
            "W10": 2
        },
        "2006": {
            "W06": 1
        }
    },
    "Jonathan Allen": {
        "1979": {
            "P79": 1
        }
    },
    "G": {
        "2009": {
            "W09": 1
        }
    },
    "Beaux Sharifi": {
        "2010": {
            "N10": 1
        }
    },
    "Yoram Singer": {
        "2003": {
            "N03": 1
        }
    },
    "Sekine Grishman": {
        "2004": {
            "P04": 1
        }
    },
    "Christiane Fellbaum": {
        "2010": {
            "P10": 1,
            "W10": 1
        },
        "2014": {
            "W14": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Jes\u00b4us Gonz\u00b4alez-Rubio": {
        "2010": {
            "P10": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Anil Kumar Singh": {
        "2009": {
            "N09": 1
        }
    },
    "Tarek": {
        "2007": {
            "N07": 1
        }
    },
    "L F D\u2019Haro": {
        "2009": {
            "W09": 1
        }
    },
    "Cheongjae Lee": {
        "2008": {
            "W08": 1
        }
    },
    "Ariel Fuxman": {
        "2011": {
            "P11": 1
        }
    },
    "Abby Vander Linden": {
        "2014": {
            "D14": 1
        }
    },
    "Yufan Guo": {
        "2015": {
            "Q15": 1
        }
    },
    "Virginia Pablo Gerv\u00b4as": {
        "2012": {
            "S12": 1
        }
    },
    "Jean-Philippe Solvay": {
        "1987": {
            "E87": 1
        }
    },
    "Graeme": {
        "1996": {
            "W96": 1
        },
        "2004": {
            "W04": 1
        },
        "2005": {
            "W05": 1
        },
        "2011": {
            "D11": 1
        },
        "2012": {
            "P12": 1,
            "D12": 1
        },
        "2013": {
            "N13": 1,
            "W13": 2
        }
    },
    "Yao": {
        "2014": {
            "W14": 1
        }
    },
    "Yan": {
        "2013": {
            "P13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Marie Candito\u2020": {
        "2011": {
            "W11": 1
        }
    },
    "Ebrahimi Saniee": {
        "2012": {
            "W12": 1
        }
    },
    "Thanaruk": {
        "2011": {
            "W11": 1
        }
    },
    "N Philip": {
        "2011": {
            "P11": 1
        }
    },
    "Gann Bierner": {
        "2001": {
            "P01": 1
        }
    },
    "Zhonghua Qu": {
        "2011": {
            "P11": 1
        }
    },
    "Brian Roark": {
        "1999": {
            "P99": 1
        },
        "2000": {
            "W00": 1
        },
        "2001": {
            "J01": 1
        },
        "2004": {
            "N04": 1
        },
        "2005": {
            "P05": 1
        },
        "2007": {
            "P07": 1
        },
        "2009": {
            "N09": 1
        },
        "2010": {
            "N10": 1
        },
        "2011": {
            "P11": 1,
            "W11": 3
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Dwyer Kondrak": {
        "2009": {
            "P09": 1
        }
    },
    "A Podlasov": {
        "2009": {
            "W09": 1
        }
    },
    "Polytechnic": {
        "2012": {
            "P12": 1
        }
    },
    "Post": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "W10": 1
        }
    },
    "Nancy McCracken": {
        "2005": {
            "W05": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Deirdre": {
        "2005": {
            "W05": 1
        }
    },
    "Zhibiao Wu": {
        "1994": {
            "P94": 1
        }
    },
    "Klein D Manning": {
        "2001": {
            "P01": 1
        },
        "2002": {
            "P02": 1
        }
    },
    "Christer Johansson": {
        "2000": {
            "W00": 1
        }
    },
    "Christopher Dyer": {
        "2008": {
            "W08": 1
        }
    },
    "Abdusalam F A Nwesri S M M Tahaghoghi Falk": {
        "2006": {
            "W06": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Miles": {
        "2015": {
            "D15": 1,
            "P15": 1
        }
    },
    "Or Biran": {
        "2015": {
            "D15": 1,
            "W15": 1
        }
    },
    "Science University": {
        "2012": {
            "P12": 1
        }
    },
    "Kenneth Johnson": {
        "1980": {
            "P80": 1
        }
    },
    "Janyce Wiebe": {
        "2006": {
            "W06": 1,
            "P06": 1
        },
        "2007": {
            "P07": 1
        },
        "2008": {
            "D08": 1
        },
        "2009": {
            "P09": 1
        },
        "2011": {
            "W11": 2
        },
        "2012": {
            "W12": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Bryan Kisiel": {
        "2013": {
            "D13": 1
        }
    },
    "Paul Felt": {
        "2015": {
            "W15": 1
        }
    },
    "GOH Chooi Ling": {
        "2003": {
            "P03": 1
        }
    },
    "Mallory Selfridge": {
        "1986": {
            "J86": 1
        }
    },
    "Ryosuke Isotani": {
        "2009": {
            "W09": 1
        }
    },
    "Huang Zweig Padmanabhan": {
        "2001": {
            "P01": 1
        }
    },
    "to French Martine Smets": {
        "2003": {
            "E03": 1
        }
    },
    "John Levine": {
        "1992": {
            "A92": 1
        }
    },
    "Adam Vogel": {
        "2012": {
            "W12": 1
        }
    },
    "Gokhan Tar Dilek Hakkani-Tiir": {
        "2001": {
            "J01": 1
        }
    },
    "Jieun Chae": {
        "2009": {
            "E09": 1
        }
    },
    "Mihai": {
        "2005": {
            "W05": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Tomoko": {
        "2006": {
            "W06": 1
        }
    },
    "Do": {
        "2015": {
            "P15": 1
        }
    },
    "Di": {
        "2013": {
            "J13": 1
        }
    },
    "R Kathleen": {
        "1997": {
            "W97": 1
        }
    },
    "Field Dong Yang": {
        "2009": {
            "N09": 1
        }
    },
    "A Lance": {
        "1994": {
            "W94": 1
        }
    },
    "Thomas L Griffiths": {
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Wenxiao Zhang": {
        "2010": {
            "W10": 1
        }
    },
    "Jarrett Rosenberg": {
        "1984": {
            "P84": 1
        }
    },
    "Beam Search": {
        "2011": {
            "J11": 1
        }
    },
    "Anthony Hartley": {
        "1996": {
            "P96": 1
        }
    },
    "Yunbo Xiaojiang Heng Chin-Yew": {
        "2014": {
            "P14": 1
        }
    },
    "Thomas Rist": {
        "1991": {
            "E91": 1
        }
    },
    "Jin-Cheon": {
        "2013": {
            "W13": 1
        }
    },
    "of Computer Science": {
        "2013": {
            "W13": 1
        },
        "2014": {
            "D14": 1
        },
        "2015": {
            "P15": 2
        }
    },
    "Advaith Siddharthan": {
        "2008": {
            "P08": 1
        },
        "2010": {
            "N10": 1
        },
        "2012": {
            "W12": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Dmitriy": {
        "2009": {
            "N09": 1
        }
    },
    "Seng Chan Roth": {
        "2011": {
            "P11": 1
        }
    },
    "Mikel Artetxe": {
        "2015": {
            "W15": 1
        }
    },
    "t m kwiatkowksisms ed ac uk lszcs washington edu sgwaterinf ed ac uk steedmaninf ed ac uk": {
        "2010": {
            "D10": 1
        }
    },
    "Maeda Isozaki": {
        "2003": {
            "P03": 1
        }
    },
    "Andrew Bennett": {
        "2007": {
            "S07": 1
        }
    },
    "Yejin Choi": {
        "2008": {
            "D08": 1
        },
        "2009": {
            "D09": 1
        },
        "2010": {
            "P10": 2
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Manohar": {
        "2007": {
            "W07": 1
        }
    },
    "Sumire Uematsu Jin-Dong Kim Jun\u2019ich": {
        "2009": {
            "W09": 1
        }
    },
    "Toshikazu IKUTA": {
        "2004": {
            "W04": 1
        }
    },
    "Norman Alm": {
        "2010": {
            "W10": 1
        }
    },
    "Yitao Zhang": {
        "2008": {
            "P08": 1
        }
    },
    "WC": {
        "2004": {
            "W04": 1
        }
    },
    "Ingrid": {
        "1998": {
            "W98": 1
        }
    },
    "Barry": {
        "2009": {
            "W09": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Hitoshi Isahara": {
        "2004": {
            "P04": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Hagen F\u00a8urstenau": {
        "2009": {
            "E09": 1
        }
    },
    "Polina Kuznetsova": {
        "2012": {
            "P12": 1
        },
        "2013": {
            "P13": 2,
            "D13": 1
        }
    },
    "Stephen": {
        "2001": {
            "N01": 1
        },
        "2004": {
            "W04": 1
        },
        "2007": {
            "N07": 1
        },
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2013": {
            "P13": 1,
            "W13": 1
        },
        "2015": {
            "D15": 1,
            "W15": 1,
            "P15": 1
        }
    },
    "Akshay Reddy Koppula": {
        "2015": {
            "S15": 1
        }
    },
    "Lluis Padr\u00b4o": {
        "2010": {
            "S10": 1
        }
    },
    "Wu": {
        "2006": {
            "W06": 1
        }
    },
    "Silberer Paolo Ponzetto": {
        "2010": {
            "S10": 1
        }
    },
    "MA mlucahbs edu": {
        "2013": {
            "D13": 1
        }
    },
    "Caixia": {
        "2010": {
            "W10": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Xiaojun Quan": {
        "2013": {
            "P13": 1
        }
    },
    "Dario Sestero": {
        "1993": {
            "P93": 1
        }
    },
    "Nolan Lawson": {
        "2010": {
            "W10": 1
        }
    },
    "Yun-Cheng Ju": {
        "2010": {
            "P10": 1
        }
    },
    "Chris Callison-Burch": {
        "2003": {
            "W03": 1
        },
        "2006": {
            "W06": 1,
            "N06": 1
        },
        "2009": {
            "W09": 1
        },
        "2010": {
            "N10": 1
        },
        "2011": {
            "D11": 1,
            "W11": 2
        },
        "2012": {
            "E12": 1
        },
        "2015": {
            "S15": 2
        }
    },
    "Amir": {
        "2013": {
            "P13": 1
        }
    },
    "Angel": {
        "2015": {
            "W15": 1
        }
    },
    "Eugene Charniak": {
        "1998": {
            "J98": 1
        },
        "1999": {
            "P99": 1
        },
        "2000": {
            "W00": 1
        },
        "2004": {
            "N04": 1,
            "P04": 1
        },
        "2005": {
            "P05": 2
        },
        "2006": {
            "W06": 1,
            "N06": 1,
            "P06": 1
        },
        "2008": {
            "P08": 2
        },
        "2009": {
            "N09": 1,
            "E09": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "P11": 2
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "N13": 1,
            "D13": 1
        },
        "2014": {
            "E14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Bahar Salehi": {
        "2013": {
            "S13": 1
        }
    },
    "Karen Ward": {
        "2000": {
            "A00": 1
        }
    },
    "Julien Gobeill Alan R Aronson": {
        "2006": {
            "P06": 1
        }
    },
    "Mona Diab": {
        "2004": {
            "P04": 1
        },
        "2007": {
            "S07": 2
        },
        "2008": {
            "P08": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "D11": 1,
            "W11": 1
        },
        "2012": {
            "S12": 1,
            "P12": 2,
            "W12": 2
        },
        "2013": {
            "S13": 1,
            "P13": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Kiyonori Ohtake": {
        "2006": {
            "P06": 1
        }
    },
    "Eric Horvitz": {
        "2001": {
            "P01": 1
        }
    },
    "F T": {
        "2012": {
            "N12": 1
        },
        "2015": {
            "P15": 2
        }
    },
    "Elaine Farrow": {
        "2009": {
            "W09": 1
        }
    },
    "Daisuke Suzuki": {
        "2006": {
            "P06": 1
        }
    },
    "Zhiying Liu": {
        "2014": {
            "W14": 1
        }
    },
    "Yassine Mrabet": {
        "2015": {
            "S15": 1
        }
    },
    "Dingcheng Li": {
        "2011": {
            "P11": 1,
            "W11": 1
        }
    },
    "Jahn McNaught": {
        "1983": {
            "E83": 1
        }
    },
    "Gosse Bouma": {
        "1993": {
            "E93": 1
        },
        "1990": {
            "P90": 1
        },
        "2009": {
            "W09": 2
        }
    },
    "Frederick Abhinav": {
        "2010": {
            "N10": 1
        }
    },
    "Youichi Hidano": {
        "1984": {
            "P84": 1
        }
    },
    "M Ali": {
        "1998": {
            "W98": 1
        }
    },
    "Heba Elfardy": {
        "2015": {
            "S15": 1
        }
    },
    "Rebecca Sachs": {
        "2012": {
            "W12": 1
        }
    },
    "Shi Feng": {
        "2010": {
            "P10": 1
        },
        "2015": {
            "W15": 2
        }
    },
    "Yongmei Shi Lina Zhou": {
        "2007": {
            "N07": 1
        }
    },
    "Edward Ivanovic": {
        "2005": {
            "P05": 1
        }
    },
    "Kyoko Funakoshi Hiroshi G Okuno": {
        "2011": {
            "W11": 1
        }
    },
    "Nathan Bodenstab": {
        "2011": {
            "W11": 1
        }
    },
    "from Clickthrough Data": {
        "2010": {
            "P10": 1
        }
    },
    "Jose Manuel Martinez": {
        "2013": {
            "W13": 1
        }
    },
    "Scott C Stoness": {
        "2004": {
            "W04": 1
        }
    },
    "Rich\u00b4ard Farkas": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Carolyn": {
        "2014": {
            "W14": 1
        }
    },
    "Dorr": {
        "2006": {
            "P06": 1
        }
    },
    "Haldur \u00cdim": {
        "2009": {
            "E09": 1
        }
    },
    "Nobuhiro Kaji Masaru Kitsuregawa": {
        "2011": {
            "D11": 1
        }
    },
    "Sarel Van_Vuuren": {
        "2004": {
            "N04": 1
        }
    },
    "Guodong": {
        "2013": {
            "P13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Harry H Porter": {
        "1987": {
            "P87": 1
        }
    },
    "Gerry T M Altmann": {
        "1992": {
            "J92": 1
        }
    },
    "Ramy Eskander": {
        "2013": {
            "D13": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Turian Bergstra": {
        "2009": {
            "N09": 1
        }
    },
    "T Raymond": {
        "2010": {
            "D10": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Dobrinkat Tapiovaara V\u00a8ayrynen": {
        "2010": {
            "P10": 1
        }
    },
    "M Thede P Harper": {
        "1999": {
            "P99": 1
        }
    },
    "Carol Nichols": {
        "2005": {
            "P05": 1
        }
    },
    "Dennis Perzanowski": {
        "1997": {
            "A97": 1
        }
    },
    "Constantin Or\u02d8asan": {
        "2001": {
            "W01": 1
        }
    },
    "Riley": {
        "2012": {
            "P12": 1
        }
    },
    "Then always be Batman \u201d": {
        "2015": {
            "D15": 1
        }
    },
    "Alon Lavie": {
        "1997": {
            "W97": 1
        },
        "2011": {
            "P11": 2
        },
        "2005": {
            "W05": 1,
            "P05": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Dmitriy Genzel": {
        "2010": {
            "D10": 1
        }
    },
    "Jonathan Kilgour": {
        "2006": {
            "W06": 1
        }
    },
    "Bryan Rink": {
        "2010": {
            "S10": 1
        },
        "2012": {
            "S12": 1
        }
    },
    "Nina McCurdy": {
        "2015": {
            "W15": 1
        }
    },
    "Brian Wolf": {
        "2005": {
            "P05": 1
        }
    },
    "Glenn Slayden Mei-Yuh Hwang Lee Schwartz": {
        "2010": {
            "W10": 1
        }
    },
    "Kazushi Shigeki": {
        "2015": {
            "W15": 1
        }
    },
    "Meliha": {
        "2013": {
            "W13": 1
        }
    },
    "Sue J Ker": {
        "1997": {
            "J97": 1
        }
    },
    "Cory Barr": {
        "2006": {
            "P06": 1
        }
    },
    "Mu Li Duan": {
        "2011": {
            "P11": 1
        }
    },
    "Martin Kay": {
        "1984": {
            "P84": 1
        },
        "2004": {
            "W04": 1
        }
    },
    "Kate Byrne": {
        "2014": {
            "W14": 1
        }
    },
    "Aline Leonardo Marco of Informatics": {
        "2008": {
            "W08": 1
        }
    },
    "Xihong Wu": {
        "2008": {
            "P08": 1
        }
    },
    "Gail Sinclair": {
        "2003": {
            "W03": 1
        },
        "2004": {
            "W04": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Dan Fass": {
        "1991": {
            "J91": 1
        }
    },
    "Jihong LI Ruibo WANG": {
        "2010": {
            "W10": 1
        }
    },
    "Julian Brooke": {
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Hiroshi Ishikawa": {
        "1985": {
            "E85": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Cerato Aline Maity of Informatics": {
        "2010": {
            "W10": 2
        }
    },
    "Kadri Muischnek": {
        "2015": {
            "W15": 1
        }
    },
    "Michael INGLEBY": {
        "1998": {
            "P98": 1
        }
    },
    "Joyce Yue Chai Alan W Bierma un": {
        "1997": {
            "W97": 1
        }
    },
    "Blaylock Swain": {
        "2009": {
            "N09": 1
        }
    },
    "Florian": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "N12": 1
        }
    },
    "Marten Postma": {
        "2014": {
            "W14": 1
        }
    },
    "David Milward": {
        "2000": {
            "P00": 1
        },
        "1995": {
            "E95": 1
        }
    },
    "Hassan Sawaf": {
        "2014": {
            "D14": 1
        }
    },
    "Pavel Machek": {
        "2005": {
            "P05": 1
        }
    },
    "Zoubin Ghahramani": {
        "2009": {
            "D09": 1
        },
        "2010": {
            "W10": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Kenneth Ward Church": {
        "1992": {
            "P92": 1
        },
        "1993": {
            "P93": 1
        }
    },
    "Tsuyoshi Okita": {
        "2015": {
            "K15": 2
        }
    },
    "Xun Zheng": {
        "2013": {
            "P13": 1
        }
    },
    "Carl Pollard": {
        "1985": {
            "P85": 1
        },
        "1991": {
            "P91": 1
        }
    },
    "Wenyin Liu Agichtein": {
        "2010": {
            "W10": 1
        }
    },
    "Norman Sadeh": {
        "2014": {
            "P14": 1
        }
    },
    "Diane Jingtao": {
        "2012": {
            "W12": 1
        }
    },
    "Josh Schroeder": {
        "2009": {
            "E09": 1
        }
    },
    "Pierre Chatain": {
        "2006": {
            "N06": 1
        }
    },
    "Aoife Cahill": {
        "2007": {
            "W07": 1
        },
        "2009": {
            "P09": 2,
            "E09": 1
        },
        "2011": {
            "P11": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "W14": 1,
            "E14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Yuliya Lierler": {
        "2013": {
            "W13": 2
        },
        "2015": {
            "W15": 1
        }
    },
    "T J Watson Carnegie Mellon": {
        "2011": {
            "P11": 1
        }
    },
    "Minh-Thang Luong": {
        "2010": {
            "S10": 1
        },
        "2013": {
            "Q13": 1
        },
        "2015": {
            "K15": 1
        }
    },
    "Sonya Nikolova": {
        "2008": {
            "W08": 1
        }
    },
    "Silvan Heintze": {
        "2010": {
            "W10": 1
        }
    },
    "Lynne J Cahill": {
        "1993": {
            "E93": 1
        },
        "1994": {
            "A94": 1
        }
    },
    "Kiyotaka Qing Ma": {
        "2001": {
            "S01": 1
        }
    },
    "Rens": {
        "2009": {
            "W09": 1
        }
    },
    "Tingsong Jiang": {
        "2015": {
            "D15": 1
        }
    },
    "Britta": {
        "2010": {
            "W10": 1
        }
    },
    "John R R Leavitt": {
        "1992": {
            "A92": 1
        }
    },
    "Andrew Kehler": {
        "1993": {
            "E93": 1,
            "P93": 1
        },
        "1994": {
            "P94": 2
        },
        "1997": {
            "J97": 2
        },
        "1989": {
            "P89": 1
        }
    },
    "Chikara Hashimoto": {
        "2007": {
            "P07": 1
        }
    },
    "Christos": {
        "2011": {
            "D11": 1
        }
    },
    "David K Elson": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 1
        }
    },
    "Luheng He Jennifer Gillenwater": {
        "2013": {
            "W13": 1
        }
    },
    "Rob Koeling": {
        "2004": {
            "P04": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Leonardo LESMO": {
        "1984": {
            "P84": 1
        }
    },
    "Weeds": {
        "2005": {
            "J05": 1
        }
    },
    "Chitta": {
        "2005": {
            "W05": 1
        }
    },
    "Tom Rozario": {
        "2003": {
            "W03": 1
        }
    },
    "Richard Socher": {
        "2012": {
            "D12": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "Q14": 1
        }
    },
    "Vogel Jurafsky": {
        "2010": {
            "P10": 1
        }
    },
    "Chrysanne DiMarco": {
        "1993": {
            "J93": 1
        }
    },
    "Susan Armstrong": {
        "2006": {
            "W06": 1
        }
    },
    "Vietnam LORIA": {
        "2009": {
            "W09": 1
        }
    },
    "Hasan Davulcu": {
        "2005": {
            "W05": 1
        }
    },
    "Jun-ichi": {
        "2000": {
            "W00": 1
        }
    },
    "Cuong Nicholas Kevin Kevin Chen-Chuan Dan": {
        "2010": {
            "W10": 1
        }
    },
    "Guowen Yang": {
        "2009": {
            "P09": 1
        }
    },
    "Leon Barrett": {
        "2006": {
            "W06": 1,
            "P06": 1
        }
    },
    "John D Joyce": {
        "1983": {
            "A83": 1
        }
    },
    "Napoleon Katsos": {
        "2010": {
            "N10": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Michael Louie Bo\u2013on": {
        "2015": {
            "W15": 1
        }
    },
    "Junsheng Zhou Weiguang Qu Fen": {
        "2012": {
            "D12": 1
        }
    },
    "Pavel Blinov": {
        "2014": {
            "S14": 1
        }
    },
    "Gerald": {
        "1994": {
            "W94": 1
        },
        "2010": {
            "D10": 1
        },
        "2012": {
            "E12": 2
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Johns Hopkins": {
        "2012": {
            "W12": 1
        }
    },
    "Hannaneh Hajishirzi": {
        "2012": {
            "W12": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "D14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Dian a Maynard": {
        "2003": {
            "E03": 1
        }
    },
    "J\u00a8org Tiedemann": {
        "2006": {
            "P06": 1
        }
    },
    "Noriko Tomuro": {
        "2009": {
            "W09": 1
        },
        "1996": {
            "P96": 1
        }
    },
    "Eric V Siegel": {
        "2000": {
            "J00": 1
        },
        "1997": {
            "W97": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "Kubota": {
        "2005": {
            "P05": 1
        }
    },
    "S Jerrold Kaplan Jim Davidson": {
        "1981": {
            "P81": 1
        }
    },
    "Mei": {
        "2005": {
            "W05": 1
        }
    },
    "Jeffrey Sorensen": {
        "2004": {
            "P04": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Fintan J Costello": {
        "2006": {
            "P06": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Martha E Pollack": {
        "1986": {
            "P86": 1
        },
        "1988": {
            "P88": 1
        }
    },
    "K Valerie": {
        "2013": {
            "P13": 1
        }
    },
    "Jugal Kalita": {
        "1988": {
            "A88": 1
        }
    },
    "Jeffrey C Reynar": {
        "1994": {
            "P94": 1
        },
        "1997": {
            "A97": 2
        }
    },
    "Jihie": {
        "2010": {
            "W10": 1
        }
    },
    "Elias": {
        "2015": {
            "W15": 1
        }
    },
    "James Dan Dan": {
        "2009": {
            "D09": 1
        }
    },
    "Corina": {
        "2015": {
            "D15": 1
        }
    },
    "Malin Ahlberg": {
        "2015": {
            "W15": 1
        }
    },
    "Masayuki Asahara": {
        "2010": {
            "P10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "H Oim": {
        "1983": {
            "E83": 1
        }
    },
    "Koh Mitsuda": {
        "2013": {
            "W13": 2
        }
    },
    "Biadsy Hirschberg": {
        "2009": {
            "W09": 1
        }
    },
    "Lea Canales": {
        "2014": {
            "W14": 1
        }
    },
    "Jonathan King": {
        "1982": {
            "P82": 1
        }
    },
    "Rajhans Samdani Dan": {
        "2013": {
            "D13": 1
        }
    },
    "Elizabeth White": {
        "2011": {
            "W11": 1
        }
    },
    "Patrick Schone": {
        "2008": {
            "P08": 1
        },
        "2001": {
            "W01": 1
        }
    },
    "Gopalan Nadathur": {
        "1986": {
            "P86": 1
        }
    },
    "Sagae": {
        "2010": {
            "W10": 1
        }
    },
    "James R Miller": {
        "1983": {
            "P83": 1
        }
    },
    "Myriam Hern\u00e1ndez \u00c1lvarez Jos\u00e9 G\u00f3mez Soriano": {
        "2014": {
            "W14": 1
        }
    },
    "Clayton Language Technology Center of Excellence": {
        "2012": {
            "W12": 1
        }
    },
    "Ai Azuma": {
        "2011": {
            "D11": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Jena D Hwang": {
        "2010": {
            "W10": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Patricia Albacete": {
        "2015": {
            "W15": 1
        }
    },
    "Sandra M Aluisio": {
        "2009": {
            "W09": 1
        }
    },
    "Achim Ruopp": {
        "2008": {
            "P08": 1
        }
    },
    "Otsu Seta": {
        "2000": {
            "W00": 1
        }
    },
    "Tom B Y LAI HUANG Changning": {
        "2000": {
            "W00": 1
        }
    },
    "L Vicedo Ferrdndez": {
        "2000": {
            "P00": 1
        }
    },
    "Sven Christian": {
        "2011": {
            "W11": 1
        }
    },
    "Zhilin Zheng": {
        "2014": {
            "W14": 1
        }
    },
    "Eric Nichols Fadi Botros": {
        "2015": {
            "S15": 1
        }
    },
    "Marion Weller": {
        "2014": {
            "E14": 1
        }
    },
    "Sharon A Caraballo": {
        "1998": {
            "J98": 1
        }
    },
    "Satoshi": {
        "2001": {
            "W01": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Fei Song": {
        "2012": {
            "W12": 1
        }
    },
    "Sarvnaz Karimi Falk Scholer Andrew Turpin": {
        "2007": {
            "P07": 1
        }
    },
    "Peng Cotterell Eisner": {
        "2015": {
            "D15": 1
        }
    },
    "Patrik Lambert": {
        "2011": {
            "W11": 1
        },
        "2015": {
            "P15": 1
        },
        "2006": {
            "W06": 2
        },
        "2007": {
            "N07": 1,
            "W07": 1
        }
    },
    "Miles Osborne Philipp": {
        "2006": {
            "W06": 1
        }
    },
    "Joachim Wagner": {
        "2008": {
            "P08": 1,
            "W08": 1
        },
        "2011": {
            "W11": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Salud Maria Teresa Martin-Valdivia": {
        "2014": {
            "S14": 1
        }
    },
    "Pan C Shaw": {
        "2005": {
            "P05": 1
        }
    },
    "Bob Carpenter": {
        "2004": {
            "P04": 1
        },
        "2013": {
            "W13": 1
        },
        "1991": {
            "P91": 1,
            "J91": 1
        }
    },
    "Stephan Busemann": {
        "2000": {
            "A00": 1
        }
    },
    "Rob Voigt": {
        "2012": {
            "W12": 1
        },
        "2014": {
            "P14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "M Comeau": {
        "2007": {
            "P07": 1
        }
    },
    "Mi Liu": {
        "2010": {
            "P10": 1
        }
    },
    "Akshar Bharati": {
        "2009": {
            "P09": 1
        }
    },
    "Stoyan Mihoyt": {
        "2000": {
            "J00": 1
        }
    },
    "Roman Klinger": {
        "2015": {
            "W15": 1
        }
    },
    "Cortis Clark": {
        "1997": {
            "W97": 1
        }
    },
    "Jesse Montgomery": {
        "2006": {
            "W06": 1
        }
    },
    "Ran Zhao Quang Xuan Do Dan": {
        "2012": {
            "N12": 1
        }
    },
    "Naoto Katohl Teruaki Aizawa": {
        "1994": {
            "A94": 1
        }
    },
    "Michael I Jordan": {
        "2009": {
            "P09": 1
        }
    },
    "Jeevan Alexandre Passos": {
        "2014": {
            "D14": 1
        }
    },
    "Tapanainen Jarvinen": {
        "1997": {
            "A97": 1
        }
    },
    "T Annie": {
        "2013": {
            "P13": 1
        }
    },
    "Ganchev V": {
        "2008": {
            "P08": 1
        }
    },
    "Abdelati Hawwari": {
        "2012": {
            "W12": 2
        },
        "2014": {
            "W14": 1
        }
    },
    "Jin-ge Yao": {
        "2014": {
            "D14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Yaqian Zhou": {
        "2010": {
            "D10": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Mathias M\u00f6hl": {
        "2007": {
            "P07": 1
        }
    },
    "Christiane Fellbaumt": {
        "1997": {
            "W97": 1
        }
    },
    "Xiaodan Zhu": {
        "2009": {
            "P09": 1
        },
        "2014": {
            "W14": 1
        },
        "2006": {
            "N06": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Arturo Trujillo": {
        "1992": {
            "P92": 1
        }
    },
    "Hiroki Ouchi": {
        "2014": {
            "E14": 1
        }
    },
    "in Spanish": {
        "2012": {
            "J12": 1
        }
    },
    "Beatrice Alex": {
        "2014": {
            "W14": 1
        }
    },
    "Ramesh": {
        "2003": {
            "N03": 1
        }
    },
    "Van": {
        "2011": {
            "D11": 1,
            "W11": 2
        }
    },
    "Rohini K Srihari": {
        "2009": {
            "W09": 1
        },
        "2003": {
            "P03": 1,
            "W03": 1
        },
        "2004": {
            "P04": 1
        }
    },
    "Chelba Acero": {
        "2005": {
            "P05": 2
        }
    },
    "Mitchell P Marcus": {
        "1983": {
            "P83": 1
        }
    },
    "Wayne": {
        "2009": {
            "P09": 1
        },
        "2003": {
            "N03": 1
        }
    },
    "Marc Vilain": {
        "2006": {
            "E06": 1
        }
    },
    "Gert Durieuxi": {
        "1994": {
            "J94": 1
        }
    },
    "James Glass": {
        "2008": {
            "P08": 1,
            "W08": 1
        },
        "2009": {
            "E09": 1
        },
        "2003": {
            "W03": 1
        },
        "2004": {
            "W04": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Stan SZPAKOWICZ": {
        "1998": {
            "P98": 1
        }
    },
    "Alan W Black": {
        "2010": {
            "W10": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Aleksandra Gabryszak": {
        "2015": {
            "W15": 1
        }
    },
    "Jan Schehl": {
        "2005": {
            "W05": 1
        }
    },
    "Jinho D Choi": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "N10": 1,
            "W10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Gerwert Stevens": {
        "2007": {
            "W07": 1
        }
    },
    "Ashwini Vaidya": {
        "2011": {
            "W11": 1
        }
    },
    "Breck": {
        "1998": {
            "W98": 1
        }
    },
    "Francesco Ronzano": {
        "2015": {
            "W15": 1
        }
    },
    "Massimiliano Ant`onia Lluis Sebastian Pavel Mihai Nianwen": {
        "2009": {
            "W09": 1
        }
    },
    "Bill Rounds": {
        "1993": {
            "P93": 1
        }
    },
    "Edmond Sadik Kapadia": {
        "2005": {
            "W05": 1
        }
    },
    "David YAROWSKY": {
        "2004": {
            "P04": 1
        }
    },
    "Chunliang Lu": {
        "2015": {
            "P15": 1
        }
    },
    "Sebastian": {
        "2009": {
            "N09": 1
        },
        "2005": {
            "W05": 2
        },
        "2015": {
            "W15": 1
        }
    },
    "Gema Ramirez-S\u00b4anchez": {
        "2012": {
            "W12": 1
        }
    },
    "Luciana Benotti": {
        "2009": {
            "W09": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Nima Pourdamghani": {
        "2014": {
            "D14": 1
        }
    },
    "L Forcada Felipe": {
        "2015": {
            "W15": 1
        }
    },
    "Beigman": {
        "2009": {
            "J09": 1
        }
    },
    "Andriy": {
        "2009": {
            "W09": 1
        }
    },
    "Lawrence Phillips": {
        "2014": {
            "W14": 1
        }
    },
    "Janet Hitzeman": {
        "1995": {
            "E95": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "Sriram Venkatapathy": {
        "2013": {
            "P13": 1
        }
    },
    "Robbert Prins": {
        "2004": {
            "P04": 1
        }
    },
    "Fang Liu": {
        "2013": {
            "P13": 1
        }
    },
    "Nianwen": {
        "2008": {
            "D08": 1
        },
        "2011": {
            "W11": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Patti": {
        "1994": {
            "W94": 1
        }
    },
    "Nigel Dewdney Carol VanEss\u2212Dykema Richard MacMillan": {
        "2001": {
            "W01": 1
        }
    },
    "Keith Anthony Seth": {
        "2003": {
            "W03": 1
        }
    },
    "Makoto Nagao": {
        "1984": {
            "P84": 1
        },
        "1994": {
            "J94": 1
        },
        "1998": {
            "P98": 1,
            "W98": 1
        }
    },
    "Ruifeng Yulan Xuan": {
        "2015": {
            "P15": 1
        }
    },
    "Marc James Carroll": {
        "2007": {
            "W07": 1
        }
    },
    "Yushi Xu": {
        "2010": {
            "W10": 1
        }
    },
    "Yonggang Deng": {
        "2010": {
            "P10": 1
        }
    },
    "Muhammad Adeel Mark": {
        "2012": {
            "S12": 1
        }
    },
    "Jong-Hyeok": {
        "2011": {
            "W11": 1
        }
    },
    "Sisay": {
        "2003": {
            "W03": 1
        }
    },
    "Sigrid": {
        "2013": {
            "P13": 1
        }
    },
    "Adam Goodkind": {
        "2015": {
            "W15": 1
        }
    },
    "Ota Ogie": {
        "2010": {
            "W10": 1
        }
    },
    "Massimiliano Ciaramita": {
        "2003": {
            "W03": 1
        },
        "2006": {
            "E06": 1,
            "W06": 1
        },
        "2007": {
            "S07": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "D09": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Jesse Dunietz": {
        "2014": {
            "E14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Desmond Darma Putra": {
        "2013": {
            "W13": 1
        }
    },
    "Scott Russell Halgrim": {
        "2010": {
            "W10": 1
        }
    },
    "Dan Gillick": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "P11": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Cecilia O Jeff B Pelz": {
        "2015": {
            "W15": 1
        }
    },
    "Ted Diamond": {
        "2000": {
            "A00": 1
        }
    },
    "Marilyn Walker": {
        "2000": {
            "A00": 1,
            "P00": 1
        },
        "2008": {
            "P08": 1
        },
        "2002": {
            "P02": 1
        },
        "2014": {
            "W14": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Peggy M Andersen": {
        "1992": {
            "A92": 1
        }
    },
    "Natalya Panteleyeva Bretonnel": {
        "2014": {
            "W14": 1
        }
    },
    "Lall Benjamin Van_Durme": {
        "2014": {
            "P14": 1
        }
    },
    "Nicoletta Calzolari": {
        "1984": {
            "P84": 1
        }
    },
    "Hong Kong": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "P12": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Douglas Appelt": {
        "1988": {
            "P88": 1
        }
    },
    "Zhiting Xu": {
        "2009": {
            "W09": 1
        }
    },
    "Deryle Lonsdale": {
        "2011": {
            "W11": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Udo Hahnt": {
        "1999": {
            "J99": 1
        }
    },
    "Hector Llorens": {
        "2010": {
            "S10": 1
        }
    },
    "Roger": {
        "1998": {
            "W98": 1
        },
        "2004": {
            "W04": 1
        },
        "2006": {
            "W06": 1
        },
        "2009": {
            "N09": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Noah A Smith": {
        "2009": {
            "P09": 1,
            "N09": 2
        },
        "2010": {
            "N10": 2,
            "S10": 1,
            "D10": 1,
            "W10": 1
        },
        "2011": {
            "P11": 1,
            "W11": 2
        },
        "2012": {
            "N12": 2
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "Q14": 2,
            "P14": 4
        }
    },
    "Katherine Hargreaves": {
        "2006": {
            "P06": 1
        }
    },
    "Tomek Strzalkowski": {
        "1992": {
            "P92": 2
        },
        "1994": {
            "A94": 1
        },
        "2003": {
            "W03": 1
        }
    },
    "Jian": {
        "2014": {
            "W14": 1
        }
    },
    "Anne Vilnat": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "E12": 1,
            "D12": 1
        }
    },
    "Apurba Paul": {
        "2015": {
            "W15": 1
        }
    },
    "Thade": {
        "2009": {
            "N09": 1
        }
    },
    "Jianfeng Gao": {
        "2000": {
            "P00": 2
        },
        "2003": {
            "P03": 2
        },
        "2008": {
            "D08": 1
        },
        "2011": {
            "D11": 1
        },
        "2012": {
            "D12": 1
        },
        "2013": {
            "N13": 2
        },
        "2014": {
            "D14": 1
        }
    },
    "P Lasecki": {
        "2013": {
            "N13": 1
        }
    },
    "BalaKrishna Kolluru Yoshihiko": {
        "2005": {
            "W05": 1
        }
    },
    "Tsuneaki Kato": {
        "1994": {
            "A94": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Samuel Cruz-Lara": {
        "2014": {
            "S14": 1
        }
    },
    "Younes Samih": {
        "2012": {
            "W12": 1
        }
    },
    "Li Deng": {
        "2012": {
            "P12": 1
        }
    },
    "Raymond": {
        "2010": {
            "W10": 1
        }
    },
    "Behrang Rebecca": {
        "2010": {
            "N10": 1
        }
    },
    "Tomasz Obrcbski t Filip Graliriski t": {
        "2004": {
            "W04": 1
        }
    },
    "Lab India": {
        "2013": {
            "W13": 1
        }
    },
    "Hyo-Jung Oh": {
        "2003": {
            "W03": 1
        },
        "2005": {
            "P05": 1
        }
    },
    "Chang Goldwasser Roth": {
        "2010": {
            "N10": 1
        }
    },
    "Nina Schottm\u00a8uller": {
        "2014": {
            "W14": 1
        }
    },
    "South Seoul": {
        "2014": {
            "D14": 1
        }
    },
    "Arantza Casillas": {
        "2014": {
            "S14": 1
        }
    },
    "Joseph Polifroni": {
        "2008": {
            "P08": 1
        }
    },
    "Nobuaki Hiroshima": {
        "2006": {
            "W06": 1
        }
    },
    "Don": {
        "2014": {
            "E14": 1
        }
    },
    "Lluis-F Hurtado": {
        "2013": {
            "W13": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Johanna Ulrich Barry Manny": {
        "2013": {
            "W13": 1
        }
    },
    "Stephanie": {
        "2008": {
            "W08": 1
        },
        "2003": {
            "W03": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Nicholas FitzGerald Yoav Artzi Luke": {
        "2013": {
            "D13": 1
        }
    },
    "Valia Yi": {
        "2008": {
            "P08": 1
        }
    },
    "Smaranda Muresan": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "W12": 1
        },
        "2014": {
            "W14": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Lisa": {
        "2010": {
            "W10": 1
        },
        "2005": {
            "W05": 1
        },
        "2014": {
            "W14": 1
        },
        "1999": {
            "W99": 1
        }
    },
    "Uri Zernik Michael G Dyer": {
        "1985": {
            "P85": 1
        }
    },
    "Johan": {
        "2015": {
            "W15": 1
        }
    },
    "Kangmiao Liu": {
        "2007": {
            "P07": 1
        }
    },
    "Sophia": {
        "2014": {
            "W14": 1
        }
    },
    "Melanie Baljko": {
        "2013": {
            "W13": 1
        }
    },
    "J M Eric": {
        "2007": {
            "W07": 1
        }
    },
    "Jong-Hyeok Lee": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "W11": 1
        },
        "2002": {
            "W02": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Sagae DeVault R Traum": {
        "2010": {
            "N10": 1
        }
    },
    "Li Haizhou": {
        "2004": {
            "P04": 1
        }
    },
    "Mick O\u2019Donnell": {
        "2008": {
            "P08": 1
        }
    },
    "Marina Lloberes Irene Castell\u00b4on Lluis Padr\u00b4o": {
        "2015": {
            "W15": 1
        }
    },
    "Patrick Nguyen": {
        "2008": {
            "W08": 1
        }
    },
    "Stefan Stephen Soderland": {
        "2010": {
            "W10": 1
        }
    },
    "Lenhart": {
        "2014": {
            "W14": 1
        }
    },
    "James Carroll": {
        "2008": {
            "P08": 1
        }
    },
    "Indrajit Bhattacharya": {
        "2004": {
            "P04": 1
        }
    },
    "Hideo Itoh Hiroko Mano Yasushi": {
        "2003": {
            "W03": 1
        }
    },
    "Eric T Nalisnick Henry S": {
        "2013": {
            "P13": 1
        }
    },
    "Steedman Clark": {
        "2002": {
            "P02": 1
        }
    },
    "Abeed Sarker": {
        "2015": {
            "S15": 1
        }
    },
    "Alexander Koller": {
        "2002": {
            "P02": 1
        },
        "2003": {
            "E03": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "P07": 1
        },
        "2009": {
            "W09": 1,
            "E09": 3
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "E12": 1
        },
        "2014": {
            "S14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Markus Dreyer": {
        "2008": {
            "P08": 1
        }
    },
    "Ben Hachey": {
        "2003": {
            "W03": 1
        },
        "2004": {
            "W04": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Tatu Moldovan": {
        "2006": {
            "P06": 1
        }
    },
    "Erin Grant": {
        "2015": {
            "D15": 1
        }
    },
    "Bonnie Webber": {
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "2002": {
            "W02": 1
        },
        "2004": {
            "W04": 1
        },
        "2006": {
            "W06": 1
        },
        "2009": {
            "P09": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Giang Binh Tran": {
        "2011": {
            "W11": 1
        }
    },
    "Chung": {
        "2009": {
            "D09": 1
        },
        "2010": {
            "D10": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "N12": 1
        }
    },
    "Seung-Wook Lee": {
        "2009": {
            "P09": 1
        }
    },
    "Hee-Cheol Seo": {
        "2003": {
            "W03": 1
        }
    },
    "Anh Tuan": {
        "2015": {
            "D15": 1
        }
    },
    "Remko Scha": {
        "2009": {
            "D09": 1
        },
        "2011": {
            "W11": 1
        },
        "1988": {
            "P88": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Wilker Aziz": {
        "2013": {
            "W13": 1
        }
    },
    "Richard Rohwer": {
        "2005": {
            "W05": 1
        }
    },
    "Jon Dehdari": {
        "2011": {
            "W11": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "A Jan": {
        "2012": {
            "E12": 1
        }
    },
    "Aggeliki Ion Androutsopoulos": {
        "2003": {
            "W03": 1
        }
    },
    "Ryu Iida": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "P10": 1
        },
        "2003": {
            "W03": 1
        },
        "2013": {
            "W13": 2
        },
        "2006": {
            "P06": 1
        }
    },
    "Florian WOLF": {
        "2004": {
            "P04": 1
        }
    },
    "Tamara": {
        "2014": {
            "E14": 1
        }
    },
    "Peter Kleiweg": {
        "2006": {
            "W06": 1
        }
    },
    "Louis-Philippe Morency": {
        "2013": {
            "P13": 1
        }
    },
    "DeNeefe Knight": {
        "2009": {
            "D09": 1
        }
    },
    "Joohyun Kim": {
        "2012": {
            "D12": 1
        }
    },
    "Vickrey Koller": {
        "2008": {
            "P08": 1
        }
    },
    "Haji Hladka": {
        "1997": {
            "A97": 1
        }
    },
    "Chelba Jelinek": {
        "1998": {
            "P98": 1
        }
    },
    "Frank Smadja": {
        "1993": {
            "J93": 1
        },
        "1996": {
            "J96": 1
        }
    },
    "Hareen Venigalla": {
        "2013": {
            "W13": 1
        }
    },
    "Susan P Converse": {
        "2002": {
            "W02": 1
        }
    },
    "Aliaksei Severyn": {
        "2013": {
            "D13": 1
        }
    },
    "Paul G Donecker": {
        "1996": {
            "P96": 1
        }
    },
    "David Mare\u02c7cek": {
        "2010": {
            "P10": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Michael C McCord": {
        "2000": {
            "W00": 1
        },
        "1985": {
            "P85": 1
        },
        "1980": {
            "J80": 1
        }
    },
    "Adri`a de_Gispert": {
        "2006": {
            "W06": 2
        },
        "2010": {
            "P10": 1
        },
        "2005": {
            "P05": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Kevin Eustice": {
        "2010": {
            "W10": 1
        }
    },
    "Michel Galley": {
        "2003": {
            "P03": 1
        },
        "2008": {
            "D08": 1
        },
        "2009": {
            "P09": 2,
            "W09": 1
        },
        "2011": {
            "D11": 1
        },
        "2013": {
            "D13": 2
        },
        "2014": {
            "D14": 1
        }
    },
    "Naomi Zeichner": {
        "2012": {
            "P12": 1
        }
    },
    "S Tan": {
        "2009": {
            "W09": 1
        }
    },
    "Antal van_den_Bosch": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        },
        "2006": {
            "J06": 1
        },
        "2014": {
            "E14": 1
        },
        "2013": {
            "S13": 1,
            "W13": 1
        }
    },
    "Kristy Hollingshead": {
        "2015": {
            "W15": 1
        }
    },
    "Ed": {
        "2003": {
            "W03": 1
        }
    },
    "Yuzhao Mao": {
        "2012": {
            "W12": 1
        }
    },
    "Sriramkumar Jiehan Sarthak": {
        "2014": {
            "W14": 1
        }
    },
    "Gabriele Antonio Musillo": {
        "2008": {
            "P08": 1
        }
    },
    "Hulth B Megyesi": {
        "2006": {
            "P06": 1
        }
    },
    "Alan M Wallington": {
        "2006": {
            "E06": 1
        }
    },
    "Blaise Jason": {
        "2014": {
            "W14": 1
        }
    },
    "Ann Copestake": {
        "1992": {
            "A92": 1
        },
        "2008": {
            "P08": 1
        },
        "2013": {
            "W13": 1
        },
        "1991": {
            "W91": 1
        }
    },
    "John Coleman": {
        "2006": {
            "J06": 1
        }
    },
    "David Stallard": {
        "1987": {
            "P87": 1
        },
        "1988": {
            "P88": 1
        },
        "1989": {
            "P89": 1
        },
        "1993": {
            "P93": 1
        },
        "1994": {
            "A94": 1
        },
        "1996": {
            "P96": 1
        },
        "2010": {
            "W10": 1
        }
    },
    "Alex Park Malioutov": {
        "2007": {
            "P07": 1
        }
    },
    "Austin Tran": {
        "2012": {
            "P12": 1
        }
    },
    "Dav Zimak": {
        "2004": {
            "W04": 1
        }
    },
    "Sven": {
        "2001": {
            "W01": 1
        },
        "1999": {
            "W99": 1
        }
    },
    "Lazaridou Marelli Zamparelli": {
        "2013": {
            "P13": 1
        }
    },
    "Simone Danilo Roberto": {
        "2013": {
            "S13": 1
        },
        "2014": {
            "S14": 1
        }
    },
    "Jia-Lin Tsai": {
        "2006": {
            "P06": 1
        }
    },
    "Mats Rootht": {
        "1993": {
            "J93": 1
        }
    },
    "Justin": {
        "2009": {
            "W09": 1,
            "D09": 1
        }
    },
    "Tsai": {
        "2012": {
            "W12": 1
        }
    },
    "Li Marine Carpuat": {
        "2014": {
            "P14": 1
        }
    },
    "M Koit": {
        "1983": {
            "E83": 1
        }
    },
    "Xiao Ling": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Lluis M`arquez": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "P09": 1,
            "W09": 1
        },
        "2014": {
            "W14": 3,
            "P14": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Information Systems": {
        "2012": {
            "N12": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Yasuhisa Yoshida": {
        "2014": {
            "D14": 1
        }
    },
    "Amit Chakraborty": {
        "2011": {
            "W11": 1
        }
    },
    "J M Arriola": {
        "2004": {
            "W04": 1
        }
    },
    "John Bremer": {
        "1993": {
            "P93": 1
        }
    },
    "George Tambouratzis": {
        "2012": {
            "W12": 1
        }
    },
    "Giulia Venturi": {
        "2011": {
            "W11": 1
        }
    },
    "Xu": {
        "2013": {
            "N13": 1
        }
    },
    "Karolina Owczarzak": {
        "2009": {
            "P09": 1
        },
        "2012": {
            "P12": 1,
            "W12": 1
        },
        "2014": {
            "W14": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "W07": 2
        }
    },
    "Marie-Jean Meurs": {
        "2009": {
            "N09": 1
        }
    },
    "Robert J Hendley": {
        "2006": {
            "E06": 1,
            "W06": 1
        }
    },
    "Andi Wu": {
        "2000": {
            "W00": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Markus Forsberg": {
        "2012": {
            "W12": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Jens Lehmann": {
        "2012": {
            "W12": 1
        }
    },
    "Wan-Ling": {
        "2015": {
            "W15": 1
        }
    },
    "Ngoc Thi Steven Marie-Francine": {
        "2015": {
            "D15": 1
        }
    },
    "Kim": {
        "2012": {
            "W12": 2
        }
    },
    "Eric Mays": {
        "1983": {
            "P83": 1
        }
    },
    "Kie": {
        "2013": {
            "P13": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Martins": {
        "2012": {
            "N12": 1
        }
    },
    "Jakob Elming": {
        "2009": {
            "W09": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "W14": 1,
            "S14": 1
        },
        "2005": {
            "P05": 1
        }
    },
    "Tijn Porcelijn": {
        "2006": {
            "W06": 1
        }
    },
    "Rushin Shah": {
        "2010": {
            "W10": 1
        }
    },
    "Tina B\u00a8ogel Annette Hautli-Janisz Sebastian Sulger Miriam Butt": {
        "2014": {
            "W14": 1
        }
    },
    "Hiyan": {
        "1994": {
            "W94": 1
        }
    },
    "Rudolf Rosa": {
        "2012": {
            "W12": 1
        }
    },
    "Matthew Frampton": {
        "2010": {
            "W10": 1
        }
    },
    "Xia": {
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "2013": {
            "S13": 1
        }
    },
    "Bikash Gyawali": {
        "2014": {
            "P14": 1
        }
    },
    "Xin": {
        "2005": {
            "W05": 1
        }
    },
    "Apurva Jadhav": {
        "2003": {
            "W03": 1
        }
    },
    "Hideki Hirakawa": {
        "1994": {
            "A94": 1
        }
    },
    "Iris Wang Schuurmans": {
        "2005": {
            "W05": 1
        }
    },
    "Sebastian Pad\u00f3": {
        "2012": {
            "W12": 1
        },
        "2003": {
            "P03": 1
        },
        "2004": {
            "W04": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Henderson": {
        "2005": {
            "W05": 1
        }
    },
    "Jin-Xia HUANG": {
        "2004": {
            "W04": 1
        }
    },
    "Hajime Tsukada Hideki": {
        "2006": {
            "W06": 1
        }
    },
    "Cara Calvelli": {
        "2012": {
            "W12": 2
        }
    },
    "Hideki Kashioka": {
        "2000": {
            "A00": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Lee Kim": {
        "2008": {
            "W08": 1
        }
    },
    "Hamidreza Kobdani": {
        "2011": {
            "W11": 1
        }
    },
    "Eric Gaussier": {
        "1998": {
            "P98": 1
        }
    },
    "Adnan Duric": {
        "2011": {
            "W11": 1
        }
    },
    "Benjamin Siemoneit": {
        "2015": {
            "W15": 1
        }
    },
    "Bertram Shi": {
        "1997": {
            "W97": 1
        }
    },
    "Zeeshan Ahmed Sz\u00b4ekely": {
        "2012": {
            "W12": 1
        }
    },
    "Randall": {
        "2006": {
            "N06": 1
        }
    },
    "Sujith": {
        "2011": {
            "W11": 1
        }
    },
    "Necip Fazil Ayan": {
        "2007": {
            "W07": 1
        }
    },
    "Sriparna": {
        "2014": {
            "S14": 1
        }
    },
    "Jirka Hana Anna Feldman": {
        "2010": {
            "W10": 1
        }
    },
    "Munirathnam Srikanth": {
        "2007": {
            "S07": 1
        }
    },
    "Kumiko TANAKA-Ishii": {
        "1998": {
            "P98": 1
        }
    },
    "Yoshihiko Hayashi": {
        "2011": {
            "W11": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "M Daniel": {
        "2000": {
            "W00": 1
        },
        "2004": {
            "W04": 1
        }
    },
    "Perceptron": {
        "2011": {
            "J11": 1
        }
    },
    "Tim Van_de": {
        "2014": {
            "D14": 1
        }
    },
    "Minghu": {
        "2013": {
            "P13": 1
        }
    },
    "Angeliki Metallinou": {
        "2014": {
            "W14": 1
        }
    },
    "Lyle Campbell": {
        "2007": {
            "P07": 1
        }
    },
    "Akira Ushioda": {
        "1993": {
            "W93": 1
        }
    },
    "Lynn Lambertf": {
        "1999": {
            "J99": 1
        }
    },
    "Sigrid Klerke": {
        "2014": {
            "S14": 1
        }
    },
    "Behrang": {
        "2003": {
            "N03": 1
        }
    },
    "Terry": {
        "2004": {
            "W04": 1
        }
    },
    "Alex Rudnick": {
        "2013": {
            "S13": 1
        },
        "2014": {
            "S14": 1
        }
    },
    "Ashish Vaswani": {
        "2012": {
            "P12": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Jihong Ding": {
        "2003": {
            "P03": 1
        }
    },
    "Mary Swift": {
        "2005": {
            "W05": 1
        }
    },
    "Veronika Lux": {
        "2000": {
            "W00": 1
        }
    },
    "Zhang Damerau Johnson": {
        "2003": {
            "W03": 1
        }
    },
    "Michael L Mc": {
        "1998": {
            "W98": 1
        }
    },
    "Menezes Quirk": {
        "2007": {
            "W07": 1
        }
    },
    "Martha Palmer Bhuvana": {
        "2011": {
            "W11": 1
        }
    },
    "Hollingshead Roark": {
        "2007": {
            "P07": 1
        }
    },
    "Dana": {
        "2010": {
            "W10": 1
        },
        "2012": {
            "W12": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "K Jessika Tim James R Stephen": {
        "2010": {
            "P10": 1
        }
    },
    "Hsin-Yih Lin": {
        "2008": {
            "D08": 1
        }
    },
    "Ann BIES": {
        "2004": {
            "W04": 1
        }
    },
    "Maryna Chernyshevich Vadim Stankevitch": {
        "2015": {
            "S15": 1
        }
    },
    "Tian Xia Liu": {
        "2009": {
            "D09": 1
        }
    },
    "David Tugwell": {
        "1995": {
            "E95": 1
        }
    },
    "Pan Shaw": {
        "1997": {
            "A97": 1
        }
    },
    "Sharon J Laskowski": {
        "1993": {
            "W93": 1
        }
    },
    "Stephan": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "N09": 1
        },
        "2010": {
            "W10": 1
        },
        "2012": {
            "N12": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Konstantinos": {
        "2015": {
            "W15": 1
        }
    },
    "Tal Baumel": {
        "2014": {
            "P14": 1
        }
    },
    "A Alabau": {
        "2014": {
            "W14": 1
        }
    },
    "Saga Petrovic": {
        "2010": {
            "N10": 1,
            "W10": 1
        }
    },
    "Todd Davies": {
        "1986": {
            "P86": 1
        }
    },
    "Christopher Collins": {
        "2004": {
            "P04": 1
        }
    },
    "Fan Yang Paul Vozila": {
        "2013": {
            "D13": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Chris Brockett": {
        "2001": {
            "P01": 1
        },
        "2002": {
            "W02": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Nicholas Gaylord": {
        "2009": {
            "P09": 1
        }
    },
    "Jiampojamarn Kondrak": {
        "2010": {
            "P10": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Yukiko I Nakano\u2020": {
        "2001": {
            "P01": 1
        }
    },
    "C Rodriguez": {
        "1987": {
            "E87": 1
        }
    },
    "Johansson Luis Nieto": {
        "2015": {
            "W15": 1
        }
    },
    "Dina": {
        "2012": {
            "W12": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Rachel": {
        "2015": {
            "W15": 1
        }
    },
    "Dinu": {
        "2014": {
            "P14": 1
        }
    },
    "Seth Kulick": {
        "2008": {
            "P08": 1
        },
        "2010": {
            "P10": 1
        },
        "1995": {
            "P95": 1
        }
    },
    "Paul Piwekitri bton ac uk": {
        "2003": {
            "E03": 1
        }
    },
    "Gregor": {
        "2015": {
            "W15": 1
        }
    },
    "Di_Eugenio Glass J": {
        "2002": {
            "W02": 1
        }
    },
    "Tanya": {
        "2001": {
            "W01": 1
        },
        "2002": {
            "W02": 1
        }
    },
    "McNamee Mayfield Charles Nicholas": {
        "2009": {
            "N09": 1
        }
    },
    "Elliott": {
        "2014": {
            "P14": 1
        }
    },
    "TungHui Chiang": {
        "1996": {
            "W96": 1
        }
    },
    "Ashequl Qadir": {
        "2011": {
            "D11": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Hang Li": {
        "2000": {
            "W00": 1
        },
        "2009": {
            "P09": 1
        },
        "2003": {
            "P03": 1
        },
        "1996": {
            "W96": 1
        },
        "1998": {
            "J98": 1
        }
    },
    "Probal Sengupta B B Chaudhuri": {
        "1997": {
            "J97": 1
        }
    },
    "Vidhya Govindaraju Ce Zhang Christopher R\u00b4e": {
        "2013": {
            "P13": 1
        }
    },
    "Jeffrey C Reynari": {
        "1999": {
            "P99": 1
        }
    },
    "Charles Sutton": {
        "2005": {
            "W05": 1
        }
    },
    "Hector Jimenez-Salazar": {
        "2007": {
            "S07": 1
        }
    },
    "Susann Luperfoy": {
        "1993": {
            "W93": 1
        }
    },
    "F Javier Ortega": {
        "2011": {
            "W11": 1
        }
    },
    "Kevin McGuinness": {
        "2014": {
            "W14": 1
        }
    },
    "Kang Liu": {
        "2013": {
            "P13": 1
        }
    },
    "Wang L\u00a8u Liu Hwang": {
        "2010": {
            "P10": 1
        }
    },
    "Yang Ye": {
        "2007": {
            "W07": 1
        }
    },
    "Wanghuan Dong": {
        "2015": {
            "W15": 1
        }
    },
    "K Liebscher": {
        "2005": {
            "W05": 1
        }
    },
    "Zhimao Lu": {
        "2004": {
            "W04": 1
        }
    },
    "Dan Flickinger": {
        "2008": {
            "W08": 1
        }
    },
    "John Blitzer Haghighi": {
        "2009": {
            "P09": 1
        }
    },
    "Martinez Lopez de": {
        "2015": {
            "W15": 1
        }
    },
    "Jerry Hobbs": {
        "2011": {
            "W11": 1
        }
    },
    "Nancy": {
        "2004": {
            "W04": 1
        },
        "2014": {
            "W14": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Tiejun Qin Dequan": {
        "2009": {
            "P09": 1
        }
    },
    "Masayuki ASAHARA": {
        "2003": {
            "P03": 1
        },
        "2004": {
            "W04": 1
        }
    },
    "M J Colbourn": {
        "1984": {
            "P84": 1
        }
    },
    "E L Pershina": {
        "1983": {
            "E83": 1
        }
    },
    "Riezler Simianer": {
        "2014": {
            "P14": 1
        }
    },
    "Joyce Y Chai Chen Zhang Tyler Baldwin": {
        "2006": {
            "P06": 1
        }
    },
    "Elena BARCENA": {
        "1998": {
            "P98": 1
        }
    },
    "Jing Bin Li": {
        "2014": {
            "D14": 1
        }
    },
    "P Cardinal": {
        "2007": {
            "P07": 1
        }
    },
    "Infante-Lopez de_Rijke": {
        "2004": {
            "P04": 1
        }
    },
    "D Salton J Ross D": {
        "2014": {
            "W14": 2
        }
    },
    "OKUMURA Manabu": {
        "1998": {
            "P98": 1
        }
    },
    "Nils": {
        "2003": {
            "W03": 1
        }
    },
    "Marti Hearst": {
        "2005": {
            "P05": 1
        }
    },
    "Feng Lin": {
        "2008": {
            "P08": 1
        }
    },
    "Judith Masthoff": {
        "2006": {
            "W06": 1
        }
    },
    "Kees van": {
        "2011": {
            "W11": 1
        },
        "2013": {
            "W13": 2
        }
    },
    "Kenneth C Litkowski": {
        "2005": {
            "P05": 1
        }
    },
    "Lingjia Deng": {
        "2014": {
            "W14": 1
        }
    },
    "William Morgan": {
        "2004": {
            "N04": 1
        }
    },
    "Stuart Shiebert": {
        "1997": {
            "J97": 1
        }
    },
    "Scott McCarley": {
        "2003": {
            "P03": 1
        }
    },
    "Thomas Pirlein": {
        "1991": {
            "E91": 1
        }
    },
    "Mary Ellen Foster": {
        "2006": {
            "E06": 1
        }
    },
    "Martha S Palmer": {
        "1986": {
            "P86": 1
        }
    },
    "Brianna Satinoff": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Xun Zhang": {
        "2015": {
            "S15": 1
        }
    },
    "Xiaorong Huang": {
        "1996": {
            "W96": 1
        }
    },
    "Philippe de_Groote": {
        "2001": {
            "P01": 1
        }
    },
    "Jaime G Carbonell": {
        "1984": {
            "P84": 1
        },
        "1979": {
            "P79": 1
        },
        "1981": {
            "P81": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Shankar Kumar DeNero": {
        "2010": {
            "N10": 1
        }
    },
    "Joel Tetreault": {
        "2004": {
            "W04": 1
        },
        "2010": {
            "W10": 1
        },
        "2012": {
            "N12": 1
        }
    },
    "benkingumich edu Ann abneyumich edu": {
        "2014": {
            "W14": 1
        }
    },
    "Kam-Fai Wong": {
        "2010": {
            "P10": 1
        }
    },
    "Harold Shin-ya AMANO": {
        "1988": {
            "P88": 1
        }
    },
    "Fatiha Sadat": {
        "2003": {
            "P03": 1
        },
        "2014": {
            "W14": 1
        },
        "2006": {
            "N06": 1,
            "P06": 1
        }
    },
    "Graham Neubig": {
        "2011": {
            "P11": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "W14": 1,
            "P14": 2
        },
        "2015": {
            "P15": 1
        }
    },
    "Chuan Wang": {
        "2015": {
            "P15": 1
        }
    },
    "Mansour": {
        "2015": {
            "D15": 1
        }
    },
    "Javier Artiles Julio Gonzalo Enrique Amig\u00b4o": {
        "2009": {
            "P09": 1
        }
    },
    "Oliviero Stock": {
        "2005": {
            "P05": 1
        }
    },
    "Graham Cormode": {
        "2012": {
            "D12": 1
        }
    },
    "Guangping Weiqun": {
        "2009": {
            "D09": 1
        }
    },
    "Norbert Reithinger": {
        "2004": {
            "P04": 1
        },
        "1997": {
            "A97": 1
        }
    },
    "Mikio Yamamoto": {
        "2001": {
            "J01": 1
        },
        "1996": {
            "W96": 1
        }
    },
    "R Barra-Chicote": {
        "2009": {
            "W09": 1
        }
    },
    "Qiang": {
        "2012": {
            "P12": 1
        }
    },
    "Irvine Chris": {
        "2013": {
            "N13": 1
        }
    },
    "TANAKA Hozumi": {
        "1996": {
            "W96": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "Ji Donghong Huang Changning": {
        "1997": {
            "W97": 1
        }
    },
    "Matthew Marge": {
        "2010": {
            "W10": 1
        }
    },
    "Li Eisner Khudanpur": {
        "2009": {
            "P09": 1
        }
    },
    "Evelyne Tzoukermann": {
        "1996": {
            "W96": 1
        },
        "1988": {
            "P88": 1
        }
    },
    "Alasdair D F Clarke": {
        "2014": {
            "E14": 1
        }
    },
    "Yufan Zhao": {
        "2003": {
            "W03": 1
        }
    },
    "Ioannis Klapaftis": {
        "2009": {
            "W09": 1
        }
    },
    "Langlais Yvon": {
        "2009": {
            "E09": 1
        }
    },
    "Wide R Hogenhout": {
        "1998": {
            "W98": 1
        }
    },
    "Huey-Chyun Chen": {
        "1992": {
            "A92": 1
        }
    },
    "Cao Sumita": {
        "2010": {
            "P10": 1
        }
    },
    "Nate Blaylock": {
        "2005": {
            "W05": 1
        }
    },
    "Dale A Miller": {
        "1986": {
            "P86": 1
        }
    },
    "Silva Neale": {
        "2015": {
            "W15": 2
        }
    },
    "David Pautler": {
        "1998": {
            "P98": 1
        }
    },
    "B Yegnanarayana": {
        "1984": {
            "P84": 1
        }
    },
    "David": {
        "2001": {
            "W01": 1
        },
        "2002": {
            "J02": 1
        },
        "2003": {
            "W03": 1
        },
        "2004": {
            "W04": 1
        },
        "2005": {
            "W05": 1,
            "J05": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "N07": 1
        },
        "2008": {
            "W08": 1,
            "D08": 1
        },
        "2009": {
            "W09": 2
        },
        "2010": {
            "N10": 1,
            "D10": 1,
            "W10": 3
        },
        "2012": {
            "E12": 1,
            "W12": 2
        },
        "2013": {
            "N13": 1
        },
        "2014": {
            "P14": 1
        },
        "2015": {
            "D15": 2,
            "W15": 2
        }
    },
    "Manolis Savva": {
        "2014": {
            "D14": 1
        }
    },
    "Koby Crammer": {
        "2005": {
            "P05": 1
        }
    },
    "Simone Alberto Da San": {
        "2015": {
            "S15": 1
        }
    },
    "Bob": {
        "2005": {
            "W05": 1
        }
    },
    "Tomag Holan": {
        "1997": {
            "A97": 1
        }
    },
    "Jimmy": {
        "2000": {
            "W00": 1
        },
        "2003": {
            "W03": 1
        },
        "2004": {
            "W04": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "W07": 1
        },
        "2008": {
            "W08": 2
        }
    },
    "Johns Hopkins University": {
        "2015": {
            "W15": 1
        }
    },
    "Xiaofei Lu": {
        "2005": {
            "P05": 1
        }
    },
    "Preslav I Nakov": {
        "2003": {
            "N03": 1
        }
    },
    "Paul B Emile L Jean": {
        "2006": {
            "W06": 1
        }
    },
    "Kentaro OGURA": {
        "1984": {
            "P84": 1
        },
        "1994": {
            "A94": 1
        }
    },
    "Ellen Foster": {
        "2009": {
            "P09": 1
        },
        "2004": {
            "W04": 1
        }
    },
    "Yung-Wei Ding": {
        "1998": {
            "P98": 1
        }
    },
    "Danilo Croce": {
        "2010": {
            "P10": 1
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Noam Ordan": {
        "2011": {
            "P11": 1
        }
    },
    "Erik Rauch": {
        "2003": {
            "W03": 1
        }
    },
    "Barbara Rosario": {
        "2001": {
            "W01": 1
        },
        "2004": {
            "P04": 1
        }
    },
    "Dekang Lin": {
        "1993": {
            "P93": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "1998": {
            "P98": 1
        },
        "2000": {
            "A00": 1
        },
        "2005": {
            "W05": 1
        },
        "2006": {
            "E06": 1,
            "P06": 3
        },
        "2008": {
            "P08": 2,
            "D08": 1
        },
        "2009": {
            "W09": 1
        },
        "2010": {
            "P10": 1,
            "W10": 1
        },
        "2012": {
            "N12": 1
        }
    },
    "Sara Tonelli": {
        "2009": {
            "W09": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Kumar Rangarajan": {
        "2008": {
            "P08": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Tanja Schultz": {
        "2006": {
            "N06": 1
        },
        "2007": {
            "N07": 1,
            "P07": 1
        }
    },
    "Yafa": {
        "2006": {
            "W06": 1
        }
    },
    "Boxing Chen": {
        "2011": {
            "W11": 1
        },
        "2013": {
            "N13": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1,
            "P15": 1
        }
    },
    "Chris Brew": {
        "2002": {
            "P02": 1
        },
        "2004": {
            "P04": 1
        },
        "2006": {
            "W06": 1,
            "P06": 2
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "P09": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Mihalcea I Moldovan": {
        "1999": {
            "P99": 1
        }
    },
    "Beijing": {
        "2015": {
            "P15": 1
        }
    },
    "Marco Passarotti": {
        "2009": {
            "W09": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Remko J H Scha": {
        "1982": {
            "P82": 1
        }
    },
    "Jing Zheng": {
        "2004": {
            "N04": 1
        }
    },
    "Bishan": {
        "2013": {
            "P13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Razvan Bunescu": {
        "2012": {
            "S12": 1
        }
    },
    "van_der": {
        "2008": {
            "W08": 1
        }
    },
    "Katrin Tomanek": {
        "2010": {
            "P10": 1
        }
    },
    "Donald W Kosy": {
        "1986": {
            "P86": 1
        }
    },
    "Thomas Wasow": {
        "1985": {
            "P85": 1
        },
        "1982": {
            "P82": 1
        }
    },
    "T Daniel Midgley": {
        "2009": {
            "P09": 1
        }
    },
    "Chin-Yew Geunbae": {
        "2009": {
            "D09": 1
        }
    },
    "Sabine Bergler": {
        "2008": {
            "P08": 1
        },
        "1997": {
            "W97": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Elif Yamangil": {
        "2008": {
            "P08": 1
        },
        "2012": {
            "N12": 1
        }
    },
    "Michael Paul": {
        "2009": {
            "D09": 1
        },
        "2001": {
            "W01": 1
        }
    },
    "Vamsi Krishna Akella": {
        "2015": {
            "S15": 1
        }
    },
    "Hao Cheng": {
        "2015": {
            "D15": 1
        }
    },
    "Jan Alexander": {
        "2013": {
            "W13": 1
        }
    },
    "Erin Fitzgerald": {
        "2009": {
            "P09": 1,
            "E09": 1
        }
    },
    "Nguyen Xuan Bach": {
        "2011": {
            "W11": 1
        }
    },
    "Hitoshi": {
        "2001": {
            "S01": 1
        }
    },
    "Ji\u0159\u00ed M\u00edrovsk\u00fd": {
        "2009": {
            "W09": 1
        }
    },
    "Kristopher Kyle": {
        "2013": {
            "W13": 1
        }
    },
    "Christine Howes": {
        "2009": {
            "W09": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Man": {
        "2013": {
            "P13": 1
        }
    },
    "Scott E Fahlman": {
        "2006": {
            "N06": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Michael White": {
        "1993": {
            "E93": 1,
            "P93": 1
        },
        "1998": {
            "W98": 1
        },
        "2001": {
            "W01": 1
        },
        "2002": {
            "W02": 1
        },
        "2003": {
            "W03": 1
        },
        "2006": {
            "W06": 1
        },
        "2009": {
            "N09": 1
        },
        "2012": {
            "W12": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Ahmad Emami": {
        "2008": {
            "D08": 1
        }
    },
    "Douglas B Moran": {
        "1982": {
            "P82": 1
        }
    },
    "Guodong Jian": {
        "2003": {
            "P03": 1
        }
    },
    "Fabrizio Morbini": {
        "2014": {
            "W14": 1
        }
    },
    "Laurie Hiyakumoto": {
        "1997": {
            "W97": 1
        }
    },
    "Geoffrey Zweig": {
        "2012": {
            "W12": 1,
            "D12": 1
        }
    },
    "Michael O'Donnell": {
        "2000": {
            "W00": 1
        }
    },
    "Kyoji": {
        "2000": {
            "W00": 1
        },
        "2002": {
            "W02": 1
        }
    },
    "Scott": {
        "2009": {
            "W09": 1
        },
        "2006": {
            "N06": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Balakrishnan Vardarajan": {
        "2009": {
            "W09": 1
        }
    },
    "Michael J Witbrock": {
        "2000": {
            "P00": 1
        }
    },
    "Dennis Mehay": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "P09": 1
        }
    },
    "Stanley J Rosenschein": {
        "1982": {
            "P82": 1
        }
    },
    "Matthias Eck": {
        "2007": {
            "N07": 1
        }
    },
    "Helmut Schmid": {
        "2001": {
            "P01": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "P11": 2
        },
        "2012": {
            "P12": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "R Diekema": {
        "2000": {
            "A00": 1
        }
    },
    "Coppola Moschitti": {
        "2009": {
            "N09": 1
        }
    },
    "Peter Neuhaus": {
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "Li Li": {
        "1998": {
            "P98": 1
        },
        "1997": {
            "A97": 1
        },
        "2014": {
            "D14": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "David M Blei": {
        "2007": {
            "S07": 1
        }
    },
    "Sadaoki": {
        "2009": {
            "N09": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Seungmi Lee": {
        "1997": {
            "W97": 1
        }
    },
    "Sawai Mamoru Matsumoto": {
        "2013": {
            "P13": 1
        }
    },
    "Jelena Proki\u00b4c": {
        "2009": {
            "W09": 2
        },
        "2010": {
            "W10": 1
        }
    },
    "Graeme Blackwood": {
        "2010": {
            "P10": 1
        }
    },
    "Hema Raghavan": {
        "2004": {
            "W04": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Michael Fleischman": {
        "2008": {
            "P08": 1
        },
        "2003": {
            "P03": 1,
            "N03": 1,
            "W03": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Li Weigang Liu Ting Wang Zhen Li Sheng": {
        "2004": {
            "W04": 1
        }
    },
    "Adwait Ratnaparkhi": {
        "2000": {
            "A00": 1
        },
        "1997": {
            "A97": 1
        }
    },
    "Sobha Lalitha": {
        "2014": {
            "W14": 1
        }
    },
    "Lei Lin": {
        "2015": {
            "S15": 1
        }
    },
    "Fernando Gomez": {
        "2010": {
            "S10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "R Joel": {
        "2007": {
            "N07": 2
        }
    },
    "Hideto Google Japan": {
        "2014": {
            "P14": 1
        }
    },
    "Philip R Cohen": {
        "1984": {
            "P84": 1
        },
        "1985": {
            "P85": 1
        },
        "1997": {
            "A97": 1,
            "E97": 1,
            "P97": 1
        },
        "1989": {
            "P89": 1
        }
    },
    "Stuart Geman": {
        "1998": {
            "J98": 1
        }
    },
    "Murat": {
        "2004": {
            "N04": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Cesar": {
        "2010": {
            "W10": 1
        }
    },
    "Aravind Seth Kulick": {
        "2004": {
            "W04": 1
        }
    },
    "G Herbert": {
        "2011": {
            "P11": 1
        }
    },
    "New York University": {
        "2015": {
            "D15": 1,
            "P15": 1
        }
    },
    "Paetzel Ramesh Manuvinakurike DeVault": {
        "2015": {
            "W15": 1
        }
    },
    "Heilman": {
        "2012": {
            "S12": 1
        },
        "2013": {
            "S13": 1
        }
    },
    "Miranda Marge": {
        "2010": {
            "W10": 1
        }
    },
    "Jerrold M Ginsparg": {
        "1983": {
            "A83": 1
        }
    },
    "Fei Wu": {
        "2010": {
            "P10": 1,
            "W10": 1
        }
    },
    "Peter Adolphs": {
        "2009": {
            "E09": 1
        },
        "2010": {
            "P10": 1
        }
    },
    "Fr\u00b4ed\u00b4eric Renato de_G\u00b4eraldine": {
        "2004": {
            "W04": 1
        }
    },
    "Olivia": {
        "2010": {
            "N10": 1,
            "W10": 1
        }
    },
    "Peter Nabende": {
        "2009": {
            "W09": 1
        }
    },
    "Tomoko Sampo Yoshinobu Jun\u2019ichi": {
        "2009": {
            "W09": 1
        }
    },
    "Sung Hyon Myaeng Jang": {
        "1999": {
            "P99": 1
        }
    },
    "Josh Clow": {
        "1997": {
            "A97": 1
        }
    },
    "Keeley b k jonessms ed ac uk Mark Johnsonmq edu au sgwaterinf ed ac uk": {
        "2012": {
            "P12": 1
        }
    },
    "Iris Hendrickx": {
        "2008": {
            "W08": 1
        },
        "2010": {
            "W10": 1
        }
    },
    "Marti": {
        "2001": {
            "W01": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Raksha Sharma": {
        "2015": {
            "D15": 1
        }
    },
    "Li Str\u00a8otgen Zell": {
        "2014": {
            "E14": 1
        }
    },
    "Myroslava O Dzikovska": {
        "2009": {
            "W09": 1
        }
    },
    "Zechner Waibel": {
        "1998": {
            "P98": 1
        }
    },
    "K Aravind": {
        "1999": {
            "J99": 1
        }
    },
    "Boyer": {
        "2012": {
            "W12": 1
        }
    },
    "Liang Huang": {
        "2006": {
            "W06": 1
        },
        "2007": {
            "P07": 1
        },
        "2008": {
            "P08": 1
        },
        "2010": {
            "P10": 1
        },
        "2012": {
            "N12": 1,
            "P12": 1
        },
        "2013": {
            "P13": 1,
            "D13": 1
        }
    },
    "Mihai Surdeanu": {
        "2008": {
            "P08": 1
        },
        "2010": {
            "N10": 1
        },
        "2012": {
            "D12": 1
        },
        "2014": {
            "P14": 1,
            "S14": 1
        }
    },
    "Strope": {
        "2012": {
            "W12": 1
        }
    },
    "Engonopoulos": {
        "2014": {
            "W14": 1
        }
    },
    "Roi Reichart Regina": {
        "2012": {
            "N12": 1
        }
    },
    "David Talbot": {
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Kurt Konolige": {
        "1988": {
            "P88": 1
        }
    },
    "Radboud Universiteit": {
        "2011": {
            "J11": 1
        }
    },
    "Farah": {
        "2004": {
            "W04": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "S12": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Wenzhi Xu": {
        "2010": {
            "W10": 1
        }
    },
    "Xiang Lan": {
        "2009": {
            "P09": 1
        }
    },
    "Peter Ljunglof": {
        "2000": {
            "W00": 1
        }
    },
    "Fudan": {
        "2015": {
            "D15": 2,
            "P15": 1
        }
    },
    "Dale": {
        "2009": {
            "W09": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "by Combining Multiple Linguistic": {
        "2014": {
            "J14": 1
        }
    },
    "J Schl\u00a8oder": {
        "2014": {
            "W14": 1
        }
    },
    "Daniel Braun": {
        "2015": {
            "W15": 1
        }
    },
    "Klein Smarr Nguyen": {
        "2003": {
            "W03": 1
        }
    },
    "Russ Beckley": {
        "2011": {
            "W11": 1
        }
    },
    "Patrick Blackburn": {
        "1993": {
            "E93": 1
        },
        "1995": {
            "E95": 1
        },
        "1991": {
            "E91": 1
        }
    },
    "Jurgen Wedekind": {
        "1993": {
            "E93": 1
        }
    },
    "Franz Beil": {
        "1999": {
            "P99": 1
        }
    },
    "Abdulaziz Alamri": {
        "2015": {
            "W15": 1
        }
    },
    "Sa\u02c7sa Hasan": {
        "2009": {
            "N09": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Sadegh Rasooli": {
        "2014": {
            "P14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Xiaodong Zeng": {
        "2014": {
            "W14": 1
        }
    },
    "Danqing Zhu Jin": {
        "2007": {
            "S07": 1
        }
    },
    "Eric V Slud": {
        "2011": {
            "D11": 1
        }
    },
    "Charles SCHAFER": {
        "2004": {
            "P04": 1
        }
    },
    "Nicola": {
        "2012": {
            "P12": 2
        },
        "2006": {
            "W06": 1
        }
    },
    "Leonhard Hennig": {
        "2015": {
            "W15": 1
        }
    },
    "K Geoffrey": {
        "2009": {
            "W09": 1
        }
    },
    "Mauser Hasan": {
        "2009": {
            "D09": 1
        }
    },
    "Sang Katja Hofmann": {
        "2009": {
            "W09": 1
        }
    },
    "Horacio Saggion": {
        "2015": {
            "W15": 1
        },
        "2012": {
            "W12": 1
        },
        "2014": {
            "E14": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Angel X Chang": {
        "2013": {
            "S13": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Ng Cardie": {
        "2002": {
            "P02": 1
        }
    },
    "Dan Goldwasser": {
        "2009": {
            "N09": 1
        },
        "2010": {
            "W10": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Rami Albatal": {
        "2014": {
            "W14": 1
        }
    },
    "Daniel P Flickinger": {
        "1984": {
            "P84": 1
        }
    },
    "Yi": {
        "2009": {
            "W09": 2
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "N13": 1,
            "D13": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "P15": 2
        }
    },
    "\u00b4Etienne Ailloud": {
        "2009": {
            "E09": 1
        }
    },
    "Shailly Goyal Niladri Chatterjee": {
        "2006": {
            "P06": 1
        }
    },
    "Said Soulhi": {
        "1984": {
            "P84": 1
        }
    },
    "Alicia Tribble": {
        "2006": {
            "N06": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Frank Uwe Reyle": {
        "1995": {
            "E95": 1
        }
    },
    "Yun Xing": {
        "2007": {
            "S07": 1
        }
    },
    "Suzanne Boyce Harriet Fell": {
        "2010": {
            "W10": 1
        }
    },
    "Graeme Hirst": {
        "2015": {
            "W15": 1
        },
        "1986": {
            "P86": 1
        },
        "1990": {
            "P90": 1
        },
        "1993": {
            "E93": 1
        },
        "2013": {
            "W13": 1
        },
        "2006": {
            "E06": 1
        },
        "2007": {
            "S07": 1
        },
        "2011": {
            "P11": 1
        },
        "1981": {
            "J81": 1
        },
        "2014": {
            "D14": 1,
            "P14": 1
        },
        "1983": {
            "P83": 1
        }
    },
    "Moro Navigli": {
        "2015": {
            "S15": 1
        }
    },
    "Sadaf": {
        "2011": {
            "W11": 1
        }
    },
    "John J Granacki": {
        "1987": {
            "P87": 1
        }
    },
    "Jianping Shen": {
        "2010": {
            "W10": 2
        }
    },
    "Staffan Larsson": {
        "2000": {
            "W00": 1
        },
        "2009": {
            "W09": 1
        }
    },
    "Margaret Mitchell": {
        "2010": {
            "N10": 1
        },
        "2012": {
            "W12": 2
        },
        "2013": {
            "N13": 1
        }
    },
    "Yuji Matsumoto": {
        "1993": {
            "P93": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "1998": {
            "W98": 1
        },
        "2003": {
            "W03": 1
        },
        "2006": {
            "P06": 1
        },
        "2009": {
            "P09": 2
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "D11": 1
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "P13": 1,
            "W13": 1
        },
        "2014": {
            "E14": 1
        },
        "2015": {
            "W15": 2,
            "P15": 2
        }
    },
    "Khurshid": {
        "2003": {
            "W03": 1
        }
    },
    "Hongyu": {
        "2015": {
            "P15": 1,
            "S15": 1
        }
    },
    "Joshua Bonner": {
        "2012": {
            "W12": 1
        }
    },
    "Gregory Druck": {
        "2009": {
            "P09": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Jianqiang Mat Chunyu Kit\u00e0 Dale Gerdemannt": {
        "2012": {
            "W12": 1
        }
    },
    "Ann E Robinson": {
        "1981": {
            "J81": 1
        }
    },
    "Denis Yuen": {
        "2006": {
            "N06": 1
        }
    },
    "Jacques de_Christopher": {
        "2010": {
            "W10": 1
        }
    },
    "Lisa C Braden-Harder": {
        "1988": {
            "A88": 1
        }
    },
    "Hermann": {
        "1997": {
            "W97": 1
        },
        "2003": {
            "J03": 1
        },
        "2005": {
            "W05": 1
        },
        "2006": {
            "W06": 1
        },
        "2009": {
            "N09": 1,
            "W09": 3
        },
        "2011": {
            "W11": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Katja Filippova": {
        "2014": {
            "P14": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Rui Wang": {
        "2009": {
            "E09": 1
        }
    },
    "Kim Choi": {
        "2000": {
            "P00": 1
        }
    },
    "Kruszewski Baroni": {
        "2014": {
            "S14": 1
        }
    },
    "Srikumar": {
        "2013": {
            "Q13": 1
        }
    },
    "Gonz`alez": {
        "2014": {
            "W14": 1
        }
    },
    "John Dowding": {
        "1986": {
            "P86": 1
        },
        "1992": {
            "P92": 1
        },
        "1994": {
            "P94": 1
        },
        "1999": {
            "P99": 1
        },
        "2001": {
            "P01": 1
        },
        "2003": {
            "P03": 1
        }
    },
    "Advaith": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Rafael E Banchs": {
        "2011": {
            "W11": 1
        },
        "2006": {
            "W06": 2
        },
        "2007": {
            "N07": 1
        }
    },
    "Victor Poznanski": {
        "1993": {
            "W93": 1
        }
    },
    "Moonjoo Kim": {
        "1995": {
            "E95": 1
        }
    },
    "M Albert": {
        "2012": {
            "P12": 1,
            "W12": 1
        }
    },
    "Lawrence S Moss": {
        "1993": {
            "P93": 1
        }
    },
    "Jiatao Gu": {
        "2015": {
            "P15": 1
        }
    },
    "Houfeng Wang Xu": {
        "2014": {
            "D14": 2
        }
    },
    "Vered Aharonson": {
        "2010": {
            "P10": 1
        }
    },
    "Victor Sergei Christian F Inna Katrina E": {
        "2003": {
            "W03": 1
        }
    },
    "P Eric": {
        "2010": {
            "W10": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Santiago Jim\u00b4enez": {
        "2013": {
            "W13": 1
        }
    },
    "Troy Tanner": {
        "1997": {
            "A97": 1
        }
    },
    "Don Tuggener": {
        "2011": {
            "W11": 1
        }
    },
    "Vladimir Pervouchine": {
        "2009": {
            "P09": 1
        }
    },
    "Andrew L Kun": {
        "2011": {
            "J11": 1
        }
    },
    "Ashish Venugopal": {
        "2009": {
            "N09": 1
        },
        "2003": {
            "P03": 1
        }
    },
    "Scott Crossley Jianmin Dai": {
        "2013": {
            "W13": 1
        }
    },
    "Tamura Watanabe": {
        "2012": {
            "D12": 1
        }
    },
    "Zhang Gildea": {
        "2008": {
            "P08": 1
        },
        "2005": {
            "P05": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Cicero dos Luciano Bianca": {
        "2015": {
            "K15": 1
        }
    },
    "Irena Spasic Goran Nenadic Kostas Manios Sophia Ananiadou": {
        "2003": {
            "E03": 1
        }
    },
    "Robert G Farrell": {
        "2007": {
            "N07": 1
        }
    },
    "John C Platt": {
        "2012": {
            "D12": 1
        }
    },
    "Alla Rozovskaya": {
        "2010": {
            "N10": 1,
            "D10": 1,
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 2
        },
        "2013": {
            "W13": 1,
            "D13": 1
        },
        "2014": {
            "P14": 1,
            "E14": 1
        }
    },
    "Dominic Espinosa": {
        "2009": {
            "N09": 1
        }
    },
    "Louis-Philippe": {
        "2011": {
            "P11": 1
        }
    },
    "Antonella Bristot": {
        "2006": {
            "W06": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Yevgeni Berzak": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "D15": 1,
            "K15": 1
        }
    },
    "Xipeng": {
        "2015": {
            "P15": 1
        }
    },
    "Duo Ding": {
        "2012": {
            "W12": 1
        }
    },
    "Stefan Schoenmackers": {
        "2006": {
            "W06": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Massimo Marino": {
        "1990": {
            "P90": 1
        }
    },
    "Ji Fang Bi Chen": {
        "2011": {
            "W11": 1
        }
    },
    "Hideki Tanaka": {
        "1999": {
            "P99": 1
        }
    },
    "Mu Nan Chi-Ho Ming": {
        "2008": {
            "P08": 1
        }
    },
    "Ahmed Hassan": {
        "2010": {
            "P10": 1,
            "D10": 1
        },
        "2012": {
            "D12": 1
        },
        "2006": {
            "W06": 2
        }
    },
    "Thin Nguyen": {
        "2010": {
            "P10": 1
        }
    },
    "TeliaSonera AB": {
        "2004": {
            "W04": 1
        }
    },
    "Niloofar Montazeri": {
        "2011": {
            "W11": 1
        }
    },
    "Rebecca Lunsford": {
        "2010": {
            "W10": 1
        }
    },
    "Patrick Ziering": {
        "2015": {
            "W15": 1
        }
    },
    "Cecile T Balkanski": {
        "1991": {
            "P91": 1
        }
    },
    "Joshua Gordon Susan L Epstein": {
        "2011": {
            "W11": 1
        }
    },
    "G Bowden WISE": {
        "2000": {
            "A00": 1
        }
    },
    "Martin C Emele": {
        "1998": {
            "P98": 1
        }
    },
    "David Kirk Evans": {
        "2004": {
            "N04": 1
        }
    },
    "Sophie Arnoult": {
        "2014": {
            "W14": 1
        }
    },
    "David N Chin": {
        "1994": {
            "A94": 1
        },
        "1988": {
            "J88": 1
        },
        "1983": {
            "P83": 1
        }
    },
    "Natalie M Schrimpf Gaja Jarosz": {
        "2014": {
            "W14": 1
        }
    },
    "Lidan": {
        "2009": {
            "N09": 1
        }
    },
    "Christian Posse": {
        "2007": {
            "S07": 1
        }
    },
    "Hadi Banaee": {
        "2013": {
            "W13": 1
        }
    },
    "Alicia Sagae": {
        "2010": {
            "W10": 1
        }
    },
    "A Moore": {
        "1981": {
            "J81": 1
        }
    },
    "Paul McNamee": {
        "2013": {
            "N13": 1
        }
    },
    "Liu Gildea": {
        "2006": {
            "P06": 1
        }
    },
    "Anssi Yli-Jyra": {
        "2003": {
            "E03": 1
        }
    },
    "William Schuler": {
        "1998": {
            "P98": 1
        },
        "1999": {
            "P99": 1
        },
        "2000": {
            "P00": 1
        },
        "2001": {
            "P01": 1
        },
        "2003": {
            "P03": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "P09": 1
        },
        "2011": {
            "P11": 1,
            "W11": 2
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "N13": 1
        },
        "2014": {
            "W14": 1,
            "S14": 1
        },
        "2015": {
            "W15": 2
        }
    },
    "Csomai Mihalcea": {
        "2008": {
            "P08": 1
        }
    },
    "Faisal Ahmad": {
        "2008": {
            "P08": 1
        }
    },
    "Martin Chodorow": {
        "2000": {
            "A00": 1
        },
        "2012": {
            "N12": 1
        },
        "1999": {
            "W99": 1
        }
    },
    "Wlodek Zadrozny": {
        "2000": {
            "A00": 1
        }
    },
    "Kilian Evang": {
        "2011": {
            "W11": 1
        },
        "2014": {
            "S14": 1
        }
    },
    "Ellen M Voorhees": {
        "2008": {
            "P08": 1
        }
    },
    "Takaaki Tanaka": {
        "2006": {
            "W06": 1
        }
    },
    "Mehwish Riaz": {
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Eileen Fitzpatrick Bachenko": {
        "2012": {
            "W12": 1
        }
    },
    "Jenny Rose Finkel": {
        "2008": {
            "P08": 2
        },
        "2010": {
            "P10": 1
        },
        "2005": {
            "P05": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Bicknell Levy": {
        "2010": {
            "P10": 1
        }
    },
    "Leuski Patel Traum": {
        "2006": {
            "W06": 1
        }
    },
    "Giuliani Knoll": {
        "2009": {
            "P09": 1
        }
    },
    "H\u00b4ector Martinez Alonso": {
        "2014": {
            "S14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Shengfeng Guodong Xiaojun": {
        "2012": {
            "D12": 1
        }
    },
    "Denmark NISLab": {
        "2002": {
            "W02": 1
        }
    },
    "UdoHahn": {
        "2000": {
            "A00": 1
        }
    },
    "Sven Hurum": {
        "1988": {
            "A88": 1
        }
    },
    "Aaron M Cohen": {
        "2005": {
            "W05": 1
        }
    },
    "Simone Teufelt": {
        "2000": {
            "W00": 1
        }
    },
    "Eric K Ringger": {
        "1996": {
            "P96": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Markus Dickinson": {
        "2005": {
            "P05": 1
        },
        "2006": {
            "E06": 1
        },
        "2008": {
            "P08": 1,
            "W08": 1
        },
        "2009": {
            "E09": 1
        },
        "2010": {
            "P10": 1,
            "W10": 2
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 3
        },
        "2013": {
            "W13": 2
        },
        "2014": {
            "S14": 1
        },
        "2015": {
            "W15": 2
        }
    },
    "Xiaojin Jerry Zhu": {
        "2008": {
            "P08": 1
        }
    },
    "D G Childers": {
        "1984": {
            "P84": 1
        }
    },
    "Heba Elfardy Salloum": {
        "2014": {
            "P14": 1
        }
    },
    "Pinar Marsi": {
        "2015": {
            "D15": 1
        }
    },
    "Paul Buitelaar": {
        "2008": {
            "W08": 1
        },
        "2003": {
            "E03": 1
        },
        "2013": {
            "N13": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Nigel Ward'": {
        "1998": {
            "W98": 1
        }
    },
    "Yang Feng": {
        "2009": {
            "D09": 1
        }
    },
    "Dipankar Das": {
        "2009": {
            "P09": 1
        },
        "2011": {
            "W11": 1
        },
        "2014": {
            "S14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Britta D Zeller": {
        "2013": {
            "W13": 1
        }
    },
    "Marisa Ulivieri": {
        "2007": {
            "P07": 1
        }
    },
    "Yuto Hatakoshi": {
        "2014": {
            "W14": 1
        }
    },
    "Minwei Bowen Bing Sridhar": {
        "2015": {
            "D15": 1
        }
    },
    "Marcia Linebarger": {
        "1986": {
            "P86": 1
        }
    },
    "Giuseppe Attardi": {
        "2011": {
            "W11": 1
        },
        "2014": {
            "S14": 1
        }
    },
    "Zens Ney": {
        "2003": {
            "P03": 1,
            "E03": 1
        }
    },
    "Levi King": {
        "2014": {
            "S14": 1
        }
    },
    "Fuchun Peng": {
        "2003": {
            "N03": 1,
            "W03": 1
        }
    },
    "Dan Shen": {
        "2006": {
            "P06": 1
        }
    },
    "M Amanda": {
        "2002": {
            "W02": 1
        }
    },
    "Ross Turner": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "W09": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "A John": {
        "1990": {
            "W90": 1
        }
    },
    "Harry": {
        "2009": {
            "W09": 1
        },
        "2011": {
            "W11": 1
        },
        "2013": {
            "W13": 1
        },
        "2006": {
            "W06": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Ekaterina": {
        "2011": {
            "W11": 1
        },
        "2013": {
            "S13": 1,
            "N13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Joseph Z Chang": {
        "2012": {
            "P12": 1
        }
    },
    "Michael Kaisser": {
        "2008": {
            "P08": 1
        }
    },
    "Pacheco Pablo Ariel Ariel Dominguez": {
        "2012": {
            "N12": 1
        }
    },
    "Manjuan Duan": {
        "2015": {
            "W15": 1
        }
    },
    "Jonathan Berant": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "W14": 1,
            "P14": 1
        }
    },
    "Daniele Scarfini": {
        "2014": {
            "P14": 1
        }
    },
    "Zhuowei Bao Benny Kimelfeld Yunyao Li": {
        "2011": {
            "P11": 1
        }
    },
    "Jacob": {
        "2014": {
            "W14": 1
        },
        "2009": {
            "N09": 1
        },
        "2013": {
            "N13": 1,
            "P13": 1,
            "W13": 1,
            "D13": 2
        },
        "2006": {
            "N06": 1
        }
    },
    "Nan Duan": {
        "2012": {
            "D12": 1
        }
    },
    "Tilman": {
        "2009": {
            "W09": 1
        }
    },
    "Brian Alan W Maxine": {
        "2008": {
            "P08": 1
        }
    },
    "Lillian": {
        "2010": {
            "N10": 1
        }
    },
    "R A Helzerman": {
        "2000": {
            "A00": 1
        }
    },
    "Andi Winterboer": {
        "2009": {
            "W09": 1
        }
    },
    "Adriane": {
        "2009": {
            "N09": 1
        },
        "2005": {
            "W05": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Aaron Cordova": {
        "2008": {
            "W08": 1
        }
    },
    "Igor Boyko": {
        "2006": {
            "W06": 1
        }
    },
    "Hong Yu": {
        "2008": {
            "W08": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Robert A Liebscher": {
        "2004": {
            "P04": 1
        }
    },
    "Geunbae": {
        "2008": {
            "W08": 1
        }
    },
    "Nitika Mathur": {
        "2014": {
            "W14": 1
        }
    },
    "Albert Kim": {
        "1994": {
            "P94": 1
        }
    },
    "Jakob Uszkoreit": {
        "2010": {
            "D10": 1
        },
        "2011": {
            "D11": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Sang-Bum Kim": {
        "2003": {
            "W03": 1
        }
    },
    "Atanas Chanev": {
        "2011": {
            "W11": 1
        }
    },
    "Luana Bulat": {
        "2015": {
            "P15": 1
        }
    },
    "MOCHIZUKI Hajime": {
        "1998": {
            "P98": 1
        }
    },
    "Jerome": {
        "2004": {
            "W04": 1
        }
    },
    "Mark T Maybury": {
        "1998": {
            "P98": 1
        }
    },
    "Kristina Toutanova Hassan": {
        "2014": {
            "P14": 1
        }
    },
    "Satoru IKEHARA": {
        "1994": {
            "A94": 1
        }
    },
    "Harry R Tennant": {
        "1983": {
            "P83": 1
        }
    },
    "Zou": {
        "2013": {
            "D13": 1
        }
    },
    "Alessio Plebe": {
        "2007": {
            "W07": 1
        }
    },
    "Nicholas Asher": {
        "2008": {
            "W08": 1
        },
        "1993": {
            "E93": 1
        },
        "2012": {
            "S12": 1
        }
    },
    "Petra": {
        "2014": {
            "W14": 1
        }
    },
    "Ronen Feldman": {
        "2006": {
            "P06": 1
        }
    },
    "Jeffrey S Sorensen": {
        "2006": {
            "P06": 1
        }
    },
    "Tim Rumbell": {
        "2007": {
            "P07": 1
        }
    },
    "Noha Alnazzawi": {
        "2014": {
            "W14": 1
        }
    },
    "Peter Ford Dominey": {
        "2003": {
            "W03": 1
        }
    },
    "Tyler Baldwin Yunyao Li Bogdan Alexe Ioana R": {
        "2013": {
            "P13": 1
        }
    },
    "J Scott": {
        "2009": {
            "N09": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Carlos A": {
        "2002": {
            "W02": 1
        }
    },
    "Timothy Baldwin": {
        "2001": {
            "P01": 1
        },
        "2003": {
            "P03": 1
        },
        "2007": {
            "S07": 1
        },
        "2009": {
            "P09": 1
        },
        "2013": {
            "S13": 1,
            "W13": 1
        },
        "2014": {
            "W14": 1,
            "E14": 1
        }
    },
    "Ali H\u00a8urriyeto\u02c7glu": {
        "2014": {
            "W14": 1
        }
    },
    "Carlo Strapparava": {
        "2015": {
            "S15": 1
        },
        "2012": {
            "D12": 1
        },
        "2005": {
            "P05": 2
        },
        "2014": {
            "D14": 1,
            "P14": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Elisabeth Lien": {
        "2014": {
            "E14": 1,
            "S14": 1
        }
    },
    "Filali": {
        "2005": {
            "P05": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Domenico Toscani": {
        "2014": {
            "P14": 1
        }
    },
    "S": {
        "2013": {
            "W13": 1
        }
    },
    "Nadir Durrani": {
        "2010": {
            "P10": 1,
            "N10": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Martijn": {
        "2010": {
            "W10": 1
        }
    },
    "Desai Chen": {
        "2010": {
            "N10": 1,
            "S10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "H James Lise": {
        "2015": {
            "P15": 1
        }
    },
    "Kevin Lerman": {
        "2009": {
            "N09": 1,
            "E09": 1
        }
    },
    "Nan Decker": {
        "1985": {
            "P85": 1
        }
    },
    "Andreas Peldszus": {
        "2012": {
            "E12": 1
        },
        "2015": {
            "D15": 1,
            "W15": 1
        }
    },
    "Verena Rieser": {
        "2005": {
            "W05": 1,
            "P05": 1
        },
        "2006": {
            "P06": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "E09": 1
        },
        "2010": {
            "W10": 1
        },
        "2012": {
            "D12": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Chun-Hung Wang": {
        "2013": {
            "W13": 1
        }
    },
    "Cristian Danescu-Niculescu-Mizil": {
        "2009": {
            "N09": 1
        },
        "2010": {
            "P10": 1,
            "N10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Ben Medlock": {
        "2007": {
            "P07": 1
        }
    },
    "A Heeman": {
        "2010": {
            "W10": 1
        }
    },
    "Collin F Baker": {
        "2003": {
            "P03": 1
        }
    },
    "Temple": {
        "2011": {
            "P11": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Kemal": {
        "2014": {
            "D14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Sharon Small": {
        "2003": {
            "W03": 1
        },
        "2004": {
            "N04": 1
        }
    },
    "Nadine Glas Catherine Pelachaud": {
        "2015": {
            "W15": 1
        }
    },
    "Hamid R Chinaei Brahim Chaib-draa Hamidreza Chinaei ulaval ca Brahim Chaib-Draaift ulaval ca": {
        "2014": {
            "W14": 1
        }
    },
    "Bilge": {
        "2012": {
            "W12": 1
        }
    },
    "Esther Levin": {
        "2007": {
            "W07": 1
        }
    },
    "Braja Gopal Patra": {
        "2014": {
            "S14": 1
        }
    },
    "Sorami Hisamoto": {
        "2013": {
            "W13": 1
        }
    },
    "Sumit Negi": {
        "2009": {
            "P09": 1
        }
    },
    "David Reitter": {
        "2010": {
            "W10": 1
        },
        "2004": {
            "N04": 1
        }
    },
    "David Mare\u02c7cek Popel": {
        "2013": {
            "P13": 1
        }
    },
    "Ken Williams Christopher Dozier Andrew McCulloh": {
        "2004": {
            "W04": 1
        }
    },
    "Trevor": {
        "2014": {
            "P14": 1
        }
    },
    "Young Kyoon Han": {
        "1993": {
            "W93": 1
        }
    },
    "Cem Akkaya": {
        "2009": {
            "N09": 1
        },
        "2011": {
            "W11": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Tomoko Katsuya Yoshimasa Takashi": {
        "2006": {
            "P06": 1
        }
    },
    "Xiuming HUANG": {
        "1984": {
            "P84": 1
        }
    },
    "Valerio Basile": {
        "2013": {
            "W13": 1
        }
    },
    "Xuan": {
        "2010": {
            "W10": 1
        }
    },
    "Satoshi Nakamura": {
        "2009": {
            "W09": 1
        },
        "2014": {
            "W14": 1,
            "P14": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Poyao Huang": {
        "2015": {
            "P15": 1
        }
    },
    "Steve Whittaker": {
        "1988": {
            "P88": 1
        },
        "1989": {
            "E89": 1
        }
    },
    "Sina": {
        "2009": {
            "W09": 2
        }
    },
    "Guillaume Gravier Pascale S\u00b4ebillot": {
        "2013": {
            "D13": 1
        }
    },
    "Zhiqiang Wang": {
        "2009": {
            "W09": 1
        }
    },
    "Luke Zettlemoyer": {
        "2011": {
            "P11": 1
        },
        "2013": {
            "Q13": 1,
            "D13": 1
        },
        "2015": {
            "D15": 2
        }
    },
    "Ester Boldrini Patricio Mart\u2019nez-Barco": {
        "2011": {
            "W11": 1
        }
    },
    "Sebastian Riedel Naradowsky": {
        "2012": {
            "D12": 1
        }
    },
    "tYih-Fen Luo Chang": {
        "1992": {
            "P92": 1
        }
    },
    "Yuk Wah Wong": {
        "2010": {
            "P10": 1
        },
        "2006": {
            "N06": 1
        },
        "2007": {
            "N07": 1,
            "P07": 1
        }
    },
    "Moritz Dipanjan": {
        "2014": {
            "P14": 1
        }
    },
    "Christine H": {
        "2000": {
            "W00": 1
        }
    },
    "Jiang Huang Liu L\u00a8u": {
        "2008": {
            "P08": 1
        }
    },
    "Claudio Giuliano": {
        "2005": {
            "P05": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Maria Kelly": {
        "2010": {
            "S10": 1
        }
    },
    "Amit Bronner Christof Monz": {
        "2012": {
            "E12": 1
        }
    },
    "C\u00a8uneyd TANTU G\u02c7 ADALI Kemal OFLAZER": {
        "2007": {
            "P07": 1
        }
    },
    "Susan E Brennan": {
        "2000": {
            "P00": 1
        },
        "1987": {
            "P87": 1
        },
        "1988": {
            "A88": 1
        }
    },
    "Ran Xu": {
        "2014": {
            "W14": 1
        }
    },
    "Jin GUO": {
        "1998": {
            "P98": 1
        }
    },
    "Rui Fang": {
        "2013": {
            "D13": 1
        }
    },
    "David Burkett": {
        "2008": {
            "D08": 1
        },
        "2010": {
            "N10": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "N12": 1,
            "D12": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "William Croft": {
        "1986": {
            "P86": 1
        }
    },
    "Anthony Aue": {
        "2002": {
            "W02": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Johanna Moore": {
        "2009": {
            "W09": 1,
            "E09": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Joyce Y Chai Rong Jin": {
        "2004": {
            "W04": 1
        }
    },
    "Chew Lim": {
        "2003": {
            "P03": 1
        },
        "2013": {
            "P13": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Carolyn P Ros\u00e9": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "N10": 2
        }
    },
    "Adam": {
        "2013": {
            "P13": 1,
            "W13": 2
        },
        "2006": {
            "W06": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Dongqing Zhu": {
        "2013": {
            "S13": 1
        }
    },
    "Mu Li": {
        "2008": {
            "W08": 1
        },
        "2003": {
            "P03": 1
        },
        "2012": {
            "P12": 1,
            "D12": 1
        }
    },
    "F Zaidan": {
        "2010": {
            "N10": 1,
            "W10": 1
        },
        "2011": {
            "P11": 2,
            "W11": 1
        }
    },
    "T Mark Ellison Simon Kirby": {
        "2006": {
            "P06": 1
        }
    },
    "Dredze Crammer": {
        "2008": {
            "P08": 1
        }
    },
    "Gilbert Rondeau": {
        "2012": {
            "N12": 1
        }
    },
    "Danilo": {
        "2011": {
            "D11": 1
        }
    },
    "Dhanya Sridhar": {
        "2014": {
            "W14": 1
        }
    },
    "Blake Howald": {
        "2013": {
            "P13": 1,
            "W13": 1
        }
    },
    "Will Styler": {
        "2013": {
            "N13": 1
        }
    },
    "Mei Yang": {
        "2006": {
            "E06": 1
        }
    },
    "Heike": {
        "2008": {
            "W08": 1
        }
    },
    "Sanjeev Khudanpur": {
        "2008": {
            "P08": 1
        },
        "2012": {
            "W12": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Raymond J Mooney": {
        "1996": {
            "W96": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        },
        "2009": {
            "P09": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Fernando Seth": {
        "2005": {
            "P05": 1
        }
    },
    "Basile Novielli": {
        "2015": {
            "S15": 1
        }
    },
    "Julie Weeds": {
        "2003": {
            "W03": 1
        },
        "2004": {
            "P04": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Harold L Somers": {
        "1983": {
            "A83": 1
        }
    },
    "Alexander Conrad": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Rajen": {
        "2006": {
            "W06": 1
        }
    },
    "Maria Maria Martin Mike": {
        "2013": {
            "W13": 1
        }
    },
    "Derya Ozkan": {
        "2011": {
            "P11": 1
        }
    },
    "Krisztian Balog Gilad Mishne Maarten de_Rijke": {
        "2006": {
            "E06": 1
        }
    },
    "Diana McCarthy": {
        "1998": {
            "P98": 1
        },
        "2000": {
            "A00": 1
        },
        "2004": {
            "P04": 1
        },
        "2007": {
            "S07": 2
        },
        "2009": {
            "P09": 1,
            "W09": 1,
            "D09": 1
        },
        "2010": {
            "S10": 1
        },
        "2012": {
            "S12": 1
        }
    },
    "Anders": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "N13": 2,
            "P13": 2,
            "W13": 1,
            "D13": 1
        },
        "2014": {
            "D14": 1,
            "P14": 2
        },
        "2015": {
            "D15": 1,
            "W15": 2,
            "K15": 1
        }
    },
    "Fossati Ghidoni Di_Eugenio Cruz Xiao Subba": {
        "2006": {
            "W06": 1
        }
    },
    "Wanxiang Che": {
        "2006": {
            "P06": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Guangfan Sun": {
        "2010": {
            "W10": 1
        }
    },
    "Sina Zarriell Kyle Richardson": {
        "2013": {
            "W13": 1
        }
    },
    "Zhong": {
        "2006": {
            "W06": 1
        }
    },
    "Akio Yokoo": {
        "1999": {
            "P99": 1
        }
    },
    "Sumire Uematsu Jun\u2019ichi": {
        "2009": {
            "W09": 1
        }
    },
    "Siddharth": {
        "2006": {
            "W06": 1
        }
    },
    "Rebecca J Passonneau": {
        "1987": {
            "P87": 1
        },
        "1988": {
            "J88": 1,
            "P88": 1
        },
        "1989": {
            "P89": 1
        },
        "1991": {
            "P91": 1
        },
        "1993": {
            "P93": 1
        },
        "2013": {
            "N13": 1,
            "W13": 1
        }
    },
    "SaniScott": {
        "1998": {
            "W98": 1
        }
    },
    "Mike": {
        "2008": {
            "W08": 1
        },
        "2012": {
            "D12": 1
        },
        "2013": {
            "S13": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Yoan Guti\u00e9rrez": {
        "2011": {
            "W11": 1
        }
    },
    "Kenneth W Churcht": {
        "2001": {
            "J01": 1
        }
    },
    "Miroslav Martinovic": {
        "1992": {
            "P92": 1
        }
    },
    "Fei Huang": {
        "2009": {
            "P09": 2
        },
        "2010": {
            "P10": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Xiaoqiang Zhou": {
        "2015": {
            "S15": 1
        }
    },
    "Jeong Titov": {
        "2010": {
            "P10": 1
        }
    },
    "Alexandra Kinyon": {
        "2001": {
            "P01": 1
        },
        "2002": {
            "W02": 1
        },
        "2003": {
            "P03": 1,
            "W03": 1
        }
    },
    "Christian Herv\u00b4e Teresa Yu": {
        "2008": {
            "W08": 1
        }
    },
    "Ivo Ipsic": {
        "2014": {
            "W14": 1
        }
    },
    "David AndreofT Evans": {
        "1981": {
            "P81": 1
        }
    },
    "Heinz Marburger": {
        "1983": {
            "E83": 1
        }
    },
    "Marlies van_der_Wees Arianna Bisazza Christof Monz": {
        "2015": {
            "W15": 2
        }
    },
    "Daniel Stein": {
        "2009": {
            "W09": 1
        }
    },
    "Jeong-Mi Cho": {
        "1999": {
            "W99": 1
        }
    },
    "Laura Kallmeyer": {
        "2009": {
            "W09": 1
        },
        "2011": {
            "W11": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Dawei Song Yuexian Hou Peng Zhang": {
        "2010": {
            "P10": 1
        }
    },
    "Benoit Farley": {
        "2003": {
            "W03": 1
        }
    },
    "Xuanjing": {
        "2010": {
            "W10": 1
        }
    },
    "John C Hendersont": {
        "2000": {
            "W00": 1
        }
    },
    "A Cynthia": {
        "2003": {
            "W03": 1
        }
    },
    "Shumpei Kobayashi": {
        "2010": {
            "P10": 1
        }
    },
    "Peng Jin": {
        "2010": {
            "W10": 1
        },
        "2012": {
            "S12": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Sporleder Li": {
        "2009": {
            "E09": 1
        }
    },
    "Achim Stein": {
        "2009": {
            "W09": 1
        }
    },
    "Jonas Kuhn": {
        "2000": {
            "P00": 2
        },
        "2002": {
            "P02": 1
        },
        "2005": {
            "W05": 1
        },
        "2006": {
            "P06": 1
        },
        "2009": {
            "P09": 1,
            "W09": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Daniel Lyons": {
        "1990": {
            "P90": 1
        }
    },
    "Vassilina Nikoulina": {
        "2008": {
            "W08": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Keh-Jiann Chen": {
        "2000": {
            "W00": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Josh CLOW": {
        "2000": {
            "A00": 1
        }
    },
    "Ari Rappoport": {
        "2005": {
            "W05": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 2
        },
        "2008": {
            "P08": 2
        },
        "2009": {
            "W09": 1,
            "D09": 1,
            "E09": 1
        },
        "2010": {
            "P10": 2,
            "D10": 1
        },
        "2013": {
            "D13": 1
        },
        "2015": {
            "W15": 1,
            "P15": 1
        }
    },
    "Johannes Bjerva": {
        "2014": {
            "S14": 1
        }
    },
    "Arendse Bernth": {
        "2000": {
            "W00": 1
        }
    },
    "Mark G Core": {
        "2003": {
            "E03": 1
        },
        "2004": {
            "W04": 1
        }
    },
    "Xiaohua Liu": {
        "2011": {
            "P11": 1
        }
    },
    "Priyanka Sinha Lipika Dey": {
        "2015": {
            "W15": 1
        }
    },
    "Ashutosh Joshi": {
        "2003": {
            "W03": 1
        }
    },
    "Ganitkevitch": {
        "2011": {
            "D11": 1
        }
    },
    "Alexander Mehler": {
        "2006": {
            "W06": 1
        }
    },
    "Eva Sourjikova Ekbal": {
        "2010": {
            "W10": 2
        }
    },
    "Robin F Karlin": {
        "1988": {
            "P88": 1
        }
    },
    "Karin Murthy": {
        "2010": {
            "P10": 1
        }
    },
    "Rafael Michael": {
        "2015": {
            "S15": 1
        }
    },
    "McCallum": {
        "2003": {
            "W03": 1
        }
    },
    "Mariko Nakamura": {
        "1994": {
            "A94": 1
        }
    },
    "James F Anent": {
        "1999": {
            "J99": 1
        }
    },
    "Daum\u00b4e": {
        "2012": {
            "E12": 1
        }
    },
    "Kristina Striegnitz": {
        "2009": {
            "W09": 1,
            "E09": 1
        },
        "2002": {
            "P02": 1
        }
    },
    "Karine Megerdoomian": {
        "2004": {
            "W04": 1
        }
    },
    "Rasoul Samad Zadeh Kaljahi": {
        "2010": {
            "P10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Anoop Kunchukuttan": {
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Fuchun": {
        "2004": {
            "N04": 1
        }
    },
    "Cody Rioux Sadid A Hasan Yllias Chali": {
        "2014": {
            "D14": 1
        }
    },
    "Ioannis Konstas": {
        "2009": {
            "E09": 1
        }
    },
    "Gertjan van_Noord": {
        "1989": {
            "P89": 1
        },
        "1993": {
            "E93": 1
        },
        "1998": {
            "W98": 1
        },
        "2000": {
            "J00": 1
        },
        "2004": {
            "P04": 1
        },
        "2006": {
            "W06": 1
        },
        "2008": {
            "W08": 1
        },
        "2009": {
            "W09": 2,
            "E09": 1
        },
        "2010": {
            "D10": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "E Anne Paulson": {
        "1982": {
            "P82": 1
        }
    },
    "Gumwon Hong": {
        "2009": {
            "P09": 1
        }
    },
    "Kathleen Michael Elhadad": {
        "1999": {
            "P99": 1
        }
    },
    "van_den_Djoerd Michel": {
        "2015": {
            "D15": 1
        }
    },
    "Stewart": {
        "2014": {
            "S14": 1
        }
    },
    "Antonio Branco": {
        "1998": {
            "P98": 1
        }
    },
    "Sunghyun Park": {
        "2014": {
            "W14": 1
        }
    },
    "Helena Hong Gao": {
        "2014": {
            "W14": 1
        }
    },
    "Morbini": {
        "2011": {
            "P11": 1
        }
    },
    "Katja Michael": {
        "2013": {
            "N13": 1,
            "D13": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Daniel M Dunlavy John Conroy Dianne P O\u2019Leary": {
        "2003": {
            "N03": 1
        }
    },
    "Jianfeng": {
        "2009": {
            "D09": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "J Paul": {
        "2012": {
            "N12": 1,
            "W12": 1
        }
    },
    "Duan": {
        "2014": {
            "P14": 1
        }
    },
    "Zhuang": {
        "2010": {
            "D10": 1
        }
    },
    "Keiji Takida": {
        "1998": {
            "W98": 1
        }
    },
    "Egon W Stemle": {
        "2012": {
            "W12": 1
        }
    },
    "Gregory Kathleen F": {
        "2002": {
            "J02": 1
        }
    },
    "Charniak Goldwater": {
        "1998": {
            "W98": 1
        }
    },
    "Brijesh Bhatt Subhash Kunnath Pushpak": {
        "2014": {
            "W14": 1
        }
    },
    "Dipti Misra": {
        "2010": {
            "W10": 1
        },
        "2014": {
            "W14": 2
        },
        "2015": {
            "W15": 1
        }
    },
    "Kazunari ITO": {
        "2003": {
            "W03": 1
        }
    },
    "Itsuki NODA": {
        "1998": {
            "P98": 1
        }
    },
    "M W David": {
        "1997": {
            "W97": 1
        }
    },
    "Hiroshi Echizen-ya": {
        "2010": {
            "P10": 1
        }
    },
    "Daniel Gildea": {
        "1995": {
            "P95": 1
        },
        "2000": {
            "P00": 1
        },
        "2002": {
            "P02": 1
        },
        "2003": {
            "P03": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        },
        "2013": {
            "N13": 1,
            "W13": 1
        }
    },
    "Oren Tsur Dan Calacci David Lazer": {
        "2015": {
            "P15": 1
        }
    },
    "Daniel Feinstein": {
        "2006": {
            "P06": 1
        }
    },
    "Alexandre": {
        "2011": {
            "W11": 1
        }
    },
    "S Montero": {
        "2007": {
            "W07": 1
        }
    },
    "Wei-Yun Ma": {
        "2009": {
            "P09": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Kumar Asif": {
        "2010": {
            "S10": 1
        }
    },
    "Lee-Feng Chien": {
        "1998": {
            "P98": 1
        }
    },
    "Michael McCord": {
        "1990": {
            "P90": 1,
            "J90": 1
        }
    },
    "Eyal Sagi": {
        "2009": {
            "W09": 1
        }
    },
    "Kevin Zhang Qun LIU Hao ZHANG Xue-Qi": {
        "2002": {
            "W02": 1
        }
    },
    "Wee Sun Nan Hai Leong": {
        "2009": {
            "D09": 1
        }
    },
    "Guang Xiang": {
        "2013": {
            "P13": 1
        }
    },
    "Christos Christodoulopoulos": {
        "2015": {
            "P15": 1
        }
    },
    "Yi-jie Tang": {
        "2014": {
            "P14": 1
        }
    },
    "Devlin Matsoukas": {
        "2012": {
            "N12": 1
        }
    },
    "Jingbo Hao": {
        "2012": {
            "P12": 1
        }
    },
    "Shashank Srivastava": {
        "2014": {
            "P14": 1
        }
    },
    "Janyce Paul Diane": {
        "2006": {
            "W06": 1
        }
    },
    "Hinrich Sch\u00a8utze": {
        "2008": {
            "D08": 1
        },
        "2009": {
            "E09": 1
        },
        "2010": {
            "N10": 1
        },
        "2011": {
            "P11": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "E14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Du\u02c7sko Vitas Cvetana Krstev": {
        "2003": {
            "W03": 1
        }
    },
    "Ulisse Bordignon": {
        "2013": {
            "D13": 1
        }
    },
    "Emiko SUZUKI": {
        "2004": {
            "W04": 1
        }
    },
    "Andr\u00e9": {
        "2012": {
            "N12": 1
        }
    },
    "Hamish Cunningham": {
        "2003": {
            "E03": 1
        }
    },
    "Takaaki Hasegawa Nishikawa": {
        "2010": {
            "P10": 1
        }
    },
    "Francisco Casacuberta": {
        "2010": {
            "P10": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Niladri Sekahr Dash": {
        "2013": {
            "W13": 1
        }
    },
    "Vietnam National University Technology": {
        "2015": {
            "S15": 1
        }
    },
    "Gideon": {
        "2007": {
            "N07": 1
        }
    },
    "Mark Abhinav": {
        "2011": {
            "P11": 1
        }
    },
    "Farida Aouladomar": {
        "2005": {
            "W05": 1
        }
    },
    "Murat Saraclar": {
        "2004": {
            "N04": 1
        },
        "2005": {
            "P05": 1
        }
    },
    "Nina Wacholder": {
        "2000": {
            "A00": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Shuoyang Ding": {
        "2014": {
            "P14": 1
        }
    },
    "Paul Nulty": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "S10": 1
        },
        "2007": {
            "P07": 1,
            "S07": 1
        }
    },
    "Huang": {
        "2005": {
            "W05": 1
        }
    },
    "Barbara J Groszt Peter C Gordont": {
        "1999": {
            "J99": 1
        }
    },
    "Pad\u00b4o": {
        "2009": {
            "W09": 1
        }
    },
    "Hwajung Hong": {
        "2014": {
            "W14": 1
        }
    },
    "Antonio Roque": {
        "2003": {
            "W03": 1
        }
    },
    "Richard Jan van_for Spoken Language Understanding": {
        "2015": {
            "W15": 1
        }
    },
    "Jeremy Morris": {
        "2010": {
            "N10": 1
        }
    },
    "Aria Haghighi": {
        "2005": {
            "P05": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "N07": 1,
            "P07": 1
        },
        "2009": {
            "N09": 1,
            "D09": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Longkai Zhang": {
        "2014": {
            "D14": 2
        }
    },
    "Richard CAMPBELL": {
        "2004": {
            "P04": 1
        }
    },
    "Makoto Kanazawa": {
        "2012": {
            "P12": 1
        }
    },
    "Brigitte Krenn": {
        "2001": {
            "P01": 1
        },
        "1997": {
            "A97": 1
        }
    },
    "Olena Zubaryeva Jacques Savoy": {
        "2009": {
            "W09": 1
        }
    },
    "Ni Lao": {
        "2011": {
            "D11": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Naomi Inoue": {
        "1991": {
            "P91": 1
        }
    },
    "Horacio Rodriguez": {
        "1998": {
            "P98": 1,
            "W98": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Rowles Huang": {
        "1992": {
            "P92": 1
        }
    },
    "Derek F Lidia S Isabel of Computer": {
        "2013": {
            "P13": 1
        }
    },
    "Zollmann Venugopal": {
        "2006": {
            "N06": 1
        }
    },
    "Kevin Quinn": {
        "2013": {
            "N13": 1
        }
    },
    "Lin-shan Lee": {
        "2009": {
            "P09": 1
        }
    },
    "Jun Wu": {
        "1998": {
            "P98": 1
        }
    },
    "Rachel Lee": {
        "2010": {
            "S10": 1
        }
    },
    "Sadao Kurohashi": {
        "1994": {
            "J94": 1
        },
        "1998": {
            "W98": 2
        },
        "1999": {
            "P99": 1
        },
        "2007": {
            "N07": 1,
            "P07": 1
        },
        "2008": {
            "D08": 1
        },
        "2013": {
            "D13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Saad Mahamood": {
        "2007": {
            "W07": 1
        }
    },
    "Pedersen": {
        "2006": {
            "N06": 1
        }
    },
    "Jaimai": {
        "2009": {
            "W09": 1
        }
    },
    "Christian Schallhart": {
        "2012": {
            "W12": 1
        }
    },
    "Jonathan Betz": {
        "2006": {
            "N06": 1
        }
    },
    "Anssi Yli-Jyr\u00a8a": {
        "2011": {
            "W11": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Valentin Jijkoun": {
        "2009": {
            "E09": 1
        }
    },
    "Woodsend Lapata": {
        "2010": {
            "P10": 1
        }
    },
    "Jung": {
        "2008": {
            "W08": 1
        },
        "2013": {
            "S13": 1
        }
    },
    "Benjamin Susman": {
        "2015": {
            "W15": 1
        }
    },
    "Su Nam Kim": {
        "2007": {
            "S07": 1
        }
    },
    "Olga": {
        "2006": {
            "W06": 1
        }
    },
    "Brian Kingsbury": {
        "2012": {
            "W12": 1
        }
    },
    "Prettenhofer Stein": {
        "2010": {
            "P10": 1
        }
    },
    "Qi Sun": {
        "2008": {
            "P08": 1
        }
    },
    "Shixiao Ouyang": {
        "2009": {
            "W09": 1
        }
    },
    "Andrea Kowalski": {
        "2003": {
            "P03": 1
        }
    },
    "Stefanie": {
        "2006": {
            "W06": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Chittaranjan Yogarshi Vyas": {
        "2014": {
            "W14": 1
        }
    },
    "Jaeho Kang": {
        "2009": {
            "N09": 1
        }
    },
    "Mihai Surdeanu Carreras": {
        "2006": {
            "W06": 1
        }
    },
    "Yi Ma": {
        "2012": {
            "W12": 1
        }
    },
    "Takamatsu Issei Sato Nakagawa": {
        "2012": {
            "P12": 1
        }
    },
    "Abraham Ittycheriah": {
        "2003": {
            "W03": 1
        }
    },
    "Luke S Zettlemoyer": {
        "2007": {
            "N07": 1
        }
    },
    "Sara": {
        "2011": {
            "P11": 2,
            "W11": 2
        },
        "2013": {
            "S13": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Jerry": {
        "2015": {
            "W15": 1
        }
    },
    "Hirohiko Sagawa": {
        "2004": {
            "N04": 1
        }
    },
    "Stefanie Tomko": {
        "2004": {
            "W04": 1,
            "N04": 1
        }
    },
    "Lori": {
        "2008": {
            "W08": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Vasileios Hatzivassiloglou": {
        "2010": {
            "W10": 1
        },
        "1995": {
            "P95": 1
        },
        "2004": {
            "W04": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "Thomas Ginter": {
        "2011": {
            "P11": 1
        }
    },
    "Claire Bonial": {
        "2010": {
            "N10": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Sheldon Nichollt": {
        "1985": {
            "P85": 1
        }
    },
    "Ivelina Stoyanova Svetla Koeva Svetlozara Leseva": {
        "2013": {
            "W13": 1
        }
    },
    "Samar Husain": {
        "2010": {
            "W10": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Laurent": {
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Nina Dethlefs": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 2
        },
        "2012": {
            "N12": 1,
            "D12": 1
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Marjorie MCSHANE": {
        "2004": {
            "W04": 1
        }
    },
    "I Michael": {
        "2011": {
            "P11": 1
        }
    },
    "Jiajun Zhang": {
        "2013": {
            "P13": 1
        }
    },
    "S Matthew": {
        "2015": {
            "P15": 1
        }
    },
    "Marisa Ferrara Boston": {
        "2008": {
            "P08": 1
        }
    },
    "Libby Barak": {
        "2009": {
            "P09": 1
        }
    },
    "Dan Garrette": {
        "2009": {
            "W09": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Furu Bing Ting Ming": {
        "2014": {
            "S14": 1
        }
    },
    "Matthew Purver": {
        "2011": {
            "W11": 1
        },
        "2014": {
            "W14": 1
        },
        "2006": {
            "W06": 1,
            "P06": 1
        }
    },
    "Yang Wang": {
        "2015": {
            "D15": 1,
            "W15": 2
        }
    },
    "Naushad UzZaman": {
        "2011": {
            "P11": 1
        }
    },
    "Natural Language Engineering Lab": {
        "2012": {
            "W12": 1
        }
    },
    "Irene": {
        "2002": {
            "W02": 1
        }
    },
    "Jon Oberlander": {
        "2009": {
            "W09": 1,
            "E09": 1
        },
        "1998": {
            "W98": 1
        },
        "2006": {
            "E06": 1
        },
        "1993": {
            "W93": 1
        }
    },
    "John T Maxwell Ronald M Kaplant": {
        "1993": {
            "J93": 1
        }
    },
    "G Richard": {
        "1994": {
            "W94": 1
        }
    },
    "John Barnden": {
        "2007": {
            "P07": 2
        }
    },
    "Satoshi Kaki": {
        "1998": {
            "P98": 1
        }
    },
    "Ramirez de_la Rosa": {
        "2013": {
            "W13": 1
        }
    },
    "Milo\u02c7s Ercegov\u02c7cevi\u00b4c": {
        "2011": {
            "W11": 1
        }
    },
    "Fabienne Martin": {
        "2009": {
            "W09": 1
        }
    },
    "Litkowski": {
        "2007": {
            "S07": 1
        }
    },
    "Rebecca GREEN": {
        "2004": {
            "W04": 1
        }
    },
    "Kobdani": {
        "2011": {
            "P11": 1
        }
    },
    "Lucian Vlad Lita": {
        "2004": {
            "W04": 1
        }
    },
    "Phil Maguire": {
        "2004": {
            "P04": 1
        }
    },
    "Binyang Li": {
        "2010": {
            "P10": 1
        }
    },
    "Tanaka": {
        "2013": {
            "W13": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "Ian Roberts": {
        "2014": {
            "E14": 1
        }
    },
    "Rodrigo de_Oliveira": {
        "2015": {
            "W15": 1
        }
    },
    "Terry Szymanski": {
        "2011": {
            "W11": 1
        }
    },
    "Jennifer Foster": {
        "2008": {
            "P08": 1,
            "W08": 1
        },
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Vitor De_Aline": {
        "2012": {
            "W12": 1
        }
    },
    "Srini": {
        "2003": {
            "N03": 1
        }
    },
    "Tenaha O\u2019Reilly": {
        "2013": {
            "W13": 1
        }
    },
    "Khalilov A R Fonollosa": {
        "2009": {
            "E09": 1
        }
    },
    "Tong Zhang": {
        "2003": {
            "W03": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Michael Schoelles": {
        "1997": {
            "A97": 1
        }
    },
    "Jasy Liew Suet": {
        "2014": {
            "W14": 2
        }
    },
    "Stina": {
        "2000": {
            "W00": 1
        }
    },
    "James Mayfield": {
        "1988": {
            "J88": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "Mirella Lapata": {
        "2002": {
            "W02": 1
        },
        "2003": {
            "P03": 2,
            "E03": 1
        },
        "2005": {
            "P05": 1
        },
        "2006": {
            "N06": 1,
            "P06": 2
        },
        "2009": {
            "E09": 2
        },
        "2010": {
            "P10": 1
        },
        "2014": {
            "Q14": 1
        }
    },
    "Galina Datskovsky Moerdler": {
        "1988": {
            "A88": 1
        }
    },
    "Elena Volodina": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Karsten L Worm": {
        "1998": {
            "P98": 1
        }
    },
    "Jae-young Song": {
        "2012": {
            "W12": 1
        }
    },
    "Regina Barzilay": {
        "2005": {
            "P05": 1
        },
        "2006": {
            "W06": 1,
            "N06": 2
        },
        "2007": {
            "N07": 1,
            "P07": 1
        },
        "2008": {
            "P08": 2
        },
        "2009": {
            "P09": 1
        },
        "2010": {
            "D10": 1
        },
        "2013": {
            "P13": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Derek": {
        "2013": {
            "W13": 1
        }
    },
    "Alexandria Katarina Vail": {
        "2014": {
            "W14": 1
        }
    },
    "Jes\u00fas M Hermida": {
        "2011": {
            "W11": 1
        }
    },
    "Zhang Zhang": {
        "2015": {
            "D15": 1
        }
    },
    "Agustin Gravano": {
        "2008": {
            "P08": 1
        },
        "2011": {
            "P11": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "John A Bateman": {
        "2006": {
            "E06": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "Camillo Lugaresi": {
        "2014": {
            "W14": 1
        }
    },
    "William": {
        "2003": {
            "N03": 1
        },
        "2004": {
            "N04": 1
        },
        "2008": {
            "W08": 1
        },
        "2009": {
            "W09": 1
        },
        "1981": {
            "J81": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Jesse Thomason": {
        "2013": {
            "N13": 1
        }
    },
    "Key-Sun Chae Choi": {
        "2000": {
            "P00": 1
        }
    },
    "Wenji Li": {
        "2009": {
            "P09": 1
        }
    },
    "Sherri L Condon Claude G tech William R Edwards": {
        "1999": {
            "P99": 1
        }
    },
    "Se Young Park": {
        "1999": {
            "P99": 1
        }
    },
    "Pawan Deshpande": {
        "2006": {
            "W06": 1
        },
        "2007": {
            "N07": 1,
            "P07": 1
        }
    },
    "Yin Li": {
        "2004": {
            "W04": 1
        }
    },
    "Roth": {
        "2009": {
            "W09": 1
        },
        "2012": {
            "S12": 1
        },
        "2013": {
            "S13": 1
        },
        "2014": {
            "D14": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Bansal Klein": {
        "2010": {
            "P10": 1
        }
    },
    "Katrin Erk": {
        "2003": {
            "P03": 1
        },
        "2004": {
            "W04": 1
        },
        "2007": {
            "P07": 1,
            "S07": 1
        },
        "2008": {
            "D08": 1
        },
        "2009": {
            "P09": 1,
            "W09": 3,
            "D09": 2
        },
        "2010": {
            "P10": 1,
            "D10": 1
        },
        "2011": {
            "W11": 1
        },
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "W": {
        "2008": {
            "D08": 1
        }
    },
    "Florian Metze": {
        "2012": {
            "W12": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Cristina Barbero": {
        "1998": {
            "W98": 1
        }
    },
    "Hao Zhang Ryan": {
        "2014": {
            "P14": 1
        }
    },
    "Do Kook Choe": {
        "2013": {
            "D13": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Max Planck": {
        "2011": {
            "J11": 1
        },
        "2012": {
            "P12": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Caroline Sporleder": {
        "2010": {
            "P10": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Elizabeth Boschee": {
        "2010": {
            "W10": 1
        }
    },
    "Hideki Mime": {
        "1998": {
            "P98": 1
        }
    },
    "Hideki Mima": {
        "2006": {
            "P06": 1
        }
    },
    "Hoifung Poon": {
        "2008": {
            "D08": 1
        },
        "2009": {
            "D09": 1,
            "E09": 1
        },
        "2010": {
            "W10": 1
        },
        "2015": {
            "K15": 1
        }
    },
    "Nicolas": {
        "2006": {
            "W06": 1
        }
    },
    "David Clemenceau": {
        "1993": {
            "E93": 1
        }
    },
    "Anders Johannsen": {
        "2014": {
            "D14": 1,
            "W14": 1,
            "S14": 1
        },
        "2015": {
            "D15": 1,
            "K15": 1
        }
    },
    "Carlyle J Licata": {
        "2010": {
            "W10": 1
        }
    },
    "de_Christopher": {
        "2010": {
            "P10": 1
        }
    },
    "Schluter": {
        "2015": {
            "P15": 1
        }
    },
    "Philipp Cimiano": {
        "2013": {
            "W13": 2
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        },
        "2005": {
            "W05": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Venkatesh Gopala Krishna": {
        "2007": {
            "N07": 1
        }
    },
    "Zechner Xi": {
        "2008": {
            "W08": 1
        }
    },
    "Nicolai": {
        "2014": {
            "P14": 1
        }
    },
    "Anastassia Loukina": {
        "2014": {
            "W14": 1
        }
    },
    "Amanda J Stent": {
        "2014": {
            "W14": 1
        }
    },
    "Adam Pauls Dan": {
        "2010": {
            "N10": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Heidi Fox": {
        "2000": {
            "A00": 1
        }
    },
    "Charles Rich": {
        "2001": {
            "P01": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Karen Livescu": {
        "2004": {
            "N04": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Sergio Ortiz": {
        "2012": {
            "W12": 1
        }
    },
    "Erik F Tjong Kim Sang": {
        "2000": {
            "A00": 1
        }
    },
    "Leonardo Lesmo": {
        "2011": {
            "W11": 1
        },
        "1998": {
            "P98": 1,
            "W98": 1
        },
        "1983": {
            "E83": 1
        }
    },
    "Alvin Grissom": {
        "2015": {
            "D15": 1
        }
    },
    "Tu\u02d8gba": {
        "2015": {
            "W15": 1
        }
    },
    "Rebecca": {
        "2010": {
            "N10": 1
        },
        "2007": {
            "W07": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "N13": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "David Martinez": {
        "2001": {
            "S01": 2
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Tuoi T Phan": {
        "2009": {
            "P09": 1
        }
    },
    "Helene Bestougeff": {
        "1985": {
            "E85": 1
        }
    },
    "I Christopher": {
        "2007": {
            "W07": 1
        }
    },
    "Matthew Crocker": {
        "2006": {
            "E06": 1
        }
    },
    "Matt Huenerfauth": {
        "2009": {
            "E09": 1
        },
        "2005": {
            "P05": 1
        }
    },
    "Simon Whitehead Lawrence Cavedon": {
        "2010": {
            "W10": 1
        }
    },
    "Zehuan Peng Le_Sun Xianpei": {
        "2012": {
            "W12": 1
        }
    },
    "Glyn Morrill": {
        "2000": {
            "J00": 1
        },
        "1989": {
            "E89": 1
        }
    },
    "Heng Ji": {
        "2005": {
            "P05": 1
        },
        "2006": {
            "W06": 2,
            "P06": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "W09": 1
        },
        "2010": {
            "W10": 1
        },
        "2011": {
            "P11": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "W14": 1,
            "P14": 1
        }
    },
    "John Sabatini": {
        "2013": {
            "W13": 1
        }
    },
    "Koji": {
        "2006": {
            "W06": 1
        }
    },
    "Joelle": {
        "2015": {
            "W15": 1
        }
    },
    "Caixia Yuan Xiaojie Wang Qianhui": {
        "2015": {
            "W15": 1
        }
    },
    "Zhuoying Tang": {
        "2015": {
            "W15": 1
        }
    },
    "Minh-Thang Dan Eduard": {
        "2015": {
            "D15": 1
        }
    },
    "E Strayer A": {
        "2001": {
            "W01": 1
        }
    },
    "Cassandre": {
        "2002": {
            "W02": 1
        }
    },
    "Heng JI": {
        "2004": {
            "W04": 1
        }
    },
    "Daniel Diermeier": {
        "2010": {
            "P10": 1
        }
    },
    "Fang-Lan Huang": {
        "2009": {
            "P09": 1
        }
    },
    "V\u00b4eronique": {
        "2006": {
            "W06": 1
        }
    },
    "Fangzhong Su": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "N09": 1
        },
        "2010": {
            "N10": 1
        }
    },
    "Zhengyu": {
        "2006": {
            "N06": 1
        }
    },
    "Matthew Snover": {
        "2011": {
            "W11": 2
        }
    },
    "Cheng Xinyu": {
        "2015": {
            "P15": 1
        }
    },
    "Solomon Teferra Laurent Sopheap": {
        "2010": {
            "W10": 1
        }
    },
    "Haifeng Hu": {
        "2013": {
            "P13": 1
        }
    },
    "Zapirain Agirre": {
        "2008": {
            "P08": 1
        }
    },
    "Stony Brook": {
        "2006": {
            "P06": 1
        },
        "2007": {
            "N07": 1
        },
        "2008": {
            "W08": 1
        },
        "2012": {
            "P12": 2
        },
        "2013": {
            "P13": 2,
            "D13": 4
        },
        "2014": {
            "W14": 1,
            "P14": 1
        }
    },
    "Lorraine Goeuriot": {
        "2009": {
            "W09": 1
        }
    },
    "Ma Isahara": {
        "1998": {
            "P98": 1
        }
    },
    "Chris Biemann": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "N07": 2
        }
    },
    "Farsta": {
        "2004": {
            "W04": 1
        }
    },
    "Nicolai Hans-Peter Torsten Iryna": {
        "2013": {
            "P13": 1
        }
    },
    "Mohammed A Attia": {
        "2007": {
            "W07": 1
        }
    },
    "Daniele P Radicioni": {
        "2011": {
            "W11": 1
        }
    },
    "Maria Wolters": {
        "2008": {
            "P08": 1
        }
    },
    "Won Kim": {
        "2012": {
            "W12": 1
        }
    },
    "Wang": {
        "2010": {
            "W10": 1
        },
        "2013": {
            "Q13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "R Pan": {
        "1999": {
            "W99": 1
        }
    },
    "Erin Kelly": {
        "2014": {
            "W14": 1
        }
    },
    "David Yarowsky": {
        "1992": {
            "P92": 1
        },
        "1994": {
            "P94": 1
        },
        "1995": {
            "P95": 1
        },
        "1999": {
            "P99": 1
        },
        "2000": {
            "P00": 1
        },
        "2004": {
            "P04": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "W09": 1
        },
        "2011": {
            "P11": 2
        }
    },
    "Maldonado-Guerra": {
        "2011": {
            "W11": 1
        }
    },
    "Sun Kim": {
        "2012": {
            "W12": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Dimitra Tsovaltzi": {
        "2003": {
            "W03": 1
        },
        "2004": {
            "W04": 1
        }
    },
    "Marianna Rue John Von": {
        "2013": {
            "S13": 1
        }
    },
    "Madnani": {
        "2014": {
            "W14": 1
        }
    },
    "Robert Alan": {
        "1990": {
            "W90": 1
        }
    },
    "Bhatia Ji": {
        "2015": {
            "D15": 1
        }
    },
    "Deli Qiang Zhiyuan Thomas Fang Edward Y Division of Technical Innovation": {
        "2014": {
            "P14": 1
        }
    },
    "Qin Iris Wang": {
        "2008": {
            "P08": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Stelios Piperidis": {
        "2015": {
            "P15": 1
        }
    },
    "Amber McKenzie": {
        "2013": {
            "N13": 1
        }
    },
    "Michel G\u00b4en\u00b4ereux": {
        "2006": {
            "W06": 1
        }
    },
    "Djam\u00e9": {
        "2011": {
            "W11": 1
        }
    },
    "Alexey Romanov": {
        "2015": {
            "D15": 1
        }
    },
    "Wei-Te Chen": {
        "2013": {
            "N13": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Young Chol Song": {
        "2008": {
            "W08": 1
        }
    },
    "Magdalena": {
        "2014": {
            "S14": 1
        }
    },
    "Vera Demberg": {
        "2010": {
            "P10": 1
        },
        "2006": {
            "E06": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Bradley Hauer Bhargava": {
        "2011": {
            "W11": 1
        }
    },
    "Robert L Mercer": {
        "1992": {
            "J92": 2
        },
        "1993": {
            "J93": 1
        },
        "1991": {
            "P91": 2
        }
    },
    "Kazunori Komatani": {
        "2009": {
            "P09": 1
        },
        "2003": {
            "P03": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Cohn Lapata": {
        "2007": {
            "P07": 1
        }
    },
    "Emily Danchik": {
        "2014": {
            "Q14": 1
        }
    },
    "Bevan K Jones": {
        "2010": {
            "N10": 1
        }
    },
    "Thorsten": {
        "1996": {
            "W96": 1
        }
    },
    "Michael Carl": {
        "2003": {
            "W03": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "Chunyu": {
        "2008": {
            "W08": 1
        }
    },
    "Lucia Specia": {
        "2009": {
            "W09": 1
        },
        "2015": {
            "W15": 1
        },
        "2006": {
            "W06": 1
        },
        "2014": {
            "W14": 1,
            "S14": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Maseru Tomita": {
        "1988": {
            "P88": 1
        }
    },
    "Peter Simonsen": {
        "2015": {
            "D15": 1
        }
    },
    "Xiaoyong Liu": {
        "2000": {
            "A00": 1
        }
    },
    "Michael Kearns": {
        "2000": {
            "W00": 1
        }
    },
    "Zesch Michael": {
        "2015": {
            "W15": 2
        }
    },
    "Sai Wang": {
        "2013": {
            "S13": 1
        }
    },
    "Mark Seligman Mike Dillinger": {
        "2006": {
            "W06": 1
        }
    },
    "Bruce W WatsonI Richard E Watson\u00a7": {
        "2000": {
            "J00": 1
        }
    },
    "Pinar Oezden Wennerberg": {
        "2008": {
            "W08": 1
        }
    },
    "Jing Wan": {
        "2009": {
            "W09": 1
        }
    },
    "J Dorr Monz President Zajic": {
        "2005": {
            "W05": 1
        }
    },
    "Yoshihiko Nitta": {
        "1984": {
            "P84": 1
        },
        "1993": {
            "E93": 1
        }
    },
    "Maria Georgescul": {
        "2006": {
            "W06": 1
        }
    },
    "Golnar Sheikhshab": {
        "2014": {
            "W14": 1
        }
    },
    "Constantine Lignos": {
        "2010": {
            "W10": 1
        }
    },
    "Timothy Chklovski": {
        "2002": {
            "W02": 1
        },
        "2003": {
            "W03": 1
        }
    },
    "William Byrne": {
        "2010": {
            "P10": 1
        }
    },
    "Takako Aikawa": {
        "2002": {
            "W02": 1
        }
    },
    "T Mark Ellison": {
        "1994": {
            "J94": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Penelope Sibun": {
        "1994": {
            "A94": 1
        }
    },
    "David H D Warren": {
        "1982": {
            "P82": 1
        }
    },
    "Khang Nhut Lam": {
        "2014": {
            "W14": 1,
            "P14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Sapna": {
        "2013": {
            "S13": 1
        }
    },
    "Yaji Sripada": {
        "2009": {
            "W09": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "W Brett": {
        "2009": {
            "W09": 1
        }
    },
    "Mohamed": {
        "2004": {
            "W04": 1
        }
    },
    "Qiming": {
        "2014": {
            "W14": 1
        }
    },
    "Gary Geunbae Lee": {
        "2001": {
            "W01": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "A K Joshi": {
        "1986": {
            "P86": 1
        }
    },
    "Alex Collier": {
        "1998": {
            "W98": 1
        }
    },
    "Ulrich KOCH": {
        "2007": {
            "W07": 1
        }
    },
    "Zhiyuan Huanbo Maosong": {
        "2015": {
            "D15": 1
        }
    },
    "Aaron Elkiss": {
        "2005": {
            "P05": 1
        }
    },
    "Prabu Palanisamy": {
        "2013": {
            "S13": 1
        }
    },
    "Makoto NAGA\u00b0": {
        "1984": {
            "P84": 1
        }
    },
    "Rajkumar Espinosa": {
        "2011": {
            "W11": 1
        }
    },
    "Sarvesh Ranade": {
        "2013": {
            "W13": 1
        }
    },
    "Ullman Nivre": {
        "2014": {
            "W14": 1
        }
    },
    "M Petrov": {
        "2012": {
            "N12": 1
        }
    },
    "Lin Wu": {
        "2009": {
            "P09": 1
        }
    },
    "Linlin Li": {
        "2010": {
            "P10": 1,
            "N10": 1
        }
    },
    "David Rouquet": {
        "2010": {
            "W10": 1
        }
    },
    "Maja": {
        "2015": {
            "W15": 1
        }
    },
    "Walter M P Daelemans": {
        "1987": {
            "E87": 1
        }
    },
    "J M Lucas": {
        "2009": {
            "W09": 1
        }
    },
    "Ilija Zeljkovi\u00b4c Stent": {
        "2009": {
            "N09": 1
        }
    },
    "Alexandra": {
        "2011": {
            "D11": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Alfredo Maldonado Yvette Andy": {
        "2010": {
            "W10": 1
        }
    },
    "Rodriguez Zivic": {
        "2013": {
            "N13": 1
        }
    },
    "Kevin Zac David Padhraic": {
        "2015": {
            "W15": 1
        }
    },
    "Kevin Gimpel": {
        "2010": {
            "N10": 1,
            "W10": 1
        },
        "2011": {
            "P11": 1,
            "D11": 1,
            "W11": 2
        },
        "2014": {
            "P14": 1
        }
    },
    "Elliot Smith": {
        "1998": {
            "P98": 1
        }
    },
    "Wybo": {
        "2006": {
            "W06": 1
        }
    },
    "Baroni": {
        "2010": {
            "D10": 1
        }
    },
    "Lane O B Schwartz": {
        "2014": {
            "W14": 1
        }
    },
    "Jin Diana McCarthy": {
        "2009": {
            "N09": 1
        }
    },
    "Carenini": {
        "2008": {
            "W08": 1
        }
    },
    "Sangdo Han": {
        "2013": {
            "W13": 1
        }
    },
    "Euijong Whang": {
        "2014": {
            "D14": 1
        }
    },
    "Geoffrey K Pullum": {
        "1982": {
            "P82": 1
        },
        "1983": {
            "P83": 1
        }
    },
    "Judita Preiss": {
        "2003": {
            "E03": 1
        },
        "2012": {
            "N12": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Justine": {
        "2012": {
            "W12": 1
        },
        "2013": {
            "W13": 1
        },
        "1997": {
            "W97": 1
        }
    },
    "L Rubin": {
        "2012": {
            "W12": 1
        }
    },
    "Aria": {
        "2006": {
            "N06": 1
        }
    },
    "Zheng-Jun Zha": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Mark Core": {
        "1996": {
            "P96": 1
        }
    },
    "Lonneke van_der": {
        "2009": {
            "W09": 1
        }
    },
    "James A Rosenblum": {
        "1993": {
            "P93": 1
        }
    },
    "Danielle S McNamara": {
        "2013": {
            "W13": 1
        }
    },
    "David B Benson": {
        "1983": {
            "J83": 1
        }
    },
    "Reiter Frank": {
        "2010": {
            "P10": 1
        }
    },
    "Weiwei Guo": {
        "2010": {
            "P10": 1
        },
        "2011": {
            "D11": 1
        },
        "2012": {
            "S12": 1,
            "P12": 2
        },
        "2013": {
            "S13": 1
        }
    },
    "Alan Ritter Mausam": {
        "2010": {
            "W10": 1
        }
    },
    "Ram Ambati": {
        "2010": {
            "W10": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Moschitti Ju": {
        "2012": {
            "P12": 1
        }
    },
    "Xiaoyin Fu": {
        "2012": {
            "D12": 1
        }
    },
    "Le_An Ha Mitkov": {
        "2009": {
            "W09": 1
        }
    },
    "Jon Orwant": {
        "2013": {
            "S13": 1
        }
    },
    "Guo-Wei Bian": {
        "2006": {
            "W06": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "Jiang Zhai": {
        "2007": {
            "P07": 1
        }
    },
    "Amit Kirschenbaum": {
        "2009": {
            "E09": 1
        }
    },
    "James": {
        "2004": {
            "W04": 2,
            "N04": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "N07": 2,
            "W07": 1
        },
        "2008": {
            "D08": 1
        },
        "2011": {
            "W11": 2
        },
        "2012": {
            "S12": 1,
            "P12": 1
        },
        "2013": {
            "W13": 1,
            "D13": 1
        },
        "2014": {
            "P14": 1
        },
        "2015": {
            "W15": 1,
            "S15": 1
        }
    },
    "Yannick Marchand Robert I Dampert": {
        "2000": {
            "J00": 1
        }
    },
    "Emily Jamison": {
        "2008": {
            "W08": 1
        }
    },
    "Pidong Wang Nikhil Bojja Shivasankari Kannan": {
        "2015": {
            "W15": 1
        }
    },
    "Yu Dianhai": {
        "2006": {
            "W06": 1
        }
    },
    "Erik Cambria Amir Hussain Chris Eckl": {
        "2011": {
            "W11": 1
        }
    },
    "Steffen": {
        "2012": {
            "S12": 1
        }
    },
    "Alicia Leo": {
        "2013": {
            "W13": 1
        }
    },
    "John Canny": {
        "2013": {
            "D13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Awais Athar": {
        "2012": {
            "W12": 1
        }
    },
    "Yuping Zhou": {
        "2011": {
            "W11": 1
        }
    },
    "Dani Yogatama": {
        "2011": {
            "P11": 1,
            "D11": 1
        },
        "2012": {
            "P12": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "M A Peter": {
        "2011": {
            "W11": 1
        }
    },
    "Percy Liang": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "P09": 1
        },
        "2010": {
            "D10": 1
        },
        "2014": {
            "P14": 2
        },
        "2015": {
            "D15": 1,
            "P15": 1
        }
    },
    "Alicia P\u00b4erez": {
        "2014": {
            "S14": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Daniel Cer": {
        "2010": {
            "N10": 1
        },
        "2013": {
            "S13": 1,
            "P13": 1,
            "W13": 1,
            "D13": 1
        }
    },
    "Afra Alishahi": {
        "2009": {
            "P09": 1
        }
    },
    "Basili Cammisa Moschitti": {
        "2005": {
            "W05": 1
        }
    },
    "Niels Ole Bernsen": {
        "2002": {
            "W02": 1
        }
    },
    "Chung-Hsien Wu": {
        "2006": {
            "P06": 1
        }
    },
    "Andreas Kathol": {
        "2004": {
            "N04": 1
        }
    },
    "Katrin Kirchhoff": {
        "2003": {
            "N03": 1
        },
        "2005": {
            "W05": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "Kremer": {
        "2010": {
            "W10": 1
        }
    },
    "Bogdan Anthony": {
        "2003": {
            "W03": 1
        }
    },
    "Ran Tian": {
        "2014": {
            "P14": 1
        }
    },
    "Jehl Hieber": {
        "2012": {
            "W12": 1
        }
    },
    "Sameer Pradhan": {
        "2015": {
            "P15": 1
        },
        "2005": {
            "P05": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "J Sarah Travis": {
        "2010": {
            "W10": 1
        }
    },
    "Marie-Catherine de_John": {
        "2011": {
            "D11": 1
        }
    },
    "Philip": {
        "2010": {
            "N10": 1,
            "W10": 2
        },
        "1997": {
            "W97": 2
        },
        "2005": {
            "W05": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Konstantin": {
        "2000": {
            "W00": 1
        }
    },
    "Joshua K Hartshorne": {
        "2013": {
            "D13": 1
        }
    },
    "Livio Robaldo": {
        "2009": {
            "W09": 1
        }
    },
    "Weijian": {
        "2005": {
            "W05": 1
        }
    },
    "D": {
        "2009": {
            "W09": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Shannon Pollardand Alan W": {
        "2000": {
            "W00": 1
        }
    },
    "Reva Freedman": {
        "2000": {
            "A00": 1
        }
    },
    "Brucet Janyce": {
        "1998": {
            "W98": 1
        }
    },
    "Gabriel": {
        "2014": {
            "E14": 1
        }
    },
    "J Timothy": {
        "2011": {
            "W11": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Bertjan Busser": {
        "2007": {
            "S07": 1
        }
    },
    "Sandra Katz": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "N10": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Dijana Pijetlovic": {
        "2015": {
            "W15": 1
        }
    },
    "Xavier Farreres": {
        "1998": {
            "W98": 1
        }
    },
    "D Ralf": {
        "2010": {
            "W10": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Bernard Brosseau-Villeneuve": {
        "2010": {
            "S10": 1
        }
    },
    "Erhard Hinrichs": {
        "2010": {
            "P10": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Bernardi Dinu Marelli": {
        "2013": {
            "P13": 1
        }
    },
    "Pamela W Jordan": {
        "1996": {
            "P96": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Meishan Wanxiang Ting Yihe": {
        "2012": {
            "W12": 1
        }
    },
    "William Lucy Vanderwende": {
        "1998": {
            "P98": 1
        }
    },
    "Jos\u00b4e B Marifno": {
        "2007": {
            "P07": 1
        }
    },
    "Gyamfi Wiebe": {
        "2009": {
            "N09": 1
        }
    },
    "Richard Alex Helmut": {
        "2014": {
            "D14": 1
        }
    },
    "Michael Daum": {
        "2004": {
            "P04": 1
        }
    },
    "Longyue Wang": {
        "2015": {
            "K15": 2
        }
    },
    "Doug Downey": {
        "2007": {
            "P07": 1
        }
    },
    "Bradley Hauer": {
        "2013": {
            "N13": 1,
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Berthelin Grouin Hurault-Plantet": {
        "2008": {
            "W08": 1
        }
    },
    "Peter D Turney": {
        "2002": {
            "P02": 1
        },
        "2010": {
            "W10": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Chris": {
        "2002": {
            "W02": 1
        },
        "2003": {
            "W03": 1
        },
        "2004": {
            "J04": 1
        },
        "2007": {
            "W07": 3
        },
        "2009": {
            "N09": 1,
            "D09": 1
        },
        "2010": {
            "N10": 1,
            "D10": 1,
            "W10": 1
        },
        "2013": {
            "P13": 1,
            "W13": 3
        },
        "2014": {
            "D14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Jason Weston": {
        "2007": {
            "P07": 1
        }
    },
    "Giuseppe Riccardi": {
        "2000": {
            "W00": 1
        },
        "2009": {
            "E09": 1
        },
        "2008": {
            "W08": 1
        },
        "2012": {
            "W12": 2
        }
    },
    "He": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Osamu Furuse": {
        "2006": {
            "W06": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Dongdong Chen": {
        "1998": {
            "P98": 1
        }
    },
    "Bensiin Borukhov": {
        "2012": {
            "W12": 1
        }
    },
    "Laura Rimell Douwe": {
        "2013": {
            "S13": 1
        }
    },
    "Hiroshi Nakagawa": {
        "2010": {
            "W10": 1
        }
    },
    "Antti-Veikko I Rosti": {
        "2009": {
            "W09": 1
        }
    },
    "Michiel Bacchiani": {
        "2004": {
            "N04": 1
        }
    },
    "Fabienne Fritzinger": {
        "2010": {
            "W10": 1
        }
    },
    "Josee S Heemskerk": {
        "1993": {
            "E93": 1
        }
    },
    "Elisabeth Maier": {
        "1997": {
            "A97": 1
        }
    },
    "Kan-Wen Min-Hua Yi-Hsuan Shih-Hung": {
        "2009": {
            "W09": 1
        }
    },
    "Dan I Moldovan": {
        "2001": {
            "P01": 1
        }
    },
    "Hong": {
        "2015": {
            "P15": 1
        }
    },
    "Waxmonsky": {
        "2012": {
            "N12": 1
        }
    },
    "Douglas McKee": {
        "1993": {
            "P93": 1
        }
    },
    "Blunsom Cohn": {
        "2006": {
            "P06": 1
        }
    },
    "Kristy": {
        "2009": {
            "N09": 1
        }
    },
    "Olena Medelyan": {
        "2009": {
            "D09": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Krista": {
        "2010": {
            "W10": 1
        }
    },
    "Victoria Anugrah Lestari": {
        "2015": {
            "W15": 1
        }
    },
    "Jyothi Leif Johnson": {
        "2012": {
            "W12": 1
        }
    },
    "Kriste": {
        "2013": {
            "W13": 1
        }
    },
    "Tobias": {
        "2015": {
            "W15": 1
        }
    },
    "Hua He": {
        "2010": {
            "D10": 1
        }
    },
    "Keith Miller": {
        "1998": {
            "P98": 1
        }
    },
    "Martha": {
        "1998": {
            "W98": 1
        },
        "2002": {
            "W02": 1
        },
        "2004": {
            "W04": 1
        },
        "2009": {
            "N09": 1
        },
        "2010": {
            "W10": 1
        },
        "2011": {
            "P11": 1,
            "W11": 2
        },
        "2012": {
            "S12": 1,
            "P12": 1
        },
        "2015": {
            "W15": 1,
            "S15": 1
        }
    },
    "Yoav Jesse": {
        "2014": {
            "P14": 1
        }
    },
    "Petrov": {
        "2008": {
            "D08": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Jet Hoek Sandrine Zufferey": {
        "2015": {
            "W15": 1
        }
    },
    "Joseph Rosenzweig": {
        "1998": {
            "P98": 1
        }
    },
    "Ashish": {
        "2005": {
            "W05": 1
        }
    },
    "Daisuke Sadao Manabu": {
        "2013": {
            "D13": 1
        }
    },
    "Hiroshi Ichikawa": {
        "2014": {
            "P14": 1
        }
    },
    "Zaiu Inkpen": {
        "2002": {
            "W02": 1
        }
    },
    "Alexandre Klementiev": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "E12": 2,
            "W12": 1
        },
        "2006": {
            "N06": 1,
            "P06": 1
        }
    },
    "Janet B Pierrehumbert": {
        "1986": {
            "P86": 1
        },
        "1983": {
            "P83": 1
        }
    },
    "Laurie Poulson": {
        "2010": {
            "P10": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Michiko Shasha": {
        "2011": {
            "W11": 1
        }
    },
    "Philip Edmonds": {
        "2001": {
            "S01": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "Nizar": {
        "2002": {
            "W02": 1
        }
    },
    "Sanguinetti Bosco": {
        "2013": {
            "W13": 1
        }
    },
    "Xuanjing Huang Qiu": {
        "2011": {
            "P11": 1
        }
    },
    "Hailong Taro Tiejun Mo CongHui": {
        "2012": {
            "D12": 1
        }
    },
    "Jungi Kim": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 1
        }
    },
    "V Philip": {
        "2010": {
            "N10": 1
        }
    },
    "Gonz`alez Mascarell": {
        "2013": {
            "P13": 1
        }
    },
    "Michael Sindelar Sutton": {
        "2006": {
            "N06": 1
        }
    },
    "Wenjie Yu Xule Yanxiang": {
        "2015": {
            "P15": 1
        }
    },
    "Forbes-Riley Litman Friedberg": {
        "2012": {
            "N12": 1
        }
    },
    "Siwei Shen": {
        "2006": {
            "P06": 1
        }
    },
    "Michael Falcone": {
        "2014": {
            "S14": 1
        }
    },
    "Jonathan Graehl": {
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "Sokratis": {
        "2012": {
            "W12": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Carson": {
        "2014": {
            "W14": 1
        }
    },
    "Osborne Blunsom": {
        "2008": {
            "P08": 1
        }
    },
    "Erik Tjong Kim": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "W10": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Rakshit": {
        "2013": {
            "N13": 1
        }
    },
    "George E Heidorn": {
        "1985": {
            "P85": 1
        },
        "1982": {
            "P82": 1
        },
        "1983": {
            "A83": 1
        }
    },
    "Bernd": {
        "2009": {
            "W09": 2
        }
    },
    "Yashar Mehdad": {
        "2009": {
            "P09": 1
        },
        "2012": {
            "S12": 1
        },
        "2013": {
            "N13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Sanjay Chatterji": {
        "2012": {
            "W12": 3
        }
    },
    "Liang Ziqiang Wenjie": {
        "2014": {
            "P14": 1
        }
    },
    "Ewan": {
        "2006": {
            "W06": 1
        }
    },
    "Singh Tim Riedel": {
        "2015": {
            "W15": 1
        }
    },
    "Rajendra Banjade": {
        "2013": {
            "P13": 1
        }
    },
    "Neville Mehta": {
        "2010": {
            "W10": 1
        }
    },
    "Chi-Ho Li": {
        "2008": {
            "W08": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Fernando Pereira": {
        "1993": {
            "P93": 1
        },
        "1994": {
            "P94": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "1999": {
            "P99": 1
        },
        "2005": {
            "P05": 1
        },
        "2006": {
            "E06": 1,
            "W06": 1
        },
        "2007": {
            "P07": 1
        },
        "2010": {
            "P10": 1,
            "D10": 1
        },
        "1981": {
            "J81": 1
        }
    },
    "Yasuyuki Sakai": {
        "1999": {
            "P99": 1
        }
    },
    "Ashwin Lall": {
        "2011": {
            "P11": 1
        }
    },
    "Ankit Kamboj": {
        "2011": {
            "W11": 1
        }
    },
    "Robert G Thomas": {
        "1995": {
            "P95": 1
        }
    },
    "Sunil Shende": {
        "1988": {
            "A88": 1
        }
    },
    "Linda M Schmandt Irene B Nirenburg": {
        "1992": {
            "A92": 1
        }
    },
    "Hen-Hsen Huang": {
        "2012": {
            "W12": 1
        },
        "2013": {
            "P13": 1,
            "W13": 1
        }
    },
    "Vinodkumar": {
        "2010": {
            "W10": 1
        },
        "2012": {
            "W12": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Matt": {
        "2015": {
            "W15": 2
        }
    },
    "Alex Quilici": {
        "1998": {
            "P98": 1
        }
    },
    "Karen Dunn": {
        "2014": {
            "W14": 1
        }
    },
    "Joakim Gustafson": {
        "2009": {
            "W09": 1
        },
        "2013": {
            "W13": 3
        },
        "2014": {
            "W14": 1
        }
    },
    "Amit Singhal": {
        "2000": {
            "A00": 1
        }
    },
    "Dan": {
        "2000": {
            "W00": 1
        },
        "2003": {
            "W03": 2
        },
        "2005": {
            "W05": 2
        },
        "2006": {
            "W06": 1,
            "N06": 1
        },
        "2007": {
            "N07": 2
        },
        "2008": {
            "D08": 2
        },
        "2009": {
            "D09": 1
        },
        "2010": {
            "N10": 2,
            "D10": 3,
            "W10": 1
        },
        "2011": {
            "P11": 1,
            "D11": 2,
            "W11": 2
        },
        "2012": {
            "D12": 2
        },
        "2013": {
            "N13": 1,
            "P13": 3,
            "W13": 1,
            "D13": 2
        },
        "2014": {
            "P14": 1,
            "E14": 1
        },
        "2015": {
            "K15": 1
        }
    },
    "Dai": {
        "2014": {
            "P14": 1
        }
    },
    "Maria Fuentes": {
        "2007": {
            "P07": 1
        }
    },
    "Wenliang Chen": {
        "2010": {
            "P10": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Kenneth D Forbus": {
        "2011": {
            "P11": 1
        }
    },
    "Mahesh Chitrao": {
        "1988": {
            "A88": 1
        }
    },
    "John C Henderson": {
        "2000": {
            "A00": 1
        },
        "2012": {
            "N12": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "John Sterling": {
        "1998": {
            "W98": 1
        }
    },
    "Alice C Parker": {
        "1987": {
            "P87": 1
        }
    },
    "Lishuang Li": {
        "2006": {
            "W06": 1
        }
    },
    "Peter F Schulam": {
        "2012": {
            "W12": 1
        }
    },
    "McCarthy": {
        "2012": {
            "E12": 1
        }
    },
    "Levin Carbonell": {
        "2015": {
            "W15": 1
        }
    },
    "Yuan Ding": {
        "2005": {
            "P05": 1
        }
    },
    "Simone Paolo Ponzetto": {
        "2008": {
            "P08": 1
        },
        "2010": {
            "P10": 1
        },
        "2006": {
            "E06": 1
        },
        "2007": {
            "N07": 1,
            "P07": 1
        }
    },
    "Jing Bai": {
        "2006": {
            "W06": 1
        }
    },
    "Kerry Hannan Tyler Neylon Mike Wells Jeff Reynar": {
        "2007": {
            "P07": 1
        }
    },
    "Schone": {
        "2000": {
            "W00": 1
        }
    },
    "Sajjad Ahmad Khan": {
        "2011": {
            "W11": 1
        }
    },
    "Kazuhiro Yoshida": {
        "2005": {
            "P05": 1
        }
    },
    "R Andrew": {
        "1995": {
            "W95": 1
        }
    },
    "Hiroshi Kanayama Tetsuya Nasukawa": {
        "2006": {
            "W06": 1
        }
    },
    "Carlos Rodr\u00edguez Penagos": {
        "2004": {
            "P04": 1
        }
    },
    "Jane": {
        "2004": {
            "W04": 1
        }
    },
    "Kevin Humphreys": {
        "2001": {
            "W01": 1
        }
    },
    "Jesse Saba": {
        "2009": {
            "W09": 1
        }
    },
    "Marsal Gayalda": {
        "1997": {
            "A97": 1
        }
    },
    "Quy": {
        "2013": {
            "W13": 1
        }
    },
    "Federico": {
        "2011": {
            "W11": 1
        }
    },
    "Ted Gibson": {
        "1993": {
            "W93": 1
        }
    },
    "Milen Kouylekov": {
        "2014": {
            "S14": 1
        }
    },
    "Xiaofei": {
        "2007": {
            "N07": 1
        }
    },
    "t Tony Hartleyt": {
        "1993": {
            "W93": 1
        }
    },
    "Diane Litman": {
        "2000": {
            "A00": 1,
            "W00": 1
        },
        "2003": {
            "W03": 1
        },
        "2004": {
            "P04": 1
        },
        "2009": {
            "W09": 1
        },
        "2013": {
            "N13": 1
        },
        "2014": {
            "W14": 2
        },
        "2015": {
            "W15": 1
        }
    },
    "Qun": {
        "2011": {
            "D11": 1
        },
        "2015": {
            "W15": 1,
            "K15": 2
        }
    },
    "James Rogers": {
        "2010": {
            "P10": 1
        },
        "2004": {
            "P04": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "da Silva": {
        "2015": {
            "W15": 1
        }
    },
    "James Pustejovsky": {
        "1987": {
            "P87": 2
        },
        "1991": {
            "J91": 1
        },
        "1993": {
            "J93": 1
        },
        "2005": {
            "W05": 1
        },
        "2009": {
            "W09": 1
        },
        "2013": {
            "W13": 3
        },
        "2015": {
            "W15": 1
        }
    },
    "Emily Jan van_Richard": {
        "2015": {
            "P15": 1
        }
    },
    "Amanda": {
        "2011": {
            "W11": 1
        }
    },
    "Han Suk": {
        "2014": {
            "W14": 1
        }
    },
    "Megumi": {
        "1997": {
            "W97": 1
        }
    },
    "Michael Frandsen": {
        "2004": {
            "N04": 1
        }
    },
    "Xiaojuan Ma": {
        "2008": {
            "W08": 1
        },
        "2010": {
            "W10": 1
        }
    },
    "Yejin": {
        "2012": {
            "P12": 1
        },
        "2013": {
            "P13": 2
        }
    },
    "Bj\u00a8orn": {
        "2008": {
            "W08": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Kentaro Inuit": {
        "1998": {
            "J98": 1
        }
    },
    "Grzegorz Kondrak": {
        "2000": {
            "A00": 1
        },
        "2009": {
            "P09": 1
        },
        "2012": {
            "N12": 1
        },
        "2007": {
            "N07": 1,
            "W07": 1,
            "P07": 1
        }
    },
    "Jain Ratan Mital Kumar Mukerjee M": {
        "2004": {
            "W04": 1
        }
    },
    "Luis Rodriguez": {
        "2006": {
            "W06": 1
        }
    },
    "Eduard C Dragut": {
        "2014": {
            "W14": 1
        }
    },
    "Bo Pang Andrew": {
        "2009": {
            "N09": 1
        }
    },
    "Ittycheriah Roukos": {
        "2003": {
            "N03": 1
        }
    },
    "Cristina Giannone": {
        "2010": {
            "P10": 1
        }
    },
    "Oier L\u00b4opez de_Lacalle": {
        "2006": {
            "W06": 1
        }
    },
    "Michael G\u00a8otze": {
        "2004": {
            "W04": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Mosleh Hmoud Al-Adhaileh": {
        "1998": {
            "P98": 1
        }
    },
    "Fabienne Cap": {
        "2014": {
            "W14": 1,
            "E14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Monica Paramita": {
        "2013": {
            "P13": 1
        }
    },
    "Carl de": {
        "1995": {
            "W95": 1
        }
    },
    "Tomoya Keisuke Sakaguchi": {
        "2013": {
            "W13": 1
        }
    },
    "Guillaume Aimetti": {
        "2009": {
            "E09": 1
        }
    },
    "Hristo Tanev Tanev": {
        "2006": {
            "E06": 1
        }
    },
    "Bernardo Magnini": {
        "2004": {
            "W04": 1
        },
        "2006": {
            "E06": 1,
            "W06": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Liviu P Vlad Faculty of Foreign": {
        "2012": {
            "E12": 1
        }
    },
    "A Herman": {
        "2010": {
            "W10": 1
        }
    },
    "Lu\u00eds Martin": {
        "2015": {
            "W15": 1
        }
    },
    "Bojar Rosa": {
        "2013": {
            "W13": 1
        }
    },
    "Poul Soren Kjmrsgaard": {
        "1987": {
            "E87": 1
        }
    },
    "Olga Shaumyan": {
        "1999": {
            "E99": 1
        }
    },
    "Green Pearl J Dorr Resnik": {
        "2001": {
            "P01": 1
        }
    },
    "Vibhu O Mittal": {
        "2000": {
            "P00": 2
        }
    },
    "Andrej Karpathy": {
        "2014": {
            "Q14": 1
        }
    },
    "Shoushan Guodong Rui": {
        "2014": {
            "P14": 1
        }
    },
    "Ritwik Martin Animesh Pawan": {
        "2014": {
            "P14": 1
        }
    },
    "Lanbo She": {
        "2013": {
            "D13": 1
        }
    },
    "Miguel Filgueiras": {
        "1994": {
            "A94": 1
        }
    },
    "Timo": {
        "2012": {
            "P12": 1
        }
    },
    "Wisniewski P\u00b4echeux Allauzen": {
        "2014": {
            "W14": 1
        }
    },
    "Jun\u2019ichi Tsujii": {
        "2005": {
            "W05": 1,
            "P05": 1
        }
    },
    "Hirsim\u00a8aki": {
        "2009": {
            "N09": 1
        }
    },
    "Adam Wheeler": {
        "2014": {
            "S14": 1
        }
    },
    "Kazuma Hashimoto": {
        "2015": {
            "W15": 1
        }
    },
    "Lois M Black": {
        "2011": {
            "W11": 1
        }
    },
    "Google RWTH Aachen": {
        "2004": {
            "J04": 1
        }
    },
    "El_Kholy": {
        "2012": {
            "W12": 1
        }
    },
    "Congle": {
        "2010": {
            "W10": 1
        }
    },
    "Jin Yu": {
        "2003": {
            "E03": 1
        }
    },
    "Qiaoming Zhu": {
        "2012": {
            "D12": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Masato": {
        "1998": {
            "W98": 1
        }
    },
    "David R Traum": {
        "1999": {
            "W99": 1
        }
    },
    "X Chang": {
        "2014": {
            "W14": 2
        }
    },
    "Lidia Fraczak": {
        "1995": {
            "P95": 1
        }
    },
    "Zheng-Yu Niu": {
        "2009": {
            "P09": 1
        }
    },
    "Khairun-nisa Hassanali": {
        "2010": {
            "W10": 1
        }
    },
    "Shen Xu Zhang Matsoukas": {
        "2009": {
            "D09": 1
        }
    },
    "Shanghai Jiao Tong": {
        "2010": {
            "W10": 1
        }
    },
    "Noble": {
        "2015": {
            "W15": 1
        }
    },
    "Liliana Ardissono": {
        "1993": {
            "P93": 1
        }
    },
    "Kristy Eun Robert Michael D Mladen A James C Young Ha Lester Boyer": {
        "2010": {
            "W10": 1
        }
    },
    "William C Ogden": {
        "1995": {
            "E95": 1
        }
    },
    "Joel Korb": {
        "2003": {
            "W03": 1
        }
    },
    "Chris Hokamp": {
        "2015": {
            "K15": 1
        }
    },
    "Evgeny Matusov": {
        "2009": {
            "W09": 2
        },
        "2005": {
            "W05": 1
        }
    },
    "Shrikanth Narayanan": {
        "2014": {
            "S14": 1
        }
    },
    "Eiko Yamamoto": {
        "2004": {
            "P04": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Anthony F Gallippi": {
        "1996": {
            "P96": 1
        }
    },
    "Renato de": {
        "2009": {
            "N09": 1
        }
    },
    "Natalie": {
        "2015": {
            "W15": 1
        }
    },
    "Ryan Georgi": {
        "2015": {
            "W15": 1
        }
    },
    "Natalia": {
        "2012": {
            "D12": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Am\u00b4alia Mendes": {
        "2010": {
            "W10": 1
        }
    },
    "Elizabeth M Merkhofer": {
        "2015": {
            "S15": 1
        }
    },
    "Scott Winters Yang Jin Pete White": {
        "2005": {
            "P05": 1
        }
    },
    "Aldo Piccolino Boniforti": {
        "2006": {
            "W06": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Mohapatra Siddhanth Jain Soumen": {
        "2013": {
            "D13": 1
        }
    },
    "Philippe Blache": {
        "2006": {
            "P06": 1
        }
    },
    "Stella": {
        "2003": {
            "W03": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Minwei Feng": {
        "2015": {
            "W15": 1
        }
    },
    "M P Harper": {
        "2000": {
            "A00": 1
        }
    },
    "Cosmin Munteanu": {
        "2003": {
            "P03": 1
        },
        "2004": {
            "P04": 1
        }
    },
    "Laura Chiticariu Rajasekar Krishnamurthy Yunyao Li Sriram Raghavan Frederick R Reiss Shivakumar Vaithyanathan": {
        "2010": {
            "P10": 1
        }
    },
    "Christian Hardmeier": {
        "2015": {
            "W15": 1
        }
    },
    "Anselmo Perias": {
        "2010": {
            "W10": 1
        }
    },
    "Sabine Berglert": {
        "1993": {
            "J93": 1
        }
    },
    "Jingbo Zhu": {
        "2010": {
            "P10": 1,
            "W10": 1
        }
    },
    "White": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "D09": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Bo Yuan": {
        "2010": {
            "W10": 1
        }
    },
    "Francesco Mesiano": {
        "2010": {
            "W10": 1
        }
    },
    "Eric Sven Ristad": {
        "1995": {
            "P95": 1
        },
        "1990": {
            "P90": 1
        }
    },
    "Diman Ghazi": {
        "2012": {
            "W12": 1
        }
    },
    "Tomanek Hahn": {
        "2009": {
            "W09": 1
        }
    },
    "Chao-jan": {
        "2000": {
            "W00": 1
        }
    },
    "Stephan Peitz": {
        "2015": {
            "W15": 1
        }
    },
    "Scott Cederberg Dominic Widdows": {
        "2003": {
            "W03": 1
        }
    },
    "Fernando C N Pereira": {
        "1984": {
            "P84": 1
        },
        "1988": {
            "P88": 1
        },
        "1989": {
            "P89": 1
        }
    },
    "Bell Manrique Losada Carlos M Zapata Jaramillo": {
        "2015": {
            "W15": 1
        }
    },
    "Peter F Brown": {
        "1992": {
            "J92": 2
        },
        "1993": {
            "J93": 1
        },
        "1991": {
            "P91": 2
        }
    },
    "Karthik Narasimhan": {
        "2015": {
            "P15": 1
        }
    },
    "Aous Mansouri": {
        "2007": {
            "S07": 1
        }
    },
    "Matthew Riemer": {
        "2015": {
            "W15": 1
        }
    },
    "Owen Rambow": {
        "1992": {
            "A92": 1
        },
        "2000": {
            "A00": 1
        },
        "2001": {
            "J01": 1,
            "P01": 1,
            "N01": 1
        },
        "2004": {
            "N04": 1
        },
        "2005": {
            "W05": 1,
            "P05": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "N13": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Shixi": {
        "2010": {
            "W10": 1
        }
    },
    "Yanchuan Sim": {
        "2012": {
            "P12": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Barbara Dunin-Kqplicz": {
        "1983": {
            "E83": 1
        }
    },
    "Xiaoge Li": {
        "2003": {
            "W03": 1
        }
    },
    "SHIRAI Kiyoaki": {
        "1998": {
            "W98": 1
        }
    },
    "R Golding Schabes": {
        "1996": {
            "P96": 1
        }
    },
    "Wilbert": {
        "2007": {
            "W07": 1
        }
    },
    "Juliano Efson Siegfried Edward": {
        "2015": {
            "W15": 1
        }
    },
    "Schamoni Hieber Sokolov": {
        "2014": {
            "P14": 1
        }
    },
    "Victor Raskin": {
        "1996": {
            "P96": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Zornitsa Preslav": {
        "2010": {
            "S10": 1
        }
    },
    "Kathleen R Mckeown": {
        "2009": {
            "E09": 1
        }
    },
    "B Shay": {
        "2013": {
            "P13": 1
        },
        "2014": {
            "Q14": 1,
            "P14": 2
        }
    },
    "Aingeru Mayor": {
        "2012": {
            "W12": 1
        }
    },
    "Michael Johnston": {
        "1998": {
            "P98": 1
        },
        "2004": {
            "P04": 1
        },
        "1997": {
            "A97": 1,
            "E97": 1,
            "P97": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "Raquel Herv\u00b4as": {
        "2005": {
            "W05": 1
        }
    },
    "Michael Bryan Marc": {
        "2015": {
            "W15": 1
        }
    },
    "Yingkai Gao": {
        "2015": {
            "P15": 1
        }
    },
    "Jeremy Trione": {
        "2015": {
            "W15": 1
        }
    },
    "R Honnibal": {
        "2009": {
            "D09": 1
        }
    },
    "Kyoko KAKIHANA": {
        "2004": {
            "W04": 1
        }
    },
    "Sean Munson": {
        "2006": {
            "E06": 1
        }
    },
    "Schlangen": {
        "2009": {
            "E09": 1
        }
    },
    "Herbert J Leassi": {
        "1994": {
            "J94": 1
        }
    },
    "Valerie A MALABONGA": {
        "1999": {
            "W99": 1
        }
    },
    "MOKU": {
        "2012": {
            "W12": 1
        }
    },
    "Alexandre Denis": {
        "2006": {
            "W06": 1
        },
        "2014": {
            "S14": 1
        }
    },
    "O Iker Peter A": {
        "2011": {
            "W11": 1
        }
    },
    "Martin Hieu C Nguyen": {
        "2011": {
            "W11": 1
        }
    },
    "Benjamin Wellner": {
        "2006": {
            "E06": 1
        }
    },
    "Nianzu Ma": {
        "2015": {
            "P15": 1
        }
    },
    "David Steele": {
        "2015": {
            "W15": 1
        }
    },
    "Julian": {
        "2011": {
            "W11": 1
        },
        "2013": {
            "N13": 1,
            "W13": 1
        }
    },
    "John DeNero Klein": {
        "2009": {
            "P09": 1
        }
    },
    "Dieu-Thu Le_Jasper Uijlings Raffaella Bernardi": {
        "2013": {
            "D13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Sanjika Hewavitharana": {
        "2011": {
            "W11": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Chu-Ren Huang": {
        "2002": {
            "W02": 1
        },
        "2010": {
            "W10": 1
        }
    },
    "Michael Auli": {
        "2011": {
            "P11": 1,
            "D11": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Tetsuya Takiguchi": {
        "2014": {
            "W14": 1
        }
    },
    "Ainur Yessenalina": {
        "2010": {
            "P10": 1
        }
    },
    "Carol Friedman": {
        "1989": {
            "P89": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Bassam Hammo Hani Abu-Salem Steven Lytinen": {
        "2002": {
            "W02": 1
        }
    },
    "Toyomi Meguro": {
        "2009": {
            "W09": 1
        }
    },
    "Marco Robert Igor of Informatics": {
        "2013": {
            "P13": 1
        }
    },
    "Lide": {
        "2010": {
            "D10": 1
        }
    },
    "Zanzotto Marco Pennacchiotti": {
        "2010": {
            "W10": 1
        }
    },
    "Xinhao Wang": {
        "2013": {
            "N13": 1
        }
    },
    "Philip Diderichsen": {
        "2005": {
            "P05": 1
        }
    },
    "Shuo Li": {
        "2013": {
            "W13": 1
        }
    },
    "Kevin Crowston": {
        "2014": {
            "W14": 1
        }
    },
    "Wei-Cheng Chu": {
        "2015": {
            "W15": 1
        }
    },
    "DeNero": {
        "2009": {
            "P09": 1
        },
        "2012": {
            "N12": 1
        },
        "2013": {
            "N13": 1,
            "D13": 1
        }
    },
    "Tim Vieira": {
        "2015": {
            "Q15": 1
        }
    },
    "In\u00eas Almeida": {
        "2015": {
            "W15": 1
        }
    },
    "Yoshimasa John Sophia": {
        "2008": {
            "W08": 1
        }
    },
    "A Marti": {
        "2002": {
            "J02": 1
        }
    },
    "Danilo Daniele Roberto": {
        "2013": {
            "S13": 1
        }
    },
    "Tingting Mao": {
        "2006": {
            "W06": 1
        }
    },
    "Gholamreza Alvo": {
        "2014": {
            "W14": 1
        }
    },
    "Marie-France Merger": {
        "1983": {
            "E83": 1
        }
    },
    "Kenneth J McKeevert": {
        "1998": {
            "W98": 1
        }
    },
    "Gahbiche-Braham H\u00b4el`ene Bonneau-Maynard Yvon": {
        "2011": {
            "W11": 1
        }
    },
    "Tomek STRZALKOWSKI": {
        "2000": {
            "A00": 1
        }
    },
    "Suresh Manandhar": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "S10": 1
        },
        "2001": {
            "W01": 1
        },
        "2006": {
            "E06": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "F Baker J Fillmore B Lowe": {
        "1998": {
            "P98": 1
        }
    },
    "Tore": {
        "2013": {
            "W13": 1
        }
    },
    "Gebrekidan Onno Peter": {
        "2014": {
            "P14": 1
        }
    },
    "Clint": {
        "2015": {
            "D15": 1
        }
    },
    "Kenneth Laws": {
        "1986": {
            "P86": 1
        }
    },
    "Hua Ai": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "P09": 1
        }
    },
    "Alexander Tamara Berg": {
        "2013": {
            "P13": 1
        }
    },
    "Lingpeng Kong": {
        "2014": {
            "D14": 1
        }
    },
    "Toutanova Byung-Gyu": {
        "2013": {
            "P13": 1
        }
    },
    "Culotta": {
        "2006": {
            "W06": 1
        }
    },
    "Tim Ioannis James R": {
        "2013": {
            "D13": 1
        }
    },
    "John A Bateman'": {
        "1988": {
            "P88": 1
        }
    },
    "Joseph Gubbins": {
        "2013": {
            "D13": 1
        }
    },
    "Marc Weeber Rein Vost": {
        "2000": {
            "J00": 1
        }
    },
    "Homa Aidinejad": {
        "1991": {
            "P91": 1
        }
    },
    "Giridhar Kumaran": {
        "2007": {
            "N07": 1
        }
    },
    "Xin Li": {
        "2009": {
            "D09": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Hongyu Guo": {
        "2015": {
            "W15": 1
        }
    },
    "Frederik Fouvry": {
        "2003": {
            "E03": 1
        }
    },
    "Gianni Barlacchi": {
        "2015": {
            "P15": 1
        }
    },
    "Kazunari Sugiyama": {
        "2007": {
            "S07": 1
        }
    },
    "Gregor Erbach": {
        "1992": {
            "P92": 1
        },
        "1995": {
            "E95": 1
        }
    },
    "Lee Luke Zettlemoyer": {
        "2015": {
            "D15": 1
        }
    },
    "Wei Zhongyu Baolin": {
        "2015": {
            "D15": 1
        }
    },
    "Yorick Wilks": {
        "2001": {
            "J01": 1
        },
        "2003": {
            "W03": 1
        },
        "2013": {
            "W13": 1
        },
        "1991": {
            "P91": 1
        }
    },
    "Gayalda Waibel": {
        "1998": {
            "P98": 1
        }
    },
    "for Spoken Language Understanding": {
        "2011": {
            "W11": 1
        }
    },
    "Miguel Rios": {
        "2014": {
            "S14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Waqas Anwar": {
        "2011": {
            "W11": 2
        },
        "2013": {
            "W13": 1
        }
    },
    "Gandhe": {
        "2013": {
            "W13": 1
        }
    },
    "Amittai Axelrod": {
        "2011": {
            "D11": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "David Weirt": {
        "2001": {
            "J01": 1
        }
    },
    "T Kasper": {
        "1998": {
            "P98": 1
        }
    },
    "Taro Shinsuke": {
        "2012": {
            "D12": 1
        }
    },
    "J M Walk": {
        "1984": {
            "P84": 1
        }
    },
    "Morin": {
        "2011": {
            "W11": 1
        }
    },
    "Audrey": {
        "2008": {
            "W08": 1
        }
    },
    "DeVault Leuski": {
        "2011": {
            "W11": 1
        }
    },
    "Donghong Ji": {
        "2009": {
            "W09": 1
        },
        "2004": {
            "W04": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Deyi Wang": {
        "2015": {
            "D15": 1
        }
    },
    "Ellsworth": {
        "2007": {
            "W07": 1
        }
    },
    "Gianluca E Lebani": {
        "2010": {
            "W10": 1
        }
    },
    "Felix Hill": {
        "2014": {
            "Q14": 1,
            "P14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Susan Haller": {
        "2005": {
            "P05": 1
        }
    },
    "Xuezhe": {
        "2014": {
            "P14": 1
        }
    },
    "Tokunaga Takenobu": {
        "2003": {
            "W03": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "Xu Asela Khudanpur": {
        "2011": {
            "D11": 1
        }
    },
    "Aditi": {
        "2014": {
            "P14": 1
        }
    },
    "T Hale E Lutz": {
        "2015": {
            "W15": 1
        }
    },
    "Hinrich": {
        "2011": {
            "P11": 1,
            "D11": 1,
            "W11": 1
        },
        "2012": {
            "E12": 1
        },
        "2014": {
            "D14": 1,
            "P14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Sarah E Schwarm": {
        "2005": {
            "P05": 1
        }
    },
    "H Naomi": {
        "2013": {
            "D13": 1
        }
    },
    "Nguyen Le_Minh": {
        "2012": {
            "W12": 1
        }
    },
    "Shaojun": {
        "2003": {
            "N03": 1
        },
        "2004": {
            "W04": 1
        }
    },
    "E Manabu K": {
        "2007": {
            "W07": 1
        }
    },
    "Ai MAKABI": {
        "2012": {
            "W12": 1
        }
    },
    "Matthias Blume": {
        "2005": {
            "W05": 1
        }
    },
    "Maxim A R Fonollosa": {
        "2007": {
            "W07": 1
        }
    },
    "Donna Mirella Lapata": {
        "1997": {
            "W97": 1
        }
    },
    "Louis": {
        "2015": {
            "Q15": 1
        }
    },
    "George Aaron Sarah Laurie Boris Samira Ting Kit Umit Ignacio": {
        "2013": {
            "W13": 1
        }
    },
    "Stephanie D Husby Denilson Barbosa": {
        "2012": {
            "W12": 1
        }
    },
    "Marie-Josee Goulet Annie Duplessis": {
        "2012": {
            "W12": 1
        }
    },
    "Gwendolyn": {
        "2009": {
            "W09": 1
        }
    },
    "Steffen Remus": {
        "2014": {
            "E14": 1
        }
    },
    "Tom M Mitchell": {
        "2011": {
            "D11": 1
        }
    },
    "Hitoshi HDA": {
        "1984": {
            "P84": 1
        }
    },
    "Samir Rustamov Mark A Clements": {
        "2013": {
            "W13": 1
        }
    },
    "Bengt Sigurd": {
        "1984": {
            "P84": 1
        }
    },
    "David Elson": {
        "2014": {
            "P14": 1
        }
    },
    "Christophe Costa Florencio": {
        "2003": {
            "E03": 1
        }
    },
    "Akinori Fujino Shindo": {
        "2011": {
            "P11": 1
        }
    },
    "Matthieu Quignard": {
        "2006": {
            "W06": 1
        }
    },
    "Chong Min Lee": {
        "2014": {
            "W14": 1
        }
    },
    "Tadashi Hoshiai": {
        "1985": {
            "E85": 1
        }
    },
    "Do\u02d8gan Can": {
        "2015": {
            "D15": 1
        }
    },
    "David Weir": {
        "1995": {
            "E95": 1,
            "P95": 1
        },
        "1999": {
            "E99": 1
        },
        "2005": {
            "W05": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "E09": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Gourab Kundu": {
        "2011": {
            "W11": 1
        }
    },
    "G Kahn Ostendorf": {
        "2004": {
            "N04": 1
        }
    },
    "Christian Schulz": {
        "2009": {
            "W09": 1
        }
    },
    "Noemie Elhadad": {
        "2010": {
            "N10": 1
        }
    },
    "Zahar Prasov": {
        "2010": {
            "D10": 1
        }
    },
    "Yinghui Xu Kyoji": {
        "2003": {
            "W03": 1
        }
    },
    "R\u00a8udiger Gleim": {
        "2006": {
            "W06": 1
        }
    },
    "Joan Bachenko Eileen Fitzpatrick C E Wright": {
        "1986": {
            "P86": 1
        }
    },
    "Martha Palmer": {
        "1990": {
            "J90": 1
        },
        "1994": {
            "P94": 1
        },
        "1998": {
            "P98": 1
        },
        "2002": {
            "P02": 1
        },
        "2004": {
            "W04": 2,
            "P04": 1
        },
        "2005": {
            "W05": 2,
            "P05": 2
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "N07": 1,
            "S07": 2
        },
        "2009": {
            "W09": 1
        },
        "2010": {
            "N10": 1,
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Grace Ngai": {
        "2000": {
            "P00": 1,
            "W00": 1
        }
    },
    "Kilian A Foth": {
        "2009": {
            "W09": 1
        },
        "2004": {
            "P04": 1
        },
        "2006": {
            "P06": 2
        }
    },
    "Alexander Franz": {
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "Chetan Rawal": {
        "2011": {
            "P11": 1
        }
    },
    "Joon-Ho Lim": {
        "2004": {
            "W04": 1
        }
    },
    "Sven Hartrumpf Hermann Helbig Rainer": {
        "2006": {
            "W06": 1
        }
    },
    "Irene Russo": {
        "2011": {
            "W11": 1
        }
    },
    "Day Zimak": {
        "1999": {
            "W99": 1
        }
    },
    "Yuta Tsuboi": {
        "2014": {
            "D14": 1
        }
    },
    "Roberto Basili": {
        "2010": {
            "P10": 1,
            "W10": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Jonathan Kevin Adam Sujith": {
        "2010": {
            "N10": 1
        }
    },
    "Jennifer C Lai": {
        "1992": {
            "J92": 1
        },
        "1991": {
            "P91": 1
        }
    },
    "Dan Moldovan": {
        "2005": {
            "P05": 1
        }
    },
    "Gerhard J\u00a8ager": {
        "2012": {
            "W12": 1
        }
    },
    "Fabio Massimo": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "D11": 1
        },
        "2005": {
            "W05": 1
        },
        "2014": {
            "S14": 1
        }
    },
    "Emily Grace Montclair State": {
        "2015": {
            "W15": 1
        }
    },
    "Description Length Gain": {
        "1999": {
            "W99": 1
        }
    },
    "Julia Hirschberg": {
        "1986": {
            "P86": 1
        },
        "1996": {
            "P96": 1
        },
        "2000": {
            "P00": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "N09": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Sherwood": {
        "2001": {
            "S01": 1
        }
    },
    "A Botha": {
        "2013": {
            "D13": 1
        }
    },
    "William H WILSON": {
        "1998": {
            "P98": 1
        }
    },
    "Christoph Tillmann": {
        "1997": {
            "W97": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Nitin Madnani Lin": {
        "2010": {
            "N10": 1
        }
    },
    "With Similarity Estimation": {
        "2015": {
            "J15": 1
        }
    },
    "Chee Wee": {
        "2009": {
            "W09": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Varada Kolhatkar Heike Zinsmeister": {
        "2013": {
            "W13": 1
        }
    },
    "Rani Nelken": {
        "2008": {
            "P08": 1
        },
        "1995": {
            "E95": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "Li Lian": {
        "2003": {
            "P03": 1
        }
    },
    "Ralph Weischedel": {
        "2000": {
            "A00": 1
        },
        "2008": {
            "P08": 1
        },
        "1997": {
            "A97": 1
        }
    },
    "Terry R Hobbs": {
        "1988": {
            "A88": 1
        }
    },
    "Gavin Brown": {
        "2013": {
            "S13": 1
        }
    },
    "Hiroya Takamura": {
        "2001": {
            "W01": 1
        },
        "2002": {
            "W02": 1
        },
        "2003": {
            "W03": 1
        }
    },
    "Tsung-Yih Tseng": {
        "1992": {
            "A92": 1
        }
    },
    "Mark-Jan Nederhof": {
        "2009": {
            "W09": 1
        },
        "2011": {
            "W11": 1
        },
        "2004": {
            "P04": 2
        },
        "1998": {
            "P98": 1,
            "W98": 1
        }
    },
    "W William": {
        "2014": {
            "D14": 1
        }
    },
    "Michael Wirth": {
        "2009": {
            "E09": 1
        }
    },
    "un Stetina": {
        "1998": {
            "W98": 1
        }
    },
    "Stephen Soderland": {
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 1
        },
        "2013": {
            "D13": 1
        },
        "2015": {
            "Q15": 1
        }
    },
    "Vincenzo Lombardo": {
        "1998": {
            "P98": 1
        }
    },
    "Glen Coppersmith": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Elena Garcia": {
        "2001": {
            "S01": 1
        }
    },
    "Dietrich Klakow": {
        "2013": {
            "N13": 1
        },
        "2006": {
            "P06": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Sharon L Oviatt": {
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "1989": {
            "P89": 1
        }
    },
    "Yaakov Yaari Bar Ilan University": {
        "1998": {
            "W98": 1
        }
    },
    "Cynthia A Thompson": {
        "1995": {
            "P95": 1
        }
    },
    "Marion Anita Alexander": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "William C Rounds": {
        "1987": {
            "P87": 1
        }
    },
    "Mirella": {
        "2010": {
            "D10": 1
        },
        "2003": {
            "J03": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Zhenni": {
        "2012": {
            "W12": 1
        }
    },
    "B Jeff": {
        "2015": {
            "W15": 1
        }
    },
    "A Jos\u00b4e": {
        "2006": {
            "W06": 1
        }
    },
    "Jenna Anna Veronika Filip": {
        "2015": {
            "W15": 1
        }
    },
    "de_Waard Pander Maat": {
        "2012": {
            "W12": 1
        }
    },
    "Phong Le": {
        "2013": {
            "W13": 1
        }
    },
    "Rahul Sharma": {
        "2014": {
            "W14": 2
        }
    },
    "Massimo PaolucciI": {
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "Ruth Kempson": {
        "2009": {
            "W09": 1
        }
    },
    "Stan Szpakowicz": {
        "2012": {
            "W12": 1
        }
    },
    "Naomi H Feldman": {
        "2014": {
            "P14": 1
        }
    },
    "Jerry Wright": {
        "2000": {
            "A00": 1
        }
    },
    "Taro Shinsuke Tatsuya": {
        "2012": {
            "P12": 1
        }
    },
    "Brandon Kennedy": {
        "2006": {
            "W06": 1
        }
    },
    "Alexander Yates": {
        "2010": {
            "P10": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "M Sandra Carberry": {
        "1984": {
            "P84": 1
        }
    },
    "Yuhang Guo": {
        "2007": {
            "S07": 1
        }
    },
    "Carlo Tasso": {
        "1989": {
            "E89": 1
        }
    },
    "Xinglong Wang": {
        "2008": {
            "W08": 1
        },
        "2004": {
            "P04": 1
        }
    },
    "Jindal": {
        "2013": {
            "D13": 1
        }
    },
    "Oren Glickman": {
        "2005": {
            "W05": 1
        }
    },
    "Damien Nouvel Jean-Yves Antoine Nathalie Friburger Arnaud Soulet": {
        "2012": {
            "W12": 1
        }
    },
    "Shimei Pan": {
        "2000": {
            "P00": 1
        },
        "1997": {
            "W97": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Philip J Hayes": {
        "1992": {
            "A92": 1
        },
        "1984": {
            "P84": 2
        },
        "1981": {
            "P81": 2
        }
    },
    "Paul N Bennett": {
        "2007": {
            "N07": 1
        }
    },
    "United": {
        "2014": {
            "D14": 1
        }
    },
    "Quantitative Lexicology": {
        "2006": {
            "W06": 1
        }
    },
    "Ang Sun": {
        "2011": {
            "P11": 1
        }
    },
    "Yvonne Adesam": {
        "2015": {
            "W15": 1
        }
    },
    "Linda Z Suril": {
        "1992": {
            "P92": 1
        }
    },
    "Huiying Li": {
        "2010": {
            "P10": 1
        }
    },
    "Jan Haji\u02c7c Du\u0161ek": {
        "2014": {
            "W14": 1
        }
    },
    "etino\u02d8glu Foster": {
        "2011": {
            "W11": 1
        }
    },
    "Massimo Romanelli": {
        "2012": {
            "S12": 1
        }
    },
    "Donna Gates": {
        "2006": {
            "N06": 1
        }
    },
    "Kenjiro Taura": {
        "2006": {
            "W06": 1
        }
    },
    "Sami Virpioja": {
        "2010": {
            "W10": 1
        }
    },
    "Peter Jordan Philip": {
        "2014": {
            "P14": 1
        }
    },
    "Eduard Hovy": {
        "2002": {
            "P02": 1
        },
        "2003": {
            "P03": 2,
            "W03": 1
        },
        "2005": {
            "P05": 2
        },
        "2006": {
            "N06": 1,
            "P06": 1
        },
        "2010": {
            "P10": 2,
            "N10": 1,
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2014": {
            "W14": 1,
            "P14": 1
        }
    },
    "Yogatama": {
        "2009": {
            "D09": 1
        }
    },
    "Salud Maria Jim\u00b4enez-Zafra": {
        "2014": {
            "S14": 1
        }
    },
    "Vivek": {
        "2008": {
            "P08": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "P\u00b4eter Dienes": {
        "2003": {
            "P03": 1
        }
    },
    "Nitin Madnani": {
        "2008": {
            "W08": 1
        },
        "2013": {
            "P13": 1,
            "W13": 1,
            "Q13": 1
        },
        "2014": {
            "P14": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Vitor R Carvalho": {
        "2012": {
            "N12": 1
        }
    },
    "Haotian Charles L A": {
        "2015": {
            "P15": 1
        }
    },
    "Davide Fossati": {
        "2008": {
            "P08": 1
        }
    },
    "Giuseppe Di": {
        "2010": {
            "W10": 1
        }
    },
    "Mohler Bracewell Hinote": {
        "2013": {
            "W13": 1
        }
    },
    "Pat Langley": {
        "1982": {
            "P82": 1
        }
    },
    "Venkata Subhash": {
        "2015": {
            "S15": 1
        }
    },
    "Leon Derczynski": {
        "2010": {
            "S10": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "E14": 2
        }
    },
    "Mike Thelwall": {
        "2010": {
            "P10": 1
        }
    },
    "U Klaus": {
        "2004": {
            "J04": 1
        }
    },
    "Shun Sato": {
        "2011": {
            "W11": 1
        }
    },
    "Liu Agichtein": {
        "2008": {
            "P08": 1
        }
    },
    "Ryan North": {
        "2005": {
            "W05": 1
        }
    },
    "Sophia Krasikov": {
        "2015": {
            "W15": 1
        }
    },
    "George Anton Kiraz": {
        "1996": {
            "P96": 1
        }
    },
    "Vincent J Della Pietra": {
        "1991": {
            "P91": 1
        }
    },
    "Stavrianou": {
        "2012": {
            "W12": 1
        }
    },
    "Makoto Itami": {
        "2000": {
            "P00": 1
        }
    },
    "Barzilay Branavan": {
        "2007": {
            "P07": 1
        }
    },
    "Huixing Jiang Zhe Dong": {
        "2010": {
            "W10": 1
        }
    },
    "Ellen": {
        "2002": {
            "W02": 1
        },
        "2006": {
            "W06": 1
        },
        "2009": {
            "W09": 1
        },
        "2011": {
            "P11": 1,
            "D11": 1
        },
        "2012": {
            "E12": 1
        },
        "2013": {
            "N13": 1,
            "D13": 1
        }
    },
    "John Henderson Zarrella": {
        "2015": {
            "S15": 1
        }
    },
    "Masaki Murata": {
        "2001": {
            "S01": 1
        },
        "1998": {
            "P98": 1,
            "W98": 1
        }
    },
    "Lyle H Ungar": {
        "2009": {
            "P09": 1
        }
    },
    "Ivandr\u00b4e Paraboni": {
        "2006": {
            "W06": 1
        }
    },
    "J Rohit": {
        "2014": {
            "S14": 1
        }
    },
    "Shigeki": {
        "2004": {
            "W04": 1
        }
    },
    "Dubey Keller Sturt": {
        "2006": {
            "P06": 1
        }
    },
    "Francine Chen": {
        "2003": {
            "P03": 1
        },
        "2005": {
            "W05": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "Seng Chan Tou Ng": {
        "2008": {
            "P08": 1
        }
    },
    "Marilena Di_Bari": {
        "2014": {
            "W14": 1
        }
    },
    "Shiyu Wu": {
        "2015": {
            "D15": 1
        }
    },
    "Daniel Quernheim": {
        "2014": {
            "W14": 1
        }
    },
    "Rebecca Jonson": {
        "2006": {
            "E06": 1
        }
    },
    "C Robert": {
        "2000": {
            "W00": 1
        },
        "2002": {
            "W02": 1
        }
    },
    "Srini Janarthanam": {
        "2010": {
            "W10": 1
        }
    },
    "P Ankur": {
        "2014": {
            "D14": 1
        }
    },
    "O Myroslava": {
        "2006": {
            "W06": 1
        }
    },
    "James Dowdall": {
        "2004": {
            "W04": 1
        }
    },
    "Lotfi A Zadeh": {
        "1984": {
            "P84": 1
        }
    },
    "Yunyao Li Laura Chiticariu Huahai Yang Frederick R Reiss Arnaldo Carreno-fuentes": {
        "2012": {
            "P12": 1
        }
    },
    "Christoph": {
        "2008": {
            "W08": 1
        },
        "2003": {
            "W03": 1
        }
    },
    "Tony Mullen": {
        "2000": {
            "W00": 1
        }
    },
    "Jinglei Zhao": {
        "2007": {
            "W07": 1
        }
    },
    "Jacob Devlin": {
        "2015": {
            "D15": 1
        }
    },
    "Mark A Jones Alan S Driscoll": {
        "1985": {
            "P85": 1
        }
    },
    "Mark-Anthony Hutton": {
        "2010": {
            "N10": 1
        }
    },
    "Benjamin Van_Durme Yao": {
        "2012": {
            "N12": 1
        }
    },
    "B Srinivas": {
        "1997": {
            "A97": 1
        }
    },
    "Ralph M Weischedei": {
        "1990": {
            "P90": 1
        }
    },
    "Ralph M Weischedel": {
        "1989": {
            "P89": 1
        }
    },
    "Andrew Borthwick": {
        "1998": {
            "W98": 1
        }
    },
    "Kevin Tsukada Sudoh": {
        "2012": {
            "P12": 1
        }
    },
    "Bowen": {
        "2002": {
            "W02": 1
        }
    },
    "Xiaojie": {
        "2009": {
            "P09": 1
        }
    },
    "Alan Chappell": {
        "2007": {
            "S07": 1
        }
    },
    "Scott M Thede": {
        "1997": {
            "W97": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Sergei Nirenburg": {
        "1991": {
            "W91": 1
        },
        "1994": {
            "A94": 1
        },
        "1996": {
            "P96": 1
        },
        "1998": {
            "P98": 1
        },
        "2003": {
            "W03": 1
        },
        "2004": {
            "W04": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Toshiro Makino Nishikawa": {
        "2013": {
            "W13": 1
        }
    },
    "FROM SPARSE DATA": {
        "1993": {
            "P93": 1
        }
    },
    "Jufeng Li": {
        "2008": {
            "P08": 1
        }
    },
    "Adam Lee": {
        "2011": {
            "W11": 1
        }
    },
    "Dridan": {
        "2010": {
            "D10": 1
        }
    },
    "Elizabeth Owen Bratt": {
        "2000": {
            "W00": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "Pietro TORASSO": {
        "1984": {
            "P84": 1
        }
    },
    "Jennifer Mark": {
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Terry Bor": {
        "2014": {
            "W14": 1
        }
    },
    "F Rebecca": {
        "1998": {
            "W98": 1
        }
    },
    "Hisami Suzuki": {
        "2002": {
            "W02": 1
        },
        "2003": {
            "P03": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "D09": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Muhammad Usman Ghani Khan Yoshihiko Gotoh": {
        "2012": {
            "W12": 1
        }
    },
    "M Ga\u02c7si\u00b4c": {
        "2013": {
            "W13": 1
        }
    },
    "Daoud Clarke": {
        "2015": {
            "W15": 1
        }
    },
    "Bing Qin": {
        "2010": {
            "N10": 1
        }
    },
    "Irina Prodanof": {
        "1983": {
            "E83": 1
        }
    },
    "Kokil Jaidka": {
        "2013": {
            "W13": 1
        }
    },
    "Henriette Engelken": {
        "2009": {
            "P09": 1
        }
    },
    "Yue Zhang": {
        "2011": {
            "P11": 1,
            "D11": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Lawrence Hunter": {
        "2008": {
            "W08": 1
        }
    },
    "Aysu Ezen-Can": {
        "2014": {
            "W14": 1
        }
    },
    "Wen-Juan Hou Lee": {
        "2004": {
            "W04": 1
        }
    },
    "Omer Gunes": {
        "2012": {
            "W12": 1
        }
    },
    "Jennifer Chu-Carroll' Sandra Carberryt": {
        "1998": {
            "J98": 1
        }
    },
    "Peter Gorniak": {
        "2003": {
            "W03": 1
        }
    },
    "Annika": {
        "2012": {
            "W12": 1
        }
    },
    "Shay B Cohen": {
        "2011": {
            "D11": 1,
            "W11": 1
        }
    },
    "Kathrin Spreyer": {
        "2009": {
            "P09": 1
        }
    },
    "Wei-Hao Lin Theresa Wilson": {
        "2006": {
            "W06": 1
        }
    },
    "Rila Mandala": {
        "1998": {
            "W98": 1
        }
    },
    "Hector J Levesque": {
        "1985": {
            "P85": 1
        }
    },
    "Chong Bryan R A Eric P": {
        "2014": {
            "Q14": 1
        }
    },
    "Ferran": {
        "2001": {
            "W01": 1
        }
    },
    "Antonio Valerio": {
        "2011": {
            "W11": 1
        },
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Saskia Ingmar": {
        "2007": {
            "J07": 1
        }
    },
    "Yogarshi Vyas": {
        "2014": {
            "W14": 1
        }
    },
    "Anton Maria Prati": {
        "2014": {
            "E14": 1
        }
    },
    "Patrick Pantel": {
        "2000": {
            "A00": 1
        },
        "2004": {
            "N04": 1
        },
        "2005": {
            "P05": 2
        },
        "2006": {
            "W06": 1,
            "P06": 1
        },
        "2007": {
            "N07": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        },
        "2012": {
            "N12": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Frampton Lemon": {
        "2006": {
            "P06": 1
        }
    },
    "W Vitor R Tom M": {
        "2004": {
            "W04": 1
        }
    },
    "Hillary Harner": {
        "2013": {
            "W13": 1
        }
    },
    "Jaime Arguello Carolyn Ros\u00e9": {
        "2006": {
            "W06": 1
        }
    },
    "Carl Gutwin": {
        "1992": {
            "P92": 1
        }
    },
    "Ant`onia": {
        "2010": {
            "S10": 1
        }
    },
    "Rene Rose Shannen Rose Dela": {
        "2015": {
            "W15": 1
        }
    },
    "Abdul-Rauf Schwenk": {
        "2009": {
            "W09": 1,
            "E09": 1
        }
    },
    "Hung Vu Duc Tu Thanh Minh Le_Son Bao": {
        "2015": {
            "S15": 1
        }
    },
    "Gang Ji": {
        "2006": {
            "N06": 1
        }
    },
    "James M Hogan": {
        "1998": {
            "W98": 1
        }
    },
    "D David": {
        "2004": {
            "N04": 1
        }
    },
    "Manabu": {
        "2003": {
            "W03": 1
        }
    },
    "Pete Dapkus": {
        "1995": {
            "W95": 1
        }
    },
    "Qingcai Chen": {
        "2015": {
            "D15": 1,
            "S15": 1
        }
    },
    "Anatole Gershman": {
        "2015": {
            "P15": 1
        }
    },
    "Itziar Gonzalez-Dios": {
        "2014": {
            "W14": 1
        }
    },
    "Yang Liu": {
        "2005": {
            "P05": 1
        },
        "2006": {
            "N06": 1
        },
        "2007": {
            "N07": 1,
            "P07": 1
        },
        "2008": {
            "P08": 1,
            "W08": 1
        },
        "2009": {
            "P09": 2,
            "D09": 1
        },
        "2010": {
            "P10": 2,
            "N10": 1,
            "W10": 1
        },
        "2011": {
            "P11": 2,
            "W11": 1
        },
        "2012": {
            "D12": 1
        },
        "2013": {
            "P13": 1,
            "W13": 2
        },
        "2015": {
            "S15": 1
        }
    },
    "Lisa Ferro": {
        "2005": {
            "W05": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "Karin M\u00fcller": {
        "2001": {
            "P01": 1
        }
    },
    "Marcelo Fiszman": {
        "2014": {
            "W14": 1
        }
    },
    "Kenneth Dwyer": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "W10": 1
        }
    },
    "Ai Ti": {
        "2012": {
            "W12": 1
        }
    },
    "Fadi Biadsy": {
        "2009": {
            "E09": 1
        }
    },
    "Bryan Rusk": {
        "2011": {
            "W11": 1
        }
    },
    "Vito Pirrelli": {
        "2005": {
            "W05": 1
        },
        "1999": {
            "W99": 1
        }
    },
    "Patrizia Paggio": {
        "2010": {
            "P10": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "Jill Burstein": {
        "2013": {
            "W13": 1
        },
        "1999": {
            "W99": 1
        }
    },
    "Quoc V Le": {
        "2014": {
            "Q14": 1
        }
    },
    "Welty Fan Gondek Schlaikjer": {
        "2010": {
            "W10": 1
        }
    },
    "Joshua": {
        "1996": {
            "W96": 1
        }
    },
    "David Jurgens Vannella": {
        "2014": {
            "P14": 1
        }
    },
    "Alexander Turchin": {
        "2006": {
            "W06": 1
        }
    },
    "Nona Naderi": {
        "2010": {
            "W10": 1
        }
    },
    "Bonnie": {
        "2003": {
            "W03": 1
        },
        "2004": {
            "W04": 1
        },
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 2
        },
        "2007": {
            "W07": 1
        }
    },
    "Frederick Hoyt": {
        "2008": {
            "P08": 1
        }
    },
    "Zhang Clark": {
        "2008": {
            "P08": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Carlo": {
        "2004": {
            "W04": 1
        }
    },
    "R A Smit": {
        "1985": {
            "E85": 1
        }
    },
    "Takashi Hiroya Manabu": {
        "2006": {
            "P06": 1
        }
    },
    "Sun Le": {
        "2000": {
            "W00": 1
        }
    },
    "Mohammed Mediani": {
        "2012": {
            "W12": 1
        }
    },
    "Bo Wang": {
        "2009": {
            "P09": 1
        }
    },
    "I Masashi Daisuke Qing Toyoaki": {
        "2004": {
            "N04": 1
        }
    },
    "Dieu-Thu Le_Raffaella Bernardi": {
        "2012": {
            "W12": 1
        }
    },
    "Christof Monz Omar": {
        "2011": {
            "W11": 1
        }
    },
    "Xiwen Cheng": {
        "2009": {
            "E09": 1
        },
        "2010": {
            "P10": 1
        }
    },
    "Eiji ARAMAKI Takeshi IMAI Kengo MIYO Kazuhiko OHE": {
        "2007": {
            "S07": 1
        }
    },
    "James Gorlinskyt Okurowski-t": {
        "1998": {
            "P98": 1
        }
    },
    "Yiannos A Stathopoulos Simone Tuefel": {
        "2015": {
            "P15": 1
        }
    },
    "Song Cohn": {
        "2011": {
            "W11": 1
        }
    },
    "Dan Roth": {
        "1998": {
            "P98": 1
        },
        "1999": {
            "W99": 1
        },
        "2001": {
            "W01": 1
        },
        "2004": {
            "W04": 2
        },
        "2006": {
            "N06": 1,
            "P06": 2
        },
        "2008": {
            "D08": 1
        },
        "2009": {
            "P09": 1,
            "N09": 1
        },
        "2010": {
            "D10": 1,
            "W10": 2
        },
        "2011": {
            "D11": 1,
            "W11": 1
        },
        "2012": {
            "N12": 1,
            "D12": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "E14": 1
        },
        "2015": {
            "Q15": 1,
            "D15": 2
        }
    },
    "Liang Wenyi C Lee": {
        "2015": {
            "D15": 1
        }
    },
    "Mohammed": {
        "2012": {
            "W12": 1
        }
    },
    "Roi Ari": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Jordi Turmo": {
        "2010": {
            "S10": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Ehud Reiter": {
        "1992": {
            "A92": 1
        },
        "1997": {
            "A97": 1
        },
        "2000": {
            "J00": 1
        },
        "2001": {
            "P01": 1
        },
        "2003": {
            "E03": 1
        },
        "2005": {
            "W05": 1
        },
        "2006": {
            "E06": 1
        },
        "2007": {
            "W07": 1
        },
        "2008": {
            "W08": 1
        },
        "2010": {
            "W10": 1
        },
        "2013": {
            "N13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Alexander G Ororbia C Lee Giles": {
        "2015": {
            "D15": 1
        }
    },
    "Donghong": {
        "2006": {
            "N06": 1
        }
    },
    "Sarah Samson Juan": {
        "2013": {
            "W13": 1
        }
    },
    "Nina": {
        "2015": {
            "W15": 1
        }
    },
    "Sudheer": {
        "2009": {
            "N09": 1
        }
    },
    "Martin I Tietze": {
        "2009": {
            "W09": 1
        }
    },
    "WANG Haifeng": {
        "2004": {
            "P04": 1
        },
        "2005": {
            "P05": 1
        }
    },
    "Paul Cook Gella": {
        "2014": {
            "E14": 1
        }
    },
    "Clint Burfoot": {
        "2009": {
            "P09": 1
        }
    },
    "RANSON GARSIDE": {
        "2000": {
            "W00": 1
        }
    },
    "Aymeric Daval-Markussen Peter Bakker": {
        "2012": {
            "W12": 1
        }
    },
    "Artzi": {
        "2011": {
            "D11": 1
        },
        "2012": {
            "N12": 1
        },
        "2013": {
            "Q13": 1
        }
    },
    "Eibe Frank": {
        "2009": {
            "D09": 1
        }
    },
    "Roi Mark Ari Dan": {
        "2008": {
            "P08": 1
        }
    },
    "Rada": {
        "2004": {
            "W04": 2,
            "N04": 1
        },
        "2007": {
            "N07": 1,
            "S07": 1
        },
        "2009": {
            "W09": 1
        },
        "2011": {
            "W11": 2
        },
        "2012": {
            "S12": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Tou": {
        "2011": {
            "D11": 1
        }
    },
    "Thater F\u00fcrstenau Pinkal": {
        "2010": {
            "P10": 1
        }
    },
    "Vasileios Ha tzivassiloglout": {
        "1996": {
            "J96": 1
        }
    },
    "Radu": {
        "2008": {
            "D08": 1
        },
        "2003": {
            "W03": 1
        },
        "2013": {
            "N13": 1
        },
        "2015": {
            "W15": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Daniel Ansari": {
        "1998": {
            "W98": 1
        }
    },
    "Matthew W Crocker": {
        "1991": {
            "E91": 1
        }
    },
    "Tom": {
        "2004": {
            "W04": 1
        },
        "2013": {
            "W13": 1,
            "D13": 1
        },
        "2014": {
            "D14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Robert Granville": {
        "1984": {
            "P84": 1
        },
        "1994": {
            "W94": 1
        }
    },
    "Diana Nicoleta Popa": {
        "2014": {
            "S14": 1
        }
    },
    "Tom O'Hara": {
        "1998": {
            "W98": 1
        }
    },
    "Kerstin Kunz": {
        "2011": {
            "W11": 1
        }
    },
    "Roberto Ido Kathrin G\u00a8unter Sebastian Asher Omer": {
        "2014": {
            "P14": 1
        }
    },
    "Banea Mihalcea": {
        "2008": {
            "D08": 1
        }
    },
    "Jianwen Zhen Hai Zheng": {
        "2015": {
            "D15": 1
        }
    },
    "Stefan L Frank": {
        "2012": {
            "E12": 1
        }
    },
    "Mark Lee": {
        "2012": {
            "W12": 1
        },
        "2007": {
            "P07": 2
        }
    },
    "Zhemin Zhu Djoerd Hiemstra Peter Apers Andreas": {
        "2013": {
            "S13": 1
        }
    },
    "Smri": {
        "2000": {
            "W00": 1
        }
    },
    "Enrique Amig\u00b4o Julio Gonzalo Victor Peinado Anselmo Pefnas Felisa Verdejo": {
        "2004": {
            "P04": 1
        }
    },
    "Jeffrey Flanigan": {
        "2011": {
            "P11": 1
        }
    },
    "Maite Oronoz": {
        "2000": {
            "A00": 1
        },
        "2014": {
            "S14": 1
        }
    },
    "Aida Nematzadeh": {
        "2014": {
            "D14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Lucia Caroline Carolina": {
        "2010": {
            "W10": 1
        }
    },
    "Jill Suzanne Nickerson": {
        "2000": {
            "A00": 1
        }
    },
    "Chris Mellish": {
        "1992": {
            "A92": 1
        },
        "2008": {
            "W08": 2
        },
        "1996": {
            "W96": 1
        },
        "1998": {
            "W98": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Beth Ann": {
        "2009": {
            "W09": 1
        }
    },
    "Whitney Tabor Pyeong Whan Cho Emily Szkudlarek": {
        "2012": {
            "W12": 1
        }
    },
    "Caroline Gasperin": {
        "2009": {
            "W09": 1
        }
    },
    "Dilek Hakkani-Tur": {
        "2010": {
            "P10": 1,
            "W10": 1
        },
        "2012": {
            "P12": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Nishit Rathod": {
        "2006": {
            "P06": 1
        }
    },
    "Lei Zhang Bing Liu": {
        "2011": {
            "P11": 1
        }
    },
    "Peter Andersson": {
        "2015": {
            "W15": 1
        }
    },
    "Wernard Schmit": {
        "2015": {
            "W15": 1
        }
    },
    "Jason S Chang": {
        "1997": {
            "J97": 1
        },
        "2003": {
            "P03": 1
        },
        "2005": {
            "P05": 1
        },
        "2006": {
            "P06": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "W13": 2
        },
        "2014": {
            "W14": 1
        }
    },
    "Wade": {
        "2014": {
            "D14": 1
        }
    },
    "Stephanie Everett": {
        "1997": {
            "A97": 1
        }
    },
    "Michele Filannino": {
        "2013": {
            "S13": 1
        }
    },
    "Shaul Markovitch": {
        "1993": {
            "P93": 1
        }
    },
    "Benjamin Burchfiel": {
        "2013": {
            "N13": 1
        }
    },
    "Nora": {
        "2015": {
            "W15": 1
        }
    },
    "Shixiang Lu": {
        "2012": {
            "D12": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Benjamin Van_Johns Hopkins": {
        "2014": {
            "P14": 1
        }
    },
    "Mohammed Attia": {
        "2010": {
            "W10": 2
        },
        "2014": {
            "W14": 2
        },
        "2015": {
            "W15": 1
        }
    },
    "Shuqi Sun": {
        "2008": {
            "P08": 1
        }
    },
    "Zhen Wang": {
        "2015": {
            "D15": 1
        }
    },
    "Edward W D Whittaker": {
        "2010": {
            "P10": 1
        },
        "2006": {
            "N06": 1
        }
    },
    "Karl Pichotta": {
        "2014": {
            "E14": 1
        }
    },
    "Penn Treebank": {
        "2007": {
            "J07": 1
        }
    },
    "Hongfei Jiang": {
        "2009": {
            "P09": 1,
            "W09": 1
        }
    },
    "Koichi Shinoda": {
        "2014": {
            "P14": 1
        }
    },
    "Himanshu Sharma Misra Chaudhry": {
        "2013": {
            "W13": 1
        }
    },
    "Radu Ion": {
        "2005": {
            "W05": 1
        }
    },
    "Matteo": {
        "2014": {
            "P14": 1
        }
    },
    "Benjamin Rosenfeld": {
        "2006": {
            "P06": 1
        }
    },
    "K Sparck Jones": {
        "1983": {
            "A83": 1
        }
    },
    "Hongyan Jing": {
        "2000": {
            "A00": 1
        },
        "2003": {
            "P03": 1,
            "W03": 1
        }
    },
    "Elaine Rich": {
        "1991": {
            "W91": 1
        }
    },
    "Peyman Passban": {
        "2015": {
            "W15": 1
        }
    },
    "William J Rapaport": {
        "1988": {
            "P88": 1
        }
    },
    "Mark Wasson": {
        "2000": {
            "A00": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Sean": {
        "2013": {
            "P13": 1
        }
    },
    "Wu Wang": {
        "2009": {
            "P09": 1
        }
    },
    "Lei Shi": {
        "2010": {
            "D10": 1
        },
        "2004": {
            "W04": 1,
            "N04": 1
        }
    },
    "Mohammad Shayganfar": {
        "2013": {
            "W13": 1
        }
    },
    "Och": {
        "2010": {
            "N10": 1
        }
    },
    "Conrad Chang": {
        "2006": {
            "E06": 1
        }
    },
    "Goldwasser Reichart Clarke Roth": {
        "2011": {
            "P11": 1
        }
    },
    "Zhuoran Wang": {
        "2012": {
            "E12": 1
        }
    },
    "Michael Pucher": {
        "2007": {
            "P07": 1
        }
    },
    "Houda Bouamor": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "E12": 1,
            "D12": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "ChengXiang Zhai": {
        "2008": {
            "P08": 1
        },
        "2010": {
            "P10": 1
        }
    },
    "Gunter Neumann Christian Braunt Jakub PiskorskiI": {
        "2000": {
            "A00": 1
        }
    },
    "Wolfgang": {
        "2014": {
            "W14": 1
        },
        "2011": {
            "W11": 1
        },
        "2013": {
            "N13": 1
        },
        "2006": {
            "W06": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Martha Stone Palmer": {
        "1983": {
            "A83": 1
        }
    },
    "Xiaoming": {
        "2010": {
            "W10": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Marco": {
        "2009": {
            "W09": 1,
            "D09": 1
        },
        "2007": {
            "W07": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "F Stanley": {
        "2009": {
            "N09": 2
        }
    },
    "Ausdang": {
        "2010": {
            "W10": 1
        }
    },
    "Georgiana Dinu": {
        "2009": {
            "W09": 1,
            "E09": 1
        },
        "2010": {
            "W10": 1
        },
        "2012": {
            "N12": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Stefan": {
        "2010": {
            "W10": 1
        },
        "2015": {
            "W15": 2
        },
        "2004": {
            "P04": 1
        },
        "2005": {
            "J05": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Paul Piwek": {
        "2003": {
            "E03": 2
        },
        "2006": {
            "W06": 1
        }
    },
    "Cecilia Ovesdotter Alm": {
        "2012": {
            "W12": 3
        },
        "2006": {
            "P06": 1
        }
    },
    "Israela Becker": {
        "2010": {
            "P10": 1
        }
    },
    "Eiichiro Sumita": {
        "1998": {
            "P98": 1
        },
        "2000": {
            "A00": 1
        },
        "2001": {
            "W01": 1
        },
        "2003": {
            "N03": 1,
            "W03": 1
        },
        "2007": {
            "P07": 1
        },
        "2009": {
            "D09": 1
        },
        "2012": {
            "P12": 1
        }
    },
    "Wei Chen": {
        "2008": {
            "P08": 1
        }
    },
    "Han Ren": {
        "2009": {
            "W09": 1
        }
    },
    "Monica Gavrila": {
        "2009": {
            "P09": 1
        }
    },
    "Alexis Manaster-Ramer": {
        "1986": {
            "P86": 1
        },
        "1987": {
            "P87": 1
        }
    },
    "Naglaa Thabet": {
        "2005": {
            "P05": 1
        }
    },
    "Marcus Tomalin": {
        "2014": {
            "E14": 1
        }
    },
    "Jean-Charles Lamirel": {
        "2012": {
            "P12": 1
        }
    },
    "Michael Thaul Lehrman": {
        "2012": {
            "W12": 1
        }
    },
    "Mengqiu Wang": {
        "2014": {
            "P14": 1
        },
        "2006": {
            "W06": 1,
            "P06": 1
        }
    },
    "Asli": {
        "2009": {
            "D09": 1
        }
    },
    "Rafael": {
        "2006": {
            "W06": 1
        }
    },
    "Olivier Bodenreider Serguei V Pakhomov": {
        "2003": {
            "W03": 1
        }
    },
    "Jean-Francois Delannoy": {
        "1999": {
            "W99": 1
        }
    },
    "Donna Byron": {
        "2009": {
            "W09": 1,
            "E09": 1
        }
    },
    "Necati Ercan Ozgencil": {
        "2005": {
            "W05": 1
        }
    },
    "John Bryant": {
        "2004": {
            "W04": 1
        }
    },
    "Boris Katz": {
        "2000": {
            "W00": 1
        },
        "2003": {
            "W03": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "D15": 1,
            "K15": 1
        }
    },
    "Moritz Hermann": {
        "2012": {
            "S12": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Petra Galu\u0161\u02c7c\u00e1kov\u00e1": {
        "2013": {
            "W13": 1
        }
    },
    "Joseph": {
        "2014": {
            "W14": 1
        }
    },
    "Narayanan Bing Liu Choudhary": {
        "2009": {
            "D09": 1
        }
    },
    "Sebastian Loth": {
        "2015": {
            "W15": 1
        }
    },
    "Gilbert": {
        "2013": {
            "P13": 1
        }
    },
    "E Amittai": {
        "2003": {
            "W03": 1
        }
    },
    "Jong C Park": {
        "1995": {
            "P95": 1
        }
    },
    "Meng Wang": {
        "2011": {
            "P11": 1
        }
    },
    "Samuel": {
        "2010": {
            "D10": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Yu Zhi-Hong Deng Shiyingxue Li": {
        "2013": {
            "P13": 1
        }
    },
    "Mausam Oren Etzioni": {
        "2013": {
            "Q13": 1
        }
    },
    "Ildik\u00b4o Pil\u00b4an": {
        "2014": {
            "W14": 1
        }
    },
    "Di_Wang": {
        "2013": {
            "D13": 1
        }
    },
    "Xisen Eric Young": {
        "2015": {
            "D15": 1
        }
    },
    "Allen L Gorin": {
        "1999": {
            "P99": 1
        }
    },
    "Li Zhaopeng van": {
        "2012": {
            "W12": 1
        }
    },
    "Tom Vanallemeersch": {
        "2015": {
            "W15": 2
        }
    },
    "Hermann Ney": {
        "2000": {
            "P00": 2
        },
        "2001": {
            "W01": 1
        },
        "2004": {
            "P04": 1
        },
        "2006": {
            "W06": 1,
            "P06": 1
        }
    },
    "Jason L Hutchens": {
        "1998": {
            "W98": 1
        }
    },
    "Nidhi Gupta": {
        "2003": {
            "W03": 1
        }
    },
    "Pasi": {
        "1998": {
            "W98": 1
        }
    },
    "Samuel Broscheit": {
        "2012": {
            "W12": 1
        }
    },
    "Young-Bum Kim": {
        "2013": {
            "N13": 1,
            "P13": 1
        }
    },
    "Ryan M Roth": {
        "2009": {
            "P09": 1
        }
    },
    "Stan C Kwasny": {
        "1979": {
            "P79": 1
        },
        "1981": {
            "J81": 1
        }
    },
    "Gabriel G Bes": {
        "1989": {
            "E89": 1
        }
    },
    "Spence Green Monroe": {
        "2014": {
            "P14": 1
        }
    },
    "Dustin A Smith": {
        "2013": {
            "W13": 1
        }
    },
    "W John": {
        "2007": {
            "W07": 1
        },
        "2012": {
            "W12": 1
        },
        "2006": {
            "W06": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Nicolas Loeff": {
        "2006": {
            "P06": 1
        }
    },
    "Edward P Stabler": {
        "1987": {
            "J87": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "St\u00b4ephane Rauzy": {
        "2006": {
            "P06": 1
        }
    },
    "Panagiotis A Rentzepopoulos George K Kokkinakis": {
        "1996": {
            "J96": 1
        }
    },
    "M Juan": {
        "2010": {
            "W10": 1
        }
    },
    "Jiafeng Guo Sun": {
        "2015": {
            "P15": 1
        }
    },
    "Mitchell": {
        "2012": {
            "D12": 1
        },
        "2013": {
            "Q13": 1
        }
    },
    "Daniel Cer Green": {
        "2014": {
            "W14": 2
        }
    },
    "Alan Wallington": {
        "2007": {
            "P07": 2
        }
    },
    "Dirk Speelman Heylen": {
        "2012": {
            "W12": 1
        }
    },
    "Jokinen Tanaka Yokoo": {
        "1998": {
            "P98": 1
        }
    },
    "Malioutov Barzilay": {
        "2006": {
            "P06": 1
        }
    },
    "Tomohiro Yoshikawa": {
        "2014": {
            "D14": 1
        }
    },
    "Antoine Raux": {
        "2010": {
            "W10": 1
        },
        "2012": {
            "W12": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Eryi\u02d8git Tugay ilbay Ozan Arkan": {
        "2011": {
            "W11": 1
        }
    },
    "Paolo": {
        "2014": {
            "E14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Franz Josef Och": {
        "2000": {
            "P00": 1
        },
        "2001": {
            "W01": 1
        },
        "2003": {
            "P03": 1
        }
    },
    "Kaarel Kaljurand Kappeler": {
        "2009": {
            "W09": 1
        }
    },
    "Shefali": {
        "2013": {
            "W13": 1
        }
    },
    "Byeongchang Kim Lee": {
        "2001": {
            "W01": 1
        }
    },
    "Brian McLernon Nicholas": {
        "2006": {
            "W06": 1
        }
    },
    "R Curran": {
        "2009": {
            "E09": 1
        },
        "2010": {
            "S10": 1,
            "W10": 1
        }
    },
    "Shumin": {
        "2015": {
            "W15": 1,
            "S15": 1
        }
    },
    "Nelleke Oostdijk": {
        "2014": {
            "W14": 1
        }
    },
    "Philipp Koehn Miles": {
        "2006": {
            "N06": 1
        }
    },
    "D Michael": {
        "1998": {
            "W98": 2
        }
    },
    "Tim Fernando": {
        "2013": {
            "W13": 1
        }
    },
    "Ariel Schwartz": {
        "2005": {
            "P05": 1
        }
    },
    "James Zhang": {
        "2006": {
            "W06": 1
        }
    },
    "Nizar Habash": {
        "2005": {
            "W05": 1,
            "P05": 1
        },
        "2006": {
            "N06": 1,
            "P06": 2
        },
        "2007": {
            "N07": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "P09": 1,
            "W09": 3
        },
        "2013": {
            "P13": 1,
            "D13": 1
        },
        "2014": {
            "W14": 1,
            "P14": 3
        },
        "2015": {
            "W15": 1
        }
    },
    "Johanna D Moore": {
        "1989": {
            "P89": 1
        },
        "1993": {
            "J93": 1
        },
        "1998": {
            "P98": 1
        },
        "2000": {
            "P00": 1,
            "W00": 1
        },
        "2003": {
            "E03": 1
        },
        "2005": {
            "P05": 1
        },
        "2006": {
            "E06": 2
        },
        "2007": {
            "P07": 1
        },
        "2008": {
            "P08": 1
        }
    },
    "Jan van_Santen": {
        "2013": {
            "W13": 1
        }
    },
    "Sujay Kumar Jauhar": {
        "2015": {
            "S15": 1
        }
    },
    "Benoit Lavoie": {
        "2000": {
            "A00": 1
        },
        "2001": {
            "W01": 1
        },
        "2002": {
            "W02": 1
        },
        "1997": {
            "A97": 1
        }
    },
    "Oliver": {
        "2009": {
            "W09": 1
        },
        "2012": {
            "E12": 1,
            "D12": 1
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Gildea": {
        "2003": {
            "W03": 1
        },
        "2005": {
            "W05": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Sherif Kondrak": {
        "2007": {
            "P07": 2
        }
    },
    "Boyan A Onyshkevych": {
        "1991": {
            "W91": 1
        }
    },
    "Yi-Ching Zeng": {
        "2013": {
            "W13": 1
        }
    },
    "Beryl": {
        "1996": {
            "W96": 1
        }
    },
    "Xiaofeng Yang Jian Su": {
        "2007": {
            "P07": 1
        }
    },
    "Adam Meyers": {
        "1993": {
            "P93": 1
        },
        "2004": {
            "W04": 1
        },
        "2005": {
            "W05": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Patrick Paul": {
        "2006": {
            "N06": 1
        }
    },
    "Satoshi Kinoshita": {
        "2015": {
            "W15": 1
        }
    },
    "Grover Lascarides": {
        "2001": {
            "P01": 1
        }
    },
    "Shyamsundar Jayaraman": {
        "2005": {
            "P05": 1
        }
    },
    "Germany": {
        "2003": {
            "E03": 1
        }
    },
    "John Byrnes": {
        "2005": {
            "W05": 1
        }
    },
    "Michael Mohler": {
        "2012": {
            "S12": 1
        }
    },
    "Hangyu Li": {
        "2012": {
            "W12": 1
        }
    },
    "Liheng Xu": {
        "2013": {
            "P13": 1
        }
    },
    "Yiming Yang": {
        "2003": {
            "P03": 1
        }
    },
    "Mitra Mohtarami": {
        "2015": {
            "W15": 1
        }
    },
    "Junyi Jessy": {
        "2014": {
            "W14": 1,
            "P14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Zhao": {
        "2009": {
            "D09": 1
        }
    },
    "Hui Yang": {
        "2009": {
            "P09": 1
        }
    },
    "Giuseppe": {
        "2000": {
            "W00": 2
        },
        "2001": {
            "N01": 1
        },
        "2015": {
            "W15": 1
        },
        "2014": {
            "W14": 1
        },
        "2009": {
            "W09": 1
        }
    },
    "Oliver Lemon": {
        "2004": {
            "P04": 1
        },
        "2006": {
            "P06": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "W09": 1,
            "E09": 2
        },
        "2010": {
            "P10": 1,
            "W10": 1
        },
        "2014": {
            "W14": 2,
            "P14": 1,
            "E14": 1
        }
    },
    "M Mark": {
        "2013": {
            "W13": 1
        }
    },
    "Huu Barbara Ralph Science Department": {
        "2015": {
            "P15": 1
        }
    },
    "Krishna Dayanidhi": {
        "2007": {
            "W07": 1
        }
    },
    "Rohan Ramanath": {
        "2014": {
            "P14": 1
        }
    },
    "Qunhua": {
        "2004": {
            "W04": 1
        }
    },
    "Ebert": {
        "2014": {
            "D14": 1
        }
    },
    "Yan Qu": {
        "2004": {
            "P04": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Felice Dell\u2019Orletta": {
        "2011": {
            "W11": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Nivre Nilsson": {
        "2005": {
            "P05": 1
        }
    },
    "Mehdi Manshadi": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "S12": 1
        }
    },
    "Inaki Alegria": {
        "2015": {
            "W15": 1
        }
    },
    "Honglin Sun": {
        "2003": {
            "W03": 1
        }
    },
    "R Bryce Inouye": {
        "2004": {
            "P04": 1
        }
    },
    "J\u00a8org Tiedemann Jori Mur": {
        "2008": {
            "W08": 1
        }
    },
    "Robert Remus": {
        "2015": {
            "S15": 1
        }
    },
    "Jo": {
        "1997": {
            "W97": 1
        }
    },
    "Ji": {
        "2000": {
            "W00": 1
        }
    },
    "Ranjay Krishna": {
        "2015": {
            "W15": 1
        }
    },
    "William Yang": {
        "2015": {
            "P15": 1
        }
    },
    "Kevin Cook Jeremiah McGhee": {
        "2011": {
            "W11": 1
        }
    },
    "University of Washington": {
        "2011": {
            "D11": 1
        }
    },
    "Ismael Garcia-Varea": {
        "2006": {
            "W06": 1
        }
    },
    "tKeh-Yih Su": {
        "1992": {
            "P92": 1
        }
    },
    "Yanyan Cui Ting Chi": {
        "2013": {
            "W13": 1
        }
    },
    "Masaki Muratat": {
        "2001": {
            "S01": 1
        }
    },
    "Mabry Tyson": {
        "1992": {
            "A92": 1
        }
    },
    "L Jason": {
        "1998": {
            "W98": 1
        }
    },
    "Yu-Yin": {
        "2012": {
            "W12": 1
        }
    },
    "Toshikazu Fukushima": {
        "1986": {
            "P86": 1
        },
        "1990": {
            "P90": 1
        }
    },
    "Mark JohnsonBrown edu": {
        "2008": {
            "P08": 1,
            "W08": 1
        },
        "2009": {
            "N09": 1
        },
        "2004": {
            "P04": 1
        },
        "2001": {
            "P01": 1
        }
    },
    "Kenneth Wauchope": {
        "1997": {
            "A97": 1
        }
    },
    "Riccardo": {
        "2010": {
            "W10": 1
        }
    },
    "Ganesh Ramakrishnan": {
        "2003": {
            "W03": 1
        }
    },
    "Rob Gaizauskas": {
        "2007": {
            "S07": 1
        }
    },
    "Wencan Luo": {
        "2013": {
            "N13": 1
        }
    },
    "Alexandru Dan": {
        "2005": {
            "W05": 1
        }
    },
    "Raquel Fernandez": {
        "2003": {
            "E03": 1
        }
    },
    "Kristy Elizabeth": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        },
        "2014": {
            "W14": 2
        }
    },
    "Winfried Graf": {
        "1991": {
            "E91": 1
        }
    },
    "Lucia Nicola Ido Marc Idan": {
        "2009": {
            "P09": 1
        }
    },
    "Qun Liu Liu": {
        "2006": {
            "P06": 1
        }
    },
    "Ravikumar Kondadadi": {
        "2013": {
            "W13": 1
        }
    },
    "Christopher Meek Andrzej": {
        "2013": {
            "P13": 1
        }
    },
    "Kim Lee Lee Lee": {
        "1998": {
            "P98": 1
        }
    },
    "Andy Lauriston": {
        "1995": {
            "E95": 1
        }
    },
    "Deepak Ravichandran": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "E09": 1
        },
        "2002": {
            "P02": 1
        },
        "2003": {
            "W03": 1
        },
        "2005": {
            "P05": 1
        }
    },
    "Runxin Li": {
        "2008": {
            "P08": 1
        }
    },
    "Daniel Ortiz": {
        "2006": {
            "W06": 1
        }
    },
    "Tuan Tran Nam Khanh Tran Asmelash Teka Hadgu Robert J\u00a8aschke": {
        "2015": {
            "D15": 1
        }
    },
    "Wei Lu": {
        "2012": {
            "D12": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Nicol\u00b4as Racca": {
        "2011": {
            "W11": 1
        }
    },
    "Eric Gaussier Dejean": {
        "2003": {
            "W03": 1
        }
    },
    "Subhro Roy": {
        "2015": {
            "Q15": 1,
            "D15": 1
        }
    },
    "Wei Li": {
        "2000": {
            "A00": 1
        },
        "2003": {
            "P03": 1,
            "W03": 1
        },
        "2004": {
            "P04": 1
        }
    },
    "John D Kelleher Geert-Jan M Kruijff": {
        "2006": {
            "P06": 2
        }
    },
    "Michael Schiehlen": {
        "1993": {
            "E93": 1
        },
        "2003": {
            "P03": 1,
            "E03": 1
        },
        "1998": {
            "P98": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Balaji R Soundrarajan": {
        "2011": {
            "P11": 1
        }
    },
    "Kenneth Heafield": {
        "2009": {
            "W09": 1
        }
    },
    "Steven Finch": {
        "1995": {
            "E95": 1
        }
    },
    "Jin Guang Xiaogang Peter": {
        "2015": {
            "D15": 1
        }
    },
    "Reinhard": {
        "1993": {
            "W93": 1
        }
    },
    "Maria Pia di_Buono Mario Monteleone Annibale Elia": {
        "2014": {
            "W14": 1
        }
    },
    "Sinno Jialin Ou Qiang Xiaoyan": {
        "2012": {
            "P12": 1
        }
    },
    "Peter Berck": {
        "2012": {
            "W12": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "J Bonnie": {
        "2005": {
            "W05": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Yansong Feng": {
        "2010": {
            "D10": 1
        }
    },
    "Lin Xiaojun": {
        "2006": {
            "W06": 1
        }
    },
    "Eric Joanis": {
        "2006": {
            "N06": 1
        }
    },
    "Joana Paulo": {
        "2007": {
            "N07": 1
        }
    },
    "Chris Quirk": {
        "2005": {
            "P05": 1
        },
        "2009": {
            "P09": 1
        },
        "2011": {
            "D11": 1,
            "W11": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "N13": 1,
            "D13": 2
        },
        "2014": {
            "P14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Hisayuki Kanda": {
        "2000": {
            "P00": 1
        }
    },
    "Duo Zhang": {
        "2010": {
            "P10": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "John M Conroy": {
        "2013": {
            "P13": 1,
            "W13": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Nadia Bellalem": {
        "2014": {
            "S14": 1
        }
    },
    "Dominiek Walter": {
        "2009": {
            "E09": 1
        }
    },
    "Pranav Anand": {
        "2012": {
            "N12": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Xiaodong He": {
        "2009": {
            "D09": 1
        },
        "2011": {
            "D11": 1
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "N13": 1
        },
        "2014": {
            "D14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Nghia The Pham Lorenzo Ferrone": {
        "2014": {
            "S14": 1
        }
    },
    "Stephen Pulman": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "W09": 1
        },
        "2012": {
            "S12": 1
        }
    },
    "D Manning": {
        "2003": {
            "W03": 1
        },
        "2008": {
            "P08": 1
        },
        "2010": {
            "P10": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "D14": 1,
            "W14": 2
        },
        "2015": {
            "W15": 1
        }
    },
    "Jordan Boyd-Graber": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "D12": 1
        },
        "2014": {
            "Q14": 1,
            "P14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Andy Way": {
        "2010": {
            "P10": 1,
            "W10": 1
        },
        "2015": {
            "W15": 1
        },
        "2006": {
            "W06": 1
        },
        "2007": {
            "W07": 1,
            "P07": 2
        }
    },
    "Mike Perkowitz": {
        "2010": {
            "W10": 1
        }
    },
    "Jochen Dorre": {
        "1996": {
            "P96": 1
        },
        "1991": {
            "P91": 1
        }
    },
    "Yorktown Heights": {
        "2011": {
            "P11": 1
        }
    },
    "Alison K Huettner": {
        "1992": {
            "A92": 1
        }
    },
    "Christian Scheible": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "D11": 1
        },
        "2013": {
            "P13": 1
        },
        "2014": {
            "E14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Friedrich Steimann Christoph Brzoska": {
        "1995": {
            "J95": 1
        }
    },
    "Angel Chang": {
        "2012": {
            "D12": 1
        }
    },
    "Rebecca Mason": {
        "2011": {
            "W11": 1
        }
    },
    "Albert Gatt": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "W09": 1
        },
        "2006": {
            "E06": 1,
            "P06": 1
        }
    },
    "William Boag": {
        "2015": {
            "S15": 1
        }
    },
    "D S Bree": {
        "1985": {
            "E85": 1
        }
    },
    "Samantha Finkelstein": {
        "2012": {
            "W12": 1
        }
    },
    "Tim": {
        "2009": {
            "N09": 1
        },
        "2003": {
            "W03": 1
        },
        "1988": {
            "J88": 1
        },
        "2013": {
            "W13": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Yoshio Nakao": {
        "2000": {
            "P00": 1
        }
    },
    "James A Pittman": {
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "James Barnett": {
        "1991": {
            "W91": 1
        }
    },
    "Sheng": {
        "2013": {
            "D13": 1
        }
    },
    "Jimin Liu": {
        "2001": {
            "P01": 1
        }
    },
    "Marco A Valenzuela-Esc\u00b4arcega Gus Hahn-Powell Thomas Hicks Mihai": {
        "2015": {
            "P15": 1
        }
    },
    "Gina-Anne Levow": {
        "2009": {
            "P09": 1
        },
        "1999": {
            "W99": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Frederic": {
        "2003": {
            "W03": 1
        }
    },
    "Fei Fuliang Yang": {
        "2013": {
            "D13": 1
        }
    },
    "Florian Laws": {
        "2009": {
            "W09": 1
        },
        "2011": {
            "D11": 1
        }
    },
    "Jian-Yun Nie": {
        "2000": {
            "A00": 1
        },
        "2008": {
            "P08": 1
        },
        "2010": {
            "S10": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "John Kominek": {
        "2013": {
            "D13": 1
        }
    },
    "Nikolaos Malandrakis": {
        "2014": {
            "S14": 1
        }
    },
    "Eckhard Bick": {
        "2006": {
            "W06": 1
        }
    },
    "Ravi Kumar": {
        "2009": {
            "N09": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Jane J Robinson": {
        "1983": {
            "P83": 1
        }
    },
    "Dominika Pawlik Aleksander Zab\u0142ocki Bartosz Zaborowski": {
        "2013": {
            "W13": 2
        }
    },
    "Xose De_La": {
        "2015": {
            "S15": 1
        }
    },
    "Carenini T Ng": {
        "2009": {
            "W09": 1
        }
    },
    "Rajeev Sangal": {
        "2013": {
            "W13": 1
        }
    },
    "Nan Dongdong Chi-Ho Ming": {
        "2009": {
            "P09": 1
        }
    },
    "Rui Li Jeff B Pelz Pengcheng Shi Anne Haake": {
        "2012": {
            "W12": 1
        }
    },
    "Eyal Shnarch": {
        "2009": {
            "P09": 1,
            "E09": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Alexander Gelbukh": {
        "2004": {
            "W04": 1
        }
    },
    "Marina Ivasic-Kos": {
        "2014": {
            "W14": 1
        }
    },
    "Gregor Leusch": {
        "2009": {
            "W09": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "William H Hsu": {
        "2010": {
            "S10": 1
        }
    },
    "Rajkumar": {
        "2011": {
            "W11": 1
        }
    },
    "Adwait": {
        "1996": {
            "W96": 1
        }
    },
    "Jason J S Chang": {
        "1996": {
            "W96": 1
        }
    },
    "Richard A Frost": {
        "2007": {
            "W07": 1
        }
    },
    "Stavros": {
        "2004": {
            "W04": 1
        }
    },
    "Matteo Luciani": {
        "2010": {
            "W10": 1
        }
    },
    "Salud M Jim\u00b4enez-Zafra": {
        "2015": {
            "S15": 1
        }
    },
    "Chao-Jan Chen": {
        "2004": {
            "W04": 1
        }
    },
    "Milton Keynes": {
        "2009": {
            "W09": 1
        },
        "2011": {
            "P11": 1
        },
        "2015": {
            "W15": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Bo Pang": {
        "2010": {
            "N10": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "P12": 1,
            "D12": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Carolyn Penstein Ros\u00b4e Brian S Hall": {
        "2004": {
            "W04": 1
        }
    },
    "Kornel Laskowski": {
        "2010": {
            "P10": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Craig Harman": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Silvia Giuseppe Sebastian": {
        "2010": {
            "W10": 1
        }
    },
    "Daniel D Suthers": {
        "1990": {
            "W90": 1
        }
    },
    "Kiyoshi Sudo": {
        "2003": {
            "P03": 1
        }
    },
    "Taraka Rama": {
        "2009": {
            "N09": 1,
            "W09": 1
        }
    },
    "Tomoya Iwakura Seishi": {
        "2008": {
            "W08": 1
        }
    },
    "Alistair Knott": {
        "1998": {
            "W98": 1
        }
    },
    "Karo Moilanen": {
        "2008": {
            "P08": 1
        }
    },
    "Richard M Saenz": {
        "1983": {
            "P83": 1
        }
    },
    "Olga Uryupina": {
        "2010": {
            "S10": 1
        }
    },
    "Philip Resnik": {
        "1990": {
            "P90": 1
        },
        "1992": {
            "P92": 1
        },
        "1997": {
            "A97": 1
        },
        "2005": {
            "P05": 1
        },
        "2007": {
            "W07": 1,
            "S07": 1
        },
        "2010": {
            "P10": 1,
            "D10": 1
        },
        "2013": {
            "N13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "G Boulianne": {
        "2007": {
            "P07": 1
        }
    },
    "Marek": {
        "2010": {
            "W10": 1
        }
    },
    "Micha Elsner": {
        "2005": {
            "W05": 1
        },
        "2007": {
            "N07": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "N09": 1,
            "W09": 1,
            "E09": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "P11": 2
        },
        "2014": {
            "E14": 1
        }
    },
    "Yonghong Yan": {
        "2014": {
            "W14": 1
        }
    },
    "Zhongyuan": {
        "2015": {
            "W15": 1
        }
    },
    "Liu Tou": {
        "2012": {
            "P12": 1
        }
    },
    "Chris Manning": {
        "2009": {
            "P09": 1
        }
    },
    "Siegfried": {
        "2014": {
            "W14": 2
        }
    },
    "Yanyan Zhao": {
        "2010": {
            "N10": 1
        }
    },
    "Lis Pereira": {
        "2015": {
            "W15": 1
        }
    },
    "Jean-Baptiste Fouet Jean Senellart": {
        "2008": {
            "W08": 1
        }
    },
    "Barton": {
        "1985": {
            "J85": 1
        }
    },
    "Julia Bosque-Gil": {
        "2015": {
            "W15": 1
        }
    },
    "D\u2019Souza": {
        "2015": {
            "P15": 1
        }
    },
    "Young S Han": {
        "1993": {
            "W93": 1
        },
        "1995": {
            "E95": 1
        }
    },
    "Stanojevi\u00b4c": {
        "2014": {
            "D14": 1,
            "W14": 1
        }
    },
    "Lam Wai Bun": {
        "1997": {
            "W97": 1
        }
    },
    "Roi": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "D10": 1
        }
    },
    "Ron": {
        "2008": {
            "W08": 2
        },
        "2011": {
            "W11": 1
        }
    },
    "Rob": {
        "2000": {
            "W00": 1
        }
    },
    "Kai-Hsiang Yu": {
        "2015": {
            "W15": 1
        }
    },
    "Andrew Harley": {
        "1997": {
            "W97": 1
        }
    },
    "Wen Tsuei": {
        "1998": {
            "P98": 1
        }
    },
    "Mark McLauchlan": {
        "2004": {
            "W04": 1
        }
    },
    "Romain Thibaux": {
        "2006": {
            "P06": 1
        }
    },
    "Kyoko Kanzaki": {
        "2003": {
            "P03": 1
        },
        "2004": {
            "P04": 1
        }
    },
    "E Michael Manabu K": {
        "2006": {
            "W06": 1
        }
    },
    "Donia": {
        "1998": {
            "W98": 1
        }
    },
    "Eun Y Ha": {
        "2010": {
            "W10": 1
        }
    },
    "Radu Tudor": {
        "2013": {
            "W13": 1
        }
    },
    "Steven Bird": {
        "1991": {
            "E91": 1
        },
        "1994": {
            "J94": 1
        },
        "2001": {
            "W01": 1
        },
        "2004": {
            "P04": 1
        },
        "2006": {
            "P06": 1
        },
        "2008": {
            "W08": 1
        }
    },
    "Charles Elkan": {
        "2010": {
            "P10": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Anthony": {
        "2012": {
            "W12": 1
        }
    },
    "Soojeong Eom": {
        "2012": {
            "W12": 1
        }
    },
    "William Gale": {
        "1992": {
            "P92": 1
        }
    },
    "Darren Gergle": {
        "2006": {
            "E06": 1
        }
    },
    "Marco Pennacchiotti": {
        "2009": {
            "E09": 1
        },
        "2011": {
            "D11": 1,
            "W11": 1
        },
        "2005": {
            "W05": 1
        },
        "2006": {
            "W06": 1,
            "P06": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Federico Fancellu": {
        "2015": {
            "W15": 2
        }
    },
    "Zhanyi Liu": {
        "2006": {
            "P06": 1
        }
    },
    "Jianqiang Ma Dale Gerdemann": {
        "2012": {
            "W12": 1
        }
    },
    "Alon Halevy": {
        "2014": {
            "D14": 1
        }
    },
    "Matthew Gormley": {
        "2012": {
            "W12": 1
        }
    },
    "Hong-Kui De-Yi Qun": {
        "2003": {
            "W03": 1
        }
    },
    "Karen Sudre Hunil Park": {
        "2006": {
            "W06": 1
        }
    },
    "Stanley Peters": {
        "2001": {
            "W01": 1
        }
    },
    "Nigel Ward": {
        "1990": {
            "W90": 1
        }
    },
    "Martin Kayt": {
        "1994": {
            "J94": 2
        }
    },
    "Ramon Granell": {
        "2009": {
            "W09": 1
        }
    },
    "Yutaka Sasaki": {
        "2003": {
            "P03": 2,
            "W03": 1
        }
    },
    "Terry Patten": {
        "1985": {
            "E85": 1
        }
    },
    "Shiwen Zhengyan": {
        "2010": {
            "W10": 1
        }
    },
    "Viktor PEKAR": {
        "2004": {
            "W04": 1
        }
    },
    "Eline Westerhout": {
        "2009": {
            "E09": 1
        }
    },
    "Kuzman Ganchev": {
        "2012": {
            "P12": 1
        }
    },
    "F Rau S Jacobs": {
        "1988": {
            "A88": 1
        }
    },
    "S Albrecht": {
        "2008": {
            "W08": 1
        },
        "2009": {
            "E09": 1
        }
    },
    "James H Martint": {
        "1995": {
            "J95": 1
        }
    },
    "Leif Arda": {
        "2006": {
            "W06": 1
        }
    },
    "Jorge": {
        "2012": {
            "W12": 1
        }
    },
    "Cecile L Parist": {
        "1993": {
            "J93": 1
        }
    },
    "Ferraro Van_Durme": {
        "2012": {
            "W12": 1
        }
    },
    "Elaine P Lusher": {
        "1993": {
            "W93": 1
        }
    },
    "K Jamison Iryna Gurevych Knowledge Processing Lab": {
        "2015": {
            "D15": 1
        }
    },
    "L Alfonso": {
        "2014": {
            "S14": 2
        },
        "2015": {
            "S15": 1
        }
    },
    "Jay Pittman": {
        "1997": {
            "A97": 1
        }
    },
    "Yichao Cai": {
        "2010": {
            "W10": 1
        }
    },
    "Stefan Schaden": {
        "2003": {
            "E03": 1
        }
    },
    "J Diane": {
        "1993": {
            "W93": 1
        },
        "2007": {
            "N07": 2
        }
    },
    "Mohit Gupta": {
        "2015": {
            "D15": 1,
            "K15": 1
        }
    },
    "Muyun Yang": {
        "2009": {
            "P09": 1,
            "W09": 1
        }
    },
    "James David": {
        "2014": {
            "W14": 1
        }
    },
    "Karin Stromswold": {
        "2012": {
            "W12": 1
        }
    },
    "Shashi Narayan": {
        "2012": {
            "P12": 1
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "P14": 1
        }
    },
    "Zhou GuoDong": {
        "2006": {
            "W06": 1,
            "P06": 1
        }
    },
    "Stefan Riezler": {
        "2000": {
            "P00": 1
        },
        "1999": {
            "P99": 1
        }
    },
    "Maayan Geffet": {
        "2005": {
            "P05": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "David J Weber": {
        "1981": {
            "J81": 1
        }
    },
    "Jianwen Junyu Jun": {
        "2013": {
            "P13": 1
        }
    },
    "Hiroshi": {
        "2000": {
            "W00": 1
        },
        "2008": {
            "W08": 1
        },
        "2013": {
            "D13": 1
        },
        "1997": {
            "W97": 1
        }
    },
    "Ji Chen": {
        "2009": {
            "N09": 1
        }
    },
    "William A Gale Kenneth W Church": {
        "1991": {
            "P91": 1
        }
    },
    "Yun Niu": {
        "2000": {
            "P00": 1
        }
    },
    "Kai Zhao": {
        "2013": {
            "D13": 1
        }
    },
    "Ralph Grishman": {
        "1979": {
            "P79": 1
        },
        "1988": {
            "A88": 2
        },
        "1998": {
            "P98": 1
        },
        "2003": {
            "P03": 1
        },
        "2005": {
            "P05": 2
        },
        "2006": {
            "W06": 2,
            "P06": 1
        },
        "2008": {
            "P08": 1
        },
        "2010": {
            "P10": 1,
            "W10": 1
        },
        "2011": {
            "P11": 3
        },
        "2012": {
            "E12": 1
        },
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Yingchao Shi": {
        "2010": {
            "W10": 1
        }
    },
    "Amy S Weinberg": {
        "1983": {
            "P83": 1
        }
    },
    "John David Osborne": {
        "2015": {
            "S15": 1
        }
    },
    "Rodolfo Delmonte": {
        "2006": {
            "W06": 1
        },
        "2014": {
            "E14": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Jing Jiang": {
        "2009": {
            "P09": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Ying Chen": {
        "2009": {
            "W09": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Xing Fukun Song Rou": {
        "2014": {
            "W14": 1
        }
    },
    "Martin Chodorowt": {
        "1998": {
            "J98": 1
        }
    },
    "David S Batista Bruno Martins M\u00b4ario J Silva": {
        "2015": {
            "D15": 1
        }
    },
    "Feng Pan": {
        "2006": {
            "W06": 1,
            "P06": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Yufang Michael": {
        "2012": {
            "P12": 1
        }
    },
    "Marie-Francine Moens": {
        "2011": {
            "P11": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Ruhi": {
        "2014": {
            "D14": 1
        }
    },
    "Peter Heeman": {
        "1994": {
            "P94": 1
        }
    },
    "Yoko MIZUTA": {
        "2004": {
            "W04": 1
        }
    },
    "David A Forsyth": {
        "2006": {
            "P06": 1
        }
    },
    "Perry R Cook": {
        "2010": {
            "W10": 1
        }
    },
    "Thomas C Chuang": {
        "2003": {
            "P03": 1
        }
    },
    "Claudio Rullent": {
        "1987": {
            "E87": 1
        }
    },
    "Ahmet Aker": {
        "2010": {
            "P10": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Suzi Lubar": {
        "2006": {
            "E06": 1
        }
    },
    "Shaojun Wang": {
        "2003": {
            "W03": 1
        }
    },
    "Hoa Trang Dang": {
        "2013": {
            "P13": 1
        },
        "2012": {
            "P12": 1,
            "W12": 1
        },
        "2005": {
            "P05": 1
        },
        "1998": {
            "P98": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Mark Steedmant": {
        "1987": {
            "P87": 1
        }
    },
    "Cecilia Ovesdotter": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "P11": 1
        },
        "2014": {
            "W14": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Chatterjee Sarkar": {
        "2010": {
            "W10": 1
        }
    },
    "Dirk Hilske-Kraus": {
        "2003": {
            "E03": 1
        }
    },
    "Blake Howald Schilder": {
        "2013": {
            "W13": 1
        }
    },
    "Pietro Torasso": {
        "1983": {
            "E83": 1
        }
    },
    "Anthony Fader Erkan": {
        "2006": {
            "P06": 1
        }
    },
    "Hieber Jehl": {
        "2013": {
            "P13": 1
        }
    },
    "Renata Vieira": {
        "1998": {
            "J98": 1
        }
    },
    "Francois": {
        "1998": {
            "W98": 1
        }
    },
    "Mahmoud Ghoneim": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Mary Dalrymple": {
        "1988": {
            "P88": 1
        }
    },
    "Junichi Tsujii": {
        "2009": {
            "N09": 1
        }
    },
    "Chun Chen": {
        "2007": {
            "P07": 1
        }
    },
    "Udupa K Saravanan A Kumaran Jagadeesh": {
        "2009": {
            "E09": 1
        }
    },
    "Casey Jonathan David Universit\u00b4e Bielefeld univ-paris-diderot fr": {
        "2015": {
            "W15": 1
        }
    },
    "Tushar": {
        "2009": {
            "W09": 1
        }
    },
    "Deyi Xiong": {
        "2008": {
            "P08": 1
        }
    },
    "Simone Filice": {
        "2015": {
            "P15": 1
        }
    },
    "Pablo Gamallo Alexandre Agustini Gabriel P Lopes": {
        "2002": {
            "W02": 1
        }
    },
    "Yuka Tateisi": {
        "2000": {
            "W00": 1
        }
    },
    "Scott Cotton": {
        "2001": {
            "S01": 1
        }
    },
    "J C Chris": {
        "2012": {
            "W12": 1
        }
    },
    "Yue": {
        "2015": {
            "P15": 1
        }
    },
    "Hansen A Schwartz": {
        "2009": {
            "W09": 1
        },
        "2010": {
            "S10": 1
        }
    },
    "Taro Eiichiro Tiejun": {
        "2013": {
            "P13": 1
        }
    },
    "Kamil Kos": {
        "2010": {
            "P10": 1
        }
    },
    "Zhifang Sui": {
        "2015": {
            "D15": 1
        }
    },
    "Anthony Stark": {
        "2012": {
            "N12": 1
        }
    },
    "Stephen D Richardson": {
        "1994": {
            "W94": 1
        },
        "1988": {
            "A88": 1
        }
    },
    "Bobrow Madeleine Bates": {
        "1982": {
            "P82": 1
        }
    },
    "Ville Turunen": {
        "2010": {
            "W10": 1
        }
    },
    "Andr\u00e9 Kempe": {
        "1999": {
            "W99": 1
        }
    },
    "Das A Smith": {
        "2009": {
            "P09": 1
        }
    },
    "Liang Zhou": {
        "2005": {
            "P05": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Robert": {
        "2002": {
            "W02": 1
        },
        "2004": {
            "N04": 1
        },
        "2013": {
            "S13": 1,
            "P13": 3
        },
        "2007": {
            "W07": 1
        }
    },
    "Giuseppe Danilo Roberto": {
        "2015": {
            "P15": 1
        }
    },
    "Faisal Mahbub Chowdhury t Alberto Lavelli": {
        "2010": {
            "W10": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Matt Ginzton": {
        "2001": {
            "W01": 1
        }
    },
    "Hua": {
        "2007": {
            "N07": 1
        }
    },
    "Andrew S Gordon": {
        "2010": {
            "W10": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "The": {
        "2012": {
            "N12": 1,
            "P12": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Dong-Won": {
        "2008": {
            "W08": 1
        }
    },
    "Sudha Bhingardive Samiulla Shaikh Pushpak": {
        "2013": {
            "P13": 1
        }
    },
    "Rachel Reichman": {
        "1981": {
            "P81": 1
        }
    },
    "Takuya": {
        "2014": {
            "E14": 1
        }
    },
    "Wei Ni": {
        "2009": {
            "W09": 1
        }
    },
    "Helmut Horacek": {
        "2003": {
            "E03": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "Daniele Pighin": {
        "2008": {
            "P08": 1
        },
        "2012": {
            "W12": 1
        },
        "2006": {
            "W06": 1
        },
        "2014": {
            "P14": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Guy": {
        "2002": {
            "J02": 1
        }
    },
    "Human Language Technology": {
        "2011": {
            "P11": 1
        },
        "2013": {
            "D13": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Ver\u00b4onica Romero": {
        "2011": {
            "W11": 1
        }
    },
    "James Allen": {
        "1994": {
            "P94": 1
        },
        "2011": {
            "P11": 1
        },
        "2005": {
            "W05": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Yuji MATSUMOTO": {
        "2003": {
            "P03": 1
        }
    },
    "Yang Gao": {
        "2011": {
            "D11": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Whitney Gegg-Harrison": {
        "2005": {
            "W05": 1
        }
    },
    "David Hall": {
        "2011": {
            "D11": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "P14": 2
        }
    },
    "Bj\u00a8orn Gamb\u00a8ack Sergio Jimenez": {
        "2014": {
            "S14": 1
        }
    },
    "Rados\u0142aw Moszczyiiski": {
        "2007": {
            "P07": 1
        }
    },
    "Gregor Pascal Wolfgang": {
        "2015": {
            "W15": 1
        }
    },
    "Kathleen": {
        "1998": {
            "W98": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Ming Xiaolong Limin Jingjing": {
        "2013": {
            "P13": 1
        }
    },
    "Alistair": {
        "2015": {
            "W15": 1
        }
    },
    "Dredze": {
        "2008": {
            "D08": 1
        }
    },
    "U D B B S H M": {
        "2011": {
            "P11": 1
        }
    },
    "Ielka van_der_Sluis": {
        "2008": {
            "W08": 1
        }
    },
    "Daniel Janus": {
        "2007": {
            "P07": 1
        }
    },
    "Durrett": {
        "2011": {
            "P11": 1
        },
        "2014": {
            "Q14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Alistair Kennedy": {
        "2008": {
            "P08": 1
        }
    },
    "Ian Lane": {
        "2007": {
            "P07": 1
        }
    },
    "Anna Jessica L Moszkowicz": {
        "2009": {
            "W09": 1
        }
    },
    "Yosuke Nakata": {
        "2011": {
            "P11": 1
        }
    },
    "Daniel Radzinski": {
        "1991": {
            "J91": 1
        }
    },
    "Mohammad": {
        "2014": {
            "S14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Stefano Vegnaduzzo": {
        "2009": {
            "W09": 1
        }
    },
    "Ahmed A Mohamed": {
        "2004": {
            "W04": 1
        }
    },
    "Steven L Messick": {
        "1985": {
            "P85": 1
        }
    },
    "Peter Edwards": {
        "2008": {
            "W08": 1
        }
    },
    "Ruifeng Xu": {
        "2004": {
            "W04": 1
        }
    },
    "Hirosato NOMURA": {
        "1984": {
            "P84": 1
        }
    },
    "Chooi-Ling GOH": {
        "2004": {
            "W04": 1
        }
    },
    "James F Allen": {
        "1996": {
            "P96": 1
        },
        "1980": {
            "J80": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "1982": {
            "P82": 1
        },
        "1981": {
            "P81": 1
        }
    },
    "Amanda Emmanuel Alejandrina": {
        "2015": {
            "W15": 1
        }
    },
    "T J Watson Research Center": {
        "2011": {
            "P11": 1
        }
    },
    "Ben Gurion": {
        "2008": {
            "P08": 1
        },
        "2011": {
            "P11": 1
        },
        "2006": {
            "N06": 2
        }
    },
    "Sriram": {
        "2009": {
            "N09": 1
        }
    },
    "Piroska Lendvai": {
        "2009": {
            "W09": 1
        }
    },
    "Samuel Brody": {
        "2009": {
            "E09": 1
        },
        "2010": {
            "N10": 1
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Youzheng Wu Jun Zhao Bo Xu": {
        "2006": {
            "W06": 1
        }
    },
    "Carreras M`arquez": {
        "2003": {
            "W03": 1
        }
    },
    "Knut Hartmann Jochen Schoppt": {
        "1997": {
            "W97": 1
        }
    },
    "Vivian De_la Cruz Marco Mazzone": {
        "2007": {
            "W07": 1
        }
    },
    "Matthew R Gormley": {
        "2012": {
            "N12": 1
        }
    },
    "Frank Keller": {
        "2010": {
            "P10": 2,
            "W10": 1
        },
        "2003": {
            "P03": 1
        },
        "2013": {
            "D13": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "Robert Abbott": {
        "2012": {
            "N12": 1
        }
    },
    "Shengfen Luo": {
        "2003": {
            "W03": 1
        }
    },
    "Irena Sophia ANANIADOU": {
        "2002": {
            "W02": 1
        }
    },
    "Jennifer Stromer-Galley": {
        "2011": {
            "P11": 1
        }
    },
    "Gabor": {
        "2010": {
            "D10": 1
        }
    },
    "Fuliang Weng": {
        "2008": {
            "P08": 1,
            "W08": 1
        },
        "2005": {
            "W05": 1
        }
    },
    "Can": {
        "2009": {
            "N09": 1
        }
    },
    "Mireia Ginest\u2019 Rosell Kurt Eberle": {
        "2014": {
            "W14": 1
        }
    },
    "Ke Ferhan Philip Jimmy": {
        "2013": {
            "P13": 1,
            "W13": 1
        }
    },
    "Kallirroi": {
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Vincent Ng": {
        "2010": {
            "P10": 1
        },
        "2013": {
            "W13": 1
        },
        "2004": {
            "P04": 1
        },
        "2005": {
            "P05": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Mariona Taule Lluis Marquez": {
        "2009": {
            "W09": 1
        }
    },
    "Richard Schwartz": {
        "2009": {
            "W09": 1
        },
        "1994": {
            "P94": 1
        },
        "1996": {
            "P96": 1
        },
        "1997": {
            "A97": 1
        }
    },
    "Mao-Zhu Yang": {
        "2006": {
            "P06": 1
        }
    },
    "Wesam Elshamy": {
        "2010": {
            "S10": 1
        }
    },
    "Koichi Takeda": {
        "1994": {
            "P94": 1
        },
        "1996": {
            "P96": 1
        }
    },
    "Wendy": {
        "2010": {
            "W10": 1
        }
    },
    "E Fitzpatrick": {
        "1990": {
            "J90": 1
        }
    },
    "Toni Marti": {
        "2009": {
            "W09": 1
        }
    },
    "Dekai": {
        "1995": {
            "W95": 1
        }
    },
    "Eric Ringger": {
        "2008": {
            "P08": 1
        },
        "2002": {
            "W02": 1
        },
        "2003": {
            "E03": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Yonghong": {
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1,
            "S15": 1
        }
    },
    "Gary Tajchman": {
        "1995": {
            "P95": 1
        }
    },
    "was sonl exi s-nexi s": {
        "1998": {
            "P98": 1
        }
    },
    "D- Saarbriicken": {
        "2003": {
            "E03": 1
        }
    },
    "Weiqun Xu": {
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1,
            "S15": 1
        }
    },
    "Soenke Ziesche": {
        "1996": {
            "W96": 1
        }
    },
    "Push Singh": {
        "2004": {
            "W04": 1
        }
    },
    "Beer Sheva": {
        "2006": {
            "N06": 2
        }
    },
    "John Carey": {
        "1980": {
            "P80": 1
        }
    },
    "Sun-Mee BAE": {
        "2004": {
            "W04": 1
        }
    },
    "Li Zhou": {
        "2010": {
            "P10": 1
        }
    },
    "Stefan Thater": {
        "2001": {
            "P01": 1
        },
        "2003": {
            "E03": 1
        },
        "2012": {
            "N12": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Alexander Clark": {
        "2004": {
            "W04": 1
        },
        "2013": {
            "W13": 1
        },
        "2006": {
            "W06": 1
        }
    },
    "Ariel Cohen": {
        "2006": {
            "W06": 1
        }
    },
    "Gong": {
        "2015": {
            "W15": 1
        }
    },
    "Yusuke Oda": {
        "2014": {
            "P14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "Yaqin Yang": {
        "2011": {
            "W11": 1
        },
        "2013": {
            "N13": 1
        }
    },
    "John DeNero Pauls": {
        "2009": {
            "D09": 1
        }
    },
    "Ronan Collobert": {
        "2014": {
            "E14": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "M Tom": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Tamara Sumner": {
        "2008": {
            "P08": 1
        }
    },
    "Andrei Mikheev": {
        "2000": {
            "A00": 1
        },
        "1995": {
            "E95": 1
        },
        "1997": {
            "J97": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Wayne Xin Haitian Hongfei": {
        "2013": {
            "D13": 1
        }
    },
    "George Busby": {
        "2007": {
            "W07": 1
        }
    },
    "Ian P Davy": {
        "2008": {
            "W08": 1
        },
        "2006": {
            "E06": 1
        }
    },
    "Sandeep Sripada": {
        "2010": {
            "W10": 1
        }
    },
    "Susan McRoy": {
        "2008": {
            "W08": 1
        },
        "1993": {
            "E93": 1
        }
    },
    "Takaaki Hori": {
        "2003": {
            "P03": 1
        }
    },
    "Lilja \u00d8vrelid": {
        "2009": {
            "P09": 1,
            "E09": 1
        },
        "2012": {
            "S12": 1
        },
        "2013": {
            "P13": 1
        },
        "2006": {
            "E06": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Helena de_Medeiros Caseli Bruno Akio Sugiyama Junia Coutinho Anacleto": {
        "2010": {
            "W10": 1
        }
    },
    "Miriah": {
        "2015": {
            "W15": 1
        }
    },
    "Justin Washtell": {
        "2009": {
            "E09": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Daniel Hardt": {
        "1992": {
            "P92": 2
        },
        "1997": {
            "J97": 1
        }
    },
    "Miriam": {
        "2013": {
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Hany Hassan": {
        "2003": {
            "P03": 1
        },
        "2005": {
            "W05": 2
        },
        "2006": {
            "W06": 2
        },
        "2007": {
            "P07": 1
        }
    },
    "Shen Hu": {
        "2010": {
            "N10": 1
        }
    },
    "Bonnie J Dorr": {
        "2008": {
            "W08": 1
        },
        "1997": {
            "A97": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Yuan-Fu Liao": {
        "2014": {
            "W14": 1
        }
    },
    "Judy Delin": {
        "1993": {
            "W93": 1
        }
    },
    "Ke": {
        "2014": {
            "Q14": 1
        }
    },
    "Bryan Rink Sanda": {
        "2013": {
            "W13": 1
        }
    },
    "Naftali Tishby": {
        "1993": {
            "P93": 1
        }
    },
    "Akiko": {
        "2014": {
            "W14": 1
        }
    },
    "Freddy Y Y Choi": {
        "2000": {
            "A00": 1
        }
    },
    "Claire Cardie": {
        "1992": {
            "P92": 1
        },
        "2009": {
            "P09": 1
        },
        "2010": {
            "P10": 2
        },
        "2014": {
            "S14": 1
        },
        "1999": {
            "W99": 1
        }
    },
    "Kirschner": {
        "2010": {
            "W10": 1
        }
    },
    "Alicia AbeIla": {
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "Desislava Zhekova": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Behrang Mohit": {
        "2005": {
            "P05": 1
        },
        "2014": {
            "D14": 1
        }
    },
    "Maria G V Nunes Mikel L Forcada": {
        "2005": {
            "W05": 1
        }
    },
    "Jisheng Liang": {
        "2006": {
            "W06": 1
        }
    },
    "Yukino Baba": {
        "2012": {
            "P12": 1
        }
    },
    "Piek Vossen": {
        "2011": {
            "W11": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1,
            "S15": 1
        }
    },
    "Peter": {
        "2010": {
            "W10": 1
        }
    },
    "of Electronics": {
        "2000": {
            "W00": 1
        }
    },
    "Diego": {
        "2006": {
            "W06": 1
        }
    },
    "Richmond H Thomason": {
        "1998": {
            "P98": 1
        },
        "1991": {
            "W91": 1
        }
    },
    "Emiel Krahmer": {
        "2008": {
            "P08": 1
        },
        "2009": {
            "W09": 1
        },
        "2010": {
            "P10": 1
        },
        "2011": {
            "P11": 1,
            "W11": 1
        }
    },
    "Xiao-Li Li": {
        "2015": {
            "D15": 1
        }
    },
    "Kathleen McKeownf": {
        "1997": {
            "J97": 1
        }
    },
    "Anton": {
        "2015": {
            "W15": 1
        }
    },
    "Xavier Xavier Lluis": {
        "2014": {
            "D14": 1
        }
    },
    "Steven Gillist": {
        "1994": {
            "J94": 1
        }
    },
    "Koiti Hasida": {
        "1998": {
            "P98": 1
        }
    },
    "David Nagel": {
        "2013": {
            "W13": 1
        }
    },
    "K Kummerfeld": {
        "2011": {
            "W11": 1
        },
        "2013": {
            "D13": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Claudia Freitas": {
        "2015": {
            "W15": 1
        }
    },
    "Nadi": {
        "2014": {
            "P14": 1
        }
    },
    "Donghyeon Lee": {
        "2013": {
            "W13": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Chiang DeNeefe": {
        "2011": {
            "P11": 1
        }
    },
    "Edward Lin": {
        "2013": {
            "D13": 1
        }
    },
    "Vikas": {
        "2009": {
            "W09": 1
        }
    },
    "Sch\u00a8utze": {
        "2014": {
            "P14": 1
        }
    },
    "Akriti Naveen": {
        "2014": {
            "S14": 1
        }
    },
    "Yih-Ru Wang": {
        "2012": {
            "W12": 1
        },
        "2014": {
            "W14": 1
        }
    },
    "Ying Cheng": {
        "1992": {
            "A92": 1
        }
    },
    "Walde": {
        "2002": {
            "P02": 1
        },
        "2003": {
            "E03": 1
        },
        "2013": {
            "D13": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Susan W McRoy": {
        "1992": {
            "J92": 1
        },
        "2000": {
            "W00": 1
        },
        "1995": {
            "J95": 1
        }
    },
    "Weifu Du": {
        "2009": {
            "N09": 1
        }
    },
    "Sheng Li": {
        "2009": {
            "P09": 2,
            "W09": 1
        },
        "2004": {
            "W04": 1
        },
        "2006": {
            "P06": 1
        }
    },
    "Ebru Ar\u0131soy": {
        "2012": {
            "W12": 1
        }
    },
    "Christopher S G Khoo": {
        "2000": {
            "P00": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Jaeger A": {
        "2010": {
            "W10": 1
        }
    },
    "Kyle El-": {
        "2013": {
            "W13": 1
        }
    },
    "New York City": {
        "2009": {
            "P09": 2
        }
    },
    "Wilson McCoy": {
        "2012": {
            "W12": 2
        }
    },
    "Brian Murphy": {
        "2013": {
            "W13": 1
        }
    },
    "Nancy Ide": {
        "2001": {
            "P01": 1
        },
        "2010": {
            "P10": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Samir AbdelRahman": {
        "2012": {
            "S12": 1
        }
    },
    "Helen Hastie": {
        "2009": {
            "W09": 1
        },
        "2012": {
            "D12": 1
        },
        "2013": {
            "W13": 1
        },
        "2014": {
            "W14": 1,
            "P14": 1,
            "E14": 2
        },
        "2007": {
            "W07": 1
        }
    },
    "Rodrigo Agerri": {
        "2007": {
            "P07": 1
        }
    },
    "Sasha Blair-Goldensohn": {
        "2009": {
            "E09": 1
        }
    },
    "Scott McDonald": {
        "2001": {
            "P01": 1
        },
        "2004": {
            "P04": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Long Chen": {
        "2015": {
            "P15": 1
        }
    },
    "Gemma": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "James Henderson": {
        "1991": {
            "P91": 1
        },
        "2005": {
            "P05": 1
        },
        "2007": {
            "P07": 1
        },
        "2009": {
            "N09": 1
        },
        "2011": {
            "P11": 1
        },
        "2014": {
            "E14": 1
        },
        "2015": {
            "D15": 2,
            "K15": 1
        }
    },
    "Irene Langkilde": {
        "2000": {
            "A00": 2
        }
    },
    "Yuan Cao": {
        "2014": {
            "P14": 1
        }
    },
    "Ed Binkowski": {
        "2004": {
            "N04": 1
        }
    },
    "Enright": {
        "2007": {
            "N07": 1
        }
    },
    "Croce": {
        "2010": {
            "W10": 1
        }
    },
    "Salim Roukos": {
        "2010": {
            "D10": 1
        },
        "2003": {
            "P03": 1
        },
        "2002": {
            "P02": 1
        }
    },
    "DeVault Traum": {
        "2013": {
            "N13": 1
        }
    },
    "Louise Guthrie": {
        "1991": {
            "P91": 1
        }
    },
    "Kuiyu Qinbao Jung-jae": {
        "2010": {
            "W10": 1
        }
    },
    "Josiah Ying Emmanuel Robert": {
        "2015": {
            "D15": 1
        }
    },
    "Manfred Pinkal": {
        "2010": {
            "P10": 1
        },
        "2003": {
            "P03": 1
        },
        "2013": {
            "S13": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "2015": {
            "D15": 1,
            "W15": 1
        }
    },
    "Toyoaki Nishida": {
        "1984": {
            "P84": 1
        }
    },
    "Xian Qian": {
        "2010": {
            "D10": 1
        },
        "2012": {
            "P12": 1,
            "D12": 1
        }
    },
    "Joel Chan": {
        "2013": {
            "N13": 1
        }
    },
    "Yihao Zhang": {
        "2010": {
            "W10": 1
        }
    },
    "Pierre Nugues": {
        "2007": {
            "S07": 1
        },
        "2006": {
            "E06": 1,
            "P06": 1
        },
        "2015": {
            "K15": 1
        }
    },
    "Grzegorz": {
        "2001": {
            "N01": 1
        },
        "2009": {
            "N09": 1,
            "W09": 1
        },
        "2010": {
            "N10": 1,
            "D10": 1,
            "W10": 1
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "W12": 1
        },
        "2013": {
            "N13": 1,
            "W13": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Mauro": {
        "2006": {
            "W06": 1
        }
    },
    "Syed Aqueel Haider Rishabh Mehrotra": {
        "2011": {
            "W11": 1
        }
    },
    "Jimmy Douglas W": {
        "2008": {
            "P08": 1
        }
    },
    "Rob van_der_Goot": {
        "2014": {
            "S14": 1
        }
    },
    "Geoffrey Towell Ellen M Voorheest": {
        "1998": {
            "J98": 1
        }
    },
    "Johanna D Mooret": {
        "1996": {
            "J96": 1
        },
        "1997": {
            "J97": 1,
            "E97": 1,
            "P97": 1
        },
        "1998": {
            "J98": 1
        }
    },
    "Shaul Marcus": {
        "1993": {
            "P93": 1
        }
    },
    "NSW Sydney": {
        "2014": {
            "D14": 1,
            "W14": 1
        }
    },
    "Norbert Broker": {
        "2000": {
            "A00": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "Hao Liu": {
        "2007": {
            "N07": 1
        }
    },
    "Gebhardt": {
        "2015": {
            "W15": 1
        }
    },
    "Masato Ishizaki": {
        "1998": {
            "P98": 1
        },
        "1991": {
            "W91": 1
        }
    },
    "L Richard": {
        "2014": {
            "W14": 1
        }
    },
    "Genevieve Berry-Rogghe": {
        "1985": {
            "E85": 1
        }
    },
    "Dongdong Zhang": {
        "2008": {
            "W08": 1
        }
    },
    "Aron": {
        "2004": {
            "N04": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Pedro Balage Filho": {
        "2012": {
            "N12": 1
        }
    },
    "Andrew Tran Chris Bowes David Brown Ping Chen": {
        "2010": {
            "S10": 1
        }
    },
    "Hayato Kobayashi Masaki Noguchi Taichi Yatsuka": {
        "2015": {
            "D15": 1
        }
    },
    "Starling David Hunter": {
        "2014": {
            "W14": 1
        }
    },
    "Manuel Palomar Peral": {
        "1999": {
            "W99": 1
        }
    },
    "Xingkun Liu": {
        "2009": {
            "W09": 1
        },
        "2012": {
            "E12": 1
        }
    },
    "Ai Kawazoe": {
        "2007": {
            "W07": 1
        }
    },
    "Paola Merlo": {
        "1995": {
            "J95": 1
        },
        "1998": {
            "W98": 1
        },
        "1999": {
            "E99": 1
        },
        "2008": {
            "P08": 1
        },
        "2009": {
            "N09": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Jagadeesh Jagarlamudi": {
        "2010": {
            "W10": 2
        },
        "2011": {
            "P11": 1
        },
        "2012": {
            "D12": 1
        }
    },
    "Sankar Mukherjee": {
        "2012": {
            "W12": 1
        }
    },
    "Douwe Kiela": {
        "2013": {
            "D13": 1
        },
        "2015": {
            "D15": 2,
            "P15": 1
        }
    },
    "Edward Benson Chen": {
        "2011": {
            "P11": 1
        }
    },
    "Didier Schwab": {
        "2010": {
            "W10": 1
        }
    },
    "Timothy": {
        "2003": {
            "W03": 1
        },
        "2004": {
            "W04": 1
        },
        "2006": {
            "W06": 2
        },
        "2007": {
            "W07": 1
        },
        "2012": {
            "S12": 1
        },
        "2013": {
            "W13": 2
        }
    },
    "Rohit Kumar": {
        "2010": {
            "N10": 1
        },
        "2007": {
            "N07": 1
        }
    },
    "Gerold Schneider": {
        "2011": {
            "W11": 1
        },
        "2004": {
            "W04": 1
        }
    },
    "Baotian Hu": {
        "2015": {
            "D15": 1,
            "P15": 1,
            "S15": 1
        }
    },
    "Lili": {
        "2013": {
            "W13": 1
        }
    },
    "David McGEE": {
        "2000": {
            "A00": 1
        }
    },
    "Ali Farghaly": {
        "2004": {
            "W04": 1
        }
    },
    "Ankur P Parikh": {
        "2014": {
            "P14": 1
        }
    },
    "Jun": {
        "2010": {
            "S10": 1,
            "W10": 1
        },
        "2013": {
            "P13": 2
        }
    },
    "Popovi\u00b4c Mihael": {
        "2015": {
            "W15": 1
        }
    },
    "Katsuhito Sudoh": {
        "2010": {
            "D10": 1,
            "W10": 2
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "P13": 1,
            "D13": 1
        },
        "2006": {
            "P06": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Svetlana Kiritchenko": {
        "2013": {
            "S13": 1
        }
    },
    "Deng Gao": {
        "2007": {
            "P07": 1
        }
    },
    "Titus von_der_Malsburg": {
        "2009": {
            "W09": 1
        }
    },
    "Margolis": {
        "2011": {
            "P11": 1
        }
    },
    "Sandra": {
        "2010": {
            "N10": 1,
            "W10": 1
        },
        "2011": {
            "W11": 1
        },
        "2014": {
            "S14": 1
        }
    },
    "Spandana Gella": {
        "2012": {
            "S12": 1
        }
    },
    "Raymond Hendy Susanto Peter Phandi Hwee Tou Ng": {
        "2014": {
            "D14": 1
        }
    },
    "Yuki Murakami": {
        "2015": {
            "W15": 1
        }
    },
    "Karl Stratos": {
        "2015": {
            "W15": 1
        }
    },
    "Masakazu Iwatate": {
        "2011": {
            "W11": 1
        }
    },
    "Bingquan": {
        "2014": {
            "P14": 1
        }
    },
    "Brendan Naomi David": {
        "2013": {
            "W13": 1
        }
    },
    "Robert Lofthus": {
        "2012": {
            "W12": 1
        }
    },
    "Alfio Gliozzo": {
        "2004": {
            "W04": 1
        },
        "2005": {
            "P05": 1
        },
        "2007": {
            "S07": 1
        }
    },
    "Zhaohui": {
        "2009": {
            "D09": 1
        }
    },
    "Aitor Arronte": {
        "2015": {
            "W15": 1
        }
    },
    "Laura Chiticariu Rajasekar Krishnamurthy Yunyao Li Frederick Reiss Shivakumar": {
        "2010": {
            "D10": 1
        }
    },
    "Qian": {
        "2013": {
            "Q13": 1,
            "D13": 1
        },
        "2014": {
            "Q14": 1,
            "P14": 1
        },
        "2015": {
            "P15": 1
        }
    },
    "David M Carter": {
        "1992": {
            "P92": 1,
            "A92": 1
        }
    },
    "Ying": {
        "2006": {
            "W06": 1
        }
    },
    "ZhiqiangWang RuiboWang": {
        "2013": {
            "S13": 1
        }
    },
    "J\u00f6rg": {
        "2015": {
            "W15": 1
        }
    },
    "Naoki Yoshinaga": {
        "2004": {
            "P04": 1
        }
    },
    "Simonetta Montemagni": {
        "2005": {
            "W05": 1
        },
        "1999": {
            "W99": 1
        }
    },
    "Paul Dixon": {
        "2010": {
            "P10": 1
        }
    },
    "Lewis M Norton": {
        "1997": {
            "A97": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Peng Yu": {
        "2006": {
            "N06": 1
        }
    },
    "Roberto Navigli": {
        "2010": {
            "P10": 1
        },
        "2007": {
            "S07": 1
        },
        "2006": {
            "P06": 3
        },
        "2015": {
            "D15": 1
        }
    },
    "Elizabeth Shribergt": {
        "1992": {
            "P92": 1
        },
        "2001": {
            "J01": 1
        },
        "1998": {
            "W98": 1
        }
    },
    "Ren\u00b4e Witte": {
        "2010": {
            "W10": 1
        }
    },
    "Oya": {
        "2014": {
            "W14": 1
        }
    },
    "Eiichiro Shinsuke Tatsuya": {
        "2011": {
            "P11": 1
        }
    },
    "Bing Xiang": {
        "2010": {
            "P10": 1
        }
    },
    "Randy Christoph": {
        "2010": {
            "W10": 1
        }
    },
    "Colleen Richey": {
        "2004": {
            "N04": 1
        }
    },
    "Teresa Herrmann": {
        "2012": {
            "W12": 1
        }
    },
    "Manuel": {
        "2011": {
            "P11": 1
        },
        "2012": {
            "W12": 1
        }
    },
    "Tamara G Rezende Macieira": {
        "2014": {
            "W14": 1
        }
    },
    "Chee Wee Leong": {
        "2011": {
            "W11": 1
        },
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Kai-Chun Chang": {
        "2013": {
            "P13": 1
        }
    },
    "MS Jagannathan": {
        "2006": {
            "W06": 1
        }
    },
    "Hiroyuki Ishimoto Takehito Utsuro": {
        "1993": {
            "P93": 1
        }
    },
    "Preiss": {
        "2013": {
            "N13": 1
        }
    },
    "Rita Marinelli": {
        "2007": {
            "P07": 1
        }
    },
    "Nivre\u2020 Rajeev": {
        "2010": {
            "W10": 1
        }
    },
    "Kawahara Uchimoto": {
        "2007": {
            "P07": 1
        }
    },
    "Lance A Ramshaw": {
        "1989": {
            "E89": 1
        }
    },
    "Nicholas Philippe Pascal Stergos": {
        "2013": {
            "W13": 1
        }
    },
    "Khe Chai": {
        "2012": {
            "P12": 1
        }
    },
    "Mike Dillinger Mark Seligman": {
        "2006": {
            "W06": 1
        }
    },
    "Thomas Aur\u00b4elie": {
        "2014": {
            "W14": 1
        }
    },
    "Yanyan Lan": {
        "2015": {
            "P15": 1
        }
    },
    "Hideki Isozaki": {
        "2001": {
            "P01": 1
        },
        "2004": {
            "P04": 1
        },
        "2005": {
            "P05": 1
        },
        "2006": {
            "P06": 2
        },
        "2008": {
            "P08": 1
        },
        "2010": {
            "D10": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "Mohit Bansal": {
        "2011": {
            "W11": 1
        },
        "2014": {
            "P14": 2
        }
    },
    "Chau Q Nguyen": {
        "2009": {
            "P09": 1
        }
    },
    "Alex Waibel": {
        "1993": {
            "W93": 1
        },
        "2003": {
            "P03": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "2014": {
            "E14": 1
        }
    },
    "Benjamin M Marlin": {
        "2013": {
            "N13": 1
        }
    },
    "Richard Fothergill": {
        "2012": {
            "S12": 1
        }
    },
    "Giorgio Satta": {
        "1992": {
            "P92": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "1998": {
            "P98": 1
        },
        "2004": {
            "P04": 2
        },
        "2006": {
            "P06": 1
        },
        "2007": {
            "P07": 1
        },
        "2009": {
            "P09": 1,
            "W09": 1,
            "E09": 1
        },
        "2010": {
            "P10": 1
        },
        "2013": {
            "Q13": 1
        }
    },
    "Vahed Qazvinian": {
        "2010": {
            "P10": 1,
            "D10": 1
        }
    },
    "Ning Wang": {
        "2010": {
            "W10": 1
        }
    },
    "Fan": {
        "2015": {
            "P15": 1
        }
    },
    "Ben Hixon": {
        "2013": {
            "N13": 1
        }
    },
    "Ana\u00a8\u0131s Cadilhac": {
        "2012": {
            "S12": 1
        }
    },
    "Christian JACQUEMIN": {
        "1994": {
            "P94": 1
        }
    },
    "Saito Imamura": {
        "2009": {
            "W09": 1
        }
    },
    "James McCracken": {
        "2003": {
            "E03": 1
        }
    },
    "Noemie": {
        "2014": {
            "W14": 1
        }
    },
    "Kaji Kitsuregawa": {
        "2006": {
            "P06": 1
        }
    },
    "B Smith": {
        "2009": {
            "W09": 1
        }
    },
    "Morbini Forbell": {
        "2014": {
            "W14": 1
        }
    },
    "Q Zadeh": {
        "2014": {
            "W14": 1
        }
    },
    "Annette Hautli Miriam Butt": {
        "2011": {
            "W11": 1
        }
    },
    "Kevin Duh Yuji": {
        "2013": {
            "W13": 1
        }
    },
    "David Carter": {
        "1994": {
            "A94": 1
        },
        "1987": {
            "E87": 1
        },
        "1995": {
            "E95": 1
        },
        "1991": {
            "P91": 1
        }
    },
    "Marjorie Freedman": {
        "2010": {
            "W10": 1
        }
    },
    "Lisa Harper": {
        "2003": {
            "W03": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Ting Qian": {
        "2010": {
            "W10": 1
        }
    },
    "Fan Zhang": {
        "2014": {
            "W14": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Johanna Wenderoth": {
        "2007": {
            "P07": 1
        }
    },
    "Aikaterini Karanasiou": {
        "2015": {
            "S15": 1
        }
    },
    "Delphine Battistelli Marine Damiani": {
        "2013": {
            "W13": 1
        }
    },
    "Jean Carletta": {
        "2003": {
            "E03": 1
        },
        "1996": {
            "J96": 1
        }
    },
    "Sokolov Guillaume Wisniewski Yvon": {
        "2012": {
            "E12": 1
        }
    },
    "Sun": {
        "2013": {
            "Q13": 1
        }
    },
    "Cyril Michael Jeffrey": {
        "2012": {
            "P12": 1
        }
    },
    "David Schlangen Alex": {
        "2003": {
            "W03": 1
        }
    },
    "Guilong WeijianXie": {
        "2015": {
            "W15": 1
        }
    },
    "Juan Zhiqiang Qinghua": {
        "2015": {
            "P15": 1
        }
    },
    "Anand Venkataraman": {
        "2001": {
            "J01": 1
        }
    },
    "Jonathan": {
        "2012": {
            "S12": 1
        },
        "2010": {
            "W10": 1
        },
        "2011": {
            "D11": 1
        },
        "2004": {
            "N04": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Corley": {
        "2005": {
            "W05": 1
        }
    },
    "Peifeng Li": {
        "2012": {
            "D12": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Muzny": {
        "2013": {
            "D13": 1
        }
    },
    "Elena Kepa J Rodriguez' Stina Ericsson'": {
        "2003": {
            "E03": 1
        }
    },
    "Rachel Cotterill": {
        "2011": {
            "W11": 1
        }
    },
    "Allison Terrell": {
        "2012": {
            "W12": 1
        }
    },
    "Fabien": {
        "2014": {
            "D14": 1
        }
    },
    "Damien": {
        "2015": {
            "W15": 1
        }
    },
    "William Hartmann": {
        "2010": {
            "N10": 1
        }
    },
    "Greg Hanneman": {
        "2009": {
            "W09": 1
        }
    },
    "Joachim Diederich": {
        "1998": {
            "W98": 1
        }
    },
    "Key-Sun": {
        "2004": {
            "W04": 1
        },
        "1997": {
            "W97": 1
        }
    },
    "T John": {
        "2009": {
            "W09": 1
        }
    },
    "Kepa Sarasola": {
        "1998": {
            "P98": 1
        }
    },
    "Timm Lichte": {
        "2006": {
            "W06": 1
        }
    },
    "Chris Pike": {
        "2004": {
            "P04": 1
        }
    },
    "Patrik": {
        "2006": {
            "W06": 1
        }
    },
    "F Casacuberta R Silva": {
        "2009": {
            "N09": 1
        }
    },
    "Tiejun": {
        "2009": {
            "W09": 1
        }
    },
    "Robert Bobrow": {
        "1994": {
            "A94": 1,
            "P94": 1
        },
        "1996": {
            "P96": 1
        }
    },
    "Kreutzer": {
        "2015": {
            "W15": 1
        }
    },
    "Reinhard Schaler": {
        "1994": {
            "A94": 1
        }
    },
    "Elia Bruni": {
        "2011": {
            "W11": 1
        },
        "2012": {
            "P12": 1
        },
        "2013": {
            "D13": 1
        }
    },
    "Jun Xie": {
        "2011": {
            "D11": 1
        }
    },
    "Kulkarni Pedersen": {
        "2005": {
            "P05": 1
        }
    },
    "Choudhury Kalika Bali R V College of Engineering": {
        "2013": {
            "W13": 1
        }
    },
    "Yafeng Ren": {
        "2014": {
            "D14": 1
        }
    },
    "Tiejun Andrew Chunyue": {
        "2013": {
            "P13": 1
        }
    },
    "Agustin Laura Julia Ani": {
        "2012": {
            "N12": 1
        }
    },
    "Pascale Fung": {
        "2004": {
            "W04": 1
        },
        "1997": {
            "W97": 1
        }
    },
    "van": {
        "2010": {
            "W10": 1
        },
        "2012": {
            "P12": 1
        },
        "2005": {
            "J05": 1
        },
        "2006": {
            "J06": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Isabel Rojas Peer Bork": {
        "2004": {
            "P04": 1
        }
    },
    "Trevor Cohn Rahimi": {
        "2015": {
            "P15": 1
        }
    },
    "Sebastian Schuster": {
        "2015": {
            "W15": 1
        }
    },
    "Marco Kuhlmann": {
        "2009": {
            "E09": 2
        },
        "2011": {
            "W11": 1
        },
        "2013": {
            "Q13": 1
        },
        "2007": {
            "P07": 1
        }
    },
    "Amy": {
        "2011": {
            "W11": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "Chengxiang Zhai": {
        "1996": {
            "P96": 1
        },
        "1997": {
            "A97": 1
        }
    },
    "Amr": {
        "2010": {
            "D10": 1
        }
    },
    "Joachim Niehren": {
        "2003": {
            "E03": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        },
        "1998": {
            "P98": 1
        }
    },
    "Tommaso Massimo Poesio": {
        "2012": {
            "W12": 1
        }
    },
    "Eleni Gregoromichelaki": {
        "2009": {
            "W09": 1
        }
    },
    "Fatema Vidhoon Yinon Bentor Raymond J": {
        "2015": {
            "P15": 1
        }
    },
    "Wacholder Smaranda Ghosh Mark": {
        "2014": {
            "W14": 1
        }
    },
    "Stephen Clark": {
        "2004": {
            "P04": 1
        },
        "2007": {
            "P07": 1
        },
        "2011": {
            "P11": 1,
            "D11": 1
        },
        "2013": {
            "W13": 1,
            "D13": 1
        },
        "2014": {
            "Q14": 1,
            "W14": 1
        },
        "2015": {
            "D15": 1
        }
    },
    "Kenji": {
        "2000": {
            "W00": 1
        }
    },
    "Science": {
        "2011": {
            "P11": 1,
            "W11": 1
        },
        "2015": {
            "W15": 1
        }
    },
    "Chu-Carroll Carpenter": {
        "1998": {
            "P98": 1
        }
    },
    "Anthony Fader": {
        "2010": {
            "P10": 1
        },
        "2013": {
            "P13": 1
        }
    },
    "Elias Iosif": {
        "2012": {
            "S12": 1
        }
    },
    "Tomoko Ohkuma": {
        "2014": {
            "W14": 1
        }
    },
    "Yi Song": {
        "2014": {
            "W14": 1
        }
    },
    "Bj\u00a8orkelund": {
        "2012": {
            "W12": 1
        }
    },
    "Aur\u00b4elie Herbelot": {
        "2015": {
            "W15": 1
        }
    },
    "Lu\u00edsa Coheur Sara Candeias": {
        "2015": {
            "W15": 1
        }
    },
    "Lee Rim Heui-Seok Lim": {
        "2003": {
            "P03": 1
        }
    },
    "Ted": {
        "1997": {
            "W97": 1
        },
        "1998": {
            "W98": 1
        },
        "2001": {
            "S01": 1,
            "N01": 1
        },
        "2002": {
            "W02": 1
        },
        "2010": {
            "N10": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "S12": 1
        },
        "2013": {
            "S13": 1
        },
        "2014": {
            "P14": 1
        },
        "2015": {
            "S15": 1
        }
    },
    "Scott Miller": {
        "2000": {
            "A00": 1
        },
        "1996": {
            "P96": 1
        },
        "1994": {
            "P94": 1
        },
        "2004": {
            "N04": 1
        },
        "1997": {
            "A97": 1
        }
    },
    "Hannaneh": {
        "2015": {
            "D15": 1
        }
    },
    "Kathleen M Sheehan": {
        "2013": {
            "W13": 2
        }
    },
    "Jenna": {
        "2015": {
            "W15": 1
        }
    },
    "Doreen Cheng": {
        "2015": {
            "S15": 1
        }
    },
    "D J Weir": {
        "1986": {
            "P86": 1
        }
    },
    "Ricky": {
        "2012": {
            "N12": 1
        }
    },
    "Nizar Habash Marton": {
        "2010": {
            "W10": 1
        }
    },
    "Vancouver": {
        "2013": {
            "W13": 1
        }
    },
    "Jeffrey Heinz": {
        "2010": {
            "P10": 2,
            "W10": 1
        },
        "2011": {
            "P11": 1
        },
        "2013": {
            "W13": 1
        }
    },
    "the Negev": {
        "2008": {
            "P08": 1
        },
        "2011": {
            "P11": 1
        }
    },
    "S F Lab Department of Computer": {
        "2014": {
            "P14": 1
        }
    },
    "Yllias": {
        "2008": {
            "D08": 1
        }
    },
    "Holger Schwenk": {
        "2008": {
            "W08": 1
        },
        "2011": {
            "W11": 1
        },
        "2012": {
            "W12": 1
        },
        "2007": {
            "W07": 1
        }
    },
    "Petr Knoth Lukas Zilka Zdenek Zdrahal": {
        "2011": {
            "W11": 1
        }
    },
    "David D Palmer": {
        "2000": {
            "W00": 1
        },
        "1997": {
            "E97": 1,
            "P97": 1
        }
    },
    "Fuji": {
        "2009": {
            "P09": 1
        }
    },
    "John Dowling": {
        "2010": {
            "W10": 1
        }
    },
    "Mike Pacey": {
        "1998": {
            "W98": 1
        }
    },
    "Sylwia Yanli Andy": {
        "2008": {
            "W08": 1
        }
    },
    "Andrew D Boyd": {
        "2014": {
            "W14": 1
        }
    },
    "Marie": {
        "2012": {
            "W12": 1
        }
    },
    "Beate Dorow": {
        "2009": {
            "W09": 1
        }
    },
    "Maria": {
        "2013": {
            "P13": 1,
            "W13": 1
        },
        "2014": {
            "W14": 1,
            "E14": 1
        }
    },
    "Gongbo Zhang": {
        "2015": {
            "D15": 1
        }
    },
    "Yi Liu Joyce Y Chai Rong Jin": {
        "2007": {
            "P07": 1
        }
    },
    "Karin": {
        "2001": {
            "W01": 1
        },
        "2002": {
            "W02": 1
        },
        "2003": {
            "W03": 1
        },
        "2011": {
            "W11": 1
        }
    },
    "Susan U Stucky": {
        "1983": {
            "P83": 1
        }
    },
    "Edward C Kaiser": {
        "1999": {
            "P99": 1
        }
    },
    "Jo\u00e3o Gra\u00e7a": {
        "2010": {
            "P10": 1
        }
    },
    "Baltimore": {
        "2015": {
            "W15": 1
        }
    },
    "Antoinette Renouf": {
        "1998": {
            "W98": 1
        }
    },
    "Jennifer Chu-Carroll": {
        "2000": {
            "A00": 2,
            "W00": 1
        },
        "1995": {
            "P95": 1
        }
    },
    "Hongbo Chen": {
        "2013": {
            "D13": 1
        }
    },
    "Jiayue Zhang": {
        "2010": {
            "W10": 1
        }
    },
    "James Clifford": {
        "1988": {
            "J88": 1
        }
    }
};