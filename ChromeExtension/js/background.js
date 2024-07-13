chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.storage.local.get('auto-override', function(result) {
        if (result['auto-override']){
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                if (tabs[0].url.toLowerCase().includes('portal.kcisec.com')) {
                chrome.tabs.executeScript(tabs[0].id, {
                    code: `
                    {
                        let override_script = document.createElement('script');
                        override_script.innerText =
                        "window.onkeydown = check = function(){};";
                        override_script.id = 'override_script';
                        document.body.append(override_script);
                    }
                    `
                  });
                }
            });
        }
      });
  });