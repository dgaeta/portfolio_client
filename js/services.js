// js/services/todos.js
angular.module('demoServices', [])
        .factory('CommonData', function(){
        var data = "";
        return{
            getData : function(){
                return data;
            },
            setData : function(newData){
                data = newData;                
            }
        }
    })
    .factory('Llamas', function($http, $window) {      
        return {
            get : function() {
                var baseUrl = $window.sessionStorage.baseurl;
                return $http.get(baseUrl+'/api/llamas');
            }
        }
    })
    .factory('Chess10', function($http, $window) {      
        return {
            get : function() {
                var baseUrl = $window.sessionStorage.baseurl;
                return $http.get('http://localhost:4000/api/chess10');
            }
        }
    })
    .factory('Chess11', function($http, $window) {      
        return {
            get : function() {
                var baseUrl = $window.sessionStorage.baseurl;
                return $http.get('http://localhost:4000/api/chess11');
            }
        }
    })
    .factory('Chess12', function($http, $window) {      
        return {
            get : function() {
                var baseUrl = $window.sessionStorage.baseurl;
                return $http.get('http://localhost:4000/api/chess12');
            }
        }
    })
    .factory('Csair20', function($http, $window) {      
        return {
            get : function() {
                var baseUrl = $window.sessionStorage.baseurl;
                return $http.get('http://localhost:4000/api/Csair20');
            }
        }
    })
    .factory('Csair21', function($http, $window) {      
        return {
            get : function() {
                var baseUrl = $window.sessionStorage.baseurl;
                return $http.get('http://localhost:4000/api/csair21');
            }
        }
    })
    ;