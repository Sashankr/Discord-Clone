import './App.css';
import Landing from './pages/Landing';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Landing/>
    </Router>
  );
}

export default App;
