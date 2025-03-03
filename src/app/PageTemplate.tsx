// components/shared/PageTemplate.tsx
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageTemplateProps {
  children: ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageTemplate;