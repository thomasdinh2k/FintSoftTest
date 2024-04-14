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

const menuLi = document.querySelectorAll(".parent > li")

menuLi.forEach(menuItem => {
	let coordinate = menuItem.getBoundingClientRect().left
	// const targetElement = menuItem.childNodes[1]

	const targetElement = menuItem.children[1]

	if (targetElement) {
		// Khong phai luc nao cung co Element

		const targetChildElement = menuItem.querySelector(".dropdown-submenu")

		if (coordinate > 600) {
			console.log("Coor bigger than 600")
			targetElement.style.left = `${coordinate}px`

			// set to right: 100%
			// console.log(targetChildElement.style.left);
			targetChildElement.style.left = 0
			targetChildElement.style.right = "100%" // Setting right to 100%
		} else {
			console.log(targetElement)
			targetElement.style.left = `${coordinate}px`
		}
	}
})
