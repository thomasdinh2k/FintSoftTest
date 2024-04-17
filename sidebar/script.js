const navItems = [
	{ name: "Home", icon: "fa-bookmark", subMenu: [] },
	{ name: "About", icon: "fa-bookmark", subMenu: [] },
	{
		name: "Blog",
		icon: "blog.png",
		subMenu: [
			{ name: "Latest Posts", icon: "blog/latest.png" },
			{ name: "Popular Articles", icon: "blog/popular.png" },
			{ name: "Blog Series", icon: "blog/series.png" },
			{ name: "Archives", icon: "blog/archives.png" },
		],
	},
	{
		name: "Finance",
		icon: "finance.png",
		subMenu: [
			{ name: "Earning", icon: "finance/earning.png" },
			{ name: "Investments", icon: "finance/investments.png" },
			{ name: "Funds", icon: "finance/funds.png" },
			{ name: "Declines", icon: "finance/declines.png" },
			{ name: "Payouts", icon: "finance/payouts.png" },
			{ name: "Reports", icon: "finance/reports.png" },
			{ name: "Forecasts", icon: "finance/forecasts.png" },
		],
	},
	{
		name: "Services",
		icon: "services.png",
		subMenu: [
			{ name: "Consulting", icon: "services/consulting.png" },
			{ name: "Customer Support", icon: "services/support.png" },
			{ name: "Legal Advice", icon: "services/legal.png" },
			{ name: "IT Services", icon: "services/it.png" },
			{ name: "Accounting", icon: "services/accounting.png" },
		],
	},
	{ name: "Contact", icon: "contact.png", subMenu: [] },
	{ name: "FAQ", icon: "faq.png", subMenu: [] },
	{ name: "Terms of Service", icon: "terms.png", subMenu: [] },
	{
		name: "Settings",
		icon: "settings.png",
		subMenu: [
			{ name: "Profile", icon: "settings/profile.png" },
			{ name: "Account", icon: "settings/account.png" },
			{ name: "Preferences", icon: "settings/preferences.png" },
			{ name: "Privacy", icon: "settings/privacy.png" },
		],
	},
	{ name: "Logout", icon: "logout.png", subMenu: [] },
]

var navMenu = document.querySelector(".nav__menu")

const turnArrow = (side, nav) => {
	var arrow_icon = nav.querySelector(".arrow")

	if (side == "up") {
		arrow_icon.classList.remove("down")
		arrow_icon.classList.add("up")
	} else {
		arrow_icon.classList.remove("up")
		arrow_icon.classList.add("down")
	}
}

const navBar = document.querySelectorAll(".nav__list-title")

navBar.forEach(element => {
	element.addEventListener("click", e => {
		e.preventDefault()

		var subMenu = element.querySelector(".nav__list-submenu")

		if (!subMenu.classList.contains("show")) {
			// Show Sub-menu
			turnArrow("up", element)
			element.querySelector(".nav__list-submenu").classList.add("show")
		} else {
			// Hide Sub-menu
			turnArrow("down", element)
			element.querySelector(".nav__list-submenu").classList.remove("show")
		}
	})
})
