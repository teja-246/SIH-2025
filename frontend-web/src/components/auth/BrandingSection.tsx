import { Shield, AlertTriangle, MapPin, BarChart3 } from 'lucide-react';

export function BrandingSection() {
    return (
        <div className="hidden md:block space-y-8">
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl shadow-lg">
                        <Shield className="h-10 w-10 text-white" />
                    </div>
                    <div>
                        <h1 className="text-blue-900">NDMA Training Portal</h1>
                        <p className="text-blue-700">National Disaster Management Authority</p>
                    </div>
                </div>

                <p className="text-slate-600 text-lg">
                    Comprehensive training monitoring and management system for disaster preparedness across India
                </p>
            </div>

            <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-blue-200/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-blue-100 p-3 rounded-lg mt-1 flex-shrink-0">
                        <AlertTriangle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="text-blue-900">Real-Time Monitoring</h3>
                        <p className="text-slate-600">Track disaster management trainings across India in real-time with live updates</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-orange-200/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-orange-100 p-3 rounded-lg mt-1 flex-shrink-0">
                        <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                        <h3 className="text-orange-900">GIS Mapping</h3>
                        <p className="text-slate-600">Visualize training coverage and identify gaps on interactive maps</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-blue-200/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-blue-100 p-3 rounded-lg mt-1 flex-shrink-0">
                        <BarChart3 className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="text-blue-900">Advanced Analytics</h3>
                        <p className="text-slate-600">Generate insights and reports to improve training effectiveness</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
