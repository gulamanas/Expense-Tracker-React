import { faAdd, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useAddCategories } from '../../hooks/useAddCategories';
import { useGetCategories } from '../../hooks/useGetCategories';

// const categoriesData = [
//   {
//     id: Math.floor(Math.random() * 10000000),
//     name: 'Housing Loan',
//     totalAmount: 45000,
//     icon: faHome,
//   },
//   {
//     id: Math.floor(Math.random() * 10000000),
//     name: 'Housing Loan',
//     totalAmount: 45000,
//     icon: faHome,
//   },
//   {
//     id: Math.floor(Math.random() * 10000000),
//     name: 'Housing Loan',
//     totalAmount: 45000,
//     icon: faHome,
//   },
// ];

const Categories = () => {
  const { categories } = useGetCategories();

  // const { addCategories } = useAddCategories();
  // const handleSubmit = async () => {
  //   try {
  //     await addCategories({
  //       title: 'Travel',
  //     });
  //     console.log('first categories');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  function addCommas(nStr) {
    nStr += '';
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }

  return (
    <div>
      <h2 className='font-semibold text-3xl'>Categories</h2>
      <div className='flex gap-5 flex-wrap mt-4'>
        {categories.map(({ id, title }) => {
          return (
            <div
              key={id}
              className='px-4 py-2 bg-pink-400 text-white flex items-center gap-4 rounded'
            >
              {/* <FontAwesomeIcon icon={icon} /> */}
              <div>
                <p>{title}</p>
                <p className='text-xs'>{addCommas(20000)}</p>
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
