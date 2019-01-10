
var app = angular.module("evalApp", [])

app.controller("evalController",function($scope,$http){

	$scope.userId;
	$scope.id;
	$scope.title;
	$scope.completed;
	$scope.users;
	//$scope.showMsg = false;
	$scope.tenUsers;     
	$scope.user;      
	$scope.newUser;
	$scope.usertitle;
	$scope.userbody;
	$scope.userid;
	$scope.payload;


	$scope.getUsers = function () {

		$http.get("https://jsonplaceholder.typicode.com/posts")	
		
		.then(res => {
			$scope.users = res.data;
			$scope.tenUsers = $scope.users.slice(0, 8);			
		})

		.catch(function(err){
			console.log(`Error of type: ${err}`)
		});

	}

	$scope.getUsers();


	$scope.deleteUser = function (user) {		

		$http.delete(`https://jsonplaceholder.typicode.com/posts/${user}`)
			.then(function(response){
					$scope.user = user;
					//$scope.showMsg = true;	
					console.log(`User ${user.id} successfully deleted!`)					
			})
	}

	$scope.addUser = function(){

		$scope.payload = new FormData();

		$scope.payload.append("title", $scope.usertitle);
		$scope.payload.append('body', $scope.userbody);
		$scope.payload.append('userId', $scope.userid);
		
		$http({
			url: 'https://jsonplaceholder.typicode.com/posts',
			method: "POST",
			body: JSON.stringify($scope.payload),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			  }
		})
		.then(json => console.log($scope.payload))
	}


});






