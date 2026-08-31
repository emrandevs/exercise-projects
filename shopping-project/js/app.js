const products = [
  {
    id: 1,
    title:
      "لپ تاپ 15.6 اینچی لنوو مدل IdeaPad Slim 3 15IRH8-i7 13620H 16GB 512SSD",
    price: 32_000_000,
    img: "./public/images/products/image01.png",
    description:
      "این لپ‌تاپ لنوو با پردازنده‌ی قدرتمند i7 نسل ۱۳ و ۱۶ گیگابایت رم، مناسب برای کارهای روزمره و سنگین. حافظه ۵۱۲ گیگابایتی SSD عملکرد سریعی را فراهم می‌کند.",
  },
  {
    id: 2,
    title:
      "لپ تاپ 14 اینچی ایسوس مدل VivoBook R465FA - Core i5 1135G7 8GB 256SSD",
    price: 27_000_000,
    img: "./public/images/products/image02.png",
    description:
      "لپ‌تاپ اقتصادی ایسوس با پردازنده i5 نسل ۱۱، دارای ۸ گیگابایت رم و ۲۵۶ گیگابایت حافظه SSD، مناسب برای استفاده روزمره و سبک.",
  },
  {
    id: 3,
    title: "لپ تاپ 13.3 اینچی اپل مدل MacBook Air 2020 M1 8GB 256SSD",
    price: 55_000_000,
    img: "./public/images/products/image03.png",
    description:
      "مک‌بوک ایر با پردازنده M1 و ۸ گیگابایت رم، ایده‌آل برای کاربران حرفه‌ای اپل که به دنبال سرعت و عملکرد بالا در یک بدنه سبک هستند.",
  },
  {
    id: 4,
    title: "لپ تاپ 16 اینچی اچ‌پی مدل Envy x360 - Ryzen 7 5700U 16GB 512SSD",
    price: 47_000_000,
    img: "./public/images/products/image04.png",
    description:
      "لپ‌تاپ تبدیل‌پذیر اچ‌پی با پردازنده Ryzen 7 و ۱۶ گیگابایت رم، مناسب برای کارهای گرافیکی و مالتی‌مدیا. صفحه‌نمایش ۱۶ اینچی و کیفیت ساخت عالی.",
  },
  {
    id: 5,
    title: "لپ تاپ 15.6 اینچی دل مدل G5 15 SE - Ryzen 5 4600H 8GB 512SSD",
    price: 36_000_000,
    img: "./public/images/products/image05.png",
    description:
      "لپ‌تاپ گیمینگ دل با پردازنده Ryzen 5 و ۸ گیگابایت رم، مناسب برای گیمرها و کاربران حرفه‌ای که به دنبال عملکرد قوی هستند.",
  },
  {
    id: 6,
    title:
      "لپ تاپ 15.6 اینچی ایسر مدل Nitro 5 AN515-45 - Ryzen 7 5800H 16GB 1TB SSD",
    price: 54_000_000,
    img: "./public/images/products/image06.png",
    description:
      "یک لپ‌تاپ گیمینگ قدرتمند از ایسر با پردازنده Ryzen 7 و ۱۶ گیگابایت رم. دارای ۱ ترابایت حافظه SSD برای بازی‌های حجیم و اجرای سریع.",
  },
  {
    id: 7,
    title:
      "لپ تاپ 14 اینچی لنوو مدل ThinkPad X1 Carbon Gen 9 - Core i7 1165G7 16GB 1TB SSD",
    price: 62_000_000,
    img: "./public/images/products/image07.png",
    description:
      "لپ‌تاپ حرفه‌ای و باکیفیت از سری ThinkPad با پردازنده i7 و ۱۶ گیگابایت رم. مناسب برای کاربران تجاری و حرفه‌ای که به دنبال کیفیت ساخت بالا و امنیت هستند.",
  },
  {
    id: 8,
    title: "لپ تاپ 13.3 اینچی دل مدل XPS 13 - Core i7 1185G7 16GB 512SSD",
    price: 71_000_000,
    img: "./public/images/products/image08.png",
    description:
      "لپ‌تاپ دل XPS با طراحی زیبا و پردازنده i7، ۱۶ گیگابایت رم و صفحه‌نمایش باکیفیت، انتخابی عالی برای کاربران حرفه‌ای و علاقه‌مندان به تکنولوژی.",
  },
  {
    id: 9,
    title: "لپ تاپ 14 اینچی ایسوس مدل ZenBook 14 - Ryzen 5 5500U 8GB 512SSD",
    price: 38_000_000,
    img: "./public/images/products/image09.png",
    description:
      "لپ‌تاپ سبک و زیبا از سری ZenBook با پردازنده Ryzen 5 و ۸ گیگابایت رم. مناسب برای کارهای روزمره و سبک با باتری قوی.",
  },
  {
    id: 10,
    title:
      "لپ تاپ 15.6 اینچی ام‌اس‌آی مدل GF63 Thin 11SC - Core i5 11400H 16GB 512SSD",
    price: 46_000_000,
    img: "./public/images/products/image10.png",
    description:
      "لپ‌تاپ قدرتمند MSI با پردازنده i5 نسل ۱۱، ۱۶ گیگابایت رم و کارت گرافیک مناسب. گزینه‌ای عالی برای گیمرها و کاربران حرفه‌ای.",
  },
  {
    id: 11,
    title: "لپ تاپ 15.6 اینچی اچ‌پی مدل Pavilion 15 - Core i5 1235U 8GB 512SSD",
    price: 34_000_000,
    img: "./public/images/products/image11.png",
    description:
      "لپ‌تاپ اقتصادی اچ‌پی با پردازنده i5 نسل ۱۲، ۸ گیگابایت رم و ۵۱۲ گیگابایت حافظه SSD، مناسب برای استفاده‌های روزمره و تجاری.",
  },
  {
    id: 12,
    title: "لپ تاپ 16 اینچی اپل مدل MacBook Pro 2021 M1 Pro 16GB 1TB SSD",
    price: 85_000_000,
    img: "./public/images/products/image12.png",
    description:
      "مک‌بوک پرو با پردازنده M1 Pro و ۱۶ گیگابایت رم، مناسب برای کاربران حرفه‌ای اپل که به دنبال عملکرد بی‌نظیر در کارهای سنگین و حرفه‌ای هستند.",
  },
];


  
let basket = [];  
if(localStorage.getItem("shopping-basket") !== null){
  basket = JSON.parse(localStorage.getItem("shopping-basket"));
};


const productsCount = document.querySelector(".products-count");
const count = document.querySelector(".count");
const basketMain = document.querySelector(".basket-main");
const totalPrice = document.querySelector(".total-price");
const clearButton = document.querySelector(".clear-button");

const removeBasketItem = ()=>{
  if(document.querySelector(".basket-item")){
    document.querySelectorAll(".basket-item").forEach(function(item){
      item.remove();
    });
  };
};

const insertBasketItem = ()=>{
  if(basketMain.children.length !== 0){
    for(let i=0;i<basketMain.children.length;i++){
      basketMain.children[i].remove();
    };
  };
  basket = [];  
  if(localStorage.getItem("shopping-basket") !== null){
    basket = JSON.parse(localStorage.getItem("shopping-basket"));
  };
  if(basket.length !== 0){
    if(document.querySelector(".empty-basket")){
      document.querySelector(".empty-basket").remove();
    };
    basket.forEach((item)=>{
      basketMain.insertAdjacentHTML("beforeend",`
        <article class="basket-item" id="${item.id}">
          <div class="flex-center">
            <img src="${item.img}"  />
            <div class="basket-item_details">
              <p class="basket-item_title">
               ${item.title}
              </p>
              <p class="basket-item_price">${item.price}</p>
            </div>
            <div>
              <div class="buttons">
                <button class="increase" onclick="plusBtn(event)">
                  <i class="bx bx-plus"></i>
                </button>
                <button class="remove-button" onclick="removeBtn(event)">
                  <!-- Boxicons trash icon -->
                  <i class="bx bx-trash"></i>
                </button>
                <button class="decrease" onclick="decreaseBtn(event)">
                  <!-- Decrease icon -->
                  <i class="bx bx-minus"> </i>
                </button>
              </div>
              <div class="product-count-card">
                <span>تعداد:</span>
                <span class="product-count">${item.num}</span>
              </div>
            </div>
          </div>
        </article>
      `);
    });
  }else{
    basketMain.insertAdjacentHTML("beforeend",`    
      <p class="empty-basket">
       سبد خرید شما خالی می باشد :(
      </p>`
    );
  }
  let numOfBasketItems = 0;
  let priceOfBasketItems = 0;
  basket.forEach((pro)=>{
    numOfBasketItems += pro.num;
    priceOfBasketItems += pro.price * pro.num;
  });
  productsCount.innerHTML = numOfBasketItems;
  count.innerHTML = numOfBasketItems;
  totalPrice.innerHTML = priceOfBasketItems;
};
insertBasketItem();

clearButton.addEventListener("click",()=>{
  if(basketMain.children.length !== 0){
    for(let i=0;i<basketMain.children.length;i++){
      basketMain.children[i].remove();
    };
  };

  basket = [];
  localStorage.removeItem("shopping-basket");
  insertBasketItem();
});

const wrapper = document.querySelector(".wrapper");

const contentLoading = ()=>{
  products.forEach((item)=>{
    wrapper.insertAdjacentHTML("beforeend",`
      <article id = "${item.id}">
        <header class="product-header">
          <img
            src="${item.img}"
            class="product-img"
          />
        </header>
        <main class="product-body">
          <h3 class="product-title">
            ${item.title}
          </h3>
          <p class="desc">
            ${item.description}
          </p>
        </main>
        <footer class="product-footer">
          <p class="price">${item.price} تومان</p>
          <button class="add-btn add-to-cart" onclick = "addToCard(event)" >
            <i class="btn-logo bx bx-cart-alt"></i>
            افزودن به سبد
          </button>
        </footer>
      </article>
    `);
  });
};

let selectedProductIndex = -1;

const addToCard = (event)=>{
  if(event.target.classList[0] === "btn-logo"){
    selectedProductIndex = products.findIndex((item)=>{
      return item.id === +event.target.parentElement.parentElement.parentElement.id;
    });
  }else if(event.target.classList[0] === "add-btn"){
    selectedProductIndex = products.findIndex((item)=>{
      return item.id === +event.target.parentElement.parentElement.id;
    });
  };

  let isProductExistInBasket = basket.findIndex((item)=>{
    return item.id === products[selectedProductIndex].id ;
  });
  if(isProductExistInBasket === -1){
    basket.push({...products[selectedProductIndex],num:1});
  }else{
    basket[isProductExistInBasket].num++;
  };
  localStorage.setItem("shopping-basket",JSON.stringify(basket));

  removeBasketItem();
  insertBasketItem();
};

const openBasket = document.querySelector(".open-basket")
const basketScreen = document.querySelector(".basket-screen");
const closeBasket = document.querySelector(".close-basket");

openBasket.addEventListener("click",()=>{
  basketScreen.classList.remove("hidden");
});
closeBasket.addEventListener("click",()=>{
  basketScreen.classList.add("hidden");
});


//increase


const plusBtn = (event) => {
  //find id
  let selectedBasketItemId = 0 ;
  if(event.target.classList[0] === "increase"){
    selectedBasketItemId = +event.target.parentElement.parentElement.parentElement.parentElement.id;

  }else if(event.target.classList[0] === "bx"){
    selectedBasketItemId = +event.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
  };

  // update basket and refresh
  let selectedBasketItemIndex = basket.findIndex((item) => {
    return item.id === selectedBasketItemId;
  });
  basket[selectedBasketItemIndex].num ++;
  localStorage.setItem("shopping-basket",JSON.stringify(basket));
  removeBasketItem();
  insertBasketItem();
};

const removeBtn = (event) => {
  //find id
  let selectedBasketItemId = 0 ;
  if(event.target.classList[0] === "remove-button"){
    selectedBasketItemId = +event.target.parentElement.parentElement.parentElement.parentElement.id;

  }else if(event.target.classList[0] === "bx"){
    selectedBasketItemId = +event.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
  };
  // remove item and refresh

  basket = basket.filter((item)=>{
    return item.id !== selectedBasketItemId;
  });
  localStorage.setItem("shopping-basket",JSON.stringify(basket));
  removeBasketItem();
  insertBasketItem();
};

const decreaseBtn = (event)=>{
  //find id
  let selectedBasketItemId = 0 ;
  if(event.target.classList[0] === "decrease"){
    selectedBasketItemId = +event.target.parentElement.parentElement.parentElement.parentElement.id;

  }else if(event.target.classList[0] === "bx"){
    selectedBasketItemId = +event.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
  };

  // decrease item and refresh  
  const selectedItemIndex = basket.findIndex((item)=>{
    return item.id === selectedBasketItemId;
  });

  if(basket[selectedItemIndex].num === 1){
    basket = basket.filter((item)=>{
      return item.id !== selectedBasketItemId;
    });
    localStorage.setItem("shopping-basket",JSON.stringify(basket));
    removeBasketItem();
    insertBasketItem();
  }else{
    basket[selectedItemIndex].num--;
    localStorage.setItem("shopping-basket",JSON.stringify(basket));
    removeBasketItem();
    insertBasketItem();
  };
};
