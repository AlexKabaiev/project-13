//---------------------------modal2.0----------------------------

var modaltable = document.querySelector("[data-modal-table]");
var closeModalBtntable = document.querySelector("[data-modal-table-close]");
const elsPtable = document.querySelectorAll("[data-modal-table-open]");
// for
for (let i = 0, length = elsPtable.length; i < length; i++) {
  elsPtable[i].addEventListener("click", toggleModal);
}
// for...of
for (let el of elsPtable) {
  el.addEventListener("click", toggleModal);
}

closeModalBtntable.addEventListener("click", toggleModal);

function toggleModal() {
   modaltable.classList.toggle("is-hidden");
}
