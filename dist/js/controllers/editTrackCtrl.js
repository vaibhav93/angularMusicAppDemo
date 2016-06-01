musicApp.controller('editTrackCtrl', ["$scope", "$stateParams", "Tracks", "Genres",
    function ($scope, $stateParams, Tracks,Genres) {
        Tracks.get({id:$stateParams.id},function(track){
            console.log(track);
            $scope.track = track;
        })
        $scope.updateRating = function(){
            
        }

    }
])