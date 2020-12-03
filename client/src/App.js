import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParentPrivateRoute from './ParentPrivateRoute';
import AdminPrivateRoute from './AdminPrivateRoutes';
import store from './store';
import Home from './pages';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Parent from './pages/Parent';
import Doctor from './pages/Doctor';
import Child from './pages/Child';
import Admin from './pages/Admin';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <p><Link to="/loign">Login</Link></p>
        <p><Link to= "/signup">Signup</Link></p>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/admin" component={Admin} />
          <ParentPrivateRoute exact path="/parent" component={Parent} />
          <ParentPrivateRoute exact path="/parent/child" component={Child} />
          <AdminPrivateRoute exact path="/admin/home" component={Doctor} />
          <AdminPrivateRoute exact path="/admin/child" component={Child} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
