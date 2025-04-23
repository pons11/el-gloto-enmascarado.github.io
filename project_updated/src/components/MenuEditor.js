import React, { useState } from 'react';

const MenuEditor = ({ menuItems, setMenuItems }) => {
  const [newItem, setNewItem] = useState({ 
    name: '', 
    price: '', 
    description: '', 
    image: null 
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewItem({...newItem, image: reader.result});
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddItem = () => {
    if (newItem.name && newItem.price) {
      setMenuItems([...menuItems, newItem]);
      setNewItem({ name: '', price: '', description: '', image: null });
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = menuItems.filter((_, i) => i !== index);
    setMenuItems(updatedItems);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Editor de Menú</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Nombre del platillo"
          className="p-2 border rounded"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Precio"
          className="p-2 border rounded"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="p-2 border rounded"
        />
      </div>
      <textarea
        placeholder="Descripción"
        className="w-full p-2 border rounded mb-4"
        rows="3"
        value={newItem.description}
        onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
      />
      {newItem.image && (
        <div className="mb-4">
          <img 
            src={newItem.image} 
            alt="Vista previa" 
            className="h-32 object-cover rounded"
          />
        </div>
      )}
      <button
        onClick={handleAddItem}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mr-4 transition-colors"
      >
        Agregar Platillo
      </button>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Platillos Actuales:</h3>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index} className="flex flex-col md:flex-row gap-4 p-4 bg-gray-100 rounded">
              {item.image && (
                <div className="w-full md:w-32 h-32">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <strong>{item.name}</strong> - ${item.price} <br />
                    <small>{item.description}</small>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm transition-colors"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuEditor;