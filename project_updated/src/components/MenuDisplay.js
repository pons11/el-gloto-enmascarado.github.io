import React from 'react';

const MenuDisplay = ({ menuItems }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">Nuestro Menú</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div key={index} className="border border-orange-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            {item.image && (
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="bg-orange-100 p-4">
              <h3 className="text-xl font-bold text-orange-800">{item.name}</h3>
              <p className="text-orange-600 font-semibold">${item.price}</p>
            </div>
            <div className="p-4">
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDisplay;