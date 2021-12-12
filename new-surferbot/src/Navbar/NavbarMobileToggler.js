import React from "react";

function NavbarMobileToggler(props) {

  function chooseIcon() {
    if (props.activated) {
      return (
      <svg xmlns="http://www.w3.org/2000/svg" className="bg-white dark:bg-gray-700 shadow-3xl rounded-md p-1 h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
      </svg>
      );
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="bg-white dark:bg-gray-700 origin-center rotate-90 shadow-3xl rounded-md p-1 h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
      </svg>
    );
  }

  return (
    <button className="text-gray-800 dark:text-white mx-3" onClick={props.handler}>
      <svg xmlns="http://www.w3.org/2000/svg" className="bg-white dark:bg-gray-700 shadow-3xl rounded-md p-1 h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
        {chooseIcon()}
      </svg>
    </button>
  );
}

export default NavbarMobileToggler;