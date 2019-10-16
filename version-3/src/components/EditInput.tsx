import * as React from 'react';

interface Props {
  toggle: () => void;
  updateEvent: UpdateEvent;
  id: string;
  text: string;
}

const EditInput: React.FC<Props> = ({ updateEvent, toggle, id,text }) => {
  const [event, setEvent] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateEvent(id, event);
    toggle();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder={text} value={event} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEvent(e.target.value)} />
      </form>
      {' '}
    </>
  );
};
export default EditInput;
