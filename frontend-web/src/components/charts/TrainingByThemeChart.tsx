import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { trainingsByTheme } from '../../data/mockData';

export function TrainingByThemeChart() {
    return (
        <Card className="lg:col-span-3 shadow-md bg-white">
            <CardHeader>
                <CardTitle className="text-blue-900">Training by Theme</CardTitle>
                <CardDescription>Distribution across disaster categories</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={trainingsByTheme}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {trainingsByTheme.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
