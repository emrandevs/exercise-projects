import "./Hero.css"

export default function(){

    return(
        <div className="hero-container">
            <header>
                <div className="hero-btn-container">
                    <button className="hero-btn">login</button>
                    <button className="hero-btn">signin</button>
                </div>
                <div className="nav-bar">
                    <a href="#" className="nav-item">Home</a>
                    <a href="#" className="nav-item">Menu</a>
                    <a href="#" className="nav-item">About</a>
                </div>
            </header>
            <div className="line"></div>
            <main className="hero-content">
                <h1 className="hero-text">
                    you can have got a lovely day in our cafe with just a cup of coffee.
                </h1>
            </main>
        </div>
    )
}