$(document).ready(function(){
	$("#contact-button").mouseenter(function(){
		$(".dropdown-content").slideDown("slow");
	});
	$(".dropdown").mouseleave(function(){
		$(".dropdown-content").slideUp("slow");
	});
	$("li a").hover(function(){
    $(this).css("color", "#2A2C31");
	}, function(){
	$(this).css("color", "white");
	});
	$("#about-text-header").hover(function(){
    $(this).css("color", "#9A927B");
	}, function(){
	$(this).css("color", "white");
	});
	$("#people-text-header").hover(function(){
    $(this).css("color", "#9A927B");
	}, function(){
	$(this).css("color", "white");
	});
	$("#about-button").click(function(){
		$("#about-section").show();
	});
	$("#people-button").click(function(){
		$("#people-section").show();
	});
	$("#about-button").click(function(){
		$("#people-section").hide();
	});
	$("#people-button").click(function(){
		$("#about-section").hide();
	});
});
