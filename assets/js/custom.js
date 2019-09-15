// equal box height jquery code
equalheight = function (container) {

	var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = new Array(),
		$el,
		topPosition = 0;
	$(container).each(function () {

		$el = $(this);
		$($el).height('auto')
		topPostion = $el.position().top;

		if (currentRowStart != topPostion) {
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0; // empty the array
			currentRowStart = topPostion;
			currentTallest = $el.height();
			rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}
		for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
}

// Hamburger
$('.navbar-toggler-icon').click(function () {
	$(this).toggleClass('navbar-toggler-icon-open');
});

// Menu  Dropdown
$(document).ready(function () {
	// Mobile menu JS
	$('.dropdown-toggle span.fa').click(function () {
		$(this).parent('.dropdown-toggle').next('.dropdown-menu').toggleClass("d-block");
		$(this).toggleClass("fa-minus");
	});

	// Counter Up JS
	$('.counter').counterUp({
		delay: 50,
		time: 1000
	});

	// content slider initialization
	$('.content-slider').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 1500,
		cssEase: 'linear'
	});

	// dropdown main link prevent default
	$(".dropdown .dropdown-toggle .fa-plus").click(function (e) {
		$('.dropdown .dropdown-toggle').click(function (e) {
			e.preventDefault();
			$(this).unbind(e);
		});
	});

	// get quote initialization
	$(".get-quote-link").click(function (e) {
		e.preventDefault();
		$('body').addClass('get-quote-active');
	});

	// close get quote from
	$(".close-get-quote").click(function () {
		$('body').removeClass('get-quote-active');
	});
});

$(window).load(function () {
	equalheight('.services-box, .blog-links-sec .content-list-box');
});


$(window).resize(function () {
	equalheight('.services-box, .blog-links-sec .content-list-box');
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("site-navigation");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}