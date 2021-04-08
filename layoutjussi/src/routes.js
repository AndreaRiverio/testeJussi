import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Home from './page/Home/index.js';

export default function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
}