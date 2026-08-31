const batteryPercentage = document.querySelector(".battery__percentage");
const batteryStatus = document.querySelector(".battery__status");
const batteryLiquid = document.querySelector(".battery__liquid");


const gettingBattery = async ()=>{
  let battery = await navigator.getBattery();
  batteryPercentage.innerHTML = `${+battery.level * 100}%`;
  batteryLiquid.style.height = `${+battery.level * 100}%`;

  batteryLiquid.classList.remove("gradient-color-red");
  batteryLiquid.classList.remove("gradient-color-orange");
  batteryLiquid.classList.remove("gradient-color-yellow");
  batteryLiquid.classList.remove("gradient-color-green");
  if((+battery.level * 100) < 20){
    batteryLiquid.classList.add("gradient-color-red");
    // batteryStatus.innerHTML = `Low battery <i class="ri-plug-line animated-red"></i>`;
  }else if((+battery.level * 100) < 40){
    batteryLiquid.classList.add("gradient-color-orange");
  }else if((+battery.level * 100) < 80){
    batteryLiquid.classList.add("gradient-color-yellow");
  }else if((+battery.level * 100) < 100){
    batteryLiquid.classList.add("gradient-color-green");
    // batteryStatus.innerHTML = `Full battery <i class="ri-battery-2-fill green-color"></i>`;
  };

  if(battery.charging){
    batteryStatus.innerHTML = `Charging... <i class="ri-flashlight-line animated-green"></i>`;
  }else if((+battery.level * 100) > 80){
    batteryStatus.innerHTML = `Full battery <i class="ri-battery-2-fill green-color"></i>`;
  }else if((+battery.level * 100) < 20){
    batteryStatus.innerHTML = `Low battery <i class="ri-plug-line animated-red"></i>`;
  };
};

setInterval(()=>{
  gettingBattery();
},1000);