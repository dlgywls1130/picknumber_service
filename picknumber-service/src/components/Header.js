import '../css/header.css'
import logo from '../image/header_logo.png'

function Header(){

    const headerTilte = '순번관리시스템-서비스';

    return (
        <div className='header_wrap'>
            <div className='header_logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='header_title'>{headerTilte}</div>
        </div>
    );
}

export default Header