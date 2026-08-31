let countriesArr = [];
const countries = document.querySelector(".countries");
const themeButton = document.querySelector("#theme-button");
const searchBy = document.querySelector(".search-by");
const dropdown = document.querySelector(".dropdown");
const dropdownItem = document.querySelectorAll(".dropdown-item");
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

const showNumber = (num)=>{
  let finalNum = "";
  let NumArray = String(num).split('').reverse();
  for(let i = 0;i<NumArray.length;i++){
      if(i % 3 === 0 && i !== 0){
          finalNum += ',';
      };
      finalNum += NumArray[i];
  };
  finalNum = finalNum.split('').reverse().join('');
  return finalNum;
};

const DOMLoading = ()=>{
  console.log(countriesArr);
  
  countriesArr.forEach((item)=>{
    if(item.flag.url_png !== ""){
      countries.insertAdjacentHTML("beforeend",`
        <article class="country">
          <img src="${item.flag.url_png}" alt="${item.names.common}" />
          <div class="country-info">
            <h2 class="country-name">${item.names.common}</h2>
            <p class="country-population">${showNumber(item.population)}</p>
            <p class="country-region">${item.region}</p>
            <p class="country-capital">${item.capitals[0] && item.capitals[0].name || "no capital"}</p>
          </div>
        </article>  
      `);
    }
  });
};

let theme = "";
const selectTheme = ()=>{
  if(localStorage.getItem("theme") === "light"){
    localStorage.setItem("theme","light");
    theme = "light";
    document.body.classList.remove("dark");
    themeButton.children[0].classList.remove("fa-moon");
    themeButton.children[0].classList.add("fa-sun");
  }else{
    localStorage.setItem("theme","dark");
    theme = "dark";
    document.body.classList.add("dark");
    themeButton.children[0].classList.add("fa-moon");
    themeButton.children[0].classList.remove("fa-sun");
  };
};
selectTheme();

themeButton.addEventListener("click",()=>{
  if(localStorage.getItem("theme") === "light"){
    localStorage.setItem("theme","dark");
  }else{
    localStorage.setItem("theme","light");
  };
  selectTheme();
});


fetch("https://api.restcountries.com/countries/v5?limit=100",{
  headers : {'Authorization': 'Bearer rc_live_fd0a6b008fd9435596aac4d39203c802'}
}).then((response)=>{
  return response.json();
}).then((data)=>{
  countriesArr = data.data.objects;
  DOMLoading();
});

// filtering 

const removeDOM = ()=>{
  document.querySelectorAll(".country").forEach((item) => item.remove());
};

searchBy.addEventListener("click",()=>{
  if(dropdown.classList[1] === "hidden"){
    dropdown.classList.remove("hidden");
  }else{
    dropdown.classList.add("hidden");
  };
});

let selectC = [];
dropdownItem.forEach((item)=>{
  item.addEventListener("click",(e)=>{
    switch(e.target.dataset.c){
      case "europe" :
        selectC = countriesArr.filter((item) => item.region === "Europe");
        break;
      case "africa" :
        selectC = countriesArr.filter((item) => item.region === "Africa");
        break;
      case "america" :
        selectC = countriesArr.filter((item) => item.region === "Americas");
        break;
      case "australia" :
        selectC = countriesArr.filter((item) => item.region === "Oceania");
        break;
      case "asia" :
        selectC = countriesArr.filter((item) => item.region === "Asia");
        break;
    };
    dropdown.classList.add("hidden");
    removeDOM();
    selectC.forEach((item)=>{
      if(item.capitals[0] !== undefined && item.flag.url_png !== ""){
        countries.insertAdjacentHTML("beforeend",`
          <article class="country">
            <img src="${item.flag.url_png}" alt="${item.names.common}" />
            <div class="country-info">
              <h2 class="country-name">${item.names.common}</h2>
              <p class="country-population">${showNumber(item.population)}</p>
              <p class="country-region">${item.region}</p>
              <p class="country-capital">${item.capitals[0].name}</p>
            </div>
          </article>
        `);
      }
    });
  });
})

// searching

searchBtn.addEventListener("click",() => {
  fetch(
    `https://api.restcountries.com/countries/v5?q=${searchInput.value}`,
    { headers: { 'Authorization': 'Bearer rc_live_fd0a6b008fd9435596aac4d39203c802' } }
  )
  .then((response)=> response.json())
  .then((data)=>{
    removeDOM();
    countries.insertAdjacentHTML("beforeend",`
      <article class="country">
        <img src="${data.data.objects[0].flag.url_png}" alt="${data.data.objects[0].names.common}" />
        <div class="country-info">
          <h2 class="country-name">${data.data.objects[0].names.common}</h2>
          <p class="country-population">${showNumber(data.data.objects[0].population)}</p>
          <p class="country-region">${data.data.objects[0].region}</p>
          <p class="country-capital">${data.data.objects[0].capitals[0].name}</p>
        </div>
      </article>
    `);
  });
});
document.addEventListener("keyup",(e)=>{
  if(e.key === "Enter"){
    fetch(
      `https://api.restcountries.com/countries/v5?q=${searchInput.value}`,
      { headers: { 'Authorization': 'Bearer rc_live_fd0a6b008fd9435596aac4d39203c802' } }
    )
    .then((response)=> response.json())
    .then((data)=>{
      removeDOM();
      countries.insertAdjacentHTML("beforeend",`
        <article class="country">
          <img src="${data.data.objects[0].flag.url_png}" alt="${data.data.objects[0].names.common}" />
          <div class="country-info">
            <h2 class="country-name">${data.data.objects[0].names.common}</h2>
            <p class="country-population">${showNumber(data.data.objects[0].population)}</p>
            <p class="country-region">${data.data.objects[0].region}</p>
            <p class="country-capital">${data.data.objects[0].capitals[0].name}</p>
          </div>
        </article>
      `);
    });
  };
});