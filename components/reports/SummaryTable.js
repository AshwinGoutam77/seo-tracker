"use client";

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SummaryTable({ month, keywords, rankings }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get latest rank (week 3) and calculate changes
  const keywordSummary = keywords.map(keyword => {
    // Get rankings for this keyword in the selected month
    const keywordRankings = rankings.filter(
      r => r.keywordId === keyword.id && r.month.toString() === month.toString()
    );
    
    // Get latest rank (week 3) for the month
    const latestRank = keywordRankings.find(r => r.week === 3)?.rank || '-';
    
    // Get earliest rank (week 0) for the month
    const earliestRank = keywordRankings.find(r => r.week === 0)?.rank || '-';
    
    // Calculate change
    let change = 0;
    let changeText = '-';
    
    if (latestRank !== '-' && earliestRank !== '-') {
      change = parseInt(earliestRank) - parseInt(latestRank);
      changeText = change === 0 ? '0' : (change > 0 ? `+${change}` : change.toString());
    }
    
    return {
      ...keyword,
      latestRank,
      change,
      changeText
    };
  });
  
  // Filter based on search query
  const filteredKeywords = keywordSummary.filter(keyword =>
    keyword.text.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const getChangeIcon = (change) => {
    if (change > 0) return <ArrowUp className="h-4 w-4 text-green-500 inline ml-1" />;
    if (change < 0) return <ArrowDown className="h-4 w-4 text-red-500 inline ml-1" />;
    return <Minus className="h-4 w-4 text-muted-foreground inline ml-1" />;
  };
  
  const getChangeClass = (change) => {
    if (change > 0) return 'text-green-500';
    if (change < 0) return 'text-red-500';
    return '';
  };
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          placeholder="Search keywords..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
        <Button variant="outline" size="sm">
          Export as CSV
        </Button>
      </div>
      
      <div className="border rounded-lg overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[200px]">Keyword</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Difficulty</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead className="text-center">Current Position</TableHead>
              <TableHead className="text-center">Monthly Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredKeywords.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No keywords found. Try modifying your search.
                </TableCell>
              </TableRow>
            ) : (
              filteredKeywords.map((keyword) => (
                <TableRow key={keyword.id}>
                  <TableCell className="font-medium">{keyword.text}</TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {keyword.category.charAt(0).toUpperCase() + keyword.category.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      className={
                        keyword.difficulty === 'easy' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                          : keyword.difficulty === 'medium'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                      }
                    >
                      {keyword.difficulty.charAt(0).toUpperCase() + keyword.difficulty.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {keyword.assignedTo === 'john' && 'John Smith'}
                    {keyword.assignedTo === 'sarah' && 'Sarah Johnson'}
                    {keyword.assignedTo === 'mike' && 'Mike Brown'}
                  </TableCell>
                  <TableCell className="text-center font-medium">
                    {keyword.latestRank}
                  </TableCell>
                  <TableCell className={`text-center font-medium ${getChangeClass(keyword.change)}`}>
                    {keyword.changeText}
                    {getChangeIcon(keyword.change)}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}