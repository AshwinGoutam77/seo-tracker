"use client"

import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const data = [
  { month: 'Jan', rankings: 65, traffic: 1200, conversions: 240 },
  { month: 'Feb', rankings: 59, traffic: 1100, conversions: 220 },
  { month: 'Mar', rankings: 80, traffic: 1400, conversions: 290 },
  { month: 'Apr', rankings: 81, traffic: 1600, conversions: 320 },
  { month: 'May', rankings: 56, traffic: 1000, conversions: 200 },
  { month: 'Jun', rankings: 55, traffic: 900, conversions: 180 },
  { month: 'Jul', rankings: 40, traffic: 700, conversions: 150 },
  { month: 'Aug', rankings: 72, traffic: 1300, conversions: 260 },
  { month: 'Sep', rankings: 90, traffic: 1800, conversions: 380 },
  { month: 'Oct', rankings: 95, traffic: 2000, conversions: 400 },
  { month: 'Nov', rankings: 48, traffic: 800, conversions: 170 },
  { month: 'Dec', rankings: 78, traffic: 1500, conversions: 310 },
];

export function DashboardCharts() {
  const [activeMetric, setActiveMetric] = useState('rankings');
  
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setActiveMetric('rankings')}
          className={cn(
            activeMetric === 'rankings' && "bg-primary text-primary-foreground"
          )}
        >
          Rankings
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setActiveMetric('traffic')}
          className={cn(
            activeMetric === 'traffic' && "bg-primary text-primary-foreground"
          )}
        >
          Traffic
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setActiveMetric('conversions')}
          className={cn(
            activeMetric === 'conversions' && "bg-primary text-primary-foreground"
          )}
        >
          Conversions
        </Button>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
            <XAxis
              dataKey="month"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => {
                if (activeMetric === 'traffic' || activeMetric === 'conversions') {
                  return value.toLocaleString();
                }
                return value;
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
                color: 'hsl(var(--foreground))',
              }}
              formatter={(value, name) => {
                if (name === 'traffic' || name === 'conversions') {
                  return [value.toLocaleString(), name.charAt(0).toUpperCase() + name.slice(1)];
                }
                return [value, name.charAt(0).toUpperCase() + name.slice(1)];
              }}
            />
            <Legend />
            {activeMetric === 'rankings' && (
              <Line
                type="monotone"
                dataKey="rankings"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={{ strokeWidth: 2, r: 2 }}
                activeDot={{ r: 4 }}
              />
            )}
            {activeMetric === 'traffic' && (
              <Line
                type="monotone"
                dataKey="traffic"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                dot={{ strokeWidth: 2, r: 2 }}
                activeDot={{ r: 4 }}
              />
            )}
            {activeMetric === 'conversions' && (
              <Line
                type="monotone"
                dataKey="conversions"
                stroke="hsl(var(--chart-3))"
                strokeWidth={2}
                dot={{ strokeWidth: 2, r: 2 }}
                activeDot={{ r: 4 }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}