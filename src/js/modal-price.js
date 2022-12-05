//---------------------------modal2.0----------------------------

var modalprice = document.querySelector("[data-modal-price]");
var closeModalBtnprice = document.querySelector("[data-modal-price-close]");
const elsPprice = document.querySelectorAll("[data-modal-price-open]");
// for
for (let i = 0, length = elsPprice.length; i < length; i++) {
  elsPprice[i].addEventListener("click", toggleModal);
}
// for...of
for (let el of elsPprice) {
  el.addEventListener("click", toggleModal);
}

closeModalBtnprice.addEventListener("click", toggleModal);

function toggleModal() {
   modalprice.classList.toggle("is-hidden");
}