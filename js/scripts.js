$(function(event){
	$("#submit").click(function(event){
		event.preventDefault();
		var sentance = $("#sentance").val();
		var num = parseInt(sentance);
		interate(num);
	});
});

function interate(input){
		var ouput = "";
		for(i=1; i<input+1; i++){
			if(i%3===0 && i%5!=0){
				output="ping";
			}
			else if(i%5===0 && i%3!=0){
				output="pong";
			}
			else if(i%5===0 && i%3===0){
				output="pingpong";
			}
			else{
				output= i.toString();
			}
			var str = output;
			$("#list").append("<li>"+str+"</li>");
	};
};