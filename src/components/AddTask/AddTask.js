import React from 'react';
import './AddTask.css';

const AddTask = (props) => {

  function enterValue(e) {
    if (e.key === 'Enter') {
      props.newTask(e.target.value);
      e.target.value = '';
    }
  }

  return (
    <div id='addTask'>
      <span className='caret ltgray'><i className="fas fa-angle-down arrow-down"></i>
      </span>
      <input className='taskInput' type='text' placeholder='What needs to be done?' onKeyDown={(e) => enterValue(e)} />
    </div>
  );
}

export default AddTask;