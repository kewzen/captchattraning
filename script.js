let resulttimes = 0;
let number = 1000
let counter = 0
let captcharigh = false;    
let statustimer = false;
let s = 0
let mi = 0
var capt = document.getElementById("captcha")


const seconds = () =>{
    
}


const timer = () =>{
 mi = mi +  10 
 if (mi == 1000 || mi > 1000){
    s++
    mi = mi - 1000
 }

  resulttimes = s +"."+mi


}



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    number = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  let conv = 0
  





var inttimer;


  const captcha = () =>{
  

   
        
    var vis = document.getElementById("captcha")

 
   
   var elem = document.getElementById("result")
    
    vis.style.display = "block"
    elem.style.display = "block"
    var inp = document.getElementById("inp")
   inp.focus();
  
    if (vis.style.display == "block"){
        inttimer = setInterval(timer,10)
    }
    

    while (counter < 4){
        counter = counter  + 1
    }
        var arr = new Array(); 
        var arr = [number]
        conv = arr
        conv = String(conv)
        conv = conv + '0'
        
       getRandomInt(1111,9999)
        
      

       var elem = document.getElementById("captchanum")
       elem.textContent = conv 

}
window.onload = () =>{
    while (vis.style.display == "none"){
        clearInterval(inttimer)
        console.log("puk")
    }
}



const ch = e =>{
   
    if (e.value == 'n' || e.value == 'т')
    {
        e.value = ''
    } 

  
}
const submitcaptcha = ()  =>{
    var elem = document.getElementById("result")
    var vis = document.getElementById("captcha")
    var answ = document.getElementById("inp")
    var elem2 = document.getElementById("result")
     clearInterval(inttimer)
     vis.style.display = "none"
     elem.style.display = "block"

   
    console.log(mi)
    elem2.textContent = answ.value + "|" +conv
    document.getElementById("resulttime").textContent = resulttimes
     answ.value = ""
     if (s > 0 || mi > 0 || resulttimes > 0){
     s = 0
     mi = 0
     resulttimes = 0
     }
     conv = ""

   
  
   
}



 

document.addEventListener('keydown', function(event){
    if (event.keyCode == 78){
        captcha()
        
    }
    if (event.keyCode == 13){
        submitcaptcha()
       
    }
    // console.log('Key: ', event.key);
    // console.log('keyCode: ', event.keyCode);
});

console.log(number)
window.onload = () =>{
}

