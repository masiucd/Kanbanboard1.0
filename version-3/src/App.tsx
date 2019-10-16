/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import './App.css';
import uuid from 'uuid/v4';
import List from './components/List';
import Form from './components/Form';


const initialEvents: Todo[] = [
  {
    id: uuid(),
    text: 'Meeting with the boss',
    completed: false,
  },
  {
    id: uuid(),
    text: 'Working at La for a week',
    completed: false,
  },
  {
    id: uuid(),
    text: 'Get som stuff done from the scripts',
    completed: true,
  },
];


const App: React.FC = () => {
  const [events, setEvents] = useState(initialEvents);

  const completeEvent: CompleteEvent = (selectedEvent) => {
    const newEvents = events.map((event) => {
      if (event === selectedEvent) {
        return {
          ...event,
          completed: !event.completed,
        };
      }
      return event;
    });
    setEvents(newEvents);
  };

  const addEvent: AddEvent = (newEvent) => {
    newEvent.trim() && setEvents([...events, { id: uuid(), text: newEvent, completed: false }]);
  };

  const deleteEvent: DeleteEvent = (id) => {
    const deletedEvent = events.filter((event) => event.id !== id);
    setEvents(deletedEvent);
  };

  const updateEvent: UpdateEvent = (id, newText) => {
    const updatedEvents = events.map((event) => (event.id === id ? { ...event, text: newText } : event));
    setEvents(updatedEvents);
  };

  return (
    <div className="App">
      <h1>
          React
        {' '}
        <span>TS</span>
        {' '}
          TodoList
      </h1>
      <Form addEvent={addEvent} />
      <List events={events} completeEvent={completeEvent} deleteEvent={deleteEvent} updateEvent={updateEvent} />
    </div>
  );
};

export default App;
