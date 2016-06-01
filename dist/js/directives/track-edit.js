musicApp.directive('trackEdit', function () {
    return {
        scope: {
            track: '=?value'
        },
        restrict: 'E',
        templateUrl: '../views/editTrack-directive.html',
        controller: function ($scope, Tracks, Genres,$window) {
            var newTrack = false;
            $scope.max = 5;
            $scope.genres = Genres.query();
            $scope.searchGenre = function () {
                if ($scope.searchGenre && $scope.genreName.length > 0) {
                    $scope.filteredList = $scope.genres.filter(function (genre) {
                        if (genre.name.search($scope.genreName) >= 0)
                            return true;
                        else
                            return false;
                    })
                }
            }
            $scope.clearSearch = function () {
                $scope.genreName = '';
                $scope.filteredList = [];
            }

            function getGenreIds() {
                var ids = [];
                angular.forEach($scope.track.genres, function (genre) {
                    ids.push(genre.id);
                })
                return ids;
            }

            $scope.addGenre = function (genre) {
                $scope.track.genres.push(genre);
            }
            $scope.$watch('track', function () {
                if ($scope.track) {
                    newTrack = false;
                    $scope.rating = Number($scope.track.rating);
                } else {
                    newTrack = true;
                    $scope.track = {
                        title: '',
                        rating: 0,
                        genres: []
                    }
                }
            })

            $scope.saveTrack = function () {
                $scope.track.rating = $scope.rating;
                var saveTrack = {
                    rating: $scope.rating,
                    id: $scope.track.id,
                    title: $scope.track.title,
                    genres: getGenreIds()
                }
                if (newTrack) {
                    delete saveTrack.id;
                    Tracks.save(saveTrack, function (success) {
                        console.log(success);
                        $window.alert('Saved succesfully !');
                    })
                } else {
                    Tracks.save({
                        id: $scope.track.id
                    }, saveTrack, function (success) {
                        console.log(success);
                        $window.alert('Saved succesfully !');
                    })
                }
            }

        }
    };
});