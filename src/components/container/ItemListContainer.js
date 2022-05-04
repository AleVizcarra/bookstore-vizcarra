import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ItemList from '../items/ItemList';
import { getBooksFromDB } from '../../helpers/getBooks';

import './itemListContainer.css';
import LoadingSpinner from '../ui/LoadingSpinner';
import MensajeErrorCarga from '../ui/MensajeErrorCarga';

const ItemListContainer = () => {
  
  const [seccion, setSeccion] = useState({
    category: '',
    tituloSeccion: 'Explora nuestro catálogo'
  });

  const {category, tituloSeccion} = seccion;

  const params = useParams();

  const [dataState, setDataState] = useState({
    loading: true,
    data: null,
  });

  const {loading, data} = dataState;

  useEffect(() => {
    getBooksFromDB(setDataState, category);
  }, [category]);

  useEffect(() => {
    (params.categoryId !== undefined) ? (
      setSeccion({ 
        category: params.categoryId, 
        tituloSeccion: params.categoryId 
      })
    ) : (
      setSeccion({
        category: '',
        tituloSeccion: 'Explora nuestro catálogo'
      })
    );  
  }, [params]);

  return (
    <section className='item-list-container'>
      {
        (loading) ? (
          <LoadingSpinner />
        ) : (
          (data) ? (
            <>
              <h2 className='item-list-container__title'>{ tituloSeccion }</h2>
              <ItemList books={ data }/>
            </>
            
          ) : (
            <MensajeErrorCarga />
          )
        )
      }
    </section>
  )
}

export default ItemListContainer