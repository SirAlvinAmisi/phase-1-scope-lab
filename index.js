var customerName = 'bob';

// 2. Write a function to uppercase the global customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();

}

// 3. Write a function to declare a global variable bestCustomer and set it to 'not bob'
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declaring without 'var', 'let', or 'const' makes it global
}

// 4. Write a function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Modifies the global variable
}

// 5. Declare a constant leastFavoriteCustomer and try to change it
const leastFavoriteCustomer = 'John';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Jane'; // This will throw an error because leastFavoriteCustomer is a constant
}