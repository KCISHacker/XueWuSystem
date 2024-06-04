document.addEventListener('DOMContentLoaded', function() {
    var contentDiv = document.getElementById('content');
    var button = contentDiv.children[0];
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var currentUrl = tabs[0].url;
      if (currentUrl.includes('portal.kcisec.com/China/Account/LogIn')) {
        var flag = false;
        chrome.tabs.executeScript(tabs[0].id, {
          code: `document.getElementById('hacked');`
        }, (result) => {
          if (result[0]){
            document.getElementsByTagName('button')[0].setAttribute("disabled", true);
            var errorMessage = document.createElement('p');
            errorMessage.textContent = '*This page has already been injected';
            contentDiv.appendChild(errorMessage);
            flag = true;
            return;
          }
        })
        if (flag) return;
        button.addEventListener('click', function() {
          chrome.tabs.executeScript({
            file: 'js/core.js'
          });
          document.getElementsByTagName('button')[0].setAttribute("disabled", true);
          var errorMessage = document.createElement('p');
          errorMessage.textContent = '*This page has been injected';
          contentDiv.appendChild(errorMessage);
        });
        contentDiv.appendChild(button);
      } else {
        var errorMessage = document.createElement('p');
        errorMessage.textContent = '*Only portal.kcisec.com/China/Account/LogIn can be injected';
        contentDiv.appendChild(errorMessage);
        button.setAttribute("disabled", true);
      }
    });
  });