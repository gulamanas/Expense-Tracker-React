import { useEffect, useState } from 'react';
import { useGetTransactions } from '../../hooks/useGetTransactions';

const TransactionList = () => {
  const { transactions, loading } = useGetTransactions();
  const [isLoading, setIsLoading] = useState(true);
  console.log({ transactions });

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  return (
    <div className=''>
      <h3 className='font-semibold text-3xl sticky top-0 bg-white inline-block w-full'>
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
            transactions.map((transaction) => {
              const {
                id,
                description,
                transactionAmount,
                transactionType,
                createdAt,
              } = transaction;
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
                  className='flex justify-between bg-white py-1 px-3 rounded shadow'
                >
                  <div className=''>
                    <h4 className='font-semibold text-[20px] capitalize'>
                      {description}
                    </h4>
                    <p className='text-[14px]'>{formattedDate}</p>
                  </div>
                  <div className=''>
                    <p>{`₹${transactionAmount}`}</p>
                    <p
                      className={
                        transactionType === 'expense'
                          ? 'text-red-500'
                          : 'text-green-500'
                      }
                    >
                      {transactionType}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default TransactionList;
