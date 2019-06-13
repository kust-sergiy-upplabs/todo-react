import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        const listItems = this.props.items.map((item) =>
            <li
                className={item.done ? "list-group-item done" : "list-group-item undone"}
                key={item.key}
                onClick={() => this.props.checkItem(item.key)}
            >
                {item.value}
                <span onClick={() => this.props.deleteItem(item.key)} className="icon">X</span>
            </li>);
        return (
            <div>
                <ul className="todo-list">
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default TodoList;
