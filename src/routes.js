import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Wizard1 from './Components/Wizard/Wizard1';
import Wizard2 from './Components/Wizard/Wizard2';
import Wizard3 from './Components/Wizard/Wizard3';

export default <Switch>
    <Route component={Wizard1} exact path='/' />
    <Route component={Wizard2} path='/wizard2' />
    <Route component={Wizard3} path='/wizard3' />
</Switch>