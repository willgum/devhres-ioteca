
	app

	.controller("categoriaCtrl", function ($scope, API, $window) {
		
		$scope.lista = [];

		list = function () {
			API.Categoria.list().$promise.then(function (r) {
				$scope.lista = r;
			}, function (err) {
				console.log("Err "+err);
			});
		};

		list();

		$scope.sel = function (d) {
			$scope.categoria = API.Categoria.get({ id: d.id });
		};


		$scope.save = function () {
			if($scope.categoria.id){

				API.Categoria.update({id: $scope.categoria.id}, $scope.categoria).$promise.then(function (r) {
					console.log("r: "+r);
					list();
				}, function (err) {
					console.log("Err "+err);
				});

			} else {
				API.Categoria.save($scope.categoria).$promise.then(function (r) {
					console.log("r: "+r);
					list();
				}, function (err) {
					console.log("Err "+err);
				});
			}
		};

		$scope.delete = function (d) {
			if($window.confirm("Seguro?")){
				API.Categoria.delete({id: d.id}).$promise.then(function (r) {
					console.log("r: "+r);
					list();
				}, function (err) {
					console.log("Err "+err);
				});
			}
		};


	});