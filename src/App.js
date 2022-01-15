import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='app'>
        <div className="container">
          <Header />
        </div>

      </div>
    </Router>
  );
}

export default App;
