import React from 'react';
import classNames from 'classnames';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { children: React.ReactNode; isLoading?: boolean; disabled?: boolean };

export const Button: React.FC<Props> = ({
  children,
  isLoading,
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(
        'bg-gray-900 text-white px-4 py-2 rounded-md font-medium transition-all duration-200 hover:opacity-70',
        { 'cursor-not-allowed opacity-70': disabled || isLoading },
        props?.className
      )}
    >
      {isLoading ? 'Loading' : children}
    </button>
  );
};
