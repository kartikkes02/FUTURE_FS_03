
// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';

// export default function LoginPage() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//     firstName: '',
//     lastName: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\\S+/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }
    
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }
    
//     if (!isLogin) {
//       if (!formData.firstName) newErrors.firstName = 'First name is required';
//       if (!formData.lastName) newErrors.lastName = 'Last name is required';
//       if (!formData.confirmPassword) {
//         newErrors.confirmPassword = 'Please confirm your password';
//       } else if (formData.password !== formData.confirmPassword) {
//         newErrors.confirmPassword = 'Passwords do not match';
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;
    
//     setIsLoading(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setIsLoading(false);
//       // Redirect to dashboard or previous page
//       window.location.href = '/orders';
//     }, 2000);
//   };

//   const toggleMode = () => {
//     setIsLogin(!isLogin);
//     setFormData({
//       email: '',
//       password: '',
//       confirmPassword: '',
//       firstName: '',
//       lastName: ''
//     });
//     setErrors({});
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         {/* Header */}
//         <div className="text-center">
//           <Link href="/" className="text-3xl font-bold text-gray-900">
//             <i className="ri-apple-fill w-12 h-12 flex items-center justify-center mx-auto"></i>
//           </Link>
//           <h2 className="mt-6 text-3xl font-bold text-gray-900">
//             {isLogin ? 'Sign in to your account' : 'Create your account'}
//           </h2>
//           <p className="mt-2 text-gray-600">
//             {isLogin ? 'Welcome back!' : 'Join us today'}
//           </p>
//         </div>

//         {/* Form */}
//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {!isLogin && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First name"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
//                 </div>
//                 <div>
//                   <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last name"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
//                 </div>
//               </div>
//             )}

//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email address"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//               />
//               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//             </div>

//             <div>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
//               />
//               {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//             </div>

//             {!isLogin && (
//               <div>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   placeholder="Confirm password"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
//                 />
//                 {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
//               </div>
//             )}

//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-blue-600 text-white py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
//             >
//               {isLoading ? (
//                 <>
//                   <i className="ri-loader-4-line animate-spin w-5 h-5 flex items-center justify-center"></i>
//                   <span>{isLogin ? 'Signing in...' : 'Creating account...'}</span>
//                 </>
//               ) : (
//                 <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
//               )}
//             </button>

//             {isLogin && (
//               <div className="text-center">
//                 <Link href="#" className="text-blue-600 hover:text-blue-500 transition-colors cursor-pointer">
//                   Forgot your password?
//                 </Link>
//               </div>
//             )}
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-gray-600">
//               {isLogin ? "Don't have an account?" : "Already have an account?"}
//               <button
//                 onClick={toggleMode}
//                 className="ml-2 text-blue-600 hover:text-blue-500 font-semibold transition-colors cursor-pointer"
//               >
//                 {isLogin ? 'Sign up' : 'Sign in'}
//               </button>
//             </p>
//           </div>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">Or continue with</span>
//               </div>
//             </div>

//             <div className="mt-6 grid grid-cols-2 gap-3">
//               <button className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors cursor-pointer">
//                 <i className="ri-google-fill text-red-500 w-5 h-5 flex items-center justify-center"></i>
//                 <span className="text-gray-700">Google</span>
//               </button>
//               <button className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors cursor-pointer">
//                 <i className="ri-apple-fill text-black w-5 h-5 flex items-center justify-center"></i>
//                 <span className="text-gray-700">Apple</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import Link from 'next/link';

type FormDataType = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
};

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<FormDataType>({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  });

  const [errors, setErrors] = useState<Partial<FormDataType>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormDataType> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof FormDataType]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = '/orders';
    }, 2000);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: ''
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="text-3xl font-bold text-gray-900">
            <i className="ri-apple-fill w-12 h-12 flex items-center justify-center mx-auto"></i>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </h2>
          <p className="mt-2 text-gray-600">
            {isLogin ? 'Welcome back!' : 'Join us today'}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>
            )}

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {!isLogin && (
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <i className="ri-loader-4-line animate-spin w-5 h-5 flex items-center justify-center"></i>
                  <span>{isLogin ? 'Signing in...' : 'Creating account...'}</span>
                </>
              ) : (
                <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
              )}
            </button>

            {isLogin && (
              <div className="text-center">
                <Link href="#" className="text-blue-600 hover:text-blue-500 transition-colors">
                  Forgot your password?
                </Link>
              </div>
            )}
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleMode}
                className="ml-2 text-blue-600 hover:text-blue-500 font-semibold transition-colors"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                <i className="ri-google-fill text-red-500 w-5 h-5 flex items-center justify-center"></i>
                <span className="text-gray-700">Google</span>
              </button>
              <button className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                <i className="ri-apple-fill text-black w-5 h-5 flex items-center justify-center"></i>
                <span className="text-gray-700">Apple</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
