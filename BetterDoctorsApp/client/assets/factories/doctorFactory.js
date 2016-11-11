app.factory('doctorFactory', ['$http', function($http) {
  function doctorFactory(){
 	this.findDoctors = function(data, callback) {
 		//Set up HTTP Orject to make request
 		var xhttp = new XMLHttpRequest();
 		//Prepare variables to create URL which will be used for API call
 		var start = 'https://api.betterdoctor.com/2016-03-01/doctors?'
 		//API key for Better Doctors
 		var user_key = 'user_key=042d852d3e7416f52f932e01afaee003'
 		if (data.filter.first_name) {
 			start += 'first_name=' + data.filter.first_name + '&'
 		}
 		if (data.filter.last_name) {
 			start += 'last_name=' + data.filter.last_name + '&'
 		}
 		if (data.filter.query) {
 			start += 'query=' + data.filter.query + '&'
 		}
 		if (data.filter.insurance) {
 			start += 'insurance_uid=' + data.filter.insurance + '&'
 		}
 		if (data.latitude) {
 			start += 'location=' + data.latitude.toString() + '%2C'
 		}
 		if (data.longitude) {
 			start += data.longitude.toString() + '%2C25&'
 		}
 		if (data.filter.gender) {
 			start += 'gender=' + data.filter.gender + '&'
 		}
 		if (data.filter.sort) {
 			start += 'sort=' + data.filter.sort + '&'
 		}
 		if (data.filter.fields) {
 			start += 'fields=' + data.filter.fields + '&skip=0&'
 		}
 		if (data.filter.limit) {
 			start += 'limit=' + data.filter.limit + '&'
 		}
 		start += user_key
 		//Make an API call with URL
 		console.log(start)
 		$http.get(start).then(function(res) {
 			callback(res)
 		})
 	}
 	
 	this.getInsurance = function(callback) {
 		var obj = new Object();
 		var insurances = [];
 		insurance_url = 'https://api.betterdoctor.com/2016-03-01/insurances?user_key=042d852d3e7416f52f932e01afaee003'
        $http.get(insurance_url).then(function(res) {
          //loop to create array with insurance information
            for (var i =0; i < res.data.data.length; i++) {
              for (var k = 0; k < res.data.data[i].plans.length; k++) {
    			// obj[res.data.data[i].plans[k].name] = res.data.data[i].plans[k].uid
    			insurances.push(res.data.data[i].plans[k])
              }
            }
        })

        callback(insurances);
 	}
 	this.postInsurance = function(data, callback) {
 		console.log(data);
 		$http.post('/insurance', data).then(
 			function(returned_data) {
 				console.log('Returned Data', returned_data.data)
 				callback(returned_data);
 			});
 	}
    }
    return new doctorFactory();
}]);