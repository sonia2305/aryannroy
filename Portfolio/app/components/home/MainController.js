var app = angular.module("controllers", ['ngSanitize']);

app.controller("MainController", function($scope, $http, $sce) {
			
	$http.get("app/shared/json/ApplicationProperties.json").success(function(response) {
		$scope.title = response.title;
		$scope.headerBackgroundImage = response.headerBackgroundImage;
		$scope.logoImage = response.logoImage;
		$scope.logoText = response.logoText;
	});
	
	$scope.sections = [];
	
	$http.get("app/shared/json/Sections.json").success(function(response) {
		
		angular.forEach(response, function(value, key) {
			console.log("key:"+key+", value:"+JSON.stringify(value));
			$scope.sections.push(value.SectionName);
		});
		
		console.log(JSON.stringify($scope.sections));
	});
	
});
