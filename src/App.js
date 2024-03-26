import findmeLogo from './image/findme_logo.png'
import './App.css';

function App() {

  let posts = "cjw";

  function testFunct(input){
    return input+1;
  }

  return (
    <div className="App">
      
      <div className="black-nav">

        <div className="logoimg">
        </div>

        <div>
          FindME
        </div>
      
        
      </div>

      <h4>
        {posts}
      </h4>

      <h4>
        {testFunct(3)}
      </h4>
      



    </div>
  );
}

export default App;
