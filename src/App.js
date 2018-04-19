import * as React from 'react';

// Module name between curly braces must match the class name since it is not default import.
import { CarTool } from './components/CarTool';

export default class App extends React.Component {
  render() {
    // getting the "cars" parameters from parent component(index.js)
    return <CarTool cars={this.props.cars} />;
  }
}
