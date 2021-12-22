import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.pages = props.pages;
    this.handler = props.handler;
  }

  render() {
    return (
      <div className="sticky top-0 bg-white bg-opacity-95 dark:bg-gray-800 dark:bg-opacity-95">
        <div className="flex md:hidden">
          <NavbarMobile pages={this.pages} handler={this.handler}/>
        </div>
        <div className="hidden md:flex">
          <NavbarDesktop pages={this.pages} handler={this.handler}/>
        </div>
      </div>
    );
  }
}

export default Navbar;