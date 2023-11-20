let oppen = document.querySelector(".oppen");
let input = document.querySelector("input");
let add_modal = document.getElementsByClassName("add_btn");

function openModal() {
  if (oppen.style.display === "block") {
    oppen.style.display = "none";
  } else oppen.style.display = "block";
}

let submit = document.querySelector(".submit");

let data = [];

function list(ev) {
  ev.preventDefault();
  let title = document.getElementById("title").value;
  let desc = document.getElementById("description").value;
  let status = document.getElementById("status").value;
  let priority = document.getElementById("priority").value;

  data.push({ title, desc, status, priority });
  render(data);
}

submit.onclick = list;

let doneList = (el) => {
  data.map((item) => {
    if (item.id === el.id) {
      item.status = "done";
    }
  });
  render(data);
};

function render(data) {
  let card = document.querySelectorAll(".card");
  card[0].innerHTML = "";
  card[1].innerHTML = "";
  card[2].innerHTML = "";
  card[3].innerHTML = "";

  data.map((e) => {
    let carddata = `<div class="white flex " id="${e.id}">
            <button class="doneBtn">
              <img src="./done-7.svg" height="20px" width="20px" alt="" />
            </button>
            <div class="details">
              <h4>${e.title}</h4>
              <p>${e.desc}</p>
              <div class="priority">${e.priority}</div>
            </div>
            <div class="ikons">
              <button>
                <img
                  src="./cancel_cross_delete_remove_icon_131554.png"
                  height="12.5px"
                  width="12.5px"
                  alt=""
                />
              </button>
              <button>
                <img src="./write.png" height="12.5px" width="12.5px" alt="" />
              </button>
            </div>
          </div> `;

    if (e.status === "todo") {
      card[0].innerHTML += carddata;
    }
    if (e.status === "inprogress") {
      card[1].innerHTML += carddata;
    }
    if (e.status === "stuck") {
      card[2].innerHTML += carddata;
    }
    if (e.status === "done") {
      card[3].innerHTML += carddata;
    }
    card.innerHTML += carddata;
  });

  let donebtn = document.querySelectorAll(".doneBtn");

  donebtn.forEach((element) => {
    element.onclick = () => doneList(element);
  });
}
