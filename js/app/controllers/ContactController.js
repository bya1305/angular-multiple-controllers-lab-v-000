function ContactController() {
  this.name = 'Josh';
  this.email = 'josh.avina78@gmail.com';
  this.phone = '1234567890';

  var vm = this;

  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
