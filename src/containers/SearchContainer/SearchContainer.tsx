import React, { FormEvent, useState } from 'react';
import Button, { ButtonTypes } from 'components/Button/Button';
import Input from 'components/Input/Input';
import './search-container.scss';

const SearchContainer = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(`Search has started with value: ${inputValue}!`);
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <Input placeholder="Type a movie title" onChange={(value) => setInputValue(value)} value={inputValue} />
      <Button title="Search" type={ButtonTypes.submit} />
    </form>
  );
}

export default SearchContainer;
