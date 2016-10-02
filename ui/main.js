console.log('Loaded!');
var numm = 1;
var nnum = 1;

function time(){
   var sec = document.getElementById("sec");
   sec.innerHTML = nnum;
   nnum++;
   if(nnum == 19){
      document.getElementById("btn").style = "display: inline-block;";
document.getElementById("sur").innerHTML = "here it is!";
   }
}
function change(){
   var num = document.getElementById("num");
   if(numm <= 100){
   num.innerHTML = numm;
   numm++;
   }else{
      document.getElementById("all").style = "display:none;";

document.getElementById("text").style = "display:inline-block;";
 document.getElementById("body").style.background = "#ff9999";
 
setTimeout(function(){
document.getElementById("body").style.background = "#9999ff";}, 5000);
}};
setInterval(time, 1000);
setInterval(change, 100);
function rerun(){
document.getElementById("btn").style = "display: none;";
document.getElementById("all").style = "display:flex;";
document.getElementById("text").style = "display:none;";
document.getElementById("sur").innerHTML = "Wait for a surprise";
    numm = 1;
    nnum = 1;
    
}