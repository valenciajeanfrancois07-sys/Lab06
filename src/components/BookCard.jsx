export function BookCard({ title, author, available }) {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p><strong>Auteur:</strong> {author}</p>
      <p>
        <strong>Disponible:</strong> 
        <span className={available ? 'available' : 'unavailable'}>
          {available ? ' Oui' : ' Non'}
        </span>
      </p>
    </div>
  );
}
