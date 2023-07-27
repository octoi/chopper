import React from 'react';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  setValue?: any;
};

export const Input: React.FC<Props> = ({ setValue, ...props }) => {
  return (
    <input
      {...props}
      onChange={setValue ? (e) => setValue(e.target.value) : undefined}
      className={`bg-gray-50 p-3 rounded-md outline-none border-2 transition-all duration-100 focus:border-gray-900 ${props?.className}`}
    />
  );
};
