import {AdminMain, SideBlock} from "./adminPanelStyles";
import SearchPanel from "../SearchPanel/SearchPanel";
import UserList from "../UserList/UserList";
import React from "react";


const AdminPanel = ()=>{
  return(
      <AdminMain>
        <SideBlock>
            <SearchPanel/>
        </SideBlock>
        <UserList/>
      </AdminMain>
  )
};
export default AdminPanel;