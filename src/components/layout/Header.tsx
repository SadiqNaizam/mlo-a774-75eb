import React from 'react';
import TopHeader from '../Dashboard/TopHeader';

/**
 * Header component for the main application layout.
 * It serves as a container for the TopHeader organism, which includes the page title, tabs, and actions.
 */
const Header: React.FC = () => {
  return (
    <header className="border-b bg-background pl-6">
      {/* 
        The TopHeader is a self-contained organism with its own internal padding and layout.
        This parent component provides the structural container, background, border, and consistent left padding.
        The height of this header area is determined by the content within TopHeader, aligning with `grid-rows-[auto_1fr]`.
      */}
      <TopHeader />
    </header>
  );
};

export default Header;
