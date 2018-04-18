(function () {
    'use strict';

    angular
        .module('app')
        .controller('topicModel1Controller', topicModel1Controller)

    topicModel1Controller.$inject = [];

    function topicModel1Controller() {

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

        var i;
        var dict = {};
        var meta = {};
        var overall_max = 0;
        var normalized_view = false;
        var topics = [];
        var topic_words = [];
        var active_topics = [];
        var active_topic_words = [];

        for (var topic in data) {
            topics.push(topic);
            dict[topic] = {};
            var max = 0;
            for (var subtopic in data[topic]) {
                topic_words.push(subtopic);
                dict[topic][subtopic] = [];
                var trend = data[topic][subtopic];
                for (i = 0; i < trend.length; i++) {
                    dict[topic][subtopic].push({
                        "Year": 1990 + i,
                        "Count": trend[i]
                    });
                    if (max < trend[i])
                        max = trend[i];
                    if (overall_max < max)
                        overall_max = max;
                }
            }
            meta[topic] = {
                "max": max
            };
        }
        topics = topics.sort();

        meta["base_colors"] = ["#eb984e", "#27ae60", "#5499c7", "#af7ac5", "#ec7063"];
        meta["subtopic_shades"] = {
            "Network": ["#d47118", "#e67d20", "#e88b37", "#eb984e", "#eea565"],
            "Software Engineering": ["#19703e", "#1e8449", "#229955", "#27ae60", "#2cc36b"],
            "OOP": ["#33729c", "#3980af", "#418ec1", "#5499c7", "#67a4cd"],
            "Operating Systems": ["#8d4aa9", "#9a56b6", "#a468bd", "#af7ac5", "#ba8ccd"],
            "Programming Language": ["#e4311f", "#e64636", "#e95b4c", "#ec7063", "#ef857a"]
        };

        // Define the div for the tooltip
        var div = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        // set the dimensions and margins of the graph
        var margin = { top: 10, right: 50, bottom: 40, left: 50 },
            width = 560 - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        render(active_topics = topics, active_topic_words = topic_words);

        function render(topics, topic_words) {
            var x = d3.scaleLinear()
                .domain([1992, 2016])
                .range([0, width]);
            x.domain([1990, 1999]);
            var y = d3.scaleLinear().range([height, 0]);
            y.domain([0, overall_max + 0.001]);

            for (var i = 0; i < topics.length; i++) {
                var topic = topics[i];

                var svg_target = d3.select("#svg" + (+i + 1)).append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                if (!normalized_view) {
                    y.domain([0, meta[topic]["max"] + 0.001]);
                }

                var words = [];
                var subtopics = dict[topic];
                for (var word in subtopics) {
                    words.push(word);
                }
                words = words.sort();

                for (var j = 0; j < words.length; j++) {
                    word = words[j];
                    if (topic_words.includes(word)) {
                        drawLine(svg_target, subtopics[word], x, y, meta["base_colors"][j], true);
                    }
                }
                drawAxis(svg_target, x, y);
                addLegend(topic, words, meta["base_colors"], "legend" + (+i + 1));
            }
            for (var k = 0; k < topic_words.length; k++) {
                var checkbox = document.getElementById('word_' + topic_words[k]);
                if (checkbox) {
                    checkbox.checked = true;
                }
            }

            add_word_choice_event();
        }

        function addLegend(topic, subtopics, colors, targetId) {
            var table = $('<table align="right"><tbody>');

            var tr = $('<tr>');
            $('<th bgcolor="#333333" colspan="3" style="text-align:right;color:white;padding:8px">' + topic + '</th>').appendTo(tr);
            tr.appendTo(table);

            for (i = 0; i < subtopics.length; i++) {
                tr = $('<tr>');

                var color = colors[i];
                $('<td style="text-align:right">' + subtopics[i] + '</td>').appendTo(tr);
                $('<td><svg height="5" width="100"><line x1="10" y1="0" x2="120" y2="0" ' +
                    'style="stroke:' + color + '; stroke-width:5" /></svg></td>').appendTo(tr);
                $('<td><input type="checkbox" class="word_choice" id="word_' + subtopics[i] + '"></td>').appendTo(tr);
                tr.appendTo(table);
            }
            table.appendTo('#' + targetId);
        }

        function drawLine(svg, data, x, y, color, dots) {
            var valueline = d3.line()
                .x(function (d) {
                    return x(d.Year);
                })
                .y(function (d) {
                    return y(d.Count);
                });

            svg.append("path")
                .attr("class", "line")
                .style("stroke", color)
                .attr("d", valueline(data));

            if (dots) {
                svg.selectAll("dot")
                    .data(data)
                    .enter().append("circle")
                    .attr("r", 4)
                    .attr("cx", function (d) {
                        return x(d.Year);
                    })
                    .attr("cy", function (d) {
                        return y(d.Count);
                    })
                    .on("mouseover", function (d) {
                        div.transition()
                            .duration(200)
                            .style("opacity", .9);

                        div.html("<b>" + d.Count + "</b>")
                            .style("left", (d3.event.pageX + 5) + "px")
                            .style("top", (d3.event.pageY - 10) + "px");
                    })
                    .on("mouseout", function (d) {
                        div.transition()
                            .duration(500)
                            .style("opacity", 0);
                    });
            }

            // Add the X Axis
            // svg.append("g")
            //     .attr("transform", "translate(0," + height + ")")
            //     .call(d3.axisBottom(x).ticks(data.length).tickFormat(d3.format(".0f")));

            // svg.append("text")
            //     .attr("transform", "translate(" + (width/2) + "," + (height + margin.top+20) + ")")
            //     .style("text-anchor", "middle")
            //     .text("Years")
            //     .attr("font-weight", "bold");

            // Add the Y Axis
            // svg.append("g")
            //     .call(d3.axisLeft(y));

            // svg.append("text")
            //     .attr("transform", "rotate(-90)")
            //     .attr("y", 0 - margin.left)
            //     .attr("x",0 - (height / 2))
            //     .attr("dy", "1em")
            //     .attr("font-weight", "bold")
            //     .style("text-anchor", "middle")
            //     .text("No. of Publications");
        }

        function drawAxis(svg, x, y) {
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x).ticks(data.length).tickFormat(d3.format(".0f")));
            svg.append("g")
                .call(d3.axisLeft(y));
        }


        $("#yes").click(function () {
            $("#yes").css({ "font-weight": "bold", "cursor": "default" });
            $("#no").css({ "font-weight": "normal", "cursor": "pointer" });
            normalized_view = true;
            clear();
            render(active_topics, active_topic_words);
        });

        $("#no").click(function () {
            $("#no").css({ "font-weight": "bold", "cursor": "default" });
            $("#yes").css({ "font-weight": "normal", "cursor": "pointer" });
            normalized_view = false;
            clear();
            render(active_topics, active_topic_words);
        });

        $(".topic_choice").click(function () {
            active_topics = [];
            for (var i = 0; i < topics.length; i++) {
                var topic = topics[i];
                var tag = "choice_" + topic;
                var checkbox = document.getElementById(tag);
                if (checkbox.checked === true) {
                    active_topics.push(topic);
                }
            }
            clear();
            render(active_topics, active_topic_words);
        });

        function add_word_choice_event() {
            $(".word_choice").click(function () {
                var checkbox = document.getElementById(this.id);
                var word = this.id.replace("word_", "");
                if (checkbox.checked === true)
                    active_topic_words.push(word);
                else {
                    var idx = active_topic_words.indexOf(word);
                    active_topic_words.splice(idx, 1);
                }
                clear();
                render(active_topics, active_topic_words);
            });
        }

        function clear() {
            $("#svg1").empty();
            $("#svg2").empty();
            $("#svg3").empty();
            $("#svg4").empty();
            $("#svg5").empty();

            $("#legend1").empty();
            $("#legend2").empty();
            $("#legend3").empty();
            $("#legend4").empty();
            $("#legend5").empty();
        }

    }
})();