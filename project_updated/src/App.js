import React, { useState } from 'react';
import { initialRestaurantData, initialMenuItems, initialReviews } from './mock/data';
import AdminLayout from './components/AdminLayout';
import PublicLayout from './components/PublicLayout';
import LoginModal from './components/LoginModal';
import useRealtimeData from './hooks/useRealtimeData';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  
  const restaurantData = useRealtimeData('restaurant') || initialRestaurantData;
  const menuItems = useRealtimeData('menu') || initialMenuItems;
  const reviews = useRealtimeData('reviews') || initialReviews;

  const handleAdminClick = () => {
    if (isAdmin) {
      setIsAdmin(false);
    } else {
      setShowLogin(true);
    }
  };

  const handleLogin = () => {
    setIsAdmin(true);
    setShowLogin(false);
  };

  return (
    <div>
      {isAdmin ? (
        <AdminLayout
          restaurantData={restaurantData}
          menuItems={menuItems}
          reviews={reviews}
        />
      ) : (
        <PublicLayout
          restaurantData={restaurantData}
          menuItems={menuItems}
          reviews={reviews}
        />
      )}
      
      <div className="fixed bottom-4 right-4">
        <button
          onClick={handleAdminClick}
          className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        >
          {isAdmin ? 'Ver Página Pública' : 'Acceso Admin'}
        </button>
      </div>

      {showLogin && (
        <LoginModal 
          onLogin={handleLogin} 
          onClose={() => setShowLogin(false)} 
        />
      )}
    </div>
  );
};

export default App;

// DONE