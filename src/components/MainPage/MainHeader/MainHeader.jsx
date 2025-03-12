import './MainHeader.css'
import Logo from '../../../assets/tea-box.png';
import { Link } from 'react-router-dom'; 

export default function MainHeader() {
  return(
    <header>
      <button className='home-icon'>
        <Link to={"/"}> 
          <img src={Logo} alt="Tea Time Logo" className="app-logo" />
        </Link>
      </button>
      <h1>Tea Time</h1>

    </header>
  );
}