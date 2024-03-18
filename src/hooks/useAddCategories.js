import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/app';

export const useAddCategories = () => {
  const userId = JSON.parse(localStorage.getItem('user')).uid;
  const categoriesCollectionRef = collection(db, 'categories');

  const addCategories = async ({ title }) => {
    await addDoc(categoriesCollectionRef, {
      userId,
      title,
      createdAt: serverTimestamp(),
    });
  };

  return { addCategories };
};
