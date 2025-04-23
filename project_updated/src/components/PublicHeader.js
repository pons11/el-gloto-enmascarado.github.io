import React from 'react';

const PublicHeader = ({ restaurantData }) => {
  return (
    <header 
      className="relative overflow-hidden bg-gray-900"
      style={restaurantData.backgroundImage ? { 
        backgroundImage: `url(${restaurantData.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 py-12">
        <div className="container mx-auto flex flex-col items-center px-4">
          {restaurantData.logo && (
            <img 
              src={restaurantData.logo} 
              alt="Logo del restaurante" 
              className="h-24 mb-4 rounded-full border-4 border-white shadow-lg"
            />
          )}
          <h1 className="text-4xl font-extrabold text-black mb-2 text-center bg-white bg-opacity-80 px-6 py-2 rounded-lg">
            {restaurantData.name}
          </h1>
          <p className="text-lg text-white bg-black bg-opacity-60 px-4 py-1 rounded mb-2">
            {restaurantData.description}
          </p>
          {restaurantData.phone && (
            <a 
              href={`tel:${restaurantData.phone}`}
              className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {restaurantData.phone}
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;