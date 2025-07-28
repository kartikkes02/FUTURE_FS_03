
// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { useCart } from '../hooks/useCart';

// export default function CheckoutPage() {
//   const { cart, getTotalPrice, clearCart } = useCart();
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [orderComplete, setOrderComplete] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: '',
//     address: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//     cardName: ''
//   });
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.firstName) newErrors.firstName = 'First name is required';
//     if (!formData.lastName) newErrors.lastName = 'Last name is required';
//     if (!formData.address) newErrors.address = 'Address is required';
//     if (!formData.city) newErrors.city = 'City is required';
//     if (!formData.state) newErrors.state = 'State is required';
//     if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
//     if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
//     if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
//     if (!formData.cvv) newErrors.cvv = 'CVV is required';
//     if (!formData.cardName) newErrors.cardName = 'Cardholder name is required';

//     // Basic validation
//     if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }
    
//     if (formData.cardNumber && formData.cardNumber.replace(/\s/g, '').length < 16) {
//       newErrors.cardNumber = 'Card number must be 16 digits';
//     }
    
//     if (formData.cvv && formData.cvv.length < 3) {
//       newErrors.cvv = 'CVV must be 3 digits';
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
    
//     // Clear error when user starts typing
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
    
//     setIsProcessing(true);
    
//     // Simulate payment processing
//     setTimeout(() => {
//       setIsProcessing(false);
//       setOrderComplete(true);
//       clearCart();
//     }, 3000);
//   };

//   if (cart.length === 0 && !orderComplete) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
//         <div className="bg-white rounded-2xl p-12 shadow-lg text-center max-w-md">
//           <i className="ri-shopping-cart-line text-gray-400 text-6xl mb-4 w-16 h-16 flex items-center justify-center mx-auto"></i>
//           <h3 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
//           <p className="text-gray-600 mb-6">Add some products to proceed to checkout</p>
//           <Link href="/products" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
//             Browse Products
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   if (orderComplete) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
//         <div className="bg-white rounded-2xl p-12 shadow-lg text-center max-w-md">
//           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//             <i className="ri-check-line text-green-600 text-4xl w-10 h-10 flex items-center justify-center"></i>
//           </div>
//           <h3 className="text-2xl font-semibold text-gray-900 mb-2">Order Confirmed!</h3>
//           <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been successfully placed.</p>
//           <div className="space-y-4">
//             <Link href="/products" className="block w-full bg-blue-600 text-white py-4 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
//               Continue Shopping
//             </Link>
//             <Link href="/orders" className="block w-full bg-gray-100 text-gray-700 py-4 rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer">
//               View Orders
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//       {/* Header */}
//       <header className="bg-white/80 backdrop-blur-md border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <Link href="/" className="text-2xl font-bold text-gray-900">
//               <i className="ri-apple-fill w-8 h-8 flex items-center justify-center"></i>
//             </Link>
//             <div className="flex items-center space-x-4">
//               <span className="text-gray-600">Secure Checkout</span>
//               <i className="ri-shield-check-line text-green-500 w-5 h-5 flex items-center justify-center"></i>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
//           <p className="text-xl text-gray-600">Complete your purchase</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Checkout Form */}
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Contact Information */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Email address"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className={`${errors.email ? 'border-red-500' : 'border-gray-300'} w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                     />
//                     {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                   </div>
//                 </div>
//               </div>

//               {/* Shipping Address */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Address</h3>
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <input
//                         type="text"
//                         name="firstName"
//                         placeholder="First name"
//                         value={formData.firstName}
//                         onChange={handleInputChange}
//                         className={`${errors.firstName ? 'border-red-500' : 'border-gray-300'} w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                       />
//                       {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
//                     </div>
//                     <div>
//                       <input
//                         type="text"
//                         name="lastName"
//                         placeholder="Last name"
//                         value={formData.lastName}
//                         onChange={handleInputChange}
//                         className={`${errors.lastName ? 'border-red-500' : 'border-gray-300'} w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                       />
//                       {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
//                     </div>
//                   </div>
                  
//                   <div>
//                     <input
//                       type="text"
//                       name="address"
//                       placeholder="Address"
//                       value={formData.address}
//                       onChange={handleInputChange}
//                       className={`${errors.address ? 'border-red-500' : 'border-gray-300'} w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                     />
//                     {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//                   </div>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div>
//                       <input
//                         type="text"
//                         name="city"
//                         placeholder="City"
//                         value={formData.city}
//                         onChange={handleInputChange}
//                         className={`${errors.city ? 'border-red-500' : 'border-gray-300'} w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                       />
//                       {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
//                     </div>
//                     <div>
//                       <input
//                         type="text"
//                         name="state"
//                         placeholder="State"
//                         value={formData.state}
//                         onChange={handleInputChange}
//                         className={`${errors.state ? 'border-red-500' : 'border-gray-300'} w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                       />
//                       {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
//                     </div>
//                     <div>
//                       <input
//                         type="text"
//                         name="zipCode"
//                         placeholder="ZIP Code"
//                         value={formData.zipCode}
//                         onChange={handleInputChange}
//                         className={`${errors.zipCode ? 'border-red-500' : 'border-gray-300'} w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                       />
//                       {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Payment Information */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <input
//                       type="text"
//                       name="cardNumber"
//                       placeholder="Card number"
//                       value={formData.cardNumber}
//                       onChange={handleInputChange}
//                       className={`${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                     />
//                     {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
//                   </div>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <input
//                         type="text"
//                         name="expiryDate"
//                         placeholder="MM/YY"
//                         value={formData.expiryDate}
//                         onChange={handleInputChange}
//                         className={`${errors.expiryDate ? 'border-red-500' : 'border-gray-300'} w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                       />
//                       {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
//                     </div>
//                     <div>
//                       <input
//                         type="text"
//                         name="cvv"
//                         placeholder="CVV"
//                         value={formData.cvv}
//                         onChange={handleInputChange}
//                         className={`${errors.cvv ? 'border-red-500' : 'border-gray-300'} w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                       />
//                       {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
//                     </div>
//                   </div>
                  
//                   <div>
//                     <input
//                       type="text"
//                       name="cardName"
//                       placeholder="Cardholder name"
//                       value={formData.cardName}
//                       onChange={handleInputChange}
//                       className={`${errors.cardName ? 'border-red-500' : 'border-gray-300'} w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                     />
//                     {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>}
//                   </div>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isProcessing}
//                 className="w-full bg-blue-600 text-white py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
//               >
//                 {isProcessing ? (
//                   <>
//                     <i className="ri-loader-4-line animate-spin w-5 h-5 flex items-center justify-center"></i>
//                     <span>Processing Payment...</span>
//                   </>
//                 ) : (
//                   <>
//                     <i className="ri-secure-payment-line w-5 h-5 flex items-center justify-center"></i>
//                     <span>Complete Order</span>
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>

//           {/* Order Summary */}
//           <div className="bg-white rounded-2xl p-6 shadow-lg h-fit">
//             <h3 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h3>
            
//             <div className="space-y-4 mb-6">
//               {cart.map(item => (
//                 <div key={item.id} className="flex items-center space-x-4">
//                   <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
//                     <img 
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-full object-cover object-top"
//                     />
//                   </div>
//                   <div className="flex-1">
//                     <h4 className="font-medium text-gray-900">{item.name}</h4>
//                     <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="font-semibold text-gray-900">
//                       ${(item.price * item.quantity).toLocaleString()}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="border-t border-gray-200 pt-6 space-y-4">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Subtotal</span>
//                 <span className="font-semibold">${getTotalPrice().toLocaleString()}</span>
//               </div>
              
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Shipping</span>
//                 <span className="font-semibold">Free</span>
//               </div>
              
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Tax</span>
//                 <span className="font-semibold">${(getTotalPrice() * 0.08).toLocaleString()}</span>
//               </div>
              
//               <div className="border-t border-gray-200 pt-4">
//                 <div className="flex justify-between">
//                   <span className="text-xl font-bold text-gray-900">Total</span>
//                   <span className="text-xl font-bold text-blue-600">
//                     ${(getTotalPrice() * 1.08).toLocaleString()}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';

type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
};

export default function CheckoutPage() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.address) newErrors.address = 'Address is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed to checkout logic
      console.log('Form submitted', formData);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">First Name</label>
          <input
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Last Name</label>
          <input
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Address</label>
          <input
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
}

