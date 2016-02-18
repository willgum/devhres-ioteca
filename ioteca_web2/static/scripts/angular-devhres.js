/**
 * Util functions for AngularJS
 * @version v0.0.1 (15.02.2016)
 * asullom (c) 2016 Devhres Team
 * License: MIT
 */

var ngDevhres = angular.module("ngDevhres", []);

/**
 * Declaración de variables
 */
ngDevhres.value("safeValue", "Hi ngDevhres team");



/**
 * Servicio security
 */
ngDevhres
    .service("security", function(safeValue) {
        /**
         * Ejemplo simple
         *
         * @returns {string}
         */
        this.doIt = function() {
            return "Security.doIt() called: " + safeValue;
        };

        /**
         * Verifica si un arrays está contenido en otro (usado para verificar roles)
         *
         * @param userRoles {array}
         * @param rolesToCheck {Array}
         * @returns {boolean}
         */
        this.checkRole = function(userRoles, rolesToCheck) {
            if (rolesToCheck.length === 0) {
                return true;
            }
            if (userRoles.length === 0) {
                return false;
            }
            for (var i = 0; i < userRoles.length; i++) {
                if (rolesToCheck.indexOf(userRoles[i]) > -1) {
                    return true;
                }
            }
            return false;
        };

    });


/**
 *  Menu
 */
ngDevhres
    .directive('uiNav', ['$timeout', function($timeout) {
        return {
            restrict: 'AC',
            link: function(scope, el, attr) {
                el.find('a').bind('click', function(e) {
                    var li = angular.element(this).parent();
                    var active = li.parent()[0].querySelectorAll('.active');
                    li.toggleClass('active');
                    angular.element(active).removeClass('active');
                    //angular.element(active).removeClass('toggled');
                });
            }
        };
    }])

// =========================================================================
// SUBMENU TOGGLE
// =========================================================================
.directive('toggleSubmenu', function($timeout) {

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            /*element.click(function(){
                element.parent().toggleClass('toggled');
                element.parent().find('ul').stop(true, false).slideToggle(200);
            })*/

            element.bind("click", function(e) {

                element.parent().toggleClass('toggled');
                //element.parent().find('ul').stop(true, false).slideToggle(200);
                //var ul = element.find('ul');

                var li = angular.element(this).parent();
                //var active = li.parent()[0].querySelectorAll('.active');
                li.toggleClass('active');
                //angular.element(active).removeClass('active');
                // angular.element(this).children().toggleClass("md-toggle-icon toggled");
            });
            /*
            element.find('a').bind('click', function(e) {
                console.log("click");
              element.parent().toggleClass('toggled');
                element.parent().find('ul').stop(true, false).slideToggle(200);
            });
            */
        }
    };
});


ngDevhres

    .filter('nospace', function() {
    return function(value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
})

.filter('humanizeDoc', function() {
    return function(doc) {
        if (!doc) return;
        if (doc.type === 'directive') {
            return doc.name.replace(/([A-Z])/g, function($1) {
                return '-' + $1.toLowerCase();
            });
        }
        return doc.label || doc.name;
    };
})

.filter('directiveBrackets', function() {
    return function(str) {
        if (str.indexOf('-') > -1) {
            return '<' + str + '>';
        }
        return str;
    };
});





/*
var myutil = angular.module("myutil", []);

myutil.value("safeValue", "a safe value");

myutil.factory("safeFactory", ['safeValue', function(p1) {
    return { value : p1 };
}]);
function MySafeService(p1){
    this.doIt = function() {
        return "MySafeService.doIt() called: " + p1.value;
    };
}
myutil.service("safeService", ['safeFactory', MySafeService]);

myutil.provider("$safeService2", function() {
    var provider = {};
    provider.$get = ['safeService', function(p1) {
        var service = {};
        service.doService = function() {
            console.log("safeService from provider: " + p1.doIt());
        };
        return service;
    }];
    return provider;
});

*/
