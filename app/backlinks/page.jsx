"use client";

import { useState } from 'react';
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
import BacklinkList from '@/components/backlinkList/page';
import { backlinkList, BacklinksData, mockKeywords } from '@/lib/mock-data';
import DashboardLayout from '@/components/layout/dashboard-layout';
import { DateRangePicker } from '@/components/ui/date-range-picker';

export default function BacklinksStrategy() {
    const [keywords, setKeywords] = useState(mockKeywords);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [newKeyword, setNewKeyword] = useState({ text: '', category: 'product', difficulty: 'medium', assignedTo: 'john' });
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const categories = ['product', 'brand', 'industry', 'location'];

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
                        <h1 className="text-2xl font-bold">Backlinks Management</h1>
                        <p className="text-muted-foreground">Add, edit and manage your backlinks</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <DateRangePicker />
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <Button className="w-full sm:w-auto">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Backlinks
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add Backlink</DialogTitle>
                                    <DialogDescription>
                                        Enter the details for the backlink.
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="title">Title</Label>
                                        <Input
                                            id="title"
                                            defaultValue={newKeyword.text}
                                            // onChange={(e) => setNewKeyword({ ...newKeyword, text: e.target.value })}
                                            placeholder="Enter title"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="Link">Link</Label>
                                        <Input
                                            id="Link"
                                            defaultValue={newKeyword.text}
                                            // onChange={(e) => setNewKeyword({ ...newKeyword, text: e.target.value })}
                                            placeholder="Enter Link"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="liveLink">Live Link</Label>
                                        <Input
                                            id="liveLink"
                                            defaultValue={newKeyword.text}
                                            // onChange={(e) => setNewKeyword({ ...newKeyword, text: e.target.value })}
                                            placeholder="Enter Live Link"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="Type">Link Type</Label>
                                        <Input
                                            id="Type"
                                            defaultValue={newKeyword.text}
                                            // onChange={(e) => setNewKeyword({ ...newKeyword, text: e.target.value })}
                                            placeholder="Enter Type"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="Type">DA/PA</Label>
                                        <Input
                                            id="Type"
                                            defaultValue={newKeyword.text}
                                            // onChange={(e) => setNewKeyword({ ...newKeyword, text: e.target.value })}
                                            placeholder="Enter DA/PA"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="Type">Spam</Label>
                                        <Input
                                            id="Type"
                                            defaultValue={newKeyword.text}
                                            // onChange={(e) => setNewKeyword({ ...newKeyword, text: e.target.value })}
                                            placeholder="Enter Spam"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="Type">Follow</Label>
                                        <Input
                                            id="Type"
                                            defaultValue={newKeyword.text}
                                            // onChange={(e) => setNewKeyword({ ...newKeyword, text: e.target.value })}
                                            placeholder="Enter Follow"
                                        />
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

                <BacklinkList
                    keywords={backlinkList}
                    onDelete={handleDeleteKeyword}
                    onUpdate={handleUpdateKeyword}
                    categories={categories}
                />
            </div>
        </DashboardLayout>
    );
}