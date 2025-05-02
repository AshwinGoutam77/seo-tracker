"use client"

import {
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  Globe,
  Users,
  Link2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function DashboardStats({ stats }) {
  return (
    <>
      {stats.map((stat, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center pt-1 text-xs">
              {stat.changeType === "positive" ? (
                <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
              ) : stat.changeType === "negative" ? (
                <ArrowDownRight className="mr-1 h-3 w-3 text-red-500" />
              ) : null}
              <span className={
                stat.changeType === "positive"
                  ? "text-green-500"
                  : stat.changeType === "negative"
                    ? "text-red-500"
                    : "text-muted-foreground"
              }>
                {stat.change} from last month
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}