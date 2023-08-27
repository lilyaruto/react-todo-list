import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div className='todo'>
                <span>{this.props.title}</span>
                <div className="buttons">
                    <button className='edit-todo'>
                        Edit
                    </button>
                    <button className='remove-todo'>
                        Remove
                    </button>
                </div>
            </div>
        );
    }
}

export default Todo;