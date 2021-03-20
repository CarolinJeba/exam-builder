import { CREATE_EXAM, READ_EXAM, UPDATE_EXAM, DELETE_EXAM } from "../types";
// import { initialStateModel } from "./ExamState";

const ExamReducer = (state, action) => {
  switch (action.type) {
    case CREATE_EXAM:
      return {
        ...state,
        exams: [...state.exams, action.payload],
      };
    default:
      return state;
  }
};

export default ExamReducer;
