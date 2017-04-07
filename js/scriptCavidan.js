
var a=document.getElementById('klick0');
var a1=document.getElementById('klick1');
var a2=document.getElementById('klick2');
var a3=document.getElementById('klick3');
var a4=document.getElementById('klick4');
var a5=document.getElementById('klick5');
var txt=document.getElementById('txt');
 var lip1= document.getElementById("lip1");
var lip2= document.getElementById("lip2");
var lip3= document.getElementById("lip3");
var lip4= document.getElementById("lip4");
var lip5= document.getElementById("lip5");
var lip6= document.getElementById("lip6");
function anime() {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 15);
  function frame() {
    if (pos == 30) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
    }
  }
}
document.getElementById("animate").addEventListener("click", function(e){
console.log(e.target)
})

function background(e){
  console.log(e)
a.style.background='white';
a1.style.background='transparent';
a2.style.background='transparent';
a3.style.background='transparent';
a4.style.background='transparent';
a5.style.background='transparent';
boldtxt.innerHTML='<b>Clean</b> Code';
txt.innerHTML='We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.';


  lip1.style.visibility="visible"; 
  lip2.style.visibility="hidden"; 
  lip3.style.visibility="hidden"; 
  lip4.style.visibility="hidden"; 
  lip5.style.visibility="hidden"; 
    lip6.style.visibility="hidden"; 
  var pos = 52;
  var id = setInterval(frame, 15);
  function frame() {
    if (pos == 30) {
      clearInterval(id);
    } else {
      pos--;
      lip1.style.bottom = pos + 'px';

    }
  } 
}


function background1(){
a.style.background='transparent';
a1.style.background='white';
a2.style.background='transparent';
a3.style.background='transparent';
a4.style.background='transparent';
a5.style.background='transparent';
boldtxt.innerHTML='<b>Technical</b> Support';
txt.innerHTML='We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.';
  lip1.style.visibility="hidden"; 
  lip2.style.visibility="visible"; 
  lip3.style.visibility="hidden"; 
  lip4.style.visibility="hidden"; 
  lip5.style.visibility="hidden"; 
    lip6.style.visibility="hidden";
  var pos = 52;
  var id = setInterval(frame, 15);
  function frame() {
    if (pos == 30) {
      clearInterval(id);
    } else {
      pos--;
      lip2.style.bottom = pos + 'px';

    }
  } 
}
function background2(){
a.style.background='transparent';
a1.style.background='transparent';
a2.style.background='white';
a3.style.background='transparent';
a4.style.background='transparent';
a5.style.background='transparent';
boldtxt.innerHTML='<b>Responsive</b>';
txt.innerHTML='We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.';

  lip1.style.visibility="hidden"; 
  lip2.style.visibility="hidden"; 
   lip3.style.visibility="visible";
  lip4.style.visibility="hidden"; 
  lip5.style.visibility="hidden"; 
    lip6.style.visibility="hidden";
 
  var pos = 52;
  var id = setInterval(frame, 15);
  function frame() {
    if (pos == 30) {
      clearInterval(id);
    } else {
      pos--;
      lip3.style.bottom = pos + 'px';

    }
  } 
}
function background3(){
a.style.background='transparent';
a1.style.background='transparent';
a2.style.background='transparent';
a3.style.background='white';
a4.style.background='transparent';
a5.style.background='transparent';
boldtxt.innerHTML='<b>Documentation</b>';
txt.innerHTML='We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.';

  lip1.style.visibility="hidden"; 
  lip2.style.visibility="hidden"; 
   lip3.style.visibility="hidden";
  lip4.style.visibility="visible"; 
  lip5.style.visibility="hidden"; 
    lip6.style.visibility="hidden";
 
  var pos = 52;
  var id = setInterval(frame, 15);
  function frame() {
    if (pos == 30) {
      clearInterval(id);
    } else {
      pos--;
      lip4.style.bottom = pos + 'px';

    }
  } 
}
function background4(){
a.style.background='transparent';
a1.style.background='transparent';
a2.style.background='transparent';
a3.style.background='transparent';
a4.style.background='white';
a5.style.background='transparent';
boldtxt.innerHTML='<b>Quality</b>';
txt.innerHTML='We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.';

  lip1.style.visibility="hidden"; 
  lip2.style.visibility="hidden"; 
   lip3.style.visibility="hidden";
  lip4.style.visibility="hidden"; 
  lip5.style.visibility="visible"; 
    lip6.style.visibility="hidden";
 
  var pos = 52;
  var id = setInterval(frame, 15);
  function frame() {
    if (pos == 30) {
      clearInterval(id);
    } else {
      pos--;
      lip5.style.bottom = pos + 'px';

    }
  } 
}
function background5(){
a.style.background='transparent';
a1.style.background='transparent';
a2.style.background='transparent';
a3.style.background='transparent';
a4.style.background='transparent';
a5.style.background='white';
boldtxt.innerHTML='<b>Support</b>';
txt.innerHTML='We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.';

  lip1.style.visibility="hidden"; 
  lip2.style.visibility="hidden"; 
   lip3.style.visibility="hidden";
  lip4.style.visibility="hidden"; 
  lip5.style.visibility="hidden"; 
    lip6.style.visibility="visible";
 
  var pos = 52;
  var id = setInterval(frame, 15);
  function frame() {
    if (pos == 30) {
      clearInterval(id);
    } else {
      pos--;
      lip6.style.bottom = pos + 'px';

    }
  } 
}

