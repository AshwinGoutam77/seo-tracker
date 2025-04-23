"use client";

import { useState } from 'react';
import { Edit, Trash2, Save, X, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export default function KeywordList({ keywords, onDelete, onUpdate, categories }) {
  const [editingId, setEditingId] = useState(null);
  const [editedKeyword, setEditedKeyword] = useState({});

  const handleEdit = (keyword) => {
    setEditingId(keyword.id);
    setEditedKeyword({ ...keyword });
  };

  const handleSaveEdit = () => {
    onUpdate(editedKeyword);
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const getRankChangeIcon = (current, previous) => {
    if (current === '-' || previous === '-') return <Minus className="h-4 w-4 text-muted-foreground" />;
    const curr = parseInt(current);
    const prev = parseInt(previous);
    if (curr < prev) return <ArrowUp className="h-4 w-4 text-green-500" />;
    if (curr > prev) return <ArrowDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'hard': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return '';
    }
  };

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Keyword</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Difficulty</TableHead>
            <TableHead>Assigned To</TableHead>
            <TableHead className="text-center">Current Rank</TableHead>
            <TableHead className="text-center">Change</TableHead>
            <TableHead className="text-center">Date Added</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {keywords.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                No keywords found. Add a new keyword to get started.
              </TableCell>
            </TableRow>
          ) : (
            keywords.map((keyword) => (
              <TableRow key={keyword.id}>
                {editingId === keyword.id ? (
                  <>
                    <TableCell>
                      <Input
                        value={editedKeyword.text}
                        onChange={(e) => setEditedKeyword({...editedKeyword, text: e.target.value})}
                      />
                    </TableCell>
                    <TableCell>
                      <Select
                        value={editedKeyword.category}
                        onValueChange={(value) => setEditedKeyword({...editedKeyword, category: value})}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map(category => (
                            <SelectItem key={category} value={category}>
                              {category.charAt(0).toUpperCase() + category.slice(1)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={editedKeyword.difficulty}
                        onValueChange={(value) => setEditedKeyword({...editedKeyword, difficulty: value})}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy">Easy</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="hard">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={editedKeyword.assignedTo}
                        onValueChange={(value) => setEditedKeyword({...editedKeyword, assignedTo: value})}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="john">John Smith</SelectItem>
                          <SelectItem value="sarah">Sarah Johnson</SelectItem>
                          <SelectItem value="mike">Mike Brown</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-center">{keyword.currentRank}</TableCell>
                    <TableCell className="text-center">
                      {getRankChangeIcon(keyword.currentRank, keyword.previousRank)}
                    </TableCell>
                    <TableCell className="text-center">{keyword.dateAdded}</TableCell>
                    <TableCell className="text-right space-x-1">
                      <Button variant="ghost" size="sm" onClick={handleSaveEdit}>
                        <Save className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={handleCancelEdit}>
                        <X className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell className="font-medium">{keyword.text}</TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {keyword.category.charAt(0).toUpperCase() + keyword.category.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getDifficultyColor(keyword.difficulty)}>
                        {keyword.difficulty.charAt(0).toUpperCase() + keyword.difficulty.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {keyword.assignedTo === 'john' && 'John Smith'}
                      {keyword.assignedTo === 'sarah' && 'Sarah Johnson'}
                      {keyword.assignedTo === 'mike' && 'Mike Brown'}
                    </TableCell>
                    <TableCell className="text-center font-medium">{keyword.currentRank}</TableCell>
                    <TableCell className="text-center">
                      {getRankChangeIcon(keyword.currentRank, keyword.previousRank)}
                    </TableCell>
                    <TableCell className="text-center">{keyword.dateAdded}</TableCell>
                    <TableCell className="text-right space-x-1">
                      <Button variant="ghost" size="sm" onClick={() => handleEdit(keyword)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Keyword</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete the keyword "{keyword.text}"? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => onDelete(keyword.id)}>Delete</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}