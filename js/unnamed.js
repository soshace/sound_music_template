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

});