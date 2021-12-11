import React from "react";
import Homepage from "../Pages/Homepage";
import Lorem from "../Pages/Lorem";
import Navbar from "../Navbar/Navbar";
import LoremBis from "../Pages/LoremBis";
import Pricing from "../Pages/Pricing";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const pages = {
  Home: <Homepage/>,
  Lorem: <Lorem/>,
  Lorembis: <LoremBis/>,
  Pricing: <Pricing/>,
  Login: <Login/>,
  'Sign Up': <SignUp/>,
};

const pagesToRender = {
  Home: <Homepage/>,
  Lorem: <Lorem/>,
  Lorembis: <LoremBis/>,
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
      <div id="main">
        <Navbar pages={this.getPages()} handler={this.changeToNewPage.bind(this)}/>
        {this.getCurrentPage()}
      </div>
    );
  }

}

export default Main;