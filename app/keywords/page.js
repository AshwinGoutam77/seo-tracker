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
import KeywordList from '@/components/keywords/KeywordList';
import { mockKeywords } from '@/lib/mock-data';
import DashboardLayout from '@/components/layout/dashboard-layout';

export default function KeywordsPage() {
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
            <h1 className="text-2xl font-bold">Keyword Management</h1>
            <p className="text-muted-foreground">Add, edit and manage your target keywords</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full sm:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Keyword
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Keyword</DialogTitle>
                  <DialogDescription>
                    Enter the details for the new keyword you want to track.
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="keyword">Keyword</Label>
                    <Input
                      id="keyword"
                      value={newKeyword.text}
                      onChange={(e) => setNewKeyword({ ...newKeyword, text: e.target.value })}
                      placeholder="Enter keyword"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={newKeyword.category}
                      onValueChange={(value) => setNewKeyword({ ...newKeyword, category: value })}
                    >
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="difficulty">Difficulty</Label>
                    <Select
                      value={newKeyword.difficulty}
                      onValueChange={(value) => setNewKeyword({ ...newKeyword, difficulty: value })}
                    >
                      <SelectTrigger id="difficulty">
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="assignedTo">Assigned To</Label>
                    <Select
                      value={newKeyword.assignedTo}
                      onValueChange={(value) => setNewKeyword({ ...newKeyword, assignedTo: value })}
                    >
                      <SelectTrigger id="assignedTo">
                        <SelectValue placeholder="Select team member" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="john">John Smith</SelectItem>
                        <SelectItem value="sarah">Sarah Johnson</SelectItem>
                        <SelectItem value="mike">Mike Brown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                  <Button onClick={handleAddKeyword}>Add Keyword</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <KeywordList
          keywords={filteredKeywords}
          onDelete={handleDeleteKeyword}
          onUpdate={handleUpdateKeyword}
          categories={categories}
        />
      </div>
    </DashboardLayout>
  );
}