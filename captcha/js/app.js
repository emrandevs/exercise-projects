const chars = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z',
  '0', '1', '2', '3', '4',
  '5', '6', '7', '8', '9'
];
const captcha = document.querySelector(".captcha");
const regenerateBtn = document.querySelector(".regenerate");
const captchaInput = document.querySelector(".captcha-input");
const confirmBtn = document.querySelector(".confirm");
const toast = document.querySelector(".toast");
const progressBar = document.querySelector(".progress-bar");

function captchaCreator(){
  let captchaCode = "";
  for(let i=0;i<6;i++){
    captchaCode+=chars[Math.floor(Math.random()*chars.length)];
  };
  captcha.innerHTML=captchaCode;
};
regenerateBtn.addEventListener("click",function(){
  captcha.innerHTML="";
  captchaInput.value = "";
  captchaCreator();
});
confirmBtn.addEventListener("click",function(){
  if( captcha.innerHTML === captchaInput.value){
    toast.classList.remove("hidden");
    for(let j=1;j<=100;j++){
      setTimeout(function(){
        progressBar.children[0].style.width = `${j}%`;
      },10);
    };
    progressBar.children[0].style.width = `0`;
    setTimeout(function(){
      toast.classList.add("hidden");
    },2000);
  }else{
    captchaInput.value = "";
    captchaCreator();
  }
});

