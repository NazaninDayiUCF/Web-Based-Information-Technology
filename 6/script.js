 


$("tr:not(:has(th))").hover(function(){
	
	$(this).css("background-color", "yellow");
	$(this).css("color","red");
	/*
	b = $(this).children();
	i = 0;
	for(i=0; i<b.length; i++){
		$(b[i]).css("color", "red");
	}*/
	
},




	function(){
		$(this).css("background-color", "");
		$(this).css("color","");
		/*b = $(this).children();
		i = 0;
		for(i=0; i<b.length; i++){
			$(b[i]).css("color", "");
		}*/
	}
);



$('#first-name').on('input', function() {
	var input=$(this);
	var is_name=input.val();
	if(is_name){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

function writeDateAndTime()
{
	document.write("Today is: " + Date());
};

$('#phone').on('input', function() {
	var input=$(this);
	var is_name=input.val();
	if($.isNumeric(is_name)){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

$('#email').on('input', function() {
	var input=$(this);
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=re.test(input.val());
	if(is_email){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});