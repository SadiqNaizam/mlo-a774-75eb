import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface FunnelStage {
  name: 'Discovery' | 'Qualified' | 'In conversation' | 'Negotiations' | 'Closed won' as const;
  count: number;
  value: number;
  duration: number;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: 2, color: 'bg-chart-1' },
  { name: 'Qualified', count: 100, value: 100, duration: 2, color: 'bg-chart-2' },
  { name: 'In conversation', count: 50, value: 100, duration: 5, color: 'bg-chart-3' },
  { name: 'Negotiations', count: 20, value: 50, duration: 8, color: 'bg-chart-4' },
  { name: 'Closed won', count: 20, value: 50, duration: 10, color: 'bg-chart-5' },
];

const totalFunnelCount = funnelData.reduce((sum, item) => sum + item.count, 0);

interface SourceData {
  name: 'Clutch' | 'Behance' | 'Instagram' | 'Dribbble' as const;
  value: number;
  deals: number;
  percentage: number;
  color: string;
}

const sourcesData: SourceData[] = [
  { name: 'Clutch', value: 3000, deals: 15, percentage: 50, color: 'hsl(var(--chart-1))' },
  { name: 'Behance', value: 1000, deals: 10, percentage: 40, color: 'hsl(var(--chart-2))' },
  { name: 'Instagram', value: 1000, deals: 5, percentage: 10, color: 'hsl(var(--primary))' },
  { name: 'Dribbble', value: 1000, deals: 2, percentage: 10, color: 'hsl(var(--chart-5))' },
];

const FunnelCard: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>Funnel count</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex items-baseline gap-2 mb-4">
        <p className="text-5xl font-bold">600</p>
        <p className="text-sm text-muted-foreground">active leads</p>
      </div>
      <div className="w-full rounded-full h-2 flex overflow-hidden mb-6">
        {funnelData.map(stage => (
          <div key={stage.name} className={stage.color} style={{ width: `${(stage.count / totalFunnelCount) * 100}%` }} />
        ))}
      </div>
      <div className="space-y-4 text-sm">
        {funnelData.map(stage => (
          <div key={stage.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-4">
            <div className="flex items-center">
              <span className={`h-2.5 w-2.5 rounded-full mr-3 ${stage.color}`}></span>
              <span>{stage.name}</span>
            </div>
            <span className="font-medium text-right">${stage.value.toLocaleString()}</span>
            <div className="text-muted-foreground text-right w-20">
              {stage.name === 'Qualified' ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                        <span className="cursor-pointer">{stage.duration} days</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>average time on this stage</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <span>{stage.duration} days</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SourcesCard: React.FC = () => (
  <Card className="flex flex-col">
    <CardHeader>
      <CardTitle>Sources</CardTitle>
    </CardHeader>
    <CardContent className="flex-1 flex flex-col items-center justify-center">
      <div className="w-48 h-48 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={sourcesData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2}>
              {sourcesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
              ))}\
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full space-y-3">
        {sourcesData.map(source => (
          <div key={source.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 text-sm">
            <div className="flex items-center">
              <span className={`h-2.5 w-2.5 rounded-full mr-3`} style={{ backgroundColor: source.color }}></span>
              <span>{source.name}</span>
            </div>
            <span className="font-medium text-right">$ {source.value.toLocaleString()}</span>
            <div className='flex justify-end'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-muted-foreground text-right w-12 cursor-pointer">{source.percentage}%</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>from leads total</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        ))}\
      </div>
    </CardContent>
    <CardFooter className='justify-center'>
       <div className='bg-muted p-1 rounded-lg flex items-center gap-1'>
          <Button variant='ghost' size='sm' className='text-muted-foreground'>Leads came</Button>
          <Button variant='secondary' size='sm' className='shadow-sm'>Leads Converted</Button>
          <Button variant='ghost' size='sm' className='text-muted-foreground'>Total deals size</Button>
       </div>
    </CardFooter>
  </Card>
);

const StatsCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <FunnerCard />
      <SourcesCard />
    </div>
  );
};

export default StatsCardGrid;