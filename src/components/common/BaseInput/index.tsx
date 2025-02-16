import { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | false | undefined;
  helperText?: string;
  icon?: React.ReactNode;
}

export const BaseInput: FC<Props> = ({
  label,
  error,
  helperText,
  className = '',
  icon,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={`
            w-full px-4 py-2 
            border rounded-lg 
            transition-colors duration-200
            focus:outline-none focus:ring-2 
            ${
              error
                ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:border-primary-500 focus:ring-primary-200'
            }
            ${props.disabled ? 'bg-gray-50 text-gray-500' : 'bg-white'}
            ${className}
          `}
          {...props}
        />
        {icon && (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            {icon}
          </div>
        )}
      </div>
      {typeof error === 'string' ? (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      ) : helperText ? (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      ) : null}
    </div>
  );
};
