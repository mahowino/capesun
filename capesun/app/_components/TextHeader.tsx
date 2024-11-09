import React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const TextHeader: React.FC<HeadingProps> = ({ level, children, className = '' }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const fontSizeClasses = {
    1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
    2: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
    3: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
    4: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
    5: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
    6: 'text-base sm:text-lg md:text-xl lg:text-2xl',
  };

  return (
    <Tag className={`${fontSizeClasses[level]} font-bold ${className} font-asar`}>
      {children}
    </Tag>
  );
};

export default TextHeader;
