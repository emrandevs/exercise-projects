import React from 'react'

export default function Task({id,title,desc,isImportant,isComplete,setComplete,removingTask}) {

    console.log(isComplete);
    
  return (
    <article className = {`task-card item-${id}`}>
      <div className="task-content">
        <div>
          <h3>
            {title}
          </h3>
          <p className="task-desc">
            {desc}
          </p>
        </div>
      </div>
      <div className="moderate">
        <div className="flex items-center **:min-w-max gap-2">
          {isComplete && <span class="status-label completed"> تکمیل شده </span>}
          {isImportant === 'on' && <span className="priority code-1"> مهم </span>}
        </div>
        {
          isComplete 
          ||
          <div className="moderate-btns">
            <button className="complete-task" onClick={() => {
              setComplete(id);
            }}>
              <i className="fa-solid fa-circle-check"></i>
            </button>
            <button className="undone-btn" onClick={() => {
              removingTask(id)
            }}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div> 
        }
      </div>
    </article>
  );
}
