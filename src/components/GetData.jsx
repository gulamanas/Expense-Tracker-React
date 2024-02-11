import { db } from '../firebase/app';
import { addDoc, collection } from 'firebase/firestore';

const GetData = () => {
  const user = localStorage.getItem('user');
  const parsedUser = JSON.parse(user);
  console.log(parsedUser);

  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, 'category'), {
        title: 'Travels',
        uid: parsedUser.uid,
      });
      console.log('Document written with Id', docRef.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={addData}>ADD DATA</button>
    </div>
  );
};

export default GetData;
