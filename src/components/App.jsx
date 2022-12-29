import React, {useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Navbar loggedIn={loggedIn}/>
      <main>

      </main>
      <Footer />
    </>
  );
};

export default App;
