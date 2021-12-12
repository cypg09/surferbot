import React from "react";

class NavbarMobile extends React.Component {
  constructor(props) {
    super(props);
    this.test = props.test;
    this.handler = props.handler;
  }


  render() {
    return (
      <div className="container mx-auto text-center place-content-center" onClick={this.handler.bind(this)}>
        {this.test}
      </div>
    );
  }
}

export default NavbarMobile;