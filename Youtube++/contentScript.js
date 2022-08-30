(() => {
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, videoId } = obj;

        if (obj === "execute") {
        changeUI();
   }
    });

    const changeUI = () => {
        alert("running");
        document.getElementById("player").remove();
    }

})();
        


