import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Search, Filter, Plus, MapPin, Calendar, Users, Download, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TrainingListProps {
  userRole: 'admin' | 'state-officer' | 'trainer' | 'viewer';
}

const mockTrainings = [
  {
    id: 1,
    title: 'Flood Response and Rescue Operations',
    theme: 'Flood Management',
    organizer: 'NDMA Mumbai',
    state: 'Maharashtra',
    district: 'Mumbai',
    startDate: '2025-09-15',
    endDate: '2025-09-17',
    participants: 45,
    status: 'completed',
    trainer: 'Dr. Rajesh Kumar'
  },
  {
    id: 2,
    title: 'Fire Safety and Prevention Workshop',
    theme: 'Fire Safety',
    organizer: 'Karnataka SDMA',
    state: 'Karnataka',
    district: 'Bangalore',
    startDate: '2025-09-20',
    endDate: '2025-09-21',
    participants: 32,
    status: 'completed',
    trainer: 'Arjun Mehta'
  },
  {
    id: 3,
    title: 'Earthquake Preparedness Drill',
    theme: 'Earthquake Response',
    organizer: 'Delhi DDMA',
    state: 'Delhi',
    district: 'New Delhi',
    startDate: '2025-10-05',
    endDate: '2025-10-05',
    participants: 56,
    status: 'ongoing',
    trainer: 'Priya Sharma'
  },
  {
    id: 4,
    title: 'Advanced First Aid Certification',
    theme: 'First Aid',
    organizer: 'Tamil Nadu ATI',
    state: 'Tamil Nadu',
    district: 'Chennai',
    startDate: '2025-10-08',
    endDate: '2025-10-10',
    participants: 28,
    status: 'scheduled',
    trainer: 'Suresh Iyer'
  },
  {
    id: 5,
    title: 'Cyclone Response Training',
    theme: 'Cyclone Preparedness',
    organizer: 'Odisha SDMA',
    state: 'Odisha',
    district: 'Puri',
    startDate: '2025-10-12',
    endDate: '2025-10-14',
    participants: 38,
    status: 'scheduled',
    trainer: 'Anil Patra'
  },
  {
    id: 6,
    title: 'Community Disaster Awareness',
    theme: 'Flood Management',
    organizer: 'Bihar SDMA',
    state: 'Bihar',
    district: 'Patna',
    startDate: '2025-09-25',
    endDate: '2025-09-26',
    participants: 52,
    status: 'completed',
    trainer: 'Kavita Singh'
  },
  {
    id: 7,
    title: 'Search and Rescue Operations',
    theme: 'Earthquake Response',
    organizer: 'Uttarakhand SDMA',
    state: 'Uttarakhand',
    district: 'Dehradun',
    startDate: '2025-10-15',
    endDate: '2025-10-17',
    participants: 24,
    status: 'scheduled',
    trainer: 'Vikram Negi'
  },
  {
    id: 8,
    title: 'Industrial Fire Safety Training',
    theme: 'Fire Safety',
    organizer: 'Gujarat SDMA',
    state: 'Gujarat',
    district: 'Ahmedabad',
    startDate: '2025-09-28',
    endDate: '2025-09-29',
    participants: 41,
    status: 'completed',
    trainer: 'Manish Patel'
  },
];

export default function TrainingList({ userRole }: TrainingListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [stateFilter, setStateFilter] = useState('all');
  const [themeFilter, setThemeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredTrainings = mockTrainings.filter((training) => {
    const matchesSearch = training.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         training.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = stateFilter === 'all' || training.state === stateFilter;
    const matchesTheme = themeFilter === 'all' || training.theme === themeFilter;
    const matchesStatus = statusFilter === 'all' || training.status === statusFilter;
    
    return matchesSearch && matchesState && matchesTheme && matchesStatus;
  });

  const states = Array.from(new Set(mockTrainings.map(t => t.state)));
  const themes = Array.from(new Set(mockTrainings.map(t => t.theme)));

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1>Training Programs</h1>
          <p className="text-muted-foreground">
            Manage and monitor all disaster management training sessions
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          {(userRole === 'admin' || userRole === 'state-officer' || userRole === 'trainer') && (
            <Link to="/trainings/new">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add Training
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search trainings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 bg-input-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm">State</label>
              <Select value={stateFilter} onValueChange={setStateFilter}>
                <SelectTrigger className="bg-input-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Theme</label>
              <Select value={themeFilter} onValueChange={setThemeFilter}>
                <SelectTrigger className="bg-input-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Themes</SelectItem>
                  {themes.map((theme) => (
                    <SelectItem key={theme} value={theme}>{theme}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Status</label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="bg-input-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredTrainings.length} of {mockTrainings.length} trainings
        </p>
      </div>

      {/* Training Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Training Program</TableHead>
                  <TableHead>Theme</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Schedule</TableHead>
                  <TableHead>Participants</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTrainings.map((training) => (
                  <TableRow key={training.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{training.title}</p>
                        <p className="text-sm text-muted-foreground">{training.organizer}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{training.theme}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-start gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="text-sm">{training.district}</p>
                          <p className="text-xs text-muted-foreground">{training.state}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-start gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="text-sm">{new Date(training.startDate).toLocaleDateString('en-IN')}</p>
                          <p className="text-xs text-muted-foreground">
                            to {new Date(training.endDate).toLocaleDateString('en-IN')}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{training.participants}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          training.status === 'completed' ? 'secondary' :
                          training.status === 'ongoing' ? 'default' :
                          training.status === 'cancelled' ? 'destructive' :
                          'outline'
                        }
                      >
                        {training.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Link to={`/trainings/${training.id}`}>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Eye className="h-4 w-4" />
                          View
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
