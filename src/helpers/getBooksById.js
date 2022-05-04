import { booksStock } from "../data/booksStock";

const getBookById = (bookId) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(booksStock.find((book) => book.id === bookId));
        }, 2000);
    });
};

export const getBookDetails = async(bookId, setSelectedBook) => {
    try {
        const bookDetails = await getBookById(bookId);
        setSelectedBook({
            loading: false,
            bookDetails,
        });
    } catch (error) {
        console.log(error);
        setSelectedBook({
            loading: false,
            bookDetails: null,
        });
    };
};