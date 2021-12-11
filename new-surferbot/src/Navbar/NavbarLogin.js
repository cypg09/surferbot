import NavbarButton from "./NavbarButton";

function NavbarLogin(props) {
  return (
      <NavbarButton 
        changeToNewPage={props.changeToNewPage}
        newPage={props.newPage}
        handleSelection={props.handleSelection}
        className="dark:text-white text-gray-500 m-1 py-1 px-3 text-center border rounded-md dark:hover:bg-gray-700 hover:bg-gray-200"
        />
  );
}

export default NavbarLogin;