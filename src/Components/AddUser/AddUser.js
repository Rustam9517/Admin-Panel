import React, {useState} from "react";
import {Link} from "react-router-dom";
import validation from "./validation";
import {AddUserMain, FormBlock} from "./addUserStyle";
import swal from 'sweetalert';
import {currDate} from "./currentDate";
import {connect} from 'react-redux';
import {addToStorage} from "../../redux/actions";

const AddUser = (props) =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [mobile,setMobile] = useState('');
    const [fullName,setFullName] = useState('');
    const [status,setStatus] = useState('');
    const [errorMsg,setErrMsg] = useState('');
    const {addToStorage} = props;

    const addEvent = () =>{
        const valObject = validation(email,mobile,password,fullName,status);
        setErrMsg(valObject);

        const checkVal = Object.values(valObject).every((value) => value === false);
        if(checkVal){
            const currentDate = currDate();
            const data = {
                name:fullName,
                email:email,
                password:password,
                mobile:mobile,
                status:status,
                date: `${currentDate.date}, ${currentDate.time}`
            }
            swal({
                text: "User successfully added!",
                buttons: false,
                icon: "success",
                timer: 2000,
            })
            addToStorage(data);
        }
    }
    return(
        <AddUserMain>
            <Link to={'/'}>Back</Link>
            <FormBlock>
                {errorMsg.emailVal?<p>{errorMsg.emailErr}</p>:null}
                <label>
                    <span>E-mail</span>
                    <input
                        type="email"
                        onChange={(event => setEmail(event.target.value))}
                        placeholder={"example@mail.com"}
                    />
                </label>
                {errorMsg.passVal?<p>{errorMsg.passErr}</p>:null}
                <label>
                    <span>Password</span>
                    <input
                        type="password"
                        onChange={(event => setPassword(event.target.value))}
                    />
                </label>
                {errorMsg.mobVal?<p>{errorMsg.mobErr}</p>:null}
                <label>
                    <span>Mobile number</span>
                    <input type="tel"

                           placeholder="+994777170395"
                           onChange={(event => setMobile(event.target.value))}
                           required
                    />
                </label>
                {errorMsg.nameVal?<p>{errorMsg.nameErr}</p>:null}
                <label>
                    <span>Full name</span>
                    <input
                        type="text"
                        placeholder={'Surname, Name'}
                        onChange={(event => setFullName(event.target.value))}
                    />
                </label>
                {errorMsg.statVal?<p>{errorMsg.statErr}</p>:null}
                <label>
                    <span>Status</span>
                    <select name="status" defaultValue="" onChange={(event => setStatus(event.target.value))}>
                        <option disabled={true} value="">Select Status</option>
                        <option value="client">Client</option>
                        <option value="partner">Partner</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
            </FormBlock>
            <Link onClick={addEvent} to={'/'}>Add</Link>
        </AddUserMain>
    )
}
const mapDispatchToProps = (dispatch) =>{
    return {
        addToStorage : data => dispatch(addToStorage(data))
    }
};
export default connect(null,mapDispatchToProps)(AddUser);