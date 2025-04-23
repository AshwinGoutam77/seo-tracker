'use client'
import DashboardLayout from '@/components/layout/dashboard-layout'
import React, { useState } from 'react'
import GoalsSetting from '../../components/goals-setting/page'
import { goalsData, mockKeywords } from '@/lib/mock-data'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
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
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export default function Settings() {
    const [keywords, setKeywords] = useState(mockKeywords);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

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
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
                <div>
                    <h1 className="text-2xl font-bold">Goals Management</h1>
                    <p className="text-muted-foreground">Add, edit and manage your Goals</p>
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
                                    <Label htmlFor="goal">Goal</Label>
                                    <Input
                                        id="goal"
                                        placeholder="Enter goal"
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
            <GoalsSetting
                keywords={goalsData}
                onDelete={handleDeleteKeyword}
                onUpdate={handleUpdateKeyword}
            />
        </DashboardLayout>
    )
}
