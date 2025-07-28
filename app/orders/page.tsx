'use client';

import { useState } from 'react';
import Link from 'next/link';

const mockOrders = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    status: 'delivered',
    total: 1599,
    items: [
      { name: 'NeoPhone Pro', price: 1299, quantity: 1 },
      { name: 'AirPods Neo', price: 299, quantity: 1 }
    ]
  },
  {
    id: 'ORD-002',
    date: '2024-01-10',
    status: 'shipping',
    total: 1899,
    items: [
      { name: 'UltraBook Air', price: 1899, quantity: 1 }
    ]
  },
  {
    id: 'ORD-003',
    date: '2024-01-05',
    status: 'processing',
    total: 578,
    items: [
      { name: 'Smart Watch Pro', price: 499, quantity: 1 },
      { name: 'Wireless Charger', price: 79, quantity: 1 }
    ]
  }
];

export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipping':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // const getStatusIcon = (status) => {
  //   switch (status) {
  //     case 'delivered':
  //       return 'ri-check-double-line';
  //     case 'shipping':
  //       return 'ri-truck-line';
  //     case 'processing':
  //       return 'ri-time-line';
  //     default:
  //       return 'ri-package-line';
  //   }
  // };


  const getStatusColor = (status: string) => {
  switch (status) {
    case 'delivered':
      return 'bg-green-100 text-green-800';
    case 'processing':
      return 'bg-yellow-100 text-yellow-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-pacifico">
                logo
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Products</Link>
                <Link href="/orders" className="text-blue-600 font-semibold cursor-pointer">Orders</Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Services</Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Support</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/cart" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                <i className="ri-shopping-bag-line w-5 h-5 flex items-center justify-center"></i>
              </Link>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <i className="ri-user-line text-white w-5 h-5 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Order History</h1>
          <p className="text-xl text-gray-600">Track and manage your orders</p>
        </div>

        {mockOrders.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <i className="ri-shopping-bag-line text-gray-400 text-6xl mb-4 w-16 h-16 flex items-center justify-center mx-auto"></i>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No orders yet</h3>
            <p className="text-gray-600 mb-6">Start shopping to see your orders here</p>
            <Link href="/products" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Orders List */}
            <div className="space-y-6">
              {mockOrders.map(order => (
                <div
                  key={order.id}
                  className={`bg-white rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    selectedOrder?.id === order.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedOrder(order)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{order.id}</h3>
                      <p className="text-gray-600">{new Date(order.date).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">${order.total.toLocaleString()}</div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        <i className={`${getStatusIcon(order.status)} mr-1 w-4 h-4 flex items-center justify-center`}></i>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-600">{item.name} x{item.quantity}</span>
                        <span className="font-medium">${(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Details */}
            <div className="bg-white rounded-2xl p-6 shadow-lg h-fit">
              {selectedOrder ? (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Order Details</h2>
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(selectedOrder.status)}`}>
                      <i className={`${getStatusIcon(selectedOrder.status)} mr-2 w-4 h-4 flex items-center justify-center`}></i>
                      {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Order Information</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Order ID:</span>
                          <span className="font-medium">{selectedOrder.id}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-medium">{new Date(selectedOrder.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Status:</span>
                          <span className="font-medium">{selectedOrder.status}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Items</h3>
                      <div className="space-y-4">
                        {selectedOrder.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium text-gray-900">{item.name}</h4>
                              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-gray-900">${(item.price * item.quantity).toLocaleString()}</p>
                              <p className="text-sm text-gray-600">${item.price.toLocaleString()} each</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Total</span>
                        <span className="text-xl font-bold text-blue-600">${selectedOrder.total.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer">
                        <i className="ri-truck-line w-5 h-5 flex items-center justify-center"></i>
                        <span>Track Order</span>
                      </button>
                      <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer">
                        <i className="ri-download-line w-5 h-5 flex items-center justify-center"></i>
                        <span>Download Invoice</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <i className="ri-file-list-3-line text-gray-400 text-6xl mb-4 w-16 h-16 flex items-center justify-center mx-auto"></i>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Select an order</h3>
                  <p className="text-gray-600">Choose an order from the list to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
