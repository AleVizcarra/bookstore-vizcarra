import { fetchBooks } from "../firebase";

export const getBooksFromDB = async(setDataState, categoryId) => {
    setDataState({
        loading: true,
        data: null,
      });
    
    try {
        const result = await fetchBooks(categoryId);
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