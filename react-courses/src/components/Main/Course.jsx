export default function Course() {
  return (
    <article className="article-card">
      <header>
        <img
          src="./public/images/clay-banks-cReV-cbE2L4-unsplash.jpg"
          alt="Article Img"
        />
      </header>
      <main className="article-body">
        <h4 className="article-title">
          ساخت اولین پروژه رزومه‌ای با پایتون: قدم‌به‌قدم تا موفقیت
        </h4>
        <p className="article-caption">
          در این مقاله، به‌صورت گام‌به‌گام یاد می‌گیرید چطور یک پروژه ساده
          اما حرفه‌ای با پایتون بسازید که رزومه برنامه‌نویسی‌تون رو تقویت
          کنه. از ایده‌پردازی تا کدنویسی و نکات کلیدی برای ارائه پروژه،
          همه‌چیز رو با زبانی ساده و مثال‌های عملی پوشش دادیم!
        </p>
      </main>
      <div className="divider"></div>
      <footer className="article-footer flex justify-between">
        <div>
          <div className="author-label flex items-center gap-1">
            <i className="fa-solid fa-user"></i>
            <span> نویسنده: </span>
            <span className="author-name">سعیدی راد</span>
          </div>
        </div>
        <div>
          <div className="published-date flex items-center gap-2">
            <i className="fa-solid fa-calendar"></i>
            <span> 28 اسفند 1404 </span>
          </div>
        </div>
      </footer>
    </article>
  )
}
