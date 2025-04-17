import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaYoutube, FaGithub, FaTwitter, FaCloud, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profilePic from '../assets/images/Akash.png'
import * as framer from 'framer-motion';

const MotionDiv = framer.motion.div;

function Hero() {
  return (
    <div className="hero-bg text-center text-white py-5">
      <Container>
        <motion.section
          id="hero"
          className="hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Row className="align-items-center">
            <Col md={6} className="text-md-start text-center">
              <motion.h1
                className="display-4 fw-bold mb-3"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Hi, I'm <span className="highlight">Akash Gupta</span>
              </motion.h1>

              <motion.p
                className="lead mb-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                React Developer | Python Automation Enthusiast | Full Stack Learner
              </motion.p>

              <motion.div
                className="button-group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <a href="mailto:akashgupta32683@gmail.com">
                  <Button variant="outline-light" size="lg" className="me-3">
                    📧 Contact Me
                  </Button>
                </a>

                <Button
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                  className="custom-btn"
                >
                  📄 Download Resume
                </Button>

                <div className="social-icons mt-3 gap-2 d-flex justify-content-center">
                  <a href="https://www.instagram.com/i_am_akashit" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  <a href="https://www.linkedin.com/in/akash-gupta-718363296/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a href="https://www.youtube.com/@BCAboy_akash" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                  <a href="https://github.com/Akash-gupta-git" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  {/* <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a> */}
                  <a href="https://www.cloudskillsboost.google/public_profiles/8c74d0f0-e93f-43da-9a49-99e61800e527" target="_blank" rel="noopener noreferrer"><FaCloud /></a>
                  <a href="https://whatsapp.com/channel/0029VaduePWDuMRnjYPvN42I" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                </div>
              </motion.div>
            </Col>

            <Col md={6} className="text-center mt-4 mt-md-0">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <Image src={profilePic} roundedCircle fluid className="profile-pic" />
              </motion.div>
            </Col>
          </Row>
        </motion.section>
      </Container>
    </div>
  );
}
export default Hero;
