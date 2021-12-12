import NavbarButton from "./NavbarButton";

function NavbarLogin(props) {
  return (
      <NavbarButton 
        changeToNewPage={props.changeToNewPage}
        newPage={props.newPage}
        handleSelection={props.handleSelection}
        className="dark:text-white text-blue-600 m-1 py-1 px-3 text-center rounded-md dark:hover:bg-gray-700 hover:bg-blue-100"
        />
  );
}

export default NavbarLogin;