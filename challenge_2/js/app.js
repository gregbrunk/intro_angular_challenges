console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("ClassController", ClassController);

function WelcomeController(){
  this.full_name = "Greg Brunk";
  this.age = 27;
  this.city = "Denver";
  this.state = "Colorado";
  this.shout = function(phrase) {
  	return phrase.toUpperCase() + "!";
  };
}

function ClassController(){
  this.class_name = "White Walkers";
  this.enrolled_students = 16;
  this.start_date = "6/15/16";
  this.end_date = new Date(new Date().getFullYear() +0, 8, 2);
  this.daysRemaining = function() {
		// get total seconds between the times
		var date_now = new Date();
		var delta = Math.abs(this.end_date - date_now) / 1000;

		// calculate (and subtract) whole days
		var days = Math.floor(delta / 86400);
		delta -= days * 86400;

		return days;
	};
}