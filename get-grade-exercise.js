/* Complete the getGrade(score) function. It has one parameter: an integer, 
score, denoting the number of points Julia earned on an exam */

    function getGrade(score) {
    let grade;
    if (25 < score && score <= 30) { 
        grade = "A";
    } else if (20 < score && score <= 25) {
       grade = "B";
    } else if (15 < score && score <= 20) {
        grade = "C";
    } else if (10 < score && score <= 15) {
        grade = "D";
    } else if (5 < score && score <= 10) {
        grade = "E";
    } else if (0 < score && score <= 5) {
        grade = "F";
    } else {
       grade = "Error: Not a valid grade";
    }
    return grade;
    }

    console.log(getGrade(28)); 