var searchBtn = document.querySelector(".hotel-search");
var	popup = document.querySelector(".data-order");

searchBtn.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.toggle("data-order-active");
});