// categoria = [[Nombre_categoria, Descripcion, imagen]]
let categoria = [['Nombre_categoria', 'Descripcion', 'imagen_portada.jpg']];

//videos = Array(url, Titulo, Descripcion, categoria) 9133317
let videos = Array();
);

//noticias = [[Titulo, contenido, Fecha]]
let noticias = [
    ['Titulo','contenido','fecha_publicacion']
];

//publicaciones = [Titulo, Contenido, Fecha]
let publicaciones = [
    ['Titulo', 'contenido_publicacion', 'FEcha de publicacion']
];


function cargarVideos(categorias) {
    let contenedor = document.querySelector('.container-fluid');
    contenedor.innerHTML = '<section class="row contenido pt-5"></section>';
    let contenido = document.querySelector('.contenido');
    for (let i = 0; i < videos.length; i++) {
        if (categoria[categorias][0] === videos[i][3]) {
            contenido.innerHTML += '<div class="video" style="position:relative;">' +
                '<iframe src="' + videos[i][0] + '" frameborder="0" height="250"></iframe>' +
                '<br>' +
                '<h2>' + videos[i][1] + '</h2>' +
                '<p align="justify" class="pb-3">' + videos[i][2] + '<br><b>Categoria:</b>' + videos[i][3] + '</p>' + '<form class="ml-2 mt-2" style="position: absolute; left: 5px; bottom: 5px;"><span class="text-danger btnFavorito" onclick="saveTask(' + i + ');">Me gusta</span></form></div>';
        }

    }
}

function mostrarVideos(categorias) {
    /*
      let navbar = '<nav class="row"><input type="checkbox" id="ck"><label class="logo text-white pl-4">PORNO+</label><ul><li class="opcion"><a href="#" class="" style="text-decoration: none;">Inicio</a></li><li class="opcion"><a href="#" style="text-decoration: none;">Contacto</a></li><li class="opcion"><a href="#" style="text-decoration: none;">Conocenos</a></li><li class="opcion"><a href="#" style="text-decoration: none;"><span class="icon-user"></span></a></li></ul><label for="ck" class="ckbtn">≡</label></nav>';
      let contenido = document.querySelector('#seccionContenido');
      contenido.innerHTML = navbar +
        '<iframe src="videos.html" frameborder="0" style="left:0; width:100%; height: 100vh; position:absolute;"></iframe>';
     */
    cargarVideos(categorias);
}

function cargarCategorias() {
    let contenido = document.querySelector('#contenidoCategorias');
    for (let i = 0; i < categoria.length; i++) {
        contenido.innerHTML += '<div class="card mx-auto my-1" style="width: 18rem;">' +
            '<a href="#">' +
            '<img src="' + categoria[i][2] + '" class="card-img-top" alt="...">' +
            '</a>' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + categoria[i][0] + '</h5>' +
            '<p class="card-text" align="justify">' + categoria[i][1] + '</p>' +

            '<a href="#" onclick="mostrarVideos(' + i + ');" class="text-success">Hechar un vistazo!</a>' +
            '</div>' +
            '</div>';
    }
}

function cargarNoticias() {
    let contenido = document.querySelector('#contenidoNoticias');
    contenido.innerHTML += '<h1 align="center" class="text-primary">Noticias</h1>';
    if (noticias.length < 4) {
        for (let i = 0; i < noticias.length; i++) {
            contenido.innerHTML += '<div class="border w-100 my-4 mr-4" style="width: 18rem;">' +
                '<div class="card-body">' +
                '<h2 class="card-title">' + noticias[i][0] + '</h2>' +
                '<h6 class="card-subtitle mb-2 text-muted">' + noticias[i][2] + '</h6>' +
                '<p class="card-text">' + noticias[i][1] + '</p>' +
                '<a href="#" class="card-link">Leer mas...</a>' +
                '</div>' +
                '</div>';
        }
    } else {
        for (let i = 0; i < 4; i++) {
            contenido.innerHTML += '<div class="border w-100 my-4 mr-4" style="width: 18rem;">' +
                '<div class="card-body">' +
                '<h2 class="card-title">' + noticias[i][0] + '</h2>' +
                '<h6 class="card-subtitle mb-2 text-muted">' + noticias[i][2] + '</h6>' +
                '<p class="card-text">' + noticias[i][1] + '</p>' +
                '<a href="#" class="card-link">Leer mas...</a>' +
                '</div>' +
                '</div>';
        }
    }

}

function cargarPublicaciones() {
    let contenido = document.querySelector('#contenidoPublicaciones');
    contenido.innerHTML += '<h1 align="center" class="text-primary">Publicaciones</h1>';
    for (let i = 0; i < publicaciones.length; i++) {
        contenido.innerHTML += '<div id="contenidoPublicaciones" class="row border-top m-4 p-4">' +
            '<h1>' + publicaciones[i][0] + '</h1>' +
            '<p class="text-justify">' + publicaciones[i][1] + '</p>' +
            '<h6 class="text-muted">' + publicaciones[i][2] + '</h6>'
        '</div>';
    }

    contenido.innerHTML += '<span class="btn btn-outline-primary btnTop" onclick="subir();">Subir</span>' +
        '<div class="d-flex mb-4">' +
        '<ul class="pagination m-auto">' +
        '<li class="page-item">' +
        '<a class="page-link" href="#" aria-label="Previous">' +
        '<span aria-hidden="true">&laquo;</span>' +
        '</a>' +
        '</li>' +
        '<li class="page-item"><a class="page-link" href="#">1</a></li>' +
        '<li class="page-item"><a class="page-link" href="#">2</a></li>' +
        '<li class="page-item">' +
        '<a class="page-link" href="#" aria-label="Next">' +
        '<span aria-hidden="true">&raquo;</span>' +
        '</a>' +
        '</li>' +
        '</ul>' +
        '</div>';

}

function subir() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function indexInicio() {
    cargarCategorias();
    cargarNoticias();
    cargarPublicaciones();
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Registro de SW exitoso', reg))
            .catch(err => console.warn('Error al tratar de registrar el sw', err))
    }
}


// -------- MENSAJES --------- //

function confirmar(msg, e) {
    Swal.fire({
        title: '¿Desea ' + msg + '?',
        icon: 'question',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Guardar`,
        denyButtonText: `No Guardado`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Guardado!', '', 'success')

        } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info')
        }
    });
}


function guardar() {
    Swal.fire(
        '¡Buen trabajo!',
        'Se ha agregado a favorito',
        'success'
    )
}

function error(msg) {
    Swal.fire({
        icon: 'question',
        title: 'Ups...',
        text: '¡Algo salió mal!',
        //footer: '<a href>Why do I have this issue?</a>'
    })
}

// ----------- TAREAS ----------- //

function saveTask(i) {
    let title = videos[i][1]; //document.getElementById('title').value;
    let description = videos[i][2]; //document.getElementById('description').value;
    let video = videos[i][0];
    let categoria = videos[i][3];

    let task = {
        title,
        description,
        video,
        categoria
        //fechaActual
    };

    if (localStorage.getItem('tasks') === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        let found = false;
        for (let i = 0; i < tasks.length; i++) {
            let title1 = tasks[i].title;
            if (title1 === title) {
                found = true;
            }
        }

        if (!found) {
            alert('Se ha agregado a la lista: ' + title);
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } else {
            alert('Ya esta agregado en la lista de Favorito');
        }
    }

}

function deleteTask(i) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.splice(i, 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Se ha removido de la lista favorito');
    getTasks();
}

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let contenido = document.querySelector('.contenido');
    contenido.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;
        let video = tasks[i].video;
        let categoria = tasks[i].categoria;


        contenido.innerHTML += `<div class="video" style="position:relative;">
        <iframe src="${video}" frameborder="0" height="250"></iframe>
        <br>
        <h2>${title}</h2>
        <p align="justify" class="pb-3">${description}<br><b>Categoria:</b>${categoria}</p>
        <form class="ml-2 mt-2" style="position: absolute; left: 5px; bottom: 5px;"><span class="text-info btnQuitarFavorito" onclick="deleteTask('${i}')">Quitar</span></form></div>';
    `;
    }
}
