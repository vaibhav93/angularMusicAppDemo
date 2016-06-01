musicApp.factory('Genres', function ($resource) {
    return $resource('http://104.197.128.152:8000/v1/genres/:id', {
        id: '@_id'
    }, {
        update: {
            method: 'PUT' 
        }
    }); 
});