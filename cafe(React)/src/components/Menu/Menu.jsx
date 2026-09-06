import "./Menu.css";

export default function Menu({name , price}) {
  return (
    <div className="item">
        <div className="item-caption">
          <p className="item-name">{name}</p>
          <p className="item-price">{price}$</p>
        </div>
    </div>
  )
}
