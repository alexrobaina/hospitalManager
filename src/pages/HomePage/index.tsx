import { FC, useContext, useState } from 'react';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../../services/AppContext';
import { Navbar } from '../../components/Navbar';
import { LoginModal } from './components/LoginModal';
import { HeroSection } from './components/HeroSection';
import animationData from '../../assets/lottie/medicalRecord.json';
import { LottieAnimation } from '../../components/common/LottieAnimations';

export const HomePage: FC = observer(() => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  const appContext = useContext(AppContext);

  const handleLogin = (username: string) => {
    appContext.user = { username };
    navigate('/dashboard');
  };

  return (
    <>
      <Navbar />
      <motion.div
        className="w-full px-4 sm:px-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
            <HeroSection onGetStarted={() => setIsLoginModalOpen(true)} />
            <div className="flex flex-col gap-4">
              <LottieAnimation animation={animationData} />
            </div>
          </div>
        </div>

        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          onSubmit={handleLogin}
        />
      </motion.div>
    </>
  );
});
