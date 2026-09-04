import "./Menu.css"

export default function Menu() {
    function item(){
        return (
            <div className="item">
                <div className="item-caption">
                    <p className="item-name">Latte</p>
                    <p className="item-price">3$</p>
                </div>
            </div>
        )
    }
  return (
    <div className="menu-container">
        <div className="menu-line"></div>
        <h2 className="menu-head">Menu</h2>
        <div className="menu-items">
            {item()}
            {item()}
            {item()}
            {item()}
            {item()}
            {item()}
            {item()}
            {item()}
            {item()}
        </div>
    </div>
  )
}
