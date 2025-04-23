"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import RankingTable from '@/components/tracking/RankingTable';
import { getWeeksInMonth, getMonthName } from '@/lib/date-utils';
import { mockKeywords, mockRankings } from '@/lib/mock-data';
import DashboardLayout from '@/components/layout/dashboard-layout';

export default function TrackingPage() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth().toString());
  const [selectedFilters, setSelectedFilters] = useState({
    keyword: 'all',
    assignee: 'all'
  });
  const [weekRanges, setWeekRanges] = useState([]);

  // Generate week ranges based on selected month
  useEffect(() => {
    const month = parseInt(selectedMonth);
    const year = new Date().getFullYear();
    const ranges = getWeeksInMonth(year, month);
    setWeekRanges(ranges);
  }, [selectedMonth]);

  const filteredRankings = mockRankings.filter(ranking => {
    // Filter by month
    if (ranking.month.toString() !== selectedMonth) return false;

    // Filter by keyword if not "all"
    if (selectedFilters.keyword !== 'all') {
      const keywordMatch = mockKeywords.find(k => k.id === selectedFilters.keyword);
      if (!keywordMatch || ranking.keywordId !== keywordMatch.id) return false;
    }

    // Filter by assignee if not "all"
    if (selectedFilters.assignee !== 'all') {
      const keywordMatch = mockKeywords.find(k => k.id === ranking.keywordId);
      if (!keywordMatch || keywordMatch.assignedTo !== selectedFilters.assignee) return false;
    }

    return true;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Monthly Keyword Tracking</h1>
            <p className="text-muted-foreground">Track your keyword rankings week by week</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Select
              value={selectedFilters.keyword}
              onValueChange={(value) => setSelectedFilters({ ...selectedFilters, keyword: value })}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by keyword" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Keywords</SelectItem>
                {mockKeywords.map(keyword => (
                  <SelectItem key={keyword.id} value={keyword.id}>
                    {keyword.text}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedFilters.assignee}
              onValueChange={(value) => setSelectedFilters({ ...selectedFilters, assignee: value })}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by team member" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Team Members</SelectItem>
                <SelectItem value="john">John Smith</SelectItem>
                <SelectItem value="sarah">Sarah Johnson</SelectItem>
                <SelectItem value="mike">Mike Brown</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Keyword Rankings</CardTitle>
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
            <CardDescription>
              View and track your keyword rankings week by week.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedMonth} onValueChange={setSelectedMonth}>
              <TabsList className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12">
                {Array.from({ length: 12 }, (_, i) => (
                  <TabsTrigger key={i} value={i.toString()}>
                    {getMonthName(i).substring(0, 3)}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Array.from({ length: 12 }, (_, month) => (
                <TabsContent key={month} value={month.toString()}>
                  <RankingTable
                    weekRanges={weekRanges}
                    rankings={filteredRankings}
                    keywords={mockKeywords}
                    month={month}
                  />
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}