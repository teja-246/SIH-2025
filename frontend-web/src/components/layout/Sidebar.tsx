import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { navigationItems } from '../../data/mockData';

interface SidebarProps {
    userRole: 'admin' | 'state-officer' | 'trainer' | 'viewer';
}

export function Sidebar({ userRole }: SidebarProps) {
    const location = useLocation();
    const filteredNav = navigationItems.filter(item => item.roles.includes(userRole));

    return (
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
    );
}
