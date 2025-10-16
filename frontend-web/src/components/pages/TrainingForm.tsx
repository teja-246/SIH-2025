import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar as CalendarIcon, MapPin, Upload, Save, X } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { Badge } from '../ui/badge';

export default function TrainingForm() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [attachments, setAttachments] = useState<File[]>([]);

  const themes = [
    'Flood Management',
    'Fire Safety',
    'Earthquake Response',
    'First Aid',
    'Cyclone Preparedness',
    'Landslide Management',
    'Drought Management',
    'Urban Disaster Management'
  ];

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
    'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal'
  ];

  const handleAddTheme = (theme: string) => {
    if (!selectedThemes.includes(theme)) {
      setSelectedThemes([...selectedThemes, theme]);
    }
  };

  const handleRemoveTheme = (theme: string) => {
    setSelectedThemes(selectedThemes.filter(t => t !== theme));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments([...attachments, ...Array.from(e.target.files)]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // may uncomment later -- type was undefined
    
    // Mock submission
    toast.success('Training program created successfully!');
    setTimeout(() => {
      navigate('/trainings');
    }, 1000);
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1>Add New Training</h1>
          <p className="text-muted-foreground">
            Create a new disaster management training program
          </p>
        </div>
        <Button variant="outline" onClick={() => navigate('/trainings')}>
          Cancel
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Training Details */}
        <Card>
          <CardHeader>
            <CardTitle>Training Details</CardTitle>
            <CardDescription>Basic information about the training program</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="title">Training Title *</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g., Flood Response and Rescue Operations"
                  required
                  className="bg-input-background"
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label>Theme / Category *</Label>
                <Select onValueChange={handleAddTheme}>
                  <SelectTrigger className="bg-input-background">
                    <SelectValue placeholder="Select theme(s)" />
                  </SelectTrigger>
                  <SelectContent>
                    {themes.map((theme) => (
                      <SelectItem key={theme} value={theme} disabled={selectedThemes.includes(theme)}>
                        {theme}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedThemes.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedThemes.map((theme) => (
                      <Badge key={theme} variant="secondary" className="gap-1">
                        {theme}
                        <X
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => handleRemoveTheme(theme)}
                        />
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="description">Description / Objective</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Brief overview of the training purpose and objectives..."
                  rows={4}
                  className="bg-input-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="organizer">Host Institution *</Label>
                <Input
                  id="organizer"
                  name="organizer"
                  placeholder="e.g., NDMA Mumbai"
                  required
                  className="bg-input-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="trainer">Trainer / Facilitator Name *</Label>
                <Input
                  id="trainer"
                  name="trainer"
                  placeholder="e.g., Dr. Rajesh Kumar"
                  required
                  className="bg-input-background"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Schedule</CardTitle>
            <CardDescription>Training dates and duration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label>Start Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left bg-input-background"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, 'PPP') : 'Pick a date'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label>End Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left bg-input-background"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, 'PPP') : 'Pick a date'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration (hours)</Label>
                <Input
                  id="duration"
                  name="duration"
                  type="number"
                  placeholder="e.g., 24"
                  className="bg-input-background"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location */}
        <Card>
          <CardHeader>
            <CardTitle>Location</CardTitle>
            <CardDescription>Training venue details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Select name="state" required>
                  <SelectTrigger className="bg-input-background">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="district">District / City *</Label>
                <Input
                  id="district"
                  name="district"
                  placeholder="e.g., Mumbai"
                  required
                  className="bg-input-background"
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="address">Exact Address / Venue</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Full venue address"
                  className="bg-input-background"
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label>Map Location (Click to select)</Label>
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed">
                  <div className="text-center space-y-2">
                    <MapPin className="h-8 w-8 mx-auto text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Interactive map would appear here</p>
                    <p className="text-xs text-muted-foreground">Click to select training location</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Participants */}
        <Card>
          <CardHeader>
            <CardTitle>Participants</CardTitle>
            <CardDescription>Expected participant information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="participantCount">Number of Participants *</Label>
                <Input
                  id="participantCount"
                  name="participantCount"
                  type="number"
                  placeholder="e.g., 50"
                  required
                  className="bg-input-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="participantType">Participant Type</Label>
                <Select name="participantType">
                  <SelectTrigger className="bg-input-background">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="government">Government Officer</SelectItem>
                    <SelectItem value="volunteer">Volunteer</SelectItem>
                    <SelectItem value="ngo">NGO Staff</SelectItem>
                    <SelectItem value="community">Community Member</SelectItem>
                    <SelectItem value="mixed">Mixed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="participantList">Participant List (Optional)</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="participantList"
                    type="file"
                    accept=".csv,.xlsx,.xls"
                    className="bg-input-background"
                  />
                  <Button type="button" variant="outline" size="icon">
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Upload CSV or Excel file with participant details</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status & Materials */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
            <CardDescription>Status, resources, and materials</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="status">Training Status *</Label>
                <Select name="status" defaultValue="scheduled" required>
                  <SelectTrigger className="bg-input-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="certificates">Certificates to be Issued</Label>
                <Input
                  id="certificates"
                  name="certificates"
                  type="number"
                  placeholder="e.g., 50"
                  className="bg-input-background"
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="resources">Resources / Materials Used</Label>
                <Input
                  id="resources"
                  name="resources"
                  placeholder="e.g., Training manuals, Safety kits, Presentation slides"
                  className="bg-input-background"
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label>Attachments / Documents</Label>
                <div className="space-y-2">
                  <Input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="bg-input-background"
                  />
                  {attachments.length > 0 && (
                    <div className="space-y-1">
                      {attachments.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted rounded text-sm">
                          <span className="truncate">{file.name}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => setAttachments(attachments.filter((_, i) => i !== index))}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="notes">Notes / Observations</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Any special remarks, challenges, or observations..."
                  rows={3}
                  className="bg-input-background"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit */}
        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={() => navigate('/trainings')}>
            Cancel
          </Button>
          <Button type="submit" className="gap-2">
            <Save className="h-4 w-4" />
            Create Training
          </Button>
        </div>
      </form>
    </div>
  );
}
