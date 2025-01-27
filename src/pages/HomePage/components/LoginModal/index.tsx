import { FC, useState } from 'react';
import { Modal } from '../../../../components/common/Modal';
import { BaseInput } from '../../../../components/common/BaseInput';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (username: string) => void;
}

export const LoginModal: FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [username, setUsername] = useState('');
  const [validation, setValidation] = useState({ username: false });

  const handleSubmit = () => {
    if (!username) {
      setValidation({ username: true });
      return;
    }
    setValidation({ username: false });
    onSubmit(username);
  };

  return (
    <Modal
      isOpen={isOpen}
      onSubmit={handleSubmit}
      title="Login to your account"
      onClose={onClose}
    >
      <BaseInput
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        error={validation.username ? 'Please enter your username' : ''}
      />
    </Modal>
  );
};
