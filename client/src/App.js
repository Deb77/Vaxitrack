import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Parent from './pages/Parent';
import Doctor from './pages/Doctor';
import Child from './pages/Child';
import Admin from './pages/Admin';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <h1>Hell</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/parent" component={Parent} />
          <Route exact path="/parent/child" component={Child} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin" component={Doctor} />
          <Route exact path="/admin/child" component={Child} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;