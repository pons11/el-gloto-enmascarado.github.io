import React, { useState } from 'react';

const ReviewsSection = ({ reviews, setReviews }) => {
  const [newReview, setNewReview] = useState({ author: '', comment: '', rating: 5 });

  const handleAddReview = () => {
    if (newReview.author && newReview.comment) {
      setReviews([...reviews, { ...newReview, id: Date.now() }]);
      setNewReview({ author: '', comment: '', rating: 5 });
    }
  };

  const handleDeleteReview = (id) => {
    setReviews(reviews.filter(review => review.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Reseñas</h2>
      
      <div className="mb-6 p-4 bg-yellow-100 border-l-4 border-yellow-500">
        <h3 className="font-semibold mb-2">Agregar Nueva Reseña</h3>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full p-2 border rounded"
            value={newReview.author}
            onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
          />
          <textarea
            placeholder="Tu experiencia"
            className="w-full p-2 border rounded"
            rows="3"
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          />
          <div className="flex items-center">
            <span className="mr-2">Calificación:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setNewReview({ ...newReview, rating: star })}
                className={`text-2xl ${star <= newReview.rating ? 'text-yellow-500' : 'text-gray-300'}`}
              >
                ★
              </button>
            ))}
          </div>
          <button
            onClick={handleAddReview}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Publicar Reseña
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
            <div className="flex justify-between">
              <h4 className="font-bold text-orange-700">{review.author}</h4>
              <div className="text-yellow-500">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
            </div>
            <p className="mt-2 text-gray-800">{review.comment}</p>
            <button
              onClick={() => handleDeleteReview(review.id)}
              className="mt-2 text-sm text-red-500 hover:text-red-700"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;