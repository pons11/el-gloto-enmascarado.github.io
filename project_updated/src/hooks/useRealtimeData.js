import { useState, useEffect } from 'react';
import { ref, onValue } from '../firebaseConfig';

const useRealtimeData = (path) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataRef = ref(database, path);
    const unsubscribe = onValue(dataRef, (snapshot) => {
      setData(snapshot.val());
    });

    return () => unsubscribe();
  }, [path]);

  return data;
};

export default useRealtimeData;