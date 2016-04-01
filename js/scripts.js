$(function(event){
	$("#submit").click(function(event){
		event.preventDefault();
		var sentance = $("#sentance").val();
		var num = parseInt(sentance);
		if(num%3===0 && num%5!=0){
			output="ping";
		}
		else if(num%5===0 && num%3!=0){
			output="pong";
		}
		else if(num%5===0 && num%3===0){
			output="pingpong";
		}
		else{
			output= sentance.toString();
		}
		var str = output;
		$("#list").prepend("<li>"+str+"</li>");
		});
});