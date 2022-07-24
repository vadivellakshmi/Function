import React, { useState } from "react";

const Hit = (props) =>{
    const[count, setCount]= useState(props.usercount);
  

    const changeVal = () =>{

        setCount(count + 1 )
    }
        return(
    
            <div>
                    
                    
                    <button onClick={changeVal}> <i class="fa-solid fa-thumbs-up"></i>
                    </button>
                    {count}
                   
            </div>
        )

}

export default Hit;