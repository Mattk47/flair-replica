import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Enquire from './components/enquire/Enquire'
import PriceList from './components/PriceList';
import Home from './components/home/Home'
import Footer from './components/layout/Footer';

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/enquire' element={<Enquire />} />
          <Route exact path='/price_list' element={<PriceList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
