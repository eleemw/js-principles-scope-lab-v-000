// Fix the Scope Lab

//declare customerName to be bob in global scope
var customerName = 'bob';

// modifies the customerName variable
function upperCaseCustomerName () {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {

}
