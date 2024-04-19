const navItems = [
	{ name: "Trang chủ", icon: "fa-solid fa-house", subMenu: [] },
	{ name: "Giới thiệu", icon: "fa-solid fa-address-card", subMenu: [] },
	{
		name: "Thư viện",
		icon: "fa-solid fa-square-rss",
		subMenu: [
			{ name: "Bài mới nhất" },
			{ name: "Bài nổi bật" },
			{ name: "Blog Series" },
			{ name: "Kho lưu trữ" },
			{ name: "Bài không tên" },
		],
	},
	{
		name: "Tài chính",
		icon: "fa-solid fa-coins",
		subMenu: [
			{ name: "Thu nhập" },
			{ name: "Đầu tư" },
			{ name: "Quỹ" },
			{ name: "Giảm trừ" },
			{ name: "Thanh toán" },
			{ name: "Báo cáo" },
			{ name: "Dự báo" },
		],
	},
	{
		name: "Dịch vụ",
		icon: "fa-brands fa-servicestack",
		subMenu: [
			{ name: "Consulting" },
			{ name: "Customer Support" },
			{ name: "Legal Advice" },
			{ name: "IT Services" },
			{ name: "Accounting" },
		],
	},
	{ name: "Liên hệ", icon: "fa-solid fa-phone", subMenu: [] },
	{ name: "FAQ", icon: "fa-solid fa-circle-question", subMenu: [] },
]

let navBarFinalHTML = ``

navItems.forEach(item => {
	let subMenuTag = ``

	if (item.subMenu.length > 0) {
		item.subMenu.forEach(menu => {
			let temp = ""
			temp += `<a href='#' > ${menu.name} </a>`
			subMenuTag += temp
		})
	}

	let finalSubMenuHTML = `<ul class="nav__list-submenu">
                                <li>
                                    ${subMenuTag}
                                </li>
                            </ul>`

	navBarFinalHTML += `
        <li class="nav__list-title">
            <a href="#">
                <i class="icon ${item.icon}"></i><span class="nav__list-text">${
		item.name
	}</span>${item.subMenu.length > 0 ? "<i class='arrow down'></i>" : ""}
            </a>

            
			${item.subMenu.length > 0 ? finalSubMenuHTML : ""}
        </li>
    `
})

// console.log(navBarFinalHTML)

let navList = document.querySelector(".nav-list")

navList.innerHTML = navBarFinalHTML

var navMenu = document.querySelector(".nav__menu")

const turnArrow = (side, nav) => {
	var arrow_icon = nav.querySelector(".nav__menu.arrow")

	if (side == "up") {
		arrow_icon.classList.remove("down")
		arrow_icon.classList.add("up")
	} else {
		arrow_icon.classList.remove("up")
		arrow_icon.classList.add("down")
	}
}

$(document).ready(function () {
	var turnArrow = function (nav) {
		// nav = .nav__list-title

		// Reset all the arrow first
		$(".nav__menu.arrow").removeClass("up").addClass("down")
		
		// jquery check if style of nav__list-submenu is none or not?
		var arrow_icon = $(nav).find(".arrow")
		var subMenu = $(nav).find(".nav__list-submenu > li")

		if (subMenu.css("display") !== "none") {
			arrow_icon.removeClass("up").addClass("down")
		} else {
			arrow_icon.removeClass("down").addClass("up")
		}
	}

	$(".nav__list-title").each(function () {
		$(this).click(function (e) {
			e.preventDefault()

			var subMenu = $(this).find(".nav__list-submenu > li")

			// Close other subMenu
			$(".nav__list-submenu > li").not(subMenu).slideUp()

			turnArrow(this)

			// subMenu.toggleClass("show");
			subMenu.slideToggle()
		})
	})


	$(".nav-toggle").click(function (e) { 
		
		
		e.preventDefault();
		
		const nav = $("nav")

		
		if (nav.hasClass("mini")) {
			// Make the bar full
			nav.removeClass("mini");
			// $(".nav-toggle").removeClass("off");
			// $(".nav-toggle > .arrow").removeClass("left").addClass("right")
		} else {
			// Show nav-bar
			nav.addClass("mini");
			// $(".nav-toggle").addClass("off");
			// $(".nav-toggle > .arrow").removeClass("right").addClass("left")
		}
	});
})
