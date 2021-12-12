import React from "react";
import NavbarButton from "./NavbarButton";
import DarkModeToggler from "./DarkModeToggler";
import NavbarLogin from "./NavbarLogin";
import NavbarSignup from "./NavbarSignup";
import NavbarMobileToggler from "./NavbarMobileToggler";
import NavbarMobile from "./NavbarMobile";


class Navbar extends React.Component {
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

  createButtons(isMobile=false) {
    let buttons = [];
    for (let page of this.pages) {
      if (isMobile) {
        buttons.push(
          <NavbarButton 
            key={page}
            changeToNewPage={this.handler} 
            newPage={page}
            selected={this.state.selectedPage}
            handleSelection={this.handleSelection.bind(this)}
          />
        );
      } else {
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

  render() {
    if (this.state.navbarMobileActivated) {
      return(
        <div className="container mx-auto place-content-content p-1 m-1 ">
          <div className="flex p-2">
            <NavbarMobileToggler
              handler={this.switchNavbarMobileActivation.bind(this)}
              activated={this.state.navbarMobileActivated}
            />
            <NavbarMobile test={this.createButtons(true)} handler={this.switchNavbarMobileActivation.bind(this)}/>
            <DarkModeToggler/>
          </div>
        </div>
      );
      return (
        <div className="container mx-auto p-1 m-1 ">
          <div className="flex p-1">
            <div className="flex md:hidden p-1">
              <NavbarMobileToggler
                handler={this.switchNavbarMobileActivation.bind(this)}
                activated={this.state.navbarMobileActivated}
              />
            </div>
            <div className="flex-grow"/>
            <div className="flex md:hidden p-1">
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
          <div className="w-50 text-center place-content-center bg-white dark:bg-gray-700 shadow-xl rounded-xl p-1 absolute top-20">
            <div className="flex-col" onClick={this.switchNavbarMobileActivation.bind(this)}>
              <NavbarMobile test={this.createButtons(true)}/>
            </div>
            <DarkModeToggler/>
          </div>
        </div>
        );
    }
    return (
      <div className="container mx-auto p-1 m-1">
        <div className="flex p-2">
          <div className="hidden md:flex p-1">
          </div>
          <div className="flex md:hidden">
            <NavbarMobileToggler
              handler={this.switchNavbarMobileActivation.bind(this)}
              />
          </div>
          <div className="hidden md:flex">
            {this.createButtons()}
            <DarkModeToggler/>
          </div>
          <div className="flex-grow md:hidden"></div>
          <div className="flex md:hidden ">
          </div>
          <div className="flex-grow"></div>
          <div className="flex md:hidden "></div>
          <div className="flex ">
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