const btns = document.querySelectorAll(".button");
const toast = document.querySelector(".toast");
const toastIcon = document.querySelector(".toast-icon");
const toastMessage = document.querySelector(".toast-message");
const proccess = document.querySelector(".proccess");

let toastStatus = "";
let toastTxt = "";

btns.forEach(function(item){
  item.addEventListener("click",function(e){

    if(toast.style.display === "none"){
      toast.style.display = "block";

      switch(e.target.dataset.type){
        case "success" :
          toastStatus = "fa-check-circle";
          toastTxt = "تائید";
        break;
        case "warning" :
          toastStatus = "fa-exclamation-circle";
          toastTxt = "هشدار";
        break;
        case "info" :
          toastStatus = "fa-info-circle";
          toastTxt = "اطلاع";
        break;
        case "danger" :
          toastStatus = "fa-exclamation-triangle";
          toastTxt = "اخطار";
        break;
      };

      if(toast.classList[1] !== undefined){
        toast.classList.remove(toast.classList[1]);
        toast.classList.add(e.target.dataset.type);
      }else{
        toast.classList.add(e.target.dataset.type);
      };
      if(toastIcon.children[0] !== undefined){
        toastIcon.children[0].remove();
      };
      toastIcon.insertAdjacentHTML("beforeend",`
        <i class="fas ${toastStatus}"></i>
      `);
      toastMessage.innerHTML = toastTxt;
      
      let i =1;
      let proccessTime = setInterval(function(){
        proccess.style.width = `${i}%`;
        i+=5;
      },110);
      setTimeout(function(){
        clearInterval(proccessTime);
        toast.style.display = "none";
        i = 1;
        proccess.style.width = "1%";
      },3000);
    }

  });
});
