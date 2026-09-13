import React, { useState } from "react";
import "./App.css";
import DataJS from "../data/fields.js";

export default function App() {
  const [selectedItem, setSelectedItem] = useState();

  const selectItem = (value) => {
    setSelectedItem(
      DataJS.find(
        item => item.id === value
      )
    )
  };

  return (
    <>
      <div id="card">
        <div id="header">
          <h1 className="title">مسیر سبز - راهنمای مسیر شما</h1>
        </div>
        <div id="content">
          <div>
            <select
              id="select-category"
              onChange={(e) => {
                selectItem(e.target.value);
              }}
            >
              <option value=""></option>
              <option value="Front-End">فرانت اند</option>
              <option value="Back-End">بک‌اند</option>
              <option value="Security">امنیت</option>
              <option value="AI">هوش مصنوعی</option>
            </select>
          </div>
          <div>
            <div className="selected-category-show">
              <span> نقشه اختصاصی شما برای </span>
              <span id="selected-roadmap-title">{selectedItem && selectedItem.title}</span>:
            </div>
          </div>
          {!selectedItem ? (
            <div className="empty-list">
              <p>در ابتدا لطفا حوزه مورد نظر خود را انتخاب فرمایید</p>
            </div>
          ) : (
            <div id="roadmap">
              {
                selectedItem.technologies.map(item => {
                  return(
                    <article className="roadmap-item" key={item.id}>
                      <span className="roadmap-step">{item.step}</span>
                      <img
                        src={item.image}
                        className="technology-img"
                        alt={item.name}
                      />
                      <div className="roadmap-content">
                        <h1 className="technology-name">{item.name}</h1>
                      </div>
                      <div className="img-overlay"></div>
                    </article>
                  )
                })
              }
            </div>
          )}
        </div>
      </div>

      <div id="background"></div>
    </>
  );
}
