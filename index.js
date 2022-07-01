(function () {
    var $wrapper = $(".wrapper");
    const $panes = $(".image");
    var $frontImage = $panes.eq(1);
    var $slider = $(".slider");

    let isSliding = false;
    $wrapper.on("mousemove", (e) => {
        if (e.target.className === "slider") {
            return;
        }
        if (isSliding) {
            $wrapper.css("cursor", "ew-resize");
            $frontImage.css("width", e.offsetX);
            $slider.css("left", e.offsetX - 5);
        }
    });

    $wrapper.on("mouseup mouseleave", (e) => {
        isSliding = false;
        $wrapper.css("cursor", "default");
    });

    $slider.on("mousedown", (e) => {
        isSliding = true;
    });
})();
