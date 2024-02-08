import { useContext } from 'react';
import { PostList } from '../store/post-list-store';

import {AiFillDelete } from 'react-icons/ai';


const Post = ({post})=>{
  const {deletePost} = useContext(PostList);
    return (
      
        <div className="card post-card " style={{width: "30rem"}}>
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">{post.title}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
    onClick={()=>deletePost(post.id)}> 
     
    <AiFillDelete/>
    <span className="visually-hidden">unread message </span>
    
    </span>
    </h5>
    <p className="card-text">{post.body}</p>

    {post.tags.map((tag)=>(
      <span key={tag} className = "badge text-bg-primary hashtag">{tag}</span>
    ))}
      <div className='alert alert-success reactions' role = "alert">
       This post has been reacted by {post.reactions} pepole.
      </div>
    
  </div>
</div>
       
    )
}

export default Post;