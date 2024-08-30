import React, { useEffect, useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons, IonSpinner } from '@ionic/react';
import { firestore } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import './ListenToBook.css'; // Your CSS file for styling

// Import useParams from React Router if you're using it for routing
import { useParams } from 'react-router';

const ListenToBook: React.FC = () => {
  const [book, setBook] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>(); // Get book ID from URL parameters

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      try {
        const bookDocRef = doc(firestore, 'books', id);
        const bookDoc = await getDoc(bookDocRef);

        if (bookDoc.exists()) {
          setBook(bookDoc.data());
        } else {
          console.error(`No book found with ID: ${id}`);
        }
      } catch (error) {
        console.error('Error fetching book:', error);
      }
      setLoading(false);
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return <IonSpinner />;
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/books" />
          </IonButtons>
          <IonTitle>Listen to Book</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="listen-to-book-container">
          <img src={book.coverUrl} alt={book.title} className="book-cover" />
          <audio controls src={book.audioUrl} className="audio-player">
            Your browser does not support the audio element.
          </audio>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ListenToBook;
