const weekends = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekends[3]]: {
        open: 12,
        close: 22,
    },
    [weekends[4]]: {
        open: 11,
        close: 23,
    },
    [weekends[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italiy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this, this.mainMenu[mainIndex]];
    },

    // ES6 Enhanced object literals
    openingHours,

    orderDelivery({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address,
    }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`,
        );
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
}

// WITH optional chaining
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(open);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'method is not exist');
console.log(restaurant.orderCoffee?.(0, 1) ?? 'method is not exist');

// Arrays
const users = [
    {
        name: 'Vuong',
        email: 'minhvuong@gmail.com',
    },
];

// const users = [];

console.log(users[0]?.name ?? 'User array empty');
