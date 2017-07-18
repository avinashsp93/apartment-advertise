app
.factory('cribsFactory', function($http) {

    var getCribs = function() {
        return $http.get('data/address_data.json');
    }

    return {
        getCribs: getCribs
    }
});