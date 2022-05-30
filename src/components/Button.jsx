import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
        super(props);
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
        this.state = {
            count: 0
        }
    }
    decrement() {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div className='mx-auto'>
                <button onClick={this.decrement} className='btn btn-danger me-5'>-1</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment} className='btn btn-success ms-5' >+1</button>
            </div>
        )
    }
}

export default Button