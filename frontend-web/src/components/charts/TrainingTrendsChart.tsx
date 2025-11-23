import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area } from 'recharts';
import { trainingsByMonth } from '../../data/mockData';

export function TrainingTrendsChart() {
    return (
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
    );
}
