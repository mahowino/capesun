import React from 'react';
import ImageCard from './ImageCard';

interface AdditionalImageCardProps {
  imageSrc: string; 
}

const AdditionalImageCard: React.FC<AdditionalImageCardProps> = ({ imageSrc }) => {
  return (
    <div className="p-6 flex justify-center h-full">
      <ImageCard
        imageSrc={imageSrc} 
      />
    </div>
  );
};

export default AdditionalImageCard;
