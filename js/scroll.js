

$(document).ready(function() {
	$('#first').addClass('scrollNav');
	});
	
	
	
//Once the #blogRoll element is scrolled a certain amount i.e 200px, I want to remove the class from the one element and add the class to the next element.	


$('#blogRoll').on("scroll", [200], function() {
    
	$('#first').removeClass('scrollNav');
	$('#second').addClass('scrollNav');
	

});
