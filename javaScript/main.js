


let timervalue = document.getElementsByClassName("timerVale")[0]
let clicktime;
        


    function timer_btn(){
        let runtime = 60;
    clicktime = setInterval(function() {
                  
   console.log(runtime= runtime-1)
   timervalue.innerText = runtime


   
   if(runtime == 0)
   {
            clearInterval(clicktime)

   }  

   
},1000) }


function timer_stop(){
    if('click'){
       timervalue.innerText="00";
    clearInterval(clicktime)

    }
}