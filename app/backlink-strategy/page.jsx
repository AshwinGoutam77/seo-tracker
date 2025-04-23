"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
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
import BacklinkStrategyList from '@/components/backlinksStrategy/backlinks';
import { BacklinksData, goalsData, mockKeywords, mockRankings } from '@/lib/mock-data';
import DashboardLayout from '@/components/layout/dashboard-layout';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getMonthName } from '@/lib/date-utils';

export default function BacklinksStrategy() {
    const [keywords, setKeywords] = useState(mockKeywords);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [newKeyword, setNewKeyword] = useState({ text: '', category: 'product', difficulty: 'medium', assignedTo: 'john' });
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const categories = ['product', 'brand', 'industry', 'location'];

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

    const handleDeleteKeyword = (id) => {
        setKeywords(keywords.filter(keyword => keyword.id !== id));
    };

    const handleUpdateKeyword = (updatedKeyword) => {
        setKeywords(keywords.map(keyword =>
            keyword.id === updatedKeyword.id ? updatedKeyword : keyword
        ));
    };

    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth().toString());

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <Tabs value={selectedMonth} onValueChange={setSelectedMonth}>
                    <TabsList className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12">
                        {Array.from({ length: 12 }, (_, i) => (
                            <TabsTrigger key={i} value={i.toString()}>
                                {getMonthName(i).substring(0, 3)}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold">Backlinks Strategy Management</h1>
                        <p className="text-muted-foreground">Add, edit and manage your backlinks strategy</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <Button className="w-full sm:w-auto">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Backlinks
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add Backlink Strategy</DialogTitle>
                                    <DialogDescription>
                                        Enter the details for the backlink strategy.
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="category">Task</Label>
                                        <Select
                                            value={newKeyword.category}
                                            onValueChange={(value) => setNewKeyword({ ...newKeyword, category: value })}
                                        >
                                            <SelectTrigger id="category">
                                                <SelectValue placeholder="Select category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {goalsData.map(data => (
                                                    <SelectItem key={data?.text} value={data?.text}>
                                                        {data?.text.charAt(0).toUpperCase() + data?.text.slice(1)}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="keyword">Keywords</Label>
                                        <Input
                                            id="keyword"
                                            placeholder="Enter Keyword" />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="url">URL</Label>
                                        <Input
                                            id="url"
                                            placeholder="Enter URL" />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="title">Title</Label>
                                        <Input
                                            id="title"
                                            placeholder="Enter Title" />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea
                                            id="description"
                                            placeholder="Enter Description" />
                                    </div>
                                </div>

                                <DialogFooter>
                                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                                    <Button onClick={handleAddKeyword}>Add Backlink</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                <BacklinkStrategyList
                    keywords={BacklinksData}
                    onDelete={handleDeleteKeyword}
                    onUpdate={handleUpdateKeyword}
                    categories={categories}
                />
            </div>
        </DashboardLayout>
    );
}