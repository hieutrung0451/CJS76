const form = document.querySelector("form");
const list = document.getElementById("list");
const addBtn = document.getElementById("add-btn");
const searchBtn = document.getElementById("search-btn");
const deleteBtn = document.getElementById("delete-btn");

// Add new Phone Contact
function addItem(e) {
  e.preventDefault();

  const phoneName = e.target.querySelector("#name").value;
  const phoneNumber = e.target.querySelector("#phone-number").value;

  readData(phoneName, phoneNumber);
}

function saveData() {
  let listData = [];

  const li = list.querySelectorAll("li");
  for (let i = 0; i < li.length; i++) {
    const nameSpan = li[i].querySelector(".item-name");
    const numberSpan = li[i].querySelector(".item-phone");

    let dataInfo = {
      name: nameSpan.textContent,
      phoneNumber: numberSpan.textContent,
    };

    listData.push(dataInfo);
  }

  localStorage.setItem("listData", JSON.stringify(listData));
}

function loadData() {
  if (localStorage.getItem("listData") != null) {
    let listData = JSON.parse(localStorage.getItem("listData"));
    list.innerHTML = "";

    for (let i = 0; i < listData.length; i++) {
      let data = listData[i];
      readData(data.name, data.phoneNumber);
    }
  }
}

function readData(nameValue, phoneNumberValue) {
  const li = document.createElement("li");
  const name = document.createElement("span");
  const phoneNumber = document.createElement("span");

  name.textContent = nameValue;
  phoneNumber.textContent = phoneNumberValue;

  name.classList.add("item-name");
  phoneNumber.classList.add("item-phone");

  li.appendChild(name);
  li.appendChild(phoneNumber);

  list.appendChild(li);

  // store
  saveData();

  document.querySelectorAll("input")[0].value = "";
  document.querySelectorAll("input")[1].value = "";
  document.querySelectorAll("input")[2].value = "";
}

function searchItem(e) {
  e.preventDefault();

  const li = document.querySelectorAll("li");
  const itemName = document.querySelectorAll("li .item-name");
  const itemPhone = document.querySelectorAll("li .item-phone");
  const search = document.getElementById("search");

  let filter = search.value.toUpperCase();
  let txtValue, txtValue2;

  for (let i = 0; i < li.length; i++) {
    txtValue = itemName[i].textContent || itemName[i].innerText;
    txtValue2 = itemPhone[i].textContent || itemPhone[i].innerText;

    if (
      txtValue.toUpperCase().indexOf(filter) > -1 ||
      txtValue2.toUpperCase().indexOf(filter) > -1
    ) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function deleteDuplicate(e) {
  e.preventDefault();

  list.removeChild(list.lastChild);
  saveData();
}

form.addEventListener("submit", addItem);
searchBtn.addEventListener("click", searchItem);
deleteBtn.addEventListener("click", deleteDuplicate);

loadData();
