
$(document).ready(function(){

	// $("#rumproast").click(function(){
	// $("#rumproastrecipe").slideToggle();
	// });
	$("#rumproast").click(function(){
		if ( $("#rumproastrecipe").css("display") == 'none')
			$ ("#rumproastrecipe").css("display","inline-block");
		else if( $("#rumproastrecipe").css("display") == "inline-block")
			$ ("#rumproastrecipe").css("display","none");
	});

	$("#ribs").click(function(){
		$("#ribsrecipe").slideToggle();
	});
	$("#chitlins").click(function(){
		$("#chitlinsrecipe").slideToggle();
	});
	$("#schnitzel").click(function(){
		$("#schnitzelrecipe").slideToggle();
	});


});
