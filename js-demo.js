/*
   JS Activity Clock
   Name:Angel Ramos
   Date:4/5/22   

   function getWeekday(dayNum)
      Returns the text of the day of the week where dayNum
      is the number of the week from 0 (Sunday) to 6 (Saturday)
*/
runClock();
setInterval("runClock"()",1000);

Function runClock(){
var thisDay=new Date();
var this Date=thisDay.toLocaleDateString();
var thisDayNum = thisDay.getDay();
var thisWeekDay = getWeekday(thisDayNum);
var thisTime = thisDay.toLocaleTimeString();
}

document.getElementbyId("date").textContent= thisDate;
document.getElemetbyId("wday").textContent= thisWeekday;
document.getElementbyId("time").textContent=thisTime;
}
function getWeekday(dayNum){
var wDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];