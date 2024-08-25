import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './HomePage'; 
// import AboutPage from './AboutPage';
// import ContactPage from './ContactPage';
import RegisterPage from './Register/RegisterPage'; 


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        {/* <Route path="/aboutPage" element={<AboutPage />} /> */}
        {/* <Route path="/contactPage" element={<ContactPage />} /> */}
        <Route path="/RegisterPage" element={<RegisterPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
