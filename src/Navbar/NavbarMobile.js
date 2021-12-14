import React from "react";
import NavbarButton from "./NavbarButton";
import DarkModeToggler from "./DarkModeToggler";
import NavbarLogin from "./NavbarLogin";
import NavbarSignup from "./NavbarSignup";
import NavbarMobileToggler from "./NavbarMobileToggler";


class NavbarMobile extends React.Component {
  constructor(props) {
    super(props);
    this.pages = props.pages;
    this.handler = props.handler;
    this.state = {
      selectedPage: 'homepage',
      navbarMobileActivated: false,
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

  switchNavbarMobileActivation() {
    this.setState(state => (
      {navbarMobileActivated: !state.navbarMobileActivated}
    ));
  }

  renderNavbar() {
    if (this.state.navbarMobileActivated) {
      return(
        <div className="flex" onClick={this.switchNavbarMobileActivation.bind(this)}>
            <NavbarMobileToggler
              activated={true}
            />
            {this.createButtons()}
            <DarkModeToggler/>
        </div>
      );
    }
    return (
      <div className="flex">
        <NavbarMobileToggler
          handler={this.switchNavbarMobileActivation.bind(this)}
          activated={false}
        />
        <div className="flex-grow"></div>
        <NavbarButton 
          key='homepage'
          changeToNewPage={this.handler} 
          newPage={'Home'}
          selected={this.state.selectedPage}
          handleSelection={this.handleSelection.bind(this)}
        />
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
    );
  }

  render() {
    return(
      <div className="container p-1 m-1 mx-auto place-content-content">
        <div className="flex p-2">
          {this.renderNavbar()}
        </div>
      </div>
    );
  }
}

export default NavbarMobile;