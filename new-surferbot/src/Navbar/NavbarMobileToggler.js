import React from "react";

function NavbarMobileToggler(props) {

  function chooseIcon() {
    if (props.activated) {
      return (
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      );
    }
    return (
      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    );
  }

  return (
    <button className="text-gray-800 dark:text-white" onClick={props.handler}>
      <svg xmlns="http://www.w3.org/2000/svg" className="bg-white dark:bg-gray-700 shadow-3xl rounded-md p-1 h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
        {chooseIcon()}
      </svg>
    </button>
  );
}

export default NavbarMobileToggler;