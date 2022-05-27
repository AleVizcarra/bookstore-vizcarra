// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc, updateDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
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

// Actualizar stock
export const updateStock = async(book) => {
    try {
        const docToUpdate = doc(db, 'items', book.item.id)
        await updateDoc(docToUpdate, {stock: book.item.stock - book.quantity})
    } catch (error) {
        console.log(error);
    };
};