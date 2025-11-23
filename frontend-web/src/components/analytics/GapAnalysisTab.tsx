import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { gapAnalysis } from '../../data/mockData';

export function GapAnalysisTab() {
    return (
        <div className="space-y-4">
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
                                        className={`h-3 rounded-full ${gap.gap === 'None' ? 'bg-green-500' :
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
        </div>
    );
}
