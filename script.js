// let Age = prompt('What is your age');
// let Student = prompt('Are you a student (yes/no)');

// let ticketprice;

// console.log("Age entered:", Age);
// console.log("Student status:", Student);

// if (Age < 12) {
//     ticketprice = 5;
//     console.log("Ticket price set to $5");
// } else if ((Age >= 12 && Age <= 18) || Student === "yes") {
//     ticketprice = 8;
//     console.log("Ticket price set to $8 for students aged 12-18 or any student");
// }
//  else if (Age > 18 && Student === "no") {
//     ticketprice = 12;
//     console.log("Ticket price set to $12 for non-student adults");
// } 
// else {
//     ticketprice = 12; // Default case (age > 18 and student == "yes" are covered here)
//     console.log("Ticket price set to $12 (default case)");
// }

// console.log("Final ticket price:", ticketprice);

function calculateTicketPrice() {
    let Age = document.getElementById('age').value;
    let Student = document.getElementById('student').value.toLowerCase(); // Convert to lowercase for case insensitivity

    let ticketprice;

    if (Age < 12) {
        ticketprice = 5;
    } else if ((Age >= 12 && Age <= 18) || Student === "yes") {
        ticketprice = 8;
    } else if (Age > 18 && Student === "no") {
        ticketprice = 12;
    } else {
        ticketprice = 12; // Default case (age > 18 and student == "yes" are covered here)
    }

    displayResult(ticketprice);
}

function displayResult(price) {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Ticket Price: $${price}`;
}
