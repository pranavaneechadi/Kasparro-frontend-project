import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
};

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...rest }) => {
  const base = 'inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold';
  const styles = variant === 'primary'
    ? 'bg-sky-600 text-white hover:bg-sky-700'
    : 'bg-transparent text-sky-600 border border-sky-600 hover:bg-sky-50';
  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
