import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import AddUser from '../pages/AddUser';
import EditUser from '../pages/EditUser';

import { isAuthenticated } from '../services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );

function Routes() {
  return (
  <>
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          {isAuthenticated ? (
            <>
              <PrivateRoute path="/home" component={Home} />
              <PrivateRoute path="/add" component={AddUser} />
              <PrivateRoute path="/edit" component={EditUser} />
            </>
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </BrowserRouter>
  </>);
}

export default Routes;