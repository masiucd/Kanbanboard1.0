import * as React from 'react';
import { string } from 'prop-types';

interface FormProps {
  addEvent: AddEvent;
}

const Form: React.FC<FormProps> = ({ addEvent }) => {
  const [value, setValue] = React.useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addEvent(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={value} placeholder="add a new Event" />
      <button type="submit">Add new event</button>
    </form>
  );
};
export default Form;
