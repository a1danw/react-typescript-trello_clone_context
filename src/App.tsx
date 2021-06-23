// import React from "react";
// import { AppContainer } from "./styles";
// import { Column } from "./components/Column";
// import { Card } from "./components/Card";
// import { AddNewItem } from "./components/AddNewItem";
// import { useAppState } from "./context/AppStateContext";

// import "./App.css";

// export const App: React.FC = ({ children }) => {
//   const { state } = useAppState();
//   return (
//     <AppContainer>
//       {/* <Column text="To Do">
//         <Card text="Generate app scaffold" />
//       </Column>
//       <Column text="In Progress">
//         <Card text="Learn Typescript" />
//       </Column>
//       <Column text="Done">
//         <Card text="Begin to use static typing" />
//       </Column> */}
//       {state.lists.map((list, i) => (
//         <Column text={list.text} key={list.id} index={i} />
//       ))}
//       <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
//     </AppContainer>
//   );
// };
import React from "react";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { AddNewItem } from "./components/AddNewItem";

import { AppContainer } from "./styles";

export const App: React.FC = ({ children }) => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};
