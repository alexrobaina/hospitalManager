import { BaseButton } from '../../../../components/common/BaseButton';
import { PlusIcon } from '../../../../assets/icons';

export const Header = ({ onAddPatient }: { onAddPatient: () => void }) => (
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-2xl font-bold mb-4">Patients</h1>
      <p className="text-sm text-gray-500 mb-4">Search for a patient by name</p>
    </div>
    <BaseButton
      text="Add Patient"
      icon={<PlusIcon className="w-5 h-5" />}
      onClick={onAddPatient}
    />
  </div>
);
