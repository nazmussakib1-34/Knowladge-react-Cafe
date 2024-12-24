import Profile from '../../../public/images/profile.png';
const Navber = () => {
    return (
        <div className="flex justify-between items-center  bg-lime-100 p-2 rounded-sm">
            <h1 className="text-3xl font-bold">
            <span>Knowladge </span><br /> <span className="text-orange-400">CAFE-STORE</span>
            </h1>
            <img  className='pr-2' src={Profile} alt="Profile Picture" />
        </div>
    );
};

export default Navber;