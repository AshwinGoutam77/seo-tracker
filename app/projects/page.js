"use client"

import { useState } from 'react';
import DashboardLayout from '@/components/layout/dashboard-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Plus, ArrowUpRight, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    name: 'E-commerce Website SEO',
    description: 'Complete SEO strategy for an online retail platform',
    status: 'active',
    progress: 75,
    keywords: 124,
    backlinks: 230,
    growth: '+15%',
  },
  {
    id: 2,
    name: 'SaaS Product Blog',
    description: 'Content marketing and keyword strategy for SaaS platform',
    status: 'active',
    progress: 45,
    keywords: 87,
    backlinks: 156,
    growth: '+8%',
  },
  {
    id: 3,
    name: 'Local Business Website',
    description: 'Local SEO optimization for service business',
    status: 'active',
    progress: 90,
    keywords: 42,
    backlinks: 78,
    growth: '+24%',
  },
  {
    id: 4,
    name: 'Tech News Portal',
    description: 'SEO strategy for technology news website',
    status: 'pending',
    progress: 10,
    keywords: 176,
    backlinks: 0,
    growth: '0%',
  },
  {
    id: 5,
    name: 'Educational Platform',
    description: 'Content and keyword optimization for online courses',
    status: 'archived',
    progress: 100,
    keywords: 68,
    backlinks: 192,
    growth: '0%',
  },
  {
    id: 6,
    name: 'Financial Services',
    description: 'SEO for financial advisor website',
    status: 'active',
    progress: 35,
    keywords: 94,
    backlinks: 45,
    growth: '+5%',
  },
];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter(project => {
    // Filter by search query
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by status
    const matchesFilter = filter === 'all' || project.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <p className="text-muted-foreground mt-1">Manage your SEO projects and campaigns</p>
          </div>

          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Button>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button
              variant={filter === 'active' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('active')}
            >
              Active
            </Button>
            <Button
              variant={filter === 'pending' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('pending')}
            >
              Pending
            </Button>
            <Button
              variant={filter === 'archived' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('archived')}
            >
              Archived
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link href={`/project-dashboard`} key={project.id}>
              <Card key={project.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="pb-3 pt-5">
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.name}</span>
                    <Badge variant={
                      project.status === 'active' ? 'default' :
                        project.status === 'pending' ? 'secondary' :
                          'outline'
                    }>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </Badge>
                  </CardTitle>
                  <CardDescription className="mt-1.5">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`rounded-full h-2 ${project.status === 'active' ? 'bg-primary' :
                            project.status === 'pending' ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">Keywords</span>
                        <p className="text-lg font-bold">{project.keywords}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">Backlinks</span>
                        <p className="text-lg font-bold">{project.backlinks}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">Growth</span>
                        <p className={`text-lg font-bold flex items-center justify-center ${project.growth.startsWith('+') ? 'text-green-500' : ''
                          }`}>
                          {project.growth}
                          {project.growth.startsWith('+') && <ArrowUpRight className="h-4 w-4 ml-1" />}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-1">
                  <Button variant="outline" className="w-full">
                    <BarChart3 className="h-4 w-4 mr-2" /> View Details
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}