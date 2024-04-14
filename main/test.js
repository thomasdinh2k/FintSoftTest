// Global variable
const dropdownMenus = document.querySelectorAll(".dropdown-menu")
const dropdownLinks = document.querySelectorAll(".dropdown-menu a.test")
const dropdownSubmenus = document.querySelectorAll(".dropdown-submenu")

document.addEventListener("DOMContentLoaded", function () {
	// const barItem = document.querySelectorAll("#bar-level")

	const barItems = document.querySelectorAll(".main-nav > ul > li") // Assuming you want to target each top-level li in .main-nav

	// Add event listener on Hover

	if (barItems) {
		barItems.forEach(barItem => {
			barItem.addEventListener("mouseover", () => {
				// Process on hover
				const activeDropdownMenu = barItem.querySelector(".dropdown-menu")

				// Close other dropdown
				document.querySelectorAll(".dropdown-menu.show").forEach(activeMenu => {
					activeMenu.classList.remove("show")
				})
				activeDropdownMenu.classList.add("show")
			})

			barItem.addEventListener("click", () => {
				// Process on hover
				const activeDropdownMenu = barItem.querySelector(".dropdown-menu")

				// Close other dropdown
				document.querySelectorAll(".dropdown-menu.show").forEach(activeMenu => {
					activeMenu.classList.remove("show")
				})
				activeDropdownMenu.classList.add("show")
			})
		})
	} else {
		console.log("Couldn't find bar items")
	}

	// Add event listener
	dropdownLinks.forEach(link => {
		link.classList.remove("show")
		link.addEventListener("click", event => {
			event.preventDefault()
			event.stopPropagation()

			// Close opening sub-menu first
			dropdownSubmenus.forEach(subMenu => {
				if (subMenu.classList.contains("show")) {
					subMenu.classList.remove("show")
				}
			})

			// Then active "dropdown-submenu"
			let nextUl = link.nextElementSibling
			if (nextUl.classList.contains("show")) {
				nextUl.classList.remove("show")
			} else {
				nextUl.classList.add("show")
			}
		})
	})
})

// Close all document if user click away
document.addEventListener("click", event => {
	console.log("Outside clicked")

	// Prevent close menu when user mis-click the closest drop-down
	if (
		!event.target.closest(".dropdown-menu") ||
		!event.target.closest(".main-nav")
	) {
		dropdownMenus.forEach(menu => {
			menu.classList.remove("show")
		})

		dropdownSubmenus.forEach(subMenu => {
			subMenu.classList.remove("show")
		})
	}
})