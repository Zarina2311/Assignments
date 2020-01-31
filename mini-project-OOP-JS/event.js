class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
    }

    addAvailableTickets(name, price) {
        this.availableTickets.push(new TicketType(name, price));
    }

    allTickets() {
        let result = "All Tickets: ";
        for (let i = 0; i < this.availableTickets.length; i++) {
            let ticket = this.availableTickets[i];
            result += `${i}. ${ticket.name} ($${ticket.price})`;
        };

        return result;
    }
    
    searchTickets(lowerPriceRange, upperPriceRange) {
        let result = "Eligible tickets: ";
        for (let i = 0; i < this.availableTickets.length; i++) {
            let ticket = this.availableTickets[i];
            if (ticket.price > lowerPriceRange && ticket.price < upperPriceRange) {
                result += `${i}. ${ticket.name} ($${ticket.price})`;
            }
        }

        if (result === "") {
            result = "No tickets available.";
        }

        return result;
    }
}

class TicketType {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
}

const eventObj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
const eventObj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const eventObj3 = new Event("Jenny Lewis", "On the line tour 2019");

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);
eventObj3.addAvailableTickets("Orchestra", 300);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Balcony", 100);

console.log(eventObj3.searchTickets(0, 250));

const eventArray = new Array();

// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

// to check whether the elements are pushed
//console.log(eventArray);

$(document).ready(function() {
    let html = "";
    $.each(eventArray, function(index, item) {

        html+= `<li>${item.name} - ${item.description} - ${item.searchTickets(0, 101)}</li>`;
    });
    // insert final html into #event...
    $("#event").html(html);
});