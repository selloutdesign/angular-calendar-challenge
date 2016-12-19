var app = angular.module('calendarDemoApp', []);

// your controller and directive code go here


app.controller('calCtrl', function($scope) {
	vm = this;
	var today = new Date();
	vm.month = today.getMonth();
	vm.year = today.getFullYear();
	vm.years = [];
	vm.firstYear = vm.year - 20;
	for(i = 0; i < 41; i++) {
		vm.years.push(vm.firstYear + i);
	}
	vm.selYear = vm.year;
	console.log(vm.years);
	console.log(vm.year);
	vm.months = new Array(	"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	vm.monthName = vm.months[vm.month];

	vm.computeMonth = function() {
		console.log(vm.monthName);
		today.setMonth(vm.months.indexOf(vm.monthName));
		today.setYear(vm.selYear);
 		vm.monthRange = CalendarRange.getMonthlyRange(today);
	};

	vm.computeMonth();
});