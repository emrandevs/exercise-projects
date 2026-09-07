import React from 'react'

export default function Modal({show}) {
  return (
    <div id="modal-screen" className={show ? "" : "hide"}>
      <div id="modal-content">
        <div id="danger-icon">
          <i className="fa-solid fa-exclamation"></i>
        </div>
        <p id="modal-title">یافت نشد !</p>
        <p id="modal-caption">متاسفانه شهر مدنظر شما پیدا نشد !</p>
        <div id="modal-footer">
          <button id="close-btn" onClick={
            () => {
              location.reload();
            }
          }>تایید</button>
        </div>
      </div>
    </div>
  )
}
