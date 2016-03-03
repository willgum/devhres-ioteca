app

    .factory("API", function($resource) {
    var url = "http://localhost:8000/api/catalogo/";
    return {
        Categoria: $resource(url + "categorias/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),
        Autor: $resource(url + "autors/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: false, params: { query: '@query', page: '@page', page_size: '@page_size' } }

        }),
        Libro: $resource(url + "libros/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true }

        }),

    };
});
