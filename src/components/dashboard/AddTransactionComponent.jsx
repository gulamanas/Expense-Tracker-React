import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faMultiply } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useAddTransaction } from '../../hooks/useAddTransaction';
import { useGetCategories } from '../../hooks/useGetCategories';
import FormDropdown from './FormDropdown';

const AddTransactionComponent = () => {
  const { addTransaction } = useAddTransaction();
  const { categories } = useGetCategories();

  console.log({ categories });

  const [openForm, setOpenForm] = useState(false);

  const [description, setDescription] = useState('');
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState('expense');

  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedCategoryValue, setSelectedCategoryValue] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await addTransaction({
        description,
        transactionAmount,
        transactionType,
        categoryId: selectedCategoryId,
      });
      closeModal();
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  const openModal = () => {
    setOpenForm(true);
  };

  const closeModal = () => {
    setOpenForm(false);
  };

  const handleDropdownChange = (id, value) => {
    setSelectedCategoryId(id);
    setSelectedCategoryValue(value);
  };

  return (
    <>
      <button
        className='bg-[#FC7C7B] p-6 rounded-lg font-semibold text-white'
        onClick={openModal}
      >
        <FontAwesomeIcon icon={faAdd} /> Add Transaction
      </button>
      {openForm && (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'>
          <div className='bg-white rounded-lg'>
            <div className='flex justify-between items-center bg-blue-400 p-4 rounded-t-lg w-[400px]'>
              <h3 className='font-semibold text-lg text-white'>
                Add Transaction
              </h3>
              <FontAwesomeIcon
                icon={faMultiply}
                className='p-2 bg-red-400 text-white rounded-full w-4 h-4 cursor-pointer hover:bg-red-500'
                onClick={closeModal}
              />
            </div>
            <form
              className='flex flex-col gap-4 p-6'
              onSubmit={onSubmitHandler}
            >
              <input
                type='text'
                placeholder='Description'
                required
                className='px-3 py-4 bg-green-200 rounded-md placeholder:text-black'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type='number'
                placeholder='Amount'
                required
                min={0}
                className='px-3 py-4 bg-green-200 rounded-md placeholder:text-black'
                value={transactionAmount}
                onChange={(e) => setTransactionAmount(e.target.value)}
              />
              <div className='flex gap-2'>
                <input
                  type='radio'
                  id='expense'
                  value='expense'
                  checked={transactionType === 'expense'}
                  onChange={(e) => setTransactionType(e.target.value)}
                />
                <label htmlFor='expense'> Expense</label>
              </div>
              <div className='flex gap-2'>
                <input
                  type='radio'
                  id='income'
                  value='income'
                  checked={transactionType === 'income'}
                  onChange={(e) => setTransactionType(e.target.value)}
                />
                <label htmlFor='income'> Income</label>
              </div>
              <div>
                <FormDropdown
                  categories={categories}
                  onChange={handleDropdownChange}
                />
              </div>
              <button
                type='submit'
                className='px-3 py-4 bg-red-400 font-medium text-white rounded-md hover:bg-red-500'
              >
                Add Transaction
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTransactionComponent;
