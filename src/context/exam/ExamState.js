import React, { useReducer } from "react";
import { CREATE_EXAM, READ_EXAM, UPDATE_EXAM, DELETE_EXAM } from "../types";
import ExamReducer from "./ExamReducer";
import ExamContext from "./ExamContext";

// export interface initialStateModel {
//   exams: examModel[];
// }

// export interface examModel {
//   id: string;
//   examName: string;
// }

const ExamState = (props) => {
  const initialState = {
    exams: [
      {
        id: "1",
        examName: "ENGLISH",
      },
    ],
  };

  const [state, dispatch] = useReducer(ExamReducer, initialState);

  // CREATE_EXAM

  const createExam = (subject) => {
    dispatch({ type: CREATE_EXAM, payload: subject });
  };

  // READ_EXAM

  // UPDATE_EXAM

  // DELETE_EXAM

  return (
    <ExamContext.Provider value={{ exams: state.exams, createExam }}>
      {props.children}
    </ExamContext.Provider>
  );
};

export default ExamState;
