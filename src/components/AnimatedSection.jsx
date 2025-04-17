
import { motion } from "framer-motion";
import * as framer from 'framer-motion';

const MotionDiv = framer.motion.div;

function AnimatedSection({ children }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-5"
      >
        {children}
      </motion.div>
      
    );
  }
   export default AnimatedSection;