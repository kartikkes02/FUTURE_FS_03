'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../hooks/useCart';

// Define the form data interface
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function SupportPage() {
  const { getTotalItems } = useCart();
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Fixed: Added proper type annotation for the event parameter
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Fixed: Added proper type annotation for the event parameter
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                <i className="ri-apple-fill w-8 h-8 flex items-center justify-center"></i>
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Products</Link>
                <Link href="/innovation" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Innovation</Link>
                <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Services</Link>
                <Link href="/support" className="text-blue-600 font-semibold cursor-pointer">Support</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                <i className="ri-search-line w-5 h-5 flex items-center justify-center"></i>
              </button>
              <Link href="/cart" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer relative">
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20customer%20support%20center%20with%20friendly%20representatives%20helping%20customers%2C%20modern%20help%20desk%20environment%2C%20technical%20support%20team%20at%20workstations%2C%20clean%20corporate%20office%20space%2C%20customer%20service%20excellence%2C%20professional%20assistance%2C%20modern%20communication%20technology%2C%20collaborative%20support%20environment&width=1920&height=1080&seq=support-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Expert
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Support
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Get the help you need, when you need it. Our dedicated support team is here to ensure you have the best experience with our products.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the support option that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-message-3-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-6">
                Get instant help from our support team. Available 24/7 for immediate assistance.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                Start Chat
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-phone-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Phone Support</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our technical experts for personalized assistance.
              </p>
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer">
                Call Now
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-calendar-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule Call</h3>
              <p className="text-gray-600 mb-6">
                Book a convenient time for a detailed consultation with our specialists.
              </p>
              <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer">
                Book Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Center */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Support Center
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers, contact support, and access helpful resources
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('contact')}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
                  activeTab === 'contact'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Contact Us
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
                  activeTab === 'faq'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
                  activeTab === 'resources'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Resources
              </button>
            </div>

            <div className="p-8">
              {activeTab === 'contact' && (
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'faq' && (
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I set up my new device?</h3>
                    <p className="text-gray-600">Our step-by-step setup guide will walk you through the initial configuration. You can also schedule a free setup consultation with our experts.</p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">What is your warranty policy?</h3>
                    <p className="text-gray-600">All products come with a standard 2-year warranty covering manufacturing defects. Extended warranty options are available for purchase.</p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">How can I track my order?</h3>
                    <p className="text-gray-600">You can track your order status in your account dashboard or use the tracking number sent to your email after purchase.</p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer international shipping?</h3>
                    <p className="text-gray-600">Yes, we ship to over 200 countries worldwide. Shipping costs and delivery times vary by location.</p>
                  </div>
                </div>
              )}

              {activeTab === 'resources' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <i className="ri-book-open-line text-white w-6 h-6 flex items-center justify-center"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">User Manuals</h3>
                    <p className="text-gray-600 mb-4">Comprehensive guides for all our products with detailed instructions and troubleshooting tips.</p>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">
                      Browse Manuals →
                    </button>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <i className="ri-download-line text-white w-6 h-6 flex items-center justify-center"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Software Downloads</h3>
                    <p className="text-gray-600 mb-4">Get the latest software updates, drivers, and companion apps for your devices.</p>
                    <button className="text-purple-600 hover:text-purple-700 font-semibold cursor-pointer">
                      Download Center →
                    </button>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                      <i className="ri-video-line text-white w-6 h-6 flex items-center justify-center"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Video Tutorials</h3>
                    <p className="text-gray-600 mb-4">Step-by-step video guides covering setup, features, and advanced usage techniques.</p>
                    <button className="text-green-600 hover:text-green-700 font-semibold cursor-pointer">
                      Watch Videos →
                    </button>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                      <i className="ri-community-line text-white w-6 h-6 flex items-center justify-center"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Forum</h3>
                    <p className="text-gray-600 mb-4">Connect with other users, share tips, and get help from our community of experts.</p>
                    <button className="text-orange-600 hover:text-orange-700 font-semibold cursor-pointer">
                      Join Community →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Status Page */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              System Status
            </h2>
            <p className="text-xl text-gray-600">
              Real-time status of our services and systems
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                <i className="ri-checkbox-circle-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">All Systems Operational</h3>
            <p className="text-gray-600 text-center">All our services are running smoothly with no reported issues.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">Cloud Services</h4>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <p className="text-sm text-gray-600">Operational - 99.9% uptime</p>
        
