const questions = [
  {
    id: 1,
    title: "سازنده جاوا اسکریپت کیست؟",
    options: ["استیو جابز", "برندان ایچ", "ایلان ماسک"],
    answer: "برندان ایچ",
  },
  {
    id: 2,
    title: "کتاب Clean Code از کیست؟",
    options: ["آنکل باب (رابرت مارتین)", "استیو جابز", "برندان ایچ"],
    answer: "آنکل باب (رابرت مارتین)",
  },
  {
    id: 3,
    title: "جاوا اسکریپت در چه سالی ساخته شد؟",
    options: ["1995", "1997", "2000"],
    answer: "1995",
  },
  {
    id: 4,
    title: "فامیلای مادری خوبن یا پدری؟",
    options: ["پدری", "مادری", "هر دو"],
    answer: "مادری",
  },
  {
    id: 5,
    title: "ری‌اکت کتابخونه کدوم زبان هست؟",
    options: ["پایتون", "جاوا", "جاوا اسکریپت"],
    answer: "جاوا اسکریپت",
  },
];

const questionText = document.querySelector(".question");
const total = document.querySelector(".total");
const buttons = document.querySelector(".buttons");
const modalScreen = document.querySelector(".modal-screen");
const xBtn = document.querySelector(".x");
const closeBtn = document.querySelector(".close");
const continueBtn = document.querySelector(".continue");
const resultBtn = document.querySelector(".result-button");
const nextBtn = document.querySelector(".next");
const radioBtns = document.querySelectorAll(".radio-btn");
let result = document.querySelector(".result");
let current = document.querySelector(".current");
let answeredQuestions = document.querySelector(".answered-questions");
let totalQuestions = document.querySelector(".total-questions");
let SelectQuestionIndex = 0;
let score = 0;
let isOptionTrue = false;

function loadingQuestions(){
  //show the options in DOM
  questionText.innerHTML = questions[SelectQuestionIndex].title;
  let questionItems = document.querySelector(".questions");
  total.innerHTML = questions.length;
  totalQuestions.innerHTML = questions.length;
  current.innerHTML = SelectQuestionIndex +1;
  for(let i=0;i<questionItems.children.length;i++){
    questionItems.children[i].children[1].innerHTML = questions[SelectQuestionIndex].options[i];
  };

  //checking the answer
  if(score <= 2){
    if(result.classList[1] === "great"){
      result.classList.remove("great");
    };
    if(result.classList[1] === "good"){
      result.classList.remove("good");
    };      
    result.innerHTML = "بد";
    result.classList.add("bad");
  };
  let selectedOptionValue = "";
  document.querySelectorAll(".quest").forEach(function(item){
    item.children[0].addEventListener("click",function(){
      selectedOptionValue = item.children[1].innerHTML;
      isOptionTrue = selectedOptionValue === questions[SelectQuestionIndex].answer?true:false;
    });
  });
};
nextBtn.addEventListener("click",function(){
  if(isOptionTrue){
    score++;
    answeredQuestions.innerHTML = score;
    if(score <= 2){
      if(result.classList[1] === "great"){
        result.classList.remove("great");
      };
      if(result.classList[1] === "good"){
        result.classList.remove("good");
      };      
      result.innerHTML = "بد";
      result.classList.add("bad");
    };
    if(score >= 3){
      if(result.classList[1] === "great"){
        result.classList.remove("great");
      };
      if(result.classList[1] === "bad"){
        result.classList.remove("bad");
      };      
      result.innerHTML = "خوب";
      result.classList.add("good");
    };
    if(score === 5){
      if(result.classList[1] === "bad"){
        result.classList.remove("bad");
      };
      if(result.classList[1] === "good"){
        result.classList.remove("good");
      };      
      result.innerHTML = "عالی";
      result.classList.add("great");
    };
  }
  if(SelectQuestionIndex+1 !== questions.length){
    SelectQuestionIndex++;
    isOptionTrue = false;
    
    radioBtns.forEach(function(item){
      item.checked = false;
    });
    loadingQuestions();
  }else{
    nextBtn.remove();
  };
}
);
resultBtn.addEventListener("click",function(){
  modalScreen.classList.remove("hidden");
});
xBtn.addEventListener("click",function(){
  modalScreen.classList.add("hidden");
});
closeBtn.addEventListener("click",function(){
  modalScreen.classList.add("hidden");
});
continueBtn.addEventListener("click",function(){
  modalScreen.classList.add("hidden");
  isOptionTrue = false;
  radioBtns.forEach(function(item){
      item.checked = false;
  });
  SelectQuestionIndex = 0;
  loadingQuestions();
});
