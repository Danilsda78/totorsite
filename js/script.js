$(document).ready(function () {
	$('.header-byrger').click(function (event) {
		$('.header-byrger, body, .heder__menu').toggleClass('active');
	});
	$(".heder__menu").on("click", "a", function (event) {
		event.preventDefault();
		let id = $(this).attr('href');
		let top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1000);
	});
	// slider
	$('.slider').slick({
		dots: false,
		adaptiveHeight: false,
		slidesToShow: 3,
		slidesToScroll: 2,
		speed: 500,
		easing: 'ease',
		infinity: true,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		centerMode: true,
		variableWidth: true,
	});
	// ======
});