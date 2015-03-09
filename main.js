$(document).ready(function(){
    $("#show").click(function(){
        $("#photos").show();
    });
});

$(function(){
	$(".thumbnail").hover(function(){
   		$(this).stop().animate({"opacity": "1"}); 
	}, function(){
   		$(this).stop().animate({"opacity": "0.5"});
	});

	$("img.thumbnail").on("click", function() {
		var imgTag = "<img class='focused' src='" + this.src + "'>";
		$("#lightbox").show();
		$("body").append(imgTag);
		$("body").addClass("noscroll");
	});
	$("#lightbox").on("click", function() {
		$(this).hide();
		$(".focused").remove();
		$("body").removeClass("noscroll");
	});
});
