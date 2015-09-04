function headerDropdownHide() {
    $(".js-header-dropdown.active", ".header").removeClass("active")
        .find(".header-dropdown").slideUp(300);
}

$(document).ready(function() {

    //Clearing all stuff on 'body' click
    $("body").on("click", function() {
       headerDropdownHide();
    });

    //header's Dropdown
    $(".js-header-dropdown").on("click", function(e) {
        e.stopPropagation();
        $(this).toggleClass("active").find(".header-dropdown").slideToggle(300);
    });

    //Aside Nav Menu Expanding
    $(".js-aside-expand").on('click', function() {
        var $this = $(this),
            $similarActive = $this.parent().siblings().find(".js-aside-expand.active"),
            $list = $this.siblings(".js-aside-expandable");

        $similarActive.trigger('click');
        $this.toggleClass("active");
        $list.slideToggle(300);
    });

    //Your Music in the World - Map
    $(function() {
        var soundMobsMap = new Datamap({
            element: document.querySelector('.soundMobsMap'),
            scope: 'world',
            projection: 'mercator',
            geographyConfig: {
                popupOnHover: false,
                highlightOnHover: false,
                borderWidth: 0
            },
            fills: {
                'niceFill': '#34C3A3',
                'USA': '#B4B4B4',
                'RUS': '#B4B4B4',
                'PRK': '#B4B4B4',
                'PRC': '#B4B4B4',
                'IND': '#B4B4B4',
                'GBR': '#B4B4B4',
                'FRA': '#B4B4B4',
                defaultFill: '#525252'
            },
            data: {
                'niceFill': {fillKey: 'niceFill'},
                'RUS': {fillKey: 'RUS'},
                'PRK': {fillKey: 'PRK'},
                'PRC': {fillKey: 'PRC'},
                'IND': {fillKey: 'IND'},
                'GBR': {fillKey: 'GBR'},
                'FRA': {fillKey: 'FRA'},
                'CHN': {fillKey: 'USA'},
                'USA': {fillKey: 'USA'}
            }
        });

        var bubbles = [{
                highlightFillColor: '#34C3A3',
                borderWidth: 0,
                highlightBorderWidth: 0,
                radius: 20,
                country: 'China',
                people: '100000',
                fillKey: 'niceFill',
                latitude: 35,
                longitude: 95
            }
        ];

        //draw bubbles for bombs
        soundMobsMap.bubbles(bubbles, {
            popupTemplate: function (geo, data) {
                return ['<div class="soundMobsMap__popup">',
                    '<div class="soundMobsMap__text">' + data.country + '',
                    '<br/>' +  data.people + '</div>',
                    '<div class="soundMobsMap__arrow">' + '</div>',
                    '</div>'].join('');
            }
        });
    });

    //Soc-media Circles
    $(function() {
        var socMediaCircles = [
            { "x_axis": 60, "y_axis": 40, "radius": 40, "color" : "#556475" },
            { "x_axis": 40, "y_axis": 100, "radius": 35, "color" : "#ffb02e"},
            { "x_axis": 125, "y_axis": 75, "radius": 55, "color" : "#83e2ff"},
            { "x_axis": 135, "y_axis": 115, "radius": 30, "color" : "#1c5b97"}
        ];

        var svgContainer = d3.select(".soc-media__scene").append("svg")
                                            .attr("width", 200)
                                            .attr("height", 150);

        var circles = svgContainer.selectAll("circle")
                                  .data(socMediaCircles)
                                  .enter()
                                  .append("circle");

        var circleAttributes = circles
                            .attr("cx", function (d) { return d.x_axis; })
                            .attr("cy", function (d) { return d.y_axis; })
                            .attr("r", function () { return 0; })
                            .transition().duration(1000)
                            .attr("r", function (d) { return d.radius; })
                            .style("fill", function(d) { return d.color; })
                            .style("opacity", 0.4);
    });

    //Animations
    $(function() {
       $('.sm-block').addClass('animated zoomIn');
    });

    //CountTo
    $(function() {
        $('.js-countTo').countTo({
            speed: 1500,
            refreshInterval: 10
        });
    })

    //Music Profile Widget Pie Charts
    $(function() {
        $('.js-musChart').each(function(index) {
            var $val = $(this).data('val');
            var pie = new d3pie("js-musChart-"+index, {
                "header": {
                    "title": {
                        "fontSize": 24,
                        "font": "open sans"
                    },
                    "subtitle": {
                        "color": "#999999",
                        "fontSize": 12,
                        "font": "open sans"
                    },
                    "titleSubtitlePadding": 9
                },
                "footer": {
                    "color": "#999999",
                    "fontSize": 10,
                    "font": "open sans",
                    "location": "bottom-left"
                },
                "size": {
                    "canvasHeight": 55,
                    "canvasWidth": 55,
                    "pieInnerRadius": "70%",
                    "pieOuterRadius": "100%"
                },
                "data": {
                    "sortOrder": "label-asc",
                    "content": [
                        {
                            "label": "Rust",
                            "value": 100 - $val,
                            "color": "#242A2C"
                        },
                        {
                            "label": "FoxPro",
                            "value": $val,
                            "color": "#4FBE9C"
                        }
                    ]
                },
                "labels": {
                    "outer": {
                        "format": "none",
                        "pieDistance": 25
                    },
                    "inner": {
                        "format": "none",
                        "hideWhenLessThanPercentage": 100
                    },
                    "mainLabel": {
                        "fontSize": 11
                    },
                    "percentage": {
                        "color": "#ffffff",
                        "decimalPlaces": 0
                    },
                    "value": {
                        "color": "#adadad",
                        "fontSize": 11
                    },
                    "lines": {
                        "enabled": true
                    },
                    "truncation": {
                        "enabled": true
                    }
                },
                "effects": {
                    "pullOutSegmentOnClick": {
                        "effect": "none",
                        "speed": 400,
                        "size": 8
                    },
                    "highlightSegmentOnMouseover": false,
                    "highlightLuminosity": -0.45
                },
                "misc": {
                    "colors": {
                        "segmentStroke": "#979797"
                    },
                    "canvasPadding": {
                        "top": 0,
                        "right": 0,
                        "bottom": 0,
                        "left": 0
                    }
                }
            });
        });
    });

    //Sound Mobs Progressbar
    $(function() {
        var $progressBar = $('.js-soundMobsProgress'),
            $progressBarWidth = $progressBar.data("width");

        $progressBar.css({
            'width': $progressBarWidth
        });
    });

});