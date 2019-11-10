'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// SEATTLE STORE
var seattleElement = document.getElementById('seattle');

var seattleShop = {
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForDay: 0,
    
        randomCustomerNumber: function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    },

    render: function() {
        for (var i = 0; i < hours.length; i++) {
            this.customersEachHour.push(this.randomCustomerNumber());

            var hourlyCookies = this.customersEachHour[i]*this.avgCookieSale;
            hourlyCookies = Math.round(hourlyCookies);
            this.cookiesEachHour.push(hourlyCookies);

            this.totalCookiesForDay += this.cookiesEachHour[i];

            var liEl = document.createElement('li');

            liEl.textContent = `${hours[i]} cookies: ${this.cookiesEachHour[i]}`;

            seattleElement.appendChild(liEl);
        }
        liEl.textContent = `Total for the Day: ${this.totalCookiesForDay}`;
        return liEl;
    }
}

seattleShop.render();

// TOKYO STORE
var tokyoElement = document.getElementById('tokyo');

var tokyoShop = {
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForDay: 0,
    
        randomCustomerNumber: function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    },

    render: function() {
        for (var i = 0; i < hours.length; i++) {
            this.customersEachHour.push(this.randomCustomerNumber());

            var hourlyCookies = this.customersEachHour[i]*this.avgCookieSale;
            hourlyCookies = Math.round(hourlyCookies);
            this.cookiesEachHour.push(hourlyCookies);

            this.totalCookiesForDay += this.cookiesEachHour[i];

            var liEl = document.createElement('li');

            liEl.textContent = `${hours[i]} cookies: ${this.cookiesEachHour[i]}`;

            tokyoElement.appendChild(liEl);
        }
        liEl.textContent = `Total for the Day: ${this.totalCookiesForDay}`;
        return liEl;
    }
}
tokyoShop.render();

var dubaiShop = {
    
}

var parisShop = {
    
}

var limaShop = {
    
}