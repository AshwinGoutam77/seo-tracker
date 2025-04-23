"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Download, FileText, BarChart3 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getMonthName } from '@/lib/date-utils';
import { mockKeywords, mockRankings } from '@/lib/mock-data';
import PerformanceChart from '@/components/reports/PerformanceChart';
import SummaryTable from '@/components/reports/SummaryTable';
import CategoryDistribution from '@/components/reports/CategoryDistribution';
import DashboardLayout from '@/components/layout/dashboard-layout';

export default function ReportsPage() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth().toString());
  const [selectedReport, setSelectedReport] = useState("summary");
  const currentYear = new Date().getFullYear();

  // Filter rankings by selected month
  const monthRankings = mockRankings.filter(
    ranking => ranking.month.toString() === selectedMonth
  );

  // Get previous month for comparison
  const prevMonth = (parseInt(selectedMonth) - 1 + 12) % 12;
  const prevMonthRankings = mockRankings.filter(
    ranking => ranking.month === prevMonth
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Monthly Reports</h1>
            <p className="text-muted-foreground">View and export keyword performance reports</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Select value={selectedReport} onValueChange={setSelectedReport}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="summary">Summary Report</SelectItem>
                <SelectItem value="performance">Performance Report</SelectItem>
                <SelectItem value="distribution">Category Distribution</SelectItem>
              </SelectContent>
            </Select>

            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
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

          {Array.from({ length: 12 }, (_, month) => (
            <TabsContent key={month} value={month.toString()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Report Overview</CardTitle>
                    <CardDescription>
                      {getMonthName(month)} {currentYear} report statistics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Total Keywords</p>
                        <p className="text-2xl font-bold">{mockKeywords.length}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Improved Rankings</p>
                        <p className="text-2xl font-bold text-green-500">
                          {mockKeywords.length > 0 ? Math.floor(mockKeywords.length * 0.65) : 0}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Declined Rankings</p>
                        <p className="text-2xl font-bold text-red-500">
                          {mockKeywords.length > 0 ? Math.floor(mockKeywords.length * 0.20) : 0}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Top 10 Positions</p>
                        <p className="text-2xl font-bold text-blue-500">
                          {mockKeywords.length > 0 ? Math.floor(mockKeywords.length * 0.35) : 0}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      Download Detailed Report
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Month-over-Month Comparison</CardTitle>
                    <CardDescription>
                      Comparing {getMonthName(prevMonth)} to {getMonthName(month)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="h-[220px]">
                      <PerformanceChart month={month} prevMonth={prevMonth} />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                {selectedReport === "summary" && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Summary Report</CardTitle>
                      <CardDescription>
                        Overall keyword performance for {getMonthName(month)} {currentYear}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <SummaryTable month={month} keywords={mockKeywords} rankings={mockRankings} />
                    </CardContent>
                  </Card>
                )}

                {selectedReport === "performance" && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Report</CardTitle>
                      <CardDescription>
                        Detailed performance metrics for {getMonthName(month)} {currentYear}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[400px]">
                        <PerformanceChart month={month} prevMonth={prevMonth} fullSize />
                      </div>
                    </CardContent>
                  </Card>
                )}

                {selectedReport === "distribution" && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Category Distribution</CardTitle>
                      <CardDescription>
                        Keyword distribution by category for {getMonthName(month)} {currentYear}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[400px]">
                        <CategoryDistribution keywords={mockKeywords} />
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </DashboardLayout>
  );
}