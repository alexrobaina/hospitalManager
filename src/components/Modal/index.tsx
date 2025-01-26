import { Cancel } from '../../assets/icons';
import { BaseButton } from '../BaseButton';

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  title?: string;
  submitText?: string;
  onSubmit: () => void;
  onClose: () => void;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  submitText = 'Save',
  onSubmit,
}: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />

      {/* Modal Content */}
      <div className="bg-white rounded-lg shadow-lg z-10 w-full max-w-md p-6">
        {title && (
          <>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-primary-900">{title}</h1>
              <button
                onClick={onClose}
                className="text-secondary-600 hover:text-secondary-800"
              >
                <img src={Cancel} alt="cancel" className="w-5 h-5" />
              </button>
            </div>
            <div className="w-full h-px border-b my-4 border-gray-200" />
          </>
        )}
        <div className="flex pt-4 pb-8 w-full">{children}</div>

        {/* Footer */}
        <div className="flex justify-end">
          <div className="flex gap-2">
            <div className="flex gap-2">
              {onClose && (
                <BaseButton text="Close" onClick={onClose} style="secondary" />
              )}
              <BaseButton
                text={submitText}
                onClick={onSubmit}
                style="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
