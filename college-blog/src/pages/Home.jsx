import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserRoundPen, UserPlus } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-black">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-5xl font-bold mb-6 text-black">
            UniNotes Hub!
          </h1>
          <p className="text-lg text-blue-600 max-w-xl mx-auto animate-fade-in">
            Secure, collaborative, and branch-inclusive — a digital vault for all your academic notes and materials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Student Column */}
          <div className="flex flex-col items-center gap-8">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="cursor-pointer bg-gradient-to-br from-blue-100 to-blue-200 text-black rounded-3xl shadow-xl p-6 w-[280px] flex flex-col items-center hover:scale-105 transition-transform duration-300 hover:shadow-blue-400/50"
              onClick={() => navigate('/student/login')}
            >
              <UserRoundPen className="text-blue-600 text-5xl mb-4" />
              <h2 className="text-xl font-bold mb-4 text-blue-700">User Login</h2>
              <button className="cursor-pointer w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">
                Login
              </button>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="cursor-pointer bg-gradient-to-br from-blue-100 to-blue-200 text-black rounded-3xl shadow-xl p-6 w-[280px] flex flex-col items-center hover:scale-105 transition-transform duration-300 hover:shadow-blue-400/50"
              onClick={() => navigate('/student/register')}
            >
              <UserPlus className="text-blue-600 text-5xl mb-4" />
              <h2 className="text-xl font-bold mb-4 text-blue-700">User Register</h2>
              <button className="cursor-pointer w-full px-4 py-2 bg-blue-100 text-blue-800 font-semibold rounded-xl hover:bg-blue-200 transition-colors">
                Register
              </button>
            </motion.div>
          </div>

          {/* Club Column */}
          <div className="flex flex-col items-center gap-8">
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="cursor-pointer bg-gradient-to-br from-purple-200 to-purple-100 text-black rounded-3xl shadow-xl p-6 w-[280px] flex flex-col items-center hover:scale-105 transition-transform duration-300 hover:shadow-purple-400/50"
              onClick={() => navigate('/Admin/login')}
            >
              <UserRoundPen className="text-purple-600 text-5xl mb-4" />
              <h2 className="text-xl font-bold mb-4 text-purple-700">Admin Login</h2>
              <button className="cursor-pointer w-full px-4 py-2 bg-purple-500 text-white font-semibold rounded-xl hover:bg-purple-600 transition-colors">
                Login
              </button>
            </motion.div>

            <motion.div
              custom={3}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="cursor-pointer bg-gradient-to-br from-purple-100 to-purple-200 text-black rounded-3xl shadow-xl p-6 w-[280px] flex flex-col items-center hover:scale-105 transition-transform duration-300 hover:shadow-purple-400/50"
              onClick={() => navigate('/Admin/register')}
            >
              <UserPlus className="text-purple-600 text-5xl mb-4" />
              <h2 className="text-xl font-bold mb-4 text-purple-700">Admin Register</h2>
              <button className="cursor-pointer w-full px-4 py-2 bg-purple-100 text-purple-800 font-semibold rounded-xl hover:bg-purple-200 transition-colors">
                Register
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
