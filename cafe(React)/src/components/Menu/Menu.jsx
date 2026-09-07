import "./Menu.css";

export default function Menu({id , name , price , exist , onRemove}) {
  return (
    <div className="item" onClick={() => {onRemove(id)}}>
        <div className="item-caption">
          <p className="item-name">{name}</p>
          <p className="item-price">{exist && `${price}$`}</p>
        </div>
    </div>
  )
}
