import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <motion.header
      className="bg-blue-600 text-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <Dumbbell size={32} />
          <span>Kindextra</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="/" className="hover:text-blue-200">Home</Link>
              </motion.div>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link>
                  </motion.div>
                </li>
                <li>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleLogout}
                    className="hover:text-blue-200"
                  >
                    Logout
                  </motion.button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link to="/login" className="hover:text-blue-200">Login</Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link to="/register" className="hover:text-blue-200">Register</Link>
                  </motion.div>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;