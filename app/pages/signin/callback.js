'use strict';

angular.module('app')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/signin/callback', {
        controller: 'SigninCallback',
        template: '{{ error || "Redirecting..." }}'
      });
  }).controller('SigninCallback', function($scope, $api, $routeParams, $location) {

    var redirect_url = '/'; //todo

    if ($routeParams.status == 'linked') {
      $api.signin_with_access_token($routeParams.access_token).then(function(response) {
        if (response === true) {
          $location.url(redirect_url);
        } else {
          $scope.error = "ERROR: Unexpected linked account response."
        }
      });
    } else if ($routeParams.status == 'error_needs_account') {
      $scope.error = "TODO: NEEDS ACCOUNT";
    } else if (params.status == 'error_already_linked') {
      $scope.error = "ERROR: Account already linked.";
      console.log('ERROR: ');
    } else if (params.status == 'unauthorized') {
      $scope.error = "ERROR: Unauthorized.";
    } else {
      $scope.error = "ERROR: Unknown status.";
    }
  });


// SCRATCHPAD: don't require a view
//angular.module('app')
//  .config(function ($routeProvider) {
//    $routeProvider
//      .when('/signin/callback', {
//        redirectTo: $injector.invoke(function (route, path, params, $scope, $api) {
//          console.log($.api);
//          console.log("OH HAI", params, $scope, $api);
//
//          //console.log($scope, $routeParams);
//          return '/????';
////
////          $scope.providers = [
////            { id: 'github', name: 'GitHub', image_url: 'images/favicon-github.png' },
////            { id: 'twitter', name: 'Twitter', image_url: 'images/favicon-twitter.png' },
////            { id: 'facebook', name: 'Facebook', image_url: 'images/favicon-facebook.png' }
////          ];
////
////          $scope.submit = function() {
////            $api.signin($scope.email, $scope.password);
////          };
////
////          $scope.signin_url_for = $api.signin_url_for;
////          $scope.signout = $api.signout;
//        }
//      });
//  });
//
//