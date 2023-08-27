import React, { Component } from 'react';
import Todo from './Todo';
import { v4 } from "uuid";
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {title: "Task 1", id: v4()}
            ]
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    removeTodo(id) {
        this.setState(state=> ({
            todos: this.state.todos.filter(todo => todo.id !== id)
        }));
    }

    addTodo(todo) {
        let newTodo = {...todo, id: v4()}
        this.setState(state => ({
            todos: [...state.todos, newTodo]
        }));
    }

    render() {
        const todos = this.state.todos.map((todo) => {
            return <Todo
            key={todo.id}
            title={todo.title}
            remove={() => this.removeTodo(todo.id)}/>
        });
        return (
            <div>
                {todos}
                <NewTodoForm add={this.addTodo}/>
            </div>
        );
    }
}

export default TodoList;