function StaffController() {
  this.name = 'bob';
  this.email = 'bob@gmail.com';
  this.phone = '7894561234'
}

angular
  .module('app')
  .controller('StaffController', StaffController)
