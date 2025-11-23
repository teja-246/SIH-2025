import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { AlertCircle } from 'lucide-react';
import { alerts } from '../../data/mockData';

export function AlertsSection() {
    return (
        <Card className="border-l-4 border-l-orange-500 shadow-md bg-gradient-to-r from-orange-50/30 to-white">
            <CardHeader>
                <CardTitle className="text-base flex items-center gap-2 text-orange-900">
                    <div className="bg-orange-100 p-2 rounded-lg">
                        <AlertCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    System Alerts & Notifications
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {alerts.map((alert) => (
                        <div key={alert.id} className="flex items-start justify-between gap-4 p-3 rounded-lg bg-white border border-orange-200/50 hover:border-orange-300 transition-colors">
                            <div className="flex-1">
                                <p className="text-sm text-slate-700">{alert.message}</p>
                            </div>
                            <Badge variant={alert.priority === 'high' ? 'destructive' : alert.priority === 'medium' ? 'default' : 'secondary'} className={alert.priority === 'medium' ? 'bg-blue-600' : ''}>
                                {alert.priority}
                            </Badge>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
