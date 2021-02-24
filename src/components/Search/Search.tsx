import React, { FormEvent, useState } from 'react';
import Button, { ButtonTypes } from 'components/Button/Button';
import Input from 'components/Input/Input';
import './search.scss';

export interface SearchProps {
  handleSubmit: (value: string) => void;
};

const Search = React.memo<SearchProps>(({ handleSubmit }) => {
  const [value, setInputValue] = useState('');

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSubmit(value);
  };

  return (
    <form className="search-container" onSubmit={onSubmit}>
      <Input placeholder="Type a movie title" onChange={setInputValue} value={value} />
      <Button title="Search" type={ButtonTypes.submit} />
    </form>
  );
});

export default Search;
