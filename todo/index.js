let add_btn = document.querySelectorAll(".add_btn");
let modal = document.querySelector(".modal");

function openModal() {
  modal.style.opacity = 1;
}

add_btn[0].onclick = openModal;
add_btn[1].onclick = openModal;
add_btn[2].onclick = openModal;
add_btn[3].onclick = openModal;

let white = document.querySelector(".white_1");
let remove_ikon = document.querySelectorAll(".remove_ikon");

function closeModal() {
  // white.style.display = "none";
  white.remove();
}
remove_ikon[0].onclick = closeModal;

let lists = document.getElementsByClassName("list");
let white_1 = document.querySelector(".white_1");
let white_2 = document.querySelector(".white_2");
let white_3 = document.querySelector(".white_3");
let white_4 = document.querySelector(".white_4");

for (let list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;

    white_4.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    white_4.addEventListener("drop", function (e) {
      e.preventDefault();
      white_4.appendChild(selected);
    });
    white_3.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    white_3.addEventListener("drop", function (e) {
      e.preventDefault();
      white_3.appendChild(selected);
    });
    white_2.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    white_2.addEventListener("drop", function (e) {
      e.preventDefault();
      white_2.appendChild(selected);
    });
    white_1.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    white_1.addEventListener("drop", function (e) {
      e.preventDefault();
      white_1.appendChild(selected);
    });
  });
}
