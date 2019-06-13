import React, { Component } from 'react';

class TodoForm extends Component {
    render() {
        return (
            <form className="todo-form" onSubmit={this.props.onSubmit}>
                <input
                className="form-control"
                    type="text"
                    name="todoText"
                    value={this.props.todoItem.value}
                    onChange={this.props.handleChange}
                />
                <button>Add to list</button>
            </form>
        );
    }
}

export default TodoForm;
