import React from 'react';
import PublicHeader from './PublicHeader';
import MenuDisplay from './MenuDisplay';
import ReviewsSection from './ReviewsSection';

const PublicLayout = ({ restaurantData, menuItems, reviews }) => {
  return (
    <div className="min-h-screen bg-orange-50">
      <PublicHeader restaurantData={restaurantData} />
      <div className="container mx-auto p-4">
        <div className="mb-8 p-6 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-bold mb-2">¡Bienvenidos!</h2>
          <p>Disfruta de nuestra deliciosa comida rápida con los sabores más auténticos.</p>
        </div>
        <MenuDisplay menuItems={menuItems} />
        <ReviewsSection reviews={reviews} />
      </div>
    </div>
  );
};

export default PublicLayout;