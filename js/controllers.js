var demoControllers = angular.module('demoControllers', []);


demoControllers.controller('FirstController', ['$scope', 'CommonData'  , function($scope, CommonData) {
  $scope.data = "";
  $scope.displayText = ""

  $scope.setData = function(){
    CommonData.setData($scope.data);
    $scope.displayText = "Data set"

  };

}]);

demoControllers.controller('SecondController', ['$scope', 'CommonData' , function($scope, CommonData) {
  $scope.data = "";

  $scope.getData = function(){
    $scope.data = CommonData.getData();

  };

}]);


demoControllers.controller('LlamaListController', ['$scope', '$http', 'Llamas', '$window' , function($scope, $http,  Llamas, $window) {

  Llamas.get().success(function(data){
    $scope.llamas = data;
  });


}]);

demoControllers.controller('Chess10Controller', ['$scope', '$http', 'Chess10', '$window', '$sce', function($scope, $http,  Chess10, $window, $sce) {
  $scope.jsonData = "";

  Chess10.get().success(function(data){
    $scope.jsonData=data;
  });

  $scope.iframe_urlbase = "https://subversion.ews.illinois.edu/svn/sp15-cs242/gaeta2/";
  $scope.iframe_filename = "Chess_1.0/Bishop.java";
  $scope.iframe_url = $sce.trustAsResourceUrl($scope.iframe_urlbase.concat($scope.iframe_filename));
  // $scope.file = $scope.iframe_filename.replace("Chess_1.0/", '');
  // $scope.path = "subversion/gaeta2/".concat($scope.file);
  // $scope.size = $scope.jsonData[String($scope.file)]["size"];
  // $scope.author = "gaeta2";
  // $scope.revision = $scope.jsonData[$scope.iframe_filename]["commit"][0]["revision"];

  $scope.changeFileName = function(name) {
    $scope.iframe_filename = name;
    $scope.iframe_url = $sce.trustAsResourceUrl($scope.iframe_urlbase.concat($scope.iframe_filename));
  };



}]);

demoControllers.controller('Chess11Controller', ['$scope', '$http', 'Chess11', '$window', '$sce', function($scope, $http,  Chess11, $window, $sce) {
  $scope.jsonData = "";

  Chess11.get().success(function(data){
    $scope.jsonData=data;
  });

  $scope.iframe_urlbase = "https://subversion.ews.illinois.edu/svn/sp15-cs242/gaeta2/";
  $scope.iframe_filename = "Chess-1.1/Bishop.java";
  $scope.iframe_url = $sce.trustAsResourceUrl($scope.iframe_urlbase.concat($scope.iframe_filename));
  // $scope.file = $scope.iframe_filename.replace("Chess_1.0/", '');
  // $scope.path = "subversion/gaeta2/".concat($scope.file);
  // $scope.size = $scope.jsonData[String($scope.file)]["size"];
  // $scope.author = "gaeta2";
  // $scope.revision = $scope.jsonData[$scope.iframe_filename]["commit"][0]["revision"];

  $scope.changeFileName = function(name) {
    $scope.iframe_filename = name;
    $scope.iframe_url = $sce.trustAsResourceUrl($scope.iframe_urlbase.concat($scope.iframe_filename));
  };



}]);

demoControllers.controller('Chess12Controller', ['$scope', '$http', 'Chess12', '$window', '$sce', function($scope, $http,  Chess10, $window, $sce) {
  $scope.jsonData = "";

  Chess10.get().success(function(data){
    $scope.jsonData=data;
  });

  $scope.iframe_urlbase = "https://subversion.ews.illinois.edu/svn/sp15-cs242/gaeta2/";
  $scope.iframe_filename = "Chess_1.0/Bishop.java";
  $scope.iframe_url = $sce.trustAsResourceUrl($scope.iframe_urlbase.concat($scope.iframe_filename));
  // $scope.file = $scope.iframe_filename.replace("Chess_1.0/", '');
  // $scope.path = "subversion/gaeta2/".concat($scope.file);
  // $scope.size = $scope.jsonData[String($scope.file)]["size"];
  // $scope.author = "gaeta2";
  // $scope.revision = $scope.jsonData[$scope.iframe_filename]["commit"][0]["revision"];

  $scope.changeFileName = function(name) {
    $scope.iframe_filename = name;
    $scope.iframe_url = $sce.trustAsResourceUrl($scope.iframe_urlbase.concat($scope.iframe_filename));
  };



}]);


demoControllers.controller('HomeController', ['$scope', '$http', '$window' , function($scope, $http, $window) {

  $scope.data = "";

  $scope.getData = function(){
    $scope.data = CommonData.getData();

  };


}]);

demoControllers.controller('SettingsController', ['$scope' , '$window' , function($scope, $window) {
  $scope.url = $window.sessionStorage.baseurl;

  $scope.setUrl = function(){
    $window.sessionStorage.baseurl = $scope.url; 
    $scope.displayText = "URL set";

  };

}]);

demoControllers.controller("TreeController", ['$scope', function($scope) {
    $scope.delete = function(data) {
        data.nodes = [];
    };

    var red_flags = {"fuck":true, "shit":true, "ass":true, "bitch":true, "dumbass":true};

    $scope.add = function(data, lastname) {
        var post = data.nodes.length + 1;

        for (var key in red_flags) { 
          if(data.newcomment.indexOf(key) > -1){
            data.newcomment = "Wow great work!";
          }
        };
        var newName = data.yourname + '-' + data.newcomment;


        data.nodes.push({name: newName,nodes: []});
    };
    $scope.tree = [{name: "Comments", yourname:"name here", comment:"comment", newcomment: "newnew",nodes: []}];
}]);

demoControllers.controller("FormController", ['$scope', function($scope) {
    
}]);


