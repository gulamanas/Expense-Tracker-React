import { useGetTransactions } from '../../hooks/useGetTransactions';

const TransactionList = () => {
  const { transactions } = useGetTransactions();
  console.log(transactions.createdAt);

  return (
    <div>
      <h3 className='font-semibold text-3xl'>Transactions</h3>
      <div className='p-2 grid gap-3'>
        {transactions &&
          transactions.map(
            ({
              id,
              description,
              transactionAmount,
              transactionType,
              createdAt,
            }) => {
              const date = createdAt.toDate();
              const formattedDate = date.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
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
            }
          )}
      </div>
    </div>
  );
};

export default TransactionList;
