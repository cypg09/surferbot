import NavbarHome from "./NavbarHome";
import NavbarButton from "./NavbarButton";
import NavbarLogin from "./NavbarLogin";
import NavbarSignup from "./NavbarSignup";


function Navbar() {
  return (
    <div className="container mx-auto bg-gray-800 bg-opacity-90 p-3 m-3">
      <div className="flex p-1">
        <div className="hidden md:flex p-1">
          <NavbarHome/>
        </div>
        <div className="flex md:hidden p-1">
          <NavbarButton p="MENU" href="test"/>
        </div>
        <div className="hidden md:flex p-1">
          <NavbarButton selected="true" p="abc" href="test"/>
          <NavbarButton p="Pricing" href="test"/>
          <NavbarButton p="Our team" href="test"/>
          <NavbarButton p="About" href="test"/>
        </div>
        <div className="flex-grow md:hidden"></div>
        <div className="flex md:hidden p-1">
          <NavbarButton p="LOGO" href="test"/>
        </div>
        <div className="flex-grow"></div>
        <div className="flex md:hidden p-1">
          <NavbarLogin/>
        </div>
        <div className="hidden md:flex p-1">
          <NavbarLogin/>
          <NavbarSignup/>
        </div>
      </div>
  </div>
  );
}

export default Navbar;