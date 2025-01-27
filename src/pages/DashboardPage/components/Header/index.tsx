import { BaseButton } from '../../../../components/common/BaseButton';
import { PlusIcon } from '../../../../assets/icons';
import { ReactElement } from 'react';

interface HeaderProps {
  title: string;
  description: string;
  onButtonClick?: () => void;
  buttonText?: string;
  buttonIcon?: ReactElement;
  className?: string;
}

export const Header = ({
  title,
  description,
  onButtonClick,
  buttonText = 'Add Patient',
  buttonIcon = <PlusIcon className="w-5 h-5" />,
  className = '',
}: HeaderProps) => (
  <div className={`flex justify-between items-center ${className}`}>
    <div>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-gray-500 mb-4 font-medium">{description}</p>
    </div>
    {onButtonClick && (
      <BaseButton text={buttonText} onClick={onButtonClick} icon={buttonIcon} />
    )}
  </div>
);
