
export const booksStock = [
    {
        id: 1,
        imagen: "./booksImages/libro1.jpg", 
        titulo: "Harry Potter y el misterio del príncipe", 
        autor: "J.K Rowling", 
        genero: "Fantasía", 
        precio: 299,
        descuentos: false,
        precioDescuento: "",
        stock: 20,
        sinopsis: "Con dieciséis años cumplidos, Harry inicia el sexto curso en Hogwarts en medio de terribles acontecimientos que asolan Inglaterra. Dumbledore sabe que se acerca el momento, anunciado por la Profecía, en que Harry y Voldemort se enfrentarán a muerte.",
        populares: true,
        novedades: false
    },

    {
        id: 2,
        imagen: "./booksImages/libro2.jpg", 
        titulo: "Mindset", 
        autor: "Carol S. Dweck" , 
        genero: "Psicología" , 
        precio: 330,
        descuentos: false,
        precioDescuento: "",
        stock: 20,
        sinopsis: "La psicóloga de la Universidad de Stanford Carol S. Dweck revela los rasgos de la gente con mentalidad de crecimiento, quienes con tenacidad pueden superar obstáculos. Esto descarta la creencia de que la inteligencia y otras aptitudes humanas son inalterables con el paso del tiempo. ",
        populares: true,
        novedades: true
    },

    {
        id: 3,
        imagen: "./booksImages/libro3.jpg", 
        titulo: "It", 
        autor: "Stephen King", 
        genero: "Terror", 
        precio: 235,
        descuentos: false,
        precioDescuento: "",
        stock: 20,
        sinopsis: "¿Quién o qué mutila y mata a los niños de un pequeño pueblo norteamericano? ¿Por qué llega cíclicamente el horror a Derry en forma de un payaso siniestro que va sembrando la destrucción a su paso? Esto es lo que se proponen averiguar los protagonistas de esta novela.",
        populares: true,
        novedades: false
    },

    {
        id: 4,
        imagen: "./booksImages/libro4.jpg", 
        titulo: "El alquimista", 
        autor: "Paulo Coelho", 
        genero: "Novela", 
        precio: 400,
        descuentos: true,
        precioDescuento: 340,
        stock: 20,
        sinopsis: "Considerado ya un clásico de nuestros días, El Alquimista relata las aventuras de Santiago, un joven pastor andaluz que un día emprende un viaje por las arenas del desierto en busca de un tesoro. Lo que empieza como la búsqueda de bienes mundanos se convertirá en el descubrimiento del tesoro interior.",
        populares: false,
        novedades: false
    },

    {
        id: 5,
        imagen: "./booksImages/libro5.jpg", 
        titulo: "The subtle art of not giving a f*ck", 
        autor: " Mark Manson", 
        genero: "Autoayuda", 
        precio: 270,
        descuentos: false,
        precioDescuento: '',
        stock: 20,
        sinopsis: "Un enfoque disruptivo para vivir una buena vida, Mark Manson nos enfrenta de manera sincera con una realidad que vivimos todos los días. Cada vez más personas se encuentran frustradas y estresadas por perseguir cosas que no saben si los hará felices.",
        populares: true,
        novedades: true
    },

    {
        id: 6,
        imagen: "./booksImages/libro6.jpg", 
        titulo: "Cuando no queden más estrellas que contar", 
        autor: "María Martínez", 
        genero: "Romance", 
        precio: 169,
        descuentos: false,
        precioDescuento: "",
        stock: 20,
        sinopsis: "Desde muy pequeña, Maya se ha sacrificado en cuerpo y alma por el ballet. Trabaja como solista en la Compañía Nacional de Danza y los ballets más prestigiosos han puesto sus ojos en ella. Sin embargo, un grave accidente acaba con su futuro prometedor. El único mundo que Maya conoce se ha derrumbado.",
        populares: true,
        novedades: true
    },

    {
        id: 7,
        imagen: "./booksImages/libro7.jpg",  
        titulo: "La biblioteca de la medianoche", 
        autor: " Matt Haig", 
        genero: "Fantasía", 
        precio: 320,
        descuentos: false,
        precioDescuento: '',
        stock: 20,
        sinopsis: "La biblioteca de la medianoche, de Matt Haig es una celebración de la lectura y de la vida. Cuando la protagonista Nora Seed intenta suicidarse, abre los ojos en una biblioteca llena de libros que contienen diferentes versiones de la historia de su vida.",
        populares: true,
        novedades: true
    },

    {
        id: 8,
        imagen: "./booksImages/libro8.jpg",  
        titulo: "Anoche en las trincheras", 
        autor: "Alberto Villarreal", 
        genero: "Novela", 
        precio: 288,
        descuentos: false,
        precioDescuento: "",
        stock: 20,
        sinopsis: "Anoche en las trincheras es una explosión de las emociones que se experimentan al crecer: el miedo a no ser suficiente, a amar, a no querer salir de nuestra zona de confort, a arriesgar todo por nuestros sueños. Encontrarse a uno mismo requiere valentía, pero también dejarse llevar por los latidos del corazón.",
        populares: true,
        novedades: true
    },

    {
        id: 9,
        imagen: "./booksImages/libro9.jpg", 
        titulo: "You are awesome", 
        autor: "Neil Pasricha", 
        genero: "Autoayuda", 
        precio: 360,
        descuentos: true,
        precioDescuento: 306,
        stock: 20,
        sinopsis: "Vivimos en una era con altos índices de longevidad, educación y riqueza. ¡Lo tenemos todo! Pero hay un único efecto secundario. Y es que ya no disponemos de las herramientas para gestionar el fracaso. Ante tal panorama, ¿qué capacidad es imprescindible que desarrollemos? La RESILIENCIA. Y hemos de hacerlo rápido.",
        populares: false,
        novedades: false
    },

    {
        id: 10,
        imagen: "./booksImages/libro10.jpg", 
        titulo: "Orgullo y prejuicio", 
        autor: "Jane Austen", 
        genero: "Romance", 
        precio: 228,
        descuentos: false,
        precioDescuento: "",
        stock: 20,
        sinopsis: "Orgullo y prejuicio narra las aventuras y desventuras amorosas de las hermanas Bennet, centrándose en el personaje de Elizabeth, a través de las cuales la autora nos presenta con comicidad la sociedad de su tiempo y coloca a la mujer en un lugar más notorio que el que le correspondía en su época.",
        populares: true,
        novedades: false
    },

    {
        id: 11,
        imagen: "./booksImages/libro11.jpg", 
        titulo: "El psicoanalista", 
        autor: "John Katzenbach" , 
        genero: "Thriller" , 
        precio: 430,
        descuentos: true,
        precioDescuento: 344,
        stock: 20,
        sinopsis: "«Feliz aniversario, doctor. Bienvenido al primer día de su muerte.» Así comienza el anónimo que recibe el psicoanalista Frederick Starks, y que le obliga a emplear toda su astucia y rapidez para, en quince días, averiguar quién es el autor de esa amenazadora misiva que promete hacerle la vida imposible.",
        populares: false,
        novedades:  false
    },

    {
        id: 12, 
        imagen: "./booksImages/libro12.jpg",
        titulo: "El principito",
        autor: "Antoine de Saint-Exupery ", 
        genero: "Infantil", 
        precio: 60,
        descuentos: false,
        precioDescuento: "",
        stock: 20,
        sinopsis: "El principito es una narración corta del escritor francés Antoine de Saint-Exupéry, que trata de la historia de un pequeño príncipe que parte de su asteroide a una travesía por el universo, en la cual descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad.",
        populares: true,
        novedades: false
    },

    {
        id: 13,
        imagen: "./booksImages/libro13.jpg",
        titulo: "El resplandor", 
        autor: "Stephen King", 
        genero: "Terror", 
        precio: 375,
        descuentos: false,
        precioDescuento: "",
        stock: 20,
        sinopsis: "Jack Torrance se traslada junto a su mujer y a su introvertido hijo Danny a un impresionante hotel de Colorado del que ha de encargarse los larguísimos y solitarios meses de invierno. En el hotel comienzan a sucederse fenómenos paranormales que provocarán serios trastornos en la mente de Jack.",
        populares: false,
        novedades: false
    },

    {
        id: 14, 
        imagen: "./booksImages/libro14.jpg", 
        titulo: "Harry Potter y la cámara secreta", 
        autor: "J.K Rowling", 
        genero: "Fantasía", 
        precio: 300,
        descuentos: true,
        precioDescuento: 240,
        stock: 20,
        sinopsis: "El joven mago Harry Potter, Ron Weasley y Hermione Granger se enfrentan a nuevos retos. Durante su segundo año en el Colegio Hogwarts de Magia y Hechicería, estos jovencitos intentan descubrir una fuerza oscura que esta aterrorizando al Colegio.",
        populares: false,
        novedades: false
    },

    {
        id: 15,
        imagen: "./booksImages/libro15.jpg", 
        titulo: "Cien años de soledad", 
        autor: "Gabriel García Márquez", 
        genero: "Novela", 
        precio: 330,
        descuentos: false,
        precioDescuento: "",
        stock: 20,
        sinopsis: "Entre la boda de José Arcadio Buendía con Amelia Iguarán hasta la maldición de Aureliano Babilonia transcurre todo un siglo. Cien años de soledad para una estirpe única, fantástica, capaz de fundar una ciudad tan especial como Macondo y de engendrar niños con cola de cerdo.",
        populares: false,
        novedades: false
    },

    {
        id: 16, 
        imagen: "./booksImages/libro16.jpeg", 
        titulo: "Coraline", 
        autor: "Neil Gaiman", 
        genero: "Fantasía", 
        precio: 350,
        descuentos: true,
        precioDescuento: 315,
        stock: 20,
        sinopsis: "Coraline, una niña de 11 años, acaba de trasladarse con sus padres a una nueva ciudad. Echa de menos a sus amigos y el vecindario le resulta aburrido, pero su espíritu aventurero le lleva a descubrir una puerta secreta en su casa.",
        populares: false,
        novedades: false
    },

    {
        id: 17,
        imagen: "./booksImages/libro17.jpeg",  
        titulo: "Harry Potter y las reliquias de la muerte", 
        autor: "J.K Rowling", 
        genero: "Fantasía", 
        precio: 749,
        descuentos: false,
        precioDescuento: "",
        stock: 20,
        sinopsis: "La fecha crucial se acerca. Cuando cumpla diecisiete años, Harry perderá el encantamiento protector que lo mantiene a salvo. El anunciado duelo a muerte con lord Voldemort es inminente, y la casi imposible misión de encontrar y destruir los restantes Horrocruxes, más urgente que nunca.",
        populares: false,
        novedades: false
    },

    {
        id: 18,
        imagen: "./booksImages/libro18.jpg",  
        titulo: "El perfume", 
        autor: "Patrick Süskind", 
        genero: "Novela", 
        precio: 200,
        descuentos: true,
        precioDescuento: 180,
        stock: 20,
        sinopsis: "Jean-Baptiste Grenouille tiene su marca de nacimiento: no despide ningún olor. Al mismo tiempo posee un don excepcional: un olfato prodigioso que le permite percibir todos los olores del mundo.",
        populares: false,
        novedades: false
    },

    {
        id: 19,
        imagen: "./booksImages/libro19.jpg", 
        titulo: "El gato ensombrerado", 
        autor: "Dr. Seuss", 
        genero: "Infantil", 
        precio: 190,
        descuentos: true,
        precioDescuento: 171,
        stock: 20,
        sinopsis: "Un niño y una niña se encuentran tremendamente aburridos dentro de su casa durante un día lluvioso hasta que el Gato Ensombrerado llega y crea un desastre con la ayuda de Cosa 1 y Cosa 2. En este embrollo no se salva ni el pez ni el vestido favorito de su mamá.",
        populares: false,
        novedades: false
    },

    {
        id: 20,
        imagen: "./booksImages/libro20.jpg", 
        titulo: "Nosotros en la luna", 
        autor: "Alice Kellen", 
        genero: "Romance", 
        precio: 368,
        descuentos: false,
        precioDescuento: "",
        stock: 20,
        sinopsis: "Cuando Rhys y Ginger se conocen en las calles de la ciudad de la luz, no imaginan que sus vidas se unirán para siempre, a pesar de la distancia y de que no puedan ser más diferentes.",
        populares: true,
        novedades: true
    }
]