(function () {
	//Responsive menu
	const menu = new MmenuLight(
		document.querySelector("#menu"),
		"(max-width: 991px)"
	);
	const navigator = menu.navigation({
		title: '',
	});
	const drawer = menu.offcanvas({
		position: "left",
		top: "200px"

	});
	document.addEventListener(
		"DOMContentLoaded", () => {
			document.querySelector("a[href='#menu']")
				.addEventListener("click", (event) => {
					event.preventDefault();
					drawer.open();
				});
		}
	);
	document.addEventListener(
		"DOMContentLoaded", () => {
			const links = document.querySelectorAll("#menu .menu-link");
			for (i = 0; i < links.length; ++i) {
				links[i].addEventListener("click", (event) => {
					event.preventDefault();
					drawer.close();
				});
			}
		}
	);

	// Smooth scroll
	$('a[href*="#"]').
	not('[href="#"]').
	not('[href="#0"]').
	not('[data-toggle="collapse"]').
	not('[role="tab"]').
	click(e => {
		$('html,body').stop().animate({
			scrollTop: $(e.currentTarget.hash).offset().top,
		}, 1000);
		e.preventDefault();
	});


})();

	//wow.js
	const wow = new WOW({
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