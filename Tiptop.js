
$(function(){

$("#partie-1").hide();
$("#partie-2").hide();
$("#partie-3").hide();
$("#partie-4").hide();
$("#partie-5").hide();
$("#text1").hide();
$("#text2").hide();
$("#Bnote1").hide();
$("#Bnote2").hide();
$("#Bnote3").hide();

$("#premier").on({	mouseenter:function(){$("#premier").css("color","red");},
					mouseleave:function(){$("#premier").css("color","black");},
					click:function(){$("#partie-1").slideToggle(500);}	})

$("#deuxieme").on({	mouseenter:function(){$("#deuxieme").css("color","red");},
					mouseleave:function(){$("#deuxieme").css("color","black");},
					click:function(){$("#partie-2").slideToggle(500);}	})

$("#troisieme").on({	mouseenter:function(){$("#troisieme").css("color","red");},
					mouseleave:function(){$("#troisieme").css("color","black");},
					click:function(){$("#partie-3").slideToggle(500);}	})

$("#quatrieme").on({	mouseenter:function(){$("#quatrieme").css("color","red");},
					mouseleave:function(){$("#quatrieme").css("color","black");},
					click:function(){$("#partie-4").slideToggle(500);}	})

$("#cinquieme").on({	mouseenter:function(){$("#cinquieme").css("color","red");},
					mouseleave:function(){$("#cinquieme").css("color","black");},
					click:function(){$("#partie-5").slideToggle(500);}	})
//---------------------------------------------------------------------------------

$("#prr1").click(function(){
		$("#text1").slideToggle(1000);
	$("#Bnote1").hide(1000);})

$("#bloc-note").click(function(){
		$("#Bnote1").slideToggle(1000);
	$("#text1").hide(1000);})

$("#bloc-note2").click(function(){
		$("#Bnote2").slideToggle(1000);})
	
$("#bloc-note3").click(function(){
		$("#Bnote3").slideToggle(1000);})

})