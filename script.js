let body = document.querySelector("body");
let themeSwitcher = document.querySelector("header nav #theme-switch");
let themevalue = true;

themeSwitcher.addEventListener("click", function(){
    if(themevalue === true){
        body.className ="darkmode"
        themevalue = false
    }
    else{
        body.className ="lightmode"
        themevalue = true
    }
})

