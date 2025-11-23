import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ResponsiveContainer, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line, LineChart, PieChart, Pie, Cell } from 'recharts';
import { monthlyTrends, institutionTypes } from '../../data/mockData';

export function TrendsTab() {
    return (
        <div className="space-y-4">
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
        </div>
    );
}
