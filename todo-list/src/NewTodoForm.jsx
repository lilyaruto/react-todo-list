import React, { Component } from 'react';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.add(this.state);
        this.setState({
            title: ""
        });
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="todo-form">
                <label htmlFor="title">New todo</label>
                <div className='formInner'>
                    <input onChange={this.handleChange} type="text" name='title' id='title' value={this.state.title}/>
                    <button type="submit">Add todo</button>
                </div>
            </form>
        );
    }
}

export default NewTodoForm;