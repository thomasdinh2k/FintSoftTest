// Global variable
const dropdownMenus = document.querySelectorAll(".dropdown-menu")
const dropdownLinks = document.querySelectorAll(".dropdown-menu a.test")
const dropdownSubmenus = document.querySelectorAll(".dropdown-submenu")
const viewportWidth = window.innerWidth

// Mobile version
if (viewportWidth < 1400) {
	document.querySelector("body").classList.add("mobile-version")
} else {
	document.querySelector("body").classList.remove("mobile-version")
}
console.log(document.querySelector("body").classList.value)

function closeAllMenu() {
	document.querySelectorAll(".dropdown-menu.show").forEach(activeMenu => {
		activeMenu.classList.remove("show")
	})
	document.querySelectorAll(".dropdown-submenu.show").forEach(activeMenu => {
		activeMenu.classList.remove("show")
	})
}

document.addEventListener("DOMContentLoaded", function (event) {
	// const barItem = document.querySelectorAll("#bar-level")

	const barItems = document.querySelectorAll(".main-nav > ul > li") // Assuming you want to target each top-level li in .main-nav

	// Show Menu
	if (barItems) {
		

		barItems.forEach(item => {
			if (item.querySelector(".nav-item")) {
				// Thẻ <a>
				if (!viewportWidth < 1400) {
					item.querySelector(".nav-item").addEventListener("mouseover", () => {
						const activeDropdownMenu = item.querySelector(".dropdown-menu")

						closeAllMenu()
						activeDropdownMenu.classList.toggle("show")
					})
				}
				item.querySelector(".nav-item").addEventListener("click", (event) => {

					event.stopPropagation()
					event.preventDefault()

					closeAllMenu()
					
					console.log("Clicked");
					
					const activeDropdownMenu = item.querySelector(".dropdown-menu")

					if (activeDropdownMenu.classList.contains("show")) {
						console.log("clearing");
						activeDropdownMenu.classList.remove("show")
					} else {
						activeDropdownMenu.classList.add("show")
					}
				})
			}
		})
	} else {
		console.log("Couldn't find bar items")
	}

	// Show dropdown-submenu
	// const dropdownLinks = document.querySelectorAll(".dropdown-menu a.test")
	dropdownLinks.forEach(link => {
		// link.classList.remove("show")
		link.addEventListener("click", event => {
			
			event.stopPropagation()
			event.preventDefault()

			// Close opening sub-menu first
			dropdownSubmenus.forEach(subMenu => {
				if (subMenu.classList.contains("show")) {
					subMenu.classList.remove("show")
				}
			})

			// Then active "dropdown-submenu"
			let nextUl = link.nextElementSibling
			
			console.log("nextUl", nextUl.classList.value);

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
	event.stopPropagation()

	// Prevent close menu when user mis-click the closest drop-down
	if (
		!event.target.closest(".dropdown-menu") &&
		!event.target.closest(".main-nav")
	) {
		console.log("Outside clicked")
		dropdownMenus.forEach(menu => {
			menu.classList.remove("show")
		})

		dropdownSubmenus.forEach(subMenu => {
			subMenu.classList.remove("show")
		})
	}
})

// Điều chỉnh căn lề của menu con
const menuLi = document.querySelectorAll(".parent > li")
menuLi.forEach(menuItem => {
	const coordinate = menuItem.getBoundingClientRect().left
	const targetElement = menuItem.children[1]
	const menuLabel = menuItem.children[0].innerHTML

	if (targetElement) {
		// Khong phai luc nao cung co Element

		// Di tim the <a> tag

		const percentage = Math.round((coordinate / viewportWidth) * 100)

		// console.log(`${menuLabel} has a percentage of ${percentage}%`)

		const targetChildElements = menuItem.querySelectorAll(".dropdown-submenu")

		const test = {
			a: coordinate + 400,
			viewportWidth,
			total: viewportWidth - (coordinate + 400),
		}

		// console.log(test)
		if (percentage > 50) {
			targetElement.style.left = `${coordinate}px`

			// Dich sub-menu sang trai
			targetChildElements.forEach(e => {
				e.classList.add("right")
			})

			// Thay doi chieu mui ten
			targetElement.querySelectorAll(".test").forEach(tag => {
				// console.log("span", tag.querySelector("span"))

				// Remove the span
				tag.querySelector("span").remove()
				// console.log(tag.innerHTML)

				// Append new corrected span
				// <span class="arrow arrow-right"></span>

				tag.innerHTML =
					" <span class='arrow arrow-left'></span>" + tag.innerHTML
			})
		} else {
			// console.log(targetElement)
			targetElement.style.left = `${coordinate}px`

			// Dich sub-menu sang phai
			targetChildElements.forEach(e => {
				e.classList.add("left")
			})
		}

		var dropdown_size = 226 + 15
		if (coordinate + dropdown_size > viewportWidth) {
			// Phòng tránh trường hợp thẻ dropdown bị tràn viền
			console.log("overflowed")
			// targetElement.style.backgroundColor = 'red';
			targetElement.style.left = `${viewportWidth - dropdown_size}px`
		}
	}
})

// Close button
const closeBtn = document.querySelector("li.close-button")
const navBar = document.querySelector(".parent")

closeBtn.addEventListener("click", () => {
	navBar.classList.toggle("hide")
	navBar.style.transition = "transform 0.5s ease"
	document.querySelector("li.open-button").style.display = "block"
})

// navBar.addEventListener("animationend", function () {
// 	navBar.style.display = 'none'

// })

document.querySelector(".open-button").addEventListener("click", () => {
	navBar.classList.toggle("hide")
	document.querySelector("li.open-button").style.display = "none"
})
