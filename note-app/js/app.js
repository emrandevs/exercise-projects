const createButton = document.querySelector(".create-button");
const modal = document.querySelector(".modal-screen");
const Close = document.querySelector(".close");
const createItem = document.querySelector(".continue");
const closeXBtn = document.querySelector(".close-x-btn");
const noteInput = document.querySelector(".note-input");
const colors = document.querySelectorAll(".colors .color-box");
const container =document.querySelector(".notes-container");
const searchInput =document.querySelector(".search-input");
const searchBtn =document.querySelector(".search-btn");

let noteColor = "#000";

createButton.addEventListener("click",function(){
  modal.classList.remove("hidden");
});
Close.addEventListener("click",function(){
  modal.classList.add("hidden");
});
createItem.addEventListener("click",function(){
  modal.classList.add("hidden");

  // add item to DOM
  container.insertAdjacentHTML("beforeend",`
    <div class="note" style="background-color:${noteColor};">
      <p class="node-txt">${noteInput.value}</p>
      <button class="delete"></button>
    </div>
  `);
});
closeXBtn.addEventListener("click",function(){
  modal.classList.add("hidden");
});
document.addEventListener("keyup",function(e){
  if(e.key === "Escape")
    modal.classList.add("hidden");
});
noteInput.addEventListener("keyup",function(e){
  if(e.key === "Enter"){
    createItem.click();
  }
  noteText =noteInput.value;
});
colors.forEach(function(item){
  item.addEventListener("click",function(e){
    colors.forEach(function(color){
      if(color.classList[1] === "selected"){
        color.classList.remove("selected");
      }
    })
    item.classList.add("selected");
      noteColor =item.dataset.color;
  })
});
searchBtn.addEventListener("click",function(){
  let search =searchInput.value;
  let searchedNotes = notes.filter(function(item){
    return String(item.firstChild.innerHTML).includes(search);
  })
  document.querySelectorAll(".note").forEach(function(item){
    item.remove();
  })
  searchedNotes.forEach(function(item){
    container.append(item);
  })
});
container.addEventListener("click",function(e){
  if(e.target.classList[0] === "delete"){
    e.target.parentElement.remove();
  };
});