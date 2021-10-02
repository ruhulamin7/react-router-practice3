import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Employees from './components/Employees/Employees';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Employee from './components/Employees/Employee/Employee';
import NotFound from './components/NotFound/NotFound';
import EmployeeDetail from './components/EmployeeDetail/EmployeeDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/employee">
            <Employees></Employees>
          </Route>
          <Route exact path="/employee/:id">
            <Employee></Employee>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
