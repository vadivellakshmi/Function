import React, { useState } from "react";

const Like = (props) =>{
    const[count, setCount]= useState(props.usercounts);;
  

    const changeVal = () =>{

        setCount(count + 1 )
    }
        return(
    
            <div>
                    
                    
                    <button onClick={changeVal}> <i class="fa-solid fa-heart"></i>
                    </button>
                    {count}
                   
            </div>
        )

}

export default Like;