// gif yukleme

 document.onreadystatechange = function() {
     var state = document.readyState;
     if (state == 'interactive') {
         document.body.style.visibility = "hidden";
         document.getElementById('load').style.visibility = "visible";
     } else if (state == 'complete') {
         setTimeout(function() {
             document.getElementById('load').style.visibility = "hidden";
             document.body.style.visibility = "visible";
         }, 1000);
     }
 }
 
 
// SLIDER TOP

var i = 0
var v = document.querySelectorAll(".slider_button_middle div img");
headings = [["Creative", "White", "Templates"], ["Responsive", "Design", "Theme"], ["Amazing", "Video", "Background"]]
text = ["The template is suitable for any company and the direction that appreciates style, purity and quality of the web site"]

function next() {
    i++;
    if (i == v.length) {
        i = 0;
    }
    document.querySelectorAll(".slider_button_middle div")[i].style.border = "3px solid white"
    document.querySelectorAll(".slider_button_middle div")[i].style.boxSizing = "border-box"
    document.getElementById("slider").style.backgroundImage = "url(" + v[i].src + ")";
    document.getElementsByClassName("title1")[0].innerHTML = headings[i][0];
    document.getElementsByClassName("title2")[0].innerHTML = headings[i][1];
    document.getElementsByClassName("title3")[0].innerHTML = headings[i][2];
    document.getElementsByClassName("title4").innerHTML = headings[i];
}
function prew() {
    i--;
    if (i == -1) {
        i = v.length - 1;
    }
    document.querySelectorAll(".slider_button_middle div")[i].style.border = "3px solid white"
    document.querySelectorAll(".slider_button_middle div")[i].style.boxSizing = "border-box"
    document.getElementById("slider").style.background = "url(" + v[i].src + ")";
    document.getElementsByClassName("title1")[0].innerHTML = headings[i][0];
    document.getElementsByClassName("title2")[0].innerHTML = headings[i][1];
    document.getElementsByClassName("title3")[0].innerHTML = headings[i][2];
    document.getElementsByClassName("title4").innerHTML = headings[i];

}
function changeCover(i) {
    var imgSrc = i.getElementsByTagName("img")[0].src;
    document.getElementById("slider").style.background = "url(" + imgSrc + ")"
}



function abc() {
    console.log("abc")
    var x = document.getElementById("abc");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
         console.log("frame")
        if (pos == 45) {
            clearInterval(id);
             console.log("if")
        } else {
            pos++;
            x.style.marginTop = pos + "px";
            x.style.color="red"
            console.log("else")
        }
    }

}



window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300 ) {
        document.getElementById("services").className = "slideUp";
    }
}








