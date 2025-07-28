
'use client';

import Link from 'next/link';
import { useCart } from '../hooks/useCart';

export default function ServicesPage() {
  const { getTotalItems } = useCart();

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
                <Link href="/services" className="text-blue-600 font-semibold cursor-pointer">Services</Link>
                <Link href="/support" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Support</Link>
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
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20technology%20services%20team%20working%20in%20modern%20office%20environment%2C%20customer%20support%20representatives%20with%20headsets%2C%20technical%20specialists%20at%20workstations%2C%20clean%20corporate%20atmosphere%2C%20collaborative%20workspace%2C%20high-tech%20service%20center%2C%20professional%20lighting%2C%20modern%20business%20setting&width=1920&height=1080&seq=services-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="text-6xl font-bold text-gray-900 mb-6">
              <i className="ri-apple-fill w-16 h-16 flex items-center justify-center"></i>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Complete
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive technology services designed to enhance your experience and maximize the potential of your devices.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to get the most from your technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-cloud-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Storage</h3>
              <p className="text-gray-600 mb-4">
                Secure, seamless synchronization across all your devices with unlimited storage capacity.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <i className="ri-check-line text-blue-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Unlimited storage space
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-blue-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Auto-sync across devices
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-blue-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Advanced encryption
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">$9.99/mo</span>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Protection</h3>
              <p className="text-gray-600 mb-4">
                Advanced security solutions to protect your data and privacy from cyber threats.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <i className="ri-check-line text-purple-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Real-time threat detection
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-purple-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Identity protection
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-purple-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Secure VPN access
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-600">$14.99/mo</span>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-tools-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Device Setup</h3>
              <p className="text-gray-600 mb-4">
                Professional device configuration and optimization for peak performance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Professional installation
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Data migration
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Performance optimization
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">$199</span>
                <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exclusive services for the ultimate technology experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="h-48 mb-6 rounded-2xl overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Personal%20technology%20concierge%20service%2C%20one-on-one%20consultation%20with%20tech%20expert%2C%20professional%20advisor%20helping%20customer%2C%20premium%20customer%20service%20experience%2C%20modern%20office%20consultation%20room%2C%20personalized%20technology%20guidance%2C%20high-end%20service%20environment&width=600&height=300&seq=concierge&orientation=landscape"
                  alt="Personal Tech Concierge"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Tech Concierge</h3>
              <p className="text-gray-600 mb-4">
                Dedicated personal assistant for all your technology needs, available 24/7.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <i className="ri-check-line text-blue-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  24/7 personal support
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-blue-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Priority service queue
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-blue-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Exclusive access to new products
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">$99/mo</span>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="h-48 mb-6 rounded-2xl overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Enterprise%20technology%20solutions%2C%20business%20meeting%20with%20IT%20professionals%2C%20corporate%20technology%20consultation%2C%20professional%20business%20environment%2C%20team%20collaboration%20on%20tech%20solutions%2C%20modern%20conference%20room%2C%20enterprise%20service%20delivery&width=600&height=300&seq=enterprise&orientation=landscape"
                  alt="Enterprise Solutions"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Solutions</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive technology solutions tailored for businesses of all sizes.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <i className="ri-check-line text-purple-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Custom deployment
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-purple-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Team training programs
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-purple-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Dedicated account manager
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-600">Custom</span>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Service Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$19</div>
                <p className="text-gray-600">Perfect for individuals</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span>Cloud storage (100GB)</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span>Email support</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span>Basic security</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span>Software updates</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                Choose Basic
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$49</div>
                <p className="text-gray-600">Great for professionals</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span>Cloud storage (1TB)</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span>Advanced security</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span>Device optimization</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span>Early access features</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors whitespace-nowrap cursor-pointer">
                Choose Pro
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">$99</div>
                <p className="text-gray-600">For teams & businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span>Unlimited cloud storage</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span>Enterprise security</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span>Account manager</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-4 rounded-full font-semibold hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer">
                Choose Enterprise
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I upgrade or downgrade my service plan?</h3>
              <p className="text-gray-600">You can change your plan anytime through your account dashboard. Changes take effect immediately, and you'll be charged prorated amounts.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What's included in the setup service?</h3>
              <p className="text-gray-600">Our setup service includes device configuration, data migration, app installation, security setup, and personalized training to help you get the most from your device.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Is my data secure with your cloud storage?</h3>
              <p className="text-gray-600">Yes, we use enterprise-grade encryption and security protocols. Your data is encrypted both in transit and at rest, with multiple backup locations for redundancy.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I cancel my subscription anytime?</h3>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time. There are no cancellation fees, and you'll continue to have access to services until the end of your current billing period.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl font-bold text-white mb-4">
            <i className="ri-apple-fill w-12 h-12 flex items-center justify-center mx-auto"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose your service plan and experience the difference our premium support makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              View All Plans
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="text-2xl font-bold mb-4 text-white block">
                <i className="ri-apple-fill w-8 h-8 flex items-center justify-center"></i>
              </Link>
              <p className="text-gray-400 mb-4">
                Innovation that inspires. Technology that transforms.
              </p>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="ri-facebook-fill w-6 h-6 flex items-center justify-center"></i>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="ri-twitter-fill w-6 h-6 flex items-center justify-center"></i>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="ri-instagram-fill w-6 h-6 flex items-center justify-center"></i>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="ri-youtube-fill w-6 h-6 flex items-center justify-center"></i>
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/products" className="hover:text-white transition-colors cursor-pointer">NeoPhone Pro</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors cursor-pointer">UltraBook Air</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors cursor-pointer">AirPods Neo</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors cursor-pointer">Smart Watch</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/support" className="hover:text-white transition-colors cursor-pointer">Customer Service</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors cursor-pointer">Technical Support</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors cursor-pointer">Warranty</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors cursor-pointer">Returns</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Press</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Investors</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Brand Reimagined. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
