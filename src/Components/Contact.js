import { useState } from 'react';
import React from 'react';
import { Table } from 'react-bootstrap';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  
  
  return (
    <div>
     <p id='contact-design'>❁☾❁</p>
     <p id='contact'>Do you have a brilliant idea that you'd like to share with us? We're all ears! We're constantly striving to improve 
  our music app and your feedback is crucial to making it happen. If you have any concerns or just want to chat, we're here for you too!
  At our core, we're a music app, but we believe in creating a community where everyone feels heard.
  So, why not drop us a message? We can't wait to hear from you!</p>
  <h1 id='contact-h2'>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div id= 'submit-form' className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div id= 'submit-form' className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div id= 'submit-form' className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary custom-submit-btn">
          Submit
          </button>



          <h1 id='contact-h1'>Contact</h1>
          <p id='contact-p'>If you'd like to connect with Us further, we're also available on LinkedIn!</p>
      <Table id='linkedin' striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>LinkedIn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Michelle Morris</td>
            <td>
              <a href="https://www.linkedin.com/in/your-linkedin-profile">
              https://www.linkedin.com/in/michmorris/
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
      </form>
    </div>
  );
}

export default Contact;
