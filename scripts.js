// $(function () {
//   $('.nav-open').click(function () {
//     $('.nav').toggleClass('')
//   });
// });

$(function() {
  $(".menu").click(function() {
    if ($("#navigation").hasClass("hidden")) {
      $("#navigation").attr("class", "visible animated slideInLeft");
    } else {
      $("#navigation").attr("class", "hidden animated slideOutLeft");
    }
    $(this).toggleClass("open");
  });

  $("#navigation").click(function() {
    if ($("#navigation").hasClass("visible")) {
      $(".menu").toggleClass("open");
    } else {
    }
    $(this).attr("class", "slideOutLeft hidden");
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      if ($("#navigation").hasClass("visible")) {
        $(".menu").toggleClass("open");
      } else {
      }
      $("#navigation").attr("class", "slideOutLeft hidden");
    }
  });
});

$(document).ready(function(){
	$('.menu li a').click(function () { // 1
		elementClick = $(this).attr('href');
		destination = $(elementClick).offset().top;
		$('body,html').animate({scrollTop: destination }, 1400);
	});
});