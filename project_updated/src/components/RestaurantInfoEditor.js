import React, { useState } from 'react';

const RestaurantInfoEditor = ({ restaurantData, setRestaurantData }) => {
  const [editing, setEditing] = useState(false);
  const [tempData, setTempData] = useState(restaurantData);

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempData({...tempData, [type]: reader.result});
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setRestaurantData(tempData);
    setEditing(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Información del Restaurante</h2>
        {editing ? (
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Guardar Cambios
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Editar
          </button>
        )}
      </div>

      {editing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Logo:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, 'logo')}
              className="w-full p-2 border rounded"
            />
            {tempData.logo && (
              <img src={tempData.logo} alt="Logo" className="h-24 mt-2 rounded-full" />
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Imagen de fondo:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, 'backgroundImage')}
              className="w-full p-2 border rounded"
            />
            {tempData.backgroundImage && (
              <img src={tempData.backgroundImage} alt="Fondo" className="h-32 mt-2 w-full object-cover rounded" />
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Nombre:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={tempData.name}
              onChange={(e) => setTempData({ ...tempData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Descripción:</label>
            <textarea
              className="w-full p-2 border rounded"
              rows="3"
              value={tempData.description}
              onChange={(e) => setTempData({ ...tempData, description: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Teléfono:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={tempData.phone}
              onChange={(e) => setTempData({ ...tempData, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Horario:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={tempData.schedule}
              onChange={(e) => setTempData({ ...tempData, schedule: e.target.value })}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center mb-4">
            {restaurantData.logo && (
              <img src={restaurantData.logo} alt="Logo" className="h-16 mr-4 rounded-full" />
            )}
            <div>
              <p className="text-lg font-semibold">{restaurantData.name}</p>
              <p className="text-gray-700">{restaurantData.description}</p>
            </div>
          </div>
          <div className="space-y-2">
            {restaurantData.phone && (
              <p className="text-sm text-gray-700">
                <span className="font-medium">Teléfono:</span> {restaurantData.phone}
              </p>
            )}
            <p className="text-sm text-gray-500">Horario: {restaurantData.schedule}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantInfoEditor;

// DONE