app.service('mainService', function($http){	
	
	this.getProperties = function(propertyType, callback){
		$http.get("../json/"+propertyType+".json").success(function(response) {
	        callback && callback(response);
	    });
	};
	
	
});

