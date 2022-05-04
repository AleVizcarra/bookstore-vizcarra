# Proyecto Plot Twist Bookstore

Este proyecto consiste en el desarrollo de un e-commerce de una librería.

## Secciones

Para navegar a las diferentes secciones de la página se instaló la dependencia react-router-dom y se utilizaron los elementos: `<BrowserRouter>`, el cual envuelve a toda la aplicación; `<Routes>`, el cual envuelve a todas las rutas; y `<Route>`, mediante la cual se indica el path y el elemento que se renderizará cuando la url contenga dicho path.

### NavLink

La página, hasta el momento, cuenta con home (tienda), que es lo que vemos en nuestra ruta principal, así como con las secciones "Populares", "Novedades" y "Descuentos", a las cuales podemos navegar a través de los links contenidos en el navbar.
Cada link es un elemento `<NavLink>` de react-router-dom, el cual decidí usar porque es un link que detecta cuando está "activo", y permite que le asignemos un estilo que lo resalte entre los demás links, lo cual considero, brinda una mejor experiencia al usuario ya que le proporciona información sobre en qué sección se encuentra.

### Componente ItemListContainer

En el componente `<ItemListContainer>` se encuentra gran parte de la lógica para el funcionamiento de la página. Este es el componente que se renderiza en cada una de las secciones, es decir: home(tienda), populares, novedades y descuentos, sólo que el array de objetos que se mapea para generar las cards cambia dependiendo de la sección (category) en la que nos encontremos. Es decir:

- '/' -> Home (Tienda) -> `<ItemListContainer>` con el catálogo completo de libros disponibles

- ‘/category/:categoryId’ -> categoría seleccionada (populares, novedades, descuentos) -> `<ItemListContainer>` con los libros que formen parte de la categoría correspondiente

Para lograr esto, se utilizó el hook `useParams` de react-router-dom el cual nos permite obtener el valor de categoryId, el cual cambia dependiendo de la sección a la que estemos navegando, y mediante el hook `useEffect` que contiene la función que hace el llamado a la base de datos y tiene como dependencia "category", obtenemos el array de objetos correspondiente a la categoría para su mapeo.

## ItemDetail

Es un componente al que tenemos acceso al hacer click en la flecha, que se encuentra en la parte inferior derecha de cada una de las cards, para obtener mayor información del producto correspondiente. Al hacer click sobre la flecha navegamos a la ruta ‘/item/:itemId’ la cual renderiza el componente `<ItemDetailContainer>` en el cual se utiliza el hook `useParams` para obtener el itemId y en base a ese id obtener de la base de datos el libro correspondiente para su renderización.

## Estilos

Para los estilos de la página decidí usar css puro (hasta el momento), ya que quería que tuviera un estilo más particular y esto en ocasiones es más difícil de lograr cuando se utilizan componentes prediseñados.

Para una mejor experiencia de usuario decidí asignarle al navbar una `position: sticky` para que este sea visible en todo momento y que el usuario no tenga que regresar hasta la parte de arriba de la página para navegar a otra sección. El navbar será responsive por lo que para dispositivos móviles desarrollaré un menú desplegable.

Las cards de los libros se encuentran en un grid container con "auto-fit" de manera que se vaya adaptando la cantidad de columnas mostradas dependiendo del ancho de la pantalla.

## Ideas a Futuro

- Agregar más secciones al home que proporcionen mayor información del negocio al usuario y llamen su atención para que tenga un aspecto de homepage ya que por el momento sólo se muestra el catálogo de productos

- Implementar un filtro que permita filtrar los libros por género literario.
