app
.controller('cribsController', function($scope, cribsFactory){
    $scope.apartments;
    $scope.submitted = false;
    $scope.viewDetails = false;
    $scope.priceList = [100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000];
    $scope.priceInfo = {
        min: 0,
        max: 1000000
    }
    $scope.newApartment = {};
    $scope.editApartment = {};

    $scope.editAdvertise = function(apartmentDetails) {
        $scope.editApartment = apartmentDetails;
        console.log(apartmentDetails);
    }

    $scope.submitAd = function(newApartment) {

        if($scope.newApartment.name && $scope.newApartment.address && 
            $scope.newApartment.city && $scope.newApartment.owner &&
            $scope.newApartment.phone && $scope.newApartment.price) {
                $scope.apartments.push(newApartment);
                $scope.newApartment = {};
                $("#postAdvertise").modal('hide');
        }
            
    }
    $scope.deleteAdvertise = function(apartmentDetails) {
        var index = $scope.apartments.indexOf(apartmentDetails);
        $scope.apartments.splice(index, 1);
        $("#deleteAdvertise").modal('hide');
    }

    cribsFactory.getCribs().then(function(response){
        $scope.apartments = response.data;
    }, function(error) {
        console.log('Error occured');
    });
})