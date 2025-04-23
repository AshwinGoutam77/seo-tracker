"use client"

import DashboardLayout from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardStats } from '@/components/dashboard/dashboard-stats';
import { DashboardCharts } from '@/components/dashboard/dashboard-charts';
import { KanbanBoard } from '@/components/dashboard/kanban-board';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DashboardStats />
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