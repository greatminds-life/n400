import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
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
