(function () {
    var $wrapper = $(".wrapper");
    const $panes = $(".image");
    var $frontImage = $panes.eq(1);
    var $slider = $(".slider");

    //---------for touchscreen devices--------

    // $(document).ready(function () {
    //     var isTouchDevice = "ontouchstart" in document.documentElement;

    //     $("#touchSensitive").mousedown(function (event) {
    //         if (isTouchDevice == false) {
    //             pushed();
    //         }
    //     });
    //     $("#touchSensitive").mouseup(function (event) {
    //         if (isTouchDevice == false) {
    //             released();
    //         }
    //     });
    //     $("#touchSensitive").on("touchstart", function () {
    //         if (isTouchDevice) {
    //             pushed();
    //         }
    //     });
    //     $("#touchSensitive").on("touchend", function () {
    //         if (isTouchDevice) {
    //             released();
    //         }
    //     });
    // });

    //--------------

    let isSliding = false;
    $wrapper.on("mousemove touchstart", (e) => {
        e.preventDefault();
        if (e.target.className === "slider") {
            return;
        }
        if (isSliding) {
            $wrapper.css("cursor", "ew-resize");
            $frontImage.css("width", e.offsetX);
            $slider.css("left", e.offsetX - 5);
        }
    });

    $wrapper.on("mouseup mouseleave touchend", (e) => {
        e.preventDefault();
        isSliding = false;
        $wrapper.css("cursor", "default");
    });

    $slider.on("mousedown touchstart", (e) => {
        e.preventDefault();
        isSliding = true;
    });
})();
