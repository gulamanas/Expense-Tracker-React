import { query, collection, onSnapshot, orderBy } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/app';

export const useGetCategories = () => {
  const [categories, setCategories] = useState([]);

  const categoriesCollectionRef = collection(db, 'categories');

  const getCategories = async () => {
    let unsubscribe;
    try {
      const queryCategories = query(
        categoriesCollectionRef,
        orderBy('title', 'asc')
      );
      unsubscribe = onSnapshot(queryCategories, (snapshot) => {
        let docs = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });
        });
        setCategories(docs);
      });
    } catch (err) {
      console.error(err);
    }

    return () => unsubscribe();
  };

  useEffect(() => {
    getCategories();
  }, []);

  return { categories };
};
