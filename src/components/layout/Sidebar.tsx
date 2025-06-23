import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';

/**
 * Sidebar component for the main application layout.
 * It provides a fixed-width container for the navigation.
 * It is designed to be responsive, hiding on smaller screens.
 */
const Sidebar: React.FC = () => {
  return (
    <aside className="hidden h-full w-64 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
