function closeAll(exception) {
	$(".menu-items > li").each(function () {
		// if ($(this).is(exception)) {

		if ($(this).is(exception)) {
			console.log("same")
		} else {
			$(this).removeClass("show")
		}
	})
}

// Hot-fix: Make the body{} sync with the width of ul.menu
function syncBodySize() {
	var menu_item_height = $("ul.menu").height()
	console.log("Current Height", menu_item_height)

	$("body").height(menu_item_height)
}

// Toggle blur on open side-bar
function toggleBlur() {
	var body_attr = $("body").attr("data-blur")
	if (body_attr == "active") {
		$("body").attr("data-blur", "non-active")
	} else {
		$("body").attr("data-blur", "active")
	}
}

$(document).ready(function () {
	// [x] Open sub-menu based on nav-links
	$(".menu-items > li").click(function (e) {
		e.preventDefault()

		// Close all sub-menu first!
		closeAll($(this))

		$(this).toggleClass("show")
	})

	// Check if viewport > 425 then remove <div data-device="mobile" class="mobile menu-items">
	// Deleted
})

// Animate social-icons on scroll
$(function () {
	var hitBox = $(".menu--social-media")

	$(window).scroll(function () {
		var scroll = $(window).scrollTop()
		if (scroll >= 60) {
			$(hitBox).addClass("action")
		}
	})
})

// [x] Close side-bar when button click (with animation)
function hideMenu(menu) {
	menu.animate(
		{
			left: "-100%",
			opacity: 0,
		},
		300,
		function () {
			menu.css("display", "none") // Hide after animation
		}
	)
	toggleBlur()
}

function showMenu(menu) {
	menu.css({ display: "flex", left: "-100%", opacity: 0 }) // Set initial position
	menu.animate(
		{
			left: "0",
			opacity: 1,
		},
		300
	)

	// Give the bg more blur
	toggleBlur()
}

$(function () {
	var menu = $("ul.menu")

	$(".menu--header button").click(function (e) {
		e.preventDefault()
		// Hide menu
		hideMenu(menu)
	})

	$(".hamburger-toggle").click(function (e) {
		e.preventDefault()
		// Show menu
		showMenu(menu)
	})

	// [x] Hide menu when clicking outside of it
	$(document).click(function (e) {
		e.preventDefault()

		console.log(e.target)

		if ($("body").is(e.target)) {
			// The event target is outside of nav
			console.log("Outside Clicked")
			hideMenu(menu)
		}
	})

	// Sync body size on menu expansion
	$("body").click(function (e) {
		e.preventDefault()
		// syncBodySize()
	})
})

// Using Js to animate specifically
$(function () {
	$(".nav-links").each(function (index, element) {
		// element == this
		$(element).css("animation-delay", `${0.15 * index}s`)
	})
})
