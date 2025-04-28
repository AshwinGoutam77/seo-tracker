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
import { Button } from '@/components/ui/button';
import { Save, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { getMonthName } from '@/lib/date-utils';

export default function GoalsTable({ weekRanges, rankings, keywords, month }) {
    const [editMode, setEditMode] = useState(false);
    const [editedRankings, setEditedRankings] = useState({});

    // Group rankings by keyword
    const groupedRankings = {};

    keywords.forEach(keyword => {
        groupedRankings[keyword.id] = {
            keyword,
            rankings: {}
        };

        // Initialize empty rankings for each week
        weekRanges.forEach((_, weekIndex) => {
            groupedRankings[keyword.id].rankings[weekIndex] = '-';
        });
    });

    // Fill in actual rankings
    rankings.forEach(ranking => {
        if (groupedRankings[ranking.keywordId]) {
            groupedRankings[ranking.keywordId].rankings[ranking.week] = ranking.rank;
        }
    });

    const handleRankChange = (keywordId, week, value) => {
        setEditedRankings({
            ...editedRankings,
            [`${keywordId}-${week}`]: value
        });
    };

    const handleSaveChanges = () => {
        // Here you would save the changes to your database
        console.log('Saving changes:', editedRankings);
        setEditMode(false);
        setEditedRankings({});
    };

    const getRankChangeIcon = (currentWeek, prevWeek, keywordId) => {
        const currentRank = editedRankings[`${keywordId}-${currentWeek}`] !== undefined
            ? editedRankings[`${keywordId}-${currentWeek}`]
            : groupedRankings[keywordId].rankings[currentWeek];

        const prevRank = groupedRankings[keywordId].rankings[prevWeek];

        if (currentRank === '-' || prevRank === '-') return null;

        const curr = parseInt(currentRank);
        const prev = parseInt(prevRank);

        if (curr < prev) return <ArrowUp className="h-4 w-4 text-green-500 inline ml-1" />;
        if (curr > prev) return <ArrowDown className="h-4 w-4 text-red-500 inline ml-1" />;
        return <Minus className="h-4 w-4 text-muted-foreground inline ml-1" />;
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{getMonthName(month)} Rankings</h3>
                {editMode ? (
                    <Button onClick={handleSaveChanges}>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                    </Button>
                ) : (
                    <Button variant="outline" onClick={() => setEditMode(true)}>
                        Edit Rankings
                    </Button>
                )}
            </div>

            <div className="border rounded-lg overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="min-w-[150px]">Tasks</TableHead>
                            <TableHead className='text-center'>Count</TableHead>
                            {weekRanges.map((range, index) => (
                                <TableHead key={index} className="text-center min-w-[120px]">
                                    Week {index + 1}
                                    <div className="text-xs text-muted-foreground font-normal">
                                        {range.start} - {range.end}
                                    </div>
                                </TableHead>
                            ))}
                            <TableHead className='text-center'>Monthly Report</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Object.values(groupedRankings).map(({ keyword, rankings }) => (
                            <TableRow key={keyword.id}>
                                <TableCell className="font-medium">{keyword.text}</TableCell>
                                <TableCell className="font-medium text-center">{keyword.totalCount}</TableCell>
                                {weekRanges.map((_, weekIndex) => {
                                    const rankValue = editedRankings[`${keyword.id}-${weekIndex}`] !== undefined
                                        ? editedRankings[`${keyword.id}-${weekIndex}`]
                                        : rankings[weekIndex];

                                    return (
                                        <TableCell key={weekIndex} className="text-center">
                                            {editMode ? (
                                                <Input
                                                    type="text"
                                                    value={rankValue}
                                                    onChange={(e) => handleRankChange(keyword.id, weekIndex, e.target.value)}
                                                    className="h-8 w-16 text-center mx-auto"
                                                />
                                            ) : (
                                                <span className="font-medium">
                                                    {rankValue}
                                                    {weekIndex > 0 && getRankChangeIcon(weekIndex, weekIndex - 1, keyword.id)}
                                                </span>
                                            )}
                                        </TableCell>
                                    );
                                })}

                                <TableCell className="font-medium text-center">{keyword.monthlyReport}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}