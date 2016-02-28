app.controller("MainController", function($scope, $http) {
	
	$http.get("app/shared/json/ApplicationProperties.json").success(function(response) {
		$scope.title = response.title;
		$scope.headerBackgroundImage = response.headerBackgroundImage;
		$scope.logoImage = response.logoImage;
		$scope.logoText = response.logoText;
	});
	
	$scope.sections = [];
	
	$http.get("app/shared/json/Sections.json").success(function(response) {
		
		angular.forEach(response, function(value, key) {
			$scope.sections.push(value);
		});
		
	});
	
	$scope.active="";
	this.showTab = function(tabName){
		console.log("clicked tab "+tabName);
		$scope.active = tabName;
	}
	
	
	$scope.myInterval = 5000;
	  $scope.noWrapSlides = false;
	  $scope.active = 0;
	  var currIndex = 0;

	  $scope.randomize = function() {
	    var indexes = generateIndexesArray();
	    assignNewIndexesToSlides(indexes);
	  };

	  // Randomize logic below

	  function assignNewIndexesToSlides(indexes) {
	    for (var i = 0, l = slides.length; i < l; i++) {
	      slides[i].id = indexes.pop();
	    }
	  }

	  function generateIndexesArray() {
	    var indexes = [];
	    for (var i = 0; i < currIndex; ++i) {
	      indexes[i] = i;
	    }
	    return shuffle(indexes);
	  }

	  // http://stackoverflow.com/questions/962802#962890
	  function shuffle(array) {
	    var tmp, current, top = array.length;

	    if (top) {
	      while (--top) {
	        current = Math.floor(Math.random() * (top + 1));
	        tmp = array[current];
	        array[current] = array[top];
	        array[top] = tmp;
	      }
	    }

	    return array;
	  }
});
