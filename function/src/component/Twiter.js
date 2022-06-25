import React, { useState,useEffect } from "react";
import axios from "axios";
const Twiter = () =>{
    const  [list, setList] = useState([]);
    const [search, setSearch] = useState([]);
    useEffect(() =>{
        axios({url:"http://fakeapi.jsonparseronline.com/posts",
         method: "GET"}).then((res) => {
            console.log(res.data);
            setList(res.data)
         });
    },[] );


   

    return(
       
            <div className={"container justify-content-center align-items-center"}>
               <h1 className="display-5 text-success me-3">Content Views</h1> <input type="number" placeholder="enter-like-count" onChange={(e) =>{setSearch(e.target.value)}}/>
                 {list.filter(item =>{
                    if(search == ""){return item}
                    else if(search == item.likes){return item}
                 }).map((item) =>{
                     return(
                        
                <div className="card w-auto">
              <div className="card-header text-primariy">
              VIEWS-ID {item.userId}
                      </div>
                 <div className="card-body">
               <h5 className="card-title text-success"> {item.title}</h5>
               <p className="card-text"> {item.content}</p>
               <a href="#" className="btn btn-primary me-3">LIKES <i class="fa-solid fa-heart"></i> <span className="badge bg-secondary">{item.likes}</span> </a> 
               <button type="button" className="btn btn-primary">
                HITS  <i class="fa-solid fa-thumbs-up"></i> <span className="badge bg-secondary">{item.hits}</span>
                  </button>
               <span className ="float-end"><i className="fa-brands fa-twitter"></i></span>
               </div>
                  </div>
                  
               
            
                    )
                })}
            </div>
    )

}
export default Twiter;

