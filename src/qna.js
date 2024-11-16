import React from "react";

const Qna = ({ qna, showAns, handleQna }) => {
  return (
    <div className="qna">
      <h3>{qna.questions}</h3>
      <hr />
      <span onClick={handleQna} style={{ cursor: "pointer" }}>
        {showAns ? "-" : "+"}
      </span>
      {showAns && <p>{qna.answers}</p>}
    </div>
  );
};

export default Qna;
