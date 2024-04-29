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

// [ ] Close side-bar when button click (with animation)