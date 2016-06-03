musicApp.controller('homeCtrl', ["$scope", "$stateParams", "Tracks", "Pagination",
    function ($scope, $stateParams, Tracks, Pagination) {
        $scope.pagination = Pagination.getNew(7);
        
        var tempArray = [];
        $scope.searchTrack = function () {
            if ($scope.searchParam && $scope.searchParam.length > 0) {
                if (tempArray.length == 0)
                    tempArray = $scope.tracks.slice();
                var searchParam = $scope.searchParam;
                console.log(searchParam);
                Tracks.query({
                    title: searchParam
                }, function (results) {
                    $scope.pagination.toPageId(0);
                    $scope.pagination.numPages = Math.ceil(results.length/$scope.pagination.perPage);
                    $scope.tracks = results;
                })
            }
        }


        Tracks.query(function (tracks) {
            $scope.tracks = tracks;
            $scope.pagination.numPages = Math.ceil($scope.tracks.length/$scope.pagination.perPage);
        })

        $scope.clearSearch = function () {
            $scope.searchParam = '';
            $scope.tracks = tempArray.slice();
            $scope.pagination.numPages = Math.ceil($scope.tracks.length/$scope.pagination.perPage);
        }

    }
])