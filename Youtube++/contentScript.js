(() => {

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.isYT == "true") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            // To show/highlight the page action icon
            chrome.pageAction.show(tabs[0].id);
            changeUI();
        });
    }
});

    // chrome.runtime.onMessage.addListener((obj, sender, response) => {
    //     if (obj.type === "NEW") {
    //         changeUI();
    //     }
    // });

    const changeUI = () => {
        alert("running");
    }

})();

alert("running");
