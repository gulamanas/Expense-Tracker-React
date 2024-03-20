import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import FormDropdown from './FormDropdown';

const TransactionFormModal = ({
  isOpen,
  onClose,
  categories,
  onSubmit,
  itemTransaction,
}) => {
  const [description, setDescription] = useState('');
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState('expense');
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedCategoryValue, setSelectedCategoryValue] = useState('');

  console.log(itemTransaction);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (itemTransaction) {
        onSubmit(itemTransaction.id, {
          description,
          transactionAmount,
          transactionType,
          categoryId: selectedCategoryId,
        });
      } else {
        onSubmit({
          description,
          transactionAmount,
          transactionType,
          categoryId: selectedCategoryId,
        });
      }
      onClose();
      setDescription('');
      setTransactionAmount(0);
      setTransactionType('expense');
      setSelectedCategoryId(null);
      setSelectedCategoryValue('');
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    if (itemTransaction) {
      setDescription(itemTransaction.description);
      setTransactionAmount(itemTransaction.transactionAmount);
      setTransactionType(itemTransaction.transactionType);
      setSelectedCategoryId(
        itemTransaction.categoryRef ? itemTransaction.categoryRef.id : ''
      );
      setSelectedCategoryValue(itemTransaction.id);
    }
  }, [itemTransaction]);

  const handleDropdownChange = (id, value) => {
    setSelectedCategoryId(id);
    setSelectedCategoryValue(value);
  };

  return (
    isOpen && (
      <div className='z-20 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'>
        <div className='bg-white rounded-lg'>
          <div className='flex justify-between items-center bg-blue-400 p-4 rounded-t-lg w-[400px]'>
            <h3 className='font-semibold text-lg text-white'>
              {itemTransaction ? <span>Update </span> : <span>Add </span>}
              Transaction
            </h3>
            <FontAwesomeIcon
              icon={faMultiply}
              className='p-2 bg-red-400 text-white rounded-full w-4 h-4 cursor-pointer hover:bg-red-500'
              onClick={onClose}
            />
          </div>
          <form className='flex flex-col gap-4 p-6' onSubmit={handleSubmit}>
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
              {itemTransaction ? <span>Update </span> : <span>Add </span>}
              Transaction
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default TransactionFormModal;
