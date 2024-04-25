import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Person from './Component/Person';
import Skills from './Component/Skills';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Person/>
     <Skills/>
    </div>
  );
}

export default App;
