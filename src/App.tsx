import "./App.scss";
import React, { Fragment } from "react";
import Navbar from "./components/layout/navBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import  NewExam  from "./pages/NewExam";
import  ViewExam  from "./pages/ViewExam";
import ExamState from "./context/exam/ExamState";

const App = () => {
  const title: string = "Exam Builder Application";

  return (
    <ExamState>
      <Router>
        <Fragment>
          <Navbar title={title} />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/exam/new" component={NewExam} />
              <Route exact path="/exam/view" component={ViewExam} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ExamState>
  );
};

export default App;
