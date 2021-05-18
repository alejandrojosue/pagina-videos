//videos = Array(url, Titulo, Descripcion, categoria)
let categoria = ['Lésbico'];
let videos = Array(
    Array('https://drive.google.com/file/d/1cU3ZzR2Zi6mYoo7x0IIi5PVTje79KFM4/preview', 'Titulo1',
        'descripcion larga del video completo', categoria[0]),
    /*Array('https://drive.google.com/file/d/1DzxFG4w3ljrNyUb26KJINKG4QfJ7SyYa/preview', 'Policia Sometedora',
      'Una oficial somete fuertemente a una mujer y la coge.',categoria[0]),*/
    Array('https://drive.google.com/file/d/1cU3ZzR2Zi6mYoo7x0IIi5PVTje79KFM4/preview', 'Titulo3',
        'descripcion larga del video completo', categoria[0])
);

function cargarVideos() {
    let contenido = document.querySelector('.contenido');
    for (let i = 0; i < videos.length; i++) {
        contenido.innerHTML += '<div class="video">' +
            '<iframe src="' + videos[i][0] + '" frameborder="0" width="400" height="250"></iframe>' +
            '<br>' +
            '<h2>' + videos[i][1] + '</h2>' +
            '<p>' + videos[i][2] + '</p>Categoria:' + videos[i][3] + '</div>';
    }
}

function cargarCategorias(){
    
}