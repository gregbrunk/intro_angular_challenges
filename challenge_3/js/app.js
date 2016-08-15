console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);

app.controller("infoController", infoController);
app.controller("loanController", loanController);

function infoController(){
  this.name = "Jon Doe"; // default name
  this.height = 5.6; // default height in feet
}

function loanController(){
	this.amount = 0;
	this.apr = 0;
	
	this.month = function(months) {
		var accrued_interest = (this.amount * (this.apr/100)) * months;
		var total_balance = (this.amount * months) + accrued_interest;
		return {
			accrued_interest: accrued_interest, total_balance: total_balance
		};
	};
}
