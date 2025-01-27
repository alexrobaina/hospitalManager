import { BaseInput } from '../../../../components/common/BaseInput';
import { SearchIcon } from '../../../../assets/icons';

export const SearchBar = ({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="flex py-4">
    <BaseInput
      label="Search Patient"
      onChange={onChange}
      placeholder="Enter patient name"
      helperText="Type a patient's name to find their details."
      icon={<SearchIcon className="w-5 h-5" />}
    />
  </div>
);
