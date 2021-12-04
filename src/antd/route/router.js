import Index from "../index";
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHashHistory } from 'history';
const history = createHashHistory();

export default class RouterConfig extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact render={() => (
                        <Redirect to="/index" />
                    )}></Route>
                    <Route path="/index" component={Index}></Route>
                </Switch>
            </Router>
        )
    }
};
