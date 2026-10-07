// ==========================================================
// EL PLACER DE LEER - JAVASCRIPT CORREGIDO Y CON TUS PORTADAS
// ==========================================================

// MENÚ MÓVIL
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("abierto");
    });

    navLinks.querySelectorAll("a").forEach(enlace => {
        enlace.addEventListener("click", () => {
            navLinks.classList.remove("abierto");
        });
    });
}


// ==========================================================
// OSITO LECTOR - CATÁLOGO, DOS CARRUSELES Y MODAL
// El menú hamburguesa lo maneja Bootstrap, ya no hace falta JS aquí.
// ==========================================================

// CATÁLOGO DE LIBROS
const libros = [
    {
        id: 1,
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        categoria: "Literatura",
        anio: "1943",
        disponible: true,
        calificacion: "4.9",
        portada: "https://tse4.mm.bing.net/th/id/OIP.3J5Q7LzjrIA8dz31Dh64zQHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Una obra inolvidable que habla sobre la amistad, el amor, la imaginación y la importancia de mirar más allá de las apariencias."
    },
      {
        id: 2,
        titulo: "La Ilíada",
        autor: "Homero",
        categoria: "Clasicos",
        anio: "c. 750 a.C.",
        disponible: true,
        calificacion: "4.9",
        portada: "https://www.isliada.org/static/images/2018/01/portada-del-libro-La-Iliada-Homero-500x806.jpg",
        descripcion: "Narra la guerra de Troya y las acciones de héroes como Aquiles."
    }, 
     {
        id: 3,
        titulo: "La Odisea",
        autor: "Homero",
        categoria: "Clasicos",
        anio: "c. 750 a.C.",
        disponible: true,
        calificacion: "4.9",
        portada: "https://th.bing.com/th/id/R.3024817bfee5a6fe57c4807448102b26?rik=b73haAKloi2cWA&riu=http%3a%2f%2fdata.ecasals.net%2fimg%2f04%2fg%2f9788498253351_04_g.jpg&ehk=c9ZWZpuULIaPAcxaRD8CGuRi%2falHFI5ztZU28kTEKe8%3d&risl=&pid=ImgRaw&r=0",
        descripcion: "Cuenta el largo viaje de regreso de Odiseo después de la guerra de Troya."
    },  {
        id: 4,
        titulo: "Edipo Rey",
        autor: "SófoclesSófocles",
        categoria: "Clasicos",
        anio: "c. 429 a.C.",
        disponible: false,
        calificacion: "4.9",
        portada: "https://tse2.mm.bing.net/th/id/OIP.Fuy3XX65I0OOwtYcdg2vTgHaL2?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Edipo es un rey que intenta descubrir la verdad sobre una antigua tragedia que afecta a su ciudad. Su investigación lo lleva a descubrir secretos sobre su propio pasado y a enfrentarse a un destino que no puede escapar."
    },  {
        id: 5,
        titulo: "La Eneida",
        autor: "Virgilio",
        categoria: "Clasicos",
        anio: "c. 19 a.C.",
        disponible: false,
        calificacion: "4.9",
        portada: "https://tse2.mm.bing.net/th/id/OIP.59CUl5hob2o_WJWAxeLc9AHaLS?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Relata las aventuras de Eneas, un héroe que abandona Troya y emprende un largo viaje. Después de superar diferentes obstáculos, llega a Italia, donde comienza la historia relacionada con el origen legendario de Roma."
    },  {
        id: 6,
        titulo: "La Divina Comedia",
        autor: "Dante Alighieri",
        categoria: "Clasicos",
        anio: "c. 1320",
        disponible: true,
        calificacion: "4.9",
        portada: "https://tse2.mm.bing.net/th/id/OIP.1HKiX1iYIixJHjLvKsSNqAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Dante realiza un viaje imaginario por el Infierno, el Purgatorio y el Paraíso. A través de este recorrido conoce diferentes personajes y reflexiona sobre el pecado, la justicia, la esperanza y la búsqueda de la salvación."
    },  {
        id: 7,
        titulo: "El Decamerón",
        autor: "Giovanni Boccaccio",
        categoria: "Clasicos",
        anio: "1353",
        disponible: true,
        calificacion: "4.9",
        portada: "https://tse4.mm.bing.net/th/id/OIP.beVkx0CHEH8y-nuQOuTE7QHaKp?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Un grupo de jóvenes se aleja de una ciudad afectada por una epidemia y pasa el tiempo contando historias. Los relatos hablan sobre el amor, la inteligencia, el engaño, la suerte y las relaciones entre las personas."
    },  {
        id: 8,
        titulo: "La Celestina",
        autor: "Fernando de Rojas",
        categoria: "Clasicos",
        anio: "1499",
        disponible: false,
        calificacion: "4.9",
        portada: "https://th.bing.com/th/id/OIP.vaBy3uOTCL_Lej2Vcz2x0AHaKf?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Cuenta la historia de Calisto y Melibea, cuyo amor se ve complicado por los engaños y las ambiciones de quienes los rodean. La obra muestra las consecuencias que pueden tener el deseo, la codicia y las decisiones impulsivas."
    },  {
        id: 9,
        titulo: "El príncipe",
        autor: "Nicolás Maquiavelo",
        categoria: "Clasicos",
        anio: "1532",
        disponible: false,
        calificacion: "4.9",
        portada: "https://tse4.mm.bing.net/th/id/OIP.iq5vsojnD2m4cVM3dS8iQgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Es una obra que reflexiona sobre el poder, el gobierno y las estrategias que puede utilizar un gobernante para mantener el control de un Estado. Analiza diferentes situaciones políticas y la manera en que los líderes toman decisiones."
    },  {
        id: 10,
        titulo: "Lazarillo de Tormes",
        autor: "Anónimo",
        categoria: "Clasicos",
        anio: "1554",
        disponible: false,
        calificacion: "4.9",
        portada: "https://tse2.mm.bing.net/th/id/OIP.0dmQKoKBtJiBa70EBjwexQHaJl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Lázaro cuenta su vida desde la infancia y las experiencias que tiene mientras sirve a diferentes amos. A través de sus dificultades aprende a sobrevivir y descubre la desigualdad y la hipocresía de la sociedad."
    },  {
        id: 11,
        titulo: "Hamlet",
        autor: "William Shakespeare",
        categoria: "Clasicos",
        anio: "1601",
        disponible: false,
        calificacion: "4.9",
        portada: "https://th.bing.com/th/id/OIP.vaBy3uOTCL_Lej2Vcz2x0AHaKf?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Hamlet, príncipe de Dinamarca, descubre un secreto relacionado con la muerte de su padre. Mientras intenta descubrir la verdad y buscar justicia, debe enfrentarse a la duda, la traición y los conflictos dentro de su propia familia."
    },  {
        id: 12,
        titulo: "Romeo y Julieta",
        autor: "William Shakespeare",
        categoria: "Clasicos",
        anio: "1499",
        disponible: false,
        calificacion: "4.9",
        portada: "https://th.bing.com/th/id/OIP.vaBy3uOTCL_Lej2Vcz2x0AHaKf?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Romeo y Julieta pertenecen a dos familias enfrentadas, pero a pesar de ello se enamoran. Su relación se desarrolla en medio de conflictos familiares y decisiones difíciles que cambian el destino de ambos jóvenes."
    },  {
        id: 8,
        titulo: "La Celestina",
        autor: "Fernando de Rojas",
        categoria: "Clasicos",
        anio: "1499",
        disponible: false,
        calificacion: "4.9",
        portada: "https://tse1.mm.bing.net/th/id/OIP.xrwLHh0JvpjQ7H5S4-iJ-QHaKS?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Cuenta la historia de Calisto y Melibea, cuyo amor se ve complicado por los engaños y las ambiciones de quienes los rodean. La obra muestra las consecuencias que pueden tener el deseo, la codicia y las decisiones impulsivas."
    }, 
    {
        id: 2,
        titulo: "Cien Años de Soledad",
        autor: "Gabriel García Márquez",
        categoria: "Literatura",
        anio: "1967",
        disponible: true,
        calificacion: "4.9",
        portada: "https://tse3.mm.bing.net/th/id/OIP.DijGUOWC9i-CgN0T2f3EmQHaKG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "La historia de la familia Buendía y del pueblo de Macondo, una de las obras más importantes de la literatura latinoamericana."
    },
    {
        id: 3,
        titulo: "Orgullo y Prejuicio",
        autor: "Jane Austen",
        categoria: "Romance",
        anio: "1813",
        disponible: false,
        calificacion: "4.7",
        portada: "https://tse2.mm.bing.net/th/id/OIP.rrsSlBa7U0pZL_cWu0lp4gHaK3?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Una historia de amor, prejuicios y diferencias sociales protagonizada por Elizabeth Bennet y Fitzwilliam Darcy."
    },
    {
        id: 4,
        titulo: "1984",
        autor: "George Orwell",
        categoria: "Ciencia Ficción",
        anio: "1949",
        disponible: true,
        calificacion: "4.8",
        portada: "https://tse1.mm.bing.net/th/id/OIP.f000qMxg_q_GU7Wq8D43sgHaLQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Una novela distópica que presenta una sociedad controlada por la vigilancia, la propaganda y el control del pensamiento."
    },
    {
        id: 5,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        categoria: "Literatura",
        anio: "1605",
        disponible: true,
        calificacion: "4.8",
        portada: "https://th.bing.com/th/id/OIP.V1rLMaJ-D96jE4tSqhV5fQHaLY?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Las aventuras de Don Quijote y Sancho Panza en una de las obras fundamentales de la literatura universal."
    },
    {
        id: 6,
        titulo: "Harry Potter",
        autor: "J. K. Rowling",
        categoria: "Fantasía",
        anio: "1997",
        disponible: true,
        calificacion: "4.9",
        portada: "https://th.bing.com/th/id/OIP._hoJdN9kGDyVmtkhcmXmhAHaLL?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "La historia de un joven estudiante que descubre un mundo mágico y comienza una nueva etapa de su vida."
    },
    {
        id: 7,
        titulo: "Drácula",
        autor: "Bram Stoker",
        categoria: "Misterio",
        anio: "1897",
        disponible: true,
        calificacion: "4.6",
        portada: "https://tse1.mm.bing.net/th/id/OIP.ukPfrsgkfUMYH_1pD46xeAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Una historia clásica de misterio y terror alrededor del legendario conde Drácula."
    },
    {
        id: 8,
        titulo: "Sapiens",
        autor: "Yuval Noah Harari",
        categoria: "Historia",
        anio: "2011",
        disponible: true,
        calificacion: "4.8",
        portada: "https://tse4.mm.bing.net/th/id/OIP.ljaZ5RiikPlftRbB8cVCGAHaLa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        descripcion: "Un recorrido por la historia de la humanidad y los acontecimientos que han transformado nuestra sociedad."
    }
];

let textoBuscado = "";
let categoriaElegida = "todas";

const mensaje = document.getElementById("mensaje-carrusel");

function crearTarjetaLibro(libro) {
    return `
        <article class="card-libro-editorial" data-id="${libro.id}">
            <div class="portada-wrapper">
                <img src="${libro.portada}" alt="Portada de ${libro.titulo}" loading="lazy" onerror="this.src='https://via.placeholder.com/180x260?text=Sin+Portada'">
            </div>
            <div class="info-libro">
                <h3 class="titulo-libro">${libro.titulo}</h3>
                <p class="autor-libro">${libro.autor}</p>
                <div class="calificacion-libro">
                    <span class="estrellas">★★★★★</span>
                    <span class="nota">${libro.calificacion || "4.8"}</span>
                </div>
                <div class="acciones-card">
                    <button class="btn-detalles btn-ver-info">Ver detalles</button>
                    <button class="btn-guardar">♥ Guardar</button>
                </div>
            </div>
        </article>
    `;
}

// Crea un carrusel independiente a partir del id de su contenedor.
// Cada uno tiene su propio track, sus flechas y su posición.
function crearCarrusel(id) {
    const wrapper = document.getElementById(id);
    if (!wrapper) return null;

    const track = wrapper.querySelector(".carrusel-track");
    const contenedor = wrapper.querySelector(".carrusel-track-container");
    const btnPrev = wrapper.querySelector(".carrusel-btn.prev");
    const btnNext = wrapper.querySelector(".carrusel-btn.next");

    let cantidad = 0;
    let posicion = 0;

    function gap() {
        const estilos = window.getComputedStyle(track);
        const valor = parseInt(estilos.columnGap || estilos.gap || "22");
        return isNaN(valor) ? 22 : valor;
    }

    function maximo() {
        const tarjeta = track.querySelector(".card-libro-editorial");
        if (!tarjeta) return 0;
        const paso = tarjeta.offsetWidth + gap();
        const visibles = Math.max(1, Math.floor(contenedor.clientWidth / paso));
        return Math.max(0, cantidad - visibles);
    }

    function actualizarBotones() {
        const max = maximo();
        if (posicion > max) posicion = max;
        btnPrev.disabled = cantidad === 0 || posicion <= 0;
        btnNext.disabled = cantidad === 0 || posicion >= max;
    }

    function mover() {
        const tarjeta = track.querySelector(".card-libro-editorial");
        if (!tarjeta) return;
        const desplazamiento = posicion * (tarjeta.offsetWidth + gap());
        track.style.transform = `translateX(-${desplazamiento}px)`;
        actualizarBotones();
    }

    btnPrev.addEventListener("click", () => {
        if (posicion > 0) {
            posicion--;
            mover();
        }
    });

    btnNext.addEventListener("click", () => {
        if (posicion < maximo()) {
            posicion++;
            mover();
        }
    });

    return {
        mostrar(lista) {
            cantidad = lista.length;
            posicion = 0;

            // Si no hay libros para este carrusel, se oculta completo
            wrapper.style.display = cantidad === 0 ? "none" : "";
            track.innerHTML = lista.map(crearTarjetaLibro).join("");
            track.style.transform = "translateX(0px)";

            track.querySelectorAll(".card-libro-editorial").forEach(tarjeta => {
                tarjeta.addEventListener("click", (e) => {
                    // Evita abrir el modal si hace clic en el botón guardar
                    if (e.target.classList.contains("btn-guardar")) return;
                    abrirModalLibro(Number(tarjeta.dataset.id));
                });
            });

            actualizarBotones();
        },
        refrescar: mover
    };
}

const carrusel1 = crearCarrusel("carrusel-1");
const carrusel2 = crearCarrusel("carrusel-2");

// Reparte la lista: primera mitad al carrusel 1, segunda mitad al carrusel 2
function mostrarLibros(lista) {
    const mitad = Math.ceil(lista.length / 2);

    if (carrusel1) carrusel1.mostrar(lista.slice(0, mitad));
    if (carrusel2) carrusel2.mostrar(lista.slice(mitad));

    if (mensaje) {
        mensaje.textContent = lista.length === 0 ? "No se encontraron libros." : "";
    }
}

function aplicarFiltros() {
    let resultado = libros;

    if (categoriaElegida !== "todas") {
        resultado = resultado.filter(libro => libro.categoria === categoriaElegida);
    }

    if (textoBuscado !== "") {
        resultado = resultado.filter(libro =>
            libro.titulo.toLowerCase().includes(textoBuscado) ||
            libro.autor.toLowerCase().includes(textoBuscado) ||
            libro.categoria.toLowerCase().includes(textoBuscado)
        );
    }

    mostrarLibros(resultado);
}

const buscador = document.getElementById("input-buscador");
if (buscador) {
    buscador.addEventListener("input", () => {
        textoBuscado = buscador.value.toLowerCase().trim();
        aplicarFiltros();
    });
}

const botonesCategoria = document.querySelectorAll(".pill-categoria");
botonesCategoria.forEach(boton => {
    boton.addEventListener("click", () => {
        botonesCategoria.forEach(otroBoton => otroBoton.classList.remove("activa"));
        boton.classList.add("activa");
        categoriaElegida = boton.dataset.categoria;
        aplicarFiltros();
    });
});

// MODAL
const modal = document.getElementById("modal-libro");
const modalCerrar = document.getElementById("modal-cerrar");
const modalCerrarBoton = document.getElementById("modal-cerrar-boton");
const modalPortada = document.getElementById("modal-portada");
const modalTitulo = document.getElementById("modal-titulo");
const modalAutor = document.getElementById("modal-autor");
const modalCategoria = document.getElementById("modal-categoria");
const modalAnio = document.getElementById("modal-anio");
const modalDisponibilidad = document.getElementById("modal-disponibilidad");
const modalDescripcion = document.getElementById("modal-descripcion");

function abrirModalLibro(id) {
    const libro = libros.find(item => item.id === id);
    if (!libro || !modal) return;

    if (modalPortada) {
        modalPortada.src = libro.portada;
        modalPortada.alt = `Portada de ${libro.titulo}`;
    }
    if (modalTitulo) modalTitulo.textContent = libro.titulo;
    if (modalAutor) modalAutor.textContent = libro.autor;
    if (modalCategoria) modalCategoria.textContent = libro.categoria;
    if (modalAnio) modalAnio.textContent = `Año: ${libro.anio}`;
    if (modalDescripcion) modalDescripcion.textContent = libro.descripcion;

    const disponible = libro.disponible === true;
    if (modalDisponibilidad) {
        modalDisponibilidad.textContent = disponible ? "● Disponible" : "● No disponible";
        modalDisponibilidad.className = disponible
            ? "badge-disponibilidad disponible"
            : "badge-disponibilidad nodisponible";
    }

    modal.classList.add("activo");
    document.body.style.overflow = "hidden";
}

function cerrarModalLibro() {
    if (!modal) return;
    modal.classList.remove("activo");
    document.body.style.overflow = "";
}

if (modalCerrar) modalCerrar.addEventListener("click", cerrarModalLibro);
if (modalCerrarBoton) modalCerrarBoton.addEventListener("click", cerrarModalLibro);

if (modal) {
    modal.addEventListener("click", event => {
        if (event.target === modal) cerrarModalLibro();
    });
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape") cerrarModalLibro();
});

window.addEventListener("resize", () => {
    if (carrusel1) carrusel1.refrescar();
    if (carrusel2) carrusel2.refrescar();
});

document.addEventListener("DOMContentLoaded", () => {
    mostrarLibros(libros);
});