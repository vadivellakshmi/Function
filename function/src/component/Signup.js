import React, { useEffect , useState} from "react";
import Validation from "./Validation";



const Signup = ({submitForm}) =>{
    
    const[values, setValues]= useState(
        {
            name:"",
            email:"",
            password:"",
            confPassword:"",
        }
    );
   
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const [error, setError] = useState({});
   
   const handleChange = (e) =>{
    setValues({...values, [e.target.name]: e.target.value,})

   }
   
    const handleSubmit=(e)=>{

        e.preventDefault();

     setError(Validation(values));
            
     setDataIsCorrect(true); 
    

       
    }

 useEffect(() =>{
    if(Object.keys(error).length === 0 && dataIsCorrect){submitForm(true)}
  },[error])
    
    return(
        <div className="form-heading">
        <h2 className="heading"> Instargram  Sign-up Form </h2>
       
        <form onSubmit={(e) => {handleSubmit(e)}}>
        
       
        <label>Name:</label><br/>
          <input type="text" name = "name" value={values.name}  onChange={(e) => {handleChange(e)}} /><br/> <br/><p>{error.name}</p>
          <label >Email:</label><br/>
          <input type="email" name = "email" value={values.email}  onChange={(e) => {handleChange(e)}} /><br/> <br/><p>{error.email}</p>
          <label > Password:</label><br/>
          <input type="password" name = "password" value={values.password}  onChange={(e) => {handleChange(e)}} /><br/>   <br/> <p>{error.password}</p>
          <label > Confirm Password:</label><br/>
          <input type="password" name = "confPassword" value={values.confPassword}  onChange={(e) => {handleChange(e)}} /><br/>   <br/>  <br/> <p> {error.confPassword} </p> 
          <input type="submit" value="Submit"  /> 
         
          </form>

        </div>
    )
}

export default Signup;