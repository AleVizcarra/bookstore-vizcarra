import { booksStock } from "../data/booksStock";

const getBooks = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(booksStock);
    }, 2000);
  });

export const getBooksFromDB = async(setDataState) => {
    try {
        const result = await getBooks;
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