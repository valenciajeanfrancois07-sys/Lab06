import { useUser } from '../context/UserContext';

export function Navbar({ onNavigate, currentPage }) {
  const user = useUser();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>Bibliothèque</h2>
      </div>
      <div className="nav-links">
        <button 
          className={currentPage === 'home' ? 'active' : ''} 
          onClick={() => onNavigate('home')}
        >
          Home
        </button>
        <button 
          className={currentPage === 'profile' ? 'active' : ''} 
          onClick={() => onNavigate('profile')}
        >
          Profile
        </button>
      </div>
      <div className="nav-user">
        <span>Bienvenue, {user.name}</span>
      </div>
    </nav>
  );
}
