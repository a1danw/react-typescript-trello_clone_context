// import React from "react";
// import { useAppState } from "../context/AppStateContext";
// import { ColumnContainer, ColumnTitle } from "../styles";
// import { AddNewItem } from "./AddNewItem";
// import { Card } from "./Card";

// type ColumnProps = {
//   text: string;
//   index: number;
// };

// export const Column = ({ text, index }: ColumnProps) => {
//   const { state } = useAppState();

//   return (
//     <ColumnContainer>
//       <ColumnTitle>{text}</ColumnTitle>
//       {state.lists[index].tasks.map((task) => (
//         <Card text={task.text} key={task.id} />
//       ))}
//       <AddNewItem
//         toggleButtonText="+ Add another task"
//         onAdd={console.log}
//         dark
//       />
//     </ColumnContainer>
//   );
// };

// // export const Column = ({
// //   text,
// //   children,
// // }: React.PropsWithChildren<ColumnProps>) => {
// //   return (
// //     <ColumnContainer>
// //       <ColumnTitle>{text}</ColumnTitle>
// //       {children}
// //       <AddNewItem
// //         toggleButtonText="+ Add another task"
// //         onAdd={console.log}
// //         dark
// //       />
// //     </ColumnContainer>
// //   );
// // };
import React from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";

type ColumnProps = {
  text: string;
};

export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
