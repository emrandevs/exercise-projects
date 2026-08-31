const prevBtn = document.querySelector(".prev");
const sliderItem = document.querySelectorAll(".slider-item");
const nextBtn = document.querySelector(".next");
const page = document.querySelectorAll(".page");
function removePictures(){
  sliderItem.forEach(function(item){
    item.classList.remove("active");
  });
  page.forEach(function(item){
    item.classList.remove("active");
  });
}
let i = 0;

prevBtn.addEventListener("click",function(){
  if(i>0){
    i--;
    removePictures();
    sliderItem[i].classList.add("active");
    page[i].classList.add("active");
  }
});
nextBtn.addEventListener("click",function(){
  if(i<4){
    i++;
    removePictures();
    sliderItem[i].classList.add("active");
    page[i].classList.add("active");
  }
});