import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import {
  LayoutDashboard,
  GraduationCap,
  Map,
  BarChart3,
  Users,
  LogOut,
  Shield,
  Bell,
  Settings,
  Menu,
  X
} from 'lucide-react';
import { Badge } from '../ui/badge';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback } from '../ui/avatar';

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: 'admin' | 'state-officer' | 'trainer' | 'viewer';
  onLogout: () => void;
}

export default function DashboardLayout({ children, userRole, onLogout }: DashboardLayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, roles: ['admin', 'state-officer', 'trainer', 'viewer'] },
    { name: 'Trainings', path: '/trainings', icon: GraduationCap, roles: ['admin', 'state-officer', 'trainer', 'viewer'] },
    { name: 'GIS Map', path: '/map', icon: Map, roles: ['admin', 'state-officer', 'trainer', 'viewer'] },
    { name: 'Analytics', path: '/analytics', icon: BarChart3, roles: ['admin', 'state-officer', 'viewer'] },
    { name: 'Users', path: '/users', icon: Users, roles: ['admin'] },
  ];

  const filteredNav = navigationItems.filter(item => item.roles.includes(userRole));

  const getRoleLabel = () => {
    switch (userRole) {
      case 'admin': return 'NDMA Admin';
      case 'state-officer': return 'State Officer';
      case 'trainer': return 'Trainer';
      case 'viewer': return 'Viewer';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-orange-50/30">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-blue-200/50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
        <div className="flex h-16 items-center px-4 md:px-6">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2 hover:bg-blue-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2 mr-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg shadow-md">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-blue-900">NDMA Training Portal</div>
              <div className="text-xs text-blue-600">Disaster Management</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 flex-1">
            {filteredNav.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? 'secondary' : 'ghost'}
                    className={`gap-2 ${isActive ? 'bg-blue-100 text-blue-900 hover:bg-blue-200' : 'hover:bg-blue-50 text-slate-700'}`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2 ml-auto">
            <Button variant="ghost" size="icon" className="relative hover:bg-blue-50">
              <Bell className="h-5 w-5 text-slate-700" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-orange-500 to-orange-600 border-0">
                3
              </Badge>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2 hover:bg-blue-50">
                  <Avatar className="h-8 w-8 bg-gradient-to-br from-blue-500 to-blue-600">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">{getRoleLabel().charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline-block text-slate-700">{getRoleLabel()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="text-blue-900">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-blue-50">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogout} className="text-destructive hover:bg-red-50">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-blue-200/50 bg-white">
            <nav className="flex flex-col p-4 space-y-1">
              {filteredNav.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant={isActive ? 'secondary' : 'ghost'}
                      className={`w-full justify-start gap-2 ${isActive ? 'bg-blue-100 text-blue-900' : 'hover:bg-blue-50'}`}
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </Button>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
