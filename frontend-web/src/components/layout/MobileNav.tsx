import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { navigationItems } from '../../data/mockData';

interface MobileNavProps {
    userRole: 'admin' | 'state-officer' | 'trainer' | 'viewer';
    setMobileMenuOpen: (open: boolean) => void;
}

export function MobileNav({ userRole, setMobileMenuOpen }: MobileNavProps) {
    const location = useLocation();
    const filteredNav = navigationItems.filter(item => item.roles.includes(userRole));

    return (
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
    );
}
