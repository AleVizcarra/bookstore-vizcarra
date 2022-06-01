import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../../helpers/getBooksById";
import LoadingSpinner from "../ui/LoadingSpinner";
import MensajeErrorCarga from "../ui/MensajeErrorCarga";
import ItemDetail from "./ItemDetail";

import './itemDetail.css';

const ItemDetailContainer = () => {

    const {itemId} = useParams(); //retorna itemId como string

    const [selectedBook, setSelectedBook] = useState({
      loading: true,
      bookDetails: null,
    });

    const {loading, bookDetails} = selectedBook;

    useEffect(() => {
        getBookDetails(itemId, setSelectedBook);
    }, [itemId])
    

  return (
    <section className="item-detail-container animate__animated animate__fadeIn animate__fast">
      {
        (loading) ? (
          <LoadingSpinner />
        ) : (
          (Object.keys(bookDetails).length !== 0) ? (
            <ItemDetail bookDetails = {bookDetails}/>
          ) : (
            <MensajeErrorCarga mensaje='Lo sentimos, no contamos con el producto que estás buscando'/>
          )
        )
      }
    </section>
  )
}

export default ItemDetailContainer