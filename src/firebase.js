// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKfdIQM4yUSYUR7VVJdBFhAfWUZbn1tGY",
  authDomain: "plot-twist-bookstore.firebaseapp.com",
  projectId: "plot-twist-bookstore",
  storageBucket: "plot-twist-bookstore.appspot.com",
  messagingSenderId: "1048859219287",
  appId: "1:1048859219287:web:3e6ea3582c05662e9dda12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Método que me devuelve la conexión a la base de datos de Firestore
const db = getFirestore();

const itemsCollection = collection(db, "items");

// Función para traer productos (total o por categoría)
export const fetchBooks = async (categoryId) => {

    let snapshot = {};
    let books = [];

    if(categoryId === '') {
        // Todo el catálogo
        snapshot = await getDocs(itemsCollection);
    } else {
        // Productos por categoría
        const q = query(itemsCollection, where(categoryId, "==", true));
        snapshot = await getDocs(q);  
    }

    books = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return books;
};

// Función para traer un solo producto por su Id
export const fetchBookById = async (bookId) => {
    const bookById = doc(db, "items", bookId);
    const snapshot = await getDoc(bookById);

    if(!snapshot.exists()) {
        return {};
    }

    return {
        id: snapshot.id,
        ...snapshot.data(),
    };
};

// Agregar orden a firebase
export const addOrderToFirestore = async (newOrder) => {
    const ordersCollection = collection(db, 'orders');
    const { id } = await addDoc(ordersCollection, newOrder);

    return id;
}