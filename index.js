(function () {
    var $pane = $(".wrapper");
    var $frontPane = $pane.find(".image").eq(1);
    var $slider = $pane.find(".slider");
    var isLoading = false;
    var offset = $pane.offset();
    $pane.on("click", function (event) {
        resizestuff(event);
    });

    function resizestuff(event) {
        var xInside = event.clientX - offset.left;
        $slider.css("left", xInside);
        $frontPane.css("width", xInside);
    }
    $slider.on("touchstart", function (event) {
        console.log("touchstart");
        isLoading = true;
    });
    $pane.on("touchmove", function (event) {
        console.log("touchmove");
        if (!isLoading) {
            return;
        }
        resizestuff(event);
    });
    $pane.on("touchend", function (event) {
        console.log("touchend");
        isLoading = false;
    });
})();
