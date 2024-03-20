import React, { useState } from 'react';

const FormDropdown = ({ categories, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedId = categories[selectedIndex].id;
    // const selectedValue = categories[selectedIndex].title;
    const selectedValue = e.target.value;
    setSelectedOption(selectedId);
    onChange(selectedId, selectedValue);
  };

  return (
    <>
      <label>Choose a category:</label>
      <select
        onChange={handleSelectChange}
        value={selectedOption}
        required
        className='px-3 py-4 bg-green-200 rounded-md ml-4 outline-none'
      >
        <optgroup label='Category'>
          {categories.map(({ id, title }) => {
            return (
              <option value={id} key={id}>
                {title}
              </option>
            );
          })}
        </optgroup>
      </select>
    </>
  );
};

export default FormDropdown;
