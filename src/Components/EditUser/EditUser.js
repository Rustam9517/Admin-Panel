
import React from "react";
import {ControlButtons, EditInfo, FormElement} from "./EditUserStyles";
import {Link} from "react-router-dom";
import validation from "../AddUser/validation";
import {currDate} from "../AddUser/currentDate";
import swal from "sweetalert";

class EditUser extends React.Component{
    state ={
        id:null,
        email:null,
        password:null,
        mobile:null,
        fullName:null,
        status:null,
        errorMsg:null,
        createDate:null,
        updateTime: null,
        disabled:true
    }
    componentDidMount () {
        const {
            id,
            email,
            name,
            password,
            mobile,
            status,
            createDate,
            updateTime
        } = this.props.location.state;
        this.setState({
            id:id,
            email:email,
            password:password,
            mobile:mobile,
            fullName:name,
            status:status,
            updateTime: updateTime,
            createDate:createDate
        });
    }
    confirmChanges() {
        const valObject = validation(this.state.email,this.state.mobile,this.state.password,this.state.password,this.state.status);
        this.setState({
            errorMsg:valObject,
            disabled:true
        });
        const checkVal = Object.values(valObject).every((value) => value === false);
        if(checkVal){
            const currentDate = currDate();
            const data = {
                id:this.state.id,
                name:this.state.fullName,
                email:this.state.email,
                password:this.state.password,
                mobile:this.state.mobile,
                status:this.state.status,
                date:this.state.createDate,
                updateTime:`${currentDate.date}, ${currentDate.time}`
            }
            localStorage.setItem(data.id,JSON.stringify(data));
            swal({
                text: "User successfully edited!",
                buttons: false,
                icon: "success",
                timer: 2000,
            })
        }
    };
    removeUser(){
        localStorage.removeItem(this.state.id);
        swal({
            text: "User successfully deleted!",
            buttons: false,
            icon: "success",
            timer: 2000,
        })
    }

    render () {
    return(
        <EditInfo>
            <Link to={'/'}  className={'back'}>Back</Link>
            <FormElement>
                {this.state.errorMsg?this.state.errorMsg.emailVal?<p>{this.state.errorMsg.emailErr}</p>:null:null}
                <label>
                    <span>E-mail</span>
                    <input
                        type="email"
                        value={this.state.email?this.state.email:''}
                        onChange={(event => this.setState({email:event.target.value}))}
                        disabled={this.state.disabled}
                    />
                </label>
                {this.state.errorMsg?this.state.errorMsg.passVal?<p>{this.state.errorMsg.passErr}</p>:null:null}
                <label>
                    <span>Password</span>
                    <input
                        type="password"
                        value={this.state.password?this.state.password:''}
                        onChange={(event => this.setState({password:event.target.value}))}
                        disabled={this.state.disabled}
                    />
                </label>
                {this.state.errorMsg?this.state.errorMsg.mobVal?<p>{this.state.errorMsg.mobErr}</p>:null:null}
                <label>
                    <span>Mobile number</span>
                    <input type="tel"
                           value={this.state.mobile?this.state.mobile:''}
                           placeholder="+994-77-717-03-95"
                           onChange={(event => this.setState({mobile:event.target.value}))}
                           required
                           disabled={this.state.disabled}
                    />
                </label>
                {this.state.errorMsg?this.state.errorMsg.nameVal?<p>{this.state.errorMsg.nameErr}</p>:null:null}
                <label>
                    <span>Full name</span>
                    <input
                        type="text"
                        value={this.state.fullName?this.state.fullName:''}
                        placeholder={'Surname, Name'}
                        onChange={(event => this.setState({fullName:event.target.value}))}
                        disabled={this.state.disabled}
                    />
                </label>
                {this.state.errorMsg?this.state.errorMsg.statVal?<p>{this.state.errorMsg.statErr}</p>:null:null}
                <label>
                    <span>Status</span>
                    <select
                        name="status"
                        value={this.state.status?this.state.status:''}
                        onChange={(event => this.setState({status:event.target.value}))}
                        disabled={this.state.disabled}
                    >
                        <option disabled={true} value="">Select Status</option>
                        <option value="client">Client</option>
                        <option value="partner">Partner</option>
                        <option value="admin">Admin</option>

                    </select>
                </label>
                <p className={'creatingDate'}>Creating date: <span>{this.state.createDate}</span></p>
                <p className={'creatingDate'}>Update date: <span>{this.state.updateTime?this.state.updateTime:'Never'}</span></p>
            </FormElement>
            {!this.state.disabled?<button className={'button'} onClick={this.confirmChanges.bind(this)}>Confirm</button>:null}
            <ControlButtons>
                <button className={'button'} onClick={()=> this.setState({disabled:!this.state.disabled})}>Edit</button>
                <Link to={'/'} onClick={this.removeUser.bind(this)}>Delete</Link>
            </ControlButtons>
        </EditInfo>

    )
}


};

export default EditUser;