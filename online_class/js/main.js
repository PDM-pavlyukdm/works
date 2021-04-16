(function () {

	$('.header__burger').click(function(event) {
	$('.header__burger,.header__panel').toggleClass('active');
	$('.header__panel').slideToggle(300);
	$('body').toggleClass('menu_open');
	})

	$('.header__list').click(function(event) {
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
	responsive: [
		 {
				breakpoint: 767,
				settings: "unslick"
		 }
	]
});

$('.reviews ').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	autoplay: false,
	mobileFirst: true,
	responsive: [
		 {
				breakpoint: 767,
				settings: "unslick"
		 }
	]
});


$('.partners ').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	autoplay: false,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
	responsive: [
		 {
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

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;

  $(document).on('touchstart click', '.acc-btn', function(){
    if(!clickPolice){
       clickPolice = true;

      var currIndex = $(this).index('.acc-btn'),
          targetHeight = $('.acc-content-inner').eq(currIndex).outerHeight();

      $('.acc-btn ').removeClass('selected');
      $(this).addClass('selected');

      $('.acc-content').stop().animate({ height: 0 }, animTime);
      $('.acc-content').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }

  });

});



$(document).ready(function(){
  var animTime = 300,
			clickPolice = false;

	$('.reviews-item').each(function(i,elem) {

		var currIndex = $(this).index('.reviews .acc-btn');
				targetHeight = $('.reviews .acc-content-inner').eq(currIndex).outerHeight();
				minHeight = parseInt($('.reviews .reviews-item__content').eq(currIndex).css('min-height'));

		if (targetHeight <= minHeight) {
			$('.reviews .acc-btn').eq(currIndex).css("display", "none");
		}
	});


  $(document).on('touchstart click', '.reviews .acc-btn', function(){
    if(!clickPolice){
       clickPolice = true;

      var currIndex = $(this).index('.reviews .acc-btn'),
					targetHeight = $('.reviews .acc-content-inner').eq(currIndex).outerHeight();


      $('.reviews .acc-btn ').removeClass('selected');
      $(this).addClass('selected');

      $('.reviews .acc-content').stop().animate({ height: 0 }, animTime);
      $('.reviews .acc-content').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
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
$('.courses__currency-select select').each(function() {
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
      text: $this.children('option').eq(i).text() +' ' + $this.children('option').eq(i).data('currency'),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }

  // Cache the list items
  var $listItems = $list.children('li');

  // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
  $styledSelect.click(function(e) {

    e.stopPropagation();
    $('div.styledSelect.active').each(function() {
      $(this).removeClass('active').next('ul.options').hide();
      $('.select').removeClass('active');
    });
		$(this).toggleClass('active').next('ul.options').toggle();
		$('.select').toggleClass('active');

	});


  // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
  // Updates the select element to have the value of the equivalent option
  $listItems.click(function(e) {
    e.stopPropagation();
		$styledSelect.text($(this).text().slice(0,1)).removeClass('active');
    $this.val($(this).attr('rel'));
		$list.hide();
		$('.select').removeClass('active')
  });

  // Hides the unordered list when clicking outside of it
  $(document).click(function() {
    $styledSelect.removeClass('active');
		$list.hide();
		$('.select').removeClass('active')
	});



	// ------------------
	//currency switcher
	$currency = $this.children('option:selected').val();
	$('.courses__item-pricing').attr('data-currency', $currency);

	$('.courses__item-pricing .price').each(function(i,elem) {
		if (!($(this).hasClass($currency))) {
			$(this).hide();
		} else {
			$(this).show();
		}
	})
	$('.courses__item-pricing .currency').each(function(i,elem) {
		if (!($(this).hasClass($currency))) {
			$(this).hide();
		} else {
			$(this).show();
		}
	})

  $('.options li').click(function() {
		$currency = $(this).attr("rel");
		$('.courses__item-pricing').attr('data-currency', $currency);

		$('.courses__item-pricing .price').each(function(i,elem) {
			if (!($(this).hasClass($currency))) {
				$(this).hide();
			} else {
				$(this).show();
			}
		})
		$('.courses__item-pricing .currency').each(function(i,elem) {
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

$(function(){
	var current = location.pathname;
	console.log(current);
	current = current.replace(/^\/|\/$/g, '');
	current = decodeURIComponent(current);
	console.log(current);
	$('.header__menu .header__link').each(function(){
			var $this = $(this);
			if(($this.attr('href').indexOf(current) !== -1) && (current !== '')){
					$this.addClass('active');
			}
	})
})

function langSwitcher() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
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

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();