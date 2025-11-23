import { Button } from '../ui/button';
import { Download, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { KPICards } from '../dashboard/KPICards';
import { AlertsSection } from '../dashboard/AlertsSection';
import { TrainingTrendsChart } from '../charts/TrainingTrendsChart';
import { TrainingByThemeChart } from '../charts/TrainingByThemeChart';
import { TopStatesChart } from '../charts/TopStatesChart';
import { RecentTrainingsCard } from '../dashboard/RecentTrainingsCard';

interface DashboardProps {
  userRole: 'admin' | 'state-officer' | 'trainer' | 'viewer';
}

export default function Dashboard({ userRole }: DashboardProps) {
  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-blue-900">Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time overview of disaster management training programs
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 border-blue-300 hover:bg-blue-50 hover:text-blue-900">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          {(userRole === 'admin' || userRole === 'state-officer' || userRole === 'trainer') && (
            <Link to="/trainings/new">
              <Button className="gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                <Plus className="h-4 w-4" />
                Add Training
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* KPI Cards */}
      <KPICards />

      {/* Alerts Section */}
      {userRole === 'admin' && (
        <AlertsSection />
      )}

      {/* Charts Row 1 */}
      <div className="grid gap-4 lg:grid-cols-7">
        <TrainingTrendsChart />
        <TrainingByThemeChart />
      </div>

      {/* Charts Row 2 */}
      <div className="grid gap-4 lg:grid-cols-2">
        <TopStatesChart />
        <RecentTrainingsCard />
      </div>
    </div>
  );
}
