import { render } from "@testing-library/react";
import React, { Component } from "react";
import { questions } from "./data";
import Answers from "./Answers";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { FormatBold } from "@material-ui/icons";

const useStyles = (theme) => ({
  root: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 10,
  },
  question: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

class Questions extends Component {
  state = {
    showAnswer: false,
    num: 0,
    ansBtnText: "Show Answer"
  };

  flipBtnTextHandler = () => {
    this.state.showAnswer ? this.setState({ansBtnText: "Show Answer"}) : this.setState({ansBtnText: "Hide Answer"});
  }

  showAnswerHandler = () => {
    let showAns = this.state.showAnswer;
    this.setState({ showAnswer: !showAns });
    this.flipBtnTextHandler();    
  }

  loadNextQuestionHanlder = () => {
    let currentNum = this.state.num;
    if (currentNum == 2)  {
      this.setState({ num: 0 });
    } else {
      this.setState({ num: currentNum+1 });
    }
    if (this.state.showAnswer) {this.showAnswerHandler()}
  }

  loadPrevQuestionHanlder = () => {
    let currentNum = this.state.num;
    if (currentNum == 0)  {
      this.setState({ num: 2 });
    } else {
      this.setState({ num: currentNum-1 });
    }
    if (this.state.showAnswer) {this.showAnswerHandler()}
  }

  loadRandomQuestionHanlder = () => {
    this.setState({ num: Math.floor(Math.random() * 3) });
    if (this.state.showAnswer) {this.showAnswerHandler()}
  }



  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardContent
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          <Typography>
            <Box fontWeight="fontWeightBold" fontSize={12}>Question {this.state.num + 1}</Box>
          </Typography>
        </CardContent>

        <CardContent
          className={classes.question}
          color="textSecondary"
          gutterBottom
        >
          <Typography>{questions[this.state.num].q}</Typography>
        </CardContent>
        <CardActions>
          <Button variant = "contained" color="default" size="small" onClick={this.loadPrevQuestionHanlder}>
            Prev
          </Button>
          <Button variant = "contained" color="default" size="small" onClick={this.loadNextQuestionHanlder}>
            Next
          </Button>
          <Button variant = "contained" color="primary" size="small" onClick={this.loadRandomQuestionHanlder}>
            Random
          </Button>
          <Button variant = "contained" color="secondary" size="small" onClick={this.showAnswerHandler}>
            {this.state.ansBtnText}
          </Button>
        </CardActions>
        <CardContent
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          <Typography>
            {this.state.showAnswer ? (
              <Answers ans={questions[this.state.num].a} />
            ) : null}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(useStyles)(Questions);
