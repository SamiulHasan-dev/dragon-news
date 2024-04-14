import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center  space-y-3'>
            <img className='mx-auto mt-6' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM YYYY ")}</p>
        </div>
    );
};

export default Header;