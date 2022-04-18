

var  slide = document.getElementsByClassName("slider");
let dot = document.getElementsByClassName('dot');
let prev = document.querySelector('.prev');
let next = document.querySelector(".next")

 let n = 0;
let i;
function deni(){

  for(i=0 ; i<slide.length; i++){

    slide[i].style.display="none";
  }
 
}
function no(){

  for(i=0; i< dot.length; i++){
    dot[i].classList.remove("active");
  }
}
 next.addEventListener("click",function(e){

   e.preventDefault();
   n++;
   if(n>slide.length-1){
     n=0;
   }
   deni();
   no();
   slide[n].style.display ="block";

   dot[n].classList.add("active");




    
 })
 prev.addEventListener("click",function(e){

  e.preventDefault();
  n--
  if(n<0){
    n=slide.length-1;
  }
  deni();
  no();
  slide[n].style.display ="block";

  dot[n].classList.add("active");




   
})
setInterval(function(){

  n++;
  if(n>slide.length-1){
    n=0;
  }
  deni();
  no();
  slide[n].style.display ="block";

  dot[n].classList.add("active");

},3000)

let login = document.getElementById("log");
let btn = document.getElementById("btn");

btn.addEventListener("click",function(){

  login.classList.toggle("lg");
})
let log_exeit= document.getElementById("log2")

log_exeit.addEventListener('click',function(){

 login.classList.toggle("lg");
 //login.classList.remove("lg")
})