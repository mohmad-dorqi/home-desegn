let brgr =  document.getElementById("ham")
let sd = document.getElementById("vv")
let khroj = document.getElementById("exit")
brgr.addEventListener("click",function(){
   brgr.classList.toggle("brgr");
   sd.classList.remove("ss");
  sd.classList.toggle("sidee");
  
})

khroj.addEventListener("click",function(){
    brgr.classList.toggle("brgr");
    sd.classList.toggle("sidee");
    sd.classList.add("ss");
})


