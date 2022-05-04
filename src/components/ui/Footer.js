import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2021 All Rigths Reserved, Plot Twist Bookstore</p>
        <div className="social-icons">
          <a className="social-link" href="https://es-la.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a className="social-link" href="https://twitter.com/?lang=es" target="_blank"><i className="fab fa-twitter"></i></a>
          <a className="social-link" href="https://www.instagram.com/?hl=es" target="_blank"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer