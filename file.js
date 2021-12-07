function sample(){
   var mydate =new Date();
   document.querySelector(".realtime").textContent=mydate.getHours()+":"+mydate.getMinutes()+":"+mydate.getSeconds();
}

setInterval(sample,1000);