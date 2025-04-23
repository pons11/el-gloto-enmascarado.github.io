import { ref, set } from '../firebaseConfig';

const useUpdateData = () => {
  const updateData = (path, data) => {
    const dataRef = ref(database, path);
    set(dataRef, data);
  };

  return updateData;
};

export default useUpdateData;