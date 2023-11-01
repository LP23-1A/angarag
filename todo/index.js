let add_btn = document.querySelectorAll(".add_btn");
let modal = document.querySelector(".modal");

function openModal() {
  modal.style.opacity = 1;
}

add_btn[0].onclick = openModal;
add_btn[1].onclick = openModal;
add_btn[2].onclick = openModal;
add_btn[3].onclick = openModal;

let white = document.querySelector(".white");
let remove_ikon = document.querySelectorAll(".remove_ikon");

function closeModal() {
  white.style.display = "none";
}

remove_ikon[0].onclick = closeModal;
