import './MainHeader.css'
import Icon from './favicon.ico'
import { useLocation } from 'react-router-dom'

export default function HeaderContainer() {
  const location = useLocation();

  return(
    <header>
      <img src={Logo} alt="Tea Time Logo" className="app-logo" />
      <h1>Tea Time</h1>
      <h2>Welcome, Shop Owner!</h2>
      <p>Select a subscription below to see more details.</p>
    </header>
  );
}