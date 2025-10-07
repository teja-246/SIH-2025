import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import type { ReactNode } from 'react';
import SignInPage from './components/auth/SignInPage';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './components/pages/Dashboard';
import TrainingList from './components/pages/TrainingList';
import TrainingForm from './components/pages/TrainingForm';
import TrainingDetails from './components/pages/TrainingDetails';
import MapView from './components/pages/MapView';
import Analytics from './components/pages/Analytics';
import UserManagement from './components/pages/UserManagement';
import { Toaster } from './components/ui/sonner';

function ProtectedRoute({ children, isAuthenticated }: { children: ReactNode; isAuthenticated: boolean }) {
  const location = useLocation();
  
  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
}

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'state-officer' | 'trainer' | 'viewer'>('admin');

  const handleLogin = (role: 'admin' | 'state-officer' | 'trainer' | 'viewer') => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="size-full">
      <Routes>
        <Route 
          path="/signin" 
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <SignInPage onLogin={handleLogin} />
            )
          } 
        />
        
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashboardLayout userRole={userRole} onLogout={handleLogout}>
                <Navigate to="/dashboard" replace />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashboardLayout userRole={userRole} onLogout={handleLogout}>
                <Dashboard userRole={userRole} />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/trainings"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashboardLayout userRole={userRole} onLogout={handleLogout}>
                <TrainingList userRole={userRole} />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/trainings/new"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashboardLayout userRole={userRole} onLogout={handleLogout}>
                <TrainingForm />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/trainings/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashboardLayout userRole={userRole} onLogout={handleLogout}>
                <TrainingDetails />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/map"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashboardLayout userRole={userRole} onLogout={handleLogout}>
                <MapView />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/analytics"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashboardLayout userRole={userRole} onLogout={handleLogout}>
                <Analytics />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        
        {userRole === 'admin' && (
          <Route
            path="/users"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <DashboardLayout userRole={userRole} onLogout={handleLogout}>
                  <UserManagement />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
        )}
        
        <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/signin"} replace />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
