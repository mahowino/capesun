// src/components/TwoToOneLayout.tsx
import React from 'react';

type Props = {
  mainContent: React.ReactNode;
  sidebarContent: React.ReactNode;
};

const TwoToOneLayout: React.FC<Props> = ({ mainContent, sidebarContent }) => {
  return (
    <div className="container mx-auto px-2 py-8 ">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 md:w-2/3 p-4">
          {/* Main Content */}
          {mainContent}
        </div>
        <div className="md:w-1/3 p-4">
          {/* Sidebar Content */}
          {sidebarContent}
        </div>
      </div>
    </div>
  );
};

export default TwoToOneLayout;
