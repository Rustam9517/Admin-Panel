const validation = (email,mobile,password,name,status) =>{
    const emailPattern =/\S+@\S+\.\S+/;
    const phonePattern = /^\+[1-9]{1,3}[0-9]{3,14}$/;
    const errorMessage = {
        emailVal : false,
        mobVal : false,
        passVal : false,
        nameVal : false,
        statVal : false
    };
    if(!email||!email.replace(/\s/g, '').length || !emailPattern.test(email)){
        errorMessage.emailVal=true;
        errorMessage.emailErr = 'Email is Wrong!';
    }
    if(!mobile||!mobile.replace(/\s/g, '').length || !mobile.match(phonePattern)){
        errorMessage.mobVal=true;
        errorMessage.mobErr = 'Mobile Number is Wrong!';
    }
    if(!password||!password.replace(/\s/g, '').length){
        errorMessage.passVal=true;
        errorMessage.passErr = 'Password is Wrong!';
    }
    if(!name||!name.replace(/\s/g, '').length){
        errorMessage.nameVal=true;
        errorMessage.nameErr = 'Name is Wrong!';
    }
    if(!status){
        errorMessage.statVal=true;
        errorMessage.statErr = 'Select status!';
    }

    return errorMessage;
};

export default validation;