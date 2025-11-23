import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Shield, Bell, Menu, X } from 'lucide-react';
import { Badge } from '../ui/badge';
import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';
import { UserMenu } from './UserMenu';

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: 'admin' | 'state-officer' | 'trainer' | 'viewer';
  onLogout: () => void;
}

export default function DashboardLayout({ children, userRole, onLogout }: DashboardLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <Sidebar userRole={userRole} />

          {/* Right side actions */}
          <div className="flex items-center gap-2 ml-auto">
            <Button variant="ghost" size="icon" className="relative hover:bg-blue-50">
              <Bell className="h-5 w-5 text-slate-700" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-orange-500 to-orange-600 border-0">
                3
              </Badge>
            </Button>

            <UserMenu userRole={userRole} onLogout={onLogout} />
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <MobileNav userRole={userRole} setMobileMenuOpen={setMobileMenuOpen} />
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
