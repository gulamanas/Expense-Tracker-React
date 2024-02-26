import { useState } from 'react';
import { useAddTransaction } from '../../hooks/useAddTransaction';
import { useGetTransactions } from '../../hooks/useGetTransactions';
import Header from '../../components/header/Header';
import Profile from '../../components/dashboard/Profile';
import Categories from '../../components/dashboard/Categories';
import TransactionList from '../../components/dashboard/TransactionList';
import AddTransactionComponent from '../../components/dashboard/AddTransactionComponent';

const HomePage = () => {
  const { addTransaction } = useAddTransaction();
  const { transactions } = useGetTransactions();

  const [description, setDescription] = useState('');
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState('expense');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });
  };

  return (
    <>
      <Header />
      <div className='flex justify-between p-5 gap-5'>
        <div className='flex-1 flex flex-col'>
          <Categories />
          <div className='mt-5 flex-1'>
            <TransactionList />
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <Profile />
          <div className='graph w-full h-40 bg-red-300'></div>
          <div className='graph w-full h-40 bg-red-300'></div>
          <AddTransactionComponent />
        </div>
      </div>

      {/* <div className='expense-tracker'>
        <div className='container'> */}
      {/* <h1>Expense Tracker</h1>
          <div className='balance'>
            <h3>Your Balance</h3>
            <h2>$0.0</h2>
          </div>
          <div className='summary'>
            <div className='income'>
              <h3>Income</h3>
              <h2>$0.0</h2>
            </div>
            <div className='expense'>
              <h3>Expenses</h3>
              <h2>$0.0</h2>
            </div>
          </div> */}
      {/* <form className='add-transaction' onSubmit={onSubmitHandler}>
            <input
              type='text'
              placeholder='Description'
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type='number'
              placeholder='Amount'
              required
              value={transactionAmount}
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
            <input
              type='radio'
              id='expense'
              value='expense'
              checked={transactionType === 'expense'}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor='expense'> Expense</label>
            <input
              type='radio'
              id='income'
              value='income'
              checked={transactionType === 'income'}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor='income'> Income</label>
            <button type='submit'>Add Transaction</button>
          </form> */}
      {/* </div>
      </div> */}
      {/* <div className='transactions'>
        <ul>
          {transactions.map((transaction) => {
            return (
              <li key={transaction.id}>
                <h4>{transaction.description}</h4>
                <h4>{transaction.transactionAmount}</h4>
                <h4>{transaction.transactionType}</h4>
              </li>
            );
          })}
        </ul>
      </div> */}
    </>
  );
};

export default HomePage;
