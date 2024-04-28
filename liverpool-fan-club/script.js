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

$(document).ready(function () {
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
	})

	// Check if viewport > 425 then remove <div data-device="mobile" class="mobile menu-items">

	// Check if .wrapper have aria-expanded="true", if so, give <li> an attr of "mobile active" and style CSS with it
})