function closeAll(except) {
	$(".wrapper").each(function () {
		if (this !== except) {
			$(this).attr({
				"aria-expanded": false,
				"aria-hidden": true,
			})
		}
	})
}

// [x] Check if .wrapper have aria-expanded="true", if so, give <li> an attr of "mobile active" and style CSS with it
function syncLiAttr() {
	// Find Wrapper
	$(".wrapper").each(function () {
		var currentAttr = $(this).attr("aria-expanded")

		// DOM travel back to <li>
		var parent = $(this).parent()

		if (currentAttr === "true") {
			parent.attr("data-mobile-active", true)
		} else if (currentAttr === "false") {
			parent.attr("data-mobile-active", false)
		}
	})
}

// Hot-fix: Make the body{} sync with the width of ul.menu
function syncBodySize() {
	var menu_item_height = $("ul.menu").height()
	console.log("Current Height", menu_item_height);

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
	$(".nav-links").click(function (e) {
		e.preventDefault()

		// Find .wrapper
		var wrapper = $(this).next(".wrapper")
		var isExpanded = wrapper.attr("aria-expanded") === "true"

		// Close all sub-menu first!
		closeAll($(this))

		$(wrapper).attr({
			"aria-expanded": !isExpanded,
			"aria-hidden": isExpanded,
		})

		syncLiAttr()
	})

	// [x] Check if viewport > 425 then remove <div data-device="mobile" class="mobile menu-items">
	var currentWidth = $(document).width()
	console.log(`Current viewport is ${currentWidth}`)
	$("#viewport-info").html(currentWidth)

	if (currentWidth > 425) {
		$(".menu-items").attr("data-device", "desktop")
	} else {
		$(".menu-items").attr("data-device", "mobile")
	}
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
$(function () {
	var menu = $("ul.menu")

	$(".mobile.menu--header button").click(function (e) {
		e.preventDefault()
		// Hide menu
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
	})

	$(".hamburger-toggle").click(function (e) {
		e.preventDefault()
		// Show menu
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
	})

	// Sync body size on menu expansion
	$("body").click(function (e) { 
		e.preventDefault();
		syncBodySize()
	});
})
