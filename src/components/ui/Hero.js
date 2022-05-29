import './hero.css';
import { images } from '../../helpers/images';

const Hero = () => {
  return (
    <section className='hero-section'>
        <div className="hero-section-container">
          <div className='hero-text'>
              <h2 className='hero-title'>¿QUÉ LIBRO ESTÁS BUSCANDO?</h2>
              <p className='hero-info'>¿No estás seguro qué libro leer ahora? Explora nuestro catálogo y encuentra tu próximo libro</p>
              <a className='shop-btn' href="#catalogo">
                  Comprar
                  <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </a>
          </div>
          <img src={images('./reading.svg')} alt="Mujer leyendo" />
        </div>
    </section>
  )
}

export default Hero