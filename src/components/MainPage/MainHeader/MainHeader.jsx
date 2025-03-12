import './MainHeader.css'
import Logo from '../../../assets/tea-box.png';
// import { Link } from 'react-router-dom';  // Add Link import
import { Routes, Route } from 'react-router-dom';
// import App from "../../App/App"; 

export default function MainHeader() {
  return(
    <header>
      <button className='home-icon'>
        {/* <Link to={"/"}>  */}
          <img src={Logo} alt="Tea Time Logo" className="app-logo" />
        {/* </Link> */}
      </button>
      <h1>Tea Time</h1>

      <Routes>

      </Routes>
    </header>
  );
}