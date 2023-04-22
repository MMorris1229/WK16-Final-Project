import React, { useState } from 'react';
import { MusicList } from './Components/MusicList';
import { MusicForm } from './Components/MusicForm';
import Footer from './Components/Footer';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import NavBar from './Components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const [music, setMusic] = useState([]);

  const addMusic = (newMusic) => {    
    setMusic([newMusic, ...music]); 
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/songs" element={
            <>
              <MusicForm onAddMusic={addMusic} />
              <MusicList initialMusic={music} />
            </>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
        }

export default App;


