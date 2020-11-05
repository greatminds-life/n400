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
import Container from "@material-ui/core/Container";
import Grid from "@material-ui//core/Grid";
import Divider from "@material-ui//core/Divider";
import { sizing } from "@material-ui/system";
import Paper from "@material-ui/core/Paper";

import { FormatBold } from "@material-ui/icons";

const useStyles = (theme) => ({
  "@global": {
    // MUI typography elements use REMs, so you can scale the global
    // font size by setting the font-size on the <html> element.
    html: {
      fontSize: 16,
      [theme.breakpoints.up("xs")]: {
        fontSize: 14,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 16,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 16,
      },
    },
  },
  root: {
    mindWidth: 500,
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
  grid: {
    padding: 20,
    alignContent: "center",
    justifyContent: "center",

  },
  qgrid: {
    mindHeight: 500,
  },
  question: {
    fontSize: 16,
  },
  centerText: {
    textAlign: "left",
    padding: 20,
  },
  pos: {
    marginBottom: 12,
  },
  qpaper: {
    minHeight: 100,
    width: "auto",
    padding: 20,
  },
  apaper: {
    height: 550,
    width: "auto",
    padding: 20,
    marginBottom: 20,
  },
  buttons: {
    justifyContent: "right",
  },
});

class Questions extends Component {
  state = {
    showAnswer: false,
    num: 86,
    ansBtnText: "Show Answer",
  };

  flipBtnTextHandler = () => {
    this.state.showAnswer
      ? this.setState({ ansBtnText: "Show Answer" })
      : this.setState({ ansBtnText: "Hide Answer" });
  };

  showAnswerHandler = () => {
    let showAns = this.state.showAnswer;
    this.setState({ showAnswer: !showAns });
    this.flipBtnTextHandler();
  };

  loadNextQuestionHanlder = () => {
    let currentNum = this.state.num;
    if (currentNum == 99) {
      this.setState({ num: 0 });
    } else {
      this.setState({ num: currentNum + 1 });
    }
    if (this.state.showAnswer) {
      this.showAnswerHandler();
    }
  };

  loadPrevQuestionHanlder = () => {
    let currentNum = this.state.num;
    if (currentNum == 0) {
      this.setState({ num: 99 });
    } else {
      this.setState({ num: currentNum - 1 });
    }
    if (this.state.showAnswer) {
      this.showAnswerHandler();
    }
  };

  loadRandomQuestionHanlder = () => {
    this.setState({ num: Math.floor(Math.random() * 100) });
    if (this.state.showAnswer) {
      this.showAnswerHandler();
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.grid} direction="column">
        <Grid container xs={12} sm={6} spacing={2} direction="column">
          <Grid item >
            <Paper className={classes.qpaper}>
              <Box fontWeight="fontWeightBold">
                Question {this.state.num + 1}
              </Box>
              <Box>{questions[this.state.num].q}</Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.apaper}>
              <Box>
                {this.state.showAnswer ? (
                  <Answers ans={questions[this.state.num].a} />
                ) : " "}
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={2} xs={12} sm={6} className={classes.buttons}>
          <Grid item>
            <Button
              color="default"
              size="medium"
              onClick={this.loadPrevQuestionHanlder}
            >
              Prev
            </Button>
          </Grid>

          <Grid item>
            <Button
              color="default"
              size="medium"
              onClick={this.loadNextQuestionHanlder}
            >
              Next
            </Button>
          </Grid>

          <Grid item>
            <Button
              color="primary"
              size="medium"
              onClick={this.loadRandomQuestionHanlder}
            >
              Random
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              size="medium"
              onClick={this.showAnswerHandler}
            >
              {this.state.ansBtnText}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(Questions);
