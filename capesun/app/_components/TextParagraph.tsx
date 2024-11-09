import React from 'react';

interface TextParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const TextParagraph: React.FC<TextParagraphProps> = ({ children, className = '' }) => {
  return (
    <p className={`text-base sm:text-lg font-asar md:text-xl  ${className}`}>
      {children}
    </p>
  );
};

export default TextParagraph;
