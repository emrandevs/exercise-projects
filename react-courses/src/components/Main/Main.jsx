import "./button.css"
import "./fonts.css"
import "./index.css"
import Course from "./Course"

export default function Main() {
  return (
    <main>
        <section id="hero-section"className="container flex items-center justify-between">
          <div id="headline">
            <h1 id="title">سبزبلاگ؛ مرجع آموزش و پروژه‌های برنامه‌نویسی</h1>
            <p id="caption">
              سبزبلاگ فضایی برای یادگیری برنامه‌نویسی و به‌اشتراک‌گذاری دانش است.
              اینجا مقالات آموزشی، نکات کاربردی و پروژه‌های رزومه‌ای برنامه‌نویسی
              با زبانی ساده و حرفه‌ای ارائه می‌شه. هدف ما کمک به شماست تا
              مهارت‌هاتون رو تقویت کنید و رزومه‌ای قوی با پروژه‌های جذاب بسازید!
            </p>
            <div id="hero-btns" className="gap-2">
              <button className="btn primary-btn">خواندن مقالات</button>
              <button className="btn secondary-btn">تهیه اشتراک</button>
            </div>
          </div>
          <div id="image-container">
            <img src="./public/images/hero-illustrator.png" />
          </div>
        </section>
        <section id="articles-section">
          <div id="articles-header" className="container flex justify-between">
            <h2 id="section-title">مقالات اخیر</h2>
            <a href="#" className="read-more"> بیشتر بخوانید </a>
          </div>
        <div id="items" className="container">
            <Course/>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
        </div>
        </section>
    </main>
  )
}
