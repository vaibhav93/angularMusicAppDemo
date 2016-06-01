musicApp.directive('track', function () {
    return {
        scope: {
            track: '=value'
        },
        restrict: 'E',
        templateUrl: '../views/track-directive.html',
        controller:function($scope,Tracks){
            $scope.max =5;
            $scope.rating = Number($scope.track.rating);
            function getGenreIds(){
                var ids= [];
                angular.forEach($scope.track.genres,function(genre){
                    ids.push(genre.id);
                })
                return ids;
            }
            $scope.updateRating = function(){
                $scope.track.rating = $scope.rating;
                var saveTrack = {
                    rating:$scope.rating,
                    id: $scope.track.id,
                    title:$scope.track.title,
                    genres:getGenreIds()
                }
                Tracks.save({id:$scope.track.id},saveTrack,function(success){
                    console.log(success);
                })
            }
            
        }
    };
});