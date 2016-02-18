app

//==================================
// catalogo routers
//==================================
    .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    //==================================
    // catalogo layout base
    //==================================
        .state('catalogo', {
        url: '/catalogo',
        views: {
            '': {
                templateUrl: 'app/views/layout.html'
            },
            'aside': {
                templateUrl: 'app/views/aside.html'
            },
            'content': {
                templateUrl: 'app/views/content.html'
            }
        }
    })

    //==================================
    // url categoria
    //==================================
    .state("catalogo.categoria", {
        url: "/categoria",
        data: { section: 'Catálogo', page: 'Categoría' },
        templateUrl: "catalogo/views/categoria/index.html"
    })

    //==================================
    // url categoria
    //==================================
    .state("catalogo.ct", {
        url: "/ct",
        data: { section: 'Catálogo', page: 'Document' },
        templateUrl: "app/views/pages/document.html"
    });
});
