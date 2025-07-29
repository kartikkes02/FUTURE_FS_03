'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../hooks/useCart';

// Define the Product type
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'NeoPhone Pro',
    price: 1299,
    category: 'smartphones',
    image: 'https://readdy.ai/api/search-image?query=Premium%20smartphone%20with%20sleek%20design%2C%20metallic%20finish%2C%20edge-to-edge%20display%2C%20minimalist%20aesthetic%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20modern%20technology%20device%2C%20high-end%20mobile%20phone%2C%20sophisticated%20design%20elements&width=400&height=300&seq=product1&orientation=landscape',
    description: 'The most advanced smartphone with AI-powered features',
    features: ['6.7" Super Retina Display', '256GB Storage', 'Triple Camera System', '5G Connectivity']
  },
  {
    id: 2,
    name: 'UltraBook Air',
    price: 1899,
    category: 'laptops',
    image: 'https://readdy.ai/api/search-image?query=Ultra-thin%20laptop%20computer%20with%20premium%20aluminum%20design%2C%20open%20display%20showing%20vibrant%20screen%2C%20modern%20workspace%20setup%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20sleek%20portable%20device%2C%20high-end%20technology%20aesthetic&width=400&height=300&seq=product2&orientation=landscape',
    description: 'Incredibly thin laptop with unmatched performance',
    features: ['M2 Chip', '16GB RAM', '512GB SSD', '18-hour battery life']
  },
  {
    id: 3,
    name: 'AirPods Neo',
    price: 299,
    category: 'audio',
    image: 'https://readdy.ai/api/search-image?query=Smart%20wireless%20earbuds%20in%20premium%20charging%20case%2C%20modern%20audio%20device%2C%20sleek%20minimalist%20design%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high-end%20wireless%20technology%2C%20sophisticated%20audio%20equipment&width=400&height=300&seq=product3&orientation=landscape',
    description: 'Revolutionary wireless earbuds with spatial audio',
    features: ['Spatial Audio', 'Active Noise Cancellation', '30-hour battery', 'Sweat resistant']
  },
  {
    id: 4,
    name: 'Smart Watch Pro',
    price: 499,
    category: 'wearables',
    image: 'https://readdy.ai/api/search-image?query=Modern%20smartwatch%20with%20premium%20metal%20band%2C%20vibrant%20display%20screen%2C%20sleek%20wearable%20technology%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high-end%20fitness%20tracker%2C%20sophisticated%20wearable%20device&width=400&height=300&seq=product4&orientation=landscape',
    description: 'Advanced smartwatch with health monitoring',
    features: ['Always-On Display', 'ECG Monitoring', 'GPS Tracking', 'Waterproof Design']
  },
  {
    id: 5,
    name: 'Wireless Charger',
    price: 79,
    category: 'accessories',
    image: 'https://readdy.ai/api/search-image?query=Wireless%20charging%20pad%20with%20modern%20design%2C%20premium%20materials%2C%20sleek%20charging%20station%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high-end%20technology%20accessory%2C%20minimalist%20wireless%20charger&width=400&height=300&seq=product5&orientation=landscape',
    description: 'Fast wireless charging for all your devices',
    features: ['15W Fast Charging', 'Universal Compatibility', 'LED Indicators', 'Non-slip Surface']
  },
  {
    id: 6,
    name: 'Tablet Pro',
    price: 899,
    category: 'tablets',
    image: 'https://readdy.ai/api/search-image?query=Professional%20tablet%20computer%20with%20stylus%20pen%2C%20large%20touchscreen%20display%2C%20premium%20aluminum%20construction%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20high-end%20mobile%20device%2C%20sophisticated%20tablet%20design&width=400&height=300&seq=product6&orientation=landscape',
    description: 'Professional tablet for creativity and productivity',
    features: ['12.9" Liquid Retina Display', 'Apple Pencil Support', '1TB Storage', 'Face ID Security']
  }
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [sortBy, setSortBy] = useState('name');
  const { addToCart } = useCart();

  const categories = ['all', 'smartphones', 'laptops', 'audio', 'wearables', 'accessories', 'tablets'];

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, sortBy]);

  // Fixed: Added Product type annotation to the parameter
  const handleAddToCart = (product: Product) => {
    addToCart(product);
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
                <Link href="/products" className="text-blue-600 font-semibold cursor-pointer">Products</Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Innovation</Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Services</Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Support</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/cart" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                <i className="ri-shopping-bag-line w-5 h-5 flex items-center justify-center"></i>
              </Link>
              <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Products</h1>
          <p className="text-xl text-gray-600">Discover our complete range of innovative technology</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1">
              <div className="relative">
                <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center"></i>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full capitalize transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-full px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <i className="ri-arrow-down-s-line absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center pointer-events-none"></i>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 mb-6 rounded-xl overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-3">{product.description}</p>
                
                <div className="space-y-1 mb-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <i className="ri-check-line text-green-500 mr-2 w-4 h-4 flex items-center justify-center"></i>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">${product.price.toLocaleString()}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-2 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-shopping-cart-line w-4 h-4 flex items-center justify-center"></i>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-search-line text-gray-400 text-6xl mb-4 w-16 h-16 flex items-center justify-center mx-auto"></i>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
