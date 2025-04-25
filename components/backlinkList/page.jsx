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
import { Textarea } from '../ui/textarea';

export default function BacklinkList({ keywords, onDelete, onUpdate, categories }) {
    const [editingId, setEditingId] = useState(null);
    const [editedKeyword, setEditedKeyword] = useState({});
    const [Count, setCount] = useState({})

    const handleEdit = (keyword) => {
        setEditingId(keyword.id);
        setEditedKeyword({ ...keyword });
        setCount({ ...keyword });
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
            <Table className='w-max'>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Link </TableHead>
                        <TableHead>Live Link</TableHead>
                        <TableHead>Link Type</TableHead>
                        <TableHead>DA</TableHead>
                        <TableHead>Spam</TableHead>
                        <TableHead>Follow</TableHead>
                        <TableHead>Actions</TableHead>
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
                                                value={editedKeyword.Activity}
                                                onChange={(e) => setEditedKeyword({ ...editedKeyword, text: e.target.value })}
                                            />
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Input
                                                value={Count.Backlinks}
                                                onChange={(e) => setCount({ ...Count, Count: e.target.value })}
                                            />
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Input
                                                value={Count.Keyword}
                                                onChange={(e) => setCount({ ...Count, text: e.target.value })}
                                            />
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Input
                                                value={Count.URL}
                                                onChange={(e) => setCount({ ...Count, text: e.target.value })}
                                            />
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Input
                                                value={Count.URL}
                                                onChange={(e) => setCount({ ...Count, text: e.target.value })}
                                            />
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Input
                                                value={Count.URL}
                                                onChange={(e) => setCount({ ...Count, text: e.target.value })}
                                            />
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Input
                                                value={Count.URL}
                                                onChange={(e) => setCount({ ...Count, text: e.target.value })}
                                            />
                                        </TableCell>
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
                                        <TableCell className="font-medium">{keyword.title}</TableCell>
                                        <TableCell>{keyword.link}</TableCell>
                                        <TableCell>{keyword.liveLink}</TableCell>
                                        <TableCell>{keyword.type}</TableCell>
                                        <TableCell>{keyword.type}</TableCell>
                                        <TableCell>{keyword.type}</TableCell>
                                        <TableCell>{keyword.type}</TableCell>
                                        <TableCell>
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