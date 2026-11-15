
function calculateGrade() {

    let name = document.getElementById("studentName").value;

    let english = Number(document.getElementById("english").value);
    let maths = Number(document.getElementById("maths").value);
    let computer = Number(document.getElementById("computer").value);

    let total = english + maths + computer;

    let average = total / 3;

    let grade;

    if (average >= 70) {
        grade = "A";
    } 
    else if (average >= 60) {
        grade = "B";
    } 
    else if (average >= 50) {
        grade = "C";
    } 
    else if (average >= 45) {
        grade = "D";
    } 
    else if (average >= 40) {
        grade = "E";
    } 
    else {
        grade = "F";
    }

    console.log(name);
    console.log(total);
    console.log(average);
    console.log(grade);

    document.getElementById("result").innerHTML =
        "Student Name: " + name +
        "<br>Total Score: " + total +
        "<br>Average: " + average.toFixed(2) +
        "<br>Grade: " + grade;
}
