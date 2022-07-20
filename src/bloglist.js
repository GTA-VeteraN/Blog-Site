import {Link } from "react-router-dom";
const BlogList = ({blogs, title , handleDelete}) => {
    return (  
        
        <div className="blog-list">
            <h1>{title}</h1>
            { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                <Link to ={`/blogs/${blog.id}`}>
                    <div className = "blog-preview-data">
                        <h2>{ blog.title }</h2>
                        <p>Written By { blog.author} </p> 
                    </div>
                </Link>
                    
                    <div className="blog-preview-delete">
                        
                           <button className ="delete-button" onClick = { () => handleDelete(blog.id)} >Delete</button>
                        
                    </div>
                    
                </div>
                
            ) )}
        </div>
    );
}
 
export default BlogList;
