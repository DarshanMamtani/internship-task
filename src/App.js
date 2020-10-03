import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Home from './components/Home';

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('User is >>', authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    })
  }, [])


  return (
    <Router>
      <div>
        <Switch>
          <Route path='/home'>
            <Header />
            <Home />
          </Route>
          <Route path='/'>
            <Header />
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
