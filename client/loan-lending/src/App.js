import './App.css';
import { Button, ButtonGroup,Stack} from '@chakra-ui/react'
import {Route} from 'react-router-dom'
import Home from './pages/home';
import Auth from './pages/auth';
import Apply from './pages/apply';
import Modify from './pages/modify';
import Profile from './pages/profile';
function App() {
  return (
    <div className="App">
      <Route path='/apply' component={Apply}/>
      <Route path='/auth' component={Auth}/>
      <Route path='/modify' component={Modify}/>
      {/* <Route path='/profile' component={Profile}/> */}
    </div>
  );
}

export default App;
