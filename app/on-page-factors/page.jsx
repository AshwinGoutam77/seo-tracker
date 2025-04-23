"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, Edit, Trash2, Save, X, Goal } from 'lucide-react';
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
import FactorList from '@/components/offPageFactors/factorsList';
import { goalsData, mockKeywords, OffPageFactorsData } from '@/lib/mock-data';
import DashboardLayout from '@/components/layout/dashboard-layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getMonthName } from '@/lib/date-utils';

export default function OnPageFactors() {
    const [keywords, setKeywords] = useState(mockKeywords);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [newKeyword, setNewKeyword] = useState({ text: '', category: 'product', difficulty: 'medium', assignedTo: 'john' });
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const categories = ['product', 'brand', 'industry', 'location'];
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth().toString());

    const filteredKeywords = selectedCategory === 'all'
        ? keywords
        : keywords.filter(keyword => keyword.category === selectedCategory);

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

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold">On Page Management</h1>
                        <p className="text-muted-foreground">Add, edit and manage your On page factors</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <Button className="w-full sm:w-auto">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Factors
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add New Factor</DialogTitle>
                                    <DialogDescription>
                                        Enter the details for the new Factor.
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="keyword">Factor</Label>
                                        <Input
                                            id="keyword"
                                            value={newKeyword.text}
                                            onChange={(e) => setNewKeyword({ ...newKeyword, text: e.target.value })}
                                            placeholder="Enter keyword"
                                        />
                                    </div>
                                </div>

                                <DialogFooter>
                                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                                    <Button onClick={handleAddKeyword}>Add Factor</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
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

                <FactorList
                    keywords={OffPageFactorsData}
                    onDelete={handleDeleteKeyword}
                    onUpdate={handleUpdateKeyword}
                    categories={categories}
                />
            </div>
        </DashboardLayout>
    );
}