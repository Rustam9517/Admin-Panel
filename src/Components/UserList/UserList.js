import React from "react";
import {Link} from "react-router-dom";
import {UserProfile, Users, UsersBlock} from "./userListStyle";


const UserList = ()=>{
    const usersInLocal = {...localStorage};
    const usersInArray = [];
    if(usersInLocal){
        Object.values(usersInLocal).forEach(el=>{
            usersInArray.push(JSON.parse(el));
        });
    }
    const showUsers = usersInLocal?usersInArray.map(el =>{
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
            <UsersBlock>
                <h1>User List</h1>
                <Users>
                    <Link to={'/addUser'} className={'addUser'}>+</Link>
                    {showUsers}
                </Users>
            </UsersBlock>
    )
};
export default UserList;