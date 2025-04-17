import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { 
  FaReact, FaBootstrap, FaPython, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase, 
  FaGitAlt, FaGithub, FaWindows, FaLinux, FaFigma, FaCode, FaCloud,  FaPlus
} from 'react-icons/fa';
// import { SiVisualstudiocode } from 'react-icons/si';
import '../App.css';

function Skills() {
  const skills = [
    { name: 'React', value: 85, icon: <FaReact color="#61DBFB" size={32} /> },
    { name: 'Bootstrap', value: 75, icon: <FaBootstrap color="#7952B3" size={32} /> },
    { name: 'Python', value: 65, icon: <FaPython color="#3776AB" size={32} /> },
    { name: 'C++', value: 65, icon: <FaPlus color="#3776AB" size={32} /> },
    { name: 'HTML', value: 90, icon: <FaHtml5 color="#E34F26" size={32} /> },
    { name: 'CSS', value: 80, icon: <FaCss3Alt color="#264DE4" size={32} /> },
    { name: 'JavaScript', value: 70, icon: <FaJs color="#F7DF1E" size={32} /> },
    { name: 'Node.js', value: 89, icon: <FaNodeJs color="#3C873A" size={32} /> },
    { name: 'DBMS', value: 50, icon: <FaDatabase color="#4DB33D" size={32} /> },
  ];

  const tools = [
    { name: 'Git', icon: <FaGitAlt size={40} color="#F1502F" /> },
    { name: 'GitHub', icon: <FaGithub size={40} color="#fff" /> },
    { name: 'VS Code', icon: <FaCode  size={40} color="#007ACC" /> },
    { name: 'Windows', icon: <FaWindows size={40} color="#00ADEF" /> },
    { name: 'Linux', icon: <FaLinux size={40} color="#FCC624" /> },
    { name: 'Google Cloud', icon: <FaCloud size={40} color="#FCC624" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="skills-section py-5">
      <Container id="skills">
        {/* Skills */}
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="skills-title">My Skills</h2>
          <p className="skills-subtitle">Technologies I work with</p>
        </motion.div>

        <motion.div
          className="skills-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Row>
            {skills.map((skill, index) => (
              <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
                <motion.div variants={cardVariants}>
                  <Card className="glass-card text-center p-3">
                    <div className="progress-circle mb-3">
                      <CircularProgressbar
                        value={skill.value}
                        text=""
                        styles={buildStyles({
                          pathColor: '#00d4ff',
                          trailColor: 'rgba(255,255,255,0.1)',
                        })}
                      />
                      <div className="icon-overlay">
                        {skill.icon}
                      </div>
                    </div>
                    <h5 className="mt-3 skill-name">{skill.name}</h5>
                    <p className="skill-percent">{skill.value}%</p>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Tools Section */}
        <motion.div 
          className="text-center mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="skills-title">Tools & Platforms</h2>
          <p className="skills-subtitle">Tools that power my workflow</p>
        </motion.div>

        <motion.div
          className="tools-content mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Row className="justify-content-center">
            {tools.map((tool, index) => (
              <Col xs={4} sm={3} md={2} key={index} className="mb-4">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                  className="tool-icon text-center"
                >
                  {tool.icon}
                  <p className="mt-2 tool-name">{tool.name}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

      </Container>
    </div>
  );
}

export default Skills;
