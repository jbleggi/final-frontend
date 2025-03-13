import Logo from '../../../assets/tea-box.png';
import { Link } from 'react-router-dom';

export default function DetailsHeader() {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="Tea Time Logo" className="app-logo" />
      </Link>
      <h1>Subscription Details</h1>
    </header>
  );
}
