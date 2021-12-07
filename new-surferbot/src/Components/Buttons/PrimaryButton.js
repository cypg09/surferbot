function PrimaryButton(props) {
  return (
    <a className="text-white m-1 py-1 px-3 text-center bg-gradient-to-r from-blue-400 to-blue-500 rounded-md" href={props.href}>{props.p}</a>
  );
}

export default PrimaryButton;