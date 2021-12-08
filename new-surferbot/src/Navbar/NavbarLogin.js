import ReactDOM from 'react-dom';
import Login from "../Login/Login";

function returnLogin() {
  ReactDOM.render(
    <Login/>,
    document.getElementById('app')
  );
}

function NavbarLogin() {
  return (
    <div className="flex">
      <button className="dark:text-white text-gray-500 m-1 py-1 px-3 text-center border rounded-md dark:hover:bg-gray-700 hover:bg-gray-200" onClick={returnLogin}>Login</button>
    </div>
  );
}

export default NavbarLogin;