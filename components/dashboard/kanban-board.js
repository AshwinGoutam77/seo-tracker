"use client"

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, Clock, CheckCircle, AlertCircle } from 'lucide-react';

// Initial board data
const initialBoard = {
  projects: [
    {
      id: 'p1',
      title: 'Website Redesign SEO',
      description: 'Ensure SEO performance during the website redesign process',
      dueDate: '2023-12-15',
      status: 'in-progress'
    },
    {
      id: 'p2',
      title: 'Blog Content Strategy',
      description: 'Create keyword-focused content plan for Q3',
      dueDate: '2023-11-30',
      status: 'planned'
    },
    {
      id: 'p3',
      title: 'E-commerce SEO Audit',
      description: 'Complete technical SEO audit for e-commerce site',
      dueDate: '2023-11-20',
      status: 'in-progress'
    }
  ],
  tasks: [
    {
      id: 't1',
      title: 'Optimize meta descriptions',
      description: 'Update meta descriptions for top 20 pages',
      dueDate: '2023-11-15',
      status: 'completed'
    },
    {
      id: 't2',
      title: 'Fix broken links',
      description: 'Run crawler and fix all 404 errors',
      dueDate: '2023-11-12',
      status: 'in-progress'
    },
    {
      id: 't3',
      title: 'Keyword research',
      description: 'Research competitors and find new keywords',
      dueDate: '2023-11-10',
      status: 'overdue'
    },
    {
      id: 't4',
      title: 'Content audit',
      description: 'Review and update existing blog content',
      dueDate: '2023-11-18',
      status: 'planned'
    }
  ],
  notes: [
    {
      id: 'n1',
      title: 'Strategy call notes',
      description: 'Notes from client strategy call on Nov 5',
      dueDate: '2023-11-08',
      status: 'none'
    },
    {
      id: 'n2',
      title: 'Competitor analysis',
      description: 'Key findings from competitor website analysis',
      dueDate: 'none',
      status: 'none'
    },
    {
      id: 'n3',
      title: 'Google algorithm update',
      description: 'Impact of recent core update on rankings',
      dueDate: 'none',
      status: 'none'
    }
  ]
};

const getStatusBadge = (status) => {
  switch (status) {
    case 'completed':
      return <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Completed</Badge>;
    case 'in-progress':
      return <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">In Progress</Badge>;
    case 'planned':
      return <Badge variant="outline" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">Planned</Badge>;
    case 'overdue':
      return <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">Overdue</Badge>;
    default:
      return null;
  }
};

const getDueDateElement = (dueDate) => {
  if (!dueDate || dueDate === 'none') return null;

  const date = new Date(dueDate);
  const options = { month: 'short', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  const isOverdue = date < new Date() && date.toDateString() !== new Date().toDateString();

  return (
    <div className={`flex items-center text-xs ${isOverdue ? 'text-red-500' : 'text-muted-foreground'}`}>
      <Clock className="mr-1 h-3 w-3" />
      {formattedDate}
    </div>
  );
};

export function KanbanBoard() {
  const [board, setBoard] = useState(initialBoard);

  // Function to simulate adding a new item (would open a modal in a real app)
  const handleAddItem = (column) => {
    // In a real app, this would open a modal to add a new item
    console.log(`Add new item to ${column}`);
  };

  // Function to get icon based on status
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'overdue':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Projects Column */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Projects</h3>
          <Button className='primary-btn' variant="ghost" size="sm" onClick={() => handleAddItem('projects')}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          {board.projects.map((project) => (
            <Card key={project.id} className="cursor-pointer transform transition-transform hover:scale-[1.02]">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-md">{project.title}</CardTitle>
                    <CardDescription className="mt-1">{project.description}</CardDescription>
                  </div>
                  {getStatusIcon(project.status)}
                </div>
              </CardHeader>
              <CardFooter className="pt-2 flex justify-between items-center">
                {getDueDateElement(project.dueDate)}
                {getStatusBadge(project.status)}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Tasks Column */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Tasks</h3>
          <Button className='primary-btn' variant="ghost" size="sm" onClick={() => handleAddItem('tasks')}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          {board.tasks.map((task) => (
            <Card key={task.id} className="cursor-pointer transform transition-transform hover:scale-[1.02]">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-md">{task.title}</CardTitle>
                    <CardDescription className="mt-1">{task.description}</CardDescription>
                  </div>
                  {getStatusIcon(task.status)}
                </div>
              </CardHeader>
              <CardFooter className="pt-2 flex justify-between items-center">
                {getDueDateElement(task.dueDate)}
                {getStatusBadge(task.status)}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Notes Column */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Notes & Reminders</h3>
          <Button className='primary-btn' variant="ghost" size="sm" onClick={() => handleAddItem('notes')}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          {board.notes.map((note) => (
            <Card key={note.id} className="cursor-pointer transform transition-transform hover:scale-[1.02]">
              <CardHeader className="pb-2">
                <CardTitle className="text-md">{note.title}</CardTitle>
                <CardDescription className="mt-1">{note.description}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-2">
                {getDueDateElement(note.dueDate)}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}