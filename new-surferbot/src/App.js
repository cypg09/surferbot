import Main from './Main/Main'
import Footbar from './Footbar/Footbar';


function App() {
  function userUsesDarkMode() {
    if (localStorage.theme === 'dark') {
      return "dark";
    }
    return "";
  }

  return (
    <div id="theme" className={userUsesDarkMode()}>
      <div className='dark:bg-gray-800 bg-gray-50'>
        <div className="container mx-auto p-1 m-0 ">
          <Main/>
          <Footbar/>
        </div>
      </div>
    </div>
  );
}

export default App;
