import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import ScarletScreen from './App';
import GrayScreen from './Inicial';

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="scarlet"
          component={ScarletScreen}
          title="Scarlet"
          initial
        />
        <Scene
          key="gray"
          component={GrayScreen}
          title="Gray"
        />
      </Scene>
    </Router>
  );
}

export default Routes;