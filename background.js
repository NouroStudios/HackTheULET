chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color1: 'red'}, function() {
    console.log("The color is green.");
  });
  chrome.storage.sync.set({color2: 'green'}, function() {
    console.log("The color is green.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
