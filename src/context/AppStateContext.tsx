import React, { createContext, useReducer, useContext } from "react";
import { nanoid } from "nanoid";

type Task = {
  id: string;
  text: string;
};

type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

// discriminated union technique
// passed two type seperated by a vertical line to it. This means that Action now
// can resolve to one of the forms that we've passed.

type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_TASK";
      payload: { text: string; listId: string };
    };

type AppStateContextProps = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
};

// React wants us to provider the default value for the context. This value will only be used if
// we dont wrap the app into the AppStateProvider, so we can omit it
const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};

// We don’t have to define constants for our action types.
// TypeScript will give you an error if you try to compare action.type to something it cannot be.
// There is another catch here. Note that we use curly brackets to define the block scope for our
// case statements. Without those brackets, our constants would be
// visible across the whole switch block.

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST": {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: nanoid(), text: action.payload, tasks: [] },
        ],
      };
    }
    case "ADD_TASK": {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
// React.PropsWithChildren requires one generic argument but we dont want to have any other props
// so we pass an empty object to it
export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

// retrieves the value from AppStateContext using useContext hook and return the result
export const useAppState = () => {
  return useContext(AppStateContext);
};
