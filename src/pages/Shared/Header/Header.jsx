import moment from 'moment';
import logo from '../../../assets/logo.png'
const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism without Fear or Favor</p>
            <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
        </div>
    );
};

export default Header;