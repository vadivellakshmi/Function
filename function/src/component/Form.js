import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
const Form = () =>{
const[formIsSubmitted, setFormIsSubmitted] = useState(false);



const submitForm = () =>{

    setFormIsSubmitted(true);
}
    return(
        <div>
            {!formIsSubmitted ? <Signup submitForm={submitForm}/>: <Login/>}
        </div>
    )
}

export default Form;