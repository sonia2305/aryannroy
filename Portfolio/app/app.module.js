var app = angular.module("mainModule", [ 'ui.router', 'ngSanitize', 'angular-carousel' ]);

app.config(function($stateProvider, $urlRouterProvider) {

	  // Redirection for unmatched url
	  $urlRouterProvider.otherwise("/sections");

	  // Setting up States
	  $stateProvider
	    .state('Home', {
	      url: "/sections",
	      templateUrl: "app/components/home/SectionsPage.html",
	      controller : "MainController"
	    });
	});

app.directive('tab', function() {
  return {
	  restrict: 'E',
	  transclude: true,
	  template: '<div role="tabpanel" ng-show="active" ng-transclude></div>',
	  require: '^tabset',
	  scope: {
	    heading: '@'
	  },
	  link: function(scope, elem, attr, tabsetCtrl) {
	    scope.active = false
	    tabsetCtrl.addTab(scope)
	  }
	}
})
		
app.directive('tabset', function() {
  return {
	    restrict: 'E',
	    transclude: true,
	    scope: { },
	    templateUrl: 'app/components/home/tabset.html',
	    bindToController: true,
	    controllerAs: 'tabset',
	    controller: function() {
	      var self = this
	      self.tabs = []
	      self.addTab = function addTab(tab) {
	    	  self.tabs.push(tab)

	    	  if(self.tabs.length === 1) {
	    	    tab.active = true
	    	  }
	    	}
	      self.select = function(selectedTab) {
	    	  angular.forEach(self.tabs, function(tab) {
	    	    if(tab.active && tab !== selectedTab) {
	    	      tab.active = false;
	    	    }
	    	  })

	    	  selectedTab.active = true;
	    	}
	    }
	  }
	})
	
	app.directive('onFinishRender', function($timeout) {
		return {
			restrict : 'A',
			link : function(scope, element, attr) {
				if (scope.$last === true) {
					$timeout(function() {
						scope.$emit('ngRepeatFinished');
					});
				}
			}
		}
	});
