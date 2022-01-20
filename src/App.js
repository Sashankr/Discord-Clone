import './App.css';
import Landing from './pages/Landing';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Landing/>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
