import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useGetTransactions } from '../../hooks/useGetTransactions';
import { useUpdateTransaction } from '../../hooks/useUpdateTransaction';
import { useDeleteTransaction } from '../../hooks/useDeleteTransaction';
import { useGetCategories } from '../../hooks/useGetCategories';
import { addCommas } from '../../utils/addCommas';
import TransactionFormModal from './TransactionFormModal';

const TransactionList = () => {
  const { transactions, loading } = useGetTransactions();
  const { categories } = useGetCategories();
  const { updateTransaction } = useUpdateTransaction();
  const { deleteTransaction } = useDeleteTransaction();
  const [isLoading, setIsLoading] = useState(true);
  const [openForm, setOpenForm] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState({});

  const openModal = (transaction) => {
    setOpenForm(true);
    setCurrentTransaction(transaction);
  };

  const closeModal = () => {
    setOpenForm(false);
  };

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  return (
    <div className=''>
      <h3 className='z-10 font-semibold text-3xl sticky top-0 bg-white inline-block w-full'>
        Transactions
      </h3>
      {isLoading ? (
        <div className='text-center flex justify-center h-[50vh] items-center'>
          <div className='flex items-center justify-center h-screen'>
            <div className='border-t-4 border-b-4 border-blue-400 rounded-full w-16 h-16 animate-spin'></div>
          </div>
        </div>
      ) : (
        <div className='p-2 grid gap-3'>
          {transactions &&
            transactions.map((transaction, index) => {
              const {
                id,
                description,
                transactionAmount,
                transactionType,
                createdAt,
              } = transaction;
              console.log(
                'amount',
                transactionAmount,
                typeof transactionAmount
              );
              const formattedDate = createdAt
                ? createdAt.toDate().toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })
                : new Date(Date.now()).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  });
              return (
                <div
                  key={id}
                  className='flex justify-between bg-white py-1 px-3 rounded shadow relative'
                >
                  <div className=''>
                    <h4 className='font-semibold text-[20px] capitalize'>
                      {description}
                    </h4>
                    <p className='text-[14px]'>{formattedDate}</p>
                  </div>
                  <div className='flex items-center gap-5'>
                    <span className=''>
                      <p>{`₹${addCommas(transactionAmount)}`}</p>
                      <p
                        className={
                          transactionType === 'expense'
                            ? 'text-red-500'
                            : 'text-green-500'
                        }
                      >
                        {transactionType}
                      </p>
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={faEdit}
                        className='cursor-pointer text-blue-800'
                        onClick={() => openModal(transaction)}
                      />
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className='cursor-pointer text-red-600'
                        onClick={() => deleteTransaction(id)}
                      />
                    </span>
                  </div>
                </div>
              );
            })}
          <TransactionFormModal
            isOpen={openForm}
            onClose={closeModal}
            categories={categories}
            onSubmit={updateTransaction}
            itemTransaction={currentTransaction}
          />
        </div>
      )}
    </div>
  );
};

export default TransactionList;
