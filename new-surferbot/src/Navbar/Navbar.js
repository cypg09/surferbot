import React from "react";
import NavbarButton from "./NavbarButton";
import DarkModeToggler from "./DarkModeToggler";
import NavbarLogin from "./NavbarLogin";
import NavbarSignup from "./NavbarSignup";


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.pages = props.pages;
    this.handler = props.handler;
    this.state = {selectedPage: 'homepage'};
    this.createButtons.bind(this);
  }

  createButtons() {
    let buttons = [];
    for (let page of this.pages) {
      buttons.push(
        <NavbarButton 
          key={page}
          changeToNewPage={this.handler} 
          newPage={page}
          selected={this.state.selectedPage}
          handleSelection={this.handleSelection.bind(this)}
        />
      );
    }
    return buttons;
  }

  handleSelection(newSelectedPage) {
    this.setState({selectedPage: newSelectedPage});
  }

  render() {
    return (
      <div className="container mx-auto dark:bg-gray-800 bg-white bg-opacity-90 p-3 m-3">
        <div className="flex p-1">
          <div className="hidden md:flex p-1">
          </div>
          <div className="flex md:hidden p-1">
            <button p="MENU" href="test"/>
          </div>
          <div className="hidden md:flex p-1">
            {this.createButtons()}
            <DarkModeToggler/>
          </div>
          <div className="flex-grow md:hidden"></div>
          <div className="flex md:hidden p-1">
            <button p="LOGO" href="test"/>
          </div>
          <div className="flex-grow"></div>
          <div className="flex md:hidden p-1">
            <NavbarLogin
              changeToNewPage={this.handler} 
              newPage={"login"}
              selected={this.state.selectedPage}
              handleSelection={this.handleSelection.bind(this)}
            />
          </div>
          <div className="hidden md:flex p-1">
            <NavbarLogin
              changeToNewPage={this.handler} 
              newPage={"Login"}
              selected={this.state.selectedPage}
              handleSelection={this.handleSelection.bind(this)}
            />
            <NavbarSignup
              changeToNewPage={this.handler} 
              newPage={"Sign Up"}
              selected={this.state.selectedPage}
              handleSelection={this.handleSelection.bind(this)}
            />
          </div>
        </div>
    </div>
    );
  }
}

export default Navbar;