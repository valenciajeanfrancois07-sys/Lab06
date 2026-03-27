import { useUser } from '../context/UserContext';

export function Profile() {
  const user = useUser();

  return (
    <div className="profile-page">
      <h1>Profil Utilisateur</h1>
      
      <div className="profile-info">
        <div className="info-card">
          <h3>Nom</h3>
          <p>{user.name}</p>
        </div>
        
        <div className="info-card">
          <h3>Plan</h3>
          <p>{user.plan}</p>
        </div>
        
        <div className="info-card">
          <h3>Livres Empruntés</h3>
          <p>{user.borrowedCount}</p>
        </div>
      </div>
    </div>
  );
}
