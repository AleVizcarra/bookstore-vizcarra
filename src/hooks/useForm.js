import { useState } from "react"


export const useForm = (initialState = {}) => {

    const [inputValues, setInputValues] = useState(initialState);

    const handleInputChange = ({target}) => {
        setInputValues({
            ...inputValues,
            [target.name]: target.value,
        });
    };

    const reset = () => {
        setInputValues(initialState);
    }

    return [inputValues, setInputValues, handleInputChange, reset];

}