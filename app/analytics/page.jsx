"use client"

import { useState } from 'react';
import DashboardLayout from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Edit2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getMonthName } from '@/lib/date-utils';

const initialAnalyticsData = [
    { users: 175, newUser: 340, totalSession: 340, organicSearch: 340, direct: 0, referral: 0, organicSocial: 0, lastUpdates: '1 June' },
];

export default function AnalyticsPage() {
    const [analyticsData, setAnalyticsData] = useState(initialAnalyticsData);
    const [activeMetric, setActiveMetric] = useState('users');
    const [editingData, setEditingData] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { toast } = useToast();

    const getChartColor = (metric) => {
        switch (metric) {
            case 'users': return 'hsl(var(--chart-1))';
            case 'newUser': return 'hsl(var(--chart-2))';
            case 'totalSession': return 'hsl(var(--chart-3))';
            case 'organicSearch': return 'hsl(var(--chart-4))';
            default: return 'hsl(var(--chart-5))';
        }
    };

    const handleEdit = (rowData) => {
        setEditingData({ ...rowData });
        setIsDialogOpen(true);
    };

    const handleSave = () => {
        const updatedData = analyticsData.map(item =>
            item.month === editingData.month ? editingData : item
        );
        setAnalyticsData(updatedData);
        setIsDialogOpen(false);
        toast({
            title: "Analytics Updated",
            description: `Data for ${editingData.month} has been updated successfully.`,
        });
    };

    const handleInputChange = (field, value) => {
        setEditingData(prev => ({
            ...prev,
            [field]: field === 'month' || field === 'lastUpdates' ? value : parseInt(value) || 0
        }));
    };

    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth().toString());

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
                    <p className="text-muted-foreground mt-1">Track your website performance metrics</p>
                </div>

                <Tabs value={selectedMonth} onValueChange={setSelectedMonth}>
                    <TabsList className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12">
                        {Array.from({ length: 12 }, (_, i) => (
                            <TabsTrigger key={i} value={i.toString()}>
                                {getMonthName(i).substring(0, 3)}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>

                {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{analyticsData[analyticsData.length - 1].users}</div>
                            <p className="text-xs text-muted-foreground">Last updated: {analyticsData[analyticsData.length - 1].lastUpdates}</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">New Users</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{analyticsData[analyticsData.length - 1].newUser}</div>
                            <p className="text-xs text-muted-foreground">Last updated: {analyticsData[analyticsData.length - 1].lastUpdates}</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{analyticsData[analyticsData.length - 1].totalSession}</div>
                            <p className="text-xs text-muted-foreground">Last updated: {analyticsData[analyticsData.length - 1].lastUpdates}</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Organic Search</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{analyticsData[analyticsData.length - 1].organicSearch}</div>
                            <p className="text-xs text-muted-foreground">Last updated: {analyticsData[analyticsData.length - 1].lastUpdates}</p>
                        </CardContent>
                    </Card>
                </div> */}

                {/* <Tabs defaultValue="charts" className="space-y-4"> */}
                {/* <TabsContent value="table"> */}
                <Card className='pt-4'>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    {/* <TableHead>Month</TableHead> */}
                                    <TableHead>Users</TableHead>
                                    <TableHead>New Users</TableHead>
                                    <TableHead>Total Sessions</TableHead>
                                    <TableHead>Organic Search</TableHead>
                                    <TableHead>Direct</TableHead>
                                    <TableHead>Referral</TableHead>
                                    <TableHead>Organic Social</TableHead>
                                    <TableHead>Last Updated</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {analyticsData.map((row, i) => (
                                    <TableRow key={i}>
                                        {/* <TableCell>{row.month}</TableCell> */}
                                        <TableCell>{row.users}</TableCell>
                                        <TableCell>{row.newUser}</TableCell>
                                        <TableCell>{row.totalSession}</TableCell>
                                        <TableCell>{row.organicSearch}</TableCell>
                                        <TableCell>{row.direct}</TableCell>
                                        <TableCell>{row.referral}</TableCell>
                                        <TableCell>{row.organicSocial}</TableCell>
                                        <TableCell>{row.lastUpdates}</TableCell>
                                        <TableCell>
                                            <Button variant="ghost" size="icon" onClick={() => handleEdit(row)}>
                                                <Edit2 className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                {/* </TabsContent> */}
                {/* </Tabs> */}

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit Analytics Data</DialogTitle>
                        </DialogHeader>
                        {editingData && (
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="month" className="text-right">Month</Label>
                                    <Input
                                        id="month"
                                        value={editingData.month}
                                        onChange={(e) => handleInputChange('month', e.target.value)}
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="users" className="text-right">Users</Label>
                                    <Input
                                        id="users"
                                        type="number"
                                        value={editingData.users}
                                        onChange={(e) => handleInputChange('users', e.target.value)}
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="newUser" className="text-right">New Users</Label>
                                    <Input
                                        id="newUser"
                                        type="number"
                                        value={editingData.newUser}
                                        onChange={(e) => handleInputChange('newUser', e.target.value)}
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="totalSession" className="text-right">Total Sessions</Label>
                                    <Input
                                        id="totalSession"
                                        type="number"
                                        value={editingData.totalSession}
                                        onChange={(e) => handleInputChange('totalSession', e.target.value)}
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="organicSearch" className="text-right">Organic Search</Label>
                                    <Input
                                        id="organicSearch"
                                        type="number"
                                        value={editingData.organicSearch}
                                        onChange={(e) => handleInputChange('organicSearch', e.target.value)}
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="direct" className="text-right">Direct</Label>
                                    <Input
                                        id="direct"
                                        type="number"
                                        value={editingData.direct}
                                        onChange={(e) => handleInputChange('direct', e.target.value)}
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="referral" className="text-right">Referral</Label>
                                    <Input
                                        id="referral"
                                        type="number"
                                        value={editingData.referral}
                                        onChange={(e) => handleInputChange('referral', e.target.value)}
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="organicSocial" className="text-right">Organic Social</Label>
                                    <Input
                                        id="organicSocial"
                                        type="number"
                                        value={editingData.organicSocial}
                                        onChange={(e) => handleInputChange('organicSocial', e.target.value)}
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="lastUpdates" className="text-right">Last Updated</Label>
                                    <Input
                                        id="lastUpdates"
                                        value={editingData.lastUpdates}
                                        onChange={(e) => handleInputChange('lastUpdates', e.target.value)}
                                        className="col-span-3"
                                    />
                                </div>
                            </div>
                        )}
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                            <Button onClick={handleSave}>Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </DashboardLayout>
    );
}