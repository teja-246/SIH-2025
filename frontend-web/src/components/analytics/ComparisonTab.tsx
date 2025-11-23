import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { stateComparison } from '../../data/mockData';

export function ComparisonTab() {
    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>State-wise Performance Comparison</CardTitle>
                    <CardDescription>Top states by training activity and coverage</CardDescription>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={stateComparison} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis dataKey="state" type="category" width={100} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="trainings" fill="#3b82f6" name="Trainings" />
                            <Bar dataKey="coverage" fill="#10b981" name="Coverage %" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            <div className="grid gap-4 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Participant Distribution</CardTitle>
                        <CardDescription>Total participants by state</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={stateComparison}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="state" angle={-45} textAnchor="end" height={80} />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="participants" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Top Performing States</CardTitle>
                        <CardDescription>Based on multiple metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {stateComparison.slice(0, 5).map((state, index) => (
                                <div key={state.state} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <p className="font-medium">{state.state}</p>
                                            <p className="text-sm text-muted-foreground">{state.trainings} trainings</p>
                                        </div>
                                    </div>
                                    <Badge variant={state.coverage >= 85 ? 'default' : 'secondary'}>
                                        {state.coverage}% coverage
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
