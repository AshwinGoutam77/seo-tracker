"use client"

import DashboardLayout from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardStats } from '@/components/dashboard/dashboard-stats';
import { DashboardCharts } from '@/components/dashboard/dashboard-charts';
import { KanbanBoard } from '@/components/dashboard/kanban-board';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDashboard() {
    return (
        <DashboardLayout>
            <div className="space-y-6">
                <h1 className='text-2xl  font-semibold'>E-commerce Website SEO</h1>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <DashboardStats />
                </div>

                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="analytics">Analytics</TabsTrigger>
                        <TabsTrigger value="projects">Projects</TabsTrigger>
                        <TabsTrigger value="keywords">Keywords</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="lg:col-span-4">
                                <CardHeader>
                                    <CardTitle>Performance Overview</CardTitle>
                                </CardHeader>
                                <CardContent className="pl-2">
                                    <DashboardCharts />
                                </CardContent>
                            </Card>

                            <Card className="lg:col-span-3">
                                <CardHeader>
                                    <CardTitle>Top Keywords</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {['SEO Strategy', 'Digital Marketing', 'Content Strategy', 'Link Building','SEO Strategy', 'Digital Marketing', 'Content Strategy', 'Link Building'].map((keyword, i) => (
                                            <div key={i} className="flex items-center">
                                                <div className="w-full mr-4">
                                                    <div className="flex justify-between mb-1">
                                                        <span className="text-sm font-medium">{keyword}</span>
                                                        <span className="text-sm font-medium text-muted-foreground">{90 - (i * 12)}%</span>
                                                    </div>
                                                    <div className="w-full bg-muted rounded-full h-2">
                                                        <div
                                                            className="bg-primary rounded-full h-2"
                                                            style={{ width: `${90 - (i * 12)}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="analytics" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Analytics Data</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Analytics content will appear here</p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="projects" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Project Analytics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Project analytics content will appear here</p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="keywords" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Keyword Performance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Keyword performance content will appear here</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </DashboardLayout >
    );
}