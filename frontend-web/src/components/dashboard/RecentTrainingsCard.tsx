import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { recentTrainings } from '../../data/mockData';

export function RecentTrainingsCard() {
    return (
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
    );
}
