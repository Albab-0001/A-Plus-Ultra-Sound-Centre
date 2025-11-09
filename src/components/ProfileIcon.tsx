import React from 'react';

interface ProfileIconProps {
  email?: string | null;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  showTooltip?: boolean;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ 
  email, 
  size = 'md', 
  onClick, 
  className = '',
  showTooltip = false 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-lg',
    lg: 'w-32 h-32 text-4xl'
  };

  const getInitials = (email: string | null | undefined) => {
    if (!email) return 'U';
    return email.charAt(0).toUpperCase();
  };

  const iconElement = (
    <div 
      className={`${sizeClasses[size]} bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 ${onClick ? 'cursor-pointer hover:scale-110' : ''} ${className}`}
      onClick={onClick}
    >
      {getInitials(email)}
    </div>
  );

  if (!showTooltip || !onClick) {
    return iconElement;
  }

  return (
    <div className="relative group">
      {iconElement}
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
        View Profile
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
};

export default ProfileIcon; 