chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && changeInfo.status === 'complete' && tab.url.includes("youtube.com/watch")) {
    chrome.tabs.sendMessage(tabId, "execute");
  }
});


function printLog(response){
    console.log(response);
}


