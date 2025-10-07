import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Shield, AlertTriangle, MapPin, BarChart3 } from 'lucide-react';
import { toast } from 'sonner';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface SignInPageProps {
  onLogin: (role: 'admin' | 'state-officer' | 'trainer' | 'viewer') => void;
}

export default function SignInPage({ onLogin }: SignInPageProps) {
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with India Map Image */}
      <div className="absolute inset-0">
        {/* India Map Background Image */}
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1551179231-dc26ffae5fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMG1hcCUyMG91dGxpbmV8ZW58MXx8fHwxNzU5ODMxMjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="India Map"
          className="w-full h-full object-cover opacity-20"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 via-white/90 to-orange-100/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-orange-500/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Branding */}
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

          {/* Right side - Login form */}
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
                  <Select value={role} onValueChange={(value: any) => setRole(value)}>
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
        </div>
      </div>
    </div>
  );
}
