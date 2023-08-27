import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {title: "Task 1"},
                {title: "Task 2"},
                {title: "Task 3"}
            ]
        }
    }
    render() {
        const todos = this.state.todos.map((todo) => {
            return <Todo title={todo.title} />
        });
        return (
            <div>
                {todos}
            </div>
        );
    }
}

export default TodoList;