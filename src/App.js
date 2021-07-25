import {Symbols} from './Symbols.js'
import {useEffect} from 'react';

function App() {
  useEffect(() => {document.body.style.backgroundColor = '#1e1e1e' }, [])
  return (
    <div className="App">
      <h1 style = {{color:"white"}}>Latex Translator</h1>
      <hr></hr>
      <h5 style = {{color:"white"}}>Enter equation using the buttons:</h5>
      <Symbols/>
    </div>
  );
}

export default App;
