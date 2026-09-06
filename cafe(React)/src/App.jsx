import Hero from "./components/Hero/Hero"
import Menu from "./components/Menu/Menu"
import Footer from "./components/Footer/Footer"

function App() {
  const menuItems = [
    {name:"espresso",price:"2"},
    {name:"latte",price:"4"},
    {name:"ice cream",price:"1"},
    {name:"milk",price:"1"},
    {name:"americano",price:"3"},
    {name:"afogato",price:"3"},
    {name:"flat white",price:"4"}
  ];
  return (
    <>
      <Hero/>
      <div className="menu-container">
        <div className="menu-line"></div>
        <h2 className="menu-head">Menu</h2>
        <div className="menu-items">
          <Menu {...menuItems[0]}/>
          <Menu {...menuItems[1]}/>
          <Menu {...menuItems[2]}/>
          <Menu {...menuItems[3]}/>
          <Menu {...menuItems[4]}/>
          <Menu {...menuItems[5]}/>
          <Menu {...menuItems[6]}/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
