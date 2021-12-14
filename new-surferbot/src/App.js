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
      <div className='h-screen bg-gray-50 dark:bg-gray-800'>
        <div className="container p-1 m-0 mx-auto">
          <Main/>
          <Footbar/>
        </div>
      </div>
    </div>
  );
}

export default App;
