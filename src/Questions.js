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
    minWidth: 500,
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
    height: 150,
    width: 500,
    padding: 20,
  },
  apaper: {
    height: 400,
    width: 500,
    padding: 20,
  },
});

class Questions extends Component {
  state = {
    showAnswer: false,
    num: 0,
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
    if (currentNum == 2) {
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
      this.setState({ num: 2 });
    } else {
      this.setState({ num: currentNum - 1 });
    }
    if (this.state.showAnswer) {
      this.showAnswerHandler();
    }
  };

  loadRandomQuestionHanlder = () => {
    this.setState({ num: Math.floor(Math.random() * 3) });
    if (this.state.showAnswer) {
      this.showAnswerHandler();
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.grid}>
        <Grid container xs={12} spacing={2} direction="column">
          <Grid item>
            <Paper className={classes.qpaper}>
              <Typography>
                <Box fontWeight="fontWeightBold" fontSize={12}>
                  Question {this.state.num + 1}
                </Box>
              </Typography>
              <Typography>{questions[this.state.num].q}</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.apaper}>
              <Typography>
                {this.state.showAnswer ? (
                  <Answers ans={questions[this.state.num].a} />
                ) : null}
              </Typography>
            </Paper>
          </Grid>

          {/*           <Card>
            <CardContent>
              <Typography>
                <Box fontWeight="fontWeightBold" fontSize={12}>
                  Question {this.state.num + 1}
                </Box>
              </Typography>
              <Typography>{questions[this.state.num].q}</Typography>
              <Divider light />
              <Typography>
                {this.state.showAnswer ? (
                  <Answers ans={questions[this.state.num].a} />
                ) : null}
              </Typography>
            </CardContent>
          </Card> */}
        </Grid>

        <Grid container spacing={2} xs={12}>
          <Grid item>
            <Button
              color="default"
              size="small"
              onClick={this.loadPrevQuestionHanlder}
            >
              Prev
            </Button>
          </Grid>

          <Grid item>
            <Button
              color="default"
              size="small"
              onClick={this.loadNextQuestionHanlder}
            >
              Next
            </Button>
          </Grid>

          <Grid item>
            <Button
              color="primary"
              size="small"
              onClick={this.loadRandomQuestionHanlder}
            >
              Random
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              size="small"
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
