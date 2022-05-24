import { Link } from 'react-router-dom';
import '../navbar/navbar.css';

const Title = () => {
  return (
    <h1 className='navbar__title'>
        <Link to="/">
            Plot <span><i className="fa-solid fa-book-open"></i></span> Twist
            <span className='bookstore'>Bookstore</span>
        </Link>
    </h1>
  )
}

export default Title