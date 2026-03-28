import { FaHeart, FaComment, FaShare } from "react-icons/fa";

export default function Posts(){
    const posts =[
      {id:1,date:"1/6/2023", title:"Sports", text:"Real Madrid wins the Champions League" },
      {id:2,date:"3/7/2023", title:"Politics", text:"The new president of the United States is Joe Biden" },
      {id:3,date:"10/9/2023", title:"Technology", text:"The new iPhone 12 is released" },
      {id:4,date:"15/10/2023", title:"Science", text:"The new discovery of the year is the new planet" },
      {id:5, date:"20/12/2023" ,title:"Health", text:"The new vaccine is released" },
      {id:6, date:"25/12/2023" ,title:"Entertainment", text:"The new movie is released" }
    ]
  

  return(
    
    <div className="posts">
      <h1>Posts</h1>
      {
        posts.map((post) =>{
          return(
            <div className="post" key={post.id}>
              <div className="post-title">
              <h2>{post.title}</h2>
                <p>{post.date}</p>
              </div>
              <p>{post.text}</p>
              <div className="post-icons">
                <FaHeart />
                <FaComment onClick={()=>{
                  alert("Comment")
                }}/>
                <FaShare />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}