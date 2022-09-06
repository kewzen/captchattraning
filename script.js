
let number = 1000
let counter = 0
let captcharigh = false;    




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    number = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  let conv = 0




 const captcha = () =>{
   var elem = document.getElementById("result")
    var vis = document.getElementById("captcha")
    vis.style.display = "block"
    elem.style.display = "block"
    var inp = document.getElementById("inp")
   inp.focus();
  
    
    

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
time = 0.000
}

const ch = e =>{
   
    if (e.value == 'n')
    {
        e.value = ''
    } 
}
const submitcaptcha = ()  =>{
    var elem = document.getElementById("result")
    var vis = document.getElementById("captcha")
    var answ = document.getElementById("inp")
    var elem2 = document.getElementById("result")
    if (answ.value == conv){
        captcharight = true
        
       
       

    }
    elem2.textContent = answ.value + "|" +conv

   
    answ.value = ""
    time = 0.000
    conv = ""
    vis.style.display = "none"
    elem.style.display = "block"
   
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

