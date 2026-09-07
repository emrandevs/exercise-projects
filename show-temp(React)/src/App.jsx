import { useState } from 'react'
import "../public/css/index.css"

function App() {
  let [temp,setTemp] = useState(0);

  return (
    <section className={`wrapper ${temp > 15 ? "too-warm" : "too-cold"}`}>
      <main className="main">
        <p className="temp">{temp}C</p>
        <div className="buttons">
          <button className="decrease" onClick={
            () => {
              setTemp(temp - 1)
            }
          }>Decrease</button>
          <button className="increase" onClick={
            () => {
              setTemp(temp + 1)
            }
          }>Increase</button>
        </div>
      </main>
      <div className="bg-blur"></div>
    </section>
  )
}

export default App
