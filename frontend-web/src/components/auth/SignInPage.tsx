import { ImageWithFallback } from '../figma/ImageWithFallback';
import { BrandingSection } from './BrandingSection';
import { LoginForm } from './LoginForm';

interface SignInPageProps {
  onLogin: (role: 'admin' | 'state-officer' | 'trainer' | 'viewer') => void;
}

export default function SignInPage({ onLogin }: SignInPageProps) {
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
          <BrandingSection />

          {/* Right side - Login form */}
          <LoginForm onLogin={onLogin} />
        </div>
      </div>
    </div>
  );
}
