import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { GraduationCap, Users, Award, MapPin, TrendingUp } from 'lucide-react';

export function KPICards() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-l-4 border-l-blue-600 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm text-blue-900">Total Trainings</CardTitle>
                    <div className="bg-blue-100 p-2 rounded-lg">
                        <GraduationCap className="h-4 w-4 text-blue-600" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl text-blue-900">1,248</div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <TrendingUp className="h-3 w-3 text-green-600" />
                        <span className="text-green-600">+12.5%</span> from last month
                    </p>
                </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-600 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm text-orange-900">Total Participants</CardTitle>
                    <div className="bg-orange-100 p-2 rounded-lg">
                        <Users className="h-4 w-4 text-orange-600" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl text-orange-900">34,567</div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <TrendingUp className="h-3 w-3 text-green-600" />
                        <span className="text-green-600">+8.2%</span> from last month
                    </p>
                </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm text-blue-900">Certificates Issued</CardTitle>
                    <div className="bg-blue-100 p-2 rounded-lg">
                        <Award className="h-4 w-4 text-blue-600" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl text-blue-900">28,943</div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <TrendingUp className="h-3 w-3 text-green-600" />
                        <span className="text-green-600">+15.3%</span> from last month
                    </p>
                </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm text-orange-900">Active Institutions</CardTitle>
                    <div className="bg-orange-100 p-2 rounded-lg">
                        <MapPin className="h-4 w-4 text-orange-600" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl text-orange-900">156</div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <TrendingUp className="h-3 w-3 text-green-600" />
                        <span className="text-green-600">+5</span> new this month
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
