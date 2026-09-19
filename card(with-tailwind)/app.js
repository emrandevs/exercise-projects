const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click",()=>{
    if(document.querySelector("html").classList[0] === "dark"){
        document.querySelector("html").classList.remove("dark");
    }else{
        document.querySelector("html").classList.add("dark");
    }
});