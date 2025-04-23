"use client"

import { useState } from 'react';
import DashboardLayout from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Edit2, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getMonthName } from '@/lib/date-utils';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const initialSearchData = [
    {
        month: 'April 2025',
        totalClicks: 238,
        totalImpressions: 34700,
        averageCTR: 0.70,
        averagePosition: 39.8,
        lastUpdated: '17 Apr 2025'
    }
];

export default function SearchResultsPage() {
    const [searchData, setSearchData] = useState(initialSearchData);
    const [editingData, setEditingData] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { toast } = useToast();

    const handleEdit = (rowData) => {
        setEditingData({ ...rowData });
        setIsDialogOpen(true);
    };

    const handleSave = () => {
        const updatedData = searchData.map(item =>
            item.month === editingData.month ? editingData : item
        );
        setSearchData(updatedData);
        setIsDialogOpen(false);
        toast({
            title: "Search Results Updated",
            description: `Data for ${editingData.month} has been updated successfully.`,
        });
    };

    const handleInputChange = (field, value) => {
        setEditingData(prev => ({
            ...prev,
            [field]: field === 'month' || field === 'lastUpdated'
                ? value
                : field === 'averageCTR'
                    ? parseFloat(value) || 0
                    : parseInt(value) || 0
        }));
    };

    const getPerformanceChange = (metric) => {
        const currentValue = searchData[searchData.length - 1][metric];
        const previousValue = searchData[searchData.length - 2][metric];
        const percentageChange = ((currentValue - previousValue) / previousValue) * 100;
        return percentageChange.toFixed(1);
    };



    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth().toString());

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Google Search Results</h2>
                    <p className="text-muted-foreground mt-1">Track your search performance metrics</p>
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

                <Card className='pt-4'>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Total Clicks</TableHead>
                                    <TableHead>Total Impressions</TableHead>
                                    <TableHead>Average CTR</TableHead>
                                    <TableHead>Average Position</TableHead>
                                    <TableHead>Last Updated</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {searchData.map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{row.totalClicks}</TableCell>
                                        <TableCell>{row.totalImpressions.toLocaleString()}</TableCell>
                                        <TableCell>{row.averageCTR}%</TableCell>
                                        <TableCell>{row.averagePosition}</TableCell>
                                        <TableCell>{row.lastUpdated}</TableCell>
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

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit Search Results Data</DialogTitle>
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
                                    <Label htmlFor="totalClicks" className="text-right">Total Clicks</Label>
                                    <Input
                                        id="totalClicks"
                                        type="number"
                                        value={editingData.totalClicks}
                                        onChange={(e) => handleInputChange('totalClicks', e.target.value)}
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="totalImpressions" className="text-right">Total Impressions</Label>
                                    <Input
                                        id="totalImpressions"
                                        type="number"
                                        value={editingData.totalImpressions}
                                        onChange={(e) => handleInputChange('totalImpressions', e.target.value)}
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="averageCTR" className="text-right">Average CTR (%)</Label>
                                    <Input
                                        id="averageCTR"
                                        type="number"
                                        step="0.01"
                                        value={editingData.averageCTR}
                                        onChange={(e) => handleInputChange('averageCTR', e.target.value)}
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="averagePosition" className="text-right">Average Position</Label>
                                    <Input
                                        id="averagePosition"
                                        type="number"
                                        step="0.1"
                                        value={editingData.averagePosition}
                                        onChange={(e) => handleInputChange('averagePosition', e.target.value)}
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="lastUpdated" className="text-right">Last Updated</Label>
                                    <Input
                                        id="lastUpdated"
                                        value={editingData.lastUpdated}
                                        onChange={(e) => handleInputChange('lastUpdated', e.target.value)}
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