import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutGrid,
  Users,
  FileText,
  Receipt,
  ShoppingBasket,
  Mail,
  Archive,
  Calendar,
  HelpCircle,
  Settings,
  Menu,
  CircleDotDashed
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
}

const mainNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, href: '#' },
  { id: 'leads', label: 'Leads', icon: Users, href: '#' },
  { id: 'customers', label: 'Customers', icon: Users, href: '#' },
  { id: 'proposals', label: 'Proposals', icon: FileText, href: '#' },
  { id: 'invoices', label: 'Invoices', icon: Receipt, href: '#' },
  { id: 'items', label: 'Items', icon: ShoppingBasket, href: '#' },
  { id: 'mail', label: 'Mail', icon: Mail, href: '#' },
  { id: 'shoebox', label: 'Shoebox', icon: Archive, href: '#' },
  { id: 'calendar', label: 'Calendar', icon: Calendar, href: '#' },
];

const helpNavItems: NavItem[] = [
  { id: 'help1', label: 'Help', icon: HelpCircle, href: '#' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '#' },
  { id: 'help2', label: 'Help', icon: HelpCircle, href: '#' }, // The image shows two 'Help' items
];

const SidebarNav: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('dashboard');

  return (
    <nav className="flex flex-col h-full bg-sidebar text-sidebar-foreground p-4">
      <div className="flex items-center justify-between mb-6 px-2">
        <div className="flex items-center gap-2">
            <div className='bg-sidebar-primary text-sidebar-primary-foreground p-2 rounded-lg'>
                <CircleDotDashed className="h-6 w-6" />
            </div>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex-1 flex flex-col gap-y-2">
        {mainNavItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            onClick={() => setActiveId(item.id)}
            className={cn(
              'w-full justify-start h-10 px-3 text-sm font-medium',
              activeId === item.id
                ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
            )}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.label}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-y-2 pt-4 border-t border-sidebar-border">
        {helpNavItems.map((item) => (
            <Button
                key={item.id}
                variant="ghost"
                onClick={() => setActiveId(item.id)}
                className={cn(
                'w-full justify-start h-10 px-3 text-sm font-medium',
                activeId === item.id
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                )}
            >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
            </Button>
        ))}
      </div>
    </nav>
  );
};

export default SidebarNav;
