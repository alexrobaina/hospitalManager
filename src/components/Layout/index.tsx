import { motion } from 'framer-motion';
import { FC, ReactElement } from 'react';

interface Props {
  children?: ReactElement;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ ease: 'easeIn', delay: 0.3 }}
      className="flex flex-col w-full h-full py-20 pl-0 pr-0 sm:py-2 sm:pl-6 sm:pr-8"
    >
      {children}
    </motion.div>
  );
};

export default Layout;
