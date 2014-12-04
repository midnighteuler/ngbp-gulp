function Config($stateProvider) {
  $stateProvider.state('about', {
      url: '/about',
      views: {
          'main': {
              controller: 'AboutController',
              controllerAs: 'about',
              templateUrl: 'about/about.tpl.html'
          }
      }
  });
}

function AboutController() {
  var vm = this;
}

angular
  .module('boilerplate.about', ['ui.router'])
  .config(Config)
  .controller('AboutController', AboutController);
