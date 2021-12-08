function NavbarButton(props) {
  let className = "m-1 py-1 px-3 text-center rounded-md";
  if (props.selected) {
    className += " dark:bg-gray-100 dark:text-gray-700 bg-gray-700 text-white";
  } else {
    className += " bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white";
  }
  return (
    <button className={className}>{props.p}</button>
  );

}

export default NavbarButton;