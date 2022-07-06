
const Validation = (values) =>{
    let error = {};
    if(!values.name){
        error.name = "name is required  "
    }
    if(!values.email){
        error.email = "email is required  "
    }
    else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email))
    {
        error.email = "email is invalid  "
    }
    if(!values.password){
        error.password = "password is required"
    }
    else if(values.password.length<5)
    {
        error.password = "password must be more than 5 characters"
    }
    if(!values.confPassword){
        error.confPassword = "confPassword is required  "
    } 
    else if(values.password!=values.confPassword)
    {
        error.confPassword = "confPassword must be same as password  "
    }
    
   

    return error;
}
export default Validation;