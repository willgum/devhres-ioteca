'use strict';

/**
 * @ngdoc function
 * @name app.directive:uiNav
 * @description
 * # uiScroll
 * Directive of the app
 */
angular.module('app')
  .directive('uiNav', ['$timeout', function($timeout) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        el.find('a').bind('click', function(e) {
          var li = angular.element(this).parent();
          var active = li.parent()[0].querySelectorAll('.active');
          li.toggleClass('active');
          angular.element(active).removeClass('active');
        });
      }
    };
  }]);


app
    
    // =========================================================================
    // SUBMENU TOGGLE
    // =========================================================================

    .directive('toggleSubmenu', function($timeout){

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                /*element.click(function(){
                    element.parent().toggleClass('toggled');
                    element.parent().find('ul').stop(true, false).slideToggle(200);
                })*/

                element.bind("click", function(e){
                    
                    element.parent().toggleClass('toggled');
                    //element.parent().find('ul').stop(true, false).slideToggle(200);
                    //var ul = element.find('ul');
                    
                    var li = angular.element(this).parent();
                      //var active = li.parent()[0].querySelectorAll('.active');
                      li.toggleClass('active');
                      //angular.element(active).removeClass('active');

                });



            
                /*
                element.find('a').bind('click', function(e) {
                    console.log("click");
                  element.parent().toggleClass('toggled');
                    element.parent().find('ul').stop(true, false).slideToggle(200);
                });
                */

            }
        }
    })

;

   
