import React, { FormEvent, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'store';
import { useLazyQuery } from '@apollo/client';
import { GET_MOVIES_BY_TITLE } from 'queries';
import Button, { ButtonTypes } from 'components/Button/Button';
import Input from 'components/Input/Input';
import './search-container.scss';

const SearchContainer = observer(() => {
  const [inputValue, setInputValue] = useState('');
  const { app } = useStore();
  const { setMoviesData, setMoviesLoading } = app;
  const [getData, { data, loading }] = useLazyQuery(GET_MOVIES_BY_TITLE);

  useEffect(() => {
    if (data) setMoviesData(data);
  }, [data, setMoviesData]);

  useEffect(() => {
    setMoviesLoading(loading);
  }, [loading, setMoviesLoading]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    getData({ variables: { title: inputValue } });
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <Input placeholder="Type a movie title" onChange={(value) => setInputValue(value)} value={inputValue} />
      <Button title="Search" type={ButtonTypes.submit} />
    </form>
  );
});

export default SearchContainer;
