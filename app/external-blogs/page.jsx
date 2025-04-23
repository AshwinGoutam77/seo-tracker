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
import ExternalBlogsData from '@/components/externalBlogsData/page';
import { BacklinksData, goalsData, internalBlogsData, mockKeywords, mockRankings } from '@/lib/mock-data';
import DashboardLayout from '@/components/layout/dashboard-layout';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getMonthName } from '@/lib/date-utils';

export default function InternalBlogs() {
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
                        <h1 className="text-2xl font-bold">External Blogs</h1>
                        <p className="text-muted-foreground">Manage your External Blogs</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <Button className="w-full sm:w-auto">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add External Blogs
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add External Blogs</DialogTitle>
                                    <DialogDescription>
                                        Enter the details for the External Blogs.
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="topic">Topic</Label>
                                        <Input
                                            id="topic"
                                            placeholder="Enter Topic" />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="topic">Content For</Label>
                                        <Input
                                            id="topic"
                                            placeholder="Enter Content For" />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="keyword">Keywords</Label>
                                        <Input
                                            id="keyword"
                                            placeholder="Enter Keyword" />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="lsi">LSI Keywords</Label>
                                        <Input
                                            id="lsi"
                                            placeholder="Enter LSI Keyword" />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="url">Document Link</Label>
                                        <Input
                                            type="url"
                                            id="url"
                                            placeholder="Enter Document Link" />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="quilbot">Approval</Label>
                                        <Input
                                            id="quilbot"
                                            placeholder="Enter Approval" />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="zeroGpt">Live Link</Label>
                                        <Input
                                            id="zeroGpt"
                                            placeholder="Enter Live Link" />
                                    </div>
                                </div>

                                <DialogFooter>
                                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                                    <Button onClick={handleAddKeyword}>Add External Blogs</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                <ExternalBlogsData
                    keywords={internalBlogsData}
                    // onDelete={handleDeleteKeyword}
                    // onUpdate={handleUpdateKeyword}
                    categories={categories}
                />
            </div>
        </DashboardLayout>
    );
}