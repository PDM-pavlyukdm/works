/*main-slider*/
$(document).ready(function () {
	$('.main-slider').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 10000,
	});
});
/*!main-slider*/



/*portfolio_carousel*/
var portfolio_carousel = $('.portfolio_carousel').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	centerMode: false,
	centerPadding: 0,
	arrows: true,
	prevArrow: `<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="12" viewBox="0 0 38 12">
  <path id="arrow2" class="cls-1" d="M131.669,1929.41v-0.5H169v0.5H131.669Zm-0.674-.32,0.352-.35,5.973,5.92-0.352.34Zm0.171-.04,0.361,0.36,6.12-6.06-0.361-.36Zm0.5,0.36v-0.5H169v0.5H131.669Zm-0.674-.32,0.352-.35,5.973,5.92-0.352.34Zm0.171-.04,0.361,0.36,6.12-6.06-0.361-.36Zm0.5,0.36v-0.5H169v0.5H131.669Zm-0.674-.32,0.352-.35,5.973,5.92-0.352.34Zm0.171-.04,0.361,0.36,6.12-6.06-0.361-.36Zm0.5,0.36v-0.5H169v0.5H131.669Zm-0.674-.32,0.352-.35,5.973,5.92-0.352.34Zm0.171-.04,0.361,0.36,6.12-6.06-0.361-.36Z" transform="translate(-131 -1923)"/>
</svg></button>`,
	nextArrow: `<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="12" viewBox="0 0 38 12">
  <path id="arrow_1" data-name="arrow 1" class="cls-1" d="M1233.33,1928.59v0.49H1196v-0.49h37.33Zm0.67,0.32-0.35.35-5.97-5.92,0.35-.35Zm-0.17.03-0.36-.35-6.12,6.06,0.36,0.35Zm-0.5-.35v0.49H1196v-0.49h37.33Zm0.67,0.32-0.35.35-5.97-5.92,0.35-.35Zm-0.17.03-0.36-.35-6.12,6.06,0.36,0.35Zm-0.5-.35v0.49H1196v-0.49h37.33Zm0.67,0.32-0.35.35-5.97-5.92,0.35-.35Zm-0.17.03-0.36-.35-6.12,6.06,0.36,0.35Zm-0.5-.35v0.49H1196v-0.49h37.33Zm0.67,0.32-0.35.35-5.97-5.92,0.35-.35Zm-0.17.03-0.36-.35-6.12,6.06,0.36,0.35Z" transform="translate(-1196 -1923)"/>
</svg>
</button>`,
responsive: [
	{
		breakpoint: 992,
		settings: {
			centerMode: true,
			centerPadding: '80px',
			slidesToScroll: 1,
			infinite: true,
			arrows: false,
			slidesToShow: 1,
		}
	},
	{
		breakpoint: 480,
		settings: {
			centerMode: false,
			slidesToScroll: 1,
			infinite: true,
			arrows: false,
			slidesToShow: 1,
		}
	},
]
});

$('.js-filter').on('click', function () {
	$(this).addClass('active').siblings('.active').removeClass('active');
	var filterClass = $(this).data('value');
	portfolio_carousel.slick('slickUnfilter');
	portfolio_carousel.slick('slickFilter', filterClass);
});


if ($(window).width() > 991) {
	var activeSlides = portfolio_carousel.slick("getSlick").options.slidesToShow;
	var carouselWidth = portfolio_carousel.width()

	portfolio_carousel.find('.slide').mouseenter(function () {
		var hovered = carouselWidth * 0.33;
		var rest = carouselWidth * 0.223333;

		$(this).addClass('hovered').animate({
			width: hovered,
		}, 1)

		portfolio_carousel.find('.slide.slick-active:not(.hovered)').animate({
			width: rest,
		}, 1)
	})

	portfolio_carousel.find('.slide').mouseleave(function () {
		$(this).removeClass('hovered')
		portfolio_carousel.find('.slide').animate({
			width: carouselWidth / activeSlides,
		}, 1)
	})
}

/*!portfolio_carousel*/

/*magnificPopup */
$(document).ready(function () {
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 300,
	});
	$('.video-popup').magnificPopup({
		type: 'iframe',
		removalDelay: 300,
	});
});
/** magnificPopup*/

/**Tabs */
$(function () {

	$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

});
/**Tabs */

/*testimonial-slider*/
$(document).ready(function () {
	$('.testimonial-slider').slick({
		dots: true,
		arrows: false,
		// autoplay: true,
		autoplaySpeed: 10000,
		centerMode: true,
		slidesToShow: 1,
		centerPadding: '250px',
		responsive: [
			{
				breakpoint: 1366,
				settings: {
					centerMode: false,
					slidesToScroll: 1,
					slidesToShow: 1,
				}
			},
		]
	});
});
/*!testimonial-slider*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});