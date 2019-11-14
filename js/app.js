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

    storeList.push(this);
}

Store.prototype.randomCustomerNumber = function() {return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust}

Store.prototype.finalCustomerEachHour = function() {
    for (var i = 0; i < hours.length; i++) {
        this.customerEachHour.push(this.randomCustomerNumber());
    }
    console.log(this.customerEachHour);
    return this.customerEachHour;
}

Store.prototype.finalCookiesEachHour = function() {
    this.finalCustomerEachHour();
    console.log(this.customerEachHour)
    for (var i = 0; i < hours.length; i++) {
        var hourlyCookies = this.customerEachHour[i] * this.avgCookieSalePerCust;

        // console.log(this.customerEachHour);

        // console.log(typeof hourlyCookies);

        var hourlyCookies = Math.round(hourlyCookies);
        this.cookiesEachHour.push(hourlyCookies);
    }
    // console.log(this.cookiesEachHour);
    return this.cookiesEachHour;
}

new Store('Seattle', 23, 65, 6.3, [], []);

// console.log(storeList[0].finalCustomerEachHour());

console.log('finalCookiesEachHour', storeList[0].finalCookiesEachHour());