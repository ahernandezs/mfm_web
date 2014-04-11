'use strict';

describe('Controller: AccountsTestAccountCtrl', function () {

  // load the controller's module
  beforeEach(module('mfmFrontSpaApp'));

  var AccountsTestAccountCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountsTestAccountCtrl = $controller('AccountsTestAccountCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
