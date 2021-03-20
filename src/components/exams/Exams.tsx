import React, { Fragment, useContext } from "react";
import  ExamContext  from "../../context/exam/ExamContext";
import ExamItem from "../examItem/ExamItem";

const Exams = () => {
  const examContext = useContext(ExamContext);

  const { exams } = examContext;

  console.log(exams, 'exams')
  return (
    <Fragment>
      {exams.map((exam: any) => (
        <ExamItem key={exam.id} exam={exam}></ExamItem>
      ))}
    </Fragment>
  );
};

export default Exams;
