


var buttone = document.getElementById("openUrl");

buttone.addEventListener("click", function(){ 

	var url = document.getElementById("myTextarea").value;
	window.open(url,"_blank"); 
});
