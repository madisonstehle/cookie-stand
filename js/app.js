'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seattleElement = document.getElementById('seattle');

var seattleShop = {
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForDay: 0,
    
    cookiesEachHour: function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    },

    render: function() {
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]} cookies: ${this.cookiesEachHour()}`;
            seattleElement.appendChild(liEl);
            // console.log(i);
        }
        return liEl;
    }
}
seattleShop.render();

var tokyoShop = {
    
}

var dubaiShop = {
    
}

var parisShop = {
    
}

var limaShop = {
    
}