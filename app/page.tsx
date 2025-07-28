
'use client';

import Link from 'next/link';
import { useCart } from './hooks/useCart';

export default function Home() {
  const { getTotalItems } = useCart();

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-gray-900">
                <i className="ri-apple-fill w-8 h-8 flex items-center justify-center"></i>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Products</Link>
                <Link href="/innovation" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Innovation</Link>
                <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Services</Link>
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
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20minimalist%20tech%20workspace%20with%20sleek%20devices%2C%20clean%20white%20surfaces%2C%20soft%20natural%20lighting%2C%20contemporary%20design%20elements%2C%20premium%20materials%2C%20sophisticated%20atmosphere%2C%20product%20photography%20style%2C%20high-end%20technology%20aesthetic%2C%20clean%20background%20with%20subtle%20gradients%20from%20white%20to%20light%20blue&width=1920&height=1080&seq=hero1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Think
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Beyond
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Experience the future of technology with our revolutionary products that redefine innovation and seamlessly integrate into your digital lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer text-center">
                Explore Products
              </Link>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap cursor-pointer">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Revolutionary Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest innovations that push the boundaries of what's possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 mb-6 rounded-2xl overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Premium%20smartphone%20with%20sleek%20design%2C%20metallic%20finish%2C%20edge-to-edge%20display%2C%20minimalist%20aesthetic%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20modern%20technology%20device%2C%20high-end%20mobile%20phone%2C%20sophisticated%20design%20elements&width=400&height=300&seq=product1&orientation=landscape"
                    alt="NeoPhone Pro"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">NeoPhone Pro</h3>
                <p className="text-gray-600 mb-4">The most advanced smartphone with AI-powered features</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">$1,299</span>
                  <Link href="/products" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 mb-6 rounded-2xl overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Ultra-thin%20laptop%20computer%20with%20premium%20aluminum%20design%2C%20open%20display%20showing%20vibrant%20screen%2C%20modern%20workspace%20setup%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20sleek%20portable%20device%2C%20high-end%20technology%20aesthetic&width=400&height=300&seq=product2&orientation=landscape"
                    alt="UltraBook Air"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">UltraBook Air</h3>
                <p className="text-gray-600 mb-4">Incredibly thin laptop with unmatched performance</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">$1,899</span>
                  <Link href="/products" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 mb-6 rounded-2xl overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Smart%20wireless%20earbuds%20in%20premium%20charging%20case%2C%20modern%20audio%20device%2C%20sleek%20minimalist%20design%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high-end%20wireless%20technology%2C%20sophisticated%20audio%20equipment&width=400&height=300&seq=product3&orientation=landscape"
                    alt="AirPods Neo"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AirPods Neo</h3>
                <p className="text-gray-600 mb-4">Revolutionary wireless earbuds with spatial audio</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">$299</span>
                  <Link href="/products" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors whitespace-nowrap">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Innovation That
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Inspires
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're committed to creating technology that not only meets today's needs but anticipates tomorrow's possibilities. Every product is designed with precision, crafted with care, and built to last.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50M+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                  <div className="text-gray-600">Awards Won</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20technology%20innovation%20concept%2C%20futuristic%20workspace%20with%20holographic%20displays%2C%20advanced%20computing%20interfaces%2C%20sleek%20design%20elements%2C%20professional%20environment%2C%20clean%20aesthetic%2C%20high-tech%20innovation%20lab%2C%20cutting-edge%20technology%20visualization&width=600&height=400&seq=innovation1&orientation=landscape"
                  alt="Innovation"
                  className="w-full h-80 object-cover object-top rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than just products, we provide a comprehensive suite of services to enhance your experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="ri-cloud-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Storage</h3>
              <p className="text-gray-600">Secure, seamless synchronization across all your devices</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="ri-shield-check-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security</h3>
              <p className="text-gray-600">Advanced encryption and privacy protection built-in</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="ri-customer-service-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">24/7 expert support whenever you need assistance</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="ri-refresh-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Updates</h3>
              <p className="text-gray-600">Regular software updates with new features and improvements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest updates on new products, features, and innovations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4 text-white">
                <i className="ri-apple-fill w-8 h-8 flex items-center justify-center"></i>
              </div>
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
