import React from 'react';
import CardHome from './components/CardHome';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeNavbar from './components/HomeNavbar';

function App() {
  return (
    <div>
      <HomeNavbar/>
    <Header/>
    <CardHome/>
    <Footer/>
    </div>
  );
}

export default App;
