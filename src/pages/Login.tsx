import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GoogleLogin } from '@react-oauth/google';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    // TODO: Implement login logic
    // For now, we'll simulate a successful login
    const redirectTo = location.state?.redirectTo || '/dashboard';
    navigate(redirectTo);
  };

  const handleGoogleSuccess = (credentialResponse: any) => {
    console.log(credentialResponse);
    // TODO: Implement Google Sign-In logic
    // For now, we'll simulate a successful login
    const redirectTo = location.state?.redirectTo || '/dashboard';
    navigate(redirectTo);
  };

  const handleGoogleError = () => {
    console.log('Google Sign-In Failed');
  };

  useEffect(() => {
    if (location.state?.selectedSession) {
      alert(`Please log in to book ${location.state.selectedSession}`);
    }
  }, [location.state]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Login to Kindextra</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password" className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            id="password"
            {...register('password')}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <motion.button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>
      </form>
      <div className="mt-4 text-center">
        <p>Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Sign up</Link></p>
      </div>
      <div className="mt-6">
        <p className="text-center mb-2">Or login with</p>
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Login;