"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calendar, Plus } from 'lucide-react';
import GoalsTable from '@/components/goals/GoalsList';
import { getWeeksInMonth, getMonthName } from '@/lib/date-utils';
import { goalsData, mockKeywords, mockRankings } from '@/lib/mock-data';
import DashboardLayout from '@/components/layout/dashboard-layout';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function TrackingPage() {
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth().toString());
    const [selectedFilters, setSelectedFilters] = useState({
        keyword: 'all',
        assignee: 'all'
    });
    const [weekRanges, setWeekRanges] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
        const [newKeyword, setNewKeyword] = useState({ text: '', category: 'product', difficulty: 'medium', assignedTo: 'john' });


    const handleAddKeyword = () => {
        if (newKeyword.text.trim() === '') return;

        const keywordToAdd = {
            id: Date.now().toString(),
            text: newKeyword.text,
            category: newKeyword.category,
            difficulty: newKeyword.difficulty,
            assignedTo: newKeyword.assignedTo,
            currentRank: '-',
            previousRank: '-',
            dateAdded: new Date().toISOString().split('T')[0]
        };

        setKeywords([...keywords, keywordToAdd]);
        setNewKeyword({ text: '', category: 'product', difficulty: 'medium', assignedTo: 'john' });
        setIsDialogOpen(false);
    };


    // Generate week ranges based on selected month
    useEffect(() => {
        const month = parseInt(selectedMonth);
        const year = new Date().getFullYear();
        const ranges = getWeeksInMonth(year, month);
        setWeekRanges(ranges);
    }, [selectedMonth]);

    const filteredRankings = mockRankings.filter(ranking => {
        // Filter by month
        if (ranking.month.toString() !== selectedMonth) return false;

        // Filter by keyword if not "all"
        if (selectedFilters.keyword !== 'all') {
            const keywordMatch = mockKeywords.find(k => k.id === selectedFilters.keyword);
            if (!keywordMatch || ranking.keywordId !== keywordMatch.id) return false;
        }

        // Filter by assignee if not "all"
        if (selectedFilters.assignee !== 'all') {
            const keywordMatch = mockKeywords.find(k => k.id === ranking.keywordId);
            if (!keywordMatch || keywordMatch.assignedTo !== selectedFilters.assignee) return false;
        }

        return true;
    });

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold">Goals</h1>
                        <p className="text-muted-foreground">Manage your goals</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <Button className="w-full sm:w-auto">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Goals
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add New Goal</DialogTitle>
                                    <DialogDescription>
                                        Enter the details for the new goal.
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="keyword">Goal</Label>
                                        <Input
                                            id="keyword"
                                            value={newKeyword.text}
                                            onChange={(e) => setNewKeyword({ ...newKeyword, text: e.target.value })}
                                            placeholder="Enter Goal"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="category">Count</Label>
                                        <Input
                                            id="category"
                                            placeholder="Enter Count"
                                        />
                                    </div>
                                </div>

                                <DialogFooter>
                                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                                    <Button onClick={handleAddKeyword}>Add Goal</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                <Card>
                    <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                            <CardTitle>Goals Rankings</CardTitle>
                            <Button variant="outline" size="sm">
                                <Calendar className="h-4 w-4 mr-2" />
                                Export
                            </Button>
                        </div>
                        <CardDescription>
                            View and track your goals rankings week by week.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs value={selectedMonth} onValueChange={setSelectedMonth}>
                            <TabsList className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12">
                                {Array.from({ length: 12 }, (_, i) => (
                                    <TabsTrigger key={i} value={i.toString()}>
                                        {getMonthName(i).substring(0, 3)}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {Array.from({ length: 12 }, (_, month) => (
                                <TabsContent key={month} value={month.toString()}>
                                    <GoalsTable
                                        weekRanges={weekRanges}
                                        rankings={filteredRankings}
                                        keywords={goalsData}
                                        month={month}
                                    />
                                </TabsContent>
                            ))}
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}