import React, { useEffect, useState } from "react";
import axios from "axios";
import Hit from "./Hit";
import Like from "./Like";
const Twitterpage = () =>{
const[list, setList] = useState([]);
const[search, setSearch]= useState([]);
useEffect(() =>{
   axios({url:"https://fakestoreapi.com/products", 
   method: "get"}).then((res) =>{
    setList(res.data)
   })
    
},[])

    return(
        
       

        <div className="container">

          <div className="Nav-brand">

         <div><i className="fa-brands fa-instagram"></i> <span className="instargram">Instagram </span></div>  
         <div><input type="text" placeholder="search" onChange={(e) =>{setSearch(e.target.value)}}/></div>
          </div>
          {list.filter(item =>{
                    if(search == ""){return item}
                    else if(search == item.id){return item}
                    
                 }).map((item) =>{
                     return(
            <div>            
            <div className="Post-user">

             <div className="Post-user-profilepicture">

             <img src={item.image} alt="" />

                     </div>

              <div className="Post-user-nickname">

                <span>User-Name{item.id}</span>

               </div>
               </div> 

               <div className="Post-image">

            <div className="Post-image-bg">

            <img src={item.image} alt="" />
          </div>

             </div>

             <div className="Post-caption">
             {/* //<i class="fa-solid fa-heart"></i>&nbsp;{item.rating.rate} <i class="fa-solid fa-thumbs-up"></i> &nbsp;{item.rating.count} */}
             <span className= "likes"><Like usercounts= {item.rating.count}/>&nbsp;&nbsp;&nbsp; <Hit  usercount= {item.rating.rate}/> &nbsp;&nbsp;&nbsp;<i class="fa-solid fa-comment-dots"></i>&nbsp;{item.category} &nbsp;&nbsp;&nbsp; Rs.{item.price} <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.title} </strong> </span>

                        </div>
                        <article className ="content" >
                            {item.description}
                        </article>
               </div>
              
                        



         

                      )})}        
          

        </div>

    


      


    )
}
export default Twitterpage;