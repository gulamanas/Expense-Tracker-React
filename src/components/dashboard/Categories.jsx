import { faAdd, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetCategories } from '../../hooks/useGetCategories';
import { useGetTransactions } from '../../hooks/useGetTransactions';
import { addCommas } from '../../utils/addCommas';

const Categories = () => {
  const { categories } = useGetCategories();
  const { transactions } = useGetTransactions();

  const calculateTotalCategoryAmount = (categoryId) => {
    return transactions.reduce((total, transaction) => {
      if (transaction.categoryRef) {
        if (transaction.categoryRef.id === categoryId) {
          return total + Number(transaction.transactionAmount);
        }
      } else {
        return total + 0;
      }
      return total;
    }, 0);
  };

  return (
    <div>
      <h2 className='font-semibold text-3xl'>Categories</h2>
      <div className='flex gap-5 flex-wrap mt-4'>
        {categories.map(({ id, title }) => {
          return (
            <div
              key={id}
              className='px-4 py-2 bg-green-200 text-gray-700 flex items-center gap-4 rounded'
            >
              {/* <FontAwesomeIcon icon={icon} /> */}
              <div>
                <p className='text-lg font-semibold'>{title}</p>
                <p className='font-medium'>
                  ₹ {addCommas(calculateTotalCategoryAmount(id))}
                </p>
              </div>
            </div>
          );
        })}
        {/* <button
          className='px-4 py-2 bg-blue-400 text-white flex items-center gap-4 rounded'
          onClick={handleSubmit}
        >
          <FontAwesomeIcon icon={faAdd} />
          Add New
        </button> */}
      </div>
    </div>
  );
};

export default Categories;
