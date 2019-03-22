import React from 'react';
import AddTask from '../AddTask/AddTask';
import TaskList from '../TaskList/TaskList';
import TaskFilter from '../TaskFilter/TaskFilter';
import axios from 'axios';
import './TaskApp.css';


class TaskApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      selectedFilter: 'active'
    };
    this.newTask = this.newTask.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  componentDidMount() {
    axios.get('/tasks')
      .then((res) => {
        console.log(res);
        this.setState({
          tasks: res.data.payload,
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  newTask(task) {
    axios.request({
      method: 'POST',
      url: `/tasks`,
      data: {
        text: task,
      }
    })
      .then((req, res) => {
        console.log('GET tasks')
        axios.get('/tasks')
          .then((res) => {
            this.setState({
              tasks: res.data.payload,
            });
          })
          .catch((err) => {
            console.log(err);
          })
      })
      .catch((err) => {
        console.log(err);
      });
  }


  changeFilter(filter) {
    let filt = filter.toLowerCase();
    this.setState({
      selectedFilter: filt
    });
  }

  updateStatus(event) {
    console.log(event.target.id);
    let id = event.target.id;
    axios.request({
      method: 'PUT',
      url: `/tasks/${id}`,
      data: {
        status: 'completed',
        updated: true
      }
    })
      .then((req, res) => {
        console.log('GET tasks')
        axios.get('/tasks')
          .then((res) => {
            this.setState({
              tasks: res.data.payload,
            });
          })
          .catch((err) => {
            console.log(err);
          })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state)
    return (
      <div id='container'>
        <h1 className='pinkish large-text'>todos</h1>
        <AddTask newTask={this.newTask} />
        <TaskList list={this.state.tasks} selectedFilter={this.state.selectedFilter} updateStatus={this.updateStatus} />
        <TaskFilter list={this.state.tasks} selectedFilter={this.state.selectedFilter} changeFilter={this.changeFilter} />
      </div>
    );
  }

}

export default TaskApp;