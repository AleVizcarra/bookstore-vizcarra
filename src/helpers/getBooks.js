import { booksStock } from "../data/booksStock";

const getBooks = (categoryId) => {
    return new Promise((resolve, reject) => {

        (categoryId === '') ? (
            setTimeout(() => {
                resolve(booksStock);
            }, 2000)
        ) : (
            setTimeout(() => {
                resolve(booksStock.filter((book) => book[categoryId] === true));
            }, 2000)
        )
    });
};
    

export const getBooksFromDB = async(setDataState, categoryId) => {
    setDataState({
        loading: true,
        data: null,
      });
    
    try {
        const result = await getBooks(categoryId);
        setDataState({
            loading: false,
            data: result,
        });
    } catch (error) {
        console.log(error);
        setDataState({
            loading: false,
            data: null,
        });
    };
};