import NavbarButton from "./NavbarButton";

function NavbarLogin(props) {
  return (
      <NavbarButton 
        changeToNewPage={props.changeToNewPage}
        newPage={props.newPage}
        handleSelection={props.handleSelection}
        className="px-3 py-1 m-1 text-center text-blue-600 rounded-md dark:text-blue-100 dark:hover:bg-blue-900 hover:bg-blue-100"
        />
  );
}

export default NavbarLogin;