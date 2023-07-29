// What are Higher-Order Components (HOC) in React and how do they work?

// Higher-Order Components (HOC) in React is an advanced pattern used to enhance and extend the functionality of components. HOCs are functions that take a component as input and return a new component with additional props or behavior. They allow you to reuse component logic, modify component behavior, and share functionality across different components.

// The key characteristics of Higher-Order Components are:

// 1. Function That Takes a Component:

// 2. HOCs are functions that accept a component (referred to as the "Wrapped Component") as an argument.
// Returns a New Component:

// 3. HOCs return a new component that wraps the input component, providing additional functionality or props to it.
// Component Composition:

// The output of one HOC can be used as the input for another HOC, enabling composition of multiple HOCs to create more complex behaviors.

// How Higher-Order Components work:

// Create the HOC Function:

// You start by creating a function that takes a component as an argument.
// Define and Return a New Component:

// Inside the HOC function, you define a new component, commonly referred to as the "Enhanced Component" or "Wrapped Component."
// The Enhanced Component renders the input component (Wrapped Component) with additional props or behavior as needed.
// Pass Props and Behavior:

// The HOC can pass new props, state, or even override existing props to the Wrapped Component.
// It can also add event handlers, lifecycle methods, or any other functionality to the Wrapped Component.



import React, { Component } from 'react';

// Higher-Order Component
const withLoading = (WrappedComponent) => {
  return class WithLoading extends Component {
    state = { isLoading: true };

    componentDidMount() {
      // Simulate an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 2000);
    }

    render() {
      const { isLoading } = this.state;

      // Pass the loading prop to the WrappedComponent
      return isLoading ? <div>Loading...</div> : <WrappedComponent {...this.props} />;
    }
  };
};

// Target Component
const MyComponent = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.text}</p>
      ))}
    </div>
  );
};

// Usage of the HOC
const MyComponentWithLoading = withLoading(MyComponent);

// Render the Enhanced Component
const data = [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
];
ReactDOM.render(<MyComponentWithLoading data={data} />, document.getElementById('root'));

