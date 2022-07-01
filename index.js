(function () {
    var $wrapper = $(".wrapper");
    const $panes = $(".image");
    var $frontImage = $panes.eq(1);
    var $slider = $(".slider");

    //---------for touchscreen devices--------

    //--------------

    //     let isSliding = false;
    //     $wrapper.on("mousemove", (e) => {
    //         if (e.target.className === "slider") {
    //             return;
    //         }
    //         if (isSliding) {
    //             $wrapper.css("cursor", "ew-resize");
    //             $frontImage.css("width", e.offsetX);
    //             $slider.css("left", e.offsetX - 5);
    //         }
    //     });

    //     $wrapper.on("mouseup mouseleave ", (e) => {
    //         e.preventDefault();
    //         isSliding = false;
    //         $wrapper.css("cursor", "default");
    //     });

    //     $slider.on("mousedown ", (e) => {
    //         e.preventDefault();
    //         isSliding = true;
    //     });
    // })();
    document.querySelector(".wrapper").addEventListener("touchstart", func);
    function func(e) {
        console.log(e.touches, e.type);
    }
})();
