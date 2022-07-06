import React, { useEffect, useState } from "react";
import axios from "axios";
const Twitterpage = () =>{
const[list, setList] = useState([]);
const[search, setSearch]= useState([]);
useEffect(() =>{
   axios({url:"http://fakeapi.jsonparseronline.com/posts", 
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
                    else if(search == item.likes){return item}
                    
                 }).map((item) =>{
                     return(
            <div>            
            <div className="Post-user">

             <div className="Post-user-profilepicture">

             <img src="https://i.stack.imgur.com/6KMzJ.png" alt="" />

                     </div>

              <div className="Post-user-nickname">

                <span>User-Name{item.id}</span>

               </div>
               </div> 

               <div className="Post-image">

            <div className="Post-image-bg">

              <img alt="" src="https://th.bing.com/th/id/R.9069ae2c83237354d556ac82e37c8066?rik=wVvlGFIhBYX5bg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fHD-images-of-nature-download.jpg&ehk=J7hY3CfwcsW7lTkuGbE3nQPUYPdt1OTluYfKHRW62qs%3d&risl=&pid=ImgRaw&r=0" />
                         
          </div>

             </div>

             <div className="Post-caption">

             <span className= "likes"><i class="fa-solid fa-heart"></i>&nbsp;{item.likes}&nbsp;&nbsp;&nbsp; <i class="fa-solid fa-thumbs-up"></i> &nbsp;{item.hits}&nbsp;&nbsp;&nbsp; <i class="fa-solid fa-comment-dots"></i>&nbsp;{item.categoryId} &nbsp;&nbsp;&nbsp;</span><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.title} </strong> 

                        </div>
                        <article className ="content" >
                            {item.content}
                        </article>
               </div>
              
                        



         

                      )})}        
          

        </div>

    


      


    )
}
export default Twitterpage;