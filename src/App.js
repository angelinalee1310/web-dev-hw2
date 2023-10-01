import './App.css';
import React, { Component, useState} from 'react';

class Counter extends Component {
  componentDidMount() {
    document.title = `Count: ${this.props.count}`;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) {
      document.title = `Count: ${this.props.count}`;
    }
  }

  render() {
    return (
      <div>
        <p>Count: {this.props.count}</p>
        <button onClick={this.props.increment}>Increment</button>
      </div>
    );
  }
}

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>React App with Lifecycle Methods</h1>
      <Counter count={count} increment={increment} />
    </div>
  );
}

export default App;

