let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        return (this.guestCapacity - this.guestCount) >= partySize ? true : false
    },
    seatParty: function(partySize){
        this.guestCount += partySize
    },
    removeParty: function(partySize){
        this.guestCount -= partySize
    }
}

restaurant.seatParty(99)
console.log(restaurant.checkAvailability(6))
restaurant.removeParty(8)
console.log(restaurant.checkAvailability(6))