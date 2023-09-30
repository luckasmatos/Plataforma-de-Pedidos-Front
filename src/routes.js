import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Orders from './pages/Orders'


function Routes() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/order" component={Orders} />
            </Switch>
        </Router>
    )
}

export default Routes