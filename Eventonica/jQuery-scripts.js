$(document).ready(() => {
    const eventRecommender = new EventRecommender(); 
    eventRecommender.addUser(23, "Zarina");
    eventRecommender.addUser(11, "Lada");
    eventRecommender.addUser(94, "Ollie");

    function displayUsers() {
        let content = $('<ul>');
        for (let i=0; i<eventRecommender.users.length; i++) {
            content.append("<li>" + eventRecommender.users[i].name + "</li>");
        }
        $("#all-users").html(content);
    }
    displayUsers();

    $("#add-user-submit").click(function(event) {
        // cancel refresh
        event.preventDefault();
        
        // get input
        let id = $("#add-user-id").val();
        let name = $("#add-user-name").val();

        // add user
        eventRecommender.addUser(id, name);

        // update the page
        displayUsers();

        // reset form
        $("#add-user").trigger("reset");
    });

    $("#delete-user-id-submit").click(function(event){
        // cancel refresh
        event.preventDefault();

        // get input
        let id = $("#delete-user-id").val();

        // delete user
        eventRecommender.deleteUser(id);

        // update the page
        displayUsers();

        // reset form
        $("#delete-user").trigger("reset");
    });


    function displayEvents() {
        let content = $('<ul>');
        for (let i=0; i<eventRecommender.events.length; i++) {
            content.append("<li>" + eventRecommender.events[i].name + "</li>");
        }
        $("#all-events").html(content);
    }
    displayEvents();

    $("#add-event-submit").click(function(event) {
        // cancel refresh
        event.preventDefault();
        
        // get input
        let id = $("#add-event-id").val();
        let name = $("#add-event-name").val();
        let date = $("#add-event-date").val();
        let category = $("#add-event-category").val();

        // add event
        eventRecommender.addEvent(id, name, date, category);

        // update the page
        displayEvents();

        // reset form
        $("#add-event").trigger("reset");
    });

    $("#delete-event-submit").click(function(event){
        // cancel refresh
        event.preventDefault();

        // get input
        let id = $("#delete-event-id").val();

        // delete event
        eventRecommender.deleteEvent(id);

        // update the page
        displayEvents();

        // reset form
        $("#delete-event").trigger("reset");
    });


    // // //Adding more code here:
    // function displayEventsByCategory() {
    //     let content = $('<ul>');
    //     for (let i=0; i<eventRecommender.events.length; i++) {
    //         content.append("<li>" + eventRecommender.events[i].name + "</li>");
    //     }
    //     $("#all-events").html(content);
    // }
    // displayEventsByCategory();


    // $("#category-search-submit").click(function(event){
    //     event.preventDefault();
    //     let id = $("#category-search-id").val();
    //     eventRecommender.findEventsByCategory(id);
    //     displayEventsByCategory();
    
});




/*
Search by date, Search by category, and Save event for user: Using what you learned so far, 
figure out how to add the final three features to the app. Edit the list of users to show 
the saved events for each of the users.
*/
