app

.run(['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
      // It's very handy to add references to $state and $stateParams to the $rootScope
      // so that you can access them from any scope within your applications.For example,
      // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
      // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
 
      }])

.config(function ($httpProvider) {
	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
})
.config(function ($resourceProvider) {
	// Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
})

.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/main");

	$stateProvider
	.state("no", {
		url:"/nof",
		templateUrl:"app/views/nof.html"
	})

	.state("main", {
		url:"/main",
		
		views: {
              '': {
                templateUrl:"app/views/main.tmpl.html"
              },
          }
	})

	//==================================
    // Mi app
    //==================================
    .state('app', {
   
            url: '/app',
            views: {
              '': {
                templateUrl: 'viewsm/layout.html'
              },
              'aside': {
                templateUrl: 'viewsm/aside.html'
              },
              'content': {
                templateUrl: 'viewsm/content.html'
              }
            }
      
    })


	.state("app.test1", {
		url:"/test1",
    data : { section: 'App', page: 'Test 1' },
		templateUrl:"app/views/test1.html"
	})

  .state("app.test2", {
    url:"/test2",
    data : { page: 'Test 2' },
    templateUrl:"app/views/test2.html"
  })

	

	.state("app.categoria", {
		url:"/categoria",
    data : { page: 'Cate' },
		templateUrl:"app/views/categoria.html"
	});
});