import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    incrementCount = () => {
        const curr = this.state.count;
        this.setState({ count: curr + 1 });
    }

    render() {
        return (
            <>
                <p> Button clicked {this.state.count} times </p>
                <button onClick={this.incrementCount}>Click me</button>
            </>
        );
    }
}

export default Counter;
