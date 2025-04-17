import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects.json';
import { motion } from 'framer-motion';
import '../App.css';

function Projects() {
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
    <div className="projects-section py-5">
      <Container>
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-subtitle">Here’s what I’ve been working on recently</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Row>
            {projects.map(project => (
              <Col md={4} className="mb-4" key={project.id}>
                <motion.div variants={itemVariants}>
                  <ProjectCard 
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </div>
  );
}

export default Projects;
