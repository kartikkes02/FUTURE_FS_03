
// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { useCart } from '../hooks/useCart';

// export default function CartPage() {
//   const { cart, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();
//   const [isCheckingOut, setIsCheckingOut] = useState(false);

//   const handleQuantityChange = (id, newQuantity) => {
//     if (newQuantity === 0) {
//       removeFromCart(id);
//     } else {
//       updateQuantity(id, newQuantity);
//     }
//   };

//   const handleCheckout = () => {
//     setIsCheckingOut(true);
//     // Simulate checkout process
//     setTimeout(() => {
//       setIsCheckingOut(false);
//       // Redirect to checkout page
//       window.location.href = '/checkout';
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//       {/* Header */}
//       <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center space-x-8">
//               <Link href="/" className="text-2xl font-bold text-gray-900">
//                 <i className="ri-apple-fill w-8 h-8 flex items-center justify-center"></i>
//               </Link>
//               <nav className="hidden md:flex space-x-8">
//                 <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Products</Link>
//                 <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Innovation</Link>
//                 <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Services</Link>
//                 <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Support</Link>
//               </nav>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Link href="/cart" className="text-blue-600 cursor-pointer relative">
//                 <i className="ri-shopping-bag-line w-5 h-5 flex items-center justify-center"></i>
//                 {getTotalItems() > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                     {getTotalItems()}
//                   </span>
//                 )}
//               </Link>
//               <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
//                 Sign In
//               </Link>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
//           <p className="text-xl text-gray-600">Review your items before checkout</p>
//         </div>

//         {cart.length === 0 ? (
//           <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
//             <i className="ri-shopping-cart-line text-gray-400 text-6xl mb-4 w-16 h-16 flex items-center justify-center mx-auto"></i>
//             <h3 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
//             <p className="text-gray-600 mb-6">Add some products to get started</p>
//             <Link href="/products" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
//               Browse Products
//             </Link>
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {/* Cart Items */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg">
//               <h2 className="text-2xl font-semibold text-gray-900 mb-6">Cart Items ({getTotalItems()})</h2>

//               <div className="space-y-6">
//                 {cart.map(item => (
//                   <div key={item.id} className="flex items-center space-x-4 border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
//                     <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-full h-full object-cover object-top"
//                       />
//                     </div>

//                     <div className="flex-1">
//                       <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
//                       <p className="text-gray-600 text-sm">{item.description}</p>
//                       <div className="text-xl font-bold text-blue-600 mt-2">${item.price.toLocaleString()}</div>
//                     </div>

//                     <div className="flex items-center space-x-3">
//                       <button
//                         onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
//                         className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
//                       >
//                         <i className="ri-subtract-line w-4 h-4 flex items-center justify-center"></i>
//                       </button>

//                       <span className="w-12 text-center font-semibold">{item.quantity}</span>

//                       <button
//                         onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
//                         className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
//                       >
//                         <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
//                       </button>
//                     </div>

//                     <div className="text-right">
//                       <div className="text-lg font-semibold text-gray-900">
//                         ${(item.price * item.quantity).toLocaleString()}
//                       </div>
//                       <button
//                         onClick={() => removeFromCart(item.id)}
//                         className="text-red-500 hover:text-red-700 transition-colors mt-2 cursor-pointer"
//                       >
//                         <i className="ri-delete-bin-line w-5 h-5 flex items-center justify-center"></i>
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Order Summary */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg">
//               <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Summary</h2>

//               <div className="space-y-4">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Subtotal</span>
//                   <span className="font-semibold">${getTotalPrice().toLocaleString()}</span>
//                 </div>

//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Shipping</span>
//                   <span className="font-semibold">Free</span>
//                 </div>

//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Tax</span>
//                   <span className="font-semibold">${(getTotalPrice() * 0.08).toLocaleString()}</span>
//                 </div>

//                 <div className="border-t border-gray-200 pt-4">
//                   <div className="flex justify-between">
//                     <span className="text-xl font-bold text-gray-900">Total</span>
//                     <span className="text-xl font-bold text-blue-600">
//                       ${(getTotalPrice() * 1.08).toLocaleString()}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8 space-y-4">
//                 <button
//                   onClick={handleCheckout}
//                   disabled={isCheckingOut}
//                   className="w-full bg-blue-600 text-white py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
//                 >
//                   {isCheckingOut ? (
//                     <>
//                       <i className="ri-loader-4-line animate-spin w-5 h-5 flex items-center justify-center"></i>
//                       <span>Processing...</span>
//                     </>
//                   ) : (
//                     <>
//                       <i className="ri-secure-payment-line w-5 h-5 flex items-center justify-center"></i>
//                       <span>Proceed to Checkout</span>
//                     </>
//                   )}
//                 </button>

//                 <Link href="/products" className="w-full bg-gray-100 text-gray-700 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer">
//                   <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center"></i>
//                   <span>Continue Shopping</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../hooks/useCart';

// ✅ Type definition for cart items
type CartItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
};

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      window.location.href = '/checkout';
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                <i className="ri-apple-fill w-8 h-8 flex items-center justify-center"></i>
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Products</Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Innovation</Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Services</Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Support</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/cart" className="text-blue-600 cursor-pointer relative">
                <i className="ri-shopping-bag-line w-5 h-5 flex items-center justify-center"></i>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
              <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-xl text-gray-600">Review your items before checkout</p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <i className="ri-shopping-cart-line text-gray-400 text-6xl mb-4 w-16 h-16 flex items-center justify-center mx-auto"></i>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-600 mb-6">Add some products to get started</p>
            <Link href="/products" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Cart Items ({getTotalItems()})</h2>

              <div className="space-y-6">
                {/* ✅ FIXED: Added type annotation for item */}
                {cart.map((item: CartItem) => (
                  <div key={item.id} className="flex items-center space-x-4 border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                      <div className="text-xl font-bold text-blue-600 mt-2">${item.price.toLocaleString()}</div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
                      >
                        <i className="ri-subtract-line w-4 h-4 flex items-center justify-center"></i>
                      </button>

                      <span className="w-12 text-center font-semibold">{item.quantity}</span>

                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
                      >
                        <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
                      </button>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-900">
                        ${(item.price * item.quantity).toLocaleString()}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors mt-2 cursor-pointer"
                      >
                        <i className="ri-delete-bin-line w-5 h-5 flex items-center justify-center"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${getTotalPrice().toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">Free</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">${(getTotalPrice() * 0.08).toLocaleString()}</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold text-gray-900">Total</span>
                    <span className="text-xl font-bold text-blue-600">
                      ${(getTotalPrice() * 1.08).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-blue-600 text-white py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
                >
                  {isCheckingOut ? (
                    <>
                      <i className="ri-loader-4-line animate-spin w-5 h-5 flex items-center justify-center"></i>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <i className="ri-secure-payment-line w-5 h-5 flex items-center justify-center"></i>
                      <span>Proceed to Checkout</span>
                    </>
                  )}
                </button>

                <Link href="/products" className="w-full bg-gray-100 text-gray-700 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer">
                  <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center"></i>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
