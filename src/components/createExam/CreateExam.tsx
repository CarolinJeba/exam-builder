import React, { useContext, useState } from "react";
import ExamContext from "../../context/exam/ExamContext";

import { v4 as uuidv4 } from "uuid";

const CreateExam = () => {
  const examContext: any = useContext(ExamContext);

  const [subject, setSubject] = useState("ENGLISH");

  const onChangeHandler = (e: any) => {
    debugger

    setSubject(e.target.value);
  };
  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    examContext.createExam({
      id: uuidv4(),
      examName: subject
    });
    setSubject("ENGLISH");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h2 className="text-primary">Choose a Subject</h2>

      <ul>
        <li>
          <input
            type="radio"
            name="subject"
            value="ENGLISH"
            checked={subject === "ENGLISH"}
            onChange={onChangeHandler}
          />{" "}
          <label>ENGLISH</label>
        </li>
        <li>
          <input
            type="radio"
            name="subject"
            value="SCIENCE"
            checked={subject === "SCIENCE"}
            onChange={onChangeHandler}
          />{" "}
          <label>SCIENCE</label>
        </li>
        <li>
          <input
            type="radio"
            name="subject"
            value="MATHS"
            checked={subject === "MATHS"}
            onChange={onChangeHandler}
          />{" "}
          <label>MATHS</label>
        </li>
      </ul>
      <input
        type="submit"
        value="CREATE EXAM"
        className="btn btn-primary btn-block"
      />
    </form>
  );
};

export default CreateExam;
