import React from "react";

const ResultMessage = ({ result }) => {
  return result ? <p className="result-message">{result}</p> : null;
};

export default ResultMessage;
