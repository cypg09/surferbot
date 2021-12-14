import React from "react";
import NavbarButton from "./NavbarButton";
import DarkModeToggler from "./DarkModeToggler";
import NavbarLogin from "./NavbarLogin";
import NavbarSignup from "./NavbarSignup";


class NavbarDesktop extends React.Component {
  constructor(props) {
    super(props);
    this.pages = props.pages;
    this.handler = props.handler;
    this.state = {
      selectedPage: 'homepage',
    };
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
    this.setState({
      selectedPage: newSelectedPage,
      navbarMobileActivated: false,
    });
  }

  render() {
    return (
      <div className="container mx-auto">
        <div className="flex p-2">
          <div className="flex">
            {this.createButtons()}
            <DarkModeToggler/>
          </div>
          <div className="flex-grow"></div>
          <div className="flex">
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

export default NavbarDesktop;