import { fetchBookById } from "../firebase";

export const getBookDetails = async(bookId, setSelectedBook) => {
    try {
        const bookDetails = await fetchBookById(bookId);
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