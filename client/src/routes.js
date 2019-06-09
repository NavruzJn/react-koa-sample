import React from 'react';

const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const Devices = React.lazy(() => import('./views/Devices/Devices'));
const Device = React.lazy(() => import('./views/Devices/Device'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Users },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/devices', exact: true,  name: 'Devices', component: Devices },
  { path: '/devices/:id', exact: true, name: 'Device Details', component: Device },
];

export default routes;
