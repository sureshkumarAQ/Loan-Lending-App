import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
import { Route } from 'react-router-dom'
import Home from './pages/home';
import Auth from './pages/auth';
import Apply from './pages/apply';
import Modify from './pages/modify';
import Profile from './pages/profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='/apply' component={Apply} />
      <Route path='/auth' component={Auth} />
      <Route path='/modify' component={Modify} />
      <Route path='/profile' component={Profile} />
      <Route path='/home' component={Home} />
    </div>
  );
}

export default App;
