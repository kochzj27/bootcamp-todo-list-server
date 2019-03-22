import React from 'react';
import './TaskList.css';

const TaskList = (props) => {
  console.log("props!", props);

  let actives = props.list.filter(x => x.status === 'active');
  actives = actives.map((item, idx) => {
    return (
      <div id={item.id} className='taskList' key={idx}>
        <span><i className="far fa-circle circle"></i></span>
        <h3 id={item.id} onClick={(e) => props.updateStatus(e)} className='listText'>{item.text}</h3>
      </div>
    )
  });

  let inactives = props.list.filter(x => x.status === 'completed');
  inactives = inactives.map((item, idx) => {
    return (
      <div id={item.id} className='taskList' key={idx}>
        <span><i className="fas fa-circle circle"></i></span>
        <h3 id={item.id} onClick={(e) => props.updateStatus(e)} className='listText crossed'>{item.text}</h3>
      </div>
    )
  });


  console.log('A', actives);
  console.log("I", inactives);


  return (
    <div>
      {props.selectedFilter === 'active' || props.selectedFilter === 'all' ? actives : null}
      {props.selectedFilter === 'completed' || props.selectedFilter === 'all' ? inactives : null}
    </div>
  );
}

export default TaskList;