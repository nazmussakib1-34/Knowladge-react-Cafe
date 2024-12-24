import PropTypes from 'prop-types';

const Author = ({author}) => {
    
    const {name, profile_picture} = author;
    return (
        <div className='flex items-center gap-3 mb-6'>
            <img className ='rounded-full w-12 h-12' src={profile_picture} alt="" />
            <div>
                <h3 className='font-bold text-xl'>{name}</h3>
                <p className=''>Mar 14(4 Days ago)</p>
            </div>
        </div>
    );
};
Author.propTypes = {
    author: PropTypes.object
  };

export default Author;