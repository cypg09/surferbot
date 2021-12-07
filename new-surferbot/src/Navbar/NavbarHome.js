import ReactDOM from 'react-dom';
import Homepage from '../Homepage/Homepage';

function returnHomepage() {
  ReactDOM.render(
    <Homepage/>,
    document.getElementById('app')
  );
}

function NavbarHome() {
  return (
    <div className="flex">
      <button className="text-white m-1 py-1 px-3 text-center border rounded-md hover:bg-gray-700 text-center" onClick={returnHomepage}>Home</button>
    </div>
  );
}

export default NavbarHome;