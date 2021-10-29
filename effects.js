const inputText = document.querySelector("#searchSection");
const resultList = document.querySelector("#resultList");

document.addEventListener("click", e => {
  if (e.target.id === "searchSection") {
    inputText.style.borderBottom = "1px solid white";
  } else {
    inputText.style.borderBottom = "none";
  }
});