// src/components/TwoToOneLayout.tsx
import React from 'react';

type Props = {
  mainContent: React.ReactNode;
  sidebarContent: React.ReactNode;
};

const OneToOneLayout: React.FC<Props> = ({ mainContent, sidebarContent }) => {
  return (
    <div className="container mx-auto px- py-8 ">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 md:w-1/2 p-4">
          {/* Main Content */}
          {mainContent}
        </div>
        <div className="md:w-1/2 p-4">
          {/* Sidebar Content */}
          {sidebarContent}
        </div>
      </div>
    </div>
  );
};

export default OneToOneLayout;
