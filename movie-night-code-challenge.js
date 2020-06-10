//Independent Practice - Movie Night

let potentialAtendees = ["Priya", "Ming", "David", "Alex", "Breanna"];

function movieNight(listOfYeses) {
  let confirmedAttendees = [];

  if (listOfYeses.includes("David")) {
    confirmedAttendees.push("David", "Alex");
  } else if (listOfYeses.includes("Ming") || listOfYeses.includes("Priya")) {
    confirmedAttendees.push("Ming", "Priya");
  }

  if (confirmedAttendees.length >= 2) {
    confirmedAttendees.push("Breanna");
  }
  return confirmedAttendees;
}
console.log(movieNight(["Priya", "David", "Alex"]));

//order of importance
//1. David
//2. Alex
//3. Ming
//4. Priya
//5. Breanna
