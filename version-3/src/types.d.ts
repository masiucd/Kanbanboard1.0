
type Todo = {
  id: string;
  text: string;
  completed: boolean;
}


type CompleteEvent = (selectedEvent: Todo) => void;
type AddEvent = (newEvent: string) => void;
type DeleteEvent = (id: string) => void
type UpdateEvent = (id: string, newText: string) => void
