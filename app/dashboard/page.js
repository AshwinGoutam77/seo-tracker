"use client"

import DashboardLayout from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardStats } from '@/components/dashboard/dashboard-stats';
import { DashboardCharts } from '@/components/dashboard/dashboard-charts';
import { KanbanBoard } from '@/components/dashboard/kanban-board';
import { BarChart3, ChevronRight, Globe, Link2, Users } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const stats = [
    {
      title: "Total Projects",
      value: "102",
      change: "+2.5%",
      changeType: "positive",
      icon: BarChart3,
    },
    {
      title: "Active Projects",
      value: "24",
      change: "+18.2%",
      changeType: "positive",
      icon: Globe,
    },
    {
      title: "Team Members",
      value: "7",
      change: "0%",
      changeType: "neutral",
      icon: Users,
    },
    {
      title: "Tasks",
      value: "15",
      change: "-3.1%",
      changeType: "negative",
      icon: Link2,
    },
  ];
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DashboardStats stats={stats} />
        </div>

        <div className='py-4 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-semibold'>Track all your projects, tasks, and <span className='block'> reminders in one place.</span></h1>
          <Link href='/projects'>
            <button className='primary-btn'>
              <span className='flex items-end'>
                <span>All Project</span>
                <ChevronRight className='h-5' />
              </span>
            </button>
          </Link>
        </div>

        <KanbanBoard />
      </div>
    </DashboardLayout >
  );
}