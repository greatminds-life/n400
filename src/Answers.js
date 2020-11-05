import React from "react";
import Typography from "@material-ui/core/Typography";

const Answers = (props) => {
  return (
    <div>
        {props.ans.map((ans) => (
          <Typography>{ans}</Typography>
        ))}
    </div>
  );
};

export default Answers;
