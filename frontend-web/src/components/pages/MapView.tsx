import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { MapPin, Layers, Filter, ZoomIn, ZoomOut, Maximize2, Calendar, Users } from 'lucide-react';
import { Separator } from '../ui/separator';

const trainingLocations = [
  { id: 1, title: 'Flood Response Training', lat: 19.0760, lng: 72.8777, theme: 'Flood Management', participants: 45, date: '2025-09-15', status: 'completed', state: 'Maharashtra' },
  { id: 2, title: 'Fire Safety Workshop', lat: 12.9716, lng: 77.5946, theme: 'Fire Safety', participants: 32, date: '2025-09-20', status: 'completed', state: 'Karnataka' },
  { id: 3, title: 'Earthquake Drill', lat: 28.7041, lng: 77.1025, theme: 'Earthquake Response', participants: 56, date: '2025-10-05', status: 'ongoing', state: 'Delhi' },
  { id: 4, title: 'First Aid Certification', lat: 13.0827, lng: 80.2707, theme: 'First Aid', participants: 28, date: '2025-10-06', status: 'scheduled', state: 'Tamil Nadu' },
  { id: 5, title: 'Cyclone Response', lat: 19.8135, lng: 85.8312, theme: 'Cyclone Preparedness', participants: 38, date: '2025-10-12', status: 'scheduled', state: 'Odisha' },
  { id: 6, title: 'Community Awareness', lat: 25.5941, lng: 85.1376, theme: 'Flood Management', participants: 52, date: '2025-09-25', status: 'completed', state: 'Bihar' },
  { id: 7, title: 'Search & Rescue', lat: 30.3165, lng: 78.0322, theme: 'Earthquake Response', participants: 24, date: '2025-10-15', status: 'scheduled', state: 'Uttarakhand' },
  { id: 8, title: 'Industrial Fire Safety', lat: 23.0225, lng: 72.5714, theme: 'Fire Safety', participants: 41, date: '2025-09-28', status: 'completed', state: 'Gujarat' },
];

const themeColors: { [key: string]: string } = {
  'Flood Management': 'bg-blue-500',
  'Fire Safety': 'bg-red-500',
  'Earthquake Response': 'bg-orange-500',
  'First Aid': 'bg-green-500',
  'Cyclone Preparedness': 'bg-purple-500',
};

export default function MapView() {
  const [selectedLocation, setSelectedLocation] = useState<typeof trainingLocations[0] | null>(null);
  const [filterState, setFilterState] = useState('all');
  const [filterTheme, setFilterTheme] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [mapView, setMapView] = useState<'markers' | 'heatmap' | 'clusters'>('markers');

  const filteredLocations = trainingLocations.filter((location) => {
    const matchesState = filterState === 'all' || location.state === filterState;
    const matchesTheme = filterTheme === 'all' || location.theme === filterTheme;
    const matchesStatus = filterStatus === 'all' || location.status === filterStatus;
    return matchesState && matchesTheme && matchesStatus;
  });

  const states = Array.from(new Set(trainingLocations.map(l => l.state)));
  const themes = Array.from(new Set(trainingLocations.map(l => l.theme)));

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1>GIS Map View</h1>
          <p className="text-muted-foreground">
            Geospatial visualization of training coverage across India
          </p>
        </div>
        <div className="flex gap-2">
          <Select value={mapView} onValueChange={(value: any) => setMapView(value)}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="markers">Markers</SelectItem>
              <SelectItem value="heatmap">Heatmap</SelectItem>
              <SelectItem value="clusters">Clusters</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm">State</label>
                <Select value={filterState} onValueChange={setFilterState}>
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
                <Select value={filterTheme} onValueChange={setFilterTheme}>
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
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="bg-input-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setFilterState('all');
                  setFilterTheme('all');
                  setFilterStatus('all');
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Layers className="h-4 w-4" />
                Legend
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {Object.entries(themeColors).map(([theme, color]) => (
                <div key={theme} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full ${color}`} />
                  <span className="text-sm">{theme}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Coverage Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Total Locations</p>
                <p className="text-2xl">{filteredLocations.length}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">States Covered</p>
                <p className="text-2xl">{new Set(filteredLocations.map(l => l.state)).size}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">Total Participants</p>
                <p className="text-2xl">{filteredLocations.reduce((sum, l) => sum + l.participants, 0)}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Area */}
        <div className="lg:col-span-3 space-y-4">
          <Card>
            <CardContent className="p-0">
              {/* Map Container */}
              <div className="relative h-[600px] bg-muted rounded-lg overflow-hidden">
                {/* Map Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
                  <div className="text-center space-y-2">
                    <img src="../../../public/india.jpg" ></img>
                    {/* <p className="text-sm text-muted-foreground">Interactive Mapbox map would appear here</p>
                    <p className="text-xs text-muted-foreground">Showing {filteredLocations.length} training locations</p> */}
                  </div>
                </div>

                {/* Simulated Map Markers */}
                <div className="absolute inset-0 pointer-events-none">
                  {filteredLocations.map((location, index) => {
                    const top = 30 + (index * 10) % 60;
                    const left = 20 + (index * 15) % 70;
                    return (
                      <div
                        key={location.id}
                        className="absolute pointer-events-auto cursor-pointer"
                        style={{ top: `${top}%`, left: `${left}%` }}
                        onClick={() => setSelectedLocation(location)}
                      >
                        <div className={`w-6 h-6 rounded-full ${themeColors[location.theme]} border-2 border-white shadow-lg hover:scale-125 transition-transform`} />
                      </div>
                    );
                  })}
                </div>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Button size="icon" variant="secondary" className="shadow-lg">
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="shadow-lg">
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="shadow-lg">
                    <Layers className="h-4 w-4" />
                  </Button>
                </div>

                {/* Selected Location Popup */}
                {selectedLocation && (
                  <div className="absolute bottom-4 left-4 right-4 md:left-auto md:w-96">
                    <Card className="shadow-xl">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <CardTitle className="text-base">{selectedLocation.title}</CardTitle>
                            <Badge variant="outline" className="mt-1">{selectedLocation.theme}</Badge>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => setSelectedLocation(null)}
                          >
                            ×
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{selectedLocation.state}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{new Date(selectedLocation.date).toLocaleDateString('en-IN')}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{selectedLocation.participants} participants</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={
                              selectedLocation.status === 'completed' ? 'secondary' :
                              selectedLocation.status === 'ongoing' ? 'default' :
                              'outline'
                            }
                          >
                            {selectedLocation.status}
                          </Badge>
                        </div>
                        <Button className="w-full" size="sm">
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Location List */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Training Locations ({filteredLocations.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {filteredLocations.map((location) => (
                  <div
                    key={location.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer transition-colors"
                    onClick={() => setSelectedLocation(location)}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`w-3 h-3 rounded-full ${themeColors[location.theme]}`} />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{location.title}</p>
                        <p className="text-sm text-muted-foreground">{location.state} • {location.participants} participants</p>
                      </div>
                    </div>
                    <Badge
                      variant={
                        location.status === 'completed' ? 'secondary' :
                        location.status === 'ongoing' ? 'default' :
                        'outline'
                      }
                    >
                      {location.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
