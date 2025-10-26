import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const Shop: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [specialRequest, setSpecialRequest] = useState('');

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1); // Reset form state
    setSpecialRequest(''); // Reset form state
  };

  const handleClosePanel = () => {
    setSelectedProduct(null);
  };

  const handleRequest = () => {
    if (!selectedProduct) return;
    const recipient = 'contact@futuristicartistry.com';
    const subject = `Order Request: ${selectedProduct.name}`;
    const body = `
Hello,

I would like to place an order for the following item:

Product: ${selectedProduct.name}
Quantity: ${quantity}

Special Request:
${specialRequest || 'None'}

Please let me know the next steps.

Thank you.
    `;
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.trim())}`;
    window.location.href = mailtoLink;
    handleClosePanel();
  };

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-wider dark:text-gray-100">Our Collection</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our curated selection of futuristic furniture and art, designed to inspire and transform your space.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map(product => (
          <div 
            key={product.id} 
            className="group cursor-pointer"
            onClick={() => handleSelectProduct(product)}
          >
            <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="mt-4 text-left">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">{product.name}</h3>
              <p className="text-slate-500 dark:text-slate-400">{product.category}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${selectedProduct ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={handleClosePanel}
      ></div>

      {/* Slide-in Panel */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${selectedProduct ? 'translate-x-0' : 'translate-x-full'}`}>
        {selectedProduct && (
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
               <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Request Order</h2>
               <button onClick={handleClosePanel} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
               </button>
            </div>
            
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{selectedProduct.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{selectedProduct.description}</p>
            
            <div className="mt-6 space-y-4 flex-grow">
               <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
                  min="1"
                  className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
               </div>

               <div>
                <label htmlFor="specialRequest" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Special Request</label>
                <textarea
                  id="specialRequest"
                  rows={4}
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  placeholder="e.g., specific dimensions, color adjustments"
                  className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
               </div>
            </div>

            <button onClick={handleRequest} className="w-full mt-6 bg-black text-white font-bold py-3 rounded-full hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors duration-300">
                Submit Request
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;