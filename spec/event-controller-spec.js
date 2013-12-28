var app = angular.module('MyApp');

describe("EventController", function() {
	var scope, q;
	var controllerFactory;
	var mockSerivce = {};

	var events = ["Event1", "Event2", "Event3"];

	beforeEach(function() {
		module("MyApp");
		inject(function($rootScope, $controller, $q) {
			controllerFactory = $controller;
			scope = $rootScope.$new();
			q = $q;
		});
	});

	beforeEach(function() {
		var deferred = q.defer();
		deferred.resolve(events);
		mockSerivce.getEvents = jasmine.createSpy('getEvents');
		mockSerivce.getEvents.andReturn(deferred.promise);
	});

	function initController() {
		return controllerFactory('EventController', {
			$scope: scope,
			EventService: mockSerivce
		});
	}

	it("should have a events list", function() {
		initController();
		scope.$digest();
		expect(scope.events.length).toEqual(3);
		expect(scope.events).toEqual(events);
	});

	it("should have a recent event", function() {
		initController();
		scope.$digest();
		expect(scope.recentEvent).toEqual("Event1");
	});
});