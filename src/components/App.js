import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Footer from './Footer';


const App = () => {
  return (
    <Router>
      <div>
        <GlobalStyle/>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/work" element={<Work/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
