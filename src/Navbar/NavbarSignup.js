import NavbarButton from "./NavbarButton";

function NavbarSignup(props) {
  return (
      <NavbarButton 
        changeToNewPage={props.changeToNewPage}
        newPage={props.newPage}
        handleSelection={props.handleSelection}
        className="dark:text-gray-800 text-white dark:bg-white bg-blue-600 dark:hover:bg-gray-200 hover:bg-blue-500 m-1 py-1 px-3 text-center rounded-md"
        />
  );
}

export default NavbarSignup;