(function () {
    'use strict';

    angular
        .module('app')
        .controller('topicModel2_rankController', topicModel2_rankController)

    topicModel2_rankController.$inject = [];

    function topicModel2_rankController() {
        var data = {
            "Network": {
                "Node": [
                    0.00635647376949,
                    0.00594203394114,
                    0.0055421744245,
                    0.0052040189343,
                    0.00495292937508,
                    0.00466542502614,
                    0.00444024862143,
                    0.00415527006426,
                    0.0038877445675,
                    0.00366637878526
                ],
                "Service": [
                    0.00212015418232,
                    0.00200017275013,
                    0.00189314570509,
                    0.00179776441717,
                    0.00171045171977,
                    0.00162990909704,
                    0.00155706599454,
                    0.00149204370574,
                    0.00143691363702,
                    0.00138740207179
                ],
                "Protocol": [
                    0.00947604568254,
                    0.00923005108853,
                    0.00903496096131,
                    0.00850018755634,
                    0.00787810710376,
                    0.00733187100243,
                    0.00657042181741,
                    0.00577568798645,
                    0.00513042974096,
                    0.00454025897566
                ],
                "Network": [
                    0.00756170361439,
                    0.00700381004382,
                    0.00649608413288,
                    0.00609719558643,
                    0.00571750203786,
                    0.0052808599303,
                    0.00487719495573,
                    0.00451880339521,
                    0.00412253944284,
                    0.00376576110792
                ],
                "Algorithm": [
                    0.00559970930712,
                    0.00539166733263,
                    0.00514356504146,
                    0.00493055206432,
                    0.00464932626451,
                    0.00434060059248,
                    0.00403056786294,
                    0.00374875247774,
                    0.00345868754801,
                    0.0032219228729
                ]
            },
            "Software Engineering": {
                "Software Development": [
                    0.0171207578252,
                    0.0176106600436,
                    0.018257430166,
                    0.0194713959933,
                    0.0204483629068,
                    0.0183155270679,
                    0.0166174107245,
                    0.0157664765674,
                    0.015337597834,
                    0.0146475907072
                ],
                "Metric": [
                    0.00475009585259,
                    0.00466873256437,
                    0.0045869818159,
                    0.00453215988503,
                    0.00446844961137,
                    0.00447455904942,
                    0.00449276732376,
                    0.00457111607785,
                    0.00469699830969,
                    0.00490068339877
                ],
                "Product": [
                    0.00491874485043,
                    0.00496871394266,
                    0.00508082876952,
                    0.00517316483099,
                    0.00530128071092,
                    0.00542551543099,
                    0.00529176572731,
                    0.00518343565829,
                    0.00509723763283,
                    0.00494516875417
                ],
                "Testing": [
                    0.0035201987087,
                    0.00349216608313,
                    0.00349772002543,
                    0.00351550944165,
                    0.00355714947413,
                    0.00366147969865,
                    0.00378097911582,
                    0.00392989065938,
                    0.00404361225263,
                    0.0042070590261
                ],
                "Software System": [
                    0.0088550528126,
                    0.00927366495401,
                    0.00876011874529,
                    0.00843998994793,
                    0.00830661472249,
                    0.00830413824295,
                    0.00841766947422,
                    0.00867115024411,
                    0.00901503527097,
                    0.00940838891576
                ]
            },
            "OOP": {
                "Abstract Data Type": [
                    0.00821033195805,
                    0.00739814717801,
                    0.00656619064359,
                    0.00589135355189,
                    0.00517172625224,
                    0.00460531188408,
                    0.00410708727818,
                    0.00369869868124,
                    0.0033689778927,
                    0.00308317938338
                ],
                "Definition": [
                    0.00432748767925,
                    0.00424491414903,
                    0.0040942207693,
                    0.00394974363632,
                    0.00376441171815,
                    0.0036069985099,
                    0.00351095035979,
                    0.00343668799375,
                    0.00335106136435,
                    0.00328024793927
                ],
                "Model": [
                    0.00378738053631,
                    0.00373611308745,
                    0.00367513373339,
                    0.00359673357818,
                    0.00353061809574,
                    0.00341036339821,
                    0.00331372859657,
                    0.00322346135593,
                    0.00314684286311,
                    0.00308436703501
                ],
                "Abstraction": [
                    0.00461375424102,
                    0.00436215131017,
                    0.00416200413133,
                    0.00399101703331,
                    0.00384289064466,
                    0.00363780618579,
                    0.00348281273144,
                    0.00334680621584,
                    0.00322977482963,
                    0.00314929890959
                ],
                "Execution": [
                    0.00407837478854,
                    0.00421065457012,
                    0.00430342290312,
                    0.00438716340682,
                    0.00447616037954,
                    0.00459160216322,
                    0.00476367410058,
                    0.00493012983139,
                    0.00482099446287,
                    0.00474056228493
                ]
            },
            "Operating Systems": {
                "Implementation": [
                    0.00306464419463,
                    0.00308624552371,
                    0.00310987525487,
                    0.00314712803032,
                    0.00317097049814,
                    0.00319611299348,
                    0.00321816635565,
                    0.00325140649005,
                    0.00328360881215,
                    0.00331458937618
                ],
                "Real Time System": [
                    0.00940825996134,
                    0.0096096428169,
                    0.00990946314524,
                    0.0101527603292,
                    0.00990018867942,
                    0.00982382893474,
                    0.00908642842115,
                    0.00841191804035,
                    0.00811343638421,
                    0.00795019576862
                ],
                "Static Analysis": [
                    0.00283478174376,
                    0.00294339682793,
                    0.00306445808728,
                    0.00318337812092,
                    0.0033273759714,
                    0.00350574530643,
                    0.00373165621737,
                    0.00396810891113,
                    0.00429828836712,
                    0.0046286504465
                ],
                "System": [
                    0.00658276787422,
                    0.00632895468416,
                    0.00611666319556,
                    0.00589729166656,
                    0.00570561227227,
                    0.00561335957687,
                    0.0055659896427,
                    0.00553415103677,
                    0.00557159462653,
                    0.00560175527114
                ],
                "Formal Verification": [
                    0.00342888726789,
                    0.00341136069633,
                    0.0033805183921,
                    0.00337753397138,
                    0.00341907305776,
                    0.00348364271797,
                    0.00348100056334,
                    0.00350638036451,
                    0.00355503615836,
                    0.00353922843959
                ]
            },
            "Programming Language": {
                "Compile": [
                    0.00692887424613,
                    0.00681397368771,
                    0.0066714230972,
                    0.00639616994617,
                    0.00615437838404,
                    0.00592344984501,
                    0.00569051323271,
                    0.00547788433807,
                    0.00525494678965,
                    0.00504695189321
                ],
                "Fortran": [
                    0.00381923060021,
                    0.00375044516981,
                    0.00370525929171,
                    0.00359935186017,
                    0.00343910162211,
                    0.00330838509543,
                    0.00319429266241,
                    0.00310334604452,
                    0.00294581466303,
                    0.0027471187212
                ],
                "High Level Language": [
                    0.00309460358913,
                    0.00286115001856,
                    0.00266771950459,
                    0.00250936258498,
                    0.00232581265875,
                    0.00215248522108,
                    0.00200306598542,
                    0.00187117115196,
                    0.0017580602202,
                    0.00164608550352
                ],
                "Language": [
                    0.00868163719645,
                    0.00820122299952,
                    0.00786659601642,
                    0.00754140912225,
                    0.0072132031612,
                    0.00690431394689,
                    0.00660254205275,
                    0.00637244163219,
                    0.00617316098254,
                    0.0059484940603
                ],
                "Code Generation": [
                    0.0056749564008,
                    0.00565447003444,
                    0.00566940691415,
                    0.00556829444781,
                    0.00553155199811,
                    0.00554037252639,
                    0.00545875569069,
                    0.00538339992095,
                    0.00539743255233,
                    0.00543020955078
                ]
            }
        };

        var colors = {
            "rank1": "#ec7063",
            "rank2": "#5499c7",
            "rank3": "#27ae60",
            "rank4": "#eb984e",
            "rank5": "#af7ac5"
        };

        var max = 0, min = 9;
        var subtopics = [];
        var size_map = {};
        var val_map = {};
        var order_topics = [];
        var order_subtopics = {};

        for (var topic in data) {
            order_topics.push(topic);
            order_subtopics[topic] = [];
            for (var word in data[topic]) {
                subtopics.push(word);
                order_subtopics[topic].push(word);
                var year_trends = data[topic][word];
                var year_vals = [];
                for (var i = 0; i < year_trends.length; i++) {
                    var v = year_trends[i];
                    year_vals[i] = v;
                    if (v < min) {
                        min = v
                    }
                    if (v > max) {
                        max = v;
                    }
                }
                val_map[word] = year_vals;
            }
            order_subtopics[topic] = order_subtopics[topic].sort();
        }
        order_topics = order_topics.sort();

        var radius = 25;
        for (var topic in data) {
            var subtopics = data[topic];
            for (word in subtopics) {
                year_trends = subtopics[word];
                var sizes = [];
                for (i = 0; i < year_trends.length; i++) {
                    v = year_trends[i];
                    sizes[i] = (v * radius) / max;
                }
                size_map[word] = sizes;
            }
        }

        createChart("Network", order_subtopics, val_map);
        createTopicOptions(order_topics);
        createRankLegend(colors);

        function createChart(target_topic, order_subtopics, val_map) {
            var years = 10;
            var table = $('<table align="center" cellspacing="0" cellpadding="0"><tbody>');

            words = order_subtopics[target_topic];
            var tr;
            tr = $('<tr>');
            $('<td></td>').appendTo(tr);
            for (i = 0; i < words.length; i++) {
                $('<td align="center" style="border-bottom:1px solid; border-color:#cdcdcd;font-weight:bold;color:#222222;text-align:center">' +
                    '&nbsp;' + words[i] + '&nbsp;' + '</td>').appendTo(tr);
            }
            tr.appendTo(table);

            for (var r = 0; r < years; r++) {
                tr = $('<tr>');
                $('<td style="border-right:1px solid; border-color:#cdcdcd; padding-right:8px; text-align:right;font-weight:bold;color:#222222">' +
                    parseInt(1990 + r) + '</td>').appendTo(tr);

                var values_by_year = [];
                var words_by_year = {};
                var words = order_subtopics[target_topic];
                for (j = 0; j < words.length; j++) {
                    var word = words[j];
                    var values = val_map[word];
                    var sizes = size_map[word];
                    values_by_year.push(values[r]);
                    words_by_year[word] = {
                        size: sizes[r],
                        value: values[r]
                    }
                }
                values_by_year = values_by_year.sort().reverse();
                for (var j = 0; j < words.length; j++) {
                    word = words[j];
                    var value = words_by_year[word].value;
                    var rank = 0;
                    for (; rank < values_by_year.length; rank++) {
                        if (values_by_year[rank] === value) {
                            words_by_year[word].rank = rank + 1;
                            break;
                        }
                    }

                    $('<td style="text-align:center"><svg height="50" width="50">\n' +
                        '  <circle cx="25" cy="25" r="' + words_by_year[word].size + '" fill="' + colors['rank' + words_by_year[word].rank] + '" />\n' +
                        '<title>' + topic + '/' + word + ': Rank ' + words_by_year[word].rank + '</title></svg></td>').appendTo(tr);
                    // '<title>' + topic + '/' + word + ': Rank ' + words_by_year[word].rank + ' (' + + words_by_year[word].value + ')</title></svg></td>').appendTo(tr);
                }
                tr.appendTo(table);
            }

            table.appendTo($("#chart"));
        }

        function createTopicOptions(topics) {
            var table = $("#legend");

            for (var i = 0; i < topics.length; i++) {
                topic = topics[i];
                var tr = $('<tr>');
                var to_check = (i === 0) ? "checked" : "";
                $('<td><input type="radio" name="topic" id="legend_' + topic + '" ' + to_check + '></td>').appendTo(tr);
                $('<td style="font-weight:bold;color:#222222">' + topics[i] + '</td>').appendTo(tr);
                tr.appendTo(table);
            }
        }

        function createRankLegend(colors) {
            var n_ranks = 5;
            var table = $("#rank");
            for (var i = 0; i < n_ranks; i++) {
                var tr = $('<tr>');
                $('<td><svg height="16" width="16"><circle cx="8" cy="8" r="8" fill="' + colors['rank' + (+i + 1)] + '" /></svg></td>').appendTo(tr);
                $('<td style="font-weight:bold;color:#222222">Rank ' + (+i + 1) + '</td>').appendTo(tr);
                tr.appendTo(table);
            }
        }

        $("[type=radio]").change(function () {
            $("#chart").empty();

            for (var i = 0; i < order_topics.length; i++) {
                var topic = order_topics[i];

                var tag = "legend_" + topic;
                var radio = document.getElementById(tag);
                if (radio.checked === true) {
                    createChart(topic, order_subtopics, val_map);
                }
            }
        });

    }
})();