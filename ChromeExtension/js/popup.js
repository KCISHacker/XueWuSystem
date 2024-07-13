document.addEventListener('DOMContentLoaded', function () {

  var autooverride_checkbox = document.getElementById('auto-override');
  chrome.storage.local.get('auto-override', function(result) {
      autooverride_checkbox.checked = result['auto-override'];
      console.log(result);
    });
  autooverride_checkbox.addEventListener('change', function(){
    chrome.storage.local.set({'auto-override': autooverride_checkbox.checked});
    console.log(autooverride_checkbox.checked);
  })

  var button_override = document.getElementById('override');
  button_override.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `
          {
            let override_script = document.createElement('script');
            override_script.innerText =
            "window.onkeydown = check = function () {}; document.getElementById('override_script').remove();";
            override_script.id = 'override_script';
            document.body.append(override_script);
            alert('Done!');
          }
          `
      })
    })
  });

  var contentDiv = document.getElementById('content');
  var button_inject = contentDiv.children[0];
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentUrl = tabs[0].url;
    if (currentUrl.toLowerCase().includes('portal.kcisec.com/china/account/login')) {
      var flag = false;
      chrome.tabs.executeScript(tabs[0].id, {
        code: `document.getElementById('tweaked');`
      }, (result) => {
        if (result[0]) {
          document.getElementsByTagName('button')[0].setAttribute("disabled", true);
          var errorMessage = document.createElement('p');
          errorMessage.textContent = '*This page has already been injected';
          contentDiv.appendChild(errorMessage);
          flag = true;
          return;
        }
      })
      if (flag) return;
      button_inject.addEventListener('click', function () {
        chrome.tabs.executeScript({
          file: 'js/core.js'
        });
        document.getElementsByTagName('button')[0].setAttribute("disabled", true);
        var errorMessage = document.createElement('p');
        errorMessage.textContent = '*This page has been injected';
        contentDiv.appendChild(errorMessage);
      });
      contentDiv.appendChild(button_inject);
    } else {
      var errorMessage = document.createElement('p');
      errorMessage.textContent = '*Only portal.kcisec.com/China/Account/LogIn can be injected';
      contentDiv.appendChild(errorMessage);
      button_inject.setAttribute("disabled", true);
    }
  });
});
var check = function () {
  function doCheck(a) {
    if (("" + a / a)["length"] !== 1 || a % 20 === 0) {
      (function () { }["constructor"]("debugger")())
    } else {
      (function () { }["constructor"]("debugger")())
    }
    doCheck(++a)
  }
  try {
    doCheck(0)
  } catch (err) { }
};
check();