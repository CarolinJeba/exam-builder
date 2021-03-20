import React from "react";

const ExamItem = (props: any) => {
  const { id, examName } = props.exam;
  console.log('props', props)
  console.log('props', examName)
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">{examName}</h3>

      <p>
          <button className="btn btn-primary btn-sm">READ</button>
          <button className="btn btn-dark btn-sm">UPDATE</button>
          <button className="btn btn-danger btn-sm">DELETE</button>
      </p>
    </div>
  );
};

export default ExamItem;
