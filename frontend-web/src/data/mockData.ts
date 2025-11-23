import { LayoutDashboard, GraduationCap, Map, BarChart3, Users } from 'lucide-react';

// Dashboard Data
export const trainingsByMonth = [
  { month: 'Apr', trainings: 45, participants: 1200 },
  { month: 'May', trainings: 52, participants: 1450 },
  { month: 'Jun', trainings: 48, participants: 1320 },
  { month: 'Jul', trainings: 61, participants: 1680 },
  { month: 'Aug', trainings: 55, participants: 1520 },
  { month: 'Sep', trainings: 67, participants: 1890 },
  { month: 'Oct', trainings: 58, participants: 1650 },
];

export const trainingsByTheme = [
  { name: 'Flood Management', value: 145, color: '#1e40af' },
  { name: 'Fire Safety', value: 98, color: '#f97316' },
  { name: 'Earthquake Response', value: 87, color: '#fb923c' },
  { name: 'First Aid', value: 112, color: '#3b82f6' },
  { name: 'Cyclone Preparedness', value: 76, color: '#ea580c' },
];

export const trainingsByState = [
  { state: 'Maharashtra', count: 67 },
  { state: 'Karnataka', count: 54 },
  { state: 'Tamil Nadu', count: 48 },
  { state: 'Gujarat', count: 45 },
  { state: 'Rajasthan', count: 42 },
  { state: 'UP', count: 38 },
];

export const recentTrainings = [
  { id: 1, title: 'Flood Response Training', location: 'Mumbai, Maharashtra', date: '2025-10-03', participants: 45, status: 'completed' },
  { id: 2, title: 'Fire Safety Workshop', location: 'Bangalore, Karnataka', date: '2025-10-04', participants: 32, status: 'completed' },
  { id: 3, title: 'Earthquake Drill', location: 'Delhi, NCR', date: '2025-10-05', participants: 56, status: 'ongoing' },
  { id: 4, title: 'First Aid Certification', location: 'Chennai, Tamil Nadu', date: '2025-10-06', participants: 28, status: 'scheduled' },
];

export const alerts = [
  { id: 1, type: 'warning', message: 'Low training coverage detected in North-East regions', priority: 'high' },
  { id: 2, type: 'info', message: '15 pending training reports require approval', priority: 'medium' },
  { id: 3, type: 'success', message: 'Q3 2025 target achieved: 500+ trainings completed', priority: 'low' },
];

// Analytics Data
export const monthlyTrends = [
  { month: 'Jan', trainings: 38, participants: 1050, certificates: 920, targetCompletion: 85 },
  { month: 'Feb', trainings: 42, participants: 1180, certificates: 1020, targetCompletion: 88 },
  { month: 'Mar', trainings: 45, participants: 1250, certificates: 1100, targetCompletion: 90 },
  { month: 'Apr', trainings: 48, participants: 1320, certificates: 1180, targetCompletion: 92 },
  { month: 'May', trainings: 52, participants: 1450, certificates: 1280, targetCompletion: 94 },
  { month: 'Jun', trainings: 48, participants: 1360, certificates: 1200, targetCompletion: 91 },
  { month: 'Jul', trainings: 61, participants: 1680, certificates: 1520, targetCompletion: 96 },
  { month: 'Aug', trainings: 55, participants: 1520, certificates: 1350, targetCompletion: 93 },
  { month: 'Sep', trainings: 67, participants: 1890, certificates: 1680, targetCompletion: 97 },
];

export const stateComparison = [
  { state: 'Maharashtra', trainings: 145, participants: 4250, coverage: 92 },
  { state: 'Karnataka', trainings: 132, participants: 3890, coverage: 88 },
  { state: 'Tamil Nadu', trainings: 128, participants: 3650, coverage: 85 },
  { state: 'Gujarat', trainings: 115, participants: 3420, coverage: 82 },
  { state: 'Rajasthan', trainings: 108, participants: 3180, coverage: 78 },
  { state: 'UP', trainings: 98, participants: 2850, coverage: 72 },
  { state: 'West Bengal', trainings: 95, participants: 2720, coverage: 70 },
  { state: 'Delhi', trainings: 87, participants: 2580, coverage: 68 },
];

export const themeEffectiveness = [
  { theme: 'Flood Mgmt', satisfaction: 4.5, completion: 93, impact: 88 },
  { theme: 'Fire Safety', satisfaction: 4.3, completion: 91, impact: 85 },
  { theme: 'Earthquake', satisfaction: 4.2, completion: 89, impact: 82 },
  { theme: 'First Aid', satisfaction: 4.6, completion: 95, impact: 92 },
  { theme: 'Cyclone', satisfaction: 4.1, completion: 87, impact: 80 },
];

export const institutionTypes = [
  { name: 'SDMA', value: 245, color: '#3b82f6' },
  { name: 'ATI', value: 189, color: '#10b981' },
  { name: 'NGO', value: 156, color: '#f59e0b' },
  { name: 'NIDM', value: 98, color: '#8b5cf6' },
  { name: 'Others', value: 76, color: '#6b7280' },
];

export const gapAnalysis = [
  { region: 'North-East', gap: 'High', trainings: 24, targetGap: -45, priority: 'Critical' },
  { region: 'J&K', gap: 'Medium', trainings: 38, targetGap: -22, priority: 'High' },
  { region: 'Central India', gap: 'Low', trainings: 92, targetGap: -8, priority: 'Medium' },
  { region: 'South India', gap: 'None', trainings: 145, targetGap: 5, priority: 'Low' },
  { region: 'West India', gap: 'Low', trainings: 112, targetGap: -12, priority: 'Medium' },
];

// Navigation Data
export const navigationItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, roles: ['admin', 'state-officer', 'trainer', 'viewer'] },
  { name: 'Trainings', path: '/trainings', icon: GraduationCap, roles: ['admin', 'state-officer', 'trainer', 'viewer'] },
  { name: 'GIS Map', path: '/map', icon: Map, roles: ['admin', 'state-officer', 'trainer', 'viewer'] },
  { name: 'Analytics', path: '/analytics', icon: BarChart3, roles: ['admin', 'state-officer', 'viewer'] },
  { name: 'Users', path: '/users', icon: Users, roles: ['admin'] },
];
