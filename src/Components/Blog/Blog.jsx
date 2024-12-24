import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';
import Author from '../Author/Author';
const Blog = ({blog, handleToBookmark, handleMarkAsRead}) => {
   
    const {title, image, content, hashtags, author, reading_time} =blog;
    return (
        <div className='rounded-xl pt-4 m-2 my-4 p-2 bg-stone-700 gap-3'>
            <img className='rounded-2xl pb-5 ' src={image} alt="" />
            <div className='flex '>
            <div className='w-2/3 py-4 px-4'>
            <div>
                <Author author={author}></Author>
            </div>
            <h3 className="text-3xl font-bold">
                {title}
            </h3>
            <p className='mt-4 pr-3'>{content}</p>
            <p className='text-yellow-300'>{hashtags}</p>
            <button
            onClick={()=>handleMarkAsRead(reading_time)} 
            className="text-blue-900 
            underline">Mark as read</button>
            </div>

            <div >
                <p>{reading_time} <span>min read</span>
                <button 
                onClick={()=>handleToBookmark(blog)}
                className="text-lime-500 ml-2">< CiBookmark />
                </button></p>
            </div>

            </div>

        </div>
    );

};
Blog.propTypes = {
    blog: PropTypes.object,
    handleToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
  };

export default Blog;