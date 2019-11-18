'use strict';

Store.hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

Store.storeList = [];

Store.allStoresTotal = 0;

// CONSTRUCTOR FUNCTION
function Store(name, minCust, maxCust, avgCookieSale) {
    this.storeName = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSalePerCust = avgCookieSale;
    this.customerEachHour = [];
    this.cookiesEachHour = [];

    this.dailyCookies = 0;

    this.finalCookiesEachHour();

    Store.storeList.push(this);

    this.makeDataRow();
};

// RANDOM NUMBER GENERATOR
Store.prototype.randomCustomerNumber = function() {return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust};

// CUSTOMERS EACH HOUR
Store.prototype.finalCustomerEachHour = function() {
    for (var i = 0; i < Store.hours.length; i++) {
        this.customerEachHour.push(this.randomCustomerNumber());
    }
    return this.customerEachHour;
};

// COOKIES PER HOUR
Store.prototype.finalCookiesEachHour = function() {
    this.finalCustomerEachHour();
    for (var i = 0; i < Store.hours.length; i++) {
        var hourlyCookies = this.customerEachHour[i] * this.avgCookieSalePerCust;

        var hourlyCookies = Math.round(hourlyCookies);
        this.cookiesEachHour.push(hourlyCookies);

        this.dailyCookies += hourlyCookies;
        Store.allStoresTotal += hourlyCookies;
    }
    return this.cookiesEachHour;
};


// TABLE MAKING
var table = document.getElementById('tableContainer');
var tbodyEl = document.createElement('tbody');


// HEADER
var tableHeader = function() {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'Location';
    trEl.appendChild(thEl);

    for (var i = 0; i < Store.hours.length; i++) {
        thEl = document.createElement('th');
        thEl.textContent = Store.hours[i];
        trEl.appendChild(thEl);
    };
    var thEl = document.createElement('th');
    thEl.textContent = 'Total';
    trEl.appendChild(thEl);

    tbodyEl.appendChild(trEl);
};
tableHeader();

// DATA ROWS
Store.prototype.makeDataRow = function() {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = this.storeName;
    trEl.appendChild(thEl);
    
    for (var i = 0; i < this.cookiesEachHour.length; i++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = this.cookiesEachHour[i];
        trEl.appendChild(tdEl);
    };
    
    tdEl = document.createElement('td');
    tdEl.textContent = this.dailyCookies;
    trEl.appendChild(tdEl);

    tbodyEl.appendChild(trEl);
    // console.log('lastChild: ', tbodyEl.lastChild);
};

// FOOTER ROW
var makeFooterRow = function() {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'Hourly Totals';
    trEl.appendChild(thEl);

    for (var i = 0; i < Store.hours.length; i++) {
        var storesHourlyTotals = 0;
        var tdEl = document.createElement('td');

        for (var j = 0; j < Store.storeList.length; j++) {
            storesHourlyTotals += Store.storeList[j].cookiesEachHour[i];
        }

        tdEl.textContent = storesHourlyTotals;
        trEl.appendChild(tdEl);
    }

    tdEl = document.createElement('td');
    tdEl.textContent = Store.allStoresTotal;
    trEl.appendChild(tdEl);

    tbodyEl.appendChild(trEl);
}

// LET'S MAKE STORES
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

makeFooterRow();

table.appendChild(tbodyEl);

// FORMS

var userInputForm = document.getElementById('userForm');
userInputForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    var newStoreName = event.target.inputStoreName.value;
    var newMinCust = event.target.inputMinCust.value;
    var newMaxCust = event.target.inputMaxCust.value;
    var newAvgCookies = event.target.inputAvgCookies.value;
    
    newMinCust = parseInt(newMinCust, 10);
    newMaxCust = parseInt(newMaxCust, 10);
    newAvgCookies = parseInt(newAvgCookies, 10);

    table.deleteRow(-1);

    new Store(newStoreName, newMinCust, newMaxCust, newAvgCookies);

    event.target.inputStoreName.value = null;
    event.target.inputMinCust.value = null;
    event.target.inputMaxCust.value = null;
    event.target.inputAvgCookies.value = null;
    
    makeFooterRow();
}

