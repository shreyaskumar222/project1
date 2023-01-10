window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonlay = document.getElementById('button-lay');
    var buttonstop = document.getElementById('button-stop');
    var Interval ;
    var appendTens1 = document.getElementById("tens1")
    var appendSeconds1 = document.getElementById("seconds1")
 
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
       buttonstop.style.visibility = "visible";
       buttonlay.style.visibility = "visible"

      
       tens = "00";
         seconds = "00";
       appendTens1.innerHTML = tens;
         appendSeconds1.innerHTML = seconds;
   
       
    }
    
      buttonlay.onclick = function() {
     
         //clearInterval(Interval);
         document.getElementById("seconds1").innerHTML =     appendSeconds.innerHTML = seconds;
          document.getElementById("tens1").innerHTML =    appendTens.innerHTML = tens;
      
    }
    
  
    buttonstop.onclick = function() {
      document.getElementById("seconds1").innerHTML =     appendSeconds.innerHTML = seconds;
      document.getElementById("tens1").innerHTML =    appendTens.innerHTML = tens;
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;

       
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

