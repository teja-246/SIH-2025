import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Shield } from 'lucide-react';
import { toast } from 'sonner';

interface LoginFormProps {
    onLogin: (role: 'admin' | 'state-officer' | 'trainer' | 'viewer') => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<'admin' | 'state-officer' | 'trainer' | 'viewer'>('admin');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && password) {
            toast.success('Login successful!');
            onLogin(role);
        } else {
            toast.error('Please enter email and password');
        }
    };

    return (
        <Card className="shadow-2xl bg-white/95 backdrop-blur-sm border-blue-200/50">
            <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-blue-900">Sign In</CardTitle>
                    <div className="h-10 w-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                        <Shield className="h-5 w-5 text-white" />
                    </div>
                </div>
                <CardDescription className="text-slate-600">
                    Access the training monitoring system
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-700">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="user@ndma.gov.in"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-input-background border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-slate-700">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-input-background border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="role" className="text-slate-700">Login as (Demo)</Label>
                        <Select value={role} onValueChange={(value: 'admin' | 'state-officer' | 'trainer' | 'viewer') => setRole(value)}>
                            <SelectTrigger className="bg-input-background border-blue-200 focus:border-blue-400 focus:ring-blue-400">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="admin">NDMA Admin</SelectItem>
                                <SelectItem value="state-officer">State Officer</SelectItem>
                                <SelectItem value="trainer">Trainer</SelectItem>
                                <SelectItem value="viewer">Viewer</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all">
                        Sign In
                    </Button>

                    <div className="text-center">
                        <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                            Forgot password?
                        </a>
                    </div>
                </form>

                <div className="mt-6 pt-6 border-t border-blue-200">
                    <p className="text-sm text-slate-600 text-center">
                        Demo credentials: Any email/password combination
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
