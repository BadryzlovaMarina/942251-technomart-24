var orderLinks = document.querySelectorAll(".buy-button");
for(var i = 0; i < orderLinks.length; i++) {
    orderLinks[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    orderPopup.classList.add("modal-show");
});
}

var orderPopup = document.querySelector(".modal-buy");
var orderClose = orderPopup.querySelector(".modal-close");

orderClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    orderPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
    if (orderPopup.classList.contains("modal-show")) {
        orderPopup.classList.remove("modal-show");
    }
    }
});