import React, { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaRocket, FaEye, FaStar } from 'react-icons/fa';
import TextHeader from './TextHeader';

type ListItemProps = {
  id: string;
  icon: React.ReactNode;
  header: string;
  paragraph: string;
};

const listItems: ListItemProps[] = [
  {
    id: 'mission',
    icon: <FaRocket />,
    header: 'Mission',
    paragraph: 'To deliver precise, reliable, unbiased and redefined auto valuation and assessment services that exceed expectations and empower our clients to make informed decisions.',
  },
  {
    id: 'vision',
    icon: <FaEye />,
    header: 'Vision',
    paragraph: 'To be the most trusted and reliable motor assessment and valuation company in Kenya and the East African region, setting industry standards for accuracy, fairness, and customer satisfaction.',
  },
  {
    id: 'values',
    icon: <FaStar />,
    header: 'Values',
    paragraph: 'We are committed to professionalism, integrity, and accountability. With honesty and transparency, we deliver high-quality services tailored to meet our clients unique needs and exceed industry standards.',
  },
];

const VerticalList: FC = () => {
  return (
    <div className="space-y-6 mt-4">
      {listItems.map((item) => (
        <ListItem
              key={item.id}
              icon={item.icon}
              header={item.header}
              paragraph={item.paragraph} 
              id={item.id}       
               />
      ))}
    </div>
  );
};

// Component for each animated list item
const ListItem: FC<ListItemProps> = ({ icon, header, paragraph }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      className="flex items-center bg-white py-4 px-2 text-justify"
      variants={animationVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="flex-shrink-0 mr-4">{icon}</div>
      <div>
        <TextHeader level={5}>{header}</TextHeader>
        <p>{paragraph}</p>
      </div>
    </motion.div>
  );
};

export default VerticalList;
