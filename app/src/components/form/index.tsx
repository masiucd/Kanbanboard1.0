import * as React from "react";
import * as uuid from "uuid";
import styled from "styled-components";
import { Btn } from "../styled/elements";
import { Label, Input } from "../styled/form.elements";

interface Props {
  className: string;
  state: InitialData;
  setState: React.Dispatch<React.SetStateAction<InitialData>>;
}

const Form: React.FC<Props> = ({ className, state, setState }) => {
  const [content, setContent] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let newTaskIdList = [...state.columns["column-1"].taskIds, "task-6"];

    console.log(uuid.v4());
    if (content.length > 0) {
      setState((prevState) => ({
        ...prevState,
        tasks: {
          ...prevState.tasks,
          "task-6": { id: "task-6", content },
        },
        columns: {
          ...prevState.columns,
          "column-1": {
            ...prevState.columns["column-1"],
            taskIds: newTaskIdList,
          },
        },
      }));
      setContent("");
    } else {
      return;
    }

    // setState((prevState) => ({
    //   ...prevState,
    //   tasks: {
    //     ...prevState.tasks,
    //     "task-6": { id: "task-6", content },
    //   },
    //   columns: {
    //     ...prevState.columns,
    //     "column-1": { id: "column-1", title: "ToDo", taskIds: newTaskIdList },
    //   },
    // }));
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <Label>
        <Input
          name='content'
          placeholder='content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Label>
      <Btn type='submit'>Submit</Btn>
    </form>
  );
};

export default styled(Form)`
  padding: 3rem;
  width: 100%;
`;
