// src/App.tsx
import React from 'react';
import { motion, useInView } from 'framer-motion';
import TextParagraph from './TextParagraph';

const WhoAreWeContent: React.FC = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Set up the ref and in-view trigger
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="text-justify pb-20 pt-10"
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h1 
        className="text-4xl pt-10 font-bold mb-3 lg:text-6xl font-pj"
        variants={item}
      >
        Surprisingly Fast
      </motion.h1>
      <motion.h1 
        className="text-4xl font-bold mb-3 lg:text-6xl font-pj"
        variants={item}
      >
        Turnaround
      </motion.h1>
      <motion.div variants={item}>
        <TextParagraph className="mb-3">
          Cape Sun Motor Assessors and Valuers Limited is a leading motor vehicle assessment and valuation firm, offering a full suite of services to the insurance industry, vehicle owners, and corporate clients across Kenya.
        </TextParagraph>
      </motion.div>
      <motion.div variants={item}>
        <TextParagraph className="mb-3">
          The company is known for its commitment to providing accurate, reliable, and professional assessments, from accident damage reports to comprehensive vehicle valuations. With a reputation built on trust, integrity, and in-depth industry knowledge, Cape Sun ensures that every assessment is conducted with the utmost professionalism, using the latest technology and adhering to industry best practices.
        </TextParagraph>
      </motion.div>
    </motion.div>
  );
};

export default WhoAreWeContent;
