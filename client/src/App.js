import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Parent from './pages/Parent';
import Doctor from './pages/Doctor';
import Child from './pages/Child';
import Admin from './pages/Admin';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/parent" component={Parent} />
          <PrivateRoute exact path="/parent/child" component={Child} />
          <PrivateRoute exact path="/admin" component={Admin} />
          <PrivateRoute exact path="/admin/home" component={Doctor} />
          <PrivateRoute exact path="/admin/child" component={Child} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
