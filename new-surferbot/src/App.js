import Main from './Main/Main'
import Footbar from './Footbar/Footbar';


function App() {
  return (
    <div id="theme" className="">
      <div className="dark:bg-gray-800 bg-white">
        <div className="container mx-auto p-3 m-0 dark:bg-gray-800 bg-white">
          <Main/>
          <Footbar/>
        </div>
      </div>
    </div>
  );
}

export default App;
