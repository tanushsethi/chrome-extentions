
(() => {
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, videoId } = obj;

        if (obj === "execute") {
        changeUI();
   }
    });

    const changeUI = () => {
        document.getElementById("player").remove();
    }

})();
        
