import { useState } from "react";
import Header from "./components/Header.jsx";
import Task from "./components/Task.jsx";

function App() {

  const [tasks,setTasks] = useState([]);
  const [completedTasks,setcompletedTasks] = useState([]);
  const [modalOpen,setModalOpen] = useState(false);
  const [inputTitle,setInputTitle] = useState("");
  const [inputDesc,setInputDesc] = useState("");
  const [InputImportant,setInputImportant] = useState('off');
  const [showType,setShowType] = useState("all")

  const setComplete = (itemId) => {
    let taskArr = tasks;
    let itemIndex = tasks.findIndex(item => item.id === itemId);
    taskArr[itemIndex].isComplete = true;
    document.querySelector(`.item-${itemId} .completed`) || document.querySelector(`.item-${itemId}`).children[1].children[0].insertAdjacentHTML("beforeend",`<span class="status-label completed"> تکمیل شده </span>`);
    setcompletedTasks(
      taskArr.filter(item => item.isComplete === true)
    );

    setTasks(
      taskArr.filter(item => item.isComplete === false)
    );

  };

  const removingTask = (itemId) => {
    let taskArr = tasks.filter(item => item.id !== itemId);
    setTasks(taskArr);
  };

  const createTask = () => {
    if(inputTitle && inputDesc){
      let taskArr = tasks;
      taskArr.push({ id : tasks.length + 1, title : inputTitle, desc : inputDesc, isImportant : InputImportant, isComplete : false});
      setTasks(taskArr);
      setModalOpen(false);
      setInputTitle("");
      setInputDesc("");
      setInputImportant('off');
      document.querySelector(".title-input").value = "";
      document.querySelector(".description-input").value = "";
      document.querySelector("#is-important").checked = false;
    }
  };

  return(
  <>
    <Header/>
    <main className="container pb-25">
      <div id="headline" className="space-y-3">
        <h1 className="title">
          <img src="./public/images/hourglass.png" className="size-8" />
          <span> مدیریت و برنامه ریزی </span>
        </h1>
        <p className="max-w-[750px] text-zinc-700 text-sm font-Vazir-Medium!">
          سبز تسک ابزاری قدرتمند برای سازماندهی وظایف روزمره، برنامه‌ریزی
          پروژه‌ها و افزایش بهره‌وری شماست. با رابط کاربری ساده و امکانات
          پیشرفته، از پیگیری وظایف تا همکاری تیمی را به آسانی مدیریت کنید.
        </p>
      </div>
      <div
        className="mt-14 border-b w-full border-zinc-200 flex items-center py-3 justify-between"
      >
        <div></div>
        <div className="flex items-center gap-2">
          <div className="dropdown">
            <input id="dd-toggle" type="checkbox" hidden />
            <label className="dd-btn" for="dd-toggle">
              <span>نمایش فقط</span>
              <i className="fa-solid fa-chevron-down"></i>
            </label>
            <div className="dropdown_menu" role="menu">
              <div className="dropdown-label">
                <p className="text-start text-xs opacity-60">نمایش فقط</p>
              </div>
              <div className="py-1">
                <label for="dd-toggle" className="menu-item" onClick={() => {setShowType("all")}}>همه</label>
                <label for="dd-toggle" className="menu-item" onClick={() => {setShowType("completed")}}>تکمیل شده ها</label>
                <label for="dd-toggle" className="menu-item" onClick={() => {setShowType("notCompleted")}}
                  >در انتظار انجام</label
                >
              </div>
            </div>
          </div>
          <button id="open-dialog" onClick={
            () => {
              setModalOpen(true);
            }
          }>
            <span> ایجاد جدید </span>
            <div className="btn-divider"></div>
            <span>
              <i className="fa-solid fa-plus"></i>
            </span>
          </button>
        </div>
      </div>
      <section id="tasks" className="space-y-30 mt-5">
        <div className={`space-y-5 ${showType === "all" || showType === "notCompleted" ? "" : "is-hidden"}`}>
          <p className="text-sm" >تسک های موجود:</p>
          <div className="space-y-0.5">
            {
              tasks.map(item => <Task key={item.id} setComplete={setComplete} removingTask={removingTask} {...item} />)
            }
          </div>
        </div>
        <div className={`space-y-5 ${showType === "all" || showType === "completed" ? "" : "is-hidden"}`}>
          <p className="text-sm">تسک‌های تکمیل‌شده</p>
          <div className="space-y-0.5">
            {
              completedTasks.map(item => <Task key={item.id} {...item}/>)
            }
          </div>
        </div>
      </section>
      <div id="modal-screen" className={modalOpen ? "" : "is-hidden"}>
        <div className="modal-content">
          <header className="modal-header">
            <span
              className="font-IOS-Font! text-sm absolute left-0 right-0 mx-auto! max-w-max! text-[#2b2929] select-none!"
            >
              ایجاد برنامه جدید
            </span>
            <div className="btns *:size-3.5 *:cursor-pointer *:rounded-full">
              <button id="modal-close-button" onClick={
                () => {
                  setModalOpen(false);
                }
              }></button>
            </div>
          </header>
          <main className="my-5 space-y-3">
            <input
              placeholder="عنوان تسک را وارد نمائید ..."
              className="input-element title-input"
              onChange={(e) => {setInputTitle(e.target.value)}}
            />
            <textarea
              className="input-element description-input"
              placeholder="توضیحات تسک را وارد نمائید ..."
              name="description"
              onChange={(e) => {setInputDesc(e.target.value)}}
            ></textarea>
            <div className="my-3 flex items-center gap-2">
              <input id="is-important" type="checkbox" onChange={(e) => {setInputImportant(e.target.value)}} />
              <label for="is-important"> مهم </label>
            </div>
            <div className="info-message">
              <p className="inline-flex! items-center gap-1">
                <img
                  src="./public/images/check.png"
                  alt="Checked"
                  className="size-4"
                />
                <span> لطفا تمامی فیلد هارا تکمیل بفرمایید </span>
              </p>
            </div>
          </main>
          <footer className="mt-5 flex items-center justify-end text-sm pb-3">
            <button id="create-button" onClick={createTask}>ایجاد کنید</button>
          </footer>
        </div>
      </div>
    </main>
  </>
  );
}

export default App;
