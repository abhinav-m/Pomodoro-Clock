$(document).ready(function() {

/* Always best to break code down in individual modules , 
seperate functions  logically according to functionality */

//Variables declared here will are global to the document 
 var shortBreak;
 var longBreak;
 var workDuration;
 var cycleNumber;
 var displayScreen;
 var timerFunc;
 var clockStarted;
 var isPaused;

//Set the default values of everything on page load
  setDefault();

});

/* Helper function to set default 
 values of variables, and initialise 
 all functions on page load */
function setDefault() {
 setWorkDuration(25);
 setBreakDuration(5);
 setDisplay(workDuration,"00");
 cycleNumber = 0;
 isPaused = false;
 initialiseFunctions();
 clockStarted = false;

}

/*Helper function for setting work duration
specified in minutes */
function setWorkDuration(minutes) {
 workDuration = minutes;
}

/*Helper function for setting break duration
specified in minutes */
function setBreakDuration(minutes) {
 shortBreak = minutes;
 longBreak = shortBreak * 2;
}

function setDisplay(minutes, seconds) {
$("#minutesScreen").html(minutes);
$("#secondsScreen").html(seconds);
}

/*Helper function for initialising the click
  methods of various buttons etc */
function initialiseFunctions() {
//Add click method for changing the break length
$("#breakPlus").click(changeBreak);
$("#breakMinus").click(changeBreak);	
//Add click method for changing the work length
$("#lengthPlus").click(changeWork);
$("#lengthMinus").click(changeWork);	
//Add click method for changing the work length
$("#startBtn").click(startClock);
//For pause functionality
$("#screen").click(pauseClock);
}

function changeBreak() {
var buttonPressed = this.id;
switch(buttonPressed)
{
 case "breakPlus": if(shortBreak+1 <= 30)
				   setBreakDuration(shortBreak+1);
				   break;
				   
 case "breakMinus": if(shortBreak-1 >= 1)
				   setBreakDuration(shortBreak-1);
				   break;
}
$("#breakVal").html(shortBreak);	
}

function changeWork() {
var buttonPressed = this.id;

switch(buttonPressed)
{
 case "lengthPlus": if(workDuration+1 <= 90)
				   setWorkDuration(workDuration+1);
				   break;
				   
 case "lengthMinus": if(workDuration-1 >= 15)
				   setWorkDuration(workDuration-1);
				   break;
 
}
$("#lengthVal").html(workDuration);	

if(!clockStarted)
setDisplay(workDuration,"00");
}

function startClock() {
 // clearInterval(timerFunc);
  clockStarted = true;
  cycleNumber++;
  minutes = workDuration;
  seconds = -1;
  
  timerFunc = setInterval(function() {

  //For pausing timer, if needed.
  if(!isPaused)
  {

  //Convert minutes and seconds to integer
  minutes = parseInt(minutes);
  seconds = parseInt(seconds);
  //When current minute finishes
  if(minutes>0&&seconds==-1)
  {
  seconds = 59;
  minutes = parseInt(minutes)-1;
  }

  //Convert to string and beautify
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  //Finally, set display 
  setDisplay(minutes,seconds);
  seconds--;
  
  //When current period finishes
  if(minutes==0&&seconds==-1)
  {
  	cycleNumber++;
  	if(cycleNumber%2==0)
  	{
  	if(cycleNumber%8==0)
  	minutes = longBreak;
  	else
  	minutes = shortBreak;
 	 }
  else
  minutes = workDuration;
  }
  }
   }, 1000);

}

function pauseClock() {
 if(clockStarted)
 {
 if(isPaused)
 isPaused = false;
 else
 isPaused = true;
 }

}

	
