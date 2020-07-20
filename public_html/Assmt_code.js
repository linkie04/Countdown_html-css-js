

   var electDate = new Date("May 8, 2021 17:00:00").getTime(); //sets the deadline date
   
   try {
   var timer = setInterval(function() //function to initiate the countdown
{ 
 
let start = new Date().getTime(); //takes current date
let diff = electDate - start;     //find the remaining time 
let days = Math.floor(diff / (1000 * 60 * 60 * 24));                  //finds the number of days
let hours = Math.floor((diff%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); //converts the time in seconds to hours
let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));     //"   "  "                     to minutes
let seconds = Math.floor((diff % (1000 * 60)) / 1000);                 //"  " "                      to seconds    

  if (diff < 0){
        clearInterval(timer);
        document.getElementById("timer-days").innerHTML = '0' + "<span class='label'>days</span>";
        document.getElementById("timer-hours").innerHTML = '0' + "<span class='label'>hrs</span>";
        document.getElementById("timer-min").innerHTML = '0' + "<span class='label'>mins</span>";
        document.getElementById("timer-sec").innerHTML = '0' + "<span class='label'>seconds</span>"; 
        document.getElementById("status").style.fontSize="10px";
        document.getElementById("status").innerHTML = "ELECTIONS ARE OVER!";
   }
 //set the font size of the display according to the days remaining till deadline
 //also displays the time remaining in a count down timer
      else if (days < 500 && days > 365) { 
         document.getElementById("timer-days").innerHTML = days + "<span class='label'>days</span>";
        document.getElementById("timer-hours").innerHTML = hours + "<span class='label'>hrs</span>";
        document.getElementById("timer-min").innerHTML = minutes + "<span class='label'>mins</span>";
        document.getElementById("timer-sec").innerHTML = seconds + "<span class='label'>seconds</span>";
        document.getElementById("status").style.fontSize="24px";
        document.getElementById("status").innerHTML = days + " DAYS TO GO!";

    }
    
    else if (days < 365 && days > 200) {
        document.getElementById("timer-days").innerHTML = days + "<span class='label'>days</span>";
        document.getElementById("timer-hours").innerHTML = hours + "<span class='label'>hrs</span>";
        document.getElementById("timer-min").innerHTML = minutes + "<span class='label'>mins</span>";
        document.getElementById("timer-sec").innerHTML = seconds + "<span class='label'>seconds</span>";
        document.getElementById("status").style.fontSize="30x";
        document.getElementById("status").innerHTML = days + " DAYS TO GO!";
        

       
    }
    
    else if (days < 200 && days > 100) {
        
        document.getElementById("timer-days").innerHTML = days + "<span class='label'>days</span>";
        document.getElementById("timer-hours").innerHTML = hours + "<span class='label'>hrs</span>";
        document.getElementById("timer-min").innerHTML = minutes + "<span class='label'>mins</span>";
        document.getElementById("timer-sec").innerHTML = seconds + "<span class='label'>seconds</span>";
        document.getElementById("status").style.fontSize="36px";
        document.getElementById("status").innerHTML = days + " DAYS TO GO!";
 
    }
    
    else if (days < 100 && days > 50) {
        
         document.getElementById("timer-days").innerHTML = days + "<span class='label'>days</span>";
        document.getElementById("timer-hours").innerHTML = hours + "<span class='label'>hrs</span>";
        document.getElementById("timer-min").innerHTML = minutes + "<span class='label'>mins</span>";
        document.getElementById("timer-sec").innerHTML = seconds + "<span class='label'>seconds</span>";
        document.getElementById("status").style.fontSize="42px";
        document.getElementById("status").innerHTML = days + " DAYS TO GO!";

       
    }
    
    else if (days < 50 && days > 10) {
        
         document.getElementById("timer-days").innerHTML = days + "<span class='label'>day(s)</span>";
        document.getElementById("timer-hours").innerHTML = hours + "<span class='label'>hr(s)</span>";
        document.getElementById("timer-min").innerHTML = minutes + "<span class='label'>min(s)</span>";
        document.getElementById("timer-sec").innerHTML = seconds + "<span class='label'>sec(s)</span>";
        document.getElementById("status").style.fontSize="52px";
        document.getElementById("status").innerHTML = days + " DAYS TO GO!";

        
    }
    
    else if (days < 10 && days > 1) {
        
        document.getElementById("timer-days").innerHTML = days + "<span class='label'>days</span>";
        document.getElementById("timer-hours").innerHTML = hours + "<span class='label'>hs</span>";
        document.getElementById("timer-min").innerHTML = minutes + "<span class='label'>mins</span>";
        document.getElementById("timer-sec").innerHTML = seconds + "<span class='label'>seconds</span>";
        document.getElementById("status").style.fontSize="65px";
        document.getElementById("status").innerHTML = days + " DAYS TO GO!";

      
    }
    
    else if (days < 2 && days > 1) {
        
        document.getElementById("timer-days").innerHTML = days + "<span class='label'>days</span>";
        document.getElementById("timer-hours").innerHTML = hours + "<span class='label'>hrs</span>";
        document.getElementById("timer-min").innerHTML = minutes + "<span class='label'>mins</span>";
        document.getElementById("timer-sec").innerHTML = seconds + "<span class='label'>seconds</span>";
        document.getElementById("status").style.fontSize="100px";
        document.getElementById("status").innerHTML = days + " FINAL DAY TO VOTE!";

       
    }

 else if (days === 0){
        document.getElementById("timer-days").innerHTML = days + "<span class='label'>days</span>";
        document.getElementById("timer-hours").innerHTML = hours + "<span class='label'>hrs</span>";
        document.getElementById("timer-min").innerHTML = minutes + "<span class='label'>mins</span>";
        document.getElementById("timer-sec").innerHTML = seconds + "<span class='label'>seconds</span>";
        document.getElementById("status").style.fontSize="20px";
        document.getElementById("status").innerHTML = days + " VOTING IS NOW CLOSED";

 }
 
 
   },1000);//function returns a value every 1000 milliseconds
   }
   catch (err) {alert(err.message);
    
}



    





