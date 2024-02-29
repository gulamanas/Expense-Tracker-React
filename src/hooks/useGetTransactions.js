import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/app';

export const useGetTransactions = () => {
  const userId = JSON.parse(localStorage.getItem('user')).uid;
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const transactionCollectionRef = collection(db, 'transactions');

  const getTransactions = async () => {
    let unsubscribe;
    try {
      const queryTransactions = query(
        transactionCollectionRef,
        where('userId', '==', userId),
        orderBy('createdAt')
      );

      unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
        let docs = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });
        });
        setTransactions(docs);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }

    return () => unsubscribe();
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return { transactions, loading };
};
