import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Theme from './theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParentPrivateRoute from './ParentPrivateRoute';
import AdminPrivateRoute from './AdminPrivateRoutes';
import store from './store';
import Home from './pages';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PasswordReset from './pages/PasswordReset';
import Parent from './pages/Parent';
import Child from './pages/Child';
import Admin from './pages/Admin';
import AdminHome from './pages/AdminHome';
import Alert from './components/Alerts'
import Header from './components/Header';

const options = {
  timeout: 3000,
  position: 'top center',
  type: 'error'
}

const App = () => {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate}{...options}>
        <Router>
          <Theme>
            <Alert />
            <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/reset/:token" component={PasswordReset} />
              <ParentPrivateRoute exact path="/parent" component={Parent} />
              <ParentPrivateRoute exact path="/parent/child" component={Child} />
              <AdminPrivateRoute exact path="/admin/home" component={AdminHome} />
              <AdminPrivateRoute exact path="/admin/child" component={Child} />
            </Switch>
          </Theme>
        </Router>
      </AlertProvider>
    </Provider>
  );
}

export default App;
