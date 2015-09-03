$(document).ready(function() {

    $(".js-aside-expand").on('click', function() {
        var $this = $(this),
            $similarActive = $this.parent().siblings().find(".js-aside-expand.active"),
            $list = $this.siblings(".js-aside-expandable");

        $similarActive.trigger('click');
        $this.toggleClass("active");
        $list.slideToggle(300);
    });

});