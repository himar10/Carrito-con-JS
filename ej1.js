

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// creamos base de datos con todos los datos de los articulos
        window.onload = function () {
            // Variables
            let baseDeDatos = [
                {
                    id: 1,
                    nombre: 'ALTAVOCES',
                    img: 'img/Imagenes/ALTAVOCES.gif',
                    precio: 19.95
                },
                {
                    id: 2,
                    nombre: 'CDROM',
                    img: 'img/Imagenes/CDROM.gif',
                    precio: 5.95
                },
                {
                    id: 3,
                    nombre: 'DISQUETERA',
                    img: 'img/Imagenes/DISQUETERA.gif',
                    precio: 10.90
                },
                {
                    id: 4,
                    nombre: 'DVD',
                    img: 'img/Imagenes/DVD.gif',
                    precio: 4.90
                },
                {
                    id: 5,
                    nombre: 'FUENTE',
                    img: 'img/Imagenes/FUENTE.gif',
                    precio: 8.90
                },
                {
                    id: 6,
                    nombre: 'HD',
                    img: 'img/Imagenes/HD.gif',
                    precio: 10.99
                },
                {
                    id: 7,
                    nombre: 'IMPRESORA',
                    img: 'img/Imagenes/IMPRESORA.gif',
                    precio: 80.90
                },
                {
                    id: 8,
                    nombre: 'MEMORIA',
                    img: 'img/Imagenes/MEMORIA.gif',
                    precio: 43.95
                },
                {
                    id: 9,
                    nombre: 'MICRO',
                    img: 'img/Imagenes/MICRO.gif',
                    precio: 273.90
                },
                {
                    id: 10,
                    nombre: 'MICROAMD',
                    img: 'img/Imagenes/MICROAMD.gif',
                    precio: 179.90
                },
                {
                    id: 11,
                    nombre: 'MODEM',
                    img: 'img/Imagenes/MODEM.gif',
                    precio: 67.90
                },
                {
                    id: 12,
                    nombre: 'MODEMINTERNO',
                    img: 'img/Imagenes/MODEMINTERNO.gif',
                    precio: 35.95
                },
                {
                    id: 13,
                    nombre: 'ORDENADOR1',
                    img: 'img/Imagenes/ORDENADOR1.gif',
                    precio: 676.90
                },
                {
                    id: 14,
                    nombre: 'ORDENADOR2',
                    img: 'img/Imagenes/ORDENADOR2.gif',
                    precio: 979.95
                },
                {
                    id: 15,
                    nombre: 'PLACAMADRE',
                    img: 'img/Imagenes/PLACAMADRE.gif',
                    precio: 125.90
                },
                {
                    id: 16,
                    nombre: 'RATON',
                    img: 'img/Imagenes/RATON.gif',
                    precio: 93.99
                },
                {
                    id: 17,
                    nombre: 'SCANNER',
                    img: 'img/Imagenes/SCANNER.gif',
                    precio: 35.99
                },
                {
                    id: 18,
                    nombre: 'TECLADO',
                    img: 'img/Imagenes/TECLADO.gif',
                    precio: 179.90
                },
                {
                    id: 19,
                    nombre: 'TGRAFICAAGP',
                    img: 'img/Imagenes/TGRAFICAAGP.gif',
                    precio: 95.90
                },
                {
                    id: 20,
                    nombre: 'TGRAFICAPCI',
                    img: 'img/Imagenes/TGRAFICAPCI.gif',
                    precio: 476.90
                },
                {
                    id: 21,
                    nombre: 'TRED',
                    img: 'img/Imagenes/TRED.gif',
                    precio: 41.90
                },
                {
                    id: 22,
                    nombre: 'TSCSI',
                    img: 'img/Imagenes/TSCSI.gif',
                    precio: 50.90
                },
                {
                    id: 23,
                    nombre: 'TSONIDO',
                    img: 'img/Imagenes/TSONIDO.gif',
                    precio: 69.90
                },
                {
                    id: 24,
                    nombre: 'WEBCAM',
                    img: 'img/Imagenes/WEBCAM.gif',
                    precio: 39.90
                },

            ]

//------------------------------------------------------------------


            let $items = document.querySelector('#items');
            let carrito = [];
            let total = 0;
            let $carrito = document.querySelector('#carrito');
            let $total = document.querySelector('#total');
            // Funciones
            function renderItems () {
                for (let info of baseDeDatos) {
                    // Estructura
                    let miNodo = document.createElement('div');
                    miNodo.classList.add('card', 'col-sm-4');
                    // Body
                    let miNodoCardBody = document.createElement('div');
                    miNodoCardBody.classList.add('card-body');
                    // Titulo
                    let miNodoTitle = document.createElement('h5');
                    miNodoTitle.classList.add('card-title');
                    miNodoTitle.textContent = info['nombre'];
                      // Imagen
                    let miNodoImg = document.createElement('IMG');
                    miNodoImg.setAttribute('src', info['img']);
                    // Precio
                    let miNodoPrecio = document.createElement('p');
                    miNodoPrecio.classList.add('card-text');
                    miNodoPrecio.textContent = info['precio'] + '€';
                    // Boton 
                    let miNodoBoton = document.createElement('button');
                    miNodoBoton.classList.add('btn', 'btn-primary');
                    miNodoBoton.textContent = 'Añadir';
                    miNodoBoton.setAttribute('marcador', info['id']);
                    miNodoBoton.addEventListener('click', anyadirCarrito);
                    // Insertamos
                    miNodoCardBody.appendChild(miNodoTitle);
                    miNodoCardBody.appendChild(miNodoImg);
                    miNodoCardBody.appendChild(miNodoPrecio);
                    miNodoCardBody.appendChild(miNodoBoton);
                    miNodo.appendChild(miNodoCardBody);
                    $items.appendChild(miNodo);
                }
            }
            function anyadirCarrito () {
                // Anyadimos el Nodo a nuestro carrito
                carrito.push(this.getAttribute('marcador'))
                // Calculo el total
                calcularTotal();
                // Renderizamos el carrito 
                renderizarCarrito();
            }

            function renderizarCarrito () {
                // Vaciamos todo el html
                $carrito.textContent = '';
                // Generamos los Nodos a partir de carrito
                carrito.forEach(function (item, indice) {
                    // Obtenemos el item que necesitamos de la variable base de datos
                    let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                        return itemBaseDatos['id'] == item;
                    });
                    // Creamos el nodo del item del carrito
                    let miNodo = document.createElement('li');
                    miNodo.classList.add('list-group-item', 'text-right');
                    miNodo.textContent = `${miItem[0]['nombre']} - ${miItem[0]['precio']}€`;
                    // Boton de borrar
                    let miBoton = document.createElement('button');
                    miBoton.classList.add('btn', 'btn-danger', 'mx-5');
                    miBoton.textContent = 'X';
                    miBoton.setAttribute('posicion', indice);
                    miBoton.addEventListener('click', borrarItemCarrito);
                    // Mezclamos nodos
                    miNodo.appendChild(miBoton);
                    $carrito.appendChild(miNodo);
                })
            }

            function borrarItemCarrito () {
                // Obtenemos la posicion que hay en el boton pulsado
                let posicion = this.getAttribute('posicion');
                // Borramos la posicion que nos interesa
                carrito.splice(posicion, 1);
                // volvemos a renderizar
                renderizarCarrito();
                // Calculamos de nuevo el precio
                calcularTotal();
            }

            function calcularTotal () {
                // Limpiamos precio anterior
                total = 0;
                // Recorremos el array del carrito
                for (let item of carrito) {
                    // De cada elemento obtenemos su precio
                    let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                        return itemBaseDatos['id'] == item;
                    });
                    total = total + miItem[0]['precio'];
                }
                // Formateamos el total para que solo tenga dos decimales
                let totalDosDecimales = total.toFixed(2);
                // Renderizamos el precio en el HTML
                $total.textContent = totalDosDecimales;
            }
            // Eventos

            // Inicio
            renderItems();
        } 