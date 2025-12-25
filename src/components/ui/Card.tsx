import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={[
        'bg-white',
        'border',
        'rounded-lg',
        'p-5',
        'shadow-sm',
        'transition-shadow',
        'hover:shadow-md',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
};

export default Card;
