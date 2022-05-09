import './styles/page404.css';

const Page404 = () => {
  return (
    <main className='page404-container'>
        <div className='page404__text-container'>
            <svg width="100" height="100" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5C9 8.77614 8.77614 9 8.5 9Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.5 9C15.2239 9 15 8.77614 15 8.5C15 8.22386 15.2239 8 15.5 8C15.7761 8 16 8.22386 16 8.5C16 8.77614 15.7761 9 15.5 9Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.5 15.5C7.5 15.5 9 13.5 12 13.5C15 13.5 16.5 15.5 16.5 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1 className='page404__title'>Error 404</h1>
            <h2 className='page404__message'>Página no encontrada</h2>
        </div>
    </main>
  )
}

export default Page404