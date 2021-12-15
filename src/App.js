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
      <div className='flex flex-col min-h-screen bg-gray-50 dark:bg-gray-800'>
        <div className="container flex-grow p-1 m-0 mx-auto">
          <Main/>
        </div>
        <Footbar/>
      </div>
    </div>
  );
}

export default App;
