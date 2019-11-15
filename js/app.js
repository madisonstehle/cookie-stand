'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var storeList = [];

function Store(name, minCust, maxCust, avgCookieSale, [], []) {
    this.storeName = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSalePerCust = avgCookieSale;
    this.customerEachHour = [];
    this.cookiesEachHour = [];

    this.finalCookiesEachHour();
    storeList.push(this);
}

Store.prototype.randomCustomerNumber = function() {return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust}

Store.prototype.finalCustomerEachHour = function() {
    for (var i = 0; i < hours.length; i++) {
        this.customerEachHour.push(this.randomCustomerNumber());
    }
    return this.customerEachHour;
}

Store.prototype.finalCookiesEachHour = function() {
    this.finalCustomerEachHour();
    for (var i = 0; i < hours.length; i++) {
        var hourlyCookies = this.customerEachHour[i] * this.avgCookieSalePerCust;

        var hourlyCookies = Math.round(hourlyCookies);
        this.cookiesEachHour.push(hourlyCookies);
    }
    return this.cookiesEachHour;
}

new Store('Seattle', 23, 65, 6.3, [], []);

console.log(storeList[0]);

var table = document.getElementById('tableContainer');

var tbodyEl = document.createElement('tbody');
var thEl = document.createElement('th');
var tdEl = document.createElement('td');
var trEl = document.createElement('tr');

// HEADER
function tableHeader() {
    for (var i = 0; i < storeList.length; i++)
    trEl = document.createElement('tr');
    thEl = document.createElement('th');
    thEl.textContent = 'HEADER YAY';
    trEl.appendChild(thEl);
    tbodyEl.appendChild(trEl);
}

function makeDataRow() {
    for (var i = 0; i < storeList.length; i++) {
        trEl = document.createElement('tr');
        thEl = document.createElement('th');
        thEl.textContent = storeList[i][0];
        trEl.appendChild(thEl);
        for (var j = 1; j < hours.length; j++) {
            tdEl = document.createElement('td');
            tdEl.textContent = 'one';
            trEl.appendChild(tdEl);
        }
    }
tbodyEl.appendChild(trEl);
}

tableHeader();
makeDataRow();
table.appendChild(tbodyEl);