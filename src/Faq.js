import React, { useState } from "react";
import Qna from "./qna";

const FAQ = ({ data }) => {
  const [showIndex, setShowIndex] = useState(-1);

  const handleQna = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div>
      {data.faqs.map((qna, index) => (
        <Qna
          key={index} // Add key to avoid React warnings
          qna={qna}
          showAns={index === showIndex}
          handleQna={() => handleQna(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
