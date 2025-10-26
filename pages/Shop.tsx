import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product, ProductOptions } from '../types';

const OptionButton: React.FC<{ label: string; selected: boolean; onClick: () => void }> = ({ label, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 border rounded-full transition-colors duration-300 text-sm ${
      selected 
        ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white' 
        : 'bg-transparent text-gray-500 border-gray-300 hover:border-black hover:text-black dark:text-gray-400 dark:border-gray-600 dark:hover:border-white dark:hover:text-white'
    }`}
  >
    {label}
  </button>
);

const QuantitySelector: React.FC<{ quantity: number; setQuantity: (q: number) => void }> = ({ quantity, setQuantity }) => (
    <div className="flex items-center border border-gray-300 rounded-full dark:border-gray-600">
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">-</button>
        <span className="px-4 py-2 text-black dark:text-white">{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">+</button>
    </div>
);


const Shop: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [options, setOptions] = useState<ProductOptions>({
    size: 'M',
    quantity: 1,
    color: 'Black',
  });
  const [isRequested, setIsRequested] = useState(false);
  const [specialRequest, setSpecialRequest] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsRequested(false);
    setOptions({ size: 'M', quantity: 1, color: 'Black' });
    setSpecialRequest('');
    setEmail('');
    setError('');
  };

  const handleRequestItem = () => {
    setError('');
    if (!email.trim()) {
        setError('Email is required.');
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setError('Please enter a valid email address.');
        return;
    }

    const recipient = 'tuanminhdoan20@gmail.com';
    const subject = `Item Request: ${selectedProduct?.name}`;
    const body = `
A new item has been requested from your shop!

--------------------------------
Product Details
--------------------------------
Product: ${selectedProduct?.name}
Size: ${options.size}
Color: ${options.color}
Quantity: ${options.quantity}
Requester's Email: ${email}
--------------------------------

Special Request:
${specialRequest || 'None'}
    `;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.trim())}`;
    window.location.href = mailtoLink;
    setIsRequested(true);
  };
  
  const handleUpdateOption = <K extends keyof ProductOptions>(key: K, value: ProductOptions[K]) => {
      setOptions(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="relative">
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group cursor-pointer" onClick={() => handleSelectProduct(product)}>
            <div className="overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 aspect-square rounded-3xl">
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="mt-4 text-sm font-medium tracking-wider uppercase dark:text-gray-300">{product.name}</h3>
          </div>
        ))}
      </div>
      
      {/* Product Detail Overlay */}
      <div className={`fixed inset-0 z-20 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${selectedProduct ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setSelectedProduct(null)} />
      
      <div className={`fixed top-0 right-0 h-full w-full max-w-lg bg-white dark:bg-gray-900 z-30 transition-transform duration-500 ease-in-out transform ${selectedProduct ? 'translate-x-0' : 'translate-x-full'} rounded-l-3xl`}>
        {selectedProduct && (
          <div className="flex flex-col h-full">
            <div className="relative flex-shrink-0 w-full h-1/2 bg-gray-100 dark:bg-gray-800">
                <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-full object-cover"/>
                <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 text-gray-500 bg-white/50 rounded-full p-2 hover:bg-black hover:text-white dark:text-gray-400 dark:bg-gray-800/50 dark:hover:bg-white dark:hover:text-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
            <div className="flex-grow p-8 flex flex-col justify-between overflow-y-auto text-black dark:text-white">
                <div>
                    <h2 className="text-3xl font-bold tracking-wider">{selectedProduct.name}</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{selectedProduct.description}</p>
                    <div className="mt-8 space-y-6">
                        {/* Email */}
                        <div>
                            <h4 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">Email*</h4>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full bg-transparent border border-gray-300 rounded-2xl p-3 text-black dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 transition-shadow"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        {/* Size */}
                        <div>
                            <h4 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">Size</h4>
                            <div className="flex space-x-2">
                                <OptionButton label="S" selected={options.size === 'S'} onClick={() => handleUpdateOption('size', 'S')} />
                                <OptionButton label="M" selected={options.size === 'M'} onClick={() => handleUpdateOption('size', 'M')} />
                                <OptionButton label="L" selected={options.size === 'L'} onClick={() => handleUpdateOption('size', 'L')} />
                            </div>
                        </div>
                        {/* Color */}
                         <div>
                            <h4 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">Color</h4>
                            <div className="flex space-x-2">
                                <OptionButton label="Black" selected={options.color === 'Black'} onClick={() => handleUpdateOption('color', 'Black')} />
                                <OptionButton label="White" selected={options.color === 'White'} onClick={() => handleUpdateOption('color', 'White')} />
                            </div>
                        </div>
                        {/* Quantity */}
                         <div>
                            <h4 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">Quantity</h4>
                            <QuantitySelector quantity={options.quantity} setQuantity={(q) => handleUpdateOption('quantity', q)} />
                        </div>
                         {/* Special Request */}
                         <div>
                            <h4 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">Special Request</h4>
                            <textarea
                                rows={3}
                                value={specialRequest}
                                onChange={(e) => setSpecialRequest(e.target.value)}
                                className="w-full bg-transparent border border-gray-300 rounded-2xl p-3 text-black dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 transition-shadow"
                                placeholder="e.g., gift wrapping, specific design placement..."
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <p className="text-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                      Please note: We currently only serve customers in the Montreal area.
                    </p>
                    {error && <p className="text-center text-xs text-red-500 mb-2">{error}</p>}
                     {isRequested ? (
                         <div className="w-full text-center py-4 bg-green-50 border border-green-200 text-green-700 rounded-2xl dark:bg-green-900/50 dark:border-green-700 dark:text-green-300">
                            Request Sent. Check your email client.
                        </div>
                     ) : (
                        <button onClick={handleRequestItem} className="w-full bg-black text-white font-bold py-4 rounded-full hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors duration-300">
                            Request Item
                        </button>
                     )}
                </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Shop;