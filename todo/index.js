// let submit = document.querySelector(".submit")
// function list() {
//   let title = document.getElementById("title")
//   let desc = document.getElementById("description")
//   let status = document.getElementById("status")
//   let priority = document.getElementById("priority")
  
//   data.push({title, desc, status, priority})
//   render(data)
//   }
//   submit.onclick = list

// function render(data) {
//   let card = document.querySelectorAll(".card")
//   card[0].innerHTML = ""
//   card[1].innerHTML = ""
//   card[2].innerHTML = ""
//   card[3].innerHTML = ""

//   data.map((e) => {
//     let carddata = `<div class="card">
//     <div class="list" draggable="true">
//       <button class="done">
//         <img src="done-7.svg" alt="" width="10.5px" height="12px" />
//       </button>
//       <div class="details">
//         <h4>${e.title}</h4>
//         <p>${e.desc}</p>
//         <div class="priority">${e.priority}</div>
//       </div>
//       <div class="ikons">
//         <button class="remove_ikon">
//           <img
//             src="./cancel_cross_delete_remove_icon_131554.png"
//             width="9px"
//             height="12px"
//             alt=""
//           />
//         </button>
//         <button class="write_ikon">
//           <img src="./write.png" alt="" width="12px" height="12px" />
//         </button>
//       </div>
//     </div>
//   </div>`
//   console.log(carddata);
//     if (e.status === "todo") {
//       card[0].innerHTML += carddata
//     }
//     if (e.status === "inprogress") {
//       card[1].innerHTML += carddata
//     }
//     if (e.status === "stuck") {
//       card[2].innerHTML += carddata;
//     }
//     if (e.status === "done") {
//       card[3].innerHTML += carddata;
//     }
//     card.innerHTML += carddata;
//   });
// }

let oppen = document.getElementById('oppen')
let input = document.querySelector('input')
let add_modal = document.getElementById('add_btn')

function openModal() {
  if(oppen.style.display == "block") oppen.style.display = 'none';
  else oppen.style.display = 'block';
}