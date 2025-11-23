import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Settings, LogOut } from 'lucide-react';

interface UserMenuProps {
    userRole: 'admin' | 'state-officer' | 'trainer' | 'viewer';
    onLogout: () => void;
}

export function UserMenu({ userRole, onLogout }: UserMenuProps) {
    const getRoleLabel = () => {
        switch (userRole) {
            case 'admin': return 'NDMA Admin';
            case 'state-officer': return 'State Officer';
            case 'trainer': return 'Trainer';
            case 'viewer': return 'Viewer';
        }
    };

    return (
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
    );
}
