import { FC } from 'react';
import { BaseButton } from '../../../../components/common/BaseButton';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection: FC<HeroSectionProps> = ({ onGetStarted }) => (
  <div className="flex gap-4 flex-col">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-lg tracking-tighter text-left font-bold">
      Welcome to Hospital Manager
    </h1>
    <p className="text-base sm:text-lg md:text-2xl leading-relaxed tracking-tight text-gray-600 font-medium max-w-md text-left">
      Hospital Manager is a platform that allows you to manage your hospital and
      patients.
    </p>
    <div className="flex flex-row gap-4">
      <BaseButton text="Let's get started" onClick={onGetStarted} />
    </div>
  </div>
);
