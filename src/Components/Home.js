import React from 'react';
import { Container } from 'react-bootstrap';
import Collage from './Collage';
import TriviaGame from './TriviaGame';

function Home() {
  return (
   <Container id='home-con' className="home-container">
      <br></br>
      
      <h1 id='home-h1'>Welcome to the ultimate music app!</h1>
     
      <Collage id='home-c' />
      <br></br>
      ♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬
      <h1 id='home-h2'>Do You Know Music?</h1>
      
     <h2 id= 'play' >Play Our Trivia Game!</h2>
     
     <br></br>
     <br></br>
     <TriviaGame id = 'home-t' />

     <br></br>
     ♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬
     <br></br>
     <p id='home-p'>Are you a music lover? Do you enjoy discovering new artists and creating your own personalized playlists? Look no further! Our app is designed with you in mind. With just a few clicks, you can easily add your favorite songs to your library,<br></br> and soon you'll even be able to listen to them anytime, anywhere. Whether you prefer classic rock, hip-hop, or jazz, our app has it all.</p>

     <p id='home-p'>To get started, simply click on the "Music" tab and you'll be taken to your personal music library. There, you can add new songs, delete old ones, and organize your playlists to your heart's content. But that's not all! We're always looking for ways to improve our app and make it even better for our users.</p>

     <p id='home-p'>If you have any awesome ideas or suggestions, don't hesitate to click on the "Contact" tab and let us know. Thanks for choosing our app and happy listening!</p>
     ♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬♬
<br></br>
<br></br>
<br></br>
      
    </Container >

  );
}

export default Home;


