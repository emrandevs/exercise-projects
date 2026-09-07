import Hero from "./components/Hero/Hero"
import Menu from "./components/Menu/Menu"
import Footer from "./components/Footer/Footer"
import { useState } from "react"

function App() {
  let [menuItems , setMenuItems] = useState(
    [
      {id:0,name:"espresso",price:"2" ,exist:true},
      {id:1,name:"latte",price:"4" ,exist:false},
      {id:2,name:"ice cream",price:"1" ,exist:true},
      {id:3,name:"milk",price:"1" ,exist:false},
      {id:4,name:"americano",price:"3" ,exist:true},
      {id:5,name:"afogato",price:"3" ,exist:false},
      {id:6,name:"flat white",price:"4" ,exist:true}
    ]
  )


  function deleteItem(id){
    let selectedItem = menuItems.findIndex(item => item.id === id)
    setMenuItems(menuItems.filter(item => item.id !== selectedItem))
  }
  return (
    <>
      <Hero/>
      <div className="menu-container">
        <div className="menu-line"></div>
        <h2 className="menu-head">Menu</h2>
        <div className="menu-items">
          {
            menuItems.map((item) => <Menu key={item.id} onRemove = {deleteItem} {...item}/>)
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
