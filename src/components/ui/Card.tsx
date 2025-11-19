import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'success' | 'danger' | 'warning' | 'info';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  title,
  subtitle,
  variant = 'default',
}) => {
  const cardClasses = ['card', `card-${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClasses}>
      {(title || subtitle) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
