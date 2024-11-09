// src/App.tsx
import React from 'react';
import TextParagraph from './TextParagraph';

const WhoAreWeContent: React.FC = () => {
  return (
    <div className="text-justify pb-20">
      <h1 className="text-6xl font-bold mb-3 lg:text-6xl font-pj">Surprisingly Fast</h1>
      <h1 className="text-6xl font-bold mb-3 lg:text-6xl font-pj">Turnaround</h1>
      <TextParagraph className="mb-3">
      Cape Sun Motor Assessors and Valuers Limited is a leading motor vehicle assessment and valuation firm, offering a full suite of services to the insurance industry, vehicle owners, and corporate clients across Kenya.</TextParagraph>
      <TextParagraph className="mb-3">
      The company is known for its commitment to providing accurate, reliable, and professional assessments, from accident damage reports to comprehensive vehicle valuations. With a reputation built on trust, integrity, and in-depth industry knowledge, Cape Sun ensures that every assessment is conducted with the utmost professionalism, using the latest technology and adhering to industry best practices.      </TextParagraph>
      <TextParagraph className="mb-3">
    Beyond assessments, Cape Sun Motor Assessors and Valuers Limited prioritizes client satisfaction by delivering timely and detailed reports, enabling clients to make informed decisions with confidence. Our team of seasoned professionals is dedicated to going above and beyond, ensuring every client receives personalized attention and insights tailored to their unique needs. Whether you're an insurance provider, individual vehicle owner, or corporate client, Cape Sun is your trusted partner for unmatched service quality and precision in vehicle assessment and valuation across Kenya.
</TextParagraph>

    </div>
  );
};

export default WhoAreWeContent;
