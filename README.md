# Sobre el Proyecto

E-commerce de una librería desarrollado como proyecto final para el curso de React de Coderhouse.

## Desarrollado con

- [React.js](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [SweetAlert2](https://sweetalert2.github.io/#download)

### React Router

Se instaló para establecer rutas en la aplicación y poder navegar entre ellas.

### SweetAlert2

Se instaló para mostrar alertas cuando el usuario ejecuta ciertas acciones. Por ejemplo, cuando el usuario quiere agregar a su carrito un libro que está agotado, se muestra una alerta que le indica que el producto no se encuentra en stock.

## Configuración del proyecto

Si el proyecto es descargado es necesario ejecutar el comando `npm install` para reconstruir los módulos de node. El proyecto se conecta a una base de datos de firestore y las credeciales para establecer la conexión con firebase se encuentran almacenadas en variables de entorno por lo que si deseas ejecutar localmente el proyecto solicita el archivo **.env** que contiene dichas variables.

## Para ejecutar el proyecto

Para correr la aplicación localmente se ejecuta el comando `npm start`.
También puedes ver el sitio online en el siguiente [link](https://bookstore-vizcarra.vercel.app/)

## Uso y Navegación

El usuario puede visualizar todo el catálogo de productos en home/tienda que se encuentra en la ruta principal '/'. También puede filtrar los libros por categorías (novedades, populares y descuentos) viajando a través de los links que se encuentran en el navbar. En el navbar también se encuentra el cart widget, el cual, al clickearlo dirige al usuario al carrito de compras que en un inicio se encuentra vacío.

![Gif categorías](https://github.com/AleVizcarra/bookstore-vizcarra/blob/main/gifs/categorias.gif)

Los productos pueden ser agregados al carrito de dos formas:

1.- Al hacer click en el botón con el ícono de "agregar al carrito" que se encuentra en las cards de los productos (se agrega por default 1 artículo).
2.- El usuario puede ingresar al detalle de los productos haciendo click en la flecha que aparece en la parte inferior derecha de las cards, ahí encontrará el botón de "Añadir al carrito". En el detalle del producto, se puede indicar la cantidad de artículos que se desea añadir y una vez que se agregue el libro al carrito (con la cantidad indicada), aparecerá un botón de "Terminar compra" el cual permite viajar al carrito.

![Agregar productos al carrito](https://github.com/AleVizcarra/bookstore-vizcarra/blob/main/gifs/agregar-a-carrito.gif)

NOTAS:

- Si se intenta agregar un libro que ya se encuentra en el carrito, saltará una alerta preguntándole al usuario si desea volver a agregar dicho libro al carrito. Si el usuario confirma, NO se duplicará el artículo en el carrito sino que se aumentará la cantidad del ya existente.

- Si se intenta agregar al carrito un libro que se encuentra agotado, aparecerá una alerta indicando que el producto no está disponible.

![Aspectos a considerar al agregar al carrito](https://github.com/AleVizcarra/bookstore-vizcarra/blob/main/gifs/notas-agregar.gif)

En el carrito de compras se puede visualizar un listado de los productos agregados, cada uno con su cantidad y precio a pagar por dicha cantidad. Se muestra también el subtotal (precio de los productos), el precio de envío (ya sea $50 o "gratis" dependiendo de si se alcanza el mínimo de compra o no) y el precio total(subtotal más el precio de envío), así como los botones de "Vaciar carrito" y "Tramitar pedido". Al dar click en el botón "Tramitar pedido", se redireccionará al usuario a la ruta '/order-checkout' donde se visualizará un formulario para que el usuario llene con sus datos, así como un resumen de compra.

![Carrito de compras](https://github.com/AleVizcarra/bookstore-vizcarra/blob/main/gifs/carrito.gif)

Una vez que el usuario proporcione todos sus datos, se habilitará el botón "Realizar compra". IMPORTANTE: Para poder terminar la compra, el e-mail debe de ser ingresado dos veces de manera correcta (deben coincidir). Al hacer click en "Realizar compra", la orden se guarda en la base de datos y salta una alerta indicando el id de la orden.

![Checkout](https://github.com/AleVizcarra/bookstore-vizcarra/blob/main/gifs/checkout.gif)
