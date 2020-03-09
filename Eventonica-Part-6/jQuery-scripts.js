$(document).ready(() => {
  // loop through users array and show on page
  function displayUsers(users) {
    let content = $("<ul>");
    for (let i = 0; i < users.length; i++) {
      content.append("<li>" + users[i].name + "</li>");
    }
    $("#all-users").html(content);
  }

  // get users array from the api
  function getUsers() {
    $.ajax({
      url: "http://localhost:3000/users",
      type: "GET",
      success: function(users) {
        displayUsers(users); // show the results on the page
      }
    });
  }

  getUsers();

  $("#add-user-submit").click(function(event) {
    // cancel refresh
    event.preventDefault();

    // get input
    let name = $("#add-user-name").val();

    // add user
    $.ajax({
      url: "http://localhost:3000/users",
      type: "POST",
      data: { name },
      success: function(message) {
        console.log(message);
        getUsers();
      }
    });

    // reset form
    $("#add-user").trigger("reset");
  });

  $("#delete-user-id-submit").click(function(event) {
    // cancel refresh
    event.preventDefault();

    // get input
    let id = $("#delete-user-id").val();

    // delete user
    $.ajax({
      url: "http://localhost:3000/users/" + id,
      type: "DELETE",
      success: function(message) {
        console.log(message);
        getUsers();
      }
    });

    // reset form
    $("#delete-user").trigger("reset");
  });

  function displayEvents(events) {
    let content = $("<ul>");
    for (let i = 0; i < events.length; i++) {
      content.append("<li>" + events[i].name + "</li>");
    }
    $("#all-events").html(content);
  }

  // get events array from the api
  function getEvents() {
    $.ajax({
      url: "http://localhost:3000/events",
      type: "GET",
      success: function(events) {
        displayEvents(events); // show the results on the page
      }
    });
  }

  getEvents();

  $("#add-event-submit").click(function(event) {
    // cancel refresh
    event.preventDefault();

    // get input
    let name = $("#add-event-name").val();
    let date = $("#add-event-date").val();
    let category = $("#add-event-category").val();

    // add event
    $.ajax({
      url: "http://localhost:3000/events/",
      type: "POST",
      data: { name, date, category },
      success: function(message) {
        console.log(message);
        getEvents();
      }
    });

    // reset form
    $("#add-event").trigger("reset");
  });

  $("#delete-event-submit").click(function(event) {
    // cancel refresh
    event.preventDefault();

    // get input
    let id = $("#delete-event-id").val();

    // delete event
    $.ajax({
      url: "http://localhost:3000/events/" + id,
      type: "DELETE",
      success: function(message) {
        console.log(message);
        getEvents();
      }
    });

    // reset form
    $("#delete-event").trigger("reset");
  });

  //Find events by date
  function displayEventsByDate(searchResults) {
    let content = $("<ul>");
    for (let i = 0; i < searchResults.length; i++) {
      content.append("<li>" + searchResults[i].name + "</li>");
    }
    $("#event-date-results").html(content);
  }

  $("#date-search-submit").click(function(event) {
    event.preventDefault();
    let date = $("#date-search-query").val();

    // find events by date
    $.ajax({
      url: "http://localhost:3000/events/date/" + date,
      type: "GET",
      success: function(events) {
        displayEventsByDate(events);
      }
    });
  });

  //Find events by category
  function displayEventsByCategory(searchResults) {
    let content = $("<ul>");
    for (let i = 0; i < searchResults.length; i++) {
      content.append("<li>" + searchResults[i].name + "</li>");
    }
    $("#event-category-results").html(content);
  }

  $("#category-search-submit").click(function(event) {
    event.preventDefault();
    let category = $("#category-search-query").val();

    // find events by category
    $.ajax({
      url: "http://localhost:3000/events/category/" + category,
      type: "GET",
      success: function(events) {
        displayEventsByCategory(events);
      }
    });
  });

  //Save event for the user
  $("#save-user-event-submit").click(function(event) {
    event.preventDefault();
    let userId = $("#save-user-id").val();
    let eventId = $("#save-event-id").val();

    // save event for the user
    $.ajax({
      url: "http://localhost:3000/user/events/",
      type: "POST",
      data: { userId, eventId },
      success: function(message) {
        console.log(message);
      }
    });
  });

  //Add API of Ticketmaster
  $("#event-keyword-submit").click(function(event) {
    event.preventDefault();

    const keyword = $("#event-keyword-search").val();
    const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=${keyword}&unit=miles&source=ticketmaster&locale=*&countryCode=US&preferredCountry=us`;

    $.getJSON(url, function(data) {
      let addedEvents = [];
      let events = data._embedded.events;

      $.each(events, function(key, event) {
        let id = event.id;
        let name = event.name;
        let date = event.dates.start.localDate;
        let category = event.classifications[0].segment.name;

        $.ajax({
          url: "http://localhost:3000/events/",
          type: "POST",
          data: { id, name, date, category },
          success: function(message) {
            console.log(message);
            getEvents();
          }
        });

        addedEvents.push(`<li id="${key}">${name}</li>`);
      });

      $("<ul/>", {
        class: "import",
        html: addedEvents.join("")
      }).appendTo("#event-keyword-results");
    });
  });
});
