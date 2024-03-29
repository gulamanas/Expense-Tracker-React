import Header from '../../components/header/Header';
import Profile from '../../components/dashboard/Profile';
import Categories from '../../components/dashboard/Categories';
import TransactionList from '../../components/dashboard/TransactionList';
import AddTransactionComponent from '../../components/dashboard/AddTransactionComponent';
import LineChartView from '../../components/charts/LineChartView';

const HomePage = () => {
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
        {/* <div className='flex flex-col gap-5'> */}
        {/* <Profile />
          <div className='graph w-[300px] h-40 bg-white border border-red-400 rounded-lg p-2'>
            <LineChartView />
          </div>
          <div className='graph w-full h-40 bg-red-300'></div> */}
        <AddTransactionComponent />
        {/* </div> */}
      </div>
      <div className='graph w-1/2 bg-white border shadow-2xl rounded-lg p-2 m-4'>
        <LineChartView />
      </div>

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
    </>
  );
};

export default HomePage;
