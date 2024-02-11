import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/app';

export const useAddTransaction = () => {
  const transactionCollectionRef = collection(db, 'transactions');

  const addTransaction = async () => {
    await addDoc(transactionCollectionRef, {
      userId: '',
      description: '',
      transactionAmount: 0,
      transactionType: '',
      createdAt: serverTimestamp(),
    });
  };

  return { addTransaction };
};
