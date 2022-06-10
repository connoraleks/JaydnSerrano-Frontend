import Display from "./components/Display";
import Navbar from "./components/Navbar";
import {useState} from 'react';
function App() {
  const [display, setDisplay] = useState('#home');
  return(
      <main className="h-screen w-screen bg-blue-500 flex">
        <Navbar setDisplay={setDisplay} display={display}></Navbar>
        <Display setDisplay={setDisplay} display={display}></Display>			
      </main>
  )
}

export default App;
