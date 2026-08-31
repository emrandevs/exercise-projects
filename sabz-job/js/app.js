const jobs = [
  {
    id: 1,
    title: "استخدام برنامه‌نویس React",
    company: "تراشه هوشمند نوین",
    city: "تهران",
    salary: 35_000_000,
    isRemote: true,
  },
  {
    id: 2,
    title: "برنامه‌نویس ReactJs (شیراز)",
    company: "چادکو | Chadco",
    city: "شیراز",
    salary: "توافقی",
    isRemote: false,
  },
  {
    id: 3,
    title: "برنامه‌نویس ReactJs(قزوین)",
    company: "فراگستر | Faragostar",
    city: "قزوین",
    salary: 31_000_000,
    isRemote: false,
  },
  {
    id: 4,
    title: "برنامه‌نویس ReactJs (یزد)",
    company: "ایرانیان پوشش",
    city: "یزد",
    salary: "توافقی",
    isRemote: false,
  },
  {
    id: 5,
    title: "React Native Developer",
    company: "پنکو | Panco",
    city: "تهران",
    salary: "توافقی",
    isRemote: false,
  },
  {
    id: 6,
    title: "React Native Developer",
    company: "پنکو | Panco",
    city: "تهران",
    salary: "توافقی",
    isRemote: false,
  },
  {
    id: 7,
    title: "برنامه‌نویس فرانت اند (Next-JS)",
    company: "دابز | Dubz",
    city: "تهران",
    salary: 4_000_000,
    isRemote: true,
  },
  {
    id: 8,
    title: "Senior Full-Stack Developer (Js)",
    company: "توسعه و فناوری آوید",
    city: "تهران",
    salary: "توافقی",
    isRemote: false,
  },
  {
    id: 9,
    title: "برنامه‌نویس Vue Js) Front-End)",
    company: "پیشگامان فن‌آوری هوداد",
    city: "تهران",
    salary: 32_000_000,
    isRemote: false,
  },
  {
    id: 10,
    title: "برنامه‌نویس (Full-Stack(Node JS",
    company: "تلمیس | Telmis",
    city: "مشهد",
    salary: "توافقی",
    isRemote: false,
  },
  {
    id: 11,
    title: "برنامه‌نویس بک اند (Nest.js-Node js-کرج)",
    company: "سیزپک | Sizpack",
    city: "کرج",
    salary: 28_000_000,
    isRemote: true,
  },
  {
    id: 12,
    title: "برنامه‌نویس ارشد Vue js) Front-End-مشهد)",
    company: "صنایع سنجش انرژی بهینه سازان توس",
    city: "مشهد",
    salary: "توافقی",
    isRemote: false,
  },
  {
    id: 13,
    title: "برنامه‌نویس Javascript",
    company: "هوشان کاوش برنا",
    city: "تبریز",
    salary: 22_000_000,
    isRemote: false,
  },
  {
    id: 14,
    title: "برنامه‌نویس React Js",
    company: "نوآوران بوم گستر امید",
    city: "تبریز",
    salary: "توافقی",
    isRemote: false,
  },
  {
    id: 15,
    title: "برنامه‌نویس (Full-Stack(Node JS",
    company: "المو | ELMO",
    city: "اصفهان",
    salary: 48_000_000,
    isRemote: false,
  },
  {
    id: 16,
    title: "Junior Front-end Developer (React)",
    company: "سحاب | Sahab",
    city: "تهران",
    salary: "توافقی",
    isRemote: true,
  },
];

const workInput = document.querySelector("#work-input");
const cityInput = document.querySelector("#city-input");
const remoteOnlyCheckbox = document.querySelector("#remoteOnly-checkbox");
const fullTimeCheckbox = document.querySelector("#fullTime-checkbox");
const priceRangeInput = document.querySelector("#price-range-input");
const priceRange = document.querySelector(".price-range");
const searchBtn = document.querySelector("#search-btn");
const jobsContainer = document.querySelector(".jobs-container");

const loadingPage = ()=>{
  jobs.forEach((item)=>{
    jobsContainer.insertAdjacentHTML("beforeend",`
      <article class="job-card">
        <header>
          <p class="job-title">${item.title}</p>
          <p class="job-company">${item.company}</p>
        </header>
        <main class="job-content">
          <div>
            <span>
              <i class="fas fa-map-marker-alt"></i>
            </span>
            <span>${item.isRemote?"ریموت":"حضوری"}</span>
          </div>
          <div>
            <span>
              <!-- Salary Icon -->
              <i class="fas fa-dollar-sign"></i>
            </span>
            <span class="job-salary"> ${item.salary === "توافقی" ? item.salary : item.salary + " تومان/ماهیانه"}</span>
          </div>
          <div>
            <span>
              <!-- Time icon -->
              <i class="fas fa-clock"></i>
            </span>
            <span class="job-time"> تمام وقت </span>
          </div>
        </main>
        <footer>
          <p class="work-time-status">تمام وقت</p>
          <p class="work-time-status">${item.city}</p>
        </footer>
      </article>
    `);
  });
};

priceRangeInput.addEventListener("input",(e)=>{
  priceRange.innerHTML = e.target.value;
});

let result = [];
searchBtn.addEventListener("click",()=>{
  if(workInput.value){
    result = jobs.filter((item)=>{
      return item.title.toLowerCase().includes(workInput.value.toLowerCase());
    });
  }else{
    result = jobs;
  };

  if(cityInput.value){
    result = result.filter((item)=>{
      return item.city.toLowerCase() === cityInput.value.toLowerCase();
    });
  };

  if(remoteOnlyCheckbox.checked){
    result = result.filter((item)=>{
      return item.isRemote === true;
    });
  };

  if(!fullTimeCheckbox.checked){
    result = [];
  };

  if(priceRange.innerHTML !== "..."){
    result = result.filter((item)=>{
      return item.salary < +priceRangeInput.value;
    });
  };

  // show in DOM
  if(result){
    jobsContainer.innerHTML = "";
    result.forEach((item)=>{
      jobsContainer.insertAdjacentHTML("beforeend",`
        <article class="job-card">
          <header>
            <p class="job-title">${item.title}</p>
            <p class="job-company">${item.company}</p>
          </header>
          <main class="job-content">
            <div>
              <span>
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <span>${item.isRemote?"ریموت":"حضوری"}</span>
            </div>
            <div>
              <span>
                <!-- Salary Icon -->
                <i class="fas fa-dollar-sign"></i>
              </span>
              <span class="job-salary"> ${item.salary === "توافقی" ? item.salary : item.salary + " تومان/ماهیانه"}</span>
            </div>
            <div>
              <span>
                <!-- Time icon -->
                <i class="fas fa-clock"></i>
              </span>
              <span class="job-time"> تمام وقت </span>
            </div>
          </main>
          <footer>
            <p class="work-time-status">تمام وقت</p>
            <p class="work-time-status">${item.city}</p>
          </footer>
        </article>
      `);
    });
  }else{
    jobsContainer.innerHTML = "";
    jobsContainer.insertAdjacentHTML("beforeend",`
      <p class="font-Sans-Bold text-zinc-800 text-base">
        هیچ شغلی پیدا نشد :(
      </p>
    `);
  };
});