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
    <section className="item-detail-container">
      {
        (loading) ? (
          <LoadingSpinner />
        ) : (
          (bookDetails) ? (
            <ItemDetail bookDetails = {bookDetails}/>
          ) : (
            <MensajeErrorCarga mensaje='el libro'/>
          )
        )
      }
    </section>
  )
}

export default ItemDetailContainer