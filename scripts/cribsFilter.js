app
    .filter('cribsFilter', function() {
        return function(apartments, priceInfo) {
            var newList = [];
            angular.forEach( apartments, function(apartment) {
                if(apartment.price>=priceInfo.min && apartment.price<=priceInfo.max) {
                    newList.push(apartment);
                }
            })
            return newList;
        }
    });