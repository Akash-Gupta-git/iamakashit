import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import '../App.css';

function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_6k047mu',
      'template_ivkrhpi',
      e.target,
      'W2BUlta91HzsF3xub'
    )
    .then((result) => {
      console.log(result.text);
      setShowSuccess(true);
      e.target.reset();
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <section className="contact-section py-5">
      <Container>
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📬 Get in Touch
        </motion.h2>

        <motion.div 
          className="contact-form-container p-4 rounded"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Form onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" name="from_name" placeholder="Enter your name" required className="form-control-glass" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" name="from_email" placeholder="Enter your email" required className="form-control-glass" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" name="message" rows={4} placeholder="Write your message..." required className="form-control-glass" />
            </Form.Group>

            <Button variant="primary" type="submit" className="contact-button">
              🚀 Send Message
            </Button>
          </Form>

          {showSuccess && <Alert variant="success" className="mt-3 p-2">✅ Message sent successfully!</Alert>}
        </motion.div>
      </Container>
    </section>
  );
}

export default Contact;
