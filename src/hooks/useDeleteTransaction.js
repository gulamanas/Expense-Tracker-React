import { deleteDoc, doc, collection } from 'firebase/firestore';
import { db } from '../firebase/app';

export const useDeleteTransaction = () => {
  const userId = JSON.parse(localStorage.getItem('user')).uid;
  const transactionCollectionRef = collection(db, 'transactions');

  const deleteTransaction = async (transactionId) => {
    const transactionRef = doc(transactionCollectionRef, transactionId);
    await deleteDoc(transactionRef);
  };

  return { deleteTransaction };
};
