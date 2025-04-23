import React from 'react';
import AdminHeader from './AdminHeader';
import RestaurantInfoEditor from './RestaurantInfoEditor';
import MenuEditor from './MenuEditor';
import ReviewsSection from './ReviewsSection';
import useUpdateData from '../hooks/useUpdateData';

const AdminLayout = ({ restaurantData, menuItems, reviews }) => {
  const updateData = useUpdateData();

  const handleRestaurantUpdate = (newData) => {
    updateData('restaurant', newData);
  };

  const handleMenuUpdate = (newItems) => {
    updateData('menu', newItems);
  };

  const handleReviewsUpdate = (newReviews) => {
    updateData('reviews', newReviews);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader />
      <div className="container mx-auto p-4">
        <RestaurantInfoEditor 
          restaurantData={restaurantData} 
          setRestaurantData={handleRestaurantUpdate} 
        />
        <MenuEditor 
          menuItems={menuItems} 
          setMenuItems={handleMenuUpdate} 
        />
        <ReviewsSection 
          reviews={reviews} 
          setReviews={handleReviewsUpdate} 
        />
      </div>
    </div>
  );
};

export default AdminLayout;