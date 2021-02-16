import React, { useState } from 'react';
import Button, { ButtonTypes } from 'components/Button/Button';
import Input from 'components/Input/Input';
import './app.scss';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="app-classname">
      <Button title="Search" type={ButtonTypes.button} onClick={() => console.log(inputValue)} />
      <Input placeholder="Type a movie title" onChange={(value) => setInputValue(value)} value={inputValue} />
    </div>
  );
}

export default App;
