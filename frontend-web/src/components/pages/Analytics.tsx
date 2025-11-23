import { useState } from 'react';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Download } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { KeyInsights } from '../analytics/KeyInsights';
import { TrendsTab } from '../analytics/TrendsTab';
import { ComparisonTab } from '../analytics/ComparisonTab';
import { EffectivenessTab } from '../analytics/EffectivenessTab';
import { GapAnalysisTab } from '../analytics/GapAnalysisTab';

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('9months');

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1>Analytics & Reports</h1>
          <p className="text-muted-foreground">
            Comprehensive insights and data-driven recommendations
          </p>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="9months">Last 9 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Insights */}
      <KeyInsights />

      {/* Main Analytics Tabs */}
      <Tabs defaultValue="trends" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="comparison">Comparison</TabsTrigger>
          <TabsTrigger value="effectiveness">Effectiveness</TabsTrigger>
          <TabsTrigger value="gaps">Gap Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="space-y-4">
          <TrendsTab />
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4">
          <ComparisonTab />
        </TabsContent>

        <TabsContent value="effectiveness" className="space-y-4">
          <EffectivenessTab />
        </TabsContent>

        <TabsContent value="gaps" className="space-y-4">
          <GapAnalysisTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
