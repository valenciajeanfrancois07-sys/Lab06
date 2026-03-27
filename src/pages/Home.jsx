import { useUser } from '../context/UserContext';
import { BookCard } from '../components/BookCard';
import { books } from '../data/books';

export function Home() {
  const user = useUser();

  return (
    <div className="home-page">
      <h1>Bonjour, {user.name}</h1>
      <h2>Bienvenue dans votre espace, {user.name}</h2>
      
      <div className="books-container">
        <h3>Bibliothèque disponible</h3>
        <div className="books-grid">
          {books.map((book) => (
            <BookCard 
              key={book.id} 
              title={book.title} 
              author={book.author} 
              available={book.available}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
