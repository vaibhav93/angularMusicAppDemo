musicApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
        url: '/home',
        controller: 'homeCtrl',
        templateUrl: 'views/list-tracks.html'
    }).state('new', {
        url: '/new'

    }).state('track', {
        url: '/track',
        template:'<div ui-view></div>'
    }).state('track.new', {
        url: '/new',
        templateUrl: 'views/new-track.html',
        controller: 'newTrackCtrl'
    }).state('track.edit', {
        url: '/edit/:id',
        templateUrl: 'views/edit-track.html',
        controller: 'editTrackCtrl'
    })


});