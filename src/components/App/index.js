import React from "react";
import tools from '@tools';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _testMethod() {
    return 1;
  }

  _testTool() {
    return tools.toolExample();
  }

  render() {
    return <div>{this.props.name}</div>;
  }
}
