import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../App.css'; // for CSS styling

function About() {
  const skills = [
    { name: 'React', value: 85 },
    { name: 'Bootstrap', value: 75 },
    { name: 'Python', value: 65 },
    { name: 'C++', value: 65 },
    { name: 'HTML', value: 90 },
    { name: 'CSS', value: 80 },
    { name: 'JavaScript', value: 70 },
    { name: 'Node.js', value: 89 },
    { name: 'DBMS', value: 50 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="about-section py-5">
      <Container>
        <motion.div 
          className="text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">Let’s turn ideas into beautiful, secure and interactive projects.</p>
        </motion.div>

        <motion.div
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Row>
            <Col md={6}>
              <motion.div variants={itemVariants}>
                <p>Hi 👋 I'm <strong>Akash Gupta</strong>, a passionate and driven individual with a strong interest in technology and <strong>software development</strong>. I’m always eager to explore new tools, frameworks, and innovations that help me grow as a developer and contribute meaningfully to any team or project.</p>
                <p>My <strong>goal</strong> is to apply my knowledge in <strong>real-world</strong> scenarios, solve complex problems, and constantly upgrade my skill set. I thrive in collaborative environments and believe in learning by doing. With a curious mindset and a commitment to continuous learning, I’m ready to take on new challenges and opportunities.</p>
                <p>I love transforming ideas into beautiful, functional experiences and learning cutting-edge tools and techniques every day.</p>
                <br /><p>💻 Currently diving deep into web development and improving my full-stack skills  </p>
                <p>🎯 Goal: Become a well-rounded developer and contribute to impactful projects  </p>
                <p>🚀 Open to internships, collaborations, and hackathon challenges  </p>
              </motion.div>
            </Col>

            <Col md={6}>
              {skills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants} className="mb-4">
                  <div className="d-flex justify-content-between mb-1">
                    <strong>{skill.name}</strong>
                    <span>{skill.value}%</span>
                  </div>
                  <ProgressBar
                    now={skill.value}
                    variant="custom"
                    className="custom-progress"
                  />
                </motion.div>
              ))}
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
}

export default About;
