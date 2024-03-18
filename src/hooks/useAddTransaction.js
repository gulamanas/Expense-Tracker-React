import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/app';

export const useAddTransaction = () => {
  const userId = JSON.parse(localStorage.getItem('user')).uid;
  const transactionCollectionRef = collection(db, 'transactions');
  const categoriesCollectionRef = collection(db, 'categories');

  const addTransaction = async ({
    description,
    transactionAmount,
    transactionType,
    categoryId,
  }) => {
    const categoryRef = doc(categoriesCollectionRef, categoryId);
    await addDoc(transactionCollectionRef, {
      userId,
      description,
      transactionAmount,
      transactionType,
      categoryRef,
      createdAt: serverTimestamp(),
    });
  };

  return { addTransaction };
};
