import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyle } from '../src/globalStyles';
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Switch>
        <Route exact="/" component={Home}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
