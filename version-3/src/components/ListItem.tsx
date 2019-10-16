import * as React from 'react';
import useToggle from '../hooks/useToggle';
import EditInput from './EditInput';

interface ListItemProps {
  event: Todo;
  completeEvent: CompleteEvent;
  deleteEvent: DeleteEvent;
  updateEvent: UpdateEvent;
}

const ListItem: React.FC<ListItemProps> = ({
  event, completeEvent, deleteEvent, updateEvent,
}) => {
  const { id, text, completed } = event;
  const [show, setShow] = React.useState(false);
  const toggle = () => {
    setShow(!show);
  };
  return (
    <>
      <li>

        {show ? <EditInput toggle={toggle} updateEvent={updateEvent} id={id} text={text} /> : (
          <>
            {' '}
            <h4 className={completed ? 'completed-event' : ''}>{text}</h4>
            <input type="checkbox" checked={completed} onChange={() => completeEvent(event)} />
            <span onClick={toggle}>🖌</span>
            <span onClick={() => deleteEvent(id)}>🚮</span>
            {' '}
          </>
        )}


      </li>
    </>
  );
};
export default ListItem;
