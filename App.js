import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import HomePage from './HomePage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/" component={HomePage} />
            </Switch>
        </Router>
    );
};

export default App;