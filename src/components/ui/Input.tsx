import React from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const inputClasses = [
    'input',
    error ? 'input-error' : '',
    icon ? 'input-with-icon' : '',
    fullWidth ? 'input-full-width' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`input-wrapper ${fullWidth ? 'input-wrapper-full-width' : ''}`}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-container">
        <input className={inputClasses} {...props} />
        {icon && <span className="input-icon">{icon}</span>}
      </div>
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};

export default Input;
