import React from 'react';

interface PasswordStrengthIndicatorProps {
  password: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password }) => {
  const getPasswordStrength = (password: string) => {
    if (!password) return { strength: 'none', percentage: 0, color: 'bg-gray-200', text: '' };
    
    let score = 0;
    let feedback = [];

    // Length check
    if (password.length >= 8) {
      score += 25;
    } else {
      feedback.push('At least 8 characters');
    }

    // Lowercase check
    if (/[a-z]/.test(password)) {
      score += 25;
    } else {
      feedback.push('Include lowercase letters');
    }

    // Uppercase check
    if (/[A-Z]/.test(password)) {
      score += 25;
    } else {
      feedback.push('Include uppercase letters');
    }

    // Numbers check
    if (/\d/.test(password)) {
      score += 25;
    } else {
      feedback.push('Include numbers');
    }

    // Special characters check (bonus)
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      score += 10;
    }

    if (score <= 25) {
      return { strength: 'weak', percentage: score, color: 'bg-red-500', text: 'Weak' };
    } else if (score <= 50) {
      return { strength: 'fair', percentage: score, color: 'bg-orange-500', text: 'Fair' };
    } else if (score <= 75) {
      return { strength: 'good', percentage: score, color: 'bg-yellow-500', text: 'Good' };
    } else {
      return { strength: 'strong', percentage: score, color: 'bg-green-500', text: 'Strong' };
    }
  };

  const strength = getPasswordStrength(password);

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-600">Password strength:</span>
        <span className={`text-xs font-medium ${
          strength.strength === 'weak' ? 'text-red-600' :
          strength.strength === 'fair' ? 'text-orange-600' :
          strength.strength === 'good' ? 'text-yellow-600' :
          'text-green-600'
        }`}>
          {strength.text}
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${strength.color}`}
          style={{ width: `${Math.min(strength.percentage, 100)}%` }}
        ></div>
      </div>
      
      {password && strength.strength !== 'strong' && (
        <div className="mt-2">
          <p className="text-xs text-gray-500 mb-1">To improve your password:</p>
          <ul className="text-xs text-gray-500 space-y-1">
            {password.length < 8 && <li>• Make it at least 8 characters long</li>}
            {!/[a-z]/.test(password) && <li>• Add lowercase letters</li>}
            {!/[A-Z]/.test(password) && <li>• Add uppercase letters</li>}
            {!/\d/.test(password) && <li>• Add numbers</li>}
            {!/[!@#$%^&*(),.?":{}|<>]/.test(password) && <li>• Add special characters</li>}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PasswordStrengthIndicator; 