chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
    chrome.tabs.sendMessage(tabId, "execute");
  }
});


function printLog(response){
    console.log(response);
}


