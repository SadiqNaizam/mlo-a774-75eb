import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid
} from 'recharts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ChartData {
  month: string;
  closedWon: number;
  closedLost: number;
}

const chartData: ChartData[] = [
  { month: 'March', closedWon: 88, closedLost: 65 },
  { month: 'April', closedWon: 62, closedLost: 41 },
  { month: 'May', closedWon: 95, closedLost: 68 },
  { month: 'June', closedWon: 73, closedLost: 12 },
  { month: 'July', closedWon: 84, closedLost: 55 },
  { month: 'August', closedWon: 105, closedLost: 82 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-card border rounded-md shadow-lg">
        <p className="label font-bold">{`${label}`}</p>
        <p className="intro text-[#0284c7]">{`Closed Won : ${payload[0].value}`}</p>
        <p className="intro text-[#dc2626]">{`Closed Lost : ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const LargeChartCard: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle>Leads tracking</CardTitle>
          <div className="flex items-baseline gap-4 mt-2">
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold">680</p>
              <p className="text-sm text-muted-foreground">total closed</p>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold">70</p>
              <p className="text-sm text-muted-foreground">total lost</p>
            </div>
          </div>
        </div>
        <Select defaultValue="6m">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3m">Last 3 months</SelectItem>
            <SelectItem value="6m">Last 6 months</SelectItem>
            <SelectItem value="12m">Last 12 months</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="h-[300px] w-full pb-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <defs>
              <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--foreground))', strokeWidth: 1, strokeDasharray: '3 3' }} />
            <Area type="monotone" dataKey="closedWon" stroke="#0ea5e9" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" />
            <Area type="monotone" dataKey="closedLost" stroke="#f43f5e" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="flex justify-center items-center gap-6 pt-6">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 bg-[#0ea5e9] rounded-sm"></div>
          <span className="text-sm text-muted-foreground">Closed won</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 bg-[#f43f5e] rounded-sm"></div>
          <span className="text-sm text-muted-foreground">Closed lost</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LargeChartCard;
