import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div className='todo'>
                <input type="text" name="" id="" disabled value={this.props.title}/>
                <div className="buttons">
                    <button className='edit-todo'>
                        Edit
                    </button>
                    <button onClick={this.props.remove} className='remove-todo'>
                        Remove
                    </button>
                </div>
            </div>
        );
    }
}

export default Todo;