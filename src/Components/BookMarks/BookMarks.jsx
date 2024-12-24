import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const BookMarks = ({bookmarks, readingtime}) => {

    return (
        <div className='bg-amber-400 m-2 p-2 rounded-lg mt-10  md:w-1/3 '>
           <h3 className='text-3xl font-bold text-center my-7'> 
            Reading Time:{readingtime}
            <br />
            Book Marked:{bookmarks.length}</h3>
           <div >
            {
                bookmarks.map((bookmark, index)=><Bookmark key={index} bookmark={bookmark}></Bookmark>)
            }
           </div>
        </div>
    );
};
BookMarks.propTypes = {
    bookmarks: PropTypes.array,
    readingtime: PropTypes.number
};
export default BookMarks;
