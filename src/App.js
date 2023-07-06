import React from 'react';
import CardHome from './components/CardHome';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeNavbar from './components/HomeNavbar';
import CardUniversities from './components/CardUniversities';

function App() {
  return (
    <div>
      <HomeNavbar/>
    <Header/>
    <CardHome/>
    <Footer/>
    <CardUniversities/>
    </div>
  );
}

export default App;
