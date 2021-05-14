(function () {
	//Quantity items
	$(".quantity-btn").on("click", function () {

		var $button = $(this)
		var value = $button.parents(".quantity").find("input").val();

		value = (isNaN(value) || value === "") ? 0 : value

		if ($button.hasClass("quantity-btn-up")) {
			value = parseInt(value, 10) + 1;
			console.log(value);
		} else {
			if (value > 0) {
				value = parseInt(value, 10) - 1;
			} else {
				value = 0;
			}
		}
		$button.parents(".quantity").find("input").val(value);
	})

	//Video play
	$('.video').parent().click(function () {
		if ($(this).children(".video").get(0).paused) {
			$(this).children(".video").get(0).play();
			$(this).children(".video-overlay").fadeOut();
		} else {
			$(this).children(".video").get(0).pause();
			$(this).children(".video-overlay").fadeIn();
		}
	});

	//Price range slider
	$(function () {
		$("#price_range").slider({
			range: true,
			min: 0,
			max: 120000,
			values: [10000, 100000],
			step: 500,
			slide: function (event, ui) {
				$("#amount_from").val(ui.values[0]);
				$("#amount_to").val(ui.values[1]);
			}
		});

		$("#amount_from").val($("#price_range").slider("values", 0));
		$("#amount_to").val($("#price_range").slider("values", 1));

		$("#amount_from").change(function () {
			$("#price_range").slider("values", 0, $(this).val());
		});
		$("#amount_to").change(function () {
			$("#price_range").slider("values", 1, $(this).val());
		});
	});

	//Dropdown
	$(".dropbtn").click(function () {
		$(this).parent(".dropdown").find("#price_drop").toggleClass("show");
	});

	$(".dropbtn").keyup(function (e) {
		if (e.key === "Escape") {
			$(this).parent(".dropdown").find("#price_drop").removeClass("show");
		}
	});
	$(".dropdown-content__item").click(function () {
		$(this).parents(".dropdown").find("#price_drop").removeClass("show");
	});

	//Tabs
	$("#tabs").tabs({
		active: 0,
		// heightStyle: "fill"
	});

	// Product images slider
	$('.product-images').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.product-images__nav',
		adaptiveHeight: true,
		prevArrow: '<button class="slick-prev"><i class="icon-arrow"></i></button>',
		nextArrow: '<button class="slick-next"><i class="icon-arrow"></i></button>',
	});
	$('.product-images__nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.product-images',
		focusOnSelect: true,
		variableWidth: true,
		arrows: false,
		vertical: true,
		verticalSwiping: true,
	});

	//checkout payment choices
	$('.control-radio-btn input:checked').parents('.checkout-payment__choice').toggleClass('active');

	$('.control-radio-btn').on('change', 'input:radio', function (event) {
		$(this).parents('.control-radio-btn').find('.checkout-payment__choice').removeClass('active');
		$('.control-radio-btn input:checked').parents('.checkout-payment__choice').addClass('active');
	});

	//popups
	$('.open-popup').magnificPopup({
		type:'inline',
		closeMarkup: '<button title="%title%" type="button" class="popup__close mfp-close"></button>'

	});

	//Mobile menu
	$('.mobile-trigger').click(function() {
		$('.mobile-panel').toggleClass('active')
		$('.mobile-overlay').toggleClass('active')
	});
	$('.mobile-overlay').click(function () {
		$('.mobile-panel').removeClass('active')
		$('.mobile-overlay').removeClass('active')
	})
	$(document).keydown(function(event) {
		if (event.keyCode == 27) {
			$('.mobile-panel').removeClass('active')
			$('.mobile-overlay').removeClass('active')
		}
	});

	//Mobile catalog filters
	$('.filters-mobile-trigger').click(function() {
		$('.page-sidebar.filters').toggleClass('active')
		$('body').toggleClass('lock')
	});
	$('.mobile-overlay').click(function () {
		$('.page-sidebar.filters').removeClass('active')
		$('body').removeClass('lock')
	})
	$(document).keydown(function(event) {
		if (event.keyCode == 27) {
			$('.page-sidebar.filters').removeClass('active')
			$('body').removeClass('lock')
		}
	});
	//Mobile catalog sorting
	$('.sorting-mobile-trigger').click(function() {
		$('.sort-panel').toggleClass('active')
		$('body').toggleClass('lock')
	});
	$('.mobile-overlay').click(function () {
		$('.sort-panel').removeClass('active')
		$('body').removeClass('lock')
	})
	$(document).keydown(function(event) {
		if (event.keyCode == 27) {
			$('.sort-panel').removeClass('active')
			$('body').removeClass('lock')
		}
	});

	//Mobile search form
	$('.header-main__actions .search-button').click(function () {
		$('.header-main__search-form').toggleClass('active')
		$('.header-main__info').toggleClass('hide')
	});

	$('.header-main__actions .search-button').keydown(function(event) {
		if (event.keyCode == 27) {
			$('.header-main__search-form').toggleClass('active')
			$('.header-main__info').toggleClass('hide')
		}
	});
	$('.header-main__search-form').keydown(function(event) {
		if (event.keyCode == 27) {
			$('.header-main__search-form').toggleClass('active')
			$('.header-main__info').toggleClass('hide')
		}
	});

	//Mobile cats nav
	$('.header-cats__title').click(function () {
		$('.mobile-cats-nav').addClass('active')
	});
	$(document).keydown(function(event) {
		if (event.keyCode == 27) {
			$('.mobile-cats-nav').removeClass('active')
		}
	});
	$('.mobile-cats-nav .close').click(function () {
		$('.mobile-cats-nav').removeClass('active')
	})

})();


	// Form Validation
	(function () {
		$("#request_callback_form").validate({rules: {phone: {phoneCustom: true}}});
		$("#send_quest_form").validate();
		$("#login_form_form").validate();
		$("#register_form_form").validate({
			rules: {
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

	// !Form Validation
