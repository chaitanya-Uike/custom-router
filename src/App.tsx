import Route from './Router/Route';
import Link from './Router/Link';

import Home from './Pages/Home';
import About from './Pages/About';

import './App.css';

function App() {

  return (
    <div className="App">
      <Route path='/' Component={Home} />
      <Route path='/about' Component={About} />

      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </div>
  );
}

export default App;
