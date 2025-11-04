import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
} from 'recharts';
import { Download, TrendingUp, TrendingDown, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const monthlyTrends = [
  { month: 'Jan', trainings: 38, participants: 1050, certificates: 920, targetCompletion: 85 },
  { month: 'Feb', trainings: 42, participants: 1180, certificates: 1020, targetCompletion: 88 },
  { month: 'Mar', trainings: 45, participants: 1250, certificates: 1100, targetCompletion: 90 },
  { month: 'Apr', trainings: 48, participants: 1320, certificates: 1180, targetCompletion: 92 },
  { month: 'May', trainings: 52, participants: 1450, certificates: 1280, targetCompletion: 94 },
  { month: 'Jun', trainings: 48, participants: 1360, certificates: 1200, targetCompletion: 91 },
  { month: 'Jul', trainings: 61, participants: 1680, certificates: 1520, targetCompletion: 96 },
  { month: 'Aug', trainings: 55, participants: 1520, certificates: 1350, targetCompletion: 93 },
  { month: 'Sep', trainings: 67, participants: 1890, certificates: 1680, targetCompletion: 97 },
];

const stateComparison = [
  { state: 'Maharashtra', trainings: 145, participants: 4250, coverage: 92 },
  { state: 'Karnataka', trainings: 132, participants: 3890, coverage: 88 },
  { state: 'Tamil Nadu', trainings: 128, participants: 3650, coverage: 85 },
  { state: 'Gujarat', trainings: 115, participants: 3420, coverage: 82 },
  { state: 'Rajasthan', trainings: 108, participants: 3180, coverage: 78 },
  { state: 'UP', trainings: 98, participants: 2850, coverage: 72 },
  { state: 'West Bengal', trainings: 95, participants: 2720, coverage: 70 },
  { state: 'Delhi', trainings: 87, participants: 2580, coverage: 68 },
];

const themeEffectiveness = [
  { theme: 'Flood Mgmt', satisfaction: 4.5, completion: 93, impact: 88 },
  { theme: 'Fire Safety', satisfaction: 4.3, completion: 91, impact: 85 },
  { theme: 'Earthquake', satisfaction: 4.2, completion: 89, impact: 82 },
  { theme: 'First Aid', satisfaction: 4.6, completion: 95, impact: 92 },
  { theme: 'Cyclone', satisfaction: 4.1, completion: 87, impact: 80 },
];

const institutionTypes = [
  { name: 'SDMA', value: 245, color: '#3b82f6' },
  { name: 'ATI', value: 189, color: '#10b981' },
  { name: 'NGO', value: 156, color: '#f59e0b' },
  { name: 'NIDM', value: 98, color: '#8b5cf6' },
  { name: 'Others', value: 76, color: '#6b7280' },
];

const gapAnalysis = [
  { region: 'North-East', gap: 'High', trainings: 24, targetGap: -45, priority: 'Critical' },
  { region: 'J&K', gap: 'Medium', trainings: 38, targetGap: -22, priority: 'High' },
  { region: 'Central India', gap: 'Low', trainings: 92, targetGap: -8, priority: 'Medium' },
  { region: 'South India', gap: 'None', trainings: 145, targetGap: 5, priority: 'Low' },
  { region: 'West India', gap: 'Low', trainings: 112, targetGap: -12, priority: 'Medium' },
];

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('9months');
  // const [selectedMetric, setSelectedMetric] = useState('trainings');

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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Avg. Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <div className="text-2xl">92.3%</div>
              <div className="flex items-center gap-1 text-sm text-green-600">
                <TrendingUp className="h-3 w-3" />
                +3.2%
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Above target by 2.3%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Participant Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <div className="text-2xl">4.4/5.0</div>
              <div className="flex items-center gap-1 text-sm text-green-600">
                <TrendingUp className="h-3 w-3" />
                +0.2
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Based on 12,450 reviews</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Coverage Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <div className="text-2xl">+18%</div>
              <div className="flex items-center gap-1 text-sm text-green-600">
                <TrendingUp className="h-3 w-3" />
                YoY
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">624 new districts covered</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Budget Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <div className="text-2xl">87%</div>
              <div className="flex items-center gap-1 text-sm text-orange-600">
                <TrendingDown className="h-3 w-3" />
                -2%
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">₹13Cr remaining</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Analytics Tabs */}
      <Tabs defaultValue="trends" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="comparison">Comparison</TabsTrigger>
          <TabsTrigger value="effectiveness">Effectiveness</TabsTrigger>
          <TabsTrigger value="gaps">Gap Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Training & Participation Trends</CardTitle>
              <CardDescription>Monthly progression of training programs and participant engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="trainings" fill="#3b82f6" name="Trainings" />
                  <Line yAxisId="right" type="monotone" dataKey="participants" stroke="#10b981" strokeWidth={2} name="Participants" />
                  <Line yAxisId="right" type="monotone" dataKey="certificates" stroke="#f59e0b" strokeWidth={2} name="Certificates" />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Target Completion Rate</CardTitle>
                <CardDescription>Monthly achievement vs. target</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[80, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="targetCompletion" stroke="#8b5cf6" strokeWidth={2} name="Completion %" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Training by Institution Type</CardTitle>
                <CardDescription>Distribution across partner organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={institutionTypes}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      // label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      // may uncomment later -- type percent was undefined
                      outerRadius={90}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {institutionTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>State-wise Performance Comparison</CardTitle>
              <CardDescription>Top states by training activity and coverage</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={stateComparison} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="state" type="category" width={100} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="trainings" fill="#3b82f6" name="Trainings" />
                  <Bar dataKey="coverage" fill="#10b981" name="Coverage %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Participant Distribution</CardTitle>
                <CardDescription>Total participants by state</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={stateComparison}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="state" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="participants" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Performing States</CardTitle>
                <CardDescription>Based on multiple metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {stateComparison.slice(0, 5).map((state, index) => (
                    <div key={state.state} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{state.state}</p>
                          <p className="text-sm text-muted-foreground">{state.trainings} trainings</p>
                        </div>
                      </div>
                      <Badge variant={state.coverage >= 85 ? 'default' : 'secondary'}>
                        {state.coverage}% coverage
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="effectiveness" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Theme Effectiveness Analysis</CardTitle>
              <CardDescription>Satisfaction, completion, and impact scores by training theme</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={themeEffectiveness}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="theme" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Satisfaction" dataKey="satisfaction" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
                  <Radar name="Completion" dataKey="completion" stroke="#10b981" fill="#10b981" fillOpacity={0.5} />
                  <Radar name="Impact" dataKey="impact" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.5} />
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Completion Rates by Theme</CardTitle>
                <CardDescription>Certificate issuance ratio</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={themeEffectiveness}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="theme" />
                    <YAxis domain={[80, 100]} />
                    <Tooltip />
                    <Bar dataKey="completion" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quality Metrics</CardTitle>
                <CardDescription>Detailed effectiveness breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {themeEffectiveness.map((theme) => (
                    <div key={theme.theme} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{theme.theme}</span>
                        <span className="text-sm">{theme.satisfaction}/5.0</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${(theme.satisfaction / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="gaps" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Regional Coverage Gap Analysis</CardTitle>
              <CardDescription>Identify underserved regions and priority areas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {gapAnalysis.map((gap) => (
                  <div key={gap.region} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <h4>{gap.region}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {gap.trainings} trainings completed • {Math.abs(gap.targetGap)} {gap.targetGap < 0 ? 'below' : 'above'} target
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Badge
                          variant={
                            gap.gap === 'High' ? 'destructive' :
                            gap.gap === 'Medium' ? 'default' :
                            gap.gap === 'Low' ? 'secondary' :
                            'outline'
                          }
                        >
                          {gap.gap} Gap
                        </Badge>
                        <Badge variant={
                          gap.priority === 'Critical' ? 'destructive' :
                          gap.priority === 'High' ? 'default' :
                          'secondary'
                        }>
                          {gap.priority} Priority
                        </Badge>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${
                          gap.gap === 'None' ? 'bg-green-500' :
                          gap.gap === 'Low' ? 'bg-blue-500' :
                          gap.gap === 'Medium' ? 'bg-orange-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${((gap.trainings / (gap.trainings - gap.targetGap)) * 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                AI-Powered Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Increase North-East Coverage</p>
                    <p className="text-sm text-muted-foreground">Schedule 45 additional trainings in Assam, Meghalaya, and Manipur to meet Q4 targets</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Replicate First Aid Success</p>
                    <p className="text-sm text-muted-foreground">Apply First Aid training model (95% completion rate) to other themes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Strengthen J&K Programs</p>
                    <p className="text-sm text-muted-foreground">Deploy 3 additional trainers and partner with local NGOs to close the 22-training gap</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
