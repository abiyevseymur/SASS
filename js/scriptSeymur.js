
var n = 0;
var left = document.getElementsByClassName('gallery');
var pic = document.getElementsByClassName('pic');
//SLIDER gallery
document.getElementsByClassName('button')[0].addEventListener('click', function () {
    if (n == (document.getElementsByClassName('pic').length - 4) * 292.5) {
        n = 0;
        left[0].style.transition = 'all 1.5s'
        left[0].style.right = n + "px"
    }
    else {
        n = n + 292.5;
        left[0].style.transition = '0.3s ease-in'
        left[0].style.right = n + "px";
    }
})



document.getElementsByClassName('button')[1].addEventListener('click', function () {
    if (n > 0) {
        n = n - 292.5;
        left[0].style.transition = 'all 0.3s'
        left[0].style.right = n + "px";
    }
    else if (n == 0) {
        n = (document.getElementsByClassName('pic').length - 4) * 292.5;
        left[0].style.transition = 'all 1.5s'
        left[0].style.right = n + "px"
    }
})
// HOVER black background
for (i = 0; i < (pic.length); i++) {
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    div.setAttribute("class", "layot");
    pic[i].appendChild(div);
    var layot = document.getElementsByClassName('layot');
    layot[i].style.fontSize = '50px';
    layot[i].innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
    div1.setAttribute("class", "titleName");
    layot[i].appendChild(div1);
    var title = document.getElementsByClassName('titleName');
    title[i].innerHTML = '<h1>Ginger Beast</h1>'
    layot[i].addEventListener('mouseover', function (event) {
        this.style.background = 'black';
        this.style.opacity = '0.8';
        this.style.transition = '0.5s ease-in-out';
        this.getElementsByTagName('i')[0].style.transition = 'all 0.2s ease-out';
        this.getElementsByTagName('i')[0].style.bottom = '30%';
        this.getElementsByTagName('i')[0].style.opacity = '0.8';
        this.getElementsByTagName('h1')[0].style.top = '30%';
        this.getElementsByTagName('h1')[0].style.opacity = '1';
    });
    layot[i].addEventListener('mouseout', function () {
        this.style.background = 'transparent';
        this.getElementsByTagName('i')[0].style.bottom = '0%';
        this.getElementsByTagName('i')[0].style.opacity = '0';
        this.getElementsByTagName('h1')[0].style.top = '0%';
        this.getElementsByTagName('h1')[0].style.opacity = '0';
    });
}
//team SLIDER
var m = 0
var team = document.getElementsByClassName('team');
document.getElementsByClassName('button')[2].addEventListener('click', function () {
    if (m == (team[0].getElementsByTagName('img').length - 3) * 390) {
        m = 0;
        team[0].style.transition = 'all 1.5s'
        team[0].style.right = m + "px"
    }
    else {
        m = m + 390;
        team[0].style.transition = '0.3s ease-in'
        team[0].style.right = m + "px";
    }
})
document.getElementsByClassName('button')[3].addEventListener('click', function () {
    if (m > 0) {
        m = m - 390;
        team[0].style.transition = 'all 0.3s'
        team[0].style.right = m + "px";
    }
    else if (m == 0) {
        m = (team[0].getElementsByTagName('img').length - 3) * 390;
        team[0].style.transition = 'all 1.5s'
        team[0].style.right = m + "px"
    }
})

//points SLIDER
// remove .points i and .points i:child..
// div contenttextss yarat contenttext altinda
var point = document.getElementsByClassName('points')[0].getElementsByTagName('i');
var contenttextss = document.getElementsByClassName('contenttextss');

point[0].addEventListener('click', function (event) {
    contenttextss[0].style.right = 0 + 'px';
    for (i = 0; i < contenttextss[0].childElementCount; i++) {
        point[i].style.background = 'transparent';
    }
    this.style.background = 'black';
})
point[1].addEventListener('click', function (event) {
    contenttextss[0].style.right = 1170 + 'px';
    for (i = 0; i < contenttextss[0].childElementCount; i++) {
        point[i].style.background = 'transparent';
    }
    this.style.background = 'black';
})
point[2].addEventListener('click', function (event) {
    contenttextss[0].style.right = 2340 + 'px';
    for (i = 0; i < contenttextss[0].childElementCount; i++) {
        point[i].style.background = 'transparent';
    }
    this.style.background = 'black';
})
// porfolio HOVER

for (i = 0; i < 3; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "layots");
    document.getElementsByClassName('photosecond')[i].appendChild(div);
    var layot = document.getElementsByClassName('layots');
    layot[i].style.fontSize = '70px';
    layot[i].innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
    layot[i].addEventListener('mouseover', function (event) {
        this.getElementsByTagName('i')[0].style.bottom = '40%';
        this.getElementsByTagName('i')[0].style.opacity = '1';
        this.style.background = 'black';
        this.style.opacity = '0.8';
        this.style.transition = '0.5s ease-in-out';
    });
    layot[i].addEventListener('mouseout', function () {
        this.style.background = 'transparent';
        this.getElementsByTagName('i')[0].style.bottom = '0%';
        this.getElementsByTagName('i')[0].style.opacity = '0';
    });
}
//HOVER our team 
for (i = 0; i < (document.getElementsByClassName('team')[0].childElementCount); i++) {
  
    var layot = document.getElementsByClassName('layotteam');
    layot[i].getElementsByTagName('i')[0].style.padding = '20px 24px';
    layot[i].addEventListener('mouseover', function (event) {
        this.style.background = 'black';
        this.style.opacity = '0.8';
        this.style.transition = '0.5s ease-in-out';
        for (j = 0; j < 3; j++) {
            this.getElementsByTagName('i')[j].style.transition = 'all 0.2s ease-out';
            this.getElementsByTagName('i')[j].style.marginTop = '200px';
            this.getElementsByTagName('i')[j].style.opacity = '1';
        }
        this.getElementsByTagName('i')[2].style.marginTop = '200px';
        this.getElementsByTagName('i')[2].style.opacity = '1';
        this.getElementsByTagName('h1')[0].style.top = '30%';
        this.getElementsByTagName('h1')[0].style.opacity = '1';
        this.getElementsByTagName('h5')[0].style.top = '40%';
        this.getElementsByTagName('h5')[0].style.opacity = '1';
    });
    layot[i].addEventListener('mouseout', function () {
        this.style.background = 'transparent';
        for (j = 0; j < 3; j++) {
            this.getElementsByTagName('i')[j].style.transition = 'all 0.2s ease-out';
            this.getElementsByTagName('i')[j].style.marginTop = '300px';
            this.getElementsByTagName('i')[j].style.opacity = '0';

        }
        this.getElementsByTagName('i')[2].style.marginTop = '300px';
        this.getElementsByTagName('i')[2].style.opacity = '0';
        this.getElementsByTagName('h1')[0].style.top = '0%';
        this.getElementsByTagName('h1')[0].style.opacity = '0';
        this.getElementsByTagName('h5')[0].style.top = '0%';
        this.getElementsByTagName('h5')[0].style.opacity = '0';
    });
}