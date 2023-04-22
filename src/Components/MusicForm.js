
import React, { useState } from "react";
import { musicApi } from "../Rest/MusicApi";
import { Form, FormGroup, Button, Row, Col } from 'react-bootstrap';

export function MusicForm({ onAddMusic, title }) {
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newMusic = {
      song,
      artist,
      genre,
      status
    };

    try {
      const addedMusic = await musicApi.post(newMusic);
      onAddMusic(addedMusic);  
      setSong('');
      setArtist('');
      setGenre('');
      setStatus('');
    } catch(e) {
      console.error("Oops, looks like adding music didn't work.", e);
    }
  }
    
  return (
    <div>
      <Form id='song-form'onSubmit={handleSubmit}>
      <h2 id='musicform-h2'>Add Music</h2>
        <Row>
          <Col>
            <FormGroup className="mb-1" controlId="formSong">
              <Form.Label className='label'></Form.Label>
              <Form.Control type='text' placeholder='Enter song name' value={song} onChange={(event) => setSong(event.target.value)} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup className="mb-2" controlId="formArtist">
              <Form.Label className='label'></Form.Label>
              <Form.Control type='text' placeholder='Enter artist' value={artist} onChange={(event) => setArtist(event.target.value)} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup className="mb-3" controlId="formGenre">
              <Form.Label className='label'></Form.Label>
              <Form.Control type='text' placeholder='Enter genre' value={genre} onChange={(event) => setGenre(event.target.value)} />
            </FormGroup>
          </Col>
        </Row>
        <Button type='submit' className='button'>Add Music</Button>
      </Form>
    </div>
  );
}


export default MusicForm;





