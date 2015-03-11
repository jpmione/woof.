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
		$(".big").remove();
		var imgTag = "<img class='big' src='" + this.src + "'>";
		$("#lightbox").show();
		$("body").append(imgTag);
		$("body").addClass("noscroll");

		$(".big").on("click", function() {
			$(".big").remove();
		});
	});
	

	$("#lightbox").on("click", function() {
		$(this).hide();
		$(".big").remove();
		$("body").removeClass("noscroll");
	});
});