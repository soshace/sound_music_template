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
            geographyConfig: {
                popupOnHover: false,
                highlightOnHover: false
            },
            fills: {
                'niceFill': '#34C3A3',
                defaultFill: '#B4B4B4'
            },
            data: {
                'niceFill': {fillKey: 'niceFill'}
            }
        });

        var bombs = [{
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
        soundMobsMap.bubbles(bombs, {
            popupTemplate: function (geo, data) {
                return ['<div class="soundMobsMap__popup">',
                    '<div class="soundMobsMap__text">' + data.country + '',
                    '<br/>' +  data.people + '</div>',
                    '<div class="soundMobsMap__arrow">' + '</div>',
                    '</div>'].join('');
            }
        });
    });

    $(function() {
        var jsonCircles = [
            { "x_axis": 60, "y_axis": 40, "radius": 40, "color" : "#556475" },
            { "x_axis": 40, "y_axis": 100, "radius": 35, "color" : "#ffb02e"},
            { "x_axis": 125, "y_axis": 75, "radius": 50, "color" : "#83e2ff"},
            { "x_axis": 130, "y_axis": 110, "radius": 30, "color" : "#1c5b97"}
        ];

        var svgContainer = d3.select(".soc-media").append("svg")
                                            .attr("width", 270)
                                            .attr("height", 150);

        var circles = svgContainer.selectAll("circle")
                                  .data(jsonCircles)
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

});