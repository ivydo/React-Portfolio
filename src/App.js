import './App.css';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import Welcome from './components/assets/welcome.gif';

//components


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='Welcome'>
        <div>
          <img src={Welcome} alt="Welcome-Cat-Sign" className="Welcome" />
        </div>
        <div className='Home-Intro'>
          <h1>
            hello, my name is ivy do
          </h1>
          <p>
            welcome to my page.
          </p>
        </div>
      </div>
    </div>

  );
}

export default App;
