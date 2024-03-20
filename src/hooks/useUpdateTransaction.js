import {
  updateDoc,
  collection,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase/app';

export const useUpdateTransaction = () => {
  const userId = JSON.parse(localStorage.getItem('user')).uid;
  const transactionCollectionRef = collection(db, 'transactions');
  const categoriesCollectionRef = collection(db, 'categories');

  const updateTransaction = async (
    transactionId,
    { description, transactionAmount, transactionType, categoryId }
  ) => {
    const transactionRef = doc(transactionCollectionRef, transactionId);
    const categoryRef = doc(categoriesCollectionRef, categoryId);
    await updateDoc(transactionRef, {
      userId,
      description,
      transactionAmount,
      transactionType,
      categoryRef,
      createdAt: serverTimestamp(),
    });
  };

  return { updateTransaction };
};
