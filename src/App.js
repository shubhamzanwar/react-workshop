import React from 'react';

class App extends React.Component {
    state = {
        count: 0
    }

    increment = () => {
        const oldCount = this.state.count;
        this.setState({count: oldCount + 1});
    }

    decrement = () => {
        const oldCount = this.state.count;
        this.setState({count: Math.max(oldCount - 1, 0)});
    }

    render() {
        return (
            <div class="counter" role="group">
                <button type="button" onClick={this.decrement} class="counter-btn">-</button>
                <div class="counter-text">{this.state.count}</div>
                <button type="button" onClick={this.increment} class="counter-btn">+</button>
            </div>
        )
    }
}

export default App;