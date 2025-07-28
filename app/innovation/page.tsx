
'use client';

import Link from 'next/link';
import { useCart } from '../hooks/useCart';

export default function InnovationPage() {
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
                <Link href="/innovation" className="text-blue-600 font-semibold cursor-pointer">Innovation</Link>
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
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Futuristic%20innovation%20laboratory%20with%20holographic%20displays%2C%20advanced%20technology%20interfaces%2C%20modern%20research%20facility%2C%20scientists%20working%20on%20cutting-edge%20projects%2C%20clean%20white%20and%20blue%20environments%2C%20high-tech%20equipment%2C%20innovative%20workspace%20design%2C%20professional%20lighting%2C%20sophisticated%20technology%20atmosphere&width=1920&height=1080&seq=innovation-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Innovation
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Lab
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Where breakthrough ideas become reality. Our innovation lab is the heart of technological advancement, pushing the boundaries of what's possible.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Research Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exploring the frontiers of technology across multiple disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-brain-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Artificial Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Developing next-generation AI systems that understand, learn, and adapt to human needs with unprecedented intelligence.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-blue-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Machine Learning Algorithms
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-blue-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Natural Language Processing
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-blue-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Computer Vision
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-cpu-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Computing</h3>
              <p className="text-gray-600 mb-4">
                Pioneering quantum technologies that will revolutionize computing power and solve complex problems.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-purple-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Quantum Processors
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-purple-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Quantum Algorithms
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-purple-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Quantum Security
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-leaf-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainable Tech</h3>
              <p className="text-gray-600 mb-4">
                Creating environmentally conscious technologies that reduce carbon footprint while maintaining performance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Energy Efficient Designs
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Recyclable Materials
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Renewable Energy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Innovation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach to turning ideas into breakthrough products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-lightbulb-line text-white w-10 h-10 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ideation</h3>
              <p className="text-gray-600">Brainstorming and concept development with our research teams</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-flask-line text-white w-10 h-10 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Research</h3>
              <p className="text-gray-600">Deep technical research and feasibility analysis</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-hammer-line text-white w-10 h-10 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prototyping</h3>
              <p className="text-gray-600">Building and testing functional prototypes</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-rocket-line text-white w-10 h-10 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-600">Bringing refined products to market</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Current Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Peek into our active research and development initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8">
              <div className="h-48 mb-6 rounded-2xl overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Advanced%20neural%20network%20visualization%20with%20glowing%20connections%2C%20futuristic%20AI%20brain%20interface%2C%20digital%20synapses%2C%20holographic%20neural%20pathways%2C%20high-tech%20laboratory%20setting%2C%20blue%20and%20purple%20lighting%2C%20sophisticated%20technology%20display%2C%20modern%20research%20environment&width=600&height=300&seq=project1&orientation=landscape"
                  alt="Neural Interface"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Neural Interface Technology</h3>
              <p className="text-gray-600 mb-4">
                Developing brain-computer interfaces that enable direct neural control of digital devices.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-600 font-semibold">Progress: 75%</span>
                <span className="text-sm text-gray-500">Expected: 2025</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-8">
              <div className="h-48 mb-6 rounded-2xl overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Holographic%20display%20technology%20with%20floating%203D%20projections%2C%20advanced%20hologram%20interface%2C%20futuristic%20workspace%20with%20transparent%20screens%2C%20cutting-edge%20visualization%20technology%2C%20modern%20laboratory%20environment%2C%20clean%20professional%20setting%2C%20high-tech%20innovation&width=600&height=300&seq=project2&orientation=landscape"
                  alt="Holographic Display"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Holographic Displays</h3>
              <p className="text-gray-600 mb-4">
                Creating immersive 3D holographic displays for next-generation user interfaces.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-600 font-semibold">Progress: 60%</span>
                <span className="text-sm text-gray-500">Expected: 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Innovation Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the brilliant minds behind our groundbreaking technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="ri-user-line text-white w-12 h-12 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Sarah Chen</h3>
              <p className="text-blue-600 font-semibold mb-2">Chief Innovation Officer</p>
              <p className="text-gray-600">Leading AI research and quantum computing initiatives</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="ri-user-line text-white w-12 h-12 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Marcus Rodriguez</h3>
              <p className="text-purple-600 font-semibold mb-2">Head of Hardware Innovation</p>
              <p className="text-gray-600">Pioneering next-generation processor and device technologies</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="ri-user-line text-white w-12 h-12 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Emily Watson</h3>
              <p className="text-green-600 font-semibold mb-2">Sustainability Director</p>
              <p className="text-gray-600">Developing eco-friendly technologies and sustainable practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join Our Innovation Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of the future. Explore career opportunities in our innovation lab.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Research Partnerships
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
