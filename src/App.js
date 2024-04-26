import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Person from './Component/Person';
import Skills from './Component/Skills';
import ContactUs from './Component/ContactUs';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Person/>
     <Skills/>
     <ContactUs/>
    </div>
  );
}

export default App;
