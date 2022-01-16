import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import AlternateImageContent from './components/AlternateImageContent';
import Footer from './components/Footer';
import { landingPageAlternateImageContent } from './utils/mock'
import {landingPageHeaderBanner} from './utils/mock';
import { landingPageFooterBanner } from './utils/mock';

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
          <Banner data={landingPageHeaderBanner} />
        </div>
      </div>
      <div>
        {landingPageAlternateImageContent.map((alterateImageContent, index) => {
          return <AlternateImageContent key={index} data={alterateImageContent} />
        })}
      </div>
      <Banner data={landingPageFooterBanner}/>
      <Footer/>
    </Router>
  );
}

export default App;
