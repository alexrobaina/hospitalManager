import { BaseButton } from '../../../../components/common/BaseButton';

export const ErrorState = ({
  onCreatePatient,
}: {
  onCreatePatient: () => void;
}) => (
  <div className="flex flex-col w-full mt-[40%] sm:mt-[30%] md:mt-[20%] lg:mt-[15%] gap-4 justify-center items-center">
    <div className="text-black text-base font-medium">
      We can't find any patients with this name
    </div>
    <BaseButton text="Create Patient" onClick={onCreatePatient} />
  </div>
);
