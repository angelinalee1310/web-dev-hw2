import React, { Component, useState, useEffect, useCallback, useMemo } from 'react';

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

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Memoized function to calculate a result based on count
  const calculateResult = useMemo(() => {
    // Expensive calculation based on count
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1>React App with Event Handlers and Memoization</h1>
      <Counter count={count} increment={increment} />
      <p>Calculated Result: {calculateResult}</p>
    </div>
  );
}

export default App;