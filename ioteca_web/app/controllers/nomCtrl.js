
	app

	.controller("nomCtrl", function ($scope) {
		//$scope.nombre = "Juan Perez";
		$scope.save = function () {
			console.log("Hola "+$scope.nombre);
		};
		$scope.lista = [
    
    {
        "id": 5,
        "nombre": " 5",
        "codigo": "05",
        "estado": true
    },
    {
        "id": 7,
        "nombre": "s",
        "codigo": "s",
        "estado": false
    }
];
	});