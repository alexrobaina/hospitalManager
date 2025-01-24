import { FC, useContext, useState } from 'react';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../components/Modal';
import { BaseInput } from '../../components/BaseInput';
import { AppContext } from '../../services/store';

export const HomePage: FC = observer(() => {
  const store = useContext(AppContext);
  const [username, setUsername] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    store.setUsername(username);
    setIsOpen(false);
    if (store.user.isAuthenticated) {
      navigate('/dashboard');
    }
  };

  const toggleModalRegister = () => {
    setIsOpen(!isOpen);
  };

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Welcome to Hospital Manager
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-gray-600 max-w-md text-left">
                Hospital Manager is a platform that allows you to manage your
                hospital and patients.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                Start now
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gray-200 rounded-md aspect-square object-cover">
              <img
                src="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hero Image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="bg-gray-200 rounded-md row-span-2">
              <img
                src="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hero Image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="bg-gray-200 rounded-md aspect-square">
              <img
                src="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hero Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onSubmit={handleSubmit}
        title="Login to your account"
        onClose={toggleModalRegister}
      >
        <div className="space-y-4 w-full">
          <BaseInput
            label="Username"
            value={username}
            onChange={handleUsername}
            placeholder="Enter your username"
            helperText="Please enter your username to login to your account."
          />
        </div>
      </Modal>
    </div>
  );
});
