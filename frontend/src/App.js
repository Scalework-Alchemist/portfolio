import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './transitions.css'
import { CheckerBoard } from "./components/checkerBoard/CheckerBoard";
import { Helloworld } from "./components/helloWorld/HelloWorld";
import { About } from './components/about/About';
import Contact from './components/contact/ContactForm'

class App extends Component {
 
  render() {
    const { location } = this.props;
    return (
      <div className="app-wrapper">
        <TransitionGroup>
          <CSSTransition
            in={true}
            appear={true}
            key={location.key}
            classNames="page-fade"
            timeout={600}
          >
            <Switch location={location}>
              <Route exact path="/" component={Helloworld} />
              <Route  path="/Portfolio" component={CheckerBoard} />
              <Route path="/About" component={About}/>
              <Route exact path="/Contact" component={Contact}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(App);
