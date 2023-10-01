import './App.css';
import React, { useState, useEffect } from 'react';

// Higher Order Component (HOC)
function withLogger(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} mounted.`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} will unmount.`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

// Функциональный компонент, использующий Hook
function Counter({ count, increment }) {
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// Компонент, обернутый в HOC
const WrappedCounter = withLogger(Counter);

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>React App with Hooks, HOC, and Lifecycle Methods</h1>
      <WrappedCounter count={count} increment={increment} />
    </div>
  );
}

export default App;
