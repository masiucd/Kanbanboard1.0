import * as React from 'react';
import ListItem from './ListItem';

interface ListProps {
  events: Todo[];
  completeEvent: CompleteEvent;
  deleteEvent: DeleteEvent;
  updateEvent: UpdateEvent;
}

const List: React.FC<ListProps> = ({
  events, completeEvent, deleteEvent, updateEvent,
}) => (
  <>
    {events.length > 0 ? (
      <>
        {' '}
        <div className="list">
          <ul>
            {events.map((event) => <ListItem key={event.id} event={event} completeEvent={completeEvent} deleteEvent={deleteEvent} updateEvent={updateEvent} />)}
          </ul>
        </div>

      </>
    ) : <h2>No Events Left, Please add some</h2> }

  </>
);
export default List;
