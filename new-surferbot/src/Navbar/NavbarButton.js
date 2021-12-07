function NavbarButton(props) {
  if (props.selected) {
    return (
      <button className="text-white m-1 py-1 px-3 text-center bg-gray-700 rounded-md">{props.p}</button>
    );
  }
  return (
    <a className="text-gray-300 m-1 py-1 px-3 text-center bg-transparent hover:text-white hover:bg-gray-700 rounded-md" href={props.href}>{props.p}</a>
  );

}

export default NavbarButton;