
import Item from "./Item";

const ItemList = ({ books }) => {
  return (
    <div className="item-list animate__animated animate__fadeIn animate__fast">
        {
            books.map((book) => (
                <Item 
                    key={book.id}
                    {...book}
                />
            ))
        }
    </div>
  )
}

export default ItemList