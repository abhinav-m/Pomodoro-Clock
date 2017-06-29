$(document).ready(function() {
	
	
		var currentBreak = 												Number($("#breakVal").html());
	
		var currentLength = 												Number($("#lengthVal").html());
			
			$("#minutesScreen").html(currentLength);
			$("#secondsScreen").html('00');
	
	$("#breakPlus").click(function(){
		currentBreak+=1;	
		$("#breakVal").html(currentBreak);		
	});
	
	$("#breakMinus").click(function(){
		currentBreak-=1;	
		$("#breakVal").html(currentBreak);	
	});
	
	$("#lengthPlus").click(function(){
		currentLength+=1;	
		$("#lengthVal").html(currentLength);	
		$("#minutesScreen").html(currentLength);
	});
	
	$("#lengthMinus").click(function(){
		currentLength-=1;	
		$("#lengthVal").html(currentLength);	
		$("#minutesScreen").html(currentLength);
	});
	
	$("#startBtn").click(function(){
		var minutes = currentLength-1;
		var seconds = 60;
		
		setTimeout(function(){
			$("#minutesScreen").html(minutes);
		},1000);
		
			function decSeconds(){
			if(seconds===0){
				seconds=60;	
			}
			else{
				seconds--;
				$("#secondsScreen").html(seconds);
			}
		}	
		function decMinutes(){
			if(minutes>0){
			minutes--;
			$("#minutesScreen").html(minutes);
			}
			else{
				minutes=0;
			}
		}
		var secondsTimer = setInterval(decSeconds,1000);
      var minutesTimer =		setInterval(decMinutes,60000);
		
	});

	
});