import Main from './Main/Main'
import Footbar from './Footbar/Footbar';


function App() {
  return (
    <div id="theme" className="">
      <div className="container mx-auto p-1 m-0 dark:bg-gray-800 bg-gray-50">
        <Main/>
        <Footbar/>
      </div>
    </div>
  );
}

export default App;
