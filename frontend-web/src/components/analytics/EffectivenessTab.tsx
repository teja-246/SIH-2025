import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip, BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts';
import { themeEffectiveness } from '../../data/mockData';

export function EffectivenessTab() {
    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Theme Effectiveness Analysis</CardTitle>
                    <CardDescription>Satisfaction, completion, and impact scores by training theme</CardDescription>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={themeEffectiveness}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="theme" />
                            <PolarRadiusAxis angle={90} domain={[0, 100]} />
                            <Radar name="Satisfaction" dataKey="satisfaction" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
                            <Radar name="Completion" dataKey="completion" stroke="#10b981" fill="#10b981" fillOpacity={0.5} />
                            <Radar name="Impact" dataKey="impact" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.5} />
                            <Legend />
                            <Tooltip />
                        </RadarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            <div className="grid gap-4 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Completion Rates by Theme</CardTitle>
                        <CardDescription>Certificate issuance ratio</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={themeEffectiveness}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="theme" />
                                <YAxis domain={[80, 100]} />
                                <Tooltip />
                                <Bar dataKey="completion" fill="#10b981" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Quality Metrics</CardTitle>
                        <CardDescription>Detailed effectiveness breakdown</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {themeEffectiveness.map((theme) => (
                                <div key={theme.theme} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm">{theme.theme}</span>
                                        <span className="text-sm">{theme.satisfaction}/5.0</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div
                                            className="bg-primary h-2 rounded-full"
                                            style={{ width: `${(theme.satisfaction / 5) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
