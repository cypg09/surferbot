import React from "react";


function toggleDarkMode() {
  let theme = document.getElementById('theme')
  if (theme.classList.contains('dark')) {
    theme.classList.remove('dark');
  } else {
    theme.classList.add('dark');
  }
}

class DarkModeToggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {darkModeEnabled: false};
  }

  handleClick() {
    toggleDarkMode();
    this.setState(state => ({darkModeEnabled: !state.darkModeEnabled}));
  }

  render() {
    return (
      <button className="text-white dark:text-white bg-yellow-300 dark:bg-blue-900 m-1 py-1 px-3 text-center rounded-md" onClick={this.handleClick.bind(this)}>
        {this.state.darkModeEnabled.toString()}
      </button>
    );
  }
}

export default DarkModeToggler;