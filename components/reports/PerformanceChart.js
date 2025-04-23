"use client";

import { useState, useEffect } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { getMonthName } from '@/lib/date-utils';
import { mockKeywords, mockRankings } from '@/lib/mock-data';

export default function PerformanceChart({ month, prevMonth, fullSize = false }) {
  const [chartData, setChartData] = useState([]);
  
  useEffect(() => {
    // Generate data for chart
    const generateChartData = () => {
      const weeks = [0, 1, 2, 3];
      const data = [];
      
      weeks.forEach((week) => {
        // Current month data
        const currentMonthRankings = mockRankings.filter(
          r => r.month.toString() === month.toString() && r.week === week
        );
        
        // Previous month data
        const prevMonthRankings = mockRankings.filter(
          r => r.month === prevMonth && r.week === week
        );
        
        // Calculate averages
        let currentMonthAvg = 0;
        if (currentMonthRankings.length > 0) {
          currentMonthAvg = currentMonthRankings.reduce((acc, curr) => {
            return acc + (curr.rank !== '-' ? parseInt(curr.rank) : 0);
          }, 0) / currentMonthRankings.length;
        }
        
        let prevMonthAvg = 0;
        if (prevMonthRankings.length > 0) {
          prevMonthAvg = prevMonthRankings.reduce((acc, curr) => {
            return acc + (curr.rank !== '-' ? parseInt(curr.rank) : 0);
          }, 0) / prevMonthRankings.length;
        }
        
        data.push({
          week: `Week ${week + 1}`,
          current: Math.round(currentMonthAvg * 10) / 10 || 0,
          previous: Math.round(prevMonthAvg * 10) / 10 || 0,
        });
      });
      
      setChartData(data);
    };
    
    generateChartData();
  }, [month, prevMonth]);
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: fullSize ? 20 : 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
        <XAxis dataKey="week" />
        <YAxis 
          reversed
          domain={[1, 50]}
          label={fullSize ? { value: 'Rank Position', angle: -90, position: 'insideLeft' } : {}} 
        />
        <Tooltip 
          formatter={(value) => [`Position ${value}`, '']}
          labelFormatter={(label) => `${label}`}
        />
        <Legend wrapperStyle={fullSize ? { paddingTop: 20 } : {}} />
        <Line
          type="monotone"
          dataKey="current"
          name={`${getMonthName(month)}`}
          stroke="hsl(var(--chart-1))"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="previous"
          name={`${getMonthName(prevMonth)}`}
          stroke="hsl(var(--chart-2))"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}