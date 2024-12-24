
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleToBookmark, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogsData.json')
        .then(res=>res.json())
        .then(data => setBlogs(data))
    },[]);
    return (
        <div className='md:w-2/3'>
            <h2>Blogs:{blogs.length}</h2>
        <div className='grid md:grid-cols-2 gap-3'>
        {
            blogs.map(blog => <Blog
                 key={blog.id} blog={blog}
                 handleToBookmark={handleToBookmark}
                 handleMarkAsRead={handleMarkAsRead}
                 ></Blog>)
        }
        </div>

        </div>
    );
};
Blogs.propTypes = {
    handleToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};

export default Blogs;