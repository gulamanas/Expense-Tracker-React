import React, { useState } from 'react';

const FormDropdown = ({ categories, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedId = categories[selectedIndex].id;
    const selectedValue = categories[selectedIndex].title;
    console.log('value', e.target);
    setSelectedOption(selectedId);
    onChange(selectedId, selectedValue);
  };

  return (
    <select onChange={handleSelectChange} value={selectedOption} required>
      <option value='' disabled>
        Select a Category
      </option>
      {categories.map(({ id, title }) => {
        return (
          <option value={id} key={id}>
            {title}
          </option>
        );
      })}
    </select>
  );
};

export default FormDropdown;
