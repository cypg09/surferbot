import React from "react";

class NavbarMobile extends React.Component {
  constructor(props) {
    super(props);
    this.test = props.test;
  }


  render() {
    return (
      <div className="container mx-auto text-center place-content-center">
        {this.test}
      </div>
    );
  }
}

export default NavbarMobile;