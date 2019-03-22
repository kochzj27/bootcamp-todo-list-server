import React from 'react';
import './TaskFilter.css';

const TaskFilter = (props) => {

  let count = props.list.length;

  if (props.selectedFilter !== 'all') {
    let filtered = props.list.filter(item => item.status === props.selectedFilter);
    count = filtered.length;
  }

  return (
    <div id='taskFilter'>
      <span className='item-count'>{count} item{count > 1 ? "s" : null} left</span>
      <div className='filters'>
        <span className={`filter-item ${props.selectedFilter === 'all' ? 'active' : null}`} onClick={(e) => props.changeFilter(e.target.innerText)} value='all'>All</span>
        <span className={`filter-item ${props.selectedFilter === 'active' ? 'active' : null}`} onClick={(e) => props.changeFilter(e.target.innerText)} value='active'>Active</span>
        <span className={`filter-item ${props.selectedFilter === 'completed' ? 'active' : null}`} onClick={(e) => props.changeFilter(e.target.innerText)} value='completed'>Completed</span>
      </div >
      <span>&nbsp;</span>
    </div >
  );
}

export default TaskFilter;