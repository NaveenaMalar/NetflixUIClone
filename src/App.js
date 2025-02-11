import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Movies from './Movies';
import Player from './Player';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>    
    </div>
  );
}

export default App;
