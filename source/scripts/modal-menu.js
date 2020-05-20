export function modal() {
	var modalPopupMenuFull = document.querySelector(".menu-full");
	var modalPopupMenuLite = document.querySelector(".menu-lite");
	var modalButtonMenuOpen = document.querySelector(".menu-lite__button");
	var modalButtonMenuClose = document.querySelector(".menu-full__button");

	modalButtonMenuOpen.addEventListener("click", function(evt){
		evt.preventDefault();
		modalPopupMenuFull.classList.add("js-open");
		modalPopupMenuLite.classList.add("js-close");
	});
	modalButtonMenuClose.addEventListener("click",function(evt){
		evt.preventDefault();
		modalPopupMenuFull.classList.remove("js-open");
		modalPopupMenuLite.classList.remove("js-close");
	});
}





