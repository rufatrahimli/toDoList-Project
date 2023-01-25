// let sort = document.querySelector(".sort img");
let sortAsc = document.querySelector(".sortAsc");
let sortDesc = document.querySelector(".sortDesc");
let input = document.querySelector("input");
let btn = document.querySelector(".button-div");
let taskList = document.querySelector(".task-list");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inp = document.createElement("input");
  let button = document.createElement("button");
  let div = document.createElement("div");
  let p = document.createElement("p");
  button.setAttribute("type", "button");
  p.textContent = "Drag";
  div.append(inp);
  div.append(button);
  div.append(p);
  div.classList.add("append-item");
  div.classList.add("tosort");
  inp.classList.add("task-text");
  button.textContent = "x";
  button.classList.add("delete");

  inp.classList.add("append-item");
  taskList.append(div);
  e.target.removeEventListener("click", () => {});
});

document.querySelector(".task-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    let numb = document.querySelector(".task-list").childElementCount;
    if (numb > 1) {
      e.target.parentElement.remove();
    } else {
      document.querySelector(".task-text").value = "";
    }
  }
});

sortAsc.addEventListener("click", (e) => {
  sortAsc.style.display = "none";
  sortDesc.style.display = "block";
  let divs = document.querySelectorAll(".task-text");
  if (divs.length <= 1) return;
  let arr = [];
  divs.forEach((item) => {
    if (item.value === "") {
      item.parentElement.remove();
    } else {
      arr.push(item.value);
    }
  });
  arr.sort();
  divs.forEach((item, index) => {
    item.value = arr[index];
  });
  e.target.removeEventListener("click", () => {});
});

sortDesc.addEventListener("click", (e) => {
  sortDesc.style.display = "none";
  sortAsc.style.display = "block";
  let divs = document.querySelectorAll(".task-text");
  if (divs.length <= 1) return;
  let arr = [];
  divs.forEach((item) => {
    if (item.value === "") {
      item.parentElement.remove();
    } else {
      arr.push(item.value);
    }
  });
  arr.sort().reverse();
  divs.forEach((item, index) => {
    item.value = arr[index];
  });
  e.target.removeEventListener("click", () => {});
});
const dragArea = document.querySelector(".task-list");
new Sortable(dragArea, {
  animation: 100,
});
