const questions = [
  {
    hint: "زبان نشانه‌گذاری که برای ساختاردهی صفحات وب استفاده می‌شود",
    answer: "HTML",
    score: 1,
  },
  {
    hint: "زبانی که برای استایل‌دهی به صفحات وب استفاده می‌شود",
    answer: "CSS",
    score: 0.75,
  },
    {
    hint: "زبانی که باعث زنده شدن صفحات وب می‌شود",
    answer: "JAVASCRIPT",
    score: 1.75,
  },
  {
    hint: "لایبرری محبوب جاوااسکریپت برای ساخت رابط کاربری",
    answer: "REACT",
    score: 1.5,
  },
  {
    hint: "ابزاری برای مدیریت و نسخه‌بندی کدها",
    answer: "GIT",
    score: 0.5,
  },
  {
    hint: "زبان برنامه‌نویسی تایپ‌محور که روی جاوااسکریپت ساخته شده است",
    answer: "TYPESCRIPT",
    score: 1.25,
  },
  {
    hint: "سیستمی که برای طراحی ریسپانسیو استفاده می‌شود",
    answer: "BOOTSTRAP",
    score: 1,
  },
  {
    hint: "فرمت محبوب برای تصاویر وکتوری در وب",
    answer: "SVG",
    score: 0.75,
  },
  {
    hint: "ابزاری برای بسته‌بندی ماژول‌های جاوااسکریپت",
    answer: "WEBPACK",
    score: 1,
  },
  {
    hint: "سرویسی برای میزبانی کد و همکاری تیمی",
    answer: "GITHUB",
    score: 0.5,
  }
];

//* Start Coding 👨‍💻🔥❤️

const inputs = document.querySelector(".inputs");
const hintWord = document.querySelector(".hint-word");
const userWritted = document.querySelector(".user-writted");
const guessCount = document.querySelector(".guess-count");
const userScore = document.querySelector(".score");
const continueBtn = document.querySelector(".continue");
const resetBtn = document.querySelector(".reset");

let qindex = 0 ;
let score = 0 ;
let guess = 3;
let answer = "";

const showToast = (type) => {
  let message = "";
  let icon = "";
  let color = "";

  switch(type){
    case "true" :
      message = "جواب درست بود";
      icon = `fa-check-circle`;
      color = `green`;
      break;
    case "false" :
      message = "جواب غلط بود";
      icon = `fa-exclamation-triangle`;
      color = `red`;
      break;
  };
  document.body.insertAdjacentHTML("beforeend",`
    <div class="toast" style="color:${color};">
      <div class="toast-content">
        <div class="toast-icon">
          <i class="${icon}"></i>
        </div>
        <p class="toast-message">${message}</p>
      </div>
      <div class="process-bar">
        <div class="process" style="background-color:${color};"></div>
      </div>
    </div>
  `);

  continueBtn.disabled = true;
  continueBtn.classList.add("disabled");

  const proccess = document.querySelector(".process");
  let pro = 0;
  let proInterval = setInterval(() => {
    pro++;
    proccess.style.width = `${pro}%`;
    if(pro === 100){
      clearInterval(proInterval);
      document.querySelector(".toast").remove();
      continueBtn.disabled = false;
      continueBtn.classList.remove("disabled");
    };
  },15);
};

const showModal = (type) => {
  let icon = "";
  let text = "";
  let btnText = "";
  switch(type){
    case "lose" :
      icon = "fa-exclamation-circle";
      text = "شما بیش از حد مجاز تلاش کردید";
      btnText = "تلاش مجدد";
      break;
    case "win" :
      icon = "fa-check-circle";
      text = "شما برنده شدید";
      btnText = "تایید";
      break;
  };
  document.body.insertAdjacentHTML("beforeend",`
    <div class="modal-screen ">
      <div class="modal-card ">
        <div class="modal-icon">
          <i class="${icon}"></i>
        </div>
        <div class="modal-body">
          <p class="modal-content">${text}</p>
        </div>
        <div class="modal-footer">
          <button id="try-again">${btnText}</button>
        </div>
      </div>
    </div>
  `);
  const tryAgain = document.querySelector("#try-again");
  tryAgain.addEventListener("click",() => {
    document.querySelector(".modal-screen").remove();
    location.reload();
  });
};

const showContent = () => {
  
  // show content in DOM
  inputs.innerHTML = "";
  questions[qindex].answer.split()
  questions[qindex].answer.split('').forEach(() => {
    inputs.insertAdjacentHTML("beforeend",`
      <input type="text" maxlength="1" class="charInput"/>
    `);
  });
  hintWord.innerHTML = questions[qindex].hint;

  // inputs
  const charInputs = document.querySelectorAll(".charInput");
  let selectedInputIndex = 0;
  charInputs[0].focus();
  document.addEventListener("keyup",(e) => {
    if(e.key === "Backspace" && selectedInputIndex > 0){
      selectedInputIndex--;
      charInputs[selectedInputIndex].focus();     
    };
    if(selectedInputIndex < questions[qindex].answer.length - 1 && e.key !== "Backspace"){
      selectedInputIndex++;
      charInputs[selectedInputIndex].focus();
    };
    // answer in DOM
    answer = "";
    charInputs.forEach(item => {
      answer+= item.value.toUpperCase();
    });
    userWritted.innerHTML = answer;
  });
};

continueBtn.addEventListener("click",() => {
  if(questions[qindex].answer === answer){
    score += questions[qindex].score;
    userScore.innerHTML = score;
    answer = "";
    userWritted.innerHTML = answer;
    guess = 3;
    guessCount.innerHTML = guess;
    showToast("true");
    if(qindex < questions.length-1){
      qindex++;
      showContent();
    }else{
      //win
      showModal("win");
    }
  }else{
    showToast("false");
    if(guess > 1){
      guess--;
      guessCount.innerHTML = guess;
      answer = "";
      userWritted.innerHTML = "";
      showContent();
    }else{
      guess--;
      guessCount.innerHTML = guess;
      showModal("lose");
    }
  }
});

resetBtn.addEventListener("click",() => {
  location.reload();
});

document.body.addEventListener("keyup",(e) => {
  if(e.key === "Enter"){
    if(document.querySelector("#try-again")){
      document.querySelector("#try-again").click();
    }else{
      continueBtn.click();
    };
  };
});
