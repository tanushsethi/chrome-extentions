
(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        if (obj === "execute") {
            changeUI();
        }
    });

    const changeUI = () => {
        
        window.dispatchEvent(new Event("scroll"));

        var comments = document.getElementById("comments");
        var secondaryInner = document.getElementById("secondary-inner");
        swapElements(comments,secondaryInner);

        // var secondary = document.getElementById("secondary");
        // secondary.style.height = "100vh";
        // secondary.style.overflow = "scroll";

    }

    function swapElements(obj1, obj2) {
        // create marker element and insert it where obj1 is
        var temp = document.createElement("div");
        obj1.parentNode.insertBefore(temp, obj1);
        // move obj1 to right before obj2
        obj2.parentNode.insertBefore(obj1, obj2);
        // move obj2 to right before where obj1 used to be
        temp.parentNode.insertBefore(obj2, temp);
        // remove temporary marker node
        temp.parentNode.removeChild(temp);
    }

})();
        
