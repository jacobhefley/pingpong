$(function(event){
	$("#submit").click(function(event){
		event.preventDefault();
		var sentance = $("#sentance").val();
		var array;

		var arrayS = sentance.split("");
		var arrayOfVowels = ["a", "i", "e", "o", "u", "y"];

		for (var i = 0; i < arrayS.length; i++){
			for (var x = 0; x < arrayOfVowels.length; x++){
				if(arrayS[i] === arrayOfVowels[x]){
					arrayS[i] = "-";
				}
			}
		}
		var str = arrayS.join("");
		$("#list").prepend("<li>"+str+"</li>");
		});
		

});