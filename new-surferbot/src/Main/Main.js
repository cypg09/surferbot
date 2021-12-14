import React from "react";
import Homepage from "../Pages/Public/Homepage";
import Lorem from "../Pages/Public/Lorem";
import Pricing from "../Pages/Public/Pricing";
import Login from "../Pages/Public/Login";
import SignUp from "../Pages/Public/SignUp";
import Navbar from "../Navbar/Navbar";

const pages = {
  Home: <Homepage/>,
  Demo: <Lorem/>,
  Pricing: <Pricing/>,
  Login: <Login/>,
  'Sign Up': <SignUp/>,
};

const pagesToRender = {
  Home: <Homepage/>,
  Demo: <Lorem/>,
  Pricing: <Pricing/>,
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: 'Home'};
    this.getCurrentPage.bind(this);
    this.changeToNewPage.bind(this);
    this.getPages.bind(this);
  }

  getCurrentPage() {
   let currentPage = this.state.currentPage;
   return pages[currentPage];
  }

  getPages() {
    let allPages = [];
    for (let page in pagesToRender) {
      allPages.push(page);
    }
    return allPages;
  }

  changeToNewPage(newPage) {
    this.setState({currentPage: newPage});
  }

  render() {
    return (
      <div id="main bg-red-400">
        <Navbar pages={this.getPages()} handler={this.changeToNewPage.bind(this)}/>
        {this.getCurrentPage()}
      </div>
    );
  }

}

export default Main;