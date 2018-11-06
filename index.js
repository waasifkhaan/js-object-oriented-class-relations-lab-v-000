let store = { drivers: [], passengers: [], trips: [] };
// initialize store with key of items and users that each point to an empty array

let driverId = 0;

class Driver {
    constructor(name) {
        this.id = ++driverId;
        this.name = name;

        // insert in the user to the store
        store.drivers.push(this);
    }
}

let passengerId = 0;

class Passenger {
    constructor(name) {
        this.id = ++passengerId;
        this.name = name;

        // insert in the user to the store
        store.passengers.push(this);
    }
}
let tripId = 0;

