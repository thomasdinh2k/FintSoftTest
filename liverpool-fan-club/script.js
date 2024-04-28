// Ensure jQuery is ready
$(document).ready(function () {
	// Set up click event on the <a> element with class "nav-links"
	$("a.nav-links").click(function (event) {
		event.preventDefault() // Prevent the default anchor click behavior

		// Find the next sibling .wrapper of the clicked <a>
		var $wrapper = $(this).next(".wrapper")

		// Toggle the aria-hidden and aria-expanded attributes
		var isExpanded = $wrapper.attr("aria-expanded") === "true"
		$wrapper.attr("aria-expanded", !isExpanded)
		$wrapper.attr("aria-hidden", isExpanded)

		// Optionally toggle additional class for CSS styling if needed
		// $wrapper.toggleClass('some-class');
	})
})
