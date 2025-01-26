import { FC, useContext, useState } from 'react';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../components/Modal';
import { BaseInput } from '../../components/BaseInput';
import { AppContext } from '../../services/AppContext';
import { Navbar } from '../../components/Navbar';
import { motion } from 'framer-motion';
import { BaseButton } from '../../components/BaseButton';

export const HomePage: FC = observer(() => {
  const appContext = useContext(AppContext);

  const [username, setUsername] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [validation, setValidation] = useState({
    username: false,
  });

  const handleSubmit = () => {
    if (!username) {
      setValidation({ username: true });
      return;
    }
    setValidation({ username: false });
    appContext.user = { username };

    navigate('/dashboard');
  };

  const toggleModalRegister = () => {
    setIsOpen(!isOpen);
  };

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="w-full px-4 sm:px-12">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-1 gap-8 items-center md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-4 flex-col">
              <div className="flex gap-4 flex-col">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-lg tracking-tighter text-left font-bold">
                  Welcome to Hospital Manager
                </h1>
                <p className="text-base sm:text-lg leading-relaxed tracking-tight text-gray-600 font-medium max-w-md text-left">
                  Hospital Manager is a platform that allows you to manage your
                  hospital and patients.
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <BaseButton
                  text="Let's get started"
                  onClick={toggleModalRegister}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <motion.div
                className="bg-gray-200 rounded-md aspect-square object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Hero Image"
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                className="bg-gray-200 rounded-md row-span-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Hero Image"
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                className="bg-gray-200 rounded-md aspect-square"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Hero Image"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <Modal
          isOpen={isOpen}
          onSubmit={handleSubmit}
          title="Login to your account"
          onClose={toggleModalRegister}
        >
          <BaseInput
            label="Username"
            value={username}
            onChange={handleUsername}
            placeholder="Enter your username"
            error={validation.username ? 'Please enter your username' : ''}
          />
        </Modal>
      </div>
    </>
  );
});
