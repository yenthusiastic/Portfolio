var navi_open = false;

function animateMenuBtn(x) {
    x.classList.toggle("rotate"); 
    navi_open = !navi_open;

}

function openNavi(){
    if (navi_open) {
        document.getElementById("navigation").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
    } else {
        document.getElementById("navigation").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
    }
}

function popUpIcon(icon) {
    icon.style.width ="50px";
}