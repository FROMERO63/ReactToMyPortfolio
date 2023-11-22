import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Header() {
  return (
    <nav id="navContainer">
        <div class="navbar-item" id="myName">Frank Romero
          <div>
            <Navbar/>
          </div>
        </div>
    </nav>
  );
}
