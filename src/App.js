// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// let name = "Sibansu"; //Declared a variable
function App() {  
  return (
    /*This is a jsx fragment
    <>
    </>
    */ 
    <>
    <Navbar name="MyApp2" abt= "myAbout" />
    <div className="container">
      <TextForm heading= "Enter your text here-heading"/>
    </div>
    
    </>
  );
}

export default App;