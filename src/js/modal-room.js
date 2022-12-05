//---------------------------modal2.0----------------------------

var modalroom = document.querySelector("[data-modal-room]");
var closeModalBtnroom = document.querySelector("[data-modal-room-close]");
const elsProom = document.querySelectorAll("[data-modal-room-open]");
// for
for (let i = 0, length = elsProom.length; i < length; i++) {
  elsProom[i].addEventListener("click", toggleModal);
}
// for...of
for (let el of elsProom) {
  el.addEventListener("click", toggleModal);
}

closeModalBtnroom.addEventListener("click", toggleModal);

function toggleModal() {
   modalroom.classList.toggle("is-hidden");
}