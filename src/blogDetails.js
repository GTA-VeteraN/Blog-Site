import { useHistory,useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const { id } = useParams();
    const {data : blog , isPending , error} = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();
    const handleClick = () =>{
        fetch(`http://localhost:8000/blogs/${blog.id}`,{
            method : 'DELETE'
        }).then(() =>{
            history.push("/");
        })
    }
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading ....</div>}
            {error && <div> { error} </div>}
            { blog && (
                <article>
                    <div className="heading"> { blog.title }</div>
                        <div className="blog-details-body">
                        <p className ="blog-author">Written by - {blog.author }</p> 
                        <div className="blog-body"> { blog.body} </div>
                        <button onClick ={ handleClick}>Delete</button>
                    </div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;