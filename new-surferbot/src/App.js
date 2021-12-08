import Navbar from './Navbar/Navbar';
import Homepage from './Homepage/Homepage';
import Footbar from './Footbar/Footbar';

function App() {
  return (
    <div id="theme" className="">
      <div className="dark:bg-gray-800 bg-white">
        <div class="container mx-auto p-2 dark:bg-gray-800 bg-white">
          <Navbar/>
          <div id="app" class="container mx-auto p-3 m-3">
            <Homepage/>
          </div>
          <Footbar/>
        </div>
      </div>
    </div>
  );
}

export default App;
