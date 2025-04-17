import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../App.css';

function ProjectCard({ title, description, image, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.07, boxShadow: "0 0 20px #00d4ff" }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 150 }}
    >
      <Card className="project-card shadow h-100">
        <Card.Img variant="top" src={image} alt={title} className="project-img" />
        <Card.Body>
          <Card.Title className="project-title">{title}</Card.Title>
          <Card.Text className="project-desc">{description}</Card.Text>
          <Button variant="custom" href={link} target="_blank">🚀 View Project</Button>
        </Card.Body>
      </Card>
    </motion.div>
  )
}

export default ProjectCard;
