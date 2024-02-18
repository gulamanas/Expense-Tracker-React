// import GetData from '../../components/GetData';
import { useAddTransaction } from '../../hooks/useAddTransaction';
import Header from '../../components/header/Header';
import { useState } from 'react';

const HomePage = () => {
  const { addTransaction } = useAddTransaction();

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
      {/* <GetData /> */}

      <div className='expense-tracker'>
        <div className='container'>
          <h1>Expense Tracker</h1>
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
          </div>
          <form className='add-transaction' onSubmit={onSubmitHandler}>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default HomePage;
