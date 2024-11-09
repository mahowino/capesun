import React from 'react';

interface ImageCardProps {
  imageSrc: string;
  title?: string; // Make title optional
  description?: string; // Make description optional
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="relative max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-full object-cover bg-no-repeat" src={imageSrc} alt={title || 'Image'} />
      {(title || description) && (
        <div className="absolute inset-0 bg-white bg-opacity-75 p-4 flex flex-col justify-end">
          {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
          {description && <p className="text-gray-700">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default ImageCard;
