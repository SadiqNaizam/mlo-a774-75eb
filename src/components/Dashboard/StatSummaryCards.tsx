import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

interface ReasonStat {
  percentage: number;
  reason: string;
}

const reasonsData: ReasonStat[] = [
  { percentage: 40, reason: 'The proposal is unclear' },
  { percentage: 20, reason: 'However venture pursuit' },
  { percentage: 10, reason: 'Other' },
  { percentage: 30, reason: 'The proposal is unclear' }, // This appears duplicated in the design
];

interface OtherStat {
  value: string;
  label: string;
  hasInfo?: boolean;
  infoText?: string;
}

const otherData: OtherStat[] = [
  { value: '900', label: 'total leads count' },
  { value: '12', label: 'days in average to convert lead' },
  { value: '30', label: 'inactive leads', hasInfo: true, infoText: 'Leads with no activity in the last 30 days.' },
];

const StatSummaryCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-y-8 gap-x-4">
            {reasonsData.map((item, index) => (
              <div key={index} className="space-y-1">
                <p className="text-4xl font-bold">{item.percentage}%</p>
                <p className="text-sm text-muted-foreground">{item.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          {otherData.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2">
                <p className="text-4xl font-bold">{item.value}</p>
                {item.hasInfo && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item.infoText}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
              <p className="text-sm text-muted-foreground max-w-[120px]">{item.label}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default StatSummaryCards;
