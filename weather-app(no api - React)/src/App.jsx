import { useState } from "react";
import Modal from "./components/Modal";

export default function App() {

  const weatherDB = [
    { id: 1, city: "تهران", temperature: 29, condition: "آفتابی" },
    { id: 2, city: "کرج", temperature: 28, condition: "نیمه‌ابری" },
    { id: 3, city: "مشهد", temperature: 26, condition: "کمی ابری" },
    { id: 4, city: "اصفهان", temperature: 31, condition: "آفتابی" },
    { id: 5, city: "شیراز", temperature: 33, condition: "صاف" },
    { id: 6, city: "تبریز", temperature: 24, condition: "ابری" },
    { id: 7, city: "اهواز", temperature: 41, condition: "بسیار گرم" },
    { id: 8, city: "قم", temperature: 32, condition: "آفتابی" },
    { id: 9, city: "کرمانشاه", temperature: 27, condition: "خنک و صاف" },
    { id: 10, city: "ارومیه", temperature: 23, condition: "ابری" },
    { id: 11, city: "رشت", temperature: 27, condition: "بارانی" },
    { id: 12, city: "زاهدان", temperature: 39, condition: "گرم و خشک" },
    { id: 13, city: "کرمان", temperature: 35, condition: "گرم و خشک" },
    { id: 14, city: "اراک", temperature: 28, condition: "آفتابی" },
    { id: 15, city: "یزد", temperature: 36, condition: "خشک و آفتابی" },
    { id: 16, city: "اردبیل", temperature: 20, condition: "خنک" },
    { id: 17, city: "بندرعباس", temperature: 38, condition: "شرجی" },
    { id: 18, city: "بوشهر", temperature: 37, condition: "شرجی و گرم" },
    { id: 19, city: "زنجان", temperature: 25, condition: "نیمه‌ابری" },
    { id: 20, city: "سمنان", temperature: 30, condition: "آفتابی" },
    { id: 21, city: "قزوین", temperature: 29, condition: "آفتابی" },
    { id: 22, city: "خرم‌آباد", temperature: 30, condition: "گرم" },
    { id: 23, city: "سنندج", temperature: 22, condition: "خنک و ابری" },
    { id: 24, city: "ساری", temperature: 26, condition: "مرطوب و ابری" },
    { id: 25, city: "گرگان", temperature: 27, condition: "نیمه‌ابری" },
    { id: 26, city: "شهرکرد", temperature: 21, condition: "خنک" },
    { id: 27, city: "بیرجند", temperature: 33, condition: "گرم و خشک" },
    { id: 28, city: "ایلام", temperature: 29, condition: "آفتابی" },
    { id: 29, city: "بجنورد", temperature: 24, condition: "خنک" },
    { id: 30, city: "یاسوج", temperature: 22, condition: "خنک و ابری" },
    { id: 31, city: "همدان", temperature: 23, condition: "خنک و آفتابی" }
  ];

  const [searchInput, setSearchInput] = useState("");
  const [selectedWeather,setSelectedWeather] = useState({ id: 0, city: "", temperature: 0, condition: "" });

  const weatherSearch = () => {
    setSelectedWeather(weatherDB.find(item => item.city === searchInput));
  };
  document.addEventListener("keyup",(e) => {
    if(e.key === "Enter"){
      weatherSearch();
    }
  });
  return (
    <>
      <article id="weather-card">
        <header id="weather-card.header">
          <div id="city-name">{selectedWeather && selectedWeather.city}</div>
          <div className="temp-parent">
            <span id="symbol"> C </span>
            <span id="temperature"> {selectedWeather && selectedWeather.temperature} </span>
          </div>
          <div id="desc"> {selectedWeather && selectedWeather.condition} </div>
          <div id="search-field">
            <input
              value={searchInput}
              type="text"
              placeholder="نام شهر خود را جستجو کنید ..."
              id="search-input"
              className="w-full h-10 bg-black"
              onChange={(event) => {
                setSearchInput(event.target.value);
              }}
            />
            <button id="search-btn" onClick={weatherSearch}>
              جستجو
            </button>
          </div>
        </header>
        <main>
          <div id="in-hours">
            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="./public/images/sunny.png" />
              <p className="hour-temp">27C</p>
            </article>
            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="./public/images/rainy.png" />
              <p className="hour-temp">27C</p>
            </article>
            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="./public/images/sunny.png" />
              <p className="hour-temp">27C</p>
            </article>
            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="./public/images/sunny.png" />
              <p className="hour-temp">27C</p>
            </article>
          </div>
        </main>
        <footer id="daily-section">
          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/images/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>
          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/images/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>
          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/images/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>
          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/images/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>
        </footer>
      </article>
      <Modal show = {selectedWeather ? false : true} />
    </>
  );
}
