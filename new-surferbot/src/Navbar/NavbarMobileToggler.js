import React from "react";

function NavbarMobileToggler(props) {

  function chooseIcon() {
    if (props.activated) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      );
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="bg-white dark:bg-gray-700 origin-center rotate-90 shadow-3xl rounded-md p-1 h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
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