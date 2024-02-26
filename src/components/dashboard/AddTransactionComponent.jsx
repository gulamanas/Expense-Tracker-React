import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const AddTransactionComponent = () => {
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
        className='bg-[#FC7C7B] p-6 rounded-lg font-semibold text-white'
        onClick={openModal}
      >
        <FontAwesomeIcon icon={faAdd} /> Add Transaction
      </button>
      {openForm && (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg'>
            <h2 className='text-lg font-semibold mb-4'>Add Transaction</h2>
            {/* Your form content here */}
            <button
              className='bg-[#FC7C7B] p-2 rounded-lg font-semibold text-white'
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTransactionComponent;
