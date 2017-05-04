$(function(){
	
	var navToggle = $("#nav-toggle");
	var navbarBody = $(".navbar-body");
	
	/* Hides or Shows navigation list menu on click */ 
	navToggle.on("click", function(){
		/* Callback method that does hide & show toggle */
		navbarBody.toggle("slow");
	});

});