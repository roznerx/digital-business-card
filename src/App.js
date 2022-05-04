import './App.css';
import Photo from './components/Photo';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <div className="app-container">
        <Photo />
        <Info />
        <Footer />
      </div>
    </div>
  );
}

export default App;
