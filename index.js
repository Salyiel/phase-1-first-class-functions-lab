// Code your solution in this file!
// the const is declaring drivers in global scope 
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

// 1-demonstrates array and anonymous functions and returns first two names

const returnFirstTwoDrivers = (driverFront) => {
    return driverFront.slice(0, 2)
}
returnFirstTwoDrivers(drivers);


// 2-returns a new array of last two drivers

const returnLastTwoDrivers = function (driversBack) {
    return driversBack.slice(2, 4)
}
returnLastTwoDrivers(drivers);


// 3-demonstartes having two elements

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


// 4-using a multiplier function


function createFareMultiplier(num){
    return function(num2){
        return num * num2
    };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


// 5

function selectDifferentDrivers(test1, test2){
    return test2(test1);
};
selectDifferentDrivers(drivers, returnFirstTwoDrivers(test2));