import React, {Component} from "react";

class PropsClass extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name} also known as {this.props.hero}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default PropsClass;