import React from 'react';

import { FaRocket, FaEye, FaStar } from 'react-icons/fa';
import TextHeader from './TextHeader';

const listItems = [
  {
    id: 'mission',
    icon: <FaRocket  />,
    header: 'Mission',
    paragraph: 'Our mission is to deliver precise, reliable, unbiased and redefined auto valuation and assessment services that exceed expectations and empower our clients to make informed decisions. We are dedicated to being the cornerstone of trust in the insurance industry offering meticulous and unbiased evaluations.'
  },
  {
    id: 'vision',
    icon: <FaEye  />,
    header: 'Vision',   paragraph: 'To be the most trusted and reliable motor assessment and valuation company in Kenya and the East African region, setting industry standards for accuracy, fairness, and customer satisfaction.'
  },
  {
    id: 'values',
    icon: <FaStar  />,
    header: 'Values',
    paragraph: 'We are committed to professionalism, integrity, and accountability. With honesty and transparency, we deliver high-quality services tailored to meet our clients unique needs and exceed industry standards.'
  }
];

const VerticalList = () => {
  return (
    <div className="space-y-6 mt-4">
      {listItems.map(item => (
        <div key={item.id} className="flex items-center bg-white py-4 px-2 text-justify ">
          <div className="flex-shrink-0 mr-4">{item.icon}</div>
          <div>
            <TextHeader level={5}>{item.header}</TextHeader>
            <p className=''>{item.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalList;
