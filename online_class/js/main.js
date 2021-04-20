(function () {

	$('.header__burger').click(function (event) {
		$('.header__burger,.header__panel').toggleClass('active');
		$('.header__panel').slideToggle(300);
		$('body').toggleClass('menu_open');
	})

	$('.header__list').click(function (event) {
		$('.header__burger,.header__panel').removeClass('active');
		$('.header__panel').slideToggle(300);
		$('body').removeClass('menu_open');
	})

})();

$('.courses__body').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	autoplay: false,
	mobileFirst: true,
	responsive: [{
		breakpoint: 767,
		settings: "unslick"
	}]
});

$('.reviews ').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	autoplay: false,
	mobileFirst: true,
	responsive: [{
		breakpoint: 767,
		settings: "unslick"
	}]
});


$('.partners ').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	autoplay: false,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
	responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		}
	]
});

$(document).ready(function () {
	var animTime = 300,
		clickPolice = false;

	$(document).on('touchstart click', '.acc-btn', function () {
		if (!clickPolice) {
			clickPolice = true;

			var currIndex = $(this).index('.acc-btn'),
				targetHeight = $('.acc-content-inner').eq(currIndex).outerHeight();

			$('.acc-btn ').removeClass('selected');
			$(this).addClass('selected');

			$('.acc-content').stop().animate({
				height: 0
			}, animTime);
			$('.acc-content').eq(currIndex).stop().animate({
				height: targetHeight
			}, animTime);

			setTimeout(function () {
				clickPolice = false;
			}, animTime);
		}

	});

});



$(document).ready(function () {
	var animTime = 300,
		clickPolice = false;

	$('.reviews-item').each(function (i, elem) {

		var currIndex = $(this).index('.reviews .acc-btn');
		targetHeight = $('.reviews .acc-content-inner').eq(currIndex).outerHeight();
		minHeight = parseInt($('.reviews .reviews-item__content').eq(currIndex).css('min-height'));

		if (targetHeight <= minHeight) {
			$('.reviews .acc-btn').eq(currIndex).css("display", "none");
		}
	});


	$(document).on('touchstart click', '.reviews .acc-btn', function () {
		if (!clickPolice) {
			clickPolice = true;

			var currIndex = $(this).index('.reviews .acc-btn'),
				targetHeight = $('.reviews .acc-content-inner').eq(currIndex).outerHeight();


			$('.reviews .acc-btn ').removeClass('selected');
			$(this).addClass('selected');

			$('.reviews .acc-content').stop().animate({
				height: 0
			}, animTime);
			$('.reviews .acc-content').eq(currIndex).stop().animate({
				height: targetHeight
			}, animTime);

			setTimeout(function () {
				clickPolice = false;
			}, animTime);
		}

	});

});

$('.filter').on('click', function () {
	$(this).addClass('active').siblings('.active').removeClass('active');
	var filterClass = $(this).data('value');
	$(".article").addClass("hide");
	$(".article").removeClass("show");
	$(".article").filter(filterClass).removeClass("hide");
	$(".article").filter(filterClass).addClass("show");
});





// Iterate over each select element
$('.courses__currency-select select').each(function () {
	// Cache the number of options
	var $this = $(this),
		numberOfOptions = $(this).children('option').length;

	// Hides the select element
	$this.addClass('s-hidden');

	// Wrap the select element in a div
	$this.wrap('<div class="select"></div>');

	// Insert a styled div to sit over the top of the hidden select element
	$this.after('<div class="styledSelect"></div>');

	// Cache the styled div
	var $styledSelect = $this.next('div.styledSelect');

	// Show the first select option in the styled div
	$styledSelect.text($this.children('option:selected').text());

	// Insert an unordered list after the styled div and also cache the list
	var $list = $('<ul />', {
		'class': 'options'
	}).insertAfter($styledSelect);

	// Insert a list item into the unordered list for each select option
	for (var i = 0; i < numberOfOptions; i++) {
		$('<li />', {
			text: $this.children('option').eq(i).text() + ' ' + $this.children('option').eq(i).data('currency'),
			rel: $this.children('option').eq(i).val()
		}).appendTo($list);
	}

	// Cache the list items
	var $listItems = $list.children('li');

	// Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
	$styledSelect.click(function (e) {

		e.stopPropagation();
		$('div.styledSelect.active').each(function () {
			$(this).removeClass('active').next('ul.options').hide();
			$('.select').removeClass('active');
		});
		$(this).toggleClass('active').next('ul.options').toggle();
		$('.select').toggleClass('active');

	});


	// Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
	// Updates the select element to have the value of the equivalent option
	$listItems.click(function (e) {
		e.stopPropagation();
		$styledSelect.text($(this).text().slice(0, 1)).removeClass('active');
		$this.val($(this).attr('rel'));
		$list.hide();
		$('.select').removeClass('active')
	});

	// Hides the unordered list when clicking outside of it
	$(document).click(function () {
		$styledSelect.removeClass('active');
		$list.hide();
		$('.select').removeClass('active')
	});



	// ------------------
	//currency switcher
	$currency = $this.children('option:selected').val();
	$('.courses__item-pricing').attr('data-currency', $currency);

	$('.courses__item-pricing .price').each(function (i, elem) {
		if (!($(this).hasClass($currency))) {
			$(this).hide();
		} else {
			$(this).show();
		}
	})
	$('.courses__item-pricing .currency').each(function (i, elem) {
		if (!($(this).hasClass($currency))) {
			$(this).hide();
		} else {
			$(this).show();
		}
	})

	$('.options li').click(function () {
		$currency = $(this).attr("rel");
		$('.courses__item-pricing').attr('data-currency', $currency);

		$('.courses__item-pricing .price').each(function (i, elem) {
			if (!($(this).hasClass($currency))) {
				$(this).hide();
			} else {
				$(this).show();
			}
		})
		$('.courses__item-pricing .currency').each(function (i, elem) {
			if (!($(this).hasClass($currency))) {
				$(this).hide();
			} else {
				$(this).show();
			}
		})

	})

});


$('.popup-modal').magnificPopup({
	type: 'inline',
	closeMarkup: '<button title="%title%" type="button" class="popup__close mfp-close"></button>'
});

// ------------------
//Nav menu active class on current page
$(function () {

	// Get current page URL
	var url = window.location.href;
	// remove # from URL
	url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
	// remove parameters from URL
	url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
	// select file name
	url = url.substr(url.lastIndexOf("/") + 1);
	// If file name not avilable
	if (url == '') {
		url = 'index.html';
	}

	// Loop all menu items
	$('.header__menu .header__menu-item').each(function () {

		// select href
		var href = $(this).find('a').attr('href');
		href = href.substr(href.lastIndexOf("/") + 1);

		// Check filename
		if (url == href) {

			var parentClass = $(this).parent().attr('class');

			if (parentClass == 'submenu') {

				// Add class
				$(this).addClass('subactive');
				$(this).parents('.header__menu .header__menu-item.parent-menu-item').find('a').eq(0).addClass('active');
			} else {

				// Add active class
				$(this).find('a').eq(0).addClass('active');
			}
		}
	});

})

function langSwitcher() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

var wow = new WOW({
	boxClass: 'wow', // animated element css class (default is wow)
	animateClass: 'animated', // animation css class (default is animated)
	offset: 100, // distance to the element when triggering the animation (default is 0)
	mobile: false, // trigger animations on mobile devices (default is true)
	live: true, // act on asynchronously loaded content (default is true)
	callback: function (box) {
		// the callback is fired every time an animation is started
		// the argument that is passed in is the DOM node being animated
	},
	scrollContainer: null, // optional scroll container selector, otherwise use window,
	resetAnimation: true, // reset animation on end (default is true)
});
wow.init();

// ------------------
// Validation
(function () {
	$("#form_contacts").validate({rules: {phone: {phoneCustom: true}}});
	$("#form_companies").validate({rules: {phone: {phoneCustom: true}}});
	$("#form_connect").validate({rules: {phone: {phoneCustom: true}}});
	$("#form_registration").validate({
		rules: {
			phone: {phoneCustom: true},
			password: {
				pwcheck: true,
		},
		}
	});
})();

$.validator.addMethod( "phoneCustom", function( phone_number, element ) {
	var customPhone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || customPhone_number.length > 7 && /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test( customPhone_number );
}, "Пожалуйста, введите корректный номер телефона" );

$.validator.addMethod("pwcheck",
function(value, element) {
   return /^[A-Za-z0-9\d=!\-@._*]+$/.test(value);
}, "Пароль может содержать буквы латинского алфавита (любого регистра), цифры и символы @ * _ - . !");

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: RU (Russian; русский язык)
 */
$.extend( $.validator.messages, {
	required: "Это поле необходимо заполнить.",
	remote: "Пожалуйста, введите правильное значение.",
	email: "Пожалуйста, введите корректный адрес электронной почты.",
	url: "Пожалуйста, введите корректный URL.",
	date: "Пожалуйста, введите корректную дату.",
	dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
	number: "Пожалуйста, введите число.",
	digits: "Пожалуйста, вводите только цифры.",
	creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
	equalTo: "Пожалуйста, введите такое же значение ещё раз.",
	extension: "Пожалуйста, выберите файл с правильным расширением.",
	maxlength: $.validator.format( "Пожалуйста, введите не больше {0} символов." ),
	minlength: $.validator.format( "Пожалуйста, введите не меньше {0} символов." ),
	rangelength: $.validator.format( "Пожалуйста, введите значение длиной от {0} до {1} символов." ),
	range: $.validator.format( "Пожалуйста, введите число от {0} до {1}." ),
	max: $.validator.format( "Пожалуйста, введите число, меньшее или равное {0}." ),
	min: $.validator.format( "Пожалуйста, введите число, большее или равное {0}." )
} );
return $;
}));

// !Validation