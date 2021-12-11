import React from "react";


class NavbarButton extends React.Component {
  constructor(props) {
    super(props);
    this.changeToNewPage = props.changeToNewPage;
    this.newPage = props.newPage;
    this.handleSelection = props.handleSelection;
    this.className = props.className;
  }

  handleClick() {
    this.changePage();
  }

  changePage() {
    this.changeToNewPage(this.newPage);
  }

  getClassName() {
    if (this.className !== undefined) {
      return this.className;
    }
    let className = "m-1 py-1 px-3 text-center rounded-md ";
    return className + "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white";
  }

  render() {
    return (
      <button 
      className={this.getClassName()}
      onClick={this.handleClick.bind(this)}>
        {this.newPage}
      </button>
    );
  }
}

export default NavbarButton;