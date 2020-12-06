import AdminPanel from './AdminPanel/AdminPanel';
import styled from 'styled-components';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import AddUser from "./AddUser/AddUser";
import React from "react";
import EditUser from "./EditUser/EditUser";
import FindUsers from "./FindedUsers/FindUsers";


const MainApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const App = () => {
  return (
    <MainApp>
        <h1>Admin Panel</h1>
        <Router>
            <Switch>
                <Route path={'/'} exact component={AdminPanel} />
                <Route path={'/addUser'} component={AddUser} />
                <Route path={'/searchResult'} component={FindUsers} />
                <Route path={'/editUser:id'} component={EditUser} />
            </Switch>
        </Router>
    </MainApp>
  );
}

export default App;
