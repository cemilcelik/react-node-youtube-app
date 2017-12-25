import react from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { Layout } from './components';
import { Home } from './containers';

const Routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
);

export default Routes;
