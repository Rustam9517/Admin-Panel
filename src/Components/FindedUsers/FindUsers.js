import {Link} from "react-router-dom";
import React, {useState} from "react";
import {FindBlock, FindList, UserSearch} from "./findedUsersStyle";
import {connect} from 'react-redux';
import SearchPanel from "../SearchPanel/SearchPanel";
import {SideBlock} from "../AdminPanel/adminPanelStyles";
import {UserProfile} from "../UserList/userListStyle";


const FindUsers = (props) =>{
    const [err,setErr] = useState(false);
    const {findUsersList}= props;
    const showUsers = findUsersList?findUsersList.map(el =>{
        return(
            <UserProfile key={el.id}>
                <Link to={{
                    pathname:`/editUser ${el.id}`,
                    state:{
                        id:el.id,
                        email:el.email,
                        name:el.name,
                        password:el.password,
                        mobile:el.mobile,
                        status:el.status,
                        createDate:el.date,
                        updateTime:el.updateTime?el.updateTime:null
                    }
                }}>
                    <p>{el.name.charAt(0)}</p>
                </Link>
                <h1>{el.name}</h1>
            </UserProfile>
        )
    }):null;
    return(
        <UserSearch>
            <SideBlock>
                <SearchPanel/>
            </SideBlock>
            <FindBlock>
                <Link to={'/'} className={'back'}>Back</Link>
                <h1>Filtered users</h1>
                <FindList>
                    {findUsersList.length===0?<p>User Not Founded</p>:null}
                    {showUsers}
                </FindList>
            </FindBlock>
        </UserSearch>
    )
}
const mapStateToProps = (state) =>{
    return {
        findUsersList:state.usersBySearch
    }
};
export default connect(mapStateToProps,null)(FindUsers);