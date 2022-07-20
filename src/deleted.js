import { Link } from "react-router-dom";
const Deleted = () => {
    return ( 
        <div className="blog-delete">
            <h2>Blog Deleted Successfully.</h2>
            <Link to = "/" > Go to Home Page ....</Link>
        </div>
     );
}
 
export default Deleted