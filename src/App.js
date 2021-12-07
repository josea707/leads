import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import NotFoundPage from './components/NotFoundPage';
import EditLead from './components/EditLead';
function App() {
  return (
    <Router>
      <div className='grid-container'>
        <NavBar />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/:id' element={<EditLead />} />
            <Route exact path='/about' element={<About />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
