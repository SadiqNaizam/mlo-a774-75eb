import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

/**
 * Props for the MainAppLayout component.
 */
interface MainAppLayoutProps {
  /**
   * The main content of the page to be rendered within the layout.
   */
  children: React.ReactNode;
}

/**
 * Defines the main application layout structure using CSS Grid.
 * It arranges the Sidebar, Header, and a main content area.
 * This component follows the HLSB (Header, Left Sidebar, Body) pattern.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="grid h-screen w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      {/* Sidebar: Spans both rows in the first column */}
      <div className="row-span-2">
        <Sidebar />
      </div>

      {/* Header: First row, second column */}
      <Header />

      {/* Main Content: Second row, second column, with vertical scrolling */}
      <main className="overflow-y-auto bg-background p-6">
        <div className="flex flex-col space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
