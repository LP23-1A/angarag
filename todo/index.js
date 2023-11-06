// let add_btn = document.querySelectorAll(".add_btn");
// let modal = document.querySelector(".modal");

// function openModal() {
//   modal.style.opacity = 1;
// }

// add_btn[0].onclick = openModal;
// add_btn[1].onclick = openModal;
// add_btn[2].onclick = openModal;
// add_btn[3].onclick = openModal;

// let white = document.querySelector(".white_1");
// let remove_ikon = document.querySelectorAll(".remove_ikon");

// function closeModal() {
//   // white.style.display = "none";
//   white.remove();
// }
// remove_ikon[0].onclick = closeModal;

// let lists = document.getElementsByClassName("list");
// let white_1 = document.querySelector(".white_1");
// let white_2 = document.querySelector(".white_2");
// let white_3 = document.querySelector(".white_3");
// let white_4 = document.querySelector(".white_4");

// for (let list of lists) {
//   list.addEventListener("dragstart", function (e) {
//     let selected = e.target;

//     white_4.addEventListener("dragover", function (e) {
//       e.preventDefault();
//     });
//     white_4.addEventListener("drop", function (e) {
//       e.preventDefault();
//       white_4.appendChild(selected);
//     });
//     white_3.addEventListener("dragover", function (e) {
//       e.preventDefault();
//     });
//     white_3.addEventListener("drop", function (e) {
//       e.preventDefault();
//       white_3.appendChild(selected);
//     });
//     white_2.addEventListener("dragover", function (e) {
//       e.preventDefault();
//     });
//     white_2.addEventListener("drop", function (e) {
//       e.preventDefault();
//       white_2.appendChild(selected);
//     });
//     white_1.addEventListener("dragover", function (e) {
//       e.preventDefault();
//     });
//     white_1.addEventListener("drop", function (e) {
//       e.preventDefault();
//       white_1.appendChild(selected);
//     });
//   });
// }
// const data = [];
// function render(data) {
//   const cards = document.getElementsByClassName("cardcontainer")[0];
//   const done = [];
//   cards.innerHTML = "";
//   for (let i = 0; i < data.length; i++) {
//     cards.innerHTML += createCard(data[i]);
//   }
// }
// function addCard() {
//   const mockData = {
//     title: "",
//     desc: "",
//     status: "",
//     priority: "",
//   };
//   let input = document.querySelector(".error");
//   let textarea = document.querySelector("testa");
//   let status = document.getElementById(".status");
//   let sta = document.getElementById(".sta");
//   mockData.title = input.value;
//   mockData.desc = textarea.value;
//   mockData.status = status.value;
//   mockData.priority = sta.value;
//   data.push(mockData);
//   render(data);
// }
// function createCard(card) {
//   const { title, desc, priority } = card;
//   return ` <div class="white_1">
//       <div class="list" draggable="true">
//         <button class="done">
//           <img src="done-7.svg" alt="" width="10.5px" height="12px" />
//         </button>
//         <div class="details">
//           <h4>${title}</h4>
//           <p>${desc}</p>
//           <div class="priority">${priority}</div>
//         </div>
//         <div class="ikons">
//           <button class="remove_ikon">
//             <img
//               src="./cancel_cross_delete_remove_icon_131554.png"
//               width="9px"
//               height="12px"
//               alt=""
//             />
//           </button>
//           <button class="write_ikon">
//             <img src="./write.png" alt="" width="12px" height="12px" />
//           </button>
//         </div>
//       </div>
//     </div>`;
// }
// render(data);
// console.log(data);

const data = [];

function render(data) {
  const cards = document.querySelector(".cardcontainer")[0]; // querySelector-аар class-ыг сонгоно.
  cards.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    cards.innerHTML += createCard(data[i]);
  }
}

function addCard() {
  const mockData = {
    title: "",
    desc: "",
    status: "",
    priority: "",
  };

  let input = document.querySelector(".error");
  let textarea = document.querySelector("textarea"); // "textarea"-г бичиж чадаагүй байсан.
  let status = document.getElementById("status"); // "getElementById"-ар class-ыг сонгоно.
  let sta = document.getElementById("sta"); // "getElementById"-ар class-ыг сонгоно.

  mockData.title = input.value;
  mockData.desc = textarea.value;
  mockData.status = status.value;
  mockData.priority = sta.value;
  data.push(mockData);

  render(data);
}

function createCard(card) {
  const { title, desc, priority } = card;

  return ` <div class="white_1">
      <div class="list" draggable="true">
        <button class="done">
          <img src="done-7.svg" alt="" width="10.5px" height="12px" />
        </button>
        <div class="details">
          <h4>${title}</h4>
          <p>${desc}</p>
          <div class="priority">${priority}</div>
        </div>
        <div class="ikons">
          <button class="remove_ikon">
            <img
              src="./cancel_cross_delete_remove_icon_131554.png"
              width="9px"
              height="12px"
              alt=""
            />
          </button>
          <button class="write_ikon">
            <img src="./write.png" alt="" width="12px" height="12px" />
          </button>
        </div>
      </div>
    </div>`;
}

render(data);
