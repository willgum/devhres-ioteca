app

.factory("API", function ($resource) {
	var url="http://localhost:8000/api/catalogo/";
	return {
		Categoria: $resource(url+"categorias/:id/", {'id':'@id'}, {

			"update": { method:'PUT' },
			"list": { method:'GET', isArray:true }

		}),
		Libro: $resource(url+"libros/:id/", {'id':'@id'}, {

			"update": { method:'PUT' },
			"list": { method:'GET', isArray:true }

		}),

	};
});

