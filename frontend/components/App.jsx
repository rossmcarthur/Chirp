import React from 'react';
import Modal from './modal/modal_container';
import HomeContainer from './home/home_container';
import UserHome from './user_home/user_home';
import ProfileContainer from './profile/profile_container';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => (
  <div className='app-div'>
    <header className='app-header'>
      <Modal />
      <Switch>
        <Route exact path='/users/:username' component= { ProfileContainer } />
        <Route exact path="/" component={ HomeContainer } />
      </Switch>
    </header>
  </div>
);

export default App;
