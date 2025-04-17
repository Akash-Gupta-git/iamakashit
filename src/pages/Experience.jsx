import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../App.css';

function Experience() {
  const experiences = [
    {
      year: 'Sept 2021 - Nov 2022',
      role: 'Data Entry Specialist',
      company: 'Hoshiyar Singh Suresh Chandra Pvt. Ltd.',
      description: `• Entered data into department database for records.
• Verified source documents for accuracy.
• Maintained hard copies of sensitive information.`,
    },
    {
      year: 'July 2024 – Aug 2024',
      role: 'C++ Developer Intern',
      company: 'CodSoft',
      description: `• Developed a C++ application for dataset processing.
• Collaborated on new feature design and implementation.
• Used Git and GitHub for version control.`,
    },
    {
      year: 'Aug 2024 – Sept 2024',
      role: 'Web Developer Intern',
      company: 'BharatIntern',
      description: `• Developed responsive web apps using HTML, CSS, JS.
• Integrated APIs to fetch and display dynamic data.
• Worked with designers to enhance UI.`,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="experience-section py-5">
      <Container>
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📌 My Experience
        </motion.h2>

        <motion.div
          className="experience-slider"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <Row className="justify-content-center">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-item col-lg-4 col-md-6 col-sm-12 mb-4"
                variants={itemVariants}
              >
                <Card className="experience-card shadow-lg">
                  <Card.Body>
                    <Card.Title className="experience-role">{exp.role}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{exp.company}</Card.Subtitle>
                    <Card.Text className="experience-desc">{exp.description}</Card.Text>
                    <div className="timeline-year">{exp.year}</div>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}

export default Experience;
