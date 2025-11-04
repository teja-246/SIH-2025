import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Users,
  GraduationCap,
  Award,
  TrendingUp,
  MapPin,
  Calendar,
  AlertCircle,
  Plus,
  ArrowUpRight,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';

interface DashboardProps {
  userRole: 'admin' | 'state-officer' | 'trainer' | 'viewer';
}

// Mock data
// bottom left training trends graph 
const trainingsByMonth = [
  { month: 'Apr', trainings: 45, participants: 1200 },
  { month: 'May', trainings: 52, participants: 1450 },
  { month: 'Jun', trainings: 48, participants: 1320 },
  { month: 'Jul', trainings: 61, participants: 1680 },
  { month: 'Aug', trainings: 55, participants: 1520 },
  { month: 'Sep', trainings: 67, participants: 1890 },
  { month: 'Oct', trainings: 58, participants: 1650 },
];

// bottom right pie chart
const trainingsByTheme = [
  { name: 'Flood Management', value: 145, color: '#1e40af' },
  { name: 'Fire Safety', value: 98, color: '#f97316' },
  { name: 'Earthquake Response', value: 87, color: '#fb923c' },
  { name: 'First Aid', value: 112, color: '#3b82f6' },
  { name: 'Cyclone Preparedness', value: 76, color: '#ea580c' },
];

// Top States by Training Coverage graph 
const trainingsByState = [
  { state: 'Maharashtra', count: 67 },
  { state: 'Karnataka', count: 54 },
  { state: 'Tamil Nadu', count: 48 },
  { state: 'Gujarat', count: 45 },
  { state: 'Rajasthan', count: 42 },
  { state: 'UP', count: 38 },
];

// dummy trainings 
const recentTrainings = [
  { id: 1, title: 'Flood Response Training', location: 'Mumbai, Maharashtra', date: '2025-10-03', participants: 45, status: 'completed' },
  { id: 2, title: 'Fire Safety Workshop', location: 'Bangalore, Karnataka', date: '2025-10-04', participants: 32, status: 'completed' },
  { id: 3, title: 'Earthquake Drill', location: 'Delhi, NCR', date: '2025-10-05', participants: 56, status: 'ongoing' },
  { id: 4, title: 'First Aid Certification', location: 'Chennai, Tamil Nadu', date: '2025-10-06', participants: 28, status: 'scheduled' },
];

const alerts = [
  { id: 1, type: 'warning', message: 'Low training coverage detected in North-East regions', priority: 'high' },
  { id: 2, type: 'info', message: '15 pending training reports require approval', priority: 'medium' },
  { id: 3, type: 'success', message: 'Q3 2025 target achieved: 500+ trainings completed', priority: 'low' },
];

export default function Dashboard({ userRole }: DashboardProps) {
  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-blue-900">Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time overview of disaster management training programs
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 border-blue-300 hover:bg-blue-50 hover:text-blue-900">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          {(userRole === 'admin' || userRole === 'state-officer' || userRole === 'trainer') && (
            <Link to="/trainings/new">
              <Button className="gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                <Plus className="h-4 w-4" />
                Add Training
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-blue-600 shadow-md hover:shadow-lg transition-shadow bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm text-blue-900">Total Trainings</CardTitle>
            <div className="bg-blue-100 p-2 rounded-lg">
              <GraduationCap className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-blue-900">1,248</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-green-600">+12.5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-600 shadow-md hover:shadow-lg transition-shadow bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm text-orange-900">Total Participants</CardTitle>
            <div className="bg-orange-100 p-2 rounded-lg">
              <Users className="h-4 w-4 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-orange-900">34,567</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-green-600">+8.2%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 shadow-md hover:shadow-lg transition-shadow bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm text-blue-900">Certificates Issued</CardTitle>
            <div className="bg-blue-100 p-2 rounded-lg">
              <Award className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-blue-900">28,943</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-green-600">+15.3%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500 shadow-md hover:shadow-lg transition-shadow bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm text-orange-900">Active Institutions</CardTitle>
            <div className="bg-orange-100 p-2 rounded-lg">
              <MapPin className="h-4 w-4 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-orange-900">156</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-green-600">+5</span> new this month
            </p>
          </CardContent>
        </Card>
      </div>

      

      {/* Charts Row 1 */}
      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="lg:col-span-4 shadow-md bg-white">
          <CardHeader>
            <CardTitle className="text-blue-900">Training Trends</CardTitle>
            <CardDescription>Monthly training sessions and participant engagement</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={trainingsByMonth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis yAxisId="left" stroke="#64748b" />
                <YAxis yAxisId="right" orientation="right" stroke="#64748b" />
                <Tooltip />
                <Legend />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="trainings"
                  stroke="#1e40af"
                  fill="#3b82f6"
                  fillOpacity={0.6}
                  name="Trainings"
                />
                <Area
                  yAxisId="right"
                  type="monotone"
                  dataKey="participants"
                  stroke="#ea580c"
                  fill="#f97316"
                  fillOpacity={0.6}
                  name="Participants"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 shadow-md bg-white">
          <CardHeader>
            <CardTitle className="text-blue-900">Training by Theme</CardTitle>
            <CardDescription>Distribution across disaster categories</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={trainingsByTheme}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  // label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  // may uncomment later -- type percent was undefined
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {trainingsByTheme.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      

        <Card className="shadow-md bg-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-blue-900">Recent Trainings</CardTitle>
              <CardDescription>Latest training activities</CardDescription>
            </div>
            <Link to="/trainings">
              <Button variant="ghost" size="sm" className="gap-1 text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTrainings.map((training) => (
                <div key={training.id} className="flex items-start justify-between gap-4 pb-4 border-b last:border-0 last:pb-0">
                  <div className="flex-1 min-w-0">
                    <Link to={`/trainings/${training.id}`}>
                      <p className="font-medium hover:text-blue-600 cursor-pointer truncate">
                        {training.title}
                      </p>
                    </Link>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      {training.location}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(training.date).toLocaleDateString('en-IN')} • {training.participants} participants
                    </p>
                  </div>
                  <Badge
                    variant={
                      training.status === 'completed' ? 'secondary' :
                      training.status === 'ongoing' ? 'default' :
                      'outline'
                    }
                    className={
                      training.status === 'ongoing' ? 'bg-blue-600' :
                      training.status === 'scheduled' ? 'border-orange-500 text-orange-700' : ''
                    }
                  >
                    {training.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      
    </div>
  );
}
