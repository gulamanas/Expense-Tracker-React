import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/app';

export const useAddTransaction = () => {
  const userId = JSON.parse(localStorage.getItem('user')).uid;
  const transactionCollectionRef = collection(db, 'transactions');

  const addTransaction = async ({
    description,
    transactionAmount,
    transactionType,
  }) => {
    await addDoc(transactionCollectionRef, {
      userId,
      description,
      transactionAmount,
      transactionType,
      createdAt: serverTimestamp(),
    });
  };

  return { addTransaction };
};
