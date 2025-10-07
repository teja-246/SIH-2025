import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Award,
  FileText,
  Download,
  Edit,
  Trash2,
  Building2,
  User
} from 'lucide-react';
import { toast } from 'sonner';

export default function TrainingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data
  const training = {
    id: id,
    title: 'Flood Response and Rescue Operations',
    theme: ['Flood Management', 'First Aid'],
    description: 'Comprehensive training program focusing on flood response strategies, rescue operations, and emergency medical care in flood-affected areas. Participants will learn practical skills for disaster response including water rescue techniques, community evacuation procedures, and flood risk assessment.',
    organizer: 'NDMA Mumbai Regional Office',
    trainer: 'Dr. Rajesh Kumar',
    trainerQualification: 'Senior Disaster Management Expert, 15 years experience',
    state: 'Maharashtra',
    district: 'Mumbai',
    address: 'NDMA Training Center, Bandra-Kurla Complex, Mumbai - 400051',
    coordinates: '19.0596, 72.8295',
    startDate: '2025-09-15',
    endDate: '2025-09-17',
    duration: 24,
    participants: 45,
    participantType: 'Mixed (Government Officers, Volunteers)',
    certificatesIssued: 42,
    status: 'completed',
    resources: 'Training manuals, Safety kits, Rescue equipment, First aid supplies',
    notes: 'Excellent participation and engagement. All participants successfully completed practical assessments. Recommend similar programs for coastal districts.',
    submittedBy: 'Amit Sharma',
    submittedDate: '2025-09-18',
    attachments: [
      { name: 'Training Report.pdf', size: '2.4 MB' },
      { name: 'Participant List.xlsx', size: '156 KB' },
      { name: 'Photo Gallery.zip', size: '45 MB' }
    ]
  };

  const handleDelete = () => {
    toast.success('Training deleted successfully');
    navigate('/trainings');
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="space-y-1">
          <Button variant="ghost" className="gap-2 -ml-2 mb-2" onClick={() => navigate('/trainings')}>
            <ArrowLeft className="h-4 w-4" />
            Back to Trainings
          </Button>
          <div className="flex flex-wrap items-center gap-2">
            <h1>{training.title}</h1>
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
          </div>
          <div className="flex flex-wrap gap-2">
            {training.theme.map((theme) => (
              <Badge key={theme} variant="outline">{theme}</Badge>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" className="gap-2">
            <Edit className="h-4 w-4" />
            Edit
          </Button>
          <Button variant="destructive" className="gap-2" onClick={handleDelete}>
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{training.description}</p>
            </CardContent>
          </Card>

          {/* Schedule & Location */}
          <Card>
            <CardHeader>
              <CardTitle>Schedule & Location</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Start Date</p>
                      <p>{new Date(training.startDate).toLocaleDateString('en-IN', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">End Date</p>
                      <p>{new Date(training.endDate).toLocaleDateString('en-IN', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p>{training.duration} hours</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p>{training.district}, {training.state}</p>
                      <p className="text-sm text-muted-foreground mt-1">{training.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Map */}
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center border">
                <div className="text-center space-y-2">
                  <MapPin className="h-8 w-8 mx-auto text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Interactive map view</p>
                  <p className="text-xs text-muted-foreground">Coordinates: {training.coordinates}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Participants & Outcomes */}
          <Card>
            <CardHeader>
              <CardTitle>Participants & Outcomes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Participants</p>
                    <p className="text-2xl">{training.participants}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Certificates Issued</p>
                    <p className="text-2xl">{training.certificatesIssued}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Completion Rate</p>
                    <p className="text-2xl">{Math.round((training.certificatesIssued / training.participants) * 100)}%</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-sm text-muted-foreground mb-1">Participant Type</p>
                <p>{training.participantType}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">Resources / Materials Used</p>
                <p>{training.resources}</p>
              </div>
            </CardContent>
          </Card>

          {/* Notes & Observations */}
          {training.notes && (
            <Card>
              <CardHeader>
                <CardTitle>Notes & Observations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{training.notes}</p>
              </CardContent>
            </Card>
          )}

          {/* Attachments */}
          <Card>
            <CardHeader>
              <CardTitle>Attachments & Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {training.attachments.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p>{file.name}</p>
                        <p className="text-sm text-muted-foreground">{file.size}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Organizer Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Organizer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Host Institution</p>
                  <p>{training.organizer}</p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-3">
                <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Trainer / Facilitator</p>
                  <p>{training.trainer}</p>
                  <p className="text-sm text-muted-foreground mt-1">{training.trainerQualification}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submission Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Submission Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Submitted By</p>
                <p>{training.submittedBy}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Submission Date</p>
                <p>{new Date(training.submittedDate).toLocaleDateString('en-IN')}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Training ID</p>
                <p className="font-mono text-sm">TRN-{training.id}</p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Download className="h-4 w-4" />
                Download Report
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Users className="h-4 w-4" />
                View Participants
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Award className="h-4 w-4" />
                View Certificates
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <MapPin className="h-4 w-4" />
                View on Map
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
