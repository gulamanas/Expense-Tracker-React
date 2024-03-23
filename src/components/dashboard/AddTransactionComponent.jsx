import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useAddTransaction } from '../../hooks/useAddTransaction';
import { useGetCategories } from '../../hooks/useGetCategories';
import TransactionFormModal from './TransactionFormModal';

const AddTransactionComponent = () => {
  const { addTransaction } = useAddTransaction();
  const { categories } = useGetCategories();
  const [openForm, setOpenForm] = useState(false);

  const openModal = () => {
    setOpenForm(true);
  };

  const closeModal = () => {
    setOpenForm(false);
  };

  return (
    <>
      <button
        className='bg-[#FC7C7B] p-6 rounded-full font-semibold text-white fixed bottom-10 right-10'
        onClick={openModal}
      >
        <FontAwesomeIcon icon={faAdd} /> Add Transaction
      </button>
      <div className='bg-black bg-opacity-1'>
        <TransactionFormModal
          isOpen={openForm}
          onClose={closeModal}
          categories={categories}
          onSubmit={addTransaction}
        />
      </div>
    </>
  );
};

export default AddTransactionComponent;
