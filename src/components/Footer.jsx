import { Container } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub, FaCloud, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../App.css';

function Footer() {
  return (
    <motion.footer
      className="footer-section py-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="text-center">
        <motion.h4
          className="mb-3 footer-name"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          🚀 Designed & Developed by <span className="highlight">Akash Gupta</span>
        </motion.h4>

        <div className="footer-icons mb-3">
          
          <a href="https://www.instagram.com/i_am_akashit" target="_blank" rel="noopener noreferrer"><FaInstagram size={28} /></a>
          <a href="https://www.linkedin.com/in/akash-gupta-718363296/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} /></a>
          <a href="https://www.youtube.com/@BCAboy_akash" target="_blank" rel="noopener noreferrer"><FaYoutube size={28} /></a>
          <a href="https://github.com/Akash-gupta-git" target="_blank" rel="noopener noreferrer"><FaGithub  size={28} /></a>
          <a href="https://www.cloudskillsboost.google/public_profiles/8c74d0f0-e93f-43da-9a49-99e61800e527" target="_blank" rel="noopener noreferrer"><FaCloud  size={28} /></a>
          <a href="https://whatsapp.com/channel/0029VaduePWDuMRnjYPvN42I" target="_blank" rel="noopener noreferrer"><FaWhatsapp  size={28} /></a>
        </div>

        <p className="footer-copy mb-0">© {new Date().getFullYear()} Akash Gupta. All rights reserved.</p>
      </Container>
    </motion.footer>
  );
}

export default Footer;
