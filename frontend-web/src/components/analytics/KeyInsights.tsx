import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function KeyInsights() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Avg. Completion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-baseline gap-2">
                        <div className="text-2xl">92.3%</div>
                        <div className="flex items-center gap-1 text-sm text-green-600">
                            <TrendingUp className="h-3 w-3" />
                            +3.2%
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Above target by 2.3%</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Participant Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-baseline gap-2">
                        <div className="text-2xl">4.4/5.0</div>
                        <div className="flex items-center gap-1 text-sm text-green-600">
                            <TrendingUp className="h-3 w-3" />
                            +0.2
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Based on 12,450 reviews</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Coverage Growth</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-baseline gap-2">
                        <div className="text-2xl">+18%</div>
                        <div className="flex items-center gap-1 text-sm text-green-600">
                            <TrendingUp className="h-3 w-3" />
                            YoY
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">624 new districts covered</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Budget Utilization</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-baseline gap-2">
                        <div className="text-2xl">87%</div>
                        <div className="flex items-center gap-1 text-sm text-orange-600">
                            <TrendingDown className="h-3 w-3" />
                            -2%
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">₹13Cr remaining</p>
                </CardContent>
            </Card>
        </div>
    );
}
