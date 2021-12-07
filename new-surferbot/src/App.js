import Navbar from './Navbar/Navbar';
import Homepage from './Homepage/Homepage';
import Footbar from './Footbar/Footbar';

function App() {
  return (
    <div className="w-screen bg-gray-800">
      <div class="container mx-auto p-3 m-3">
        <Navbar/>
        <div id="app" class="container mx-auto p-3 m-3">
          <Homepage/>
        </div>
        <Footbar/>
      </div>
    </div>
  );
}

export default App;
