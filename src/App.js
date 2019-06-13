import React, { Component } from 'react';
import TodoForm from './Todo/TodoForm';
import TodoList from './Todo/TodoList';

class App extends Component {
  inputElement = React.createRef()
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      todoItem: {value: "", key: "", done: false}
    }
}
handleChange = event => {
  const todoItem = {value: event.target.value, key: Date.now(), done: false};
  this.setState({
    todoItem
  })
}
handleSubmit = event => {
  event.preventDefault();
  if(this.state.todoItem.value !== '') {
    const items = [...this.state.items, this.state.todoItem]
    this.setState({
      items,
      todoItem: {value: "", key: "", done: false}
    })
  }
}
deleteItem = key => {
  this.setState({
    items: this.state.items.filter(item => {return item.key !== key})
  })
}
checkItem = key => {
  const checkItem = this.state.items.map(item => {
    if(item.key === key) {
      return item.done = !item.done
    }
    else{
      return item.done
    }
  })
  this.setState({
    checkItem
  })
}
  render() {
    return (
      <div className="main">
        <TodoForm handleChange={this.handleChange} todoItem={this.state.todoItem} onSubmit={this.handleSubmit}/>
        <TodoList items={this.state.items} deleteItem={this.deleteItem} checkItem={this.checkItem}/>
      </div>
    );
  }
}

export default App;

