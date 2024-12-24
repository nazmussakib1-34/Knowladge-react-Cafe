import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-zinc-700 m-3 p-4 rounded-lg md:gap-x-2'>
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.array
};

export default Bookmark;