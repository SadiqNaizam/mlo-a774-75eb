import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, CalendarDays } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TopHeader: React.FC = () => {
  return (
    <header className="flex items-start justify-between py-4 pr-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
        <Tabs defaultValue="leads" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-muted h-11">
            <TabsTrigger value="sales" className="text-muted-foreground data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm">Sales</TabsTrigger>
            <TabsTrigger value="leads" className="text-muted-foreground data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm">Leads</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex items-center gap-4">
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 font-normal">
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    <span>last 6 months</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                <DropdownMenuItem>Last 3 months</DropdownMenuItem>
                <DropdownMenuItem>Last 6 months</DropdownMenuItem>
                <DropdownMenuItem>Last 12 months</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center gap-1">
              <span>Create</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>New Lead</DropdownMenuItem>
            <DropdownMenuItem>New Customer</DropdownMenuItem>
            <DropdownMenuItem>New Proposal</DropdownMenuItem>
            <DropdownMenuItem>New Invoice</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
