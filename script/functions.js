//var media_width = window.matchMedia("(max-width: 400px)")
//adjustScreenElements(media_width) // Call listener function at run time
//media_width.addListener(adjustScreenElements) // Attach listener function on state changes


var navi_open = false;
function animateMenuBtn(x) {
    x.classList.toggle("rotate"); 
    navi_open = !navi_open;
}

function openNavi(){
    if (navi_open) {
        document.getElementById("navigation").style.width = "200px";
    } else {
        document.getElementById("navigation").style.width = "0px";
    }
}

function popUpIcon(icon) {
    icon.style.width ="50px";
}

var prevScrollpos = window.pageYOffset;
var currentScrollPos = 0;
window.onscroll = function() {
  currentScrollPos = window.pageYOffset;
  if (prevScrollpos != currentScrollPos && navi_open) {
    document.getElementById("navigation").style.width = "0";
    animateMenuBtn(document.getElementById("menu_btn"));
  } 
  prevScrollpos = currentScrollPos;
}


function animateSignature(){
  var svg = document.querySelectorAll("path");
  for (var i = 0; i < svg.length; i++){
    svg[i].classList.add("start");
  }
  
}



function adjustScreenElements(media_width) {
    if (media_width.matches) { // If media query matches
      var ret_els = document.getElementsByClassName("column");
      Array.prototype.forEach.call(ret_els, function(el) {
        console.log(el);
        el.style.width = "100%";
    });
      document.getElementById("portrait").style.display = "none";
    } 
  }